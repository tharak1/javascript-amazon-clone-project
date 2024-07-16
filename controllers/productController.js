const express = require("express")
const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel");

const getAllProducts = asyncHandler(async(req,res)=>{
   const products = await Product.find()
   res.json(products)

})

const createProduct = asyncHandler(async(req,res)=>{
    const {image,name,stars,count,priceCents} = req.body

    if(!image || !name || !stars || !count || !priceCents){
        res.status(400)
        throw new Error("all fields are manditory !!")
    }
    console.log(req.body);
    
        const product = await Product.create({
            image,name,stars,count,priceCents
        })
    if(!product){
        res.status(400)
        throw new Error ("thappu poindi chusko raa eddi");
    }
    else{
        res.status(200).json(product)
    }
})

module.exports = {getAllProducts,createProduct}