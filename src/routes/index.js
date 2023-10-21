const { Router } = require('express');
const product = require("./Products.js")
const price = require("./Price.js")

const router = Router();


router.use("/products", product)
router.use("/", price)

module.exports = router;