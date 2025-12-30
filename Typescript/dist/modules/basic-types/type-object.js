"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPerson = showPerson;
let person = {
    name: 'Vinnicius',
    age: 25
};
function showPerson(person) {
    console.log(person);
}
showPerson(person);
showPerson({ name: 'José', age: 30 });
