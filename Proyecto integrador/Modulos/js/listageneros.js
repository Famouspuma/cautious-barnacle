

////////////////////////// CARGA listadoGeneros //////////////////////////////////////////////////

// <a class="dropdown-item" href="#">Acción</a>
alert("hola")
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    console.log(informacion.length);
    var div
    var nombre
    for (var i = 0; i < informacion.length; i++) {
        console.log(informacion[i]);
        imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
        nombre = informacion.results[i].title;
        div = "<div class='col-md-6 populares'>"
        div +=    "<h3>" + nombre + "<h3>";
        div +=    "<img class='w-100' src=" + imagen + ">"
        div += "</div>"
        document.querySelector("div.nuevosLanzamientos").innerHTML += div

    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
