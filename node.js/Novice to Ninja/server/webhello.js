#!/usr/bin/env node
// const util = require('util');

const
  port = (process.argv[2] || process.env.PORT || 3000),
  http = require('http');

http.createServer((req, res) => {

  console.log(req.url);
  const nameArg = capitalize( req.url.replace(/[^\w.,-]/g, ' ').replace(/\s+/g, ' ').trim() || 'world' );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<p>Hello ${ nameArg }!</p>`);

}).listen(port);

console.log(`Server running at http://localhost:${ port }/`);

// capitalize the first letter of all words
function capitalize(str) {

  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

}

// const myObjs =[{
//     name: "thanh",
//     age : 43
// }, {
//     name: "hieu",
//     age: 32,
// }]

// let object = {
//     a : 1,
//     b : 2,
//     c : {
//       d : {
//         e: {
//           f: {
//               x: 99,
//               y: 100
//           }
//         }
//       },
//       g : 5
//     },
//     h: 6
//   }

//   const des = () => {
//     console.log('adf');
//   }

//   const disp = () => {
//     console.log('abc');
//     console.log('def');
//     des();
//   }

// console.error('Error');

// //Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

// console.dir(object, {depth: null, color: true });

// const { log } = require('console');
// const util = require('util');
// const debuglog = util.debuglog('myapp');
// process.env.NODE_DEBUG = "myapp";
// console.log(process.env);

// debuglog('myapp debug message [%d]', 123);
