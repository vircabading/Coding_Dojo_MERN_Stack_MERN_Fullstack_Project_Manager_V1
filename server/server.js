/////////////////////////////////////////////////
//  SERVER JAVASCRIPT
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const express = require("express");
const app = express();
const PORT = 8000;

// //// MIDDLE-WARE /////////////////////////////
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(PORT, () => console.log(`🦄🦄🦄 The server is all fired up on port ${PORT} 🦄🦄🦄`));