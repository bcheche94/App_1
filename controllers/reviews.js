const Review = require('../models/review')
const Product = require('../models/product')

module.exports.createReview = async (req, res) => {
    const product = await Product.findById(req.params.id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    product.reviews.push(review)
    await review.save()
    await product.save()
    req.flash('success', 'Successfully created new review!')
    res.redirect(`/products/${product._id}`)
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewID } = req.params
    await Review.findByIdAndDelete(reviewID)
    await Product.findByIdAndUpdate(id, {$pull: {reviews: reviewID}})
    req.flash('error', 'Your review has been removed!')
    res.redirect(`/products/${id}`)
}