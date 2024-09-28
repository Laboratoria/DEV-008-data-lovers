import { filterData, sortData, familias } from "./data.js";
import data from "./data/got/got.js";

//Funcion muestra de tarjetas//
const GOTcontainer = document.getElementById("gotImg");

function gotImgCreator(gotImages) {
  GOTcontainer.innerHTML = "";

  for (const got of gotImages) {
    const imagen = document.createElement("div");
    imagen.setAttribute("id", "fullName");
    imagen.setAttribute("class", "family");
    imagen.innerHTML = ` <div class="card">
                    <div><h2 class="nombrePersonaje" id="nombrecompleto" >${got.fullName}</h2>
                    <img class="got-image.url" src=${got.imageUrl}
                        alt="Imagen GOT" width=150 height=150 ></img>
                    <p id="familia">${got.family}</p>
                    <p id="titulo">${got.title}</p>
                    <p id="nacimiento">${got.born} - ${got.death}</p>
                    </div>
            </div>`;
    GOTcontainer.append(imagen);
  }
}
gotImgCreator(data.got);

//Filtrado de búsqueda por órden alfabetico//

const ordenarselect = document.getElementById("ordenabc");
ordenarselect.addEventListener("change", () => {
  const ordenName = ordenarselect.value;
  let ordenalfabetico;

  if (ordenName === "abc") {
    ordenalfabetico = sortData("abc", data.got);
  } else if (ordenName === "cba") {
    ordenalfabetico = sortData("cba", data.got);
  }
  document.getElementById("gotImg").innerHTML = "";

  gotImgCreator(ordenalfabetico);
});

//Filtro de Búsqueda anclado//
document.getElementById("busqueda").addEventListener("click", function () {
  const texto = document.getElementById("buscador").value;
  const enElTrono = filterData(texto, data.got);
  gotImgCreator(enElTrono);
});

//Filtro por Casas//
const filtroCasa = document.querySelector("#filtro-casas");
filtroCasa.addEventListener("change", () => {
  const casasOption = filtroCasa.value;
  const enCasa = familias(casasOption, data.got);
  gotImgCreator(enCasa);
});

//const closeModal = document.querySelector(".modal_close");

//closeModal.addEventListener("click", (e) => {
//e.preventDefault();
//modal.classList.remove("modal--show");
//});
