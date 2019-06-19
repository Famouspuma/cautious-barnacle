window.addEventListener("load",function(){

idPelicula=new URLSearchParams(location.search).get("idPelicula")



Jsooon


fetch("URLDETALLE" + idPelicula)
  .then(function(data){
    return data.json()
  })

  .then (function(dataPeli){
    if (favoritas.indexOf(idPelicula)>=0) {
      // poner estrellita
    }
  })

document.querySelector("ESTRELLA").onclick=function(){
  if (favoritas.indexOf(idPelicula)>=0) {
    var pos=favoritas.indexOf(idPelicula)
    favoritas.splice(pos,1)
  quitar estrella
  }else {
    pintar estrellla
  }

var Json con objetos literales y etc etc


}


})
