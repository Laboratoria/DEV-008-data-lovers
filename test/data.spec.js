import { getFilteredAthletes } from "../src/js/data.js";

//TESTING BRANCH

////////////////////////FILTRO DE ATHLETAS

describe("getFilteredAthletes", () => {
  it("is a function", () => {
    expect(typeof getFilteredAthletes).toBe("function");
  });

  it("devuelve los filtros en base a los filtros proveidos", () => {
    // Ejemplo de filtros seleccionados
    const selectedName = "Giovanni Abagnale";

    // Llamada a la función para obtener los atletas filtrados
    const filteredAthletes = getFilteredAthletes(
      selectedName,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    // Verificar si el resultado coincide con los atletas esperados después del filtrado
    expect(filteredAthletes).toEqual([
      {
        name: "Giovanni Abagnale",
        gender: "M",
        medal: "Bronze",
        height: "198",
        noc: "ITA",
        team: "Italy",
        sport: "Rowing",
        event: "Rowing Men's Coxless Pairs",
        age: 21,
        weight: "90",
      },
    ]);
  });
});

/// FILTRO DE 4 BRANCH //

describe("getFilteredAthletes", () => {
  it("is a function", () => {
    expect(typeof getFilteredAthletes).toBe("function");
  });

  it("devuelve los filtros en base a los filtros proveidos", () => {
    // Ejemplo de filtros seleccionados
    const selectedGender = "M";
    const selectedMedal = "Bronze";
    const selectedTeam = "Egypt";
    const selectedSport = "Weightlifting";

    // Llamada a la función para obtener los atletas filtrados
    const filteredAthletes = getFilteredAthletes(
      "",
      selectedGender,
      selectedMedal,
      selectedTeam,
      selectedSport,
      "",
      "",
      "",
      ""
    );

    // Verificar si el resultado coincide con los atletas esperados después del filtrado
    expect(filteredAthletes).toEqual([
      {
        name: "Mohamed Ihab Youssef Ahmed Mahmoud",
        gender: "M",
        height: "165",
        weight: "77",
        sport: "Weightlifting",
        team: "Egypt",
        noc: "EGY",
        age: 26,
        event: "Weightlifting Men's Middleweight",
        medal: "Bronze"
      },
    ]);
  });
});

