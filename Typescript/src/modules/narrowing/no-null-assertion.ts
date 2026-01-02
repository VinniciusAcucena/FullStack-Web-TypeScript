export const bootstrap = (): void => {
    const subtitle = document.getElementById('subtitle')!

    subtitle.style.color = 'green'

    const getProducts = (): string[] | null => {
        return ['celular', 'TV']
    }

    const products = getProducts()!

    products.map(item => console.log(item))
}