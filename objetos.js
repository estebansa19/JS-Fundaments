var esteban = {
  nombre: 'Esteban',
  apellido: 'asadasd',
  edad: 18
}

var pepe = {
  nombre: 'Pepe',
  apellido: 'asdasd',
  edad: 99
}

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(esteban)
imprimirNombreEnMayusculas(pepe)
// imprimirNombreEnMayusculas({ nombre: 'Juan'})


function cumpleaños(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}



// Reto 

function imprimirNombreYEdad(persona) {
  var { nombre, edad } = persona
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad}`);
}

imprimirNombreYEdad(esteban)
imprimirNombreYEdad(pepe)
