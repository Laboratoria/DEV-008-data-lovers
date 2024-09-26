import { athletes } from "./athletes.js";

/////////////////////////////ESTADÍSTICAS ///////////////////////////////////////////

///GRAFICO POR MEDALLAS

// Obtén la referencia al elemento canvas
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Obtén los datos de medallas de los atletas
const medals = athletes.map((athlete) => athlete.medal);
const goldCount = medals.filter((medal) => medal === "Gold").length;
const silverCount = medals.filter((medal) => medal === "Silver").length;
const bronzeCount = medals.filter((medal) => medal === "Bronze").length;

// Configura los datos y opciones para la gráfica de barras
const data = {
  labels: ["Oro", "Plata", "Bronce"],
  datasets: [
    {
      label: "Tipo de medalla",
      data: [goldCount, silverCount, bronzeCount],
      backgroundColor: ["#FDFF9F", "#B8E0FF", "#FF8885"],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: Math.max(goldCount, silverCount, bronzeCount) + 1,
    },
  },
};

// Crea la instancia de la gráfica de barras
new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});

/// GRAFICO POR GENERO
//  <canvas id="chartGender"></canvas>
const ctx1 = document.getElementById("chartGender").getContext("2d");
const genders = athletes.map((athlete) => athlete.gender);
const femCount = genders.filter((gender) => gender === "F").length;
const masCount = genders.filter((gender) => gender === "M").length;

const datag = {
  labels: ["Masculino", "Femenino"],
  datasets: [
    {
      label: "Participantes por genero",
      data: [masCount, femCount],
      backgroundColor: ["#61BDFF", "#FF9C8F"],
    },
  ],
};

// Crea la instancia del pie
new Chart(ctx1, {
  type: "pie",
  data: datag,
});

//GRAFICO POR RANGO DE EDAD
const contarPorRangoEdad = athletes.reduce((contador, atleta) => {
  const edad = atleta.age;

  if (edad >= 10 && edad <= 20) {
    contador["10-20"] = (contador["10-20"] || 0) + 1;
  } else if (edad >= 21 && edad <= 30) {
    contador["21-30"] = (contador["21-30"] || 0) + 1;
  } else if (edad >= 31 && edad <= 40) {
    contador["31-40"] = (contador["31-40"] || 0) + 1;
  }

  return contador;
}, {});

const ctx2 = document.getElementById("chartAge").getContext("2d");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["10-20", "21-30", "31-40"],
    datasets: [
      {
        label: "Cantidad de personas",
        data: [
          contarPorRangoEdad["10-20"] || 0,
          contarPorRangoEdad["21-30"] || 0,
          contarPorRangoEdad["31-40"] || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Color para el rango 10-20
          "rgba(54, 162, 235, 0.2)", // Color para el rango 21-30
          "rgba(255, 206, 86, 0.2)", // Color para el rango 31-40
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Color del borde para el rango 10-20
          "rgba(54, 162, 235, 1)", // Color del borde para el rango 21-30
          "rgba(255, 206, 86, 1)", // Color del borde para el rango 31-40
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//CANTIDAD DE ATLETAS POR PAIS

const contarPorPais = athletes.reduce((contador, atleta) => {
  const pais = atleta.team;
  contador[pais] = (contador[pais] || 0) + 1;
  return contador;
}, {});

const paisesOrdenados = Object.keys(contarPorPais).sort(
  (paisA, paisB) => contarPorPais[paisB] - contarPorPais[paisA]
);

const ctx3 = document.getElementById("chartCountry").getContext("2d");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: paisesOrdenados,
    datasets: [
      {
        label: "Cantidad de atletas por país",
        data: paisesOrdenados.map((pais) => contarPorPais[pais] || 0),
        fill: false,
        borderColor: "#303C85", // Color de la línea
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "País",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cantidad de atletas",
        },
        beginAtZero: true,
      },
    },
  },
});

//CANTIDAD DE ATLETAS POR DEPORTE

const contarPorDeporte = athletes.reduce((contador, atleta) => {
  const deporte = atleta.sport;
  contador[deporte] = (contador[deporte] || 0) + 1;
  return contador;
}, {});

const deportes = Object.keys(contarPorDeporte);
const cantidadPersonas = Object.values(contarPorDeporte);

const ctx4 = document.getElementById("chartSport").getContext("2d");

new Chart(ctx4, {
  type: "bar",
  data: {
    labels: deportes,
    datasets: [
      {
        label: "Cantidad de personas",
        data: cantidadPersonas,
        backgroundColor: "rgba(192, 170, 72, 0.2)",
        borderColor: "rgba(74, 64, 19, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  },
});

//RANKING DE PAISES QUE GANARON MAS MEDALLAS
const contarMedallasPorPais = athletes.reduce((contador, atleta) => {
  const pais = atleta.team;
  contador[pais] = (contador[pais] || 0) + 1;
  return contador;
}, {});

const paisOrdenado = Object.keys(contarMedallasPorPais).sort(
  (a, b) => contarMedallasPorPais[b] - contarMedallasPorPais[a]
);
const tresPrimerosPaises = paisOrdenado.slice(0, 3);
const paises = tresPrimerosPaises;
const cantidadMedallas = tresPrimerosPaises.map(
  (pais) => contarMedallasPorPais[pais]
);

const ctx5 = document.getElementById("rankingDepor").getContext("2d");

new Chart(ctx5, {
  type: "bar",
  data: {
    labels: paises,
    datasets: [
      {
        label: "Cantidad de medallas",
        data: cantidadMedallas,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  },
});
