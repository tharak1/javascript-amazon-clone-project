const express = require("express");
const connectToDatabase = require("./config/dbConnect");
const app = express();
const dontenv = require("dotenv").config();
const cors = require("cors")
const port = process.env.PORT || 5001


connectToDatabase();

app.use(
    cors({
        origin:"http://127.0.0.1:5500",
    })
)
app.use(express.json());

app.use("/api/products",require("./routes/productRoutes"));
app.use("/api/cart",require("./routes/cartRoutes"));
app.use("/api/order",require("./routes/orderRoutes"));
app.use("/api/user",require("./routes/userRoutes"));

app.listen(port , ()=>{
    console.log("server is live at : ",port);
})

