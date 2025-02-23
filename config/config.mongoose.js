const mongoose = require("mongoose");
require('dotenv').config()

const URI = process.env.URI
console.log(URI)

mongoose.connect(URI)
  .then((db) => console.log("Connectado a la DB"))
  .catch((err) => console.error("Error al conectar", err));