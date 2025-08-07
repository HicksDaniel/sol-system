import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { deimosConfig } from "../../libs/constants/moons";

export const DeimosSystem = () => {
  const deimosSystem = createPlanetSystem(deimosConfig);

  return deimosSystem;
};
