const mongoose = require("mongoose");

const ObjetivoSchema = new mongoose.Schema(
  {
    nombreObjetivo: {
      type: String,
      required: [true, "Ingrese el nombre del Objetivo"],
    },
  },
  { timestamps: true }
);
const Objetivo = mongoose.model("Objetivo", ObjetivoSchema);
module.exports = Objetivo;
