"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
exports.getPrincipalAddress = getPrincipalAddress;
const shoppingCart = {
    cartItems: [
        { id: 1, price: 100 },
        { id: 2, price: 150 },
        { id: 3, price: 200 }
    ]
};
const addresses = [
    { cep: '00000-416', default: true },
    { cep: '00000-400', default: false },
    { cep: '00000-001', default: true }
];
const customer = {
    addresses: addresses
};
function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
}
console.log(calculateTotal(shoppingCart).toFixed(2));
function getPrincipalAddress(customer) {
    return customer.addresses.find(addresses => addresses.default);
}
const principalAddres = getPrincipalAddress(customer);
console.log(principalAddres);
