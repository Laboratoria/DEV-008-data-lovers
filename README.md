# Data Lovers Ghibli Multiverse

## Índice
* 1. Introducción
* 2. Objetivos de aprendizaje
* 3. Resumen del proyecto
* -Diseño de la Interfaz de Usuario
* -Prototipo de baja fidelidad
* -Prototipo de alta fidelidad
* -Historias de usuario
* 4. Conclusión

### * 1. Introdución

Ghibli multiverse en una página diseñada para conocer más acerca de una serie de películas realizadas por esta exitosa compañía produtora japonesa.

### * 2. Objetivos de aprendizaje

- Aprender a diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el usuario necesita.
- Reforzar y aumentar conocimientos de Html, css y vanilla JS.
- Aprender a implementar testeos de usabilidad.

### * 3. Resumen del proyecto

En este proyecto construímos una página web para visualizar un conjunto (set) de datos que se adecúe a lo que diferentes tipos de usuarios necesitarían para informarse sobre las películas de estudios Ghibli.
El proceso de diseño se realizó pensando en diferentes casos(historias de usuario) para resolver difentes necesidades y en diferentes contextos, creando así una página de utilidad para más personas.

**Diseño de la Interfaz de Usuario**
Se pensó en colores agradables a la vista, un tamaño visualmente aceptable. Se realizó un prototipo de baja fidelidad en papel y uno de alta fidelidad usando Figma.

![Alt text](img/Peliculas%20Ghibli/principal1.png)
![Alt text](img/Peliculas%20Ghibli/principal2.png)
![Alt text](img/Peliculas%20Ghibli/principal3.png)
![Alt text](img/Peliculas%20Ghibli/principal4.png)

***Prototipo de baja fidelidad***

![Alt text](img/Peliculas%20Ghibli/baja1.jpg)
![Alt text](img/Peliculas%20Ghibli/baja2.jpg)
![Alt text](img/Peliculas%20Ghibli/baja3.jpg)
![Alt text](img/Peliculas%20Ghibli/baja4.jpg)
![Alt text](img/Peliculas%20Ghibli/baja5.jpg)
![Alt text](img/Peliculas%20Ghibli/baja6.jpg)

***Prototipo de alta fidelidad***

![Alt text](img/Peliculas%20Ghibli/alta2.png)
![Alt text](img/Peliculas%20Ghibli/alta1.png)
![Alt text](img/Peliculas%20Ghibli/alta3.png)
![Alt text](img/Peliculas%20Ghibli/alta4.png)
![Alt text](img/Peliculas%20Ghibli/alta6.png)

**Historias de usuario**

* ¿Quiénes son los principales usuarios de producto?
Personas de diferentes edades con nulo, poco o más conocimiento sobre las películas que están interesadas en conocer qué otras películas se han realizado.

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Conocer cualés son los títulos, productores , directores o fecha de lanzamiento de sus películas favoritas o de títulos que aún no ven.

* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Al ingresar a la página se necesitan visualizar los posters de cada película, un resumen, título y año de lanzamiento. Con los filtros y ordenado podrán visualizar por director, productor y orden cronológico ascendente y descendente.

* ¿Cuándo utilizan o utilizarían el producto?
En tiempos de ocio, o para documentarse más sobre las películas realizadas en este estudio cinematográfico.

***Historia de usuario 1:Como nuevo fan de Studio Ghibli***

