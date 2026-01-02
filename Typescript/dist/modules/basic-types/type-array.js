let films = ['Star wars', 'Harry Potter'];
let numbers = [1, 2, 5, 6];
let singers = ['Madonna', 'Rihanna'];
let ages = [15, 20, 65];
export function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
