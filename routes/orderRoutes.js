const express = require("express")
const { createOrder, getOrders, deleteOrders } = require("../controllers/orderController");
const validateToken = require("../middleware/validateToken");
const router = express.Router()

router.route("/:id").post(validateToken, createOrder);
router.route("/").get(validateToken,getOrders).delete(deleteOrders)
module.exports = router