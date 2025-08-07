import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { jupiterConfig } from "../../libs/constants/planets";

export const JupiterSystem = () => {
  const jupiterSystem = createPlanetSystem(jupiterConfig);

  return jupiterSystem;
};