Quiero: Saber cuales son las películas animadas que pertenecen a estudio Ghibli
Para: familiarizarme con sus creaciones y contenido.
Criterios de aceptación:
Darle la bienvenida con una pequeña introducción sobre, ¿Qué es estudio Ghibli? y un imagen alusiva a las peliculas.
Un apartado que indica donde comienzan las peliculas en donde, tú como nuevo fan puedes interactuar con categorías, (Director, productor y año de lanzamiento)
Un botón que sobresale con un color amarrillo con las indicaciones para interactuar de manera eficiente con la pagina.
Ver los poster de todas las peliculas aun sin interactuar con las categorías.
Al hacer click al poster se muestra el nombre de la peliculas, su sinopsis y año de lanzamiento.
Tener un botón que permita limpiar filtros y seguir en la búsqueda.
Definición de terminado:
Crear un <header> en HTML que contenga la imagen principal y la bienvenida
Agregar un <h2>Movies<h2> en HTML para indicar la sección donde comienzan las peliculas
Agregar las etiquetas <button> y <Select> de acuerdo a las categorías que queríamos agregar  para la interacción en nuestra pagina
Las indicaciones para interactuar con los posters se muestras en HTML en la etiqueta de <button>
Se lograron mostrar los posters desde main.js mediante nodos y la interacción que cumplen nuestros posters con un evento.
Para limpiar los filtros de las categorías con las que te interactúan en el DOM se creo una etiqueta de <botton> en HTML la cual interactúa con main.js y realiza su función mediante un evento.

***Historia de ususario 2: Un fan de la animación japonesa***
Quiero: Saber quienes son los directores y productores de las animaciones y saber cuántas y cuáles son las animaciones a las que dieron "vida".
Para: Conocer nuevos directores y productores del área de la animación japonesa.
Criterios de Aceptación:
Mostrarle los nombres de directores.
Mostrarle los nombres de productores.
A través de un filtro separar las películas según el director/productor seleccionado.
Mostrarle el contador de películas según el director/productor seleccionado.
Definición de Terminado:
Agregar a la data mostrada, la información del director.
Agregar a la data mostrada, la información del productor.
Crear selectores/filtros en el <html>
Generar un filtro general por director en el archivo data.js e importalo al main.js
Crear un addEventListener para que la data se filtre y se muestre en el <html> por director.
Generar un filtro general por productor en el archivo data.js e importarlo al main.js
Crear un addEventListener para que la data se filtre y se muestre en el <html> por productor.
mostrando así unicamente las películas que cada uno hizo.

***Historia de usuario  3: Nuevo fan o fan de Studio Ghibli***
Quiero: saber la fecha de lanzamiento, de la más reciente a la menos reciente de las peliculas.
Para: convertirme en uno de los fans que sabe esos datos curiosos sobre el contenido de Ghibli.
Criterios de aceptación
Mostrar la fecha más reciente de lanzamiento de cada pelicula.
Mostrar la fecha menos reciente de lanzamiento de cada pelicula.
Definición de terminado
Crear en HMTL un <select> que tenga las categorías deseadas: la mas reciente y menos reciente .
Vincular la data proporcionada de Ghibli, específicamente la de su lanzamiento para manipular el orden con un sort
Vincular HTML con main.js para su interacción y main.js con data.js para su correcta funcionalidad.
Los posters tanto como la información responden al sort.
***Historia de ususario 4:Interesado en saber más sobre cada película en específico***
Quiero: Saber más sobre una película, un breve resumen que me atrape, con su título y año de lanzamiento.
Para: tener mejor contexto de qué trata y su nombre en inglés para su fácil búsqueda en plataformas de straming.
Criterios de aceptación
Mostrar la información con un breve resumen, año y título de una manera dinámica dando click a cada tarjeta.
Definición de terminado
En main.js creamos elementos(document.createElement) que estuvieran agregados en un contendor trasero, que sólo se visualizara al momento de generar el evento"click" con clases show/hide. Se manejó la información añadiendo clases directamente en main.js (classList.add) para posteriomente darle estilos.

### * 4. Conclusión
Se aprendió a diseñar y construir una interfaz web donde se visualiza y se manipula la data proporcionada de Ghibli, atendiendo las necesidadaes de las historias de usuario.
Se reforzaron y aumentaron los conocimientos de Html, css y vanilla JS.
Se aprendió la estructura que deben de llevar de forma general y específica para implementar pruebas de usabilidad en base a la estructura de nuestro código. 