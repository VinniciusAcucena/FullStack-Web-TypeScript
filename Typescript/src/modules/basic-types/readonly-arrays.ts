let numbers:  readonly number[] = [10, 20, 30]

let numbersCopy = numbers.map(item => item * 2)
//numbers[0] = 15

console.log(numbers)
console.log(numbersCopy)

export default () => {}