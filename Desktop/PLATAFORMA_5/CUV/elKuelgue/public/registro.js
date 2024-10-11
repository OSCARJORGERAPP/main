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