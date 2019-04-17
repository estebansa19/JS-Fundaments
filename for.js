var esteban = {
  nombre: 'Esteban',
  edad: 18,
  peso: 60 
}

console.log(`Al INICIO del año ${esteban.nombre} pesa ${esteban.peso}kg`);

const PESO = 0.2

const aumentarDePeso = persona => persona.peso += PESO 
const adelgazar = persona => persona.peso -= PESO 

for (var i = 1; i <= 365; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(esteban)
  } else if (random < 0.50) {
    adelgazar(esteban)
  }
}

console.log(`Al FINAL del año ${esteban.nombre} pesa ${esteban.peso.toFixed(1)}kg`);