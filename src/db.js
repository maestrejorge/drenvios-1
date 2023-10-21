const { MongoClient } = require('mongodb');
const mongodbUrl = require('./url.js');



async function connectToDatabase() {
    const client = new MongoClient(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        return client.db('challenge');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Re-lanza el error para que el controlador lo maneje
    }
}


module.exports = connectToDatabase;