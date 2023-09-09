const Product = require('../models/product')
const { cloudinary } = require('../cloudinary')

module.exports.index = async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
}

module.exports.renderNewForm = (req, res) => {
    res.render('products/new')
}

module.exports.createProduct = async (req, res, next) => {
    if (req.files.length > 5) {
        req.flash('error', 'Cannot upload more than 5 images')
        return res.redirect('/products/new')
    } else if (req.files.length == 0) {
        req.flash('error', 'You must upload at least 1 image!')
        return res.redirect('/products/new')
    }
    const product = new Product(req.body.product)
    product.images = req.files.map(f => ({url: f.path, filename: f.filename}))
    product.author = req.user._id
    await product.save()
    console.log(product)
    req.flash('success', 'Successfully added new product!')
    res.redirect(`/products/${product._id}`)
}

module.exports.showProduct = async (req, res) => {

    const product = await Product.findById(req.params.id)

    // below basically we're saying on the product thing we want reviews and inside reviews we want authors

    .populate( {path: 'reviews', populate: {path: 'author'} } )

    // then down here (below) we're just saying we want authors of the products

    .populate('author')

    if (!product) {
        req.flash('error', 'Product not found!')
        return res.redirect('/electronics')
    }

    res.render('products/show', { product })
    
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        req.flash('error', 'Product not found!')
        return res.redirect('/electronics')
    }
    res.render('products/edit', { product })
}

module.exports.updateProduct = async (req, res) => {
    const { id } = req.params
    const find_images = await Product.findById(id)
    if (req.body.deleteImages && req.body.deleteImages.length == find_images.images.length) {
        req.flash('error', 'You cannot delete all images off the product! (at least 1 must remain)')
        return res.redirect(`/products/${id}/edit`)
    }
    const product = await Product.findByIdAndUpdate(id, {...req.body.product})
    if(req.body.deleteImages) {
        for(let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename)
        }
        await product.updateOne({ $pull: {images: {filename: {$in: req.body.deleteImages}}}})
        console.log(product)
    }
    req.flash('success', 'Successfully updated product!')
    res.redirect(`/products/${product._id}`)
}

module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    req.flash('error', 'A particular product has been removed!')
    res.redirect('/electronics')
}