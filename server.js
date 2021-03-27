// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });
  
  // API Routes
  app.get('/api/notes', function(req,res) {
    fs.readFile(path.join(__dirname, './db/db.json'), function(err, data) {
        console.log(data);
        res.json(JSON.parse(data));
    });
});
app.post('/api/notes', function(req, res) {
    const note = {
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile(path.join(__dirname, './db/db.json'), function(err, data) {
        console.log("here4")
        console.log(data);
        console.log("here after")
        var parsedNote = JSON.parse(data);
        parsedNote.push(note);
        parsedNote = JSON.stringify(parsedNote);

        fs.writeFile('./db/db.json', parsedNote, function(err) {
            if(err) throw err;
        });
        res.redirect('back');
    });
});
app.delete("/api/notes/:id", function (req, res) {
      const noteId = JSON.parse(req.params.id)
      console.log(noteId)
      fs.readFile(path.join(__dirname, './db/db.json'), function (error, notes) {
        if (error) {
          return console.log(error)
        }
        notes = JSON.parse(notes)
    
        notes = notes.filter(val => val.id !== noteId)
    
        fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(notes), function (error, data) {
          if (error) {
            return error
          }
          res.json(notes)
        })
      })
    })

// start server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});