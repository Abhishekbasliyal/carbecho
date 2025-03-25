const mongoose = require('mongoose');


const UserSchema=new mongoose.Schema({
    Name:{
        type: String,
        required:[true,'Name is required'],
        trim:true,
        maxlength:[25,'name can maximum have 25 characters']
    },
    Age:{
        type:Number,
        required:true,
    },
    Address:{
        Locality:{
            required:true,
            type:String,
        },
        City:{
            type:String,
            required:true,
        },
        State:{
            type:String,
            required:true
        },
        PostalCode:{
            type:Number,
            required:true
        }

    }

});

module.exports= mongoose.model('User',UserSchema);