let express = require('express');
let app = express();
let db = require("./db");

let bodyParser = require("body-parser");
app.use(bodyParser.json());


let personRoute = require("./routes/personRoutes");
let menuRoute = require("./routes/menuRoutes");

app.use("/person",personRoute);
app.use("/menuItem",menuRoute);

app.listen(3000,() => {
    console.log("Server is Activated");
}); 