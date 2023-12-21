import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const todoList = [];
const workToDoList = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("day.ejs", {list: todoList});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {workList: workToDoList});
});

app.post("/submit-day", (req, res) => {
    todoList.push(req.body["todo"]);
    res.render("day.ejs", {list: todoList});
});

app.post("/submit-work", (req, res) => {
    workToDoList.push(req.body["todo"]);
    res.render("work.ejs", {workList: workToDoList});
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});