import * as THREE from "three";
import { PhobosSystem } from "./phobosSystem";
import { DeimosSystem } from "./deimosSystem";

export const MarsMoonsSystem = () => {
  const moonsGroup = new THREE.Group();
  moonsGroup.name = "marsMoonsSystem";

  // Create both moon systems
  const phobosSystem = PhobosSystem();
  const deimosSystem = DeimosSystem();

  // Add both to the group
  moonsGroup.add(phobosSystem);
  moonsGroup.add(deimosSystem);

  // Combined animation function that animates both moons
  const animate = (marsPosition: THREE.Vector3) => {
    if (phobosSystem.userData.animate) {
      phobosSystem.userData.animate(marsPosition);
    }
    if (deimosSystem.userData.animate) {
      deimosSystem.userData.animate(marsPosition);
    }
  };

  moonsGroup.userData = {
    systemId: "marsMoonsSystem",
    animate,
    phobosSystem, // Expose individual systems if needed
    deimosSystem,
  };

  return moonsGroup;
};
