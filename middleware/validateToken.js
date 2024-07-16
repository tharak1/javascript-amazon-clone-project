const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler((req,res,next)=>{
    let token;
    let authHeader  = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token , process.env.TOKEN,(err,decoded) =>{
            if(err){
                res.status(401);
                throw new Error("tokrn not valid ");
            }
            else{
                req.user = decoded.user;
                next();
            }
        });
    }
    if(!token){
        res.status(401);
        throw new Error("token not found ");
    }
    
});
module.exports= validateToken;