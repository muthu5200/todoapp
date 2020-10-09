//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use("view engine", "ejs");

app.use(bodyposter.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",  function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.tolocaldatestring("en-us", options);

  res.render("list",{  kindofDay: day,newListItems});

});

app.post("/", function(req, res){
  var item = req.body.newItems;

 items.push(item);

  res.redirect("/");

  res.render("list",{kindofDay: day, newListItems: item});

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
