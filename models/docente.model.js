const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");

const DocenteSchema = new mongoose.Schema(
  {
    nombreDocente: {
      type: String,
      required: [true, "Ingrese el nombre del Docente"],
    },
    apellidoDocente: {
      type: String,
      required: [true, "Ingrese el apellido del Docente"],
    },
    emailDocente: {
      type: String,
      required: [true, "Ingrese el email del Docente"],
      unique: [true, "El email del docente ya existe!!!"]
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    curso: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Curso",
        default: null,
      }
    ]
  },
  { timestamps: true }
);
const Docente = mongoose.model("Docente", DocenteSchema);
DocenteSchema.plugin(uniqueValidator, { message: `El email {VALUE} ya existe!!` });
module.exports = Docente;