const { getAllProducts } = require("../services/product.service.js");

async function getAvailableProducts(req, res) {
    try {
        const allProducts = await getAllProducts();
        const availableProducts = allProducts.filter(product => product.existencia > 0);
        res.json(availableProducts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAvailableProducts
};