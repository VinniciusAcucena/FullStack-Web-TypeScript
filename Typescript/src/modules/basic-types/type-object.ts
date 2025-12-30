let person: { name: string, age: number } =  {
    name: 'Vinnicius',
    age: 25
}


export function showPerson(person: {name: string, age: number}) {
    console.log(person)
}

showPerson(person)
showPerson({ name: 'José', age: 30})