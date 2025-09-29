/**
 * server file- this is the startpoit of the app
 */

const express = require ('express');

const app = express();

const PORT = 7070;

app.use(express.json()); //It is used to convert the json data into the javaScript object it is a middleware


//   Bring Morgan  into use

const morgan = require ('morgan');

app.use(morgan('dev'));

// Bring the idea route into use

const idea_route =  require ("./routers/ideas.routes");
app.use('/ideas_app/v1',idea_route);



app.listen(PORT,()=>{

  console.log(`server is running on port num : ${PORT}`);
})