export const bootstrap = (): void => {

    const title: symbol = Symbol('HOME')
    const pageTitle: symbol = Symbol('HOME')

    if ('HOME' === 'HOME') {
        console.log('HOME igual')
    }

    const titleSymbol: symbol = Symbol('title')

    const Page = {
        title: 'HOME',
        [titleSymbol]: 'página principal'
    }

    console.log(Page.title)
    console.log(Page[titleSymbol])

    console.log(Page)
}