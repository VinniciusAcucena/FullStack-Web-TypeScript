"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalize = totalize;
let shoppingCart = [200.75, 150.12, '33.90', '44', 'String'];
function totalize(values) {
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value))
        .filter(value => !isNaN(value))
        .reduce((acc, curr) => acc + curr, 0);
}
console.log(totalize(shoppingCart));
