import * as THREE from "three";
import { solarDay } from "../../constants/time";

export const MarsSystem = () => {
  const marsSystem = new THREE.Group();
  marsSystem.name = "marsSystem";

  const marsCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    999999999
  );
  marsCamera.position.set(50, 20, 50);
  marsCamera.lookAt(0, 0, 0);

  const marsRadius = 0.53;
  const marsOrbitRadius = 10;

  const geometry = new THREE.SphereGeometry(marsRadius, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  const mars = new THREE.Mesh(geometry, material);
  marsSystem.add(mars);

  mars.position.x = marsOrbitRadius;

  marsSystem.userData.animate = () => {
    mars.rotation.y += solarDay;
  };

  // Store references for animation
  marsSystem.userData = {
    camera: marsCamera,
    systemId: "marsSystem",
    animate: marsSystem.userData.animate,
  };

  return marsSystem;
};
