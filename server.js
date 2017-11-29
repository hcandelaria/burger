//Packages
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const connection = require('./config/connection.js');
const routes = require('./controllers/burger_controller.js')

const app = express();

const port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", routes);

app.listen(port);
