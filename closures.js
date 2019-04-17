function crearSaludo(finalDeFrase) {
  return function(nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoColombiano = crearSaludo('Parce')
const saludoMexicano = crearSaludo('Wey')

saludoColombiano('Esteban')
saludoMexicano('Esteban')