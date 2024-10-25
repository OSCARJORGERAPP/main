document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');

    if (albumId) {
        try {
            const response = await axios.get(`http://localhost:3000/albums/${albumId}`);
            const album = response.data;

            document.getElementById('titulo').value = album.titulo;
            document.getElementById('fechaDeLanzamiento').value = album.fechaDeLanzamiento;
            document.getElementById('descripcion').value = album.descripcion;
            document.getElementById('portada').value = album.portada;

        } catch (error) {
            console.error('Error al obtener los datos del álbum:', error);
        }
    }

    document.getElementById('albumForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento').value;
        const descripcion = document.getElementById('descripcion').value;
        const portada = document.getElementById('portada').value;

        try {
            const response = await axios.put(`http://localhost:3000/albums/${albumId}`, {
                titulo,
                fechaDeLanzamiento,
                descripcion,
                portada
            });
            alert(response.data);
            window.location.href = 'albumes.html'; // Redirigir a la lista de álbumes después de la actualización
        } catch (error) {
            console.error('Error al actualizar el álbum:', error);
            alert('Error al actualizar el álbum');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    swal("IMPORTANTE!!", "Si agrega canciones, lo hará para el título que se muestra en el formulario para editar álbumes.", "warning");
});
