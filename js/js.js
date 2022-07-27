
let libros = [ "Nosotros En La Luna", "Violet y Finch", "Somos Polvo De Estrellas", "Marfil", "Ebano", "A través De Mi Ventana","Heist", "Sigue Mi Voz", "Boulevard", "Silence", "Antes De Diciembre", "Ciudades De Humo", "La Ultima Nota", "Heartstopper Vol. 1", "Un Beso Bajo La Lluvia" ]
let contenedor = document.getElementById("lista");

for ( let i = 0; i < libros.length; i ++ ) {
    contenedor.innerHTML +="<button>" + libros [i] + "</button>";
}
