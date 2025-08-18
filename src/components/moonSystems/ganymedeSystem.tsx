import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { ganymedeConfig } from "../../libs/constants/moons";

export const GanymedeSystem = () => {
  const ganymedeSystem = createPlanetSystem(ganymedeConfig);

  return ganymedeSystem;
};
