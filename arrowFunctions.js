var esteban = {
  nombre: 'Esteban',
  edad: 18
}

var pepe = {
  nombre: 'Pepe',
  edad: 16
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= 18
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })


function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if(!esMayorDeEdad(persona)) {
    console.log('Acceso denegado');
  }
}


imprimirSiEsMayorDeEdad(esteban)
imprimirSiEsMayorDeEdad(pepe)