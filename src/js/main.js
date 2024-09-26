import { athletes } from "./athletes.js";
import { getFilteredAthletes } from "./data.js";

// Importa la base de datos desde athletes.js
//buscar el boton y luego
///eventlistener declarar buscar

//buscar el boton y luego
///eventlistener declarar buscar

const nameFilter = document.getElementById("name");
const genderFilter = document.getElementById("gender");
const medalFilter = document.getElementById("medal");
const teamFilter = document.getElementById("team");
const sportFilter = document.getElementById("sport");
const eventFilter = document.getElementById("event");
// Creación del boton buscar
const buscarButton = document.getElementById("btnBuscar");
buscarButton.addEventListener("click", aplicarFiltros);

// Gender: Usando filter
const uniqueGenders = athletes
  .map((athlete) => athlete.gender)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));
uniqueGenders.forEach((gender) => {
  const option = document.createElement("option");
  option.textContent = gender;
  genderFilter.appendChild(option);
});

// Name: Usando filter
const uniqueNames = athletes
  .map((athlete) => athlete.name)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));
uniqueNames.forEach((name) => {
  const option = document.createElement("option");
  option.textContent = name;
  nameFilter.appendChild(option);
});

// MEDAL: Usando filter
const uniqueMedals = athletes
  .map((athlete) => athlete.medal)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueMedals.forEach((medal) => {
  const option = document.createElement("option");
  option.textContent = medal;
  medalFilter.appendChild(option);
});

// EVENT: Usando filter
const uniqueEvents = athletes
  .map((athlete) => athlete.event)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueEvents.forEach((event) => {
  const option = document.createElement("option");
  option.textContent = event;
  eventFilter.appendChild(option);
});

//  SPORT : Usando filter
const uniqueSports = athletes
  .map((athlete) => athlete.sport)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueSports.forEach((sport) => {
  const option = document.createElement("option");
  option.textContent = sport;
  sportFilter.appendChild(option);
});

//  TEAM : Usando filter
const uniqueTeams = athletes
  .map((athlete) => athlete.team)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort((a, b) => a.localeCompare(b));

uniqueTeams.forEach((team) => {
  const option = document.createElement("option");
  option.textContent = team;
  teamFilter.appendChild(option);
});

// DECLARACIÓN DE MÍNIMOS Y MÁXIMOS
// EDAD
const ageMinFilter = document.getElementById("ageMin");
const ageMaxFilter = document.getElementById("ageMax");

// EDAD :filtros
const ages = athletes.map((athlete) => athlete.age);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

for (let i = minAge; i <= maxAge; i++) {
  const optionMin = document.createElement("option");
  optionMin.value = i;
  optionMin.textContent = i + " años";
  ageMinFilter.appendChild(optionMin);

  const optionMax = document.createElement("option");
  optionMax.value = i;
  optionMax.textContent = i + " años";
  ageMaxFilter.appendChild(optionMax);
}

// DECLARACIÓN DE MÍNIMOS Y MÁXIMOS
// EDAD
/*
// TALLA
const heightMinFilter = document.getElementById("heightMin");
const heightMaxFilter = document.getElementById("heightMax");
// PESO
const weightMinFilter = document.getElementById("weightMin");
const weightMaxFilter = document.getElementById("weightMax");

const weights = athletes.map((athlete) => athlete.weight);
const minWeight = Math.min(...weights);
const maxWeight = Math.max(...weights);

for (let i = minWeight; i <= maxWeight; i++) {
  const optionMin = document.createElement("option");
  optionMin.value = i;
  optionMin.textContent = i;
  weightMinFilter.appendChild(optionMin);

  const optionMax = document.createElement("option");
  optionMax.value = i;
  optionMax.textContent = i;
  weightMaxFilter.appendChild(optionMax);
}*/

//MOSTRAR EN PANTALLA DATOS
document.addEventListener("DOMContentLoaded", function () {
  //Obtener el elemento de la tabla
  const table = document.getElementById("resultado");
  const tbody = table.getElementsByTagName("tbody")[0];

  // Recorrer los datos de los atletas
  athletes.forEach((athlete) => {
    // Crear una nueva fila
    const row = document.createElement("tr");

    //Crear celdas para cada propiedad del atleta
    const nameCell = document.createElement("td");
    nameCell.textContent = athlete.name;
    row.appendChild(nameCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = athlete.gender;
    row.appendChild(genderCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = athlete.age;
    row.appendChild(ageCell);

    const heightCell = document.createElement("td");
    heightCell.textContent = athlete.height;
    row.appendChild(heightCell);

    const weightCell = document.createElement("td");
    weightCell.textContent = athlete.weight;
    row.appendChild(weightCell);

    const sportCell = document.createElement("td");
    sportCell.textContent = athlete.sport;
    row.appendChild(sportCell);

    const teamCell = document.createElement("td");
    teamCell.textContent = athlete.team;
    row.appendChild(teamCell);

    /*
    const nocCell = document.createElement("td");
    nocCell.textContent = athlete.noc;
    row.appendChild(nocCell);
*/

    const eventCell = document.createElement("td");
    eventCell.textContent = athlete.event;
    row.appendChild(eventCell);

    const medalCell = document.createElement("td");
    medalCell.textContent = athlete.medal;
    row.appendChild(medalCell);

    // Agregar la fila a la tabla
    tbody.appendChild(row);
  });
});

//APLICAR FILTROS
// Obtener los valores seleccionados de los filtros

function aplicarFiltros() {
  const selectedName = nameFilter.value;
  const selectedGender = genderFilter.value;
  const selectedMedal = medalFilter.value;
  const selectedTeam = teamFilter.value;
  const selectedSport = sportFilter.value;
  const selectedEvent = eventFilter.value;
  const selectedAgeMin = ageMinFilter.value;
  const selectedAgeMax = ageMaxFilter.value;

  const filteredAthletes = getFilteredAthletes(selectedName,
    selectedGender,
    selectedMedal,
    selectedTeam,
    selectedSport,
    selectedEvent,
    selectedAgeMin,
    ageMinFilter,
    selectedAgeMax
  );

  const table = document.getElementById("resultado");
  const tbody = table.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  filteredAthletes.forEach((athlete) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = athlete.name;
    row.appendChild(nameCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = athlete.gender;
    row.appendChild(genderCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = athlete.age;
    row.appendChild(ageCell);

    const heightCell = document.createElement("td");
    heightCell.textContent = athlete.height;
    row.appendChild(heightCell);

    const weightCell = document.createElement("td");
    weightCell.textContent = athlete.weight;
    row.appendChild(weightCell);

    const sportCell = document.createElement("td");
    sportCell.textContent = athlete.sport;
    row.appendChild(sportCell);

    const teamCell = document.createElement("td");
    teamCell.textContent = athlete.team;
    row.appendChild(teamCell);

    const eventCell = document.createElement("td");
    eventCell.textContent = athlete.event;
    row.appendChild(eventCell);

    const medalCell = document.createElement("td");
    medalCell.textContent = athlete.medal;
    row.appendChild(medalCell);

    tbody.appendChild(row);
  });
}


