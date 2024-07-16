const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel")

const addToCart = asyncHandler(async(req,res)=>{
    const productDetails = await Product.findById(req.params.id)

    const cartItem = await Cart.create({
        user_id:req.user.id,
        pId : productDetails.id,
        name : productDetails.name,
        priceCents :productDetails.priceCents,
        image:productDetails.image,
        quantity:1,
        
    });
    res.json(cartItem)

});

const getCartItems = asyncHandler(async(req,res)=>{
    const items = await Cart.find({user_id : req.user.id});
    res.json(items)

});

const cartCount = asyncHandler(async(req,res)=>{
    const cartCount = await Cart.countDocuments({user_id : req.user.id});
    res.json({count : cartCount});
});

const deleteAlllCartItems = asyncHandler(async(req,res)=>{
    await Cart.deleteMany();
    res.status(200).json({message:"success"})
});

const findById = asyncHandler(async(req,res)=>{
    let filter = {};
    if(req.query.pId){
        filter = {user_id : req.user.id,pId:req.query.pId};
    }
    console.log(filter);
    const item = await Cart.findOne(filter);

    if(item){
        res.status(200).send("true")
    }
    else{
        res.status(200).send("false")
    }
})

module.exports = {addToCart,getCartItems,deleteAlllCartItems,cartCount,findById}