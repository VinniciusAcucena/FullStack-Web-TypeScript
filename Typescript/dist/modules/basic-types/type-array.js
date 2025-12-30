"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseStrings = toUpperCaseStrings;
let films = ['Star wars', 'Harry Potter'];
let numbers = [1, 2, 5, 6];
let singers = ['Madonna', 'Rihanna'];
let ages = [15, 20, 65];
function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
