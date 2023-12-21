import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.post("/submit", (req, res) => {
    const numberOfLetters = req.body["fName"].length + req.body["lName"].length;
    res.render("form.ejs", { numLetter : numberOfLetters });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

