// archivo de data solo para manipular la data
import data from './data/ghibli/ghibli.js';

export const orderData = (arrayData) => {
console.log(arrayData)


  return 'example';
};


export function allData() { //función que toma la informacion de la data
  return data.films
}

//constante para hacer referencia a la funcion de tomar la data (alldata)
const result = allData ();
console.log(result);