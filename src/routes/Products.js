const { Router } = require("express");
const {
    getAvailableProducts
}= require("../controller/product.controller.js")
const productRoutes = Router()

productRoutes.get("/",getAvailableProducts )


module.exports = productRoutes;