import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { phobosConfig } from "../../libs/constants/moons";

export const PhobosSystem = () => {
  const phobosSystem = createPlanetSystem(phobosConfig);

  return phobosSystem;
};
