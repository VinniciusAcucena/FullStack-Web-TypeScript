type Salary = number | string

type Person = {
    name: string, 
    age: number,
    contact: {email: string, phone: string},
    salary: Salary
}


export function showPerson(person: Person) {
    console.log(person)
}

showPerson({ 
    name: 'José', 
    age: 30, 
    contact : {
        email: 'Email@email.com', 
        phone: '21999316555'
    },
    salary: 500.50
})