const esteban = {
  nombre: 'Esteban',
  apellido: 'Saldarriaga'
} 

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

// Primer forma de cambiar el contexto - this
setTimeout(saludar.bind(esteban, 'Hola, bienvenido'), 1000)

// Segunda forma
saludar.call(esteban, 'Hola, bienvenido')

//Tercer forma
saludar.apply(esteban, ['Hola, bienvenido']) 