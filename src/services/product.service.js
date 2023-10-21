const connectToDatabase = require("../db.js");

async function getAllProducts() {
    try {
        const db = await connectToDatabase();
        if (!db) throw "No Data "
        return await db.collection('products').find({}).toArray();
    } catch (error) {
        throw error;
    }
}


async function getProductByName(productName) {
    try {
        const db = await connectToDatabase();
        const product = await db.collection('products').findOne({ nombre: productName });
        return product;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductByName
};