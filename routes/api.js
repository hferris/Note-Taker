//dependancies
const path = require("path");
const fs = require('fs');

module.exports = (app) => {
    //read notews file
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, data) => {
        if(error) {
            var notes = [];
           alert(error);
        } else {
            var notes = JSON.parse(data);
        }

    app.get('/api/notes', (req, res) => {res.parse(notes)});


    app.post('/api/notes', (req, res) => {
       var note = req.body;
       notes.push(note); 
       updateNotesFile()
       return console.log("New Note: " + note.title);

    });
    app.get('/api/notes.:id', (req, res) => {
        res.json(notes[req.params.id]);
    })

    function updateNotesFile(){
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (error, data) => {
            if(error){
                alert("error writing to fiule :(")
            } else {
                return true;
            }
        });
    }

});


}
