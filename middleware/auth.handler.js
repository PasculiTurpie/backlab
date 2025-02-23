const boom = require("@hapi/boom");
require('dotenv').config();

const Key = process.env.API_KEY;
function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === Key) {
    next();
  } else {
    next(boom.unauthorized(res.status(401).json({ message: "No Autorizado" })));
  }
  
}
module.exports = { checkApiKey }