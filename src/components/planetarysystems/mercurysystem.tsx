import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { mercuryConfig } from "../../libs/constants/planets";

export const MercurySystem = () => {
  const mercurySystem = createPlanetSystem(mercuryConfig);

  return mercurySystem;
};
