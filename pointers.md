***Preparing for REACT***
* Build a JSON API
    - Back-End JSON API: Express
* Build a Single Page Application (SPA) that consumes my own JSON API
    - Front-End Technology: React

<Required>
* Postman = where all API route testing occurs. This cannot be accomplished via c9

*How an API works in Node.js*
* Node was purpose built to embrace asynchronous functions, which is particularly useful in dealing with user input and corresponding output.
* This idea means that Node is the perfect server side technology for a front-end UI that has a lot of moving parts, or a front-end with a lot of interactivity, or a front-end with a lot of heavy design elements.
* Thus, create GET, POST, GET, PUT, DELETE routes for a specific data model, and connect that model to a front end by using AJAX calls.
* In practice, I will have pages that will request information from my own API, thus, I must separate the API routes from the non-API routes

*API Overview*
* The Data
Field           Type
=========================
name:           String,
completed:      Boolean,
createdDate:    Date
_I will use these data fields to create the model that the API will CRUD to_

* API Endpoints (which are just RESTful routes)
Verb        Route                   Description
=================================================
GET         /api/todos              List all to-dos
POST        /api/todos              Create new to-do
GET         /api/todos/:todoID      Retrieve a to-do
PUT         /api/todos/:todoID      Update a to-do
DELETE      /api/todos/:todoID      Delete a to-do
_These API “endpoints" are simply unique URLs that represents objects or collections of objects_


*API Walkthrough*
* npm init
* specify the js file to be used
* create that js file
* npm install express --save
* npm install nodemon --save
* npm install mongoose --save
* npm install body-parser --save
    - this package takes in the body as a string and converts it into an object that I can use
* setup the index file
    const express = require("express");
    const app     = express();
    const port    = process.env.PORT || 3000;
    
    app.get("/", function(req, res){
        res.send("VERIFYING FUNCTIONALITY OF THE root ROUTE");
    });
    
    app.listen(port, function(){
        console.log("===============================");
        console.log("SERVER OPERATING ON PORT: " + process.env.PORT);
        console.log("===============================");
    })
* Install mongoDB and mongoose
    sudo apt-get install -y mongodb-org
    mkdir data
    echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
    chmod a+x mongod
    ./mongod
* Add the following to the index.js file directly above the server. This code will let me know that the database is connected.
    mongoose.connect("mongodb://localhost/forum-api", function(){
        console.log("===============================");
        console.log("CONNECTED TO MONGO DATABASE");
        console.log("===============================");
    });
* Connect express app to mongoDB via mongoose
    - mkdir models
    - touch models/index.js 
    - touch models/todo.js
* Define to-do schema
    - After creating the schema model and compiling it to a variable, export the model to the index file in the models directory (nice consolidation technique)
*BEGIN ROUTING* 
* mkdir routes
* touch routes/routeFileName.js
* mkdir helpers
* touch helpers/helperFileName.js
* Define the Index route
    -  Label the api routes specifically so that there is no confusion over which routes are part of the API and which are not. In order to do this, add the following line above the server in the main JavaScript file.
    *app.use("/api/questions", questionRoutes);*
    -  This line specifies that I want this entire application to read the api-specific routes as starting with "/api" instead of simply "/"
        -  For example, if my api was for CRUDing "questions", then the api route would appear as such: "/api/questions"

* Make the POST route
    - const bodyParser = require("body-parser");
      // These allow me to access the request body
    - app.use(bodyParser.json());
    - app.use(bodyParser.urlencoded({extended: true}));
* API routes will start expanding
    - These API routes require CRUDing resources (specified via the mongoose schema) and, thus, they will heavily utilize Promises (for their speciality in dealing with asynchronicity)
    - Using Promises takes multiple lines of code, thus, I will eventually need to refactor the API routes
* Define SHOW route (which retrieves information about a specific Todo)
* Define UPDATE route
    * This route is a little tricky because it has to have some purpose. In this example, it toggles the boolean value of "completed" from "true" to "false" each time the todo is clicked. What will this route do in/for other applications? I don't know, but that must be determined before writing this route.
    - Have to find a specific todo and then update it
    - First, pass in an object that tells mongoose how to find the specific resource by its ID
    - Second, after passing in the object, I need to specify what to update, that being whatever is in the body of the request
    - There's an issue with mongoose where it will respond with the old data but save the new data in the DB. This can be fixed by adding "{new: true}" after  "req.body" thus forcing mongoose to respond with the new DB entry instead of the old one
* Define DELETE route
* Refactor the API
    - This will be accomplished by creating a "helper functions" folder and storing the logic of the routes within a helper function that will be called within the API routes 
    - Save the callback function, from each API route, to its own function within the "helpers" file and export those functions to the API (require them in the API file)
    - Next, append each of the API route functions to the relevant HTTP request (being facilitated via Express) but be wary of the pathing since these route helper functions can be grouped based on their pathing, but not all paths are identical for each route.




*Consuming my API via Single Page Application*
* Serve static files (read: non-API route and template)
    - Specify the root route (GET request)
        app.get("/", function(req, res){
            res.sendFile("index.html");
        });
    - app.use(express.static(__dirname + "/views"));
        - What is happening here is that I am referencing the static file "index.html" in the root GET route
        - My express app has no idea where that static file is located, but the "express.static(__dirname)" references the "current directory/views" automatically when I am responding to a get request with a static file (thus, "sendFile" must be used instead of "render")
        - ALSO, I need to do the exact same thing when I want to include my static css files (in the public directory). By using the code, below, all files in the public directory are being served by the app as static files
            - app.use(express.static(__dirname + "public"));
* Install nodemon
    - npm install nodemon -g (the "g" stands for "global")
        - this package watches my files for changes and restarts the server after a change has been made
        - use "nodemon index.js" to start nodemon
* Install jQuery via CDN
* Position your HTML elements and write the corresponding CSS 
    - After this point, it's all about AJAX, logic, and jQuery
* AJAX...till the end!
    - The app.js file, within the public directory, 



***Essential NPM Modules***
- body-parserejs
- expressexpress-session
- method-override
- mongoosepassport
- passport-local
- passport-local-mongoose
- nodemon



*WELCOME TO REACT*

Why is React so popular? Well, because when you're coding a complex page, like a Facebook profile, the number of sections can really pile up. It becomes so long and hard to read, the code becomes like a pile of spaghetti. 

React allows us to create better user interfaces. It allows you to divide and conquer your code. 

React doesn't store data, so it's the view layer (or front-end) and work with something like Rails in order to display it. 

In terms of the MVC (Model View Controller) paradigm, React is the View. 

Another great thing about React is that it's isomorphic - which means that the components we make with React can be used in a browser or on mobile by pulling in different react libraries (hint hint: React Native).

*Building a Single Page Application (SPA)*

A Single Page Application only loads once. It never reloads. Think about Twitter, or Gmail. The whole page doesn't reload based on a change that you make. And React really works well with SPAs.

It wasn't always the way that web pages worked. You'd actually have different files for different pages. Something like Ruby on Rails manages the data and the front-end components of a page and forms the site out of those parts. Combining the back-end and front-end code made things more scalable. But SPAs makes things much faster. 

Benefits of using React for the view:
- Site runs much faster
- Better separation of concerns
- Front-end code becomes reuseable