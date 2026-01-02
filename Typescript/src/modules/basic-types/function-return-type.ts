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


export function calculateTotal(shoppingCart: ShoppingCart): number {
    const total = shoppingCart.cartItems.reduce(
        (acc, item) => acc + item.price, 0)
    
    return total
    
}

console.log(calculateTotal(shoppingCart).toFixed(2))

export function getPrincipalAddress(customer: Customer): Address | undefined {
    return customer.addresses.find(addresses => addresses.default)
}

const principalAddres = getPrincipalAddress(customer)

console.log(principalAddres)