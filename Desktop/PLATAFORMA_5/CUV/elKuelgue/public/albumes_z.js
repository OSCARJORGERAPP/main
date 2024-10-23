document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.getElementById('albumsTableBody');

    try {
        const response = await axios.get('http://localhost:3000/albums');
        const albums = response.data;

        if (Array.isArray(albums)) {
            albums.forEach(album => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${album.titulo}</td>
                    <td>${album.descripcion}</td>
                    <td>${album.fechaDeLanzamiento}</td>
                    <td><a href="${album.portada}" target="_blank">Ver</a></td>
                    <td>
                        <span class="icon" onclick="editAlbum('${album._id}')">&#9998;</span>
                        <span class="icon" onclick="deleteAlbum('${album._id}')">&#128465;</span>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            tableBody.innerHTML = `<tr><td colspan="5">${albums}</td></tr>`;
        }
    } catch (error) {
        console.error('Error al obtener los álbumes:', error);
        tableBody.innerHTML = '<tr><td colspan="5">Error al obtener los álbumes</td></tr>';
    }
});

async function editAlbum(id) {
    const titulo = document.getElementById('titulo').value;
    const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento').value;
    const descripcion = document.getElementById('descripcion').value;
    const portada = document.getElementById('portada').value;

    try {
        const response = await axios.put(`http://localhost:3000/albums/${id}`, {
            titulo,
            fechaDeLanzamiento,
            descripcion,
            portada
        });
        alert(response.data);
        location.reload(); // Recarga la página para actualizar la lista de álbumes
    } catch (error) {
        console.error('Error al editar el álbum:', error);
        alert('Error al editar el álbum');
    }
}

async function deleteAlbum(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/albums/${id}`);
        alert(response.data);
        location.reload(); // Recarga la página para actualizar la lista de álbumes
    } catch (error) {
        console.error('Error al borrar el álbum:', error);
        alert('Error al borrar el álbum');
    }
}
