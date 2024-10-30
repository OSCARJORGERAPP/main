//Obtiene los títulos de albums
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('https://elKuelgue.onrender.com/albums');
        const albumes = response.data;
        const selectAlbumes = document.getElementById('albumes');

//Crea la lista desplegable y las opciones
        albumes.forEach(album => {
            const optionElement = document.createElement('option');
            optionElement.value = album._id;
            optionElement.textContent = album.titulo;
            selectAlbumes.appendChild(optionElement);
        });
//Al cambiar el album en la lista, obtiene las canciones y su duracióny completa la tabla
        selectAlbumes.addEventListener('change', async function() {
            const albumId = selectAlbumes.value;
            const response = await axios.get(`https://elKuelgue.onrender.com/albums/${albumId}`);
            const album = response.data;
            const tbody = document.querySelector('#tablaCanciones tbody');
            tbody.innerHTML = '';

            album.canciones.forEach(cancion => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${cancion.nombreDeCancion}</td>
                    <td>${cancion.duracion}</td>
                    <td>
                        <span class="icon" onclick="borrarCancion('${albumId}', '${cancion._id}')">&#128465;</span>
                        <span class="icon" onclick="abrirLink('${cancion.link}')">&#127925;</span>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        });
    } catch (error) {
        console.error('Error al cargar los álbumes:', error);
    }
});

//Eliminar canción
async function borrarCancion(albumId, cancionId) {
    try {
        await axios.delete(`https://elKuelgue.onrender.com/albums/${albumId}/canciones/${cancionId}`);
        swal("Canción eliminada", "La canción fue eliminada con éxito", "information").then(() => {
            document.querySelector('select#albumes').dispatchEvent(new Event('change'));//refresca la lista de albums
        });
    } catch (error) {
        console.error('Error al eliminar la canción:', error);
        swal("Error", "Hubo un problema al eliminar la canción", "error");
    }
}
//Al hacer click en música abre la página para escuchar la canción en una página nueva
function abrirLink(url) {
    window.open(url, '_blank');
}

//Logout
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');

  logoutButton.addEventListener('click', async () => {
      try {
          await axios.post('https://elKuelgue.onrender.com/users/logout');
          window.location.href = 'https://elKuelgue.onrender.com/index.html';  // Redirige al usuario al login después del logout
      } catch (error) {
          console.error('Error al cerrar sesión:', error);
      }
  });
});
