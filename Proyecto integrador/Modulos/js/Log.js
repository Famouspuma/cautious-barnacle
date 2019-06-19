window.addEventListener("load", function () {
  console.log();
  if ( (window.sessionStorage.getItem('user')) != null) {
       var div = "<li class='nav-item active'>"
          div += "<button class='btn btn-danger log'> Log out </button>"
          div += "</li>"
          document.querySelector("div.log").innerHTML = div
          document.getElementById("button.log").addEventListener("click").sessionStorage.clear();
}





})
