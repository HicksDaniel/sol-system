import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { europaConfig } from "../../libs/constants/moons";

export const EuropaSystem = () => {
  const europaSystem = createPlanetSystem(europaConfig);

  return europaSystem;
};
