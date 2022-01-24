/////////////////////////////////////////////////
//  JOKE MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMAS /////////////////////////////////
const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: true,
		minlength: [10, `{PATH} must be at least 10 characters long` ]
	},
	punchline: {
		type: String,
		required: true,
		minlength: [3, `{PATH} must be at least 3 characters long`]
	}
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Joke = mongoose.model("Joke", JokeSchema);

// **** Export Model ********
module.exports = Joke;