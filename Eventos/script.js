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

// const body = document.querySelector('body')
// body.addEventListener('click', () => {
//     executar('Clicou no body')
// }, true)


//eventos por interface
function carregar(texto){
    console.log(texto)
}

window.addEventListener('load', () => {
    carregar('pagina carregada')
})
window.addEventListener('resize', () => {
    carregar('pagina redimensionada')
})

//eventos de teclado
const teclado = document.getElementById('entrada')
teclado.addEventListener('keydown', () => {
    console.log("tecla pressionada")
})
teclado.addEventListener('keyup', () => {
    console.log("soltou a tecla")
})
teclado.addEventListener('keypress', () => {
    console.log("clicou na tecla")
}, true)

//eventos de mouse
const mouse = document.getElementById('mouse')
mouse.addEventListener('click', () => {
   console.log("Deu um clique no mouse")
})
mouse.addEventListener('dblclick', () => {
    console.log("duplo clique no mouse")
})
mouse.addEventListener('mousedown', () => {
    console.log("segurando o botão do mouse")
})
mouse.addEventListener('mouseup', () => {
    console.log("soltou o botão do mouse")
})
mouse.addEventListener('mousemove', () => {
    console.log("movimentou o mouse dentro da area")
})

//eventos de foco
const foco = document.getElementById('foco')
foco.addEventListener('focus', () => {
    console.log('focou no nome')
})
foco.addEventListener('blur', () => {
    console.log('perdeu o foco no objeto')
})

//Eventos de formulario
const form = document.formulario
const nome = form.nome
nome.addEventListener('input', () => {
    console.log("o formulario recebeu um input")
})
nome.addEventListener('cut', () => {
    console.log("texto foi recortado")
})
nome.addEventListener('copy', () => {
    console.log("texto foi copiado")
})
nome.addEventListener('paste', () => {
    console.log("texto foi colado")
})
nome.addEventListener('select', () => {
    console.log("texto foi selecionado")
})

const sexo = form.sexo
sexo.addEventListener('change', () => {
    console.log("sexo alterado")
})

form.addEventListener('submit', (event) => {
    console.log('Dados Slavos')
    event.preventDefault()
})

form.addEventListener('reset', () => {
    console.log("Páina resetada")
})