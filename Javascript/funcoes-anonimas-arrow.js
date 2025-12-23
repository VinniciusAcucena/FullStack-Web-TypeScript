//Função anônima 
const somarAnonimo = function(a,b){
  console.log(a+b)
}
somarAnonimo(1,2)

//+ Função arrow 
const somarArrow = (a,b) => {
  console.log(a+b)
}
somarArrow(1,2)

//+ Função arrow ( retorno implícito )
const somar = (a,b) => a+b

let resultado = somar(1,2)
console.log(resultado)
