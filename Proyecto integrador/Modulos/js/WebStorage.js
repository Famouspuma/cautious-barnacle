window.addEventListener("load", function () {

  var baseDatos = JSON.parse(window.localStorage.getItem('user'))
  if (baseDatos.nombre != "") {
    UIkit.notification({
        message: 'Bienvenido '+ baseDatos.nombre,
        status: 'primary',
        pos: 'bottom-center',
        timeout: 5000
    });  }


var form = document.querySelector("#form")



form.onsubmit= function (event) {
      var inputNombre = document.querySelector("#name")
      var inputEmail = document.querySelector("#email")
      var inputGenre = document.querySelector("#genre")
      var select = inputGenre.options[ inputGenre.selectedIndex].text
      var emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"


      if (inputNombre.value.length < 3) {
        event.preventDefault();
        UIkit.notification({
            message: 'Ingresa un nombre de 3 caracteres o mas!',
            status: 'warning',
            pos: 'top-center',
            timeout: 5000
        });
      }else if (inputEmail.value == "" ) {
        event.preventDefault();
        UIkit.notification({
            message: 'Ingresa un email valido',
            status: 'primary',
            pos: 'top-center',
            timeout: 5000
        });

      }else if (select == "Elegir...") {
        event.preventDefault()
        UIkit.notification({
            message: 'Elegi un genero',
            status: 'primary',
            pos: 'bottom-center',
            timeout: 5000
        });

      }else {
        var name = inputNombre.value
        var email = inputEmail.value
        var genre = select

        var Usuario = {
          nombre: name,
          correo: email,
          genero: genre
        }

        window.localStorage.setItem('user', JSON.stringify(Usuario))
        console.log(window.localStorage.getItem('user'))
        console.log(JSON.parse(window.localStorage.getItem('user')))
      }


  }

} )
