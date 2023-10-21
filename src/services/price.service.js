const connectToDatabase = require("../db.js");

async function getPriceForUserAndProduct(userId, productName) {
    try {
        const db = await connectToDatabase();
       // const users= await db.collection("users").find({}).toArray();
       // console.log(users)
        const user = await db.collection('users').findOne({ id: userId });

        if (!user) {
            return null; // El usuario no existe
        }

        const product = await db.collection('products').findOne({ nombre: productName });
        if (!product) {
            return null; // El producto no existe
        }

        // Verificar si el usuario tiene un precio especial para este producto
        const specialPrice = user.metadata.precios_especiales[productName];
        if (specialPrice) {
            return specialPrice;                                                                                                                                            

        }

        return product.precio_base; // Si no hay precio especial, usar el precio base
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPriceForUserAndProduct
};