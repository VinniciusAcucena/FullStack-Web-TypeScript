let films: string[] = ['Star wars', 'Harry Potter']
let numbers: number[] = [1,2,5,6]

let singers: Array<string> = ['Madonna', 'Rihanna']
let ages: Array<number> = [15, 20, 65]


export function toUpperCaseStrings(arr: Array<string>) {
    return arr.map(value => value.toUpperCase())
}

console.log(toUpperCaseStrings(films))