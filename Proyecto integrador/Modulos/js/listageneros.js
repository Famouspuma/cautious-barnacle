

////////////////////////// CARGA listadoGeneros //////////////////////////////////////////////////

// <a class="dropdown-item" href="#">Acción</a>

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion)
    var div
    var nombre
    var lista = document.querySelector("#generos");
console.log(lista);
    for (var i = 0; i < informacion.genres.length; i++) {
        // console.log(informacion.genres[i]);
        nombre = informacion.genres[i].name;
        console.log(nombre);
        lista.innerHTML += "<a class='dropdown-item' href='#'>" + nombre + "</a>";
        // console.log(lista);

        }
// Tengo que cambiar el div por un ul con li internos extraidos de la api.

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
