import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    }, 
])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, {type: 'svg'});
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));
    fs.writeFile("urls.txt", url, (err) => {
        if (err) throw err;
        console.log("Success!"); 
    }) 

})
.catch((err) => {
    if (err.isTtyError) {
        // console.log("Prompt couldn't be rendered in the current environment");
    } else {
        // console.log(err);
    }
})