let mongoose = require("mongoose");
require("dotenv").config();

// let mongoURL = process.env.MONGODB_URL_LOCAL;
let mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);

let db = mongoose.connection;

db.on("connected", () => {
    console.log("Database Connected");
})

db.on("error", (err) => {
    console.log("error is",err);
})

db.on("disconnected", () => {
    console.log("Database Disconnected");
})

module.exports = {
    db
}