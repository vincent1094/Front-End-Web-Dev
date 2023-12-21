// // var generateName = require("sillyname");

// import generateName from "sillyname"
// var sillyName = generateName();

// console.log(`My name is ${sillyName}`);

// // Generate Super Hero Name:

// // import superheroes from "superheroes"

// // var allSuperHeroes = superheroes.all;

// // console.log(allSuperHeroes);

// // var randomSuperHero = superheroes.random();

// // console.log(randomSuperHero);

// // import yesNoWords from "yes-no-words"
// // import fs from "fs"

// // // console.log(yesNoWords.all);
// // fs.writeFile("yesNoWords.txt", yesNoWords.all.join('\n'), (err) => {
// //     if(err) throw err;
// //     console.log("Successfully write yes no words out to file!");
// // })

// import superb from "superb"
// import fs from "fs"

// fs.writeFile("superbWords.txt", superb.all.join('\n'), (err) => {
//     if(err) throw err;
//     console.log("Successfully write out to file!");
// })

const first_number = Math.floor(Math.random()*1000);
const second_number = Math.floor(Math.random()*1000);
console.log(first_number);
console.log(second_number);
setTimeout(()=>console.log(first_number+second_number), 10000);
