//Selecionando elementos individuais
const objGetId = document.getElementById('destaque')

const objQuerySelector = document.querySelector('h1')

console.log(objGetId.textContent)
console.log(objQuerySelector.textContent)

function alterar() {
    const objQuery = document.querySelector('.primeiro')
    objQuery.innerHTML = "Item 1 alterado"

    objQuery.classList.add("alterar")
    console.log(objQuery)
}

//Selecionando múltiplo elementos
const objTagName = document.getElementsByTagName('h1')
for (i = 0; i < objTagName.length; i++) {
    console.log(objTagName[i].textContent)
}

const lista = Array.from(objTagName)
lista.forEach((item, i) => {
    console.log(`${item.textContent} / pelo Array`)
})

const objClassName = document.getElementsByClassName('vermelho')
console.log(objClassName)

const objName = document.getElementsByName('nome')
console.log(objName)

const objQueryAll = document.querySelectorAll('li')
console.log(objQueryAll.item(1).textContent)

//Selecionando formulário
function preencher(){
    document.cadastro.nome.value = "Vinnicius"
    document.cadastro.email.value = "vinnicius.acucena@capoviagens.com.br"
    document.cadastro.sexo.value = "masculino"

}

//navegando por elementos
const obj = document.querySelector('div#itens')
console.log(obj.parentNode)
console.log(obj.childNodes)
console.log(obj.firstChild)
console.log(obj.previousSibling)
console.log(obj.nextSibling)
console.log(obj.children)
console.log(obj.firstElementChild)
console.log(obj.previousElementSibling)

//selecionando atributos

const img = document.querySelector('img')
console.log(img.getAttribute('src'))
console.log(img.src)
console.log(img.width)

const link = document.querySelector('#link')
console.log(link.href)

function mudar() {
    img.src = "img/grafico.png"

}

//Atributos personalizados
const personalizado = document.getElementById('itens')
personalizado.setAttribute('quantidade', '10')
console.log(personalizado.getAttribute('quantidade'))
personalizado.dataset.status = "finalizado"
console.log(personalizado.getAttribute('data-status'))

//selecionando classes
const classe = document.querySelector('#span')
const listaClasses = classe.classList

console.log(listaClasses)

function executar() {
    listaClasses.add('teste')
    listaClasses.remove('texto')
}

//adicionando e removendo elementos
const objId = document.getElementById('conteudo')
const li = document.createElement('li')

function adicionar() {
    li.textContent = `Item adicionado`
    objId.appendChild(li)
}

function remover() {
    objId.removeChild(li)
}
