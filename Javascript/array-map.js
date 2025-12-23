
const produtosDolar = [
  {produto: "Notebook", preco: 1200, moeda: "$"},
  {produto: "Celular", preco: 800, moeda: "$"},
]

const novo = produtosDolar.map(item => {
  let preco = item.preco * 3
  return {produto: "Notebook", preco: preco, moeda: "R$"}
})
console.log(novo)









