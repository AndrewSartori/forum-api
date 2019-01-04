const express       = require("express");
const app           = express();
const PORT          = process.env.PORT || 3000;
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");

const questionRoutes = require("./routes/questions");
const commentRoutes  = require("./routes/comments");
const userRoutes     = require("./routes/users");


// These allow me to access the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/views"));


app.get("/", function(req, res){
    res.send("VERIFYING FUNCTIONALITY OF THE ROOT ROUTE");
});


// Here I am specifying that I want this entire application to read the todoRoutes as starting with "/api/todos"
app.use("/api/questions", questionRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);




mongoose.connect("mongodb://localhost/forum-api", function(){
    console.log("===============================");
    console.log("CONNECTED TO MONGO DATABASE");
    console.log("===============================");
});


app.listen(PORT, function(){
    console.log("===============================");
    console.log("SERVER OPERATING ON PORT: " + process.env.PORT);
    console.log("===============================");
});