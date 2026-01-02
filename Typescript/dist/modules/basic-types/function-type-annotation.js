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
let calculateTotal;
calculateTotal = function (shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
};
let getPrincipalAddress;
getPrincipalAddress = (customer) => {
    return customer.addresses.find(addresses => addresses.default);
};
console.log(calculateTotal(shoppingCart).toFixed(2));
const principalAddres = getPrincipalAddress(customer);
console.log(principalAddres);
export { calculateTotal, getPrincipalAddress };
