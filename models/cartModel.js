const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    pId:{
        type:String,
        required : [true],
    },
    name:{
        type:String,
        required : [true],
    },
    priceCents:{
        type:String,
        required : [true],
    },
    image:{
        type:String,
        required : [true],
    },
    quantity:{
        type:Number,
        required : [true],
    }

});

module.exports = mongoose.model("Cart",cartSchema); 