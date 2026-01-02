export const bootstrap = (): void => {

    type Person = {
        name: string,
        age: number
    }

    type Employee = {
        departament: string
    }

    type Customer = {
        whishlist: string[]
    }

    type EmployeeDetails = Person & Employee

    const employee: EmployeeDetails = {
        name: 'Vinnicius',
        age: 25,
        departament: 'TI'
    }

    type CustomerDetails = Person & Customer
    const customer: CustomerDetails = {
        name: 'MAria',
        age: 30,
        whishlist: ['celular', 'TV', 'Fone']
    }

    console.log(employee)
    console.log(customer)
}