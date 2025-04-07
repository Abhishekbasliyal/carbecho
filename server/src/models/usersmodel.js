const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
    },
    firstName: {
        type: String,
        required: false, // Made optional for Google
    },
    lastName: {
        type: String,
        required: false,
    },
    contactNumber: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: false, // Google login won’t need this
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true, // allow null values
    },
}, { timestamps: true });

userSchema.plugin(AutoIncrement, { inc_field: 'userId', start_seq: 5000 });

const User = mongoose.model('User', userSchema);
module.exports = User;
