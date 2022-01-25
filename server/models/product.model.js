/////////////////////////////////////////////////
//  PRODUCT MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMAS /////////////////////////////////
const ProductSchema = new mongoose.Schema({
	title: {
        type: String,
        required: true,
        minlength: 3
    }, 
    price: {
        type: Number,
        min: 0.01
    },
    description: {
        type: String
    }
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Product = mongoose.model("Product", ProductSchema);

// **** Export Model ********
module.exports = Product;