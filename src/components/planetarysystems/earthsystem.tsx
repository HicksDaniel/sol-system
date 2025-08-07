import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { earthConfig } from "../../libs/constants/planets";
import { LunaSystem } from "../moonSystems/lunaSystem";

export const EarthSystem = () => {
  // Create the Earth system using the utility function
  const earthSystem = createPlanetSystem(earthConfig, [() => LunaSystem()]);

  return earthSystem;
};
