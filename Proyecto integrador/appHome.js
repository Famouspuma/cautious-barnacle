window.onload = function () {

// BUSCADOR
document.querySelector("form").addEventListener("click", function(event){
  event.preventDefault()
});


////////////////////////// CARGA 1 pelicula  //////////////////////////////////////////////////
fetch("https://api.themoviedb.org/3/movie/550?api_key=0bcd16440b25702a4e2645e9b22f2a2d")

  .then(function(respuesta) {
    return respuesta.json()
  })

  .then(function(informacion) {
    console.log(informacion);

    document.querySelector("div").innerHTML += "<div class=" + "peliculas" + ">" //CONTENEDOR DE PELICULA

        var imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
        document.querySelector("div").innerHTML += "<img src=" + imagen + ">"

        var nombre = informacion.title;
        document.querySelector("div").innerHTML += "<h1>" + nombre + "<h1>";

    document.querySelector("div").innerHTML += "</div>"

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })


////////////////////////// CARGA TRENDING //////////////////////////////////////////////////

  fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0bcd16440b25702a4e2645e9b22f2a2d")

    .then(function(respuesta) {
      return respuesta.json()
    })

    .then(function(informacion) {
      console.log(informacion);
      console.log(informacion.results.length);
      for (var i = 0; i < informacion.results.length; i++) {
          console.log(informacion[i]);

          document.querySelector("div").innerHTML += "<div class=" + "peliculas" + ">" //CONTENEDOR DE PELICULA
            var imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
            document.querySelector("div").innerHTML += "<img src=" + imagen + ">"
            var nombre = informacion.results[i].title;
            document.querySelector("div").innerHTML += "<h1>" + nombre + "<h1>";
          document.querySelector("div").innerHTML += "</div>"
      }
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })



// EJEMPLO giphy
/*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&q=" + busco + "&limit=25&offset=0&rating=G&lang=en")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        var arrayDeGifs = informacion.data

        for (var i = 0; i < arrayDeGifs.length; i++) {
          var titulo =  arrayDeGifs[i].title
          var url = arrayDeGifs[i].images.original.url
          var id = arrayDeGifs[i].id

          document.querySelector("div.contenido").innerHTML += "<p> <a href=detalleGif.html?idGif=" + id + ">" + titulo + "</a></p>"
          document.querySelector("div.contenido").innerHTML += "<img src=" + url + " >"
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
*/




























// var buscadorInput = document.querySelector(".buscador")
// document.querySelector("form").onsubmit = function(e) {
// console.log(buscadorInput);
//   if (buscadorInput.value == "") {
//     e.preventDefault()
//     alert("Eh amigo, minimo 3 caracteres")
//   }
// }

/*
fetch("https://api.giphy.com/v1/gifs/trending?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&limit=25&rating=G")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    var arrayDeGifs = informacion.data

    for (var i = 0; i < arrayDeGifs.length; i++) {
      var titulo =  arrayDeGifs[i].title
      var url = arrayDeGifs[i].images.original.url
      var id = arrayDeGifs[i].id

      document.querySelector("div").innerHTML += "<p> <a href=detalleGif.html?idGif=" + id + ">" + titulo + "</a></p>"
      document.querySelector("div").innerHTML += "<img src=" + url + " >"
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
*/

// CONEXION CON API
//var cant = prompt("cuantos resultados quieres ver?")



/*
fetch("https://api.giphy.com/v1/gifs/trending?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&limit=" + 4 + "&rating=G")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log("API Random")
    console.log(informacion);
    console.log("")
    var arrayDeGifs = informacion.data

    for (var i = 0; i < arrayDeGifs.length; i++) {
      var titulo =  arrayDeGifs[i].title
      var url = arrayDeGifs[i].images.original.url
      var id = arrayDeGifs[i].id

      document.querySelector("div").innerHTML += "<p> <a href=detalleGif.html?idGif=" + id + ">" + titulo + "</a></p>"
      document.querySelector("div").innerHTML += "<img src=" + url + " >"
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
*/

}
