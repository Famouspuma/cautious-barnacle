    // var fav
    // fav = document.querySelector("botondemierda").innerHTML
    // // fav = document.querySelector('#botondemierda').innerHTML
    // console.log(fav);
    // fav.addEventListener("click", function () {
    //   fav +=  "<button class='padrefav.fav'>&#10084;</button>"
    // })
// onclick='peliFavorita("+id+")'

window.addEventListener("load", function () {
  const element = document.querySelectorAll('.columnas.h5')
  document.querySelector("div.col-md-4.alert-warning.text-center.columnas")
  if (element) {
    element.forEach(function(el){
      console.log(element);
       el.addEventListener('click', function () {
          alert('click');
       });
    });
  }





  // var fav = document.querySelectorAll("favorita")
  //   console.log(fav);
  //   alert("funciona")
  //   var newFav =  "<button class='btn btn-warning fav'>&#10084;</button>"
  //   fav.forEach().innerHTML = newFav;
})




  //
  // var fav = document.querySelectorAll("favorita").addEventListener("click", function () {
  //   console.log(fav);
  //   alert("funciona")
  //   var newFav =  "<button class='btn btn-warning fav'>&#10084;</button>"
  //   fav.innerHTML = newFav;
  // })


  //
  //
  // idPelicula = new URLSearchParams(location.search).get("idPelicula")
  //
  // // INICIO BLOQUE 1 - Leer el array de storage
  //
  //   // Paso 1 - Leo de localStorage
  //   var jsonFavoritas = localStorage.getItem("peliculasFavoritas")
  //
  //   if (jsonFavoritas == null) {
  //     var favoritas = []
  //   } else {
  //     // Paso 2 - Desempaqueto el json
  //     var objLit = JSON.parse(jsonFavoritas)
  //
  //     // Paso 3 - Leo del obj lit, la caracteristica importante
  //     var favoritas = objLit.caracteristica;
  //   }
  // // CIERRA BLOQUE 1
  //
  // fetch("URLDETALLE" + idPelicula)
  //   .then(function(data) {
  //     return data.json()
  //   })
  //   .then(function(dataPeli) {
  //     // HACEN COSAS PARA MOSTRAR EL DETALLE
  //
  //     // Inicio bloque 2 - Si la peli ya era favorita que aparezca ya pintada la estrella
  //     if (favoritas.indexOf(idPelicula) >= 0) {
  //         "<button class='btn  btn-danger fav' onclick='peliFavorita("+id+")'>&#10084;</button>"      }
  //     // Fin bloque 2
  //
  //   })
  //
  //   // Bloque 3 - Que pasa al clickear en la estrella
  //   document.querySelector("ESTRELLA").onclick = function() {
  //     // Bloque 3 a - Modifico el array
  //     if (favoritas.indexOf(idPelicula) >= 0) {
  //       // La quito
  //       var pos = favoritas.indexOf(idPelicula)
  //       favoritas.splice(pos,1)
  //       DESPINTAR LA ESTRELLA
  //     } else {
  //       // La agrego
  //       favoritas.push(idPelicula)
  //       PINTAR LA ESTRELLA
  //     }
  //     // Fin bloque 3 a
  //
  //     // Bloque 3 b
  //       var objLit = {
  //         caracteristica: favoritas
  //       }
  //
  //       var json = JSON.stringify(objLit)
  //
  //       localStorage.setItem("peliculasFavoritas", json)
  //     // Fin bloque 3 b
  //   }
  //   // Fin bloque 3
//
// })


//   console.log();
//   if ( (window.sessionStorage.getItem('user')) != null) {
//        var div = "<li class='nav-item active'>"
//           div += "<button class='btn btn-danger log' > Log out </button>"
//           div += "</li>"
//           document.querySelector("div.log").innerHTML = div
//           div = document.querySelector("div.log")
//
//           div.addEventListener("click", function() {
//             sessionStorage.clear();
//             var url = window.location.href
//             location.href = url;
//             var div = "<li class='nav-item active'>"
//                 div += "<button type='button' class='btn btn-primary log' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Log in </button>"
//                 div += "</li>"
//                 document.querySelector("div.log").innerHTML = div
//           })
//         }
// })
//
//
