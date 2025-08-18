import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { callistoConfig } from "../../libs/constants/moons";

export const CallistoSystem = () => {
  const callistoSystem = createPlanetSystem(callistoConfig);

  return callistoSystem;
};
