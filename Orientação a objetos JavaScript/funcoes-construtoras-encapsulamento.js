
const Hotel = function(){
  
  this.nome = "Hotel"
  this.quantidadeSuites = 30
  let suitesOcupadas = 25
  
  this.reservar = function(){
    if( suitesOcupadas < this.quantidadeSuites ){
      suitesOcupadas++
      console.log("ocupadas: " + suitesOcupadas)
    }else{
      console.log("Estamos lotados")
    }
  }
  
}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()

