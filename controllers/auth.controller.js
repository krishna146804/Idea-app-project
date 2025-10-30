const usermodel = require ('../models/user.model');

const bcrypt = require ('bcrypt');

const jwt = require ('jsonwebtoken');


const config = require ('../configs/auth.config');

/**
 * Logic for the registration or sign up
 */

exports.signup = async (req,res)=>{

  /**
   * Create the user in the user model
   */
  const userObj ={
    name:req.body.name,
    userId :req.body.userId,
    password:bcrypt.hashSync(req.body.password,8),
    email:req.body.email,
  }

  try{
    const userCreated = await usermodel.create(userObj);
    const postResponse = {
      name:userCreated.name,
      userId:userCreated.userId,
      email:userCreated.email,
      createdAt:userCreated.createdAt,
      updateAt:userCreated.updateAt,
      message:"Registration successful"
    };
    res.status(201).send(postResponse);
  }catch(err){
    console.log("some error while saving the user in the DB",err.message);
    res.status(500).send({
      message:"some internal error while saving the user"
    })
  }

}


/**
 * Logic for the sign in 
 */

exports.signin = async(req,res)=>{
  // check if the user is exists
  const user = await usermodel.findOne({userId:req.body.userId});
  console.log(user);
  if(user==null){
    res.status(400).send({
      message:"Failed! User id does not exit"
    })
    

  }


  // if the password is matches
  const passwordIsValid = bcrypt.compareSync(req.body.password,user.password);

  if(!passwordIsValid){
    res.status(400).send({
      message:"Failed! Password is not matching..."
    })
  }




  // return  the jwt token generated as response
  const token = jwt.sign({id:user.userId},config.secret,{
    expiresIn:60
  });

  res.status(200).send({
    name:user.name,
    userId:user.userId,
    email:user.email,
    accessToken:token
  });
  

}