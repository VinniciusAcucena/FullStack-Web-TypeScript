
const hotel = {
  quartos: 20,
  ocupados: 10,
  verificarDisponibilidade: function(){
    let res = this.quartos - this.ocupados
    console.log("Disponíveis: " + res)
  }
}

hotel.verificarDisponibilidade()








