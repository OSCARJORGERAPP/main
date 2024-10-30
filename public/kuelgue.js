// Pregunta inicial sobre el cantante de El Kuelgue
let cantante = prompt('El cantante del cuelgue se llama Julián Kartun? Responda solo si o no');

// Verifica que el usuario haya respondido algo y convierte la respuesta a minúsculas
if (cantante) {
    cantante = cantante.toLowerCase();
    
    // Verifica la respuesta y actualiza la interfaz en consecuencia
    if (cantante === 'si') {
        alert('Bienvenido fan de El Kuelgue...!!!');
        document.querySelector(".homeTitulo").textContent = 'Hola Fan..!!';
        document.querySelector(".homeTitulo").style.color = "blue";
    } else {
        alert('Aunque no seas fan de El Kuelgue podés visitar la web');
        document.querySelector(".homeTitulo").textContent = 'No Fan..!!';
        document.querySelector(".homeTitulo").style.color = "blue";
    }
}


// Validar password > 6 caracteres
function validarPassword() {
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');
    if (password.length < 6) {
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
}

// Función para manejar la recuperación de contraseña usando SweetAlert
function olvideMiPassword() {
    return swal("Password reset", "Se ha enviado un mail para el cambio de password.", "success");
}

// Obtener el formulario de login
const form = document.getElementById('loginForm');
console.log(form)
const mensajeError = document.getElementById('mensajeError');

// Añadir un evento de escucha al formulario para el envío de datos
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado

    // Obtener los valores de los campos del formulario
    const nombre = form.elements['nombre'].value;
    const password = form.elements['password'].value;

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        mensajeError.style.display = 'block';
        return; // Salir de la función si la validación falla
    } else {
        mensajeError.style.display = 'none';
    }

    try {
        // Enviar los datos de login al servidor usando Axios
        const response = await axios.post('https://elKuelgue.onrender.com/users/login', {
            nombre: nombre,
            password: password
        });

        // Manejar la respuesta del servidor
        if (response.data.success) {
            swal({
                title: "Login exitoso",
                text: "¡Bienvenido de nuevo!",
                icon: "success",
            }).then(() => {
                // Redirigir al usuario a la página de álbumes
                window.location.href = 'albumes.html';
            });
        } else {
            swal({
                title: "Error de login",
                text: "Credenciales incorrectas. Por favor, inténtelo de nuevo.",
                icon: "error",
            });
        }

    } catch (error) {
        // Manejar cualquier error que ocurra durante el proceso de login
        console.error('Error al iniciar sesión:', error);
        swal({
            title: "Error de login",
            text: "Registrese y vuelva a intentarlo.",
            icon: "error",
        });
    }
});
