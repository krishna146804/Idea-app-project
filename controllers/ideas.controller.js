const ideas = require ('../models/ideas.model');

let id =3 ; // initial last id number of the idea stored

/**
 * controllers to fetch all the idea from the ideal model file
 */

exports.getAllIdeas = (req,res)=>{
  // I will have to read the idea from the ideal model file 

  res.status(200).send(ideas);
}

/**
 * Controllers to fetch the based on the idea id
 */

exports.getIdeaBasedOnId=(req,res)=>{
  const idea_id = req.params.id;

  if(ideas[idea_id]){
    res.status(200).send(ideas[idea_id]);
  
  }else{
    console.log(`Idea with the id :${idea_id} is not present`);
    res.status(404).send({
      message:`Idea with the id :${idea_id} is not present`
    });
  }


}


/**
 * Controllers to create a new ideas
 */

exports.createIdea= (req,res)=>{
  // Logic to create the idea

  id++;

  // read the request body

  idea_object = req.body;

  idea_object["id"]=id;

  ideas[id]=idea_object;

  // Return the response

  res.status(201).send(idea_object);

}

/**
 * 
 * Define the controller for updating the idea 
 */

exports.updateIdea=(req,res)=>{
  // Read the idea id from the request param

  const idea_id = req.params.id;

  // check the idea is present or not in the idea model

  if(ideas[idea_id]){

    // Read the reuest body

    const idea_object = req.body;
     
    // update the idea object

    ideas[idea_id]=idea_object;

    //
    res.status(200).send(idea_object);
  }
  // Idea is not present
  else{
    res.status(404).send({
      message:`Idea with the id :${idea_id} is not present`
    })
  }
}


/**
 * Deleting the idea from the ideas modea
 */

exports.deleteIdea=(req,res)=>{

  // Read the idea id from the reques param

  const idea_id = req.params.id;

  // check the idea is present or not in the idea model
  
  if (ideas[idea_id]){
    // delete the idea form the idea model

    delete ideas[idea_id];
    res.status(200).send({
      message:`Idea with the id :${idea_id} is successfully deleted`
    });
  }else{
    res.status(404).send({
      message:`Idea with the id :${idea_id} is not present`
    })
  }
}


