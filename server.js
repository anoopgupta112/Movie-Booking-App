const express = require("express");
const app = express();
const PORT = process.env.PORT || 8085;
const cors = require("cors");
const db = require("./models");
const genreRouter = require("./routes/genre.routes");
const artistRouter = require("./routes/artist.routes");
const movieRouter = require("./routes/movie.routes");
const userRouter = require("./routes/user.routes");
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    })
);
// database code

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Can not connect to the database!", err);
        process.exit();
    });

app.use("/api/auth", userRouter);
app.use("/api/genres", genreRouter);
app.use("/api/artists", artistRouter);
app.use("/api/movies", movieRouter);

