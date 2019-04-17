class Persona {
  constructor(nombre, edad, altura) {
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
  }

  saludar(respuesta) {
    var { nombre, edad } = this
    console.log(`Hola, me llamo ${nombre} y tengo ${edad}`);
    if (respuesta) {
      respuesta(nombre)
    }
  }

  esAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, altura) {
    super(nombre, edad, altura)
  }

  saludar(respuesta) {
    var { nombre, edad } = this
    console.log(`Hola, me llamo ${nombre}, tengo ${edad} y soy desarrollador`);
    if (respuesta) {
      respuesta(nombre, true)
    }
  }
}

function responderSaludo(nombre, esDev) {
  console.log(`Buen día ${nombre} `);
  if (esDev) {
    console.log('No sabía que eras Dev :0');
  }
}

var esteban =  new Persona('Estebandido', 18, 1.90) 
var pepe =  new Desarrollador('Pepe', 18, 1.60) 

esteban.saludar(responderSaludo)
pepe.saludar(responderSaludo)
