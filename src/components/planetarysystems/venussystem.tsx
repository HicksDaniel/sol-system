import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { venusConfig } from "../../libs/constants/planets";

export const VenusSystem = () => {
  const venusSystem = createPlanetSystem(venusConfig);

  return venusSystem;
};
