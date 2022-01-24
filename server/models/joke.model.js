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
		minlength: 10
	},
	punchline: {
		type: String,
		required: true,
		minlength: 3
	}
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Joke = mongoose.model("Joke", JokeSchema);

// **** Export Model ********
module.exports = Joke;