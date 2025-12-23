
function contarQuantidadeLetras( produto ){
  try {
    console.log( produto.nome.length )
  } catch( erro ){

    console.log("Erro ao processar, código erro: 164")
    
  } finally {
    console.log("finally")
  }
}


const produto = {
  nom: "Notebook",
  preco: 1200
}

contarQuantidadeLetras(produto)