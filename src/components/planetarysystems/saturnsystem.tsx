import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { saturnConfig } from "../../libs/constants/planets";

export const SaturnSystem = () => {
  const saturnSystem = createPlanetSystem(saturnConfig);

  return saturnSystem;
};
