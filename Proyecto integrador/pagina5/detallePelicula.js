

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log("este es el id : " + id);


fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion)
    var div
    var nombre
    var imagen
    var contenido = document.querySelector(".detalles");
    // console.log(informacion.genres[i]);
    imagen = "https://image.tmdb.org/t/p/w500/" +informacion.poster_path;

    nombre = informacion.title;
    id = informacion.id;
    console.log(id);
    console.log(nombre);
    contenido.innerHTML = "<h1>" + nombre + "</h1>"
    contenido.innerHTML += "<img class='w-100 card-img md-6'src=" + imagen +">" //ACOMODAR IMAGENES CONTENEDOR BOOSTRAP

        // console.log(lista);

      })
// Tengo que cambiar el div por un ul con li internos extraidos de la api.

  .catch(function(error) {
    console.log("Error: " + error);
  })
