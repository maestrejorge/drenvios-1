
  const server = require("./src/app.js")
  const connectToDatabase = require("./src/db.js")
  const PORT = process.env.PORT || 3001;
  server.listen(PORT, async () => {
     await connectToDatabase()
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
