exports.validate_POST_req_body=(req,res,next)=>{
  // read the request body

  const idea_object = req.body;

 





  // validate if the idea_name field is present or not

  if(!idea_object["idea_name"]){
    return res.status(400).send({
      message:`Bad request body, "idea_name" field not passed or is empty`
    })
  }

  // validation for author name 

  if(!idea_object["name"]){
    return res.status(400).send({
      message:`Bad request body, "name" field not passed or is empty`
    })
  }


  // validation for the idea_description field

if(!idea_object["idea_description"]){
    return res.status(400).send({
      message:`Bad request body, "idea_description" field not passed or is empty`
    })
  }

  next();


}


// middleware to validate the put request body

exports.validate_PUT_req_body=(req,res,next)=>{
  // read the request body

  const idea_object = req.body;


   //validate if the id field is present

   

  if(!idea_object["id"]){
    return res.status(400).send({
      message:`Bad request body, "id" field not passed or is empty`
      
    })
  }

  // validate if the id in param and id in body matches

  

  if(idea_object["id"]!=req.params.id){
    return res.status(400).send({
      message:`Bad request , "id" field in body ${idea_object["id"]} does not match with id in param ${req.params.id}`
    })
  }
    

  // validate if the idea_name field is present or not


  if(!idea_object["name"]){
    return res.status(400).send({
      message:`Bad request body, "name" field not passed or is empty`
    })
  }

  // validation for author name 

  if(!idea_object["name"]){
    return res.status(400).send({
      message:`Bad request body, "name" field not passed or is empty`
    })
  }


  // validation for the idea_description field

if(!idea_object["idea_description"]){
    return res.status(400).send({
      message:`Bad request body, "idea_description" field not passed or is empty`
    })
  }

  next();


}


