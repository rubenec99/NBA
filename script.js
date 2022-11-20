const teamsAPI = "https://www.balldontlie.io/api/v1/teams/";

const selectTeam = document.getElementById("selectTeam");

// Function para obtener los equipos de la API
async function getTeams() {
  let response = await fetch(`${teamsAPI}`);
  let dataTeams = await response.json();

  fillSelectTeams(dataTeams.data);
  teamInfo(dataTeams.data);
}

// Function que rellena los campos del select
const fillSelectTeams = (dataTeams) => {
  dataTeams.forEach((team) => {
    let optionElement = document.createElement("option");
    let teamName = team.name;

    optionElement.value = teamName;
    optionElement.textContent = teamName;

    selectTeam.appendChild(optionElement);
  });
};

// Function para mostrar datos del equipo seleccionado
document.getElementById("button").addEventListener("click", teamInfo);

async function teamInfo() {
  let teamName = selectTeam.value;
  let response = await fetch(`${teamsAPI}`);
  let dataTeams = await response.json();
  let fullName;
  let abbName;
  dataTeams.data.forEach((team) => {
    if (team.name === teamName) {
      fullName = team.full_name;
      abbName = team.abbreviation;
      console.log("Abreviacion de " + fullName + ": " + abbName);
    }
  });
}

const div = document.querySelector("div");
document.getElementById("button").addEventListener("click", teamInfoWrite);

async function teamInfoWrite() {
  let teamName = selectTeam.value;
  let response = await fetch(`${teamsAPI}`);
  let dataTeams = await response.json();
  dataTeams.data.forEach((team) => {
    if (team.name === teamName) {
      let fullName = team.full_name;
      let abbName = team.abbreviation;
      playerName = team.playerName;
      div.textContent = "🏀" + fullName + " (" + abbName + ") 🏀";
      div.className = "textDiv";
    }
  });
}

getTeams();
teamInfo();
teamInfoWrite();
