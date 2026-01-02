let person = {
    name: 'Vinnicius',
    age: 25
};
export function showPerson(person) {
    console.log(person);
}
showPerson(person);
showPerson({ name: 'José', age: 30 });
