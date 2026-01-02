export const bootstrap = (): void => {
    
    let title = null
    console.log(title)
    console.log(title ? 'verdadeiro' : 'falso')

    let subtitle = undefined
    console.log(subtitle)
    console.log(subtitle ? 'verdadeiro' : 'falso')

    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void
    }

    const page: Page = {
        title: 'teste'
    }

    page.handlerPage = (): void => {
        console.log('handlePage executada')
    }

    console.log(`subtitle: ${page.subtitle}`)
    console.log(page.handlerPage())
}