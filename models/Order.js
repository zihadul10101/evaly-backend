const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
        type: String
      
    },
    price: {
        type: Array
    
    }
},{ timestamps: true });
module.exports = mongoose.model('order',OrderSchema)