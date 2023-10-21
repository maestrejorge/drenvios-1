const connectToDatabase = require("../db.js");

async function getUserById(userId) {
    try {
        const db = await connectToDatabase();
        if(!db) throw "No dataBase Found"
        const user = await db.collection('users').findOne({ id: userId });
        if(!user) throw "No User Found"
        return user;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getUserById
};