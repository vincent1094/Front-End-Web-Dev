#!/usr/bin/env node

// console.log("Hello World");

// chmod +x ./hello.js

// fetch name from command or fallback

// const nameArg = process.argv[2] || 'world';
const nameArg = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME || 'world');

// && TRUE keep going, FALSE stop
// || TRUE stop, FALSE keep going

function capitalize (str) {
    return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(`Hello ${nameArg}`);