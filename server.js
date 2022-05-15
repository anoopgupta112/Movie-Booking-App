const express = require("express");
const app = express();
const PORT = 9000;


app.get("/movies", (request, resopnse) => {
    resopnse.json("All Movies Data in JSON format from Mongo DB");

});
app.get("/genres", (request, resopnse) => {
    resopnse.json("All Genres Data in JSON format from Mongo DB");

});
app.get("/artists", (request, resopnse) => {
    resopnse.json("All Artists Data in JSON format from Mongo DB");

});
app.listen(PORT, () => {
    console.log("Running at PORT " + PORT)
})

// database code
const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });