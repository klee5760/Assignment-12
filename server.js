var express = require("express");
var bodyParser =require("body parser");
var exhbs = require("express-handlebars");

var app = express();
var PORT = proce.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.engine("handlebars", exhabs({ defaultLayoyt: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: htpp;//localhost" + PORT);
});