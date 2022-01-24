/////////////////////////////////////////////////
//  JOKE CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Joke = require("../models/joke.model");

// //// CREATE //////////////////////////////////

/**
 * Create a New Joke
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(
            newlyCreatedJoke => res.json({ 
                joke: newlyCreatedJoke,
                message: "🍻🍻🍻 Success: Created a Joke 🍻🍻🍻"
            })
        )
        .catch(
            err => res.json({ 
                message: "🤦🤦🏼🤦 Create was not successful 🤦🤦🏼🤦🏼", 
                error: err 
            })
        );
    };

// //// RETRIEVE ////////////////////////////////

/***
 * Find All Jokes
 * @param (*) req
 * @param (*) res
 * @returns JSON with a List of Jokes
 */
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => 
            res.json({
                jokes: allJokes,
                message: "🍟🍟🍟 Success: Found All Jokes 🍟🍟🍟"
            })
        )
        .catch( err =>
            res.json({
                message: "🤚🏼🤚🏼🤚🏼 Failure: UnAble to Find All Jokes ✋🏼✋🏼✋🏼",
                error: err
            })
        )
};

/**
 * Find One Joke by ID (on Request Params)
 * @param {*} req 
 * @param {*} res
 * @returns JSON with a Joke that matches id given in req.params
 */
module.exports.fineOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(
            aJoke => res.json ({
                joke: aJoke,
                message: "🦄🦄🦄 Success: Found a Joke 🦄🦄🦄"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Find a Joke 🛑🛑🛑",
                error: err
            })
        )
};

// //// UPDATE //////////////////////////////////

/**
 * Update a Joke by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.updateJoke = (req,res) => {
    Joke.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedJoke => res.json({
                joke: updatedJoke,
                message: "🍔🍔🍔 Success: Update a Joke 🍔🍔🍔"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Update a Joke 🛑🛑🛑",
                error: err
            })
        )
};

// //// DELETE //////////////////////////////////

/**
 * Delete a Joke by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.deleteOneJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: "🎉🎉🎉 Success: Deleted a Joke  🎉🎉🎉"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Delete a Joke 🛑🛑🛑",
                error: err
            })
        )
};