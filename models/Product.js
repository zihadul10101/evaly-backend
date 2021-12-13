const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    price: {
        type: Array,
        required: true,
        unique: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);