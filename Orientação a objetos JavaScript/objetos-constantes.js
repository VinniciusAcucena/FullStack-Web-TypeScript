
const produto = {
  nome: "Notebook"
}

Object.freeze( produto )
produto.nome = "Celular"
produto.preco = 120

console.log(produto)
