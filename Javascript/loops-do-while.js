
//do...while
let numero = 5
do{
  console.log("Executou " + numero)
  numero--
}while( numero >= 1 )

//for
let postagens = [
  "Hoje passeando pela av paulista",
  "Passeando em Campos do Jordão",
  "Hoje fiz um curso de criação de sites",
  "Na casa da mamãe, aproveitando o dia!",
  "postagem 5"
]

let total = postagens.length
for( let numero = 0; numero < total; numero++ ){
  console.log(postagens[numero])
}

for( indice in postagens ){
  console.log(postagens[indice])
}


