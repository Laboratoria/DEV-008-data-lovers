import data from './data/ghibli/ghibli.js';



let datosPelicula = data.films;

//BOTON FILTRADO HAYAO
const botonDirectores = document.getElementById("directoresP");
botonDirectores.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc");
    const imageNode = document.getElementById("imagen");

    const miyasaki = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Hayao Miyazaki';

    });

    const miyasakyData = miyasaki.map((miyasaki) =>  miyasaki.title);
    const miyasakyDataimg = miyasaki.map((miyasaki) =>  miyasaki.poster);

    const direc = document.createElement("div")
    const imagen = document.createElement("img")
    //console.log(ojala)    
    //console.log(arrayNew)
    direc.textContent = miyasakyData;
    imagen.src = miyasakyDataimg;
    directoresNode.appendChild(direc);
    imageNode.appendChild(imagen);
})


//BOTON FILTRADO GORO
const botonGoro = document.getElementById("directoresP1");
botonGoro.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc1");
    const imageNode = document.getElementById("imagen");

    const goro = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Gorō Miyazaki';

    });

    const goroData = goro.map((goro) =>  goro.title);
    const goroDataimg = goro.map((goro) =>  goro.poster);

    const direc1 = document.createElement("div")
    const imagen = document.createElement("img")
  //console.log(goroData)    
    //console.log(arrayNew)
   direc1.textContent = goroData;
    imagen.src = goroDataimg;
    directoresNode.appendChild(direc1);
    imageNode.appendChild(imagen);
})
//BOTON DE DIRECTOR ISAO

const botonIsao = document.getElementById("directoresP2");
botonIsao.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc1");
    const imageNode = document.getElementById("imagen");

    const isao = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Isao Takahata';

    });

    const isaoData = isao.map((isao) => isao.title);
    const isaoDataimg = isao.map((isao) =>  isao.poster);

    const direc1 = document.createElement("div")
    const imagen = document.createElement("img")
  //console.log(goroData)    
    //console.log(arrayNew)
   direc1.textContent = isaoData;
    imagen.src = isaoDataimg;
    directoresNode.appendChild(direc1);
    imageNode.appendChild(imagen);
})

//BOTON DE DIRECTOR Hiromasa Yonebayashi

const botonyone = document.getElementById("directoresP3");
botonyone.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc1");
    const imageNode = document.getElementById("imagen");

    const yone = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Hiromasa Yonebayashi';

    });

    const yoneData = yone.map((yone) => yone.title);
    const yoneDataimg = yone.map((yone) =>  yone.poster);

    const direc1 = document.createElement("div")
    const imagen = document.createElement("img")
  //console.log(goroData)    
    //console.log(arrayNew)
   direc1.textContent = yoneData;
    imagen.src =yoneDataimg;
    directoresNode.appendChild(direc1);
    imageNode.appendChild(imagen);
}) 

//BOTON DE DIRECTOR Yoshifumi Kondō
const botonkondo = document.getElementById("directoresP4");
botonkondo.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc1");
    const imageNode = document.getElementById("imagen");

    const yone = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Yoshifumi Kondō';

    });
    const kondoData = yone.map((kondo) =>kondo.title);
    const kondoDataimg = yone.map((kondo) =>  kondo.poster);

    const direc1 = document.createElement("div")
    const imagen = document.createElement("img")
  //console.log(goroData)    
    //console.log(arrayNew)
   direc1.textContent =kondoData;
    imagen.src =kondoDataimg;
    directoresNode.appendChild(direc1);
    imageNode.appendChild(imagen);
})

