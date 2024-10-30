//VALIDA LA EDAD DEL USUARIO
function edad() {
  let edad = prompt('cual es tu edad? :')
  if (edad < 21) {
       // SELECCIONA TODOS LOS BOTONES DENTRO DE DIV CON CLASE "fecha"
    const buttons = document.querySelectorAll('.fecha button');

    // ITERA SOBRE CADA BOTON Y CAMBIA SU ATRIBUTO ONCLICK Y EL TEXTO 
    buttons.forEach(button => {
        // EXTRAE EL VALOR DE 'LUGAR' DEL ATRIBUTO ONCLICK ORIGINAL
        const lugar = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        // ASIGNA UN NUEVO ONCLICK CON EL SEGUNDO ARGUMENTO COMO FALSO
        button.onclick = function() {
            getTickets(lugar, false);
        };
        
        //CAMBIA EL TEXTO DEL BOTON A AGOTADAS Y EL COLOR A ROJO
        buttons.forEach(button => {
        button.textContent = 'BLOQUEADO'
        button.style.color = 'red';
        swal('Menor de edad!','Lo sentimos, no puede comprar tickets', 'error')
        });
        disableSoldOutButtons(ciudad);
        })
      }
    }

edad()

//CREACION DE UN OBJETO QUE CONTENGA CIUDAD/SHOW Y ENTRADAS DISPONIBLES
const entradas=[
  {ciudad:'Mallorca',tickets: 3},
  {ciudad:'Valencia',tickets: 3},
  {ciudad:'Barcelona',tickets:6},
  {ciudad:'Madrid',tickets:6},
  {ciudad:'Málaga',tickets:3},
  {ciudad:'Copenhage',tickets:3},
  {ciudad:'Berlín',tickets:3},
  {ciudad:'Dublin',tickets:3},
  {ciudad:'Londres',tickets:3},
  {ciudad:'Rosario',tickets:3},
  {ciudad:'Movistar Arena',tickets:3},
  {ciudad:'Mar del plata',tickets:3},
]
 console.log(entradas)

 //FUNCION getTickets
 function getTickets(ciudad) {
  const ciudadObj = entradas.find(entrada => entrada.ciudad === ciudad);

  if (ciudadObj && ciudadObj.tickets > 0) {
      ciudadObj.tickets -= 1;
      swal('Compra exitosa','tickets restantes para '+ ciudad + ': ' + ciudadObj.tickets, 'success')
      if (ciudadObj.tickets === 0) {
          disableSoldOutButtons(ciudad);
      }
  } else {
      swal('Lo sentimos!', 'las entradas para ' + ciudad + 'están agotadas', 'error');
      disableSoldOutButtons(ciudad);
  }
}

//FUNCION disableSoldOutButtons
function disableSoldOutButtons(ciudad) {
  const buttons = document.querySelectorAll('button[onclick^="getTickets"]');
  buttons.forEach(button => {
      if (button.getAttribute('onclick').includes(ciudad)) {
          button.disabled = true;
          button.innerHTML = 'SOLD OUT';
      }
  });
}

// VALIDA LA EXISTENCIA DE ENTRADAS AL CARGAR LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
  entradas.forEach(entrada => {
      if (entrada.tickets === 0) {
          disableSoldOutButtons(entrada.ciudad);//SI NO HAY ENTRADAS INHABILITA EL BOTON
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');

  logoutButton.addEventListener('click', async () => {
      try {
          await axios.post('https://elKuelgue.onrender.com/logout');
          window.location.href = 'https://elKuelgue.onrender.com/index.html';  // Redirige al usuario al login después del logout
      } catch (error) {
          console.error('Error al cerrar sesión:', error);
      }
  });
});
