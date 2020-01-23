const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  if(!token) {
    return res.status(401).json({message: 'Access Deined: No Token'})
  }

try{
  const decoded = jwt.verify(token, config.get('jwtSecret'));

  req.user = decoded;
  next();

} catch (e) {
  res.status(400).json({message: 'Invaild Token'})
}
  
}

module.exports = auth;