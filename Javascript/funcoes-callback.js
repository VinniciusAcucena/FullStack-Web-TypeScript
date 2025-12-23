function processar(callbackSucesso, callbackErro){

  let resultadoProcessamento = true
  if( resultadoProcessamento ){
    callbackSucesso()
  }else{
    callbackErro()
  }
}

const salvarResultado = function(){
  console.log("salvar resultado")
}


const erro = function(){
  console.log("erro")
}

processar(salvarResultado, erro)