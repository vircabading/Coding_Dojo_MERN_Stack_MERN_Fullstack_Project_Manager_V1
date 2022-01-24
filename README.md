# Jokes API Read Me

Sumnary: Server that uses MongoDb Server to supply jokes as an API

Program Origin: Coding Dojo > MERN Stack > MongoDb > Mongoose

Language: Javascript

Database: MongoDb

Library: Express, Mongoose

Platform: Visual Studio Code, Post-Man

------------

# Objectives

1. Create a project folder named "Jokes"

2. within "Jokes" create a modularized folder structure (server ==> controllers, routes, models, config, server.js)

3. initialize a package json file using npm

4. install express and mongoose

5. create a mongoose.config.js file and setup your mongoose.connect function

6. create a jokes.model.js, jokes.controller.js, and a jokes.routes.js in the applicable folders

7. in the jokes.model file create a JokeSchema and export the mongoose.model("joke", JokeSchema)

8. in the jokes.controller import your model from the models file

9. Export a function to get all jokes

10. Export a function to get a single joke

11. Export a function to create a joke

12. Export a function to update a joke

13. Export a function to delete a joke

14. in the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe

15. In your server.js file: setup express, import joke routes, and run server

16. Use Postman to create new jokes and use the browser to view them

17. Use Postman to perform the POST DELETE and PUT operations and use the browser to GET them