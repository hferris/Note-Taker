//dependancies
const path = require("path");

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../assets/html/notes.html'));
    });
    app.get('*', (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../assets/html/index.html'));
    });
}
