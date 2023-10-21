
  const server = require("./src/app.js")
  const PORT = process.env.PORT || 3001;
  server.listen(PORT, async () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
