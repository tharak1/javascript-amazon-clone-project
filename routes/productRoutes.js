const express = require("express")
const { getAllProducts, createProduct } = require("../controllers/productController")
const router = express.Router()

router.route("/get").get(getAllProducts);
router.route("/post").post(createProduct);
module.exports = router