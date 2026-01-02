type CartItem = {
    id: number,
    price: number
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

export function calculateTotal(shoppingCart: ShoppingCart): void {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0)
    console.log(`Total do valor ${total.toFixed(2)}`)
}

calculateTotal(shoppingCart)