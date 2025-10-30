const userModel = require("../models/user.model");


verifyuserReqBody = async(req,res,next) =>{
  // Verification code 

  if(!req.body.name){
    res.status(400).send({
      message:"Failed! Name is not provided"
    })
    return;
  }
  // user ID
  if(!req.body.userId){
    res.status(400).send({
      message:"Failed! User ID is not provided"
    })
    return;
  }

  // Check for the duplicate user ID
  
  const user = await userModel.findOne({userId:req.body.userId})
    if(user != null){
    res.status(400).send({
      message:"Failed! User ID is duplicate"
    })
    return;
  }

  // Email id validation
  if(!req.body.email){
    res.status(400).send({
      message:"Failed! Email is not provided"
    })
    return;
  }

  // Check for the duplicate email
  const email = await userModel.findOne({email:req.body.email})
  if(email != null){
    res.status(400).send({
      message:"Failed! Email is duplicate"
    })
    return;
  }

  next();
}


module.exports = {
  verifyuserReqBody: verifyuserReqBody
}