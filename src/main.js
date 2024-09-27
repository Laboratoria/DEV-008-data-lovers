import data from './data/ghibli/ghibli.js';
import {ordenarPeliculasPorRT} from './data.js'
let datosPelicula = data.films;
//Mostrar los titulos de las peliculas 
//Vamos a mostrar los titulos de las peliculas con la manipulación del DOM y la creacion de eventos 
//crear elementos
const tituloPelisNode = document.getElementById("tituloPelicula");

 //Crear un boton que muestre la data de los titulos 
 
// funcion de filtrado 
const peliculasPorDirector = (arregloDePeliculas, director) => 
{
    
    const arregloResultado =  [];
    // paso 1: recorro mi arreglo de peliculas (for hasta que recorra todos los elementos de arreglo depeliculas)
    // por cada elemento que me encuentre -> [{ claves: valores }, { claves: valores }, { claves: valores }]
    // preguntar al objeto por su valor en la clave director 
    // si el valor coincide con directpr agregar ese objeto a el arreglo resultado 
    // si no coinciode no hacer nada 
    for (let i = 0; i<datosPelicula.length; i++)
        {if (datosPelicula[i].director = title) {
            arregloResultado.push (datosPelicula[i])

        }
        
        }
        console.log(arregloResultado);


    return arregloResultado; 
}



 const contenedorGeneralPeliculas = (datosPelicula) => {
    for (let i = 0; i<datosPelicula.length; i++){
        const movilCarNode = document.createElement("div");
        movilCarNode.classList.add("movieCard");
        const image = document.createElement("img")
        image.src  = datosPelicula[i].poster;
        const titlee = document.createElement("p");
        titlee.textContent = datosPelicula[i].title;
        tituloPelisNode.appendChild(titlee);
        tituloPelisNode.appendChild(image);
        //tituloPelisNode.appendChild(movilCarNode);

}
}
contenedorGeneralPeliculas (datosPelicula)





//Filtro de Best Rotten tomatoes
const botonBestRT = document.getElementById("bestRTMovie");
//bestRT = document.querySelectorAll("bestRTMovie");
botonBestRT.addEventListener ("click", function(){
       
    tituloPelisNode.innerHTML = ""
    const peliculasOrdenadas = ordenarPeliculasPorRT (datosPelicula)
    contenedorGeneralPeliculas(peliculasOrdenadas)
   

})