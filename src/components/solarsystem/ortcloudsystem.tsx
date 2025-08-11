import { createPlanetSystem } from "../../libs/utils/createcelestialbody";
import { ortCloudConfig } from "../../libs/constants/planets";

export const OrtCloudSystem = () => {
  const ortCloudSystem = createPlanetSystem(ortCloudConfig);

  return ortCloudSystem;
};
