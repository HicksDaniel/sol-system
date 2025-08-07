import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { solConfig } from "../../libs/constants/planets";

export const SolSystem = () => {
  const solSystem = createPlanetSystem(solConfig);

  return solSystem;
};
