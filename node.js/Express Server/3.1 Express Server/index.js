import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //    console.log(req.rawHeaders);
    // res.send("Hello World!");
    res.send("<h2>Hello World!</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Info:</h1> <p>Phone: +84383051215</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Developer at work</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});