import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { ioConfig } from "../../libs/constants/moons";

export const IoSystem = () => {
  const ioSystem = createPlanetSystem(ioConfig);

  return ioSystem;
};
