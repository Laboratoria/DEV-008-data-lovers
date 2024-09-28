import { sortData, familias, filterData } from "../src/data.js";

describe("sortData", () => {
  const dataGOTOrden = [
    {
      id: 5,
      firstName: "Brandon",
      lastName: "Stark",
      fullName: "Brandon Stark",
      title: "Lord of Winterfell",
      family: "House Stark",
      imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
      born: "290 DC",
    },
    {
      id: 3,
      firstName: "Arya",
      lastName: "Stark",
      fullName: "Arya Stark",
      title: "No One",
      family: "House Stark",
      imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
      born: "289 AL",
    },
    {
      id: 2,
      firstName: "Jon",
      lastName: "Snow",
      fullName: "Jon Snow",
      title: "King of the North",
      family: "House Stark",
      imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
      born: "283 DC",
    },
    {
      id: 0,
      firstName: "Daenerys",
      lastName: "Targaryen",
      fullName: "Daenerys Targaryen",
      title: "Mother of Dragons",
      family: "House Targaryen",
      imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
      born: "284 DC",
    },
  ];
  it("return a-z", () => {
    expect(sortData("abc", dataGOTOrden)).toEqual([
      {
        id: 3,
        firstName: "Arya",
        lastName: "Stark",
        fullName: "Arya Stark",
        title: "No One",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
        born: "289 AL",
      },
      {
        id: 5,
        firstName: "Brandon",
        lastName: "Stark",
        fullName: "Brandon Stark",
        title: "Lord of Winterfell",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
        born: "290 DC",
      },
      {
        id: 0,
        firstName: "Daenerys",
        lastName: "Targaryen",
        fullName: "Daenerys Targaryen",
        title: "Mother of Dragons",
        family: "House Targaryen",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        born: "284 DC",
      },
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "King of the North",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
        born: "283 DC",
      },
    ]);
  });
  it("return z-a", () => {
    expect(sortData("cba", dataGOTOrden)).toEqual([
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "King of the North",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
        born: "283 DC",
      },
      {
        id: 0,
        firstName: "Daenerys",
        lastName: "Targaryen",
        fullName: "Daenerys Targaryen",
        title: "Mother of Dragons",
        family: "House Targaryen",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        born: "284 DC",
      },
      {
        id: 5,
        firstName: "Brandon",
        lastName: "Stark",
        fullName: "Brandon Stark",
        title: "Lord of Winterfell",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
        born: "290 DC",
      },
      {
        id: 3,
        firstName: "Arya",
        lastName: "Stark",
        fullName: "Arya Stark",
        title: "No One",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
        born: "289 AL",
      },
    ]);
  });

  it("return same value", () => {
    const equalData = [
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "King of the North",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
        born: "283 DC",
      },
      {
        id: 0,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "Mother of Dragons",
        family: "House Targaryen",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        born: "284 DC",
      },
    ];
    expect(sortData("cba", equalData)).toEqual([
      {
        id: 2,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "King of the North",
        family: "House Stark",
        imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
        born: "283 DC",
      },
      {
        id: 0,
        firstName: "Jon",
        lastName: "Snow",
        fullName: "Jon Snow",
        title: "Mother of Dragons",
        family: "House Targaryen",
        imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
        born: "284 DC",
      },
    ]);
  });
  //it('returns `example`', () => {
  //expect(example()).toBe('example');
  //});
});

describe("familias", () => {
  const familiasDataOrden = [
    {
      firstName: "Daenerys",
      lastName: "Targaryen",
      fullName: "Daenerys Targaryen",
      title: "Mother of Dragons",
      family: "House Targaryen",
    },
    {
      firstName: "Arya",
      lastName: "Stark",
      fullName: "Arya Stark",
      title: "No One",
      family: "House Stark",
    },
    {
      firstName: "Jamie",
      lastName: "Lannister",
      fullName: "Jamie Lannister",
      title: "Lord Commander of the Kingsguard",
      family: "House Lannister",
    },
    {
      firstName: "Robert",
      lastName: "Baratheon",
      fullName: "Robert Baratheon",
      title: "King",
      family: "Baratheon",
    },
  ];
  const resultado = [
    {
      firstName: "Jamie",
      lastName: "Lannister",
      fullName: "Jamie Lannister",
      title: "Lord Commander of the Kingsguard",
      family: "House Lannister",
    },
  ];
  it("retorna el apellido", () => {
    expect(familias("Lannister", familiasDataOrden)).toEqual(resultado);
  });
});

describe("filterData", () => {
  const filterDataOrden = [
    {
      firstName: "Daenerys",
      lastName: "Targaryen",
      fullName: "Daenerys Targaryen",
      title: "Mother of Dragons",
      family: "House Targaryen",
    },
    {
      firstName: "Arya",
      lastName: "Stark",
      fullName: "Arya Stark",
      title: "No One",
      family: "House Stark",
    },
    {
      firstName: "Jamie",
      lastName: "Lannister",
      fullName: "Jamie Lannister",
      title: "Lord Commander of the Kingsguard",
      family: "House Lannister",
    },
    {
      firstName: "Robert",
      lastName: "Baratheon",
      fullName: "Robert Baratheon",
      title: "King",
      family: "Baratheon",
    },
  ];
  const resultado = [
    {
      firstName: "Daenerys",
      lastName: "Targaryen",
      fullName: "Daenerys Targaryen",
      title: "Mother of Dragons",
      family: "House Targaryen",
    },
  ];
  it("retorna el personaje", () => {
    expect(filterData("Targaryen", filterDataOrden)).toEqual(resultado);
  });
});
