const mongoose = require('mongoose')

function getCurrentDate() {
  return new Date();

}

const AttendanceSchema = new mongoose.Schema(
  {
    docenteAula: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Docente',
      required: true,
    },
    cursoNivel: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      default: getCurrentDate,
    },
    asistencia: {
      type: Number,
      required: true,
    },
    matricula: {
      type: Number,
      required: true,
    },
    herramienta: {
      type: String,
      required: true,
    },
    objetivo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance;