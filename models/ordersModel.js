const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    pId:{
        type:String,
        required:[true]
    },
    image:{
        type:String,
        required:[true]
    },
    name:{
        type:String,
        required:[true]
    },
    priceCents:{
        type :Number,
        required:[true]
    },
    quantity:{
        type :Number,
        required:[true]
    },
    dateCreated:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("Order",orderSchema)