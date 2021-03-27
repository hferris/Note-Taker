const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// use routes
require('./routes/html.js')(app);
require('./routes/api.js')(app);


app.listen(PORT, () => console.log("App started on http://localhost:" + PORT));
