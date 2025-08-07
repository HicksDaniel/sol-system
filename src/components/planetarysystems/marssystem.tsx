import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { marsConfig } from "../../libs/constants/planets";
import { PhobosSystem } from "../moonSystems/phobosSystem";
import { DeimosSystem } from "../moonSystems/deimosSystem";

export const MarsSystem = () => {
  const marsSystem = createPlanetSystem(marsConfig, [
    () => PhobosSystem(),
    () => DeimosSystem(),
  ]);

  return marsSystem;
};
