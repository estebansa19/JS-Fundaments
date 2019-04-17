var esteban = {
  nombre: 'Esteban',
  edad: 18,
  peso: 60 
}

console.log(`Al INICIO del año ${esteban.nombre} pesa ${esteban.peso}kg`);

const PESO = 0.2

const aumentarDePeso = persona => persona.peso += PESO 
const adelgazar = persona => persona.peso -= PESO 
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = esteban.peso - 3
var dias = 0

while ( esteban.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(esteban)
  }

  if(realizaDeporte()) {
    adelgazar(esteban)
  }

  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${esteban.nombre} adelgazó 3kg`);