/**
 * server file- this is the startpoit of the app
 */

const express = require ('express');

const app = express();
require('dotenv').config(); // it is used to bring the env file into use

const mongoose = require ('mongoose');



/**
 * Make the mongodb connection
 */
(async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

  }catch(err){
    console.log('Mongo Error',err);
  }
  
})()

const PORT = 7070;

app.use(express.json()); //It is used to convert the json data into the javaScript object it is a middleware


//   Bring Morgan  into use

const morgan = require ('morgan');

app.use(morgan('dev'));

// Bring the idea route into use

const idea_route =  require ("./routers/ideas.routes");
app.use('/ideas_app/v1',idea_route);



// Bring the auth route into use

const auth_route = require ('./routers/auth.routes');
app.use('/ideas_app/v1',auth_route);


app.listen(PORT,()=>{

  console.log(`server is running on port num : ${PORT}`);
})