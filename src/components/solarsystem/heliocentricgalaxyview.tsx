import * as THREE from "three";

export const HeliocentricGalaxyView = () => {
  const heliocentricGalaxyView = new THREE.Scene();
  const galaxyTexture = new THREE.TextureLoader().load("starmap.webp");
  const galaxyGeometry = new THREE.SphereGeometry(99999999, 32, 32);
  galaxyGeometry.scale(20, 20, 20);
  const galaxymaterial = new THREE.MeshBasicMaterial({
    map: galaxyTexture,
    side: THREE.BackSide,
    depthWrite: false,
    transparent: true,
    opacity: 1,
  });
  const galaxySphere = new THREE.Mesh(galaxyGeometry, galaxymaterial);

  heliocentricGalaxyView.add(galaxySphere);

  return heliocentricGalaxyView;
};
