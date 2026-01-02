export const bootstrap = () => {
    function throwError(message) {
        throw new Error(message);
    }
    //throwError('Aplicação interrompida')
    console.log('Continuação do fluxo');
    function infinityLoop() {
        let total = 0;
        while (true) {
            const inputText = prompt('digite um valor');
            if (inputText) {
                const inputNumber = parseFloat(inputText);
                if (!isNaN(inputNumber)) {
                    total += inputNumber;
                    console.log(total);
                }
            }
        }
    }
    //infinityLoop()
};
