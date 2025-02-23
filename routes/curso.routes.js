const express = require('express')
const Curso = require('../controllers/curso.controller')
const router = express.Router();



router.get("/curso", Curso.getCurso);
router.get('/curso/:id', Curso.getIdCurso);
router.post('/curso', Curso.createCurso);
router.patch('/curso/:id', Curso.updateCurso);


module.exports = router;