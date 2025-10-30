const config = require('../configs/auth.config');

const jwt= require('jsonwebtoken');


const verifyToken = (req,res,next)=>{
  // verification

// fetch the access token from the header

const token = req.headers["x-access-token"];

if(!token){
  return res.status(403).send({
    message:"No token provided"
  })
}


/**
 * check if the token is still valid
 */
jwt.verify(token,config.secret,(err,decode)=>{
  if(err){
    return res.status(401).send({
      message:'unAuthorized'
    });
  }
  next();
})
}

module.exports={
  verifyToken:verifyToken
}