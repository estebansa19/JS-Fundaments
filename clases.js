function Persona(nombre, edad, altura) {
  this.nombre = nombre
  this.edad = edad
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
}

Persona.prototype.esAlto = function() {
  return this.altura > 1.8 
}

var esteban =  new Persona('Estebandido', 18, 1.90)
console.log(esteban);