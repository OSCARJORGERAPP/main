//GRABA UN USUARIO NUEVO
// Selecciona el formulario de registro en el documento HTML
const form = document.getElementById('registrationForm');
// Selecciona el elemento del mensaje de error
const mensajeError = document.getElementById('mensajeError');

// Añade un evento de escucha al formulario que se activa cuando se envía el formulario
form.addEventListener('submit', async function(event) {
    // Previene el comportamiento predeterminado del formulario (recargar la página)
    event.preventDefault(); 

    // Obtiene los valores de los campos del formulario
    const nombre = form.elements['nombre'].value;
    const password = form.elements['password'].value;
    const email = form.elements['email'].value;

    // Verifica si la contraseña tiene al menos 6 caracteres
    if (password.length < 6) {
        // Muestra el mensaje de error si la validación falla
        mensajeError.style.display = 'block';
        // Sale de la función sin continuar con el registro
        return; 
    } else {
        // Oculta el mensaje de error si la validación es exitosa
        mensajeError.style.display = 'none';
    }

    try {
        // Envía los datos del formulario al backend usando una solicitud POST con Axios
        const response = await axios.post('http://localhost:3000/users', {
            nombre: nombre,
            password: password,
            email: email
        });

        // Muestra una alerta de éxito utilizando SweetAlert
        swal({
            title: "Registro exitoso",
            text: "Para ingresar deberá loguearse desde la home page.",
            icon: "success",
        }).then(() => {
            // Redirige al usuario a la página de inicio
            window.location.href = 'index.html';
        });

    } catch (error) {
        // Imprime el error en la consola si ocurre algún problema con el registro
        console.error('Error al registrar el usuario:', error);
        // Muestra una alerta de error utilizando SweetAlert
        swal({
            title: "Error",
            text: "Hubo un problema al registrar el usuario.",
            icon: "error",
        });
    }
});

//Validar pasword > 6 caracteres
function validarPassword() {
  const password = document.getElementById('password').value;
  const mensajeError = document.getElementById('mensajeError');

  if (password.length < 6) {
      mensajeError.style.display = 'block';
  } else {
      mensajeError.style.display = 'none';
  }
}