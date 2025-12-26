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