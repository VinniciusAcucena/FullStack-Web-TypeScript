function executar(texto) {
    console.log(texto)   
}

//eventos pelo DOM
const botao = document.getElementById('evento')
botao.onclick = () => {
    executar("Clicou no botão com o DOM")
}

//eventos pelo EventListener
const botaoListener = document.querySelector('[event-listener]')
botaoListener.addEventListener('click', () => {
    executar("Clicou o botão com EventListener")
}, false)

const body = document.querySelector('body')
body.addEventListener('click', () => {
    executar('Clicou no body')
}, true)