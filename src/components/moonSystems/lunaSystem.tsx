import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { moonConfig } from "../../libs/constants/moons";

export const LunaSystem = () => {
  // Create the Luna system using the utility function
  const lunaSystem = createPlanetSystem(moonConfig);

  return lunaSystem;
};
