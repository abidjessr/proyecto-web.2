
 function cambiar_nell(){
    let titulo_libro = document.querySelector("#libro-seleccionado h2");
    titulo_libro.innerHTML = "Nosotros en la Luna";
  
    let caja = document.querySelector("#libro-seleccionado img");
    caja.src = "imagenes/nosotros en la luna.jpeg";
  
    let descripcion = document.querySelector("div p");
    descripcion.innerHTML = "Una noche en Paris. Dos caminos entrelazados. Cuando Rhys y Ginger se conocen en las calles de la Ciudad de la Luz, no imaginan que sus vidas se unirán para siempre, a pesar de la distancia y de que no puedan ser más diferentes. Ella vive en Londres y a veces se siente tan perdida que se ha olvidado hasta de sus propios sueños. Él es incapaz de quedarse quieto en ningún lugar y cree saber quién es. Y cada noche su amistad crece entre emails llenos de confidencias, dudas e inquietudes. Pero ¿qué ocurre cuando el paso del tiempo pone a prueba su relación? ¿Es posible colgarse de la luna junto a otra persona sin poner en riesgo el corazón?  Una historia sobre el amor, el destino y la búsqueda de uno mismo. Porque a veces, solo hace falta mirar la luna para sentirte cerca de otra persona. Porque estar enamorado es como estar permanentemente colgado de la luna. Boca abajo. Con una sonrisa inmensa. Sin miedo." 
  }

 function cambiar_vf(){
  let titulo_libro = document.querySelector("#libro-seleccionado h2");
  titulo_libro.innerHTML = "Violet y Finch";

  let caja = document.querySelector("#libro-seleccionado img");
  caja.src = "imagenes/violet y finch.jpeg";

  let descripcion = document.querySelector("div p");
  descripcion.innerHTML = "Alice Kellen  nacida en Valencia en 1989, es una escritora española de literatura romántica juvenil y adulta "
 }
 