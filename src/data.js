//Función de filtrado por orden alfabetico//

export function sortData(order, arregloDePersonajes) {
  let ordenalfabetico;
  if (order === "abc") {
    ordenalfabetico = arregloDePersonajes.sort((a, b) => {
      if (a.fullName < b.fullName) {
        return -1;
      }
      if (a.fullName > b.fullName) {
        return 1;
      }
      return 0;
    });
  } else if (order === "cba") {
    ordenalfabetico = arregloDePersonajes.sort((a, b) => {
      if (a.fullName > b.fullName) {
        return -1;
      }
      if (a.fullName < b.fullName) {
        return 1;
      }
      return 0;
    });
  }
  return ordenalfabetico;
}

//Filtrado de búsqueda//
export function filterData(texto, personajes) {
  const enElTrono = personajes.filter(
    (personaje) => personaje.lastName.toLowerCase() === texto.toLowerCase()
  );
  return enElTrono;
}

//Filtrado por Casa//
export function familias(filtroCasa, casas) {
  const enCasa = casas.filter((casa) =>
    casa.family.toLowerCase().includes(filtroCasa.toLowerCase())
  );
  return enCasa;
}
