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
const applyDiscount = (total, discount) => {
    return total - (total * discount);
};
let calculateTotal = function (shoppingCart, applyDiscount) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    return applyDiscount(total, 0.10);
};
let getPrincipalAddress;
getPrincipalAddress = (customer) => {
    return customer.addresses.find(addresses => addresses.default);
};
const total = calculateTotal(shoppingCart, applyDiscount);
console.log(total);
const principalAddres = getPrincipalAddress(customer);
console.log(principalAddres);
export { calculateTotal, getPrincipalAddress };
