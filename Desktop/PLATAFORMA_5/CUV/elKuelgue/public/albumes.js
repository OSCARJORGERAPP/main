//OBJETO ALBUMES PARA LA TABLA OMONIMA
const albumes = {
    'Hola Precioso': {
      titulo: 'Hola Precioso',
      fechaDeLanzamiento: '08/06/2023',
      descripción: 'Este álbum se presenta como una obra clásica pero moderna que nunca abandona el absurdo habitual del grupo y le otorga una nueva estética a sus sonidos. Contiene 9 canciones y la duración total del álbum es aproximadamente 34 minutos',
      urlDelAlbumDeYoutube:'https://open.spotify.com/intl-es/album/03oOcZPLDZdsocx9QkkNty?si=l6cnsMeNSO2ELH6kKNvvew&nd=1&dlsi=300c3868c2d1459f'
    },
    'Cuentito': {
      titulo: 'Cuentito',
      fechaDeLanzamiento: '30/09/2021',
      descripción: 'Cuentito representa el quinto álbum de estudio de El Kuelgue, lanzado el 30 de septiembre de 2021. Está compuesto por ocho canciones, la mitad de ellas habiendo sido lanzadas como singles en el pasado: "Soda", "View Master", "Roma" y "La Mirada".',
      urlDelAlbumDeYoutube: 'https://open.spotify.com/intl-es/album/7AvIdnQjY3mjZ8NexvRruR?si=fZa5mHsqQaGRI9aQnulb8g&nd=1&dlsi=8aff67a80ee94387'
    }
  };








function toggleStar(element) {
    element.classList.toggle('clicked');
}