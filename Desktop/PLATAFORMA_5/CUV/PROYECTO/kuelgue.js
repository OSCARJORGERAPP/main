//VALIDA QUE EL VISITANTE CONOZCA A JULIAN KARTUN (SI ES BIENVENIDO COMO FAN, NO BIENVENIDO COMO NO FAN)
//APAGA EL NOMBRE DE LA BANDA


//PIDE QUE AFIRME O NIEGUE EL NOMBRE DEL CANTANTE DE LA BANDA POR SI  O POR NO    
let cantante=prompt('El cantante del cuelgue se llama Julián Kartun? Responda solo si o no').toLowerCase()

//SI AFIRMA LA PREGUNTA ES BIENVENIDO COMO FAN Y CAMBIA A AZUL EL NOMBRE DE LA BANDA (ABAJO DERECHA)
if(cantante==='si'){
    alert('Bienvenido fan de El Kuelgue...!!!')
    document.querySelector(".homeTitulo").textContent='Hola Fan..!!'
        document.querySelector(".homeTitulo").style.color="blue"    
}
//CUALQUIER INGRESO DISTINTO DE SI, IDENTIFICA AL USUARIO COMO NO FAN Y APAGA EL NOMBRE DE LA BANDA (ABAJO DERECHA)
else{
        alert('Aunque no seas fan de El Kuelgue podés visitar la web')
        document.querySelector(".homeTitulo").textContent='No Fan..!!'
        document.querySelector(".homeTitulo").style.color="blue"
        
    }
//FUNCION getTickets
function getTickets(lugar, tickets){
    if (tickets === false) {
        return swal(
          "Lo sentimos!",
          "No hay más tickets para " + 
          lugar, "info",
        );
      } else {
        return swal("Compra exitosa!", "Ud. ha adquirido un ticket para " + lugar + 
        " concert", "success");
      }
}

getTickets(lugar, tickets)











    //MANIPULAR EL DOM
//document.querySelector("h1") // Selecciona el primer "h1" que encuentra en el documento

//document.querySelector("h1").style.color = "lime"

//let parrafo = document.querySelector(".ejemplo_clase")
//parrafo.style.color = "red"
//parrafo.textContent = "cambio el texto"

//CHEQUEAR QUE HACEN EN LA CONSOLA
//document.body
//document.querySelector('p')
//document.querySelector('#primary')
//document.querySelector('.important')
//document.querySelector('p.important')
//document.querySelector('#nav ol li')
//document.querySelector('h1, p')


   