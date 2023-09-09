const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./review')

const ProductSchema = new Schema({

    title: String,
    price: Number,

    images: [
        {url: String,
        filename: String}
    ],

    description: String,
    
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    producer: String,
    quantity: Number,
    category: String
    
})

ProductSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Product', ProductSchema)