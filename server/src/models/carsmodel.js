const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    Brand: {
        type: String,
        required: [true, 'Must provide brand name'],
        trim: true,
        maxlength: [25, 'Max length is 25 for the brand']
    },
    Model: {
        type: String,
        required: [true, 'Must provide model name'],
        trim: true,
        maxlength: [25, 'Max length is 25 for the model']
    },
    Year: {
        type: Number,
        required: [true, 'Must provide the year of production'],
        validate: {
            validator: (value) => value.toString().length === 4, 
            message: 'Year must be a 4-digit number'
        }
    },
    Age: {
        type: Number,
        required: [true, 'Must provide the age']
    },
    kmDriven: {
        type: Number,
        required: [true, 'Must provide the km driven']
    },
    Transmission: {
        type: String,
        required: [true, 'Must provide transmission type'],
        trim: true
    },
    Owner: {
        type: String,
        required: [true, 'Must provide the owner'],
        trim: true
    },
    FuelType: {
        type: String,
        required: [true, 'FuelType is required'],
        trim: true
    },
    PostedDate: {
        type: Date,
        default: Date.now 
    },
    AdditionalInfo: {
        type: String,
        trim: true
    },
    AskPrice: {
        type: Number,
        required: [true, 'Must enter an asking price']
    }
},
{collection : 'Cars'});

module.exports = mongoose.model('Car', CarSchema);
