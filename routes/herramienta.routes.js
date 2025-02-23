const express = require('express');
const router = express.Router();

const herramienta = require('../controllers/herramienta.controller')


router.get('/herramienta', herramienta.getTools);

router.get('/herramienta/:id', herramienta.getToolById);
 
router.post('/herramienta', herramienta.createTool);

router.patch('/herramienta/:id', herramienta.updateTool);

router.delete('/herramienta/:id', herramienta.deleteTool);



module.exports = router;