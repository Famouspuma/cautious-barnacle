

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");


fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    var div
    var nombre
    var imagen
    // console.log(informacion.genres[i]);
    imagen = "https://image.tmdb.org/t/p/w500/" + informacion.poster_path;
    nombre = informacion.title;
    id = informacion.id;
    var contenedor = document.querySelector(".row");
    div =  "<img alt='Responsive image' class='w-100 col-4' src=" + imagen + ">" //ACOMODAR IMAGENES CONTENEDOR BOOSTRAP
    div +=  "<div>" + "<h2 class='col-12 '>" + nombre + "</h1>"
    div +=            "<h3 class='col-12'>" + "detalles" + "</h3>" + "</div>"

    contenedor.innerHTML = div




  //  <div class="row">
    //  <div class="col-9">.col-9</div>
      //<div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
      //<div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  //  </div>



        // console.log(lista);

      })
// Tengo que cambiar el div por un ul con li internos extraidos de la api.

  .catch(function(error) {
    console.log("Error: " + error);
  })
