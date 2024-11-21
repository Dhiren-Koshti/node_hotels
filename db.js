let mongoose = require("mongoose");

let mongoURL = "mongodb://localhost:27017/hotels";

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