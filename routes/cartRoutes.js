const express = require("express")
const { addToCart, getCartItems, deleteAlllCartItems, cartCount, findById } = require("../controllers/cartController");
const validateToken = require("../middleware/validateToken");
const router = express.Router()

router.route("/:id").post(validateToken, addToCart);
router.route("/").get(validateToken,getCartItems).delete(deleteAlllCartItems)
router.route("/count").get(validateToken,cartCount)
router.route("/find").get(validateToken,findById)
module.exports = router;