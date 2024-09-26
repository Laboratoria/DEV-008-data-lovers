// estas funciones son de ejemplo
import { athletes } from "./athletes.js";

//funciones importadas
export function getFilteredAthletes(
  selectedName,
  selectedGender,
  selectedMedal,
  selectedTeam,
  selectedSport,
  selectedEvent,
  selectedAgeMin,
  ageMinFilter,
  selectedAgeMax
) {
  const filteredAthletes = athletes.filter((athlete) => {
    return (
      (selectedName === "" || athlete.name === selectedName) &&
      (selectedGender === "" || athlete.gender === selectedGender) &&
      (selectedMedal === "" || athlete.medal === selectedMedal) &&
      (selectedTeam === "" || athlete.team === selectedTeam) &&
      (selectedSport === "" || athlete.sport === selectedSport) &&
      (selectedEvent === "" || athlete.event === selectedEvent) &&
      (selectedAgeMin === "" || athlete.age >= parseInt(selectedAgeMin)) &&
      (selectedAgeMax === "" || athlete.age <= parseInt(selectedAgeMax))
    );
  });

  return filteredAthletes;
}

