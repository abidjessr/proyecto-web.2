
const url = "https://raw.githubusercontent.com/abidjessr/aby-proyecto-API/master/"
let button_activo = null;
const el_lista = document.getElementById("lista");
const el_imagen = document.querySelector("#libro-seleccionado img")
const el_nombre = document.querySelector("#libro-seleccionado h2")
const el_sinopsis = document.querySelector("#libro-seleccionado p b i")
const el_genero = document.querySelector("#libro-seleccionado h4")
const el_autora = document.querySelector("#libro-seleccionado h3")
fetch ( url + "datos.json").then(function (respuesta){
    return respuesta.json();
}).then(function(datos){
    for(let i = 0; i < datos.length; i += 1){ 
     let button = document.createElement("button");
     button.innerHTML = datos[i].nombre;
     el_lista.appendChild(button);
     button.addEventListener("click" , function(){
     el_imagen.src = url + datos[i].imagen;
     el_nombre.innerHTML = datos[i].nombre;
     el_sinopsis.innerHTML = datos[i].sinopsis;
     el_genero.innerHTML = datos[i].genero;
     el_autora.innerHTML = datos[i].autora;
     if(button_activo != null) {
        button_activo.classlist.remove("seleccionado");
     }
     button.classList.add("seleccionado");
     button_activo = button;
      });

     if(i == 0){
        button.click();
     }
     }
    

}).catch(function(error){
    console.log(error);
})