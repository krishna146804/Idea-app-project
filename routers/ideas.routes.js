const express = require ('express');

const route = express.Router();

const idea_controller = require ('../controllers/ideas.controller');

const idea_mv = require ('../middlewares/ideas.mw');
/**
 * start define the routes
 */

/**
 * Router for fetch all ideas - 127.0.0.1:7070/ideas_app/v1/ideas
 */

route.get('/ideas',idea_controller.getAllIdeas);




/**
 * Route for fetching the idea based on the idea id
 */

route.get('/ideas/:id',idea_controller.getIdeaBasedOnId);


/**
 * Route for creating the new idea
 */

route.post('/ideas',idea_mv.validate_POST_req_body,idea_controller.createIdea)

/**
 * Route for updating the idea
 */

route.put('/ideas/:id',idea_mv.validate_PUT_req_body,idea_controller.updateIdea);


/**
 * Route for deleting the idea
 */

route.delete('/ideas/:id',idea_controller.deleteIdea);

module.exports = route;




