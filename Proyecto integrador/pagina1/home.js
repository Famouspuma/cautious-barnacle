window.onload = function () {

// BUSCADOR
document.querySelector("form").addEventListener("click", function(event){
  event.preventDefault()
});

////////////////////////// CARGA TRENDING //////////////////////////////////////////////////

  fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0bcd16440b25702a4e2645e9b22f2a2d")

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
          div +=  "<a href='../pagina5/detallePelicula.html'>" + "<img class='w-100 card-img'src=" + imagen +">" + "</a>"
          div +=  "<h5 class='card-title'>" + nombre + "</h5>";
          div += "</div>"

          document.querySelector("div.populares").innerHTML += div

      }
    })
    .catch(function(error) {
          console.log("Error: " + error);
    })


////////////////////////// CARGA mejorPuntajes //////////////////////////////////////////////////
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&page=1")

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
            div +=  "<a href='../pagina5/detallePelicula.html'>" + "<img class='w-100 card-img'src=" + imagen +">" + "</a>"
            div +=    "<h5 class='card-title'>" + nombre + "</h5>";
            div += "</div>"

            document.querySelector("div.mejorPuntajes").innerHTML += div

        }
      })

      .catch(function(error) {
            console.log("Error: " + error);
      })

/*
BACKUP      ////////////////////////// CARGA mejorPuntajes //////////////////////////////////////////////////
          fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&page=1")

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
                  div +=    "<h3>" + nombre + "<h3>";
                  div +=    "<img class='w-100' src=" + imagen + ">"
                  div += "</div>"

                  document.querySelector("div.mejorPuntajes").innerHTML += div

              }
            })

            .catch(function(error) {
                  console.log("Error: " + error);
            })
*/
//////////////////////// CARGA nuevosLanzamientos //////////////////////////////////////////////////
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&page=1")
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
        div +=  "<a href='../pagina5/detallePelicula.html'>" + "<img class='w-100 card-img'src=" + imagen +">" + "</a>"
        div +=    "<h5 class='card-title'>" + nombre + "</h5>";
        div += "</div>"
        document.querySelector("div.nuevosLanzamientos").innerHTML += div
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })



///////////////////////////////CARROUSEL/////////////////////////////

  //
  // fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e2d1aa72fbd5bdcc6bf4f5760ec0b244&language=en-US&page=1")
  //
  //   .then(function(respuesta) {
  //     return respuesta.json()
  //   })
  //
  //   .then(function(informacion) {
  //     console.log(informacion);
  //     console.log(informacion.results.length);
  //     var div
  //     var imagen
  //     for (var i = 0; i < informacion.results.length; i++) {
  //         console.log(informacion[i]);
  //         imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
  //         nombre = informacion.results[i].title;
  //
  //         div  = "<div class=´carousel-item active w-100´>"
  //         div +=    "<img src=" + imagen + " class=´d-block´ alt=´´>";
  //         div +=  "</div>"
  //
  //
  //         document.querySelector("div.perro").innerHTML += div
  //
  //     }
  //   })
  //
  //   .catch(function(error) {
  //         console.log("Error: " + error);
  //   })


    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e2d1aa72fbd5bdcc6bf4f5760ec0b244&language=en-US&page=1")

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

            li  = "<li>"
            li +=    "<img src=" + imagen + " alt=´´>"
            li +=    "<div class=´uk-position-center uk-panel´></div>"
            li +=  "</li>"

            document.querySelector("#gato").innerHTML += li

        }
      })

      .catch(function(error) {
            console.log("Error: " + error);
      })




}
