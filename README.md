
Título del Proyecto: Plataforma Disco

Autor: OSCAR JORGE RAPP

Descripción del Proyecto:

El objetivo del proyecto fue aplicar los conocimientos adquiridos durante el curso “Desarrollo web full stack”.
El curso fue impartido de manera virtual por Plataforma 5 del 28/08/2024 al 30/10/2024.
Se aprendió html, css, y java script, programando el front end, el back end concluyendo, y con el deploy del proyecto
Para el desarrollo elegimos la banda nacional “El Kuelgue”.

Funcionalidades:

Deploy: 
1.	https://elKuelgue.onrender.com
2.	DB Mongo Atlas
3.	Se despliega desde gitHub
4.	Se deben reemplazar las direcciones http://localhost:port/etc por https://elKuelgue.onrender.com/etc

Organización de archivos:
1.	models
2.	public
3.	public/Imagenes
4.	routes

Index.html :
1.	Al cargar la página se le pregunta al visitante que confirme (si/no) el cantante del grupo.
2.	Si responde afirmativamente, se le da la bienvenida con un mensaje, y el nombre de la banda cambia por “Hola fan!!”
3.	Si la respuesta es negativa, ¡se le da la bienvenidma con un mensaje y el nombre de la banda cambia por “Hola no fan!!”
4.	El ingreso a la web se hace completando el formulario de login o presionando la opción para registrarse.
5.	Hay una opción para quienes olvidan el password (se completará más adelante)
6.	Al loguearse se encripta la clave y se genera un token, que se mantiene durante la navegación hasta el logout.
7.	Finalizado el logueo se envía al usuario a la página álbumes.html
8.	kuelgue.js (Recupera datos del login para enviar al back end)
9.	style.css (Formato y posición de elementos en la página)

registro.html:
Incluye:
1.	Formulario de registro (una vez registrado reenvía al usuario a index.html para loguearse)
2.	Menú de navegación con función de logout (restringido a index.html)
3.	Barra de links a social-media de la banda.
4.	registro.js (Recupera datos de registro para enviar al back end)
5.	registro.css (Formato y posición de elementos en la página)

albumes.html:
Contiene:
1.	Formulario para agregar álbumes
2.	Tabla dinámica con los álbumes registrados en la base de datos con posibilidad de:
a.	Ver y escuchar un álbum mediante los links correspondientes
b.	Editar un álbum
c.	Eliminar un álbum
3.	Menú de navegación con función de logout
4.	Barra de links a social-media de la banda
5.	Portada de dos álbumes para marcarlos como favoritos con una estrella (a seguir)
6.	albumes.js (Recupera datos de albumes para enviar al back end)
7.	albumes.css (Formato y posición de elementos en la página)

editAlbum.html:
1.	Formulario para editar álbumes
2.	Formulario para agregar canciones
3.	Menú de navegación con función de logout
4.	Barra de links a social-media de la banda
5.	editAlbum.js (Recupera datos de albumes para enviar al back end)
6.	editAlbum.css (Formato y posición de elementos en la página)

canciones.html:
Tabla dinámica con las canciones registradas en la base de datos con posibilidad de:
1.	Filtrar las canciones por álbum mediante una lista desplegable
2.	Borrar canciones 
3.	Ver y escuchar canciones mediante un link a las mismas
4.	Menú de navegación con función de logout
5.	Barra de links a social-media de la banda
6.	Canciones.js (Recupera datos de canciones para enviar al back end)
7.	Canciones.css (Formato y posición de elementos en la página)

shows.html:
1.	Tabla con fechas y lugares de presentación de la banda con las siguientes prestaciones:
2.	Al abrir la pagina se pegunta al usuario su edad.
3.	Si es menor de edad se bloquean los botones de compra de tickets para las funciones
4.	Si es mayor de edad quedan habilitados los botones de compra
5.	Al comprar se avisa compra exitosa mostrando los tickets restanteancioness luego de restar el comprado
6.	Menú de navegación con función de logout
7.	Barra de links a social-media de la banda
8.	Shows.js (gestiona las operaciones de compra de tickets)
9.	Shows.css (Formato y posición de elementos en la página)

index.js:
1.	Es el server del back end. 
2.	Funciona como interfaz entre el front end y el back end gestionando requerimientos y respuestas
3.	Direcciona los requerimientos a las rutas de álbumes y usuarios

routes/band.js:
Consolida las rutas correspondientes a los álbumes (CRUD):
1.	Creación
2.	Lectura
3.	Modificacón
4.	Borrado

routes/users.js
Consolida las rutas correspondientes a los usuarios:
1.	Registro de usuarios
2.	Lectura de datos de usuarios
3.	Login, encriptado y generación de token
4.	Logout, eliminado del token

models/users.js:
Modelo para la base de usuarios y validaciones a nivel back end

models/albums:
Modelo para la base de albumes y validaciones a nivel back end

Instalación :

Registro en el repositorio GitHub y creación (main)

Comandos git para levantar el repositorio:
1.	git init
2.	git status
3.	git add . 
4.	git commit –m “comentario sobre cambios”
5.	git push origin main

Comandos para descargar el repositorio
Git pull origin main

Clonar el repositorio gitHub en el repositorio local
1.	cd /ruta/a/tu/directorio
2.	git clone https://github.com/tu-usuario/tu-repositorio.git

Instalación de dependencias corriendo el comando npm i
1.	bcrypt
2.	cookie-parser
3.	cors
4.	dotenv
5.	express
6.	jsonwebtoken
7.	mongoose
8.	nodemon
9.	vínculo con axios
10.	vínculo con sweet alert

Correr el proyecto :
1.	npm node index.js
2.	Editando package.json "start": "nodemon index.js", se corre con npm start

Agradecimientos:
Agradezco la dedicación y el entusiasmo de los profesores,
que me permitieron alcanzar los conocimientos para concretar el proyecto:
Maximiliano Pugliese
Mauricio Cox
Rafael Mojica

Muchas gracias…!!!
