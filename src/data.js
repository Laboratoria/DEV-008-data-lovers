// estas funciones son de ejemplo



export const filtroPeliculas = () => {


  return 'aun no se como se usa esto mañana aprendo xd';
};

export const ordenarPeliculasPorRT = (listadoDePeliculas) => {
  let listadoDePeliculasOrdenadas = [data.films]
  listadoDePeliculas.sort (function (a, b) {
    if ( b.rt_score - a.rt_score) {
      return 1;
    } 
  })

  return listadoDePeliculasOrdenadas
};
