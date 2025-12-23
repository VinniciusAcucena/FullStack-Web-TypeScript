class Animal {
  constructor(pCor, pTamanho, pPeso){
    this.cor = pCor
    this.tamanho = pTamanho
    this.peso = pPeso
  }
  correr(){
    console.log("correr")
    console.log("como")
    console.log("um")
    
  }
  dormir(){
    console.log("dormir")
  }
}

class Cao extends Animal {
  constructor(pCor, pTamanho, pPeso, pOrelha){
    super(pCor, pTamanho, pPeso)
    this.tamanhoOrelha = pOrelha
  }
  correr(){
    super.correr()
    console.log("cao")
    
  }
  latir(){
    console.log("latir")
  } 
}

class Passaro extends Animal {
  constructor(pCor, pTamanho, pPeso){
    super(pCor, pTamanho, pPeso)
  }
  correr(){
    super.correr()
    console.log("passaro")
    
  }
  voar(){
    console.log("voar")
  }
}

class Papagaio extends Passaro {
  constructor(pCor, pTamanho, pPeso, pFalar){
    super(pCor, pTamanho, pPeso)
    this.sabeFalar = pFalar
  }
  falar(){
    console.log("falar")
  }
}

const animal = new Animal("Amarelo", 60, 3)
console.log(animal.tamanho)

const cao = new Cao("Amarelo", 60, 3, 5)
console.log(cao.peso)

const passaro = new Passaro("Amarelo", 60, 3)
console.log(passaro.cor)

const papagaio = new Papagaio("Vermelho", 20, 1, true)
console.log( papagaio.sabeFalar )

cao.correr()


