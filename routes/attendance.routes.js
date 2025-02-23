const express = require("express");
const router = express.Router();
const Attendance = require("../controllers/asistencia.controller");

router.get("/asistencia", Attendance.findAttendance);
router.post("/asistencia", Attendance.createAttendance);


module.exports = router;
