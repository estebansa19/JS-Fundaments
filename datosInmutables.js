const esteban = {
  nombre: 'Esteban',
  apellido: 'Saldarriaga',
  edad: 18
}

//const cumpleaños = persona => persona.edad++
const cumpleañosImutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})