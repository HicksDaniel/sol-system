import * as THREE from "three";
import { solarDay } from "../../constants/time";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import createCircleSpriteTexture from "../../constants/sprites";

export const EarthSystem = () => {
  const earthSystem = new THREE.Group();
  let moonOrbitAngle = 0;
  let earthOrbitAngle = 0;
  let earthControls: OrbitControls;

  const earthCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    999999999
  );
  earthCamera.position.set(50, 20, 50);
  earthCamera.lookAt(0, 0, 0);

  const earthRadius = 1;
  const moonOrbitRadius = 30;
  const earthOrbitRadius = 50;
  const eccentricity = 0.0549;
  const moonOrbitAppogee = moonOrbitRadius * (1 + eccentricity);
  const moonOrbitPerigee = moonOrbitRadius * (1 - eccentricity);
  const moonRadius = 0.2727;

  // Declare previousEarthPosition here, before the animate function
  let previousEarthPosition = new THREE.Vector3(earthOrbitRadius, 0, 0);
  const systemDiameter = moonOrbitRadius * 2;
  const spriteTexture = createCircleSpriteTexture(2048, "red", "blue");
  const spriteMaterial = new THREE.SpriteMaterial({
    map: spriteTexture,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const front = new THREE.Sprite(spriteMaterial);
  const back = new THREE.Sprite(spriteMaterial);
  back.rotation.y = Math.PI;
  front.scale.set(systemDiameter, systemDiameter, 1);
  back.scale.copy(front.scale);
  earthSystem.add(front, back);

  const earthTexture = new THREE.TextureLoader().load(
    "solarimages/2k_earth_daymap.jpg"
  );
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(earthRadius, 32, 32),
    new THREE.MeshBasicMaterial({ map: earthTexture })
  );
  earth.position.set(earthOrbitRadius, 0, 0);
  earthSystem.add(earth);

  const moonTexture = new THREE.TextureLoader().load("solarimages/8k_moon.jpg");
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(moonRadius, 32, 32),
    new THREE.MeshBasicMaterial({ map: moonTexture })
  );
  moon.position.set(moonOrbitRadius, 0, 0);
  earthSystem.add(moon);

  earth.rotation.x = Math.PI * 0.15;

  earthSystem.userData.animate = () => {
    earth.rotation.y += solarDay;

    earthOrbitAngle -= solarDay / 365.25;
    const newEarthX = Math.cos(earthOrbitAngle) * earthOrbitRadius;
    const newEarthZ = Math.sin(earthOrbitAngle) * earthOrbitRadius;

    if (earthControls) {
      const earthMovement = new THREE.Vector3(
        newEarthX - previousEarthPosition.x,
        0,
        newEarthZ - previousEarthPosition.z
      );
      earthControls.object.position.add(earthMovement);
    }

    front.position.set(newEarthX, 0, newEarthZ);
    back.position.set(newEarthX, 0, newEarthZ);
    earth.position.set(newEarthX, 0, newEarthZ);
    previousEarthPosition.set(newEarthX, 0, newEarthZ);

    if (earthControls) {
      earthControls.target.copy(earth.position);
      earthControls.update();
    }

    moonOrbitAngle -= solarDay / 27.3;
    const ellipseRotation = Math.PI * 0.025;
    const moonRelativeX =
      Math.cos(moonOrbitAngle) * moonOrbitAppogee * Math.cos(ellipseRotation) -
      Math.sin(moonOrbitAngle) * moonOrbitPerigee * Math.sin(ellipseRotation);
    const moonRelativeZ =
      Math.cos(moonOrbitAngle) * moonOrbitAppogee * Math.sin(ellipseRotation) +
      Math.sin(moonOrbitAngle) * moonOrbitPerigee * Math.cos(ellipseRotation);

    moon.position.set(
      earth.position.x + moonRelativeX,
      earth.position.y,
      earth.position.z + moonRelativeZ
    );

    moon.rotation.y += solarDay / 27.3;
  };

  earthSystem.userData = {
    camera: earthCamera,
    systemId: "earthSystem",
    animate: earthSystem.userData.animate,
    setupControls: (domElement: HTMLElement) => {
      earthControls = new OrbitControls(earthCamera, domElement);
      earthControls.target.copy(earth.position);
    },
  };

  return earthSystem;
};
