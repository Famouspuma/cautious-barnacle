window.onload = function() {
  var queryString = new URLSearchParams(location.search)

  var busco = queryString.get("buscador")

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
}
