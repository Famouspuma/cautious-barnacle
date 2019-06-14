window.addEventListener("load", function () {

var form = document.querySelector("#form")
// var theForm= form.elements;
// var arrayForm= Array.from(theForm);
// arrayForm.pop();


form.onsubmit= function () {
      // 1) validamos la data que contiene cada camppo
      var name = ""
      var email = ""
      var genre = ""
      //2) en el caso que pase todas las validaciones, guardo la data del usuario

      var Usuario = {
        nombre: name,
        correo: email,
        genero: genre
      }

        window.localStorage.setItem('user', JSON.stringify(Usuario))
        console.log(window.localStorage.getItem('user x'))
        console.log(JSON.parse(window.localStorage.getItem('user')))


       if (form.value=="") {
         event.preventDefault();
         alert ("Debes llenar los campos")
       }


      //3) modifico el HTML para que aparezca el nombre



  }

} )

// if (sessionstorage.getItem("usuario")!=null){
//
// }
