const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/assets/css/styles.css", function(req, res){
    res.sendFile(path.join(__dirname, "assets", "css", "styles.css"));
})

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"));
})





app.get("/api/notes", function (req, res){
readfileAsync(path.join(__dirname, "./db/db/json"),"utf8");



})
app.post("/api/notes", function (req, res){
const notes = req.body;


   

});
app.delete("/api/notes/:id", function (req, res){
const { id } = req.params;





});
app.listen(PORT, () => console.log("App listening on PORT " + PORT));
