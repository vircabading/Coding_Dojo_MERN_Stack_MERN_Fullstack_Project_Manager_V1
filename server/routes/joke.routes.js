/////////////////////////////////////////////////
//  JOKE ROUTE
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

// //// ROUTES //////////////////////////////////
module.exports = app => {
    // **** Create ******************************
    app.post("/api/jokes/new", JokeController.createNewJoke);

    // **** Retrieve ****************************
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.fineOneJoke);

    // **** Update ******************************
    app.put("/api/jokes/update/:id", JokeController.updateJoke);

    // **** Delete ******************************
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
}