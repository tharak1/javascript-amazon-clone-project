const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const connectToDatabase = asyncHandler(async()=>{
    const conn = await mongoose.connect(process.env.DBCONNECTION)
    console.log("database connected : ",conn.connection.host,conn.connection.name);
})

module.exports = connectToDatabase;