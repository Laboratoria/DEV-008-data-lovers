import data from './data/ghibli/ghibli.js';
export function mostrarPeliculas() {
  return data.films;
}

export function ordenarPeliculas(dataghibli, orden) {
  if (orden === 'a-z') {
    return dataghibli.sort((a, b) => {
      if (a.title < b.title) {
        return -1;//al lado izquierdo//
      }
      if (a.title > b.title) {
        return 1;//lado derecho
      }
      return 0;//ordena al medio
    });
  } else {
    return dataghibli.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
}
//index0f para ver en que indice esta cada letra
export function filtrarPeliculas(dataghibli, valorAFiltrar) {
  const peliculasFiltradas = dataghibli.filter((pelicula) => {
    return pelicula.title.toLowerCase().indexOf(valorAFiltrar.toLowerCase()) !== -1
  })
  const peliculasOrdenadas = ordenarPeliculas(peliculasFiltradas);
  return peliculasOrdenadas;
}
