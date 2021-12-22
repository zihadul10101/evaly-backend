const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    title: {
        type: String,
    },
    photo: {
        type: String,
      
    },
    description: {
        type: String,
    },
    price: {
        type: Array
    }
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);