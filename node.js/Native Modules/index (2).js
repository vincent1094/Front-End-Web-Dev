const fs = require("fs");

fs.writeFile("message1.txt", "A string from NodeJS!", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});