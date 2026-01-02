export const bootstrap = (): void => {
    let valueUnknown: unknown
    let valueAny: any


    function processDataWithUnknown( value: unknown) {
        if (Array.isArray(value)) {
            value.map((item) => console.log(item))
        }

        if(value instanceof Object) {
            if('b' in value) {
                console.log(value.b)
            }
        }

        if(typeof value === 'string') {
            console.log(value.toUpperCase())
        }

        if(typeof value === 'number') {
            console.log(value.toFixed(2))
        }
    }

    valueUnknown = [1, 2, 3]
    processDataWithUnknown(valueUnknown)

    valueUnknown = 'Vinnicius'
    processDataWithUnknown(valueUnknown)

    valueUnknown = 50
    processDataWithUnknown(valueUnknown)

    valueUnknown = {a: 1, b: 2}
    processDataWithUnknown(valueUnknown)
}