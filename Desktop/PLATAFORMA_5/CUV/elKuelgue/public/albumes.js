//OBTIENE LOS DATOS DE ALBUMS MONGO DB LES DA FORMATO Y LOS MUESTRA
document.addEventListener('DOMContentLoaded', async () => {
  const tableBody = document.getElementById('albumsTableBody');

  try {
      const response = await axios.get('https://elKuelgue.onrenders.com:port/albums');
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
                      <span class="icon" onclick="window.location.href='editAlbum.html?id=${album._id}'">&#9998;</span>
                      <span class="icon" onclick="deleteAlbum('${album._id}')">&#128465;</span>
                  </td>
              `;
              tableBody.appendChild(row);
          });
      } else {
          tableBody.innerHTML = `<tr><td colspan="5">${albums}</td></tr>`;
          location.reload()
      }
  } catch (error) {
      console.error('Error al obtener los álbumes:', error);
      tableBody.innerHTML = '<tr><td colspan="5">Error al obtener los álbumes</td></tr>';
  }
});
//TOMA LOS DATOS DE EDITALBUM MODIFICA LA db Y RECARGA LA PAGINA
async function editAlbum(id) {
    const titulo = document.getElementById('titulo').value;
    const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento').value;
    const descripcion = document.getElementById('descripcion').value;
    const portada = document.getElementById('portada').value;

    try {
        const response = await axios.put(`https://elKuelgue.onrenders.com:port/albums/${id}`, {
            titulo,
            fechaDeLanzamiento,
            descripcion,
            portada
        });
        alert(response.data);
        location.reload(); // Recarga la página para actualizar la lista de álbumes
    } catch (error) {
        //console.error('Error al editar el álbum:', error);
        alert('Error al editar el álbum');
    }
}

async function deleteAlbum(id) {
    try {
        const response = await axios.delete(`https://elKuelgue.onrenders.com:port/albums/${id}`);
        alert(response.data);
        location.reload(); // Recarga la página para actualizar la lista de álbumes
    } catch (error) {
        console.error('Error al borrar el álbum:', error);
        alert('Error al borrar el álbum');
    }
}


//CAMBIA EL COLORDE LAS ESTRELLAS
function toggleStar(element) {
    element.classList.toggle('clicked');
}

//GRABA UN ALBUM NUEVO
document.getElementById('albumForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const form = event.target;
  console.log(form)
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
      const response = await axios.post('https://elKuelgue.onrenders.com:port/albums', data);
      alert(response.data);
      form.reset();
      location.reload();
  } catch (error) {
      console.error('Error al crear el álbum:', error);
      swal('Error en la portada del álbum', 'El nombre de la portada está mal escrito', 'error');
  }
});

