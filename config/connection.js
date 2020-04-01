//require mysql and inquirer
var inquirer = require("inquirer");
var mysql = require("mysql");
​
//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers"
});
​
//connect method to accept callback function or display an error
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection ID: " + connection.threadId);
});
​module.exports = connection;