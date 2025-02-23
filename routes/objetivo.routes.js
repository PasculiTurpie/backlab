const express = require('express');
const router = express.Router();
const Objetivo = require("../controllers/objetivo.controller");


router.get('/objetivo', Objetivo.getObjetivos);

router.get('/objetivo/:id', Objetivo.getIdObjetivo);

router.post('/objetivo', Objetivo.createObjetivo);

router.patch('/objetivo/:id', Objetivo.updateObjetivo);

router.delete('/objetivo/:id', Objetivo.deleteObjetivo);




module.exports = router;
