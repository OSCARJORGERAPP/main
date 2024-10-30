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

    document.getElementById('albumForm').addEventListener('submit', async function(event) {
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

            swal("Información Guardada", response.data, "success").then(() => {
                window.location.href = 'albumes.html';
            });
        } catch (error) {
            console.error('Error al actualizar el álbum:', error);
            swal("Error", "Error al actualizar el álbum", "error");
        }
    });

    // Evento para manejar la adición de canciones
    document.getElementById('cancionesForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const nombreDeCancion = document.getElementById('cancion').value;
        const duracion = document.getElementById('duracion').value;
        const link = document.getElementById('link').value;

        try {
            const response = await axios.post(`http://localhost:3000/albums/${albumId}/canciones`, {
                nombreDeCancion,
                duracion,
                link
            });

            swal("Canción Agregada", response.data, "success");
        } catch (error) {
            console.error('Error al agregar la canción:', error);
            swal("Error", "Error al agregar la canción", "error");
        }
    });

    // Alerta inicial
    swal("IMPORTANTE!!", "Si agrega canciones, lo hará para el título que se muestra en el formulario para editar álbumes.", "warning");
});