//BOTON DE DIRECTOR Hiroyuki Morita
const botonmorita = document.getElementById("directoresP5");
botonmorita.addEventListener("click", function () {
    const directoresNode = document.getElementById("direc1");
    const imageNode = document.getElementById("imagen");

    const yone = datosPelicula.filter(function (datosPelicula) {
        return datosPelicula.director === 'Hiroyuki Morita';

    });
    const moritaData = yone.map((morita) =>morita.title);
    const moritaDataimg = yone.map((morita) => morita.poster);

    const direc1 = document.createElement("div")
    const imagen = document.createElement("img")
  //console.log(goroData)    
    //console.log(arrayNew)
   direc1.textContent =moritaData;
    imagen.src =moritaDataimg;
    directoresNode.appendChild(direc1);
    imageNode.appendChild(imagen);
// })
//    /* const movilCarNode = document.createElement("div");
//     movilCarNode.classList.add("movieCard");
//     const image = document.createElement("img")
//     image.src  = datosPelicula[direc].poster;
//     const titlee = document.createElement("p");
//     titlee.textContent = datosPelicula[direc].title;
//     tituloPelisNode.appendChild(titlee);
//     tituloPelisNode.appendChild(image);*/

//    const dataEP = datosPelicula.map((datosPelicula ) => datosPelicula.title + datosPelicula.director); BUSQUEDA CON MAP PARA FILTRAR DIRECTOR

// Mostrar los titulos de las peliculas
// Vamos a mostrar los titulos de las peliculas con la manipulación del DOM y la creacion de eventos
// crear elementos

// crear un boton que muestre la data de los directores, muestra TODOS Y REPETIDAMENTE los directores
// /*const directoresNode = document.getElementById("direc"); //nombre del div donde se va guardar la información para mostrar en la web
// const botonDirectores = document.getElementById("directoresP");
// botonDirectores.addEventListener("click", function(){
//    const direc =document.createElement("p");// crear el p donde se va guardar la informacion
//    direc.textContent = datosPelicula.map((datosPelicula) => datosPelicula.director)
//    directoresNode.appendChild(direc);
// })*/



// /*for(let i=0; i<sumaNew.lenght; i++){
//    if(sumaNew[i]){
//        let directorEspecifico = datosPelicula => datosPelicula.director === "Isao Takahata";
//        let filtroED = datosPelicula.find(directorEspecifico);

//        let comparacion = sumaNew[i] == filtroED;
//        console.log(comparacion);
//    }else{
//        console.log("aun no se que va aqui");
//    }
// }*/

// /*const tituloPelisNode = document.getElementById("tituloPelicula");
// const directoresNode = document.getElementById("director");



//  Crear un boton que muestre la data de los titulos
//  const botonTitlee = document.getElementById("peliculaTitle");
//  botonTitlee.addEventListener("click", function(){
// =======
// let datosPelicula = data.films;
// Mostrar los titulos de las peliculas 
// Vamos a mostrar los titulos de las peliculas con la manipulación del DOM y la creacion de eventos 
// crear elementos


// const tituloPelisNode = document.getElementById("tituloPelicula");
// const directoresNode = document.getElementById("director");



//  Crear un boton que muestre la data de los titulos 
//  const botonTitlee = document.getElementById("peliculaTitle");
//  botonTitlee.addEventListener("click", function(){
  
// for (let i = 0; i<datosPelicula.length; i++){
//     const movilCarNode = document.createElement("div");
//     movilCarNode.classList.add("movieCard");
//     const image = document.createElement("img")
//     image.src  = datosPelicula[i].poster;
//     const titlee = document.createElement("p");
//     titlee.textContent = datosPelicula[i].title;
//     tituloPelisNode.appendChild(titlee);
//     tituloPelisNode.appendChild(image);
// }
//  })


// const open= document.getElementById("botonPersonaje");
// const contenedorGeneral= document.getElementById("contenedor_general");





// CREANDO ELEMENTOS CON EL DOM

//  entrar a la etiqueta del HTML desde el DOM
//  /*const impresionData = document.getElementById('demo');

//  Usando el dom
//  const botonPersonaje = document.getElementById("mensaje");
//   botonPersonaje.addEventListener("click", function(){
//         BUSQUEDA DE UN DATO ESPECIFICO
// let btotoro = datosPelicula => datosPelicula.title === 'The Tale of the Princess Kaguya';
// let totoro = datosPelicula.find(btotoro); //METODO FIND
// console.log(totoro);
// creación del div
// /*const div = document.createElement("div");
// impresionData.appendChild(div);

// const dataResulado = document.querySelector(".resultado")
// dataResulado.textContent = dataResulado.appendChild(totoro);
// })*/

// peliculaArray = datosPelicula[1].description;

// let mostarDato = document.getElementById("demo1");

// mostarDato = peliculaArray;

// /*let dataFilms = [];
// for (let i; i<data.length; i++){
//     if(data[i].films === dataFilms){
//         dataFilms.push(data[i]);
//     }
// }

// console.log(data);*/

// FILTRADO DE ARRAY CON METODO MAP ESPECIFICO 
// /*const nombredirector = datosPelicula.map((datosPelicula)=> datosPelicula.director)

// console.log(nombredirector);

// FILTRADO CON METODO forEach
//  datosPelicula.forEach((datosPelicula) =>console.log(datosPelicula.title) )*/


