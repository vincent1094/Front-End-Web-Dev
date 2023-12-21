import express from "express";

const app  = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date("June 18, 2023 11:13:00");
    const day = date.getDay();

    let type = "a weekday";
    let adv  = "work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv  = "have fun";
    }

    res.render("index.ejs", {
        dayType : type,
        advice  : adv
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});