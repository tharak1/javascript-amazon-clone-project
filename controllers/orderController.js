const express = require("express")
const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")
const Cart = require("../models/cartModel")
const Order = require("../models/ordersModel")

const createOrder = asyncHandler(async(req,res)=>{
    const cartItems = await Cart.findById(req.params.id)
    const orders = await Order.create({
        user_id:req.user.id,
        pId : cartItems.pId,
        image:cartItems.image,
        name :cartItems.name,
        priceCents:cartItems.priceCents,
        quantity:cartItems.quantity,
        user_id:req.user.id,
    })

    res.status(200).json(orders)
    
});

const getOrders = asyncHandler(async(req,res)=>{
    const orders = await Order.find({user_id : req.user.id});
    if(!orders){
        res.send(false);
    }
    else{
        res.json(orders);
    }
});

const deleteOrders = asyncHandler(async(req,res)=>{
    await Order.deleteMany();
    res.status(200).json({message:"success"})
});

module.exports = {createOrder,getOrders,deleteOrders}