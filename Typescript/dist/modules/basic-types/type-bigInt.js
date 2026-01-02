export const bootstrap = () => {
    console.log('Int - max safe: ', Number.MAX_SAFE_INTEGER);
    console.log('Int - min safe: ', Number.MIN_SAFE_INTEGER);
    let bigIntNumber = 9007199254740991n;
    console.log('Atribuição sufixo n: ', bigIntNumber);
    let bigIntNumber2 = BigInt('9007199254740991');
    console.log('Atribuição sufixo n: ', bigIntNumber2);
};
