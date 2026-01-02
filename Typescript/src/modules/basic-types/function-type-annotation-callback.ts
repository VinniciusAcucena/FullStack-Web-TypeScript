type CartItem = {
    id: number,
    price: number
}

type Address = {
    cep: string,
    default: boolean
}

type Customer = {
    addresses: Address[]
}

type ShoppingCart = {
    cartItems: CartItem[]
}

const shoppingCart: ShoppingCart = {
    cartItems: [
        {id: 1, price: 100},
        {id: 2, price: 150},
        {id: 3, price: 200}
    ]
}

const addresses: Address[] = [
    {cep: '00000-416', default: true},
    {cep: '00000-400', default: false},
    {cep: '00000-001', default: true}
]

const customer: Customer = {
    addresses: addresses
}

type ApplyDiscountFn = (total: number, discount: number) => number

const applyDiscount: ApplyDiscountFn = (
    total: number, 
    discount: number
) : number => {
    return total - (total * discount)
}

type CalculateTotalFn = (sC: ShoppingCart, applyDiscount: ApplyDiscountFn) => number

let calculateTotal: CalculateTotalFn = function (
    shoppingCart: ShoppingCart,
    applyDiscount: ApplyDiscountFn
): number {
    const total = shoppingCart.cartItems.reduce(
        (acc, item) => acc + item.price, 0)
    
    return applyDiscount(total, 0.10)
    
}

let getPrincipalAddress: (c: Customer) => Address | undefined

getPrincipalAddress = (customer: Customer): Address | undefined => {
    return customer.addresses.find(addresses => addresses.default)
}

const total = calculateTotal(shoppingCart, applyDiscount)
console.log(total)

const principalAddres = getPrincipalAddress(customer)
console.log(principalAddres)

export {calculateTotal, getPrincipalAddress}