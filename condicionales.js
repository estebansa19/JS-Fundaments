// Reto

var esteban = {
  nombre: 'Esteban',
  edad: 18
}

var pepe = {
  nombre: 'Pepe',
  edad: 12
}

function esMayorDeEdad(persona) {
  if(persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}

esMayorDeEdad(esteban)
esMayorDeEdad(pepe)