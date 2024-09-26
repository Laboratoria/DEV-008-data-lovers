import {
  filterDataDirector,
  filterDataProducer,
  sortDataYear,
} from "../src/data.js";

describe("Casos de prueba para la funcion de filtrado de director", () => {
  it("dada una coleccion de peliculas y un nombre de director nos debe retornar solo peliculas de ese director", () => {
    const peliculas = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
        rt_score: "96",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
        rt_score: "97",
      },
    ];

    const director = "Isao Takahata";

    expect(filterDataDirector(peliculas, director)).toEqual([
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
        rt_score: "97",
      },
    ]);
  });

  it("SI peliculas no es un array debe retornar un arreglo vacio", () => {
    const director = "Hayao Miyazaki";
    expect(filterDataDirector(null, director)).toEqual([]);
  });
});

describe("Casos de prueba para la funcion de filtrado de productor", () => {
  it("dada una coleccion de peliculas y un nombre de productor nos debe retornar solo peliculas de ese productor", () => {
    const peliculas = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "Only Yesterday",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
        release_date: "1991",
        rt_score: "100",
      },

      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
        rt_score: "97",
      },
    ];
    const productor = "Isao Takahata";
    expect(filterDataProducer(peliculas, productor)).toEqual([
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
      },
    ]);
  });
});

describe("Casos de prueba para la funcion de filtrado de fecha", () => {
  it("dada una coleccion de peliculas y una fecha nos debe retornar el release_date indicado", () => {
    const peliculas = [
      {
        title: "Castle in the Sky",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "Only Yesterday",
        producer: "Toshio Suzuki",
        release_date: "1991",
        rt_score: "100",
      },
      {
        title: "My Neighbor Totoro",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "The Cat Returns",
        producer: "Toshio Suzuki",
        release_date: "2002",
        rt_score: "89",
      },
    ];
    const isAscendent = true;
    expect(sortDataYear(peliculas, isAscendent)).toEqual([
      {
        title: "Castle in the Sky",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "My Neighbor Totoro",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Only Yesterday",
        producer: "Toshio Suzuki",
        release_date: "1991",
        rt_score: "100",
      },
      {
        title: "The Cat Returns",
        producer: "Toshio Suzuki",
        release_date: "2002",
        rt_score: "89",
      },
    ]);
  });
});
