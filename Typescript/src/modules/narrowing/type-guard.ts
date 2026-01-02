export const bootstrap = (): void => {

    const zipCodeMask = (value: string | number): string => {
        if(typeof value === 'number') {
            value = value.toString()
        }
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
        return ''
    }

    const zipCode = zipCodeMask(100000000)
    console.log(zipCode)
}