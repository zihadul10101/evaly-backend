const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    productName: {
        type: String,
        trim: true
    },
    customerEmail:{
        type: String,
        lowercase: true,
        trim: true 
    },
    productImage: {
        type: String,
        required: true
      
    },
    price: {
        type: Array
    
    },
    status: {
        type: String
    }
},{ timestamps: true });
module.exports = mongoose.model('orderData',OrderSchema)