import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { neptuneConfig } from "../../libs/constants/planets";

export const NeptuneSystem = () => {
  const neptuneSystem = createPlanetSystem(neptuneConfig);

  return neptuneSystem;
};
