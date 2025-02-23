const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    nombreTool: {
      type: String,
      required: [true, " Ingrese el nombre de la herramienta tic a utilizar"],
    },
    objetivo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Objetivo",
      },
    ],
  },
  { timestamps: true }
);

const Tool = mongoose.model("Tool", ToolSchema);
module.exports = Tool;