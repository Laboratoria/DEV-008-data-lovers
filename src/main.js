import { getData, buscarPeliculas, ordenarPeliculas, filtrarPeliculas} from "./data.js";
const peliculas = getData();
//console.log(peliculas);

function mostrarPeliculas(dataset) {
  const contenedor = document.getElementById("peliculas-container");
  contenedor.innerHTML = "";
  for (let i = 0; i < dataset.length; i++) {
    const plantilla = `<li><img src = ${dataset[i].poster}></img><p></p> ${dataset[i].title} <details>
    <summary>Mostrar Descripción</summary>
    <p3>${dataset[i].description}</p3>
  </details></li>`;
    contenedor.innerHTML += plantilla;
  }
}

document.addEventListener("mousemove", function (event) {
  const gif = document.getElementById("gif");
  const x = event.clientX - gif.width / 1;
  const y = event.clientY - gif.height / 1;
  gif.style.left = x + "px";
  gif.style.top = y + "px";
});

mostrarPeliculas(peliculas);

const peliculasOrdenadas = ordenarPeliculas(peliculas, "year")

mostrarPeliculas(peliculasOrdenadas);

function inicio() {
  const botonbusqueda = document.getElementById("buscar");
  botonbusqueda.addEventListener("click", function (evento) {
    evento.preventDefault();
    const titulo = document.getElementById("listaPeliculas").value;

    const encontrarPeliculas = buscarPeliculas(peliculas, titulo);
    mostrarPeliculas(encontrarPeliculas);
  });
}
inicio();

const selectOrdenar = document.getElementById("ordenar");
selectOrdenar.addEventListener("change", function () {
  const tipoDeOrden = document.getElementById("ordenar").value;
  console.log(tipoDeOrden);
  const orden = ordenarPeliculas(peliculas, tipoDeOrden);

  mostrarPeliculas(orden);
  console.log(orden);
});

const selectDirectores = document.getElementById("director");
selectDirectores.addEventListener("change", function () {
  const tipoDirector = document.getElementById("director").value;
  console.log(tipoDirector);
  const directores = filtrarPeliculas(peliculas,tipoDirector);

  mostrarPeliculas(directores);
  console.log(directores)
} )