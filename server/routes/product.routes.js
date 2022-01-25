/////////////////////////////////////////////////
//  PRODUCT ROUTES
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

// //// ROUTES //////////////////////////////////
module.exports = app => {
    // **** Create ******************************
    app.post("/api/products/new", ProductController.createProduct )

    // **** Retrieve ****************************
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.fineOneProduct);

    // **** Update ******************************
    app.put("/api/products/update/:id", ProductController.updateProduct);

    // **** Delete ******************************
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}