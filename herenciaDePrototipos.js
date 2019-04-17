function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, edad, altura) {
  this.nombre =  nombre
  this.edad = edad
  this.altura = altura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
  console.log(`Hola mundo de ${this.nombre} ${this.apellido}`);
}







var esteban =  new Persona('Estebandido', 18, 1.90) 
console.log(esteban);