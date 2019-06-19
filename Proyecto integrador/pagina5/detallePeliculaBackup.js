
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var div
    var nombre
    var imagen
    var descripcion
    var estreno
    var generos = ""
    var idGenero

    nombre = informacion.title;
    imagen = "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
    descripcion = informacion.overview;
    estreno = informacion.release_date;
    id = informacion.id;
    for (var i = 0; i < (informacion.genres.length - 1); i++) {
      generos += "<a href='../pagina2/listadoGenero.html?id=" + informacion.genres[i].id + "'>" + informacion.genres[i].name + "</a>" + " / ";
      // idGenero += informacion.genres[i].id;
    }
    generos += "<a href='../pagina2/listadoGenero.html?id=" + informacion.genres[i].id + "'>" + informacion.genres[i].name + "</a>"
    var contenedor = document.querySelector(".row");

    contenedor.innerHTML =  "<div class='col-4  '>"
                            + "<img class='w-100 rounded ' src=" + imagen + ">"
                           + "</div>" //ACOMODAR IMAGENES CONTENEDOR BOOSTRAP

    contenedor.innerHTML +=  "<div class='col-8 w-100 columna text-white rounded'>"
                              + "<br>"
                              + "<h1 class=''>" + nombre + "</h1>"
                              + "<h5 class=''>" + "Lanzamiento: " + estreno + "</h5>"
                              + "<h5 class=''>" + "Generos: " + generos + "</h5>"
                              + "<br>"
                              + "<h5 class='video'>" + descripcion + "</h5>"
                              + "<br>"
                            + "</div>"

      })

  .catch(function(error) {
    console.log("Error: " + error);
  })

//////////////////////////// TRAILER /

fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
    })

  .then(function(informacion) {
    console.log(informacion);
    var contenedor = document.querySelector(".video");
    var video = "https://www.youtube.com/embed/" + informacion.results[0].key
    console.log(video);

    contenedor.innerHTML += "<br>"
                          + "<br>"
                          + "<div class='col-xs-12 text-center embed-responsive embed-responsive-16by9'>" + "<iframe class='rounded' width='960' height='540' src='" + video + " 'frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "</div>"

    })

  .catch(function(error) {
    console.log("Error: " + error);
    })

//////////////// Carrousel Recomendadas ///////////////



    fetch("https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=e2d1aa72fbd5bdcc6bf4f5760ec0b244&language=en-US&page=1")

      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);
        console.log(informacion.results.length);
        var div
        var imagen
        for (var i = 0; i < informacion.results.length; i++) {
            console.log(informacion[i]);
            imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
            nombre = informacion.results[i].title;
            id = informacion.results[i].id;
            li  = "<li>"
            li +=    "<a href='../pagina5/detallePelicula.html?id=" + id + "'>" + "<img src=" + imagen + " alt=´´>"
            li +=    "<div class=´uk-position-center uk-panel´></div>"
            li +=  "</li>"

            document.querySelector("#carousel").innerHTML += li

        }
      })

      .catch(function(error) {
            console.log("Error: " + error);
      })
