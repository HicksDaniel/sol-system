import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { uranusConfig } from "../../libs/constants/planets";

export const UranusSystem = () => {
  const uranusSystem = createPlanetSystem(uranusConfig);

  return uranusSystem;
};
