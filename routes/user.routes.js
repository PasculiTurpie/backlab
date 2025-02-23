const express = require('express');
const { checkApiKey } = require("../middleware/auth.handler");
const router = express.Router();

router.get('/users', checkApiKey, (req, res) => {
  res.json({
    message: 'Hello from the users route!'
  })
})

module.exports = router