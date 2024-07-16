const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
    image:{
        type : String,
        required : [true],
    },
    name:{
        type : String,
        required : [true],
    },
    stars:{
            type : Number,
        },
    count:{
            type : Number,
        },
    priceCents:{
        type : Number,
    },
});

productsSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

productsSchema.set('toJSON',{
    virtuals : true,
});

module.exports = mongoose.model("Product",productsSchema);