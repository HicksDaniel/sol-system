import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { jupiterConfig } from "../../libs/constants/planets";
import { IoSystem } from "../moonSystems/ioSystem";
import { EuropaSystem } from "../moonSystems/europaSystem";
import { GanymedeSystem } from "../moonSystems/ganymedeSystem";
import { CallistoSystem } from "../moonSystems/callistoSystem";

export const JupiterSystem = () => {
  const jupiterSystem = createPlanetSystem(jupiterConfig, [
    () => IoSystem(),
    () => EuropaSystem(),
    () => GanymedeSystem(),
    () => CallistoSystem(),
  ]);

  return jupiterSystem;
};
