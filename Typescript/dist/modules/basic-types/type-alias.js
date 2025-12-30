"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPerson = showPerson;
function showPerson(person) {
    console.log(person);
}
showPerson({
    name: 'José',
    age: 30,
    contact: {
        email: 'Email@email.com',
        phone: '21999316555'
    },
    salary: 500.50
});
