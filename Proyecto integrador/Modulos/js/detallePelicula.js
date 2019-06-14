window.onload = function () {

// BUSCADOR
document.querySelector("form").addEventListener("click", function(event){
  event.preventDefault()
});

////////////////////////// CARGA TRENDING //////////////////////////////////////////////////

  fetch("  ")

    .then(function(respuesta) {
      return respuesta.json()
    })

    .then(function(informacion) {
      console.log(informacion);
      console.log(informacion.results.length);
      var div
      var imagen
      var nombre
      for (var i = 0; i < informacion.results.length; i++) {
          console.log(informacion[i]);
          imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
          nombre = informacion.results[i].title;
          div = "<div class='col-md-6 populares'>"
          div +=    "<img class='w-100 card-img' src=" + imagen + ">"
          div +=    "<h5 class='card-title'>" + nombre + "</h5>";
          div += "</div>"

          document.querySelector(".detalles").innerHTML += div

          

      }
    })
    .catch(function(error) {
          console.log("Error: " + error);
    })
