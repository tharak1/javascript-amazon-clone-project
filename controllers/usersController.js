const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async(req,res)=>{
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({message:"error"})
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        res.json({error:"user already exists"});
    }
    else{
        const hashedPassword = await bcrypt.hash(password,8);
    const user = await User.create({
        username , 
        password:hashedPassword,
        email,
    });

    if(!user){
        res.status(400).json({message:"errror"});
    }
    else{
        res.status(200).json(user)
    }
    }

    
});

const loginUser = asyncHandler(async(req,res)=>{
    const { email , password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser && (await bcrypt.compare(password,existingUser.password))){
        const token = jwt.sign(
            {
                user:{
                    username:existingUser.username,
                    email:existingUser.email,
                    id : existingUser.id,
                },
                
            },
            process.env.TOKEN,
            
        );
        res.json({token:token});
    }
    else{
        res.json({message:"plase check your credentials and try again or sign up "});
    }
});


const getUser = asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

const deleteUser = asyncHandler(async(req,res)=>{
    await User.deleteMany();
    res.status(200).json({message:"success"})
});

module.exports = {registerUser,loginUser,getUser,deleteUser};