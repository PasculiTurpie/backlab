const express = require('express');
const Docente = require('../controllers/docente.controller')
const router = express.Router();

router.get('/docente', Docente.getDocentes)
router.get("/docente/:id", Docente.getDocente);
router.post("/docente", Docente.createDocente);
router.patch("/docente/:id", Docente.updateDocente);


module.exports = router;