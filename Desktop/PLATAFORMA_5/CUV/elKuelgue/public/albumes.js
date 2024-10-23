//OBJETO ALBUMES PARA LA TABLA OMONIMA
const albums = [
  {
      _id: '6710ac4de9dfa050f56ec54a',
      titulo: 'Hola Precioso',
      descripcion: 'Contiene 9 canciones y la duración total del álbum es aproximadamente ...',
      fechaDeLanzamiento: '2023',
      portada: 'https://www.youtube.com/playlist?list=OLAK5uy_mO3b-_x7mPlefqH7i742e3n28JRItY_Ks'
  },
  {
      _id: '6710b396b596a1914672de8b',
      titulo: 'Cuentito',
      descripcion: 'Está compuesto por ocho canciones, la mitad de ellas habiendo sido lan...',
      fechaDeLanzamiento: '2021',
      portada: 'https://www.youtube.com/watch?v=xxF4gRNFtkA'
  }
];

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

function editAlbum(id) {
  // Lógica para editar el álbum
  alert('Editar álbum con ID: ' + id);
}

function deleteAlbum(id) {
  // Lógica para borrar el álbum
  alert('Borrar álbum con ID: ' + id);
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
      const response = await axios.post('http://localhost:3000/albums', data);
      alert(response.data);
      form.reset()
  } catch (error) {
      console.error('Error al crear el álbum:', error);
      alert('Error al crear el álbum');
  }
});