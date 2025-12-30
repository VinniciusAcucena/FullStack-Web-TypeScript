let product: string = 'Fritadeira'
let price: number = 503.87

export function display(product: string, price: number) {
    console.log(product.toUpperCase(), price.toFixed(0))
}

display(product, price)