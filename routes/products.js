const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const {isLoggedIn, isAuthor, validateProduct} = require('../middleware')
const products = require('../controllers/products')
const multer = require('multer')

const {storage} = require('../cloudinary')
const upload = multer({storage})

// VIEW ALL PRODUCTS
router.get('/', catchAsync(products.index))

// CREATION PAGE FOR NEW PRODUCT, REQUIRES LOGIN
router.get('/new', isLoggedIn, products.renderNewForm)

// POST ROUTE FOR CREATION OF NEW PRODUCT
router.post('/', isLoggedIn, upload.array('image'), validateProduct, catchAsync(products.createProduct))

// VIEWING PAGE OF A PARTICULAR PRODUCT, REQUIRES NO LOGIN
router.get('/:id', catchAsync(products.showProduct))

// EDIT PAGE FOR PARTICULAR PRODUCT
router.get('/:id/edit', isLoggedIn , isAuthor ,catchAsync(products.renderEditForm))

// PUT ROUTE FOR EDITING PRODUCT, EDIT DATA IS SENT HERE
router.put('/:id', isLoggedIn, isAuthor, validateProduct, catchAsync(products.updateProduct))

// DELETE ROUTE FOR PRODUCT
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(products.deleteProduct))

module.exports = router