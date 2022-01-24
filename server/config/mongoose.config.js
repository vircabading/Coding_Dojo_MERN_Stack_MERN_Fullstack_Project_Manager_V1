/////////////////////////////////////////////////
//  MONGOOSE CONFIG
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");
const DATABASE_NAME = "jokes_db"

// //// CONNECT SERVER TO DATABASE //////////////
mongoose.connect("mongodb://localhost/" + DATABASE_NAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("🌮🌮🌮 Established a connection to the database 🌮🌮🌮"))
	.catch(err => console.log(`🤷🤷🤷 Something went wrong when connecting to the database 🤷🤷🤷`, err));