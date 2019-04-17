const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, options, callback).fail(() => {
    console.log(`Sucedió un error, no se pudo encontrar al personaje con id: ${id}`);
  })
}

obtenerPersonaje(1, function(persona){
  console.log(`Hola, yo soy ${persona.name}`)

  obtenerPersonaje(2, function(persona){
    console.log(`Hola, yo soy ${persona.name}`);

    obtenerPersonaje(3, function(persona){
      console.log(`Hola, yo soy ${persona.name}`);

      obtenerPersonaje(4, function(persona){
        console.log(`Hola, yo soy ${persona.name}`);

        obtenerPersonaje(5, function(persona){
          console.log(`Hola, yo soy ${persona.name}`);

          obtenerPersonaje(6, function() {
            console.log(`Hola, yo soy ${persona.name}`);
          })          
        })
      })
    })
  })
})
 
