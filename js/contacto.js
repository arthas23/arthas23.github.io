const Api_Url = "https://restcountries.com/v2/all";

const xhi = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.response);
    
    var HTMLResponse = document.querySelector("#paises");
    const tpl = data.map((country) => `<option value="${country.alpha3Code}">${country.name}</option>)`);
    HTMLResponse.innerHTML = `
    <label for="paises">Paises: </label> 
    <select name="paises" id="paises" class="select"> ${tpl} </select>`
  }
}

xhi.addEventListener("load", onRequestHandler);
xhi.open("GET", `${Api_Url}`);
xhi.send();

//Api mapa

var map = L.map('map').setView([-17.7828485, -63.1799372], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXVndXN0b3JvbWFubyIsImEiOiJjbDJ3OWRraDgwZGpiM2pxY2o1MG9zdzJ6In0.Al9P9x2CZfKE3luFOaMdEg'
}).addTo(map);

//Codigo para mostrar datos en cosola 

//nombre 
var nombreUSR = document.getElementById("nombre");
nombreUSR.addEventListener("change", function(){
  console.log("Nombre del usuario: " + nombreUSR.value)
} )
//email
var emailUSR = document.getElementById("email");
emailUSR.addEventListener("change", function(){
  console.log("Email del usuario: " + emailUSR.value )
})
//asunto
var asuntoUSR = document.getElementById("asunto");
asuntoUSR.addEventListener("change", function(){
  console.log("Asunto del usuario: " + asuntoUSR.value )
})
// Muestra la selección del pais
document.getElementById("paises").addEventListener("change", function(e) {
  console.log("Codigo pais: "+ e.target.value);
});
// envia un registro a la consola si se ha marcado el checkbox
document.getElementById("confirmacion").addEventListener("change", function(evento) {
    console.log("Enviar email de confirmacion: " + evento.target.checked);
});
//muestra en consola el tipo de suscripcion elegida
document.getElementsByName("suscripcion").forEach(function(radio) {
    radio.addEventListener("change", function(evento) {
        console.log("El usuario eligio: " + evento.target.value);
    });
});

function mostrarConsola(){
  event.preventDefault();
  var formulario = document.querySelector("form");
  console.clear()
  console.log(formulario.elements[0].value); 
  console.log(formulario.elements[1].value); 
  console.log(formulario.elements[2].value); 
  console.log("Codigo del pais: " +formulario.elements[3].value); 
  console.log(formulario.elements[4].checked); 
  console.log(formulario.elements[5].value); 
  console.log(formulario.elements[7].value);
}


