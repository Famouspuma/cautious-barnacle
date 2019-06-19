window.addEventListener("load", function () {


//////////////////////////////////////////////////////////
//   guardar_localstorage();
//   obtener_localstorage();
//
//   function obtener_localstorage(){
//
//
//   if ( window.localStorage.getItem('nombre')) {
//
//
//
//
// }else {
//   console.log("No hay entradas en el local storage");
// }
// }
//
// function guardar_localstorage(){

// videooooo//////////////////////////////////////////


miStorage=window.localStorage;

var form = document.querySelector("#form")



form.onsubmit= function (event) {

      var inputNombre = document.querySelector("#name")
      var inputEmail = document.querySelector("#email")
      var inputGenre = document.querySelector("#genre")
      var select = inputGenre.options[ inputGenre.selectedIndex].text


      var name = inputNombre.value
      var email = inputEmail.value
      var genre = select

           console.log('Hola');

      var Usuario = {
        nombre: name,
        correo: email,
        genero: genre
      }


      window.localStorage.setItem('user', JSON.stringify(Usuario))
      console.log(window.localStorage.getItem('user'))
      console.log(JSON.parse(window.localStorage.getItem('user')))


}

  if ( window.localStorage.getItem('miStorage')=== null) {

  event.preventDefault();
  console.log("No hay entradas en el local storage");

}


})




//////////////////////////VIEJOOOOOO///////////////////////////////////////////////////////



// window.addEventListener("load", function () {
//
//
//   var baseDatos = JSON.parse(window.localStorage.getItem('user'))
//   if (baseDatos.nombre != "") {
//     UIkit.notification({
//         message: 'Bienvenido '+ baseDatos.nombre,
//         status: 'primary',
//         pos: 'top-center',
//         timeout: 3000
//     });  }
//
//
// var form = document.querySelector("#form")
//
//
//
// form.onsubmit= function (event) {
//       var inputNombre = document.querySelector("#name")
//       var inputEmail = document.querySelector("#email")
//       var inputGenre = document.querySelector("#genre")
//       var select = inputGenre.options[ inputGenre.selectedIndex].text
//       var emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
//
//
//       if (inputNombre.value.length < 3) {
//         event.preventDefault();
//         UIkit.notification({
//             message: 'Ingresa un nombre de 3 caracteres o mas!',
//             status: 'warning',
//             pos: 'top-center',
//             timeout: 3000
//         });
//       }else if (inputEmail.value == "" ) {
//         event.preventDefault();
//         UIkit.notification({
//             message: 'Ingresa un email valido',
//             status: 'primary',
//             pos: 'top-center',
//             timeout: 3000
//         });
//
//       }else if (select == "Elegir...") {
//         event.preventDefault()
//         UIkit.notification({
//             message: 'Elegi un genero',
//             status: 'primary',
//             pos: 'top-center',
//             timeout: 3000
//         });
//
//       }else {
//         var name = inputNombre.value
//         var email = inputEmail.value
//         var genre = select
//
//         var Usuario = {
//           nombre: name,
//           correo: email,
//           genero: genre
//         }
//
//         window.localStorage.setItem('user', JSON.stringify(Usuario))
//         console.log(window.localStorage.getItem('user'))
//         console.log(JSON.parse(window.localStorage.getItem('user')))
//       }
//
//
//   }
//
// } )
