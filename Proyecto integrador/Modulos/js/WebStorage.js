window.addEventListener("load", function () {

var form = document.querySelector("#form")
form.onsubmit= function () {
      // 1) validamos la data que contiene cada camppo
      var name = "io"
      var email = "algo@gmail.com"
      var genre = "hombre"
      //2) en el caso que pase todas las validaciones, guardo la data del usuario

      var Usuario = {
        nombre: name,
        correo: email,
        genero: genre
      }

        window.localStorage.setItem('user', JSON.stringify(Usuario))
        console.log(window.localStorage.getItem('user'))
        console.log(JSON.parse(window.localStorage.getItem('user')))
      //3) modifico el HTML para que aparezca el nombre

  }

} )
