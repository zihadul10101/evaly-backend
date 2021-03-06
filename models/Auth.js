const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({

    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 200,
        required: true,
        unique: false,
    },
    role: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('auth', AuthSchema);