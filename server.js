let express = require('express');
let app = express();
let db = require("./db");
require("dotenv").config();

let bodyParser = require("body-parser");
app.use(bodyParser.json());


let personRoute = require("./routes/personRoutes");
let menuRoute = require("./routes/menuRoutes");

app.use("/person",personRoute);
app.use("/menuItem",menuRoute);

let port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log("Server is Activated");
}); 