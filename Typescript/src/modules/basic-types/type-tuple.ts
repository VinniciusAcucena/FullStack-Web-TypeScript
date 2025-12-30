let filmArray: (number | string | boolean)[] = [1, 'Vingadores', true]
let filmTuple: [number, string, boolean] = [2, 'Hulk', false]
let filmTupleOpcional: [number, string, boolean?] = [2, 'Hulk']

const [idArr, titleArr, availableArr] = filmArray
const [id, title, available] = filmTuple

console.log(id, title )

export default () => {}