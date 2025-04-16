"use strict";
const numbers = [10, 20, 30];

// Traditional way:
let first = numbers[0];
let second = numbers[1];

// Destructuring way:
const [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20

const [x, , z] = numbers;
console.log(z); // 30
