export const bootstrap = (): void => {

    const x = 'teste'
    console.log('string', typeof x)
    console.log('number', typeof 123)
    console.log('bigInt', typeof 123n)
    console.log('symbol', typeof Symbol('teste'))
    console.log('undefined', typeof undefined)
    console.log('Object', typeof {})
    console.log('Object', typeof Object())
    console.log('Array (Object)', typeof [])
    console.log('null (Object)', typeof null)
    console.log('function', typeof function(){})
}