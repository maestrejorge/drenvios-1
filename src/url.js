const dotenv = require('dotenv');
dotenv.config();

const mongodbUrl = `mongodb://${process.env.USERNAME_MONGODB}:${process.env.PASS_MONGODB}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

module.exports = mongodbUrl;
