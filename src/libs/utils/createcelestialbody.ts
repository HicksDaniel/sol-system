import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { solarDay } from "../constants/time";
import createCircleSpriteTexture from "../constants/sprites";

interface PlanetConfig {
  radius: number;
  orbitRadius: number;
  axialTilt?: number;
  texture: string;
  sprite?: {
    color: string;
    borderColor: string;
    opacity: number;
    scaleFactor: number;
  };
  systemId: string;
  orbitalPeriod?: number; // in Earth days
  rotationPeriod?: number; // in Earth days
  rotationalPeriod?: number; // axial rotation period in Earth days
  eccentricity?: number; // orbital eccentricity
  ellipseRotation?: number; // rotation of the ellipse
}

export function createPlanetSystem(
  config: PlanetConfig,
  childSystemFactories?: (() => THREE.Group)[]
) {
  const group = new THREE.Group();
  let orbitAngle = 0;
  let controls: OrbitControls;

  // Create sprite (optional for moons)
  let sprite: THREE.Sprite | null = null;
  if (config.sprite) {
    const spriteTexture = createCircleSpriteTexture(
      2048,
      config.sprite.color,
      config.sprite.borderColor
    );
    const spriteMat = new THREE.SpriteMaterial({
      map: spriteTexture,
      transparent: true,
      opacity: config.sprite.opacity,
      depthWrite: false,
    });

    sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(
      config.radius * config.sprite.scaleFactor,
      config.radius * config.sprite.scaleFactor,
      1
    );
    sprite.frustumCulled = false;
    sprite.renderOrder = 1;
    group.add(sprite);
  }

  // Create planet mesh
  const texture = new THREE.TextureLoader().load(config.texture);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(config.radius, 64, 64),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  mesh.position.set(config.orbitRadius, 0, 0);
  if (config.axialTilt) {
    mesh.rotation.x = config.axialTilt;
  }
  mesh.renderOrder = 0;
  group.add(mesh);

  // Add child systems if provided
  let childSystems: THREE.Group[] = [];
  if (childSystemFactories) {
    childSystemFactories.forEach((factory) => {
      const childSystem = factory();
      childSystems.push(childSystem);
      group.add(childSystem);
    });
  }

  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    999999999
  );
  camera.position.set(config.orbitRadius + 50, 20, 50);
  camera.lookAt(config.orbitRadius, 0, 0);

  // Track previous position for camera movement
  let previousPosition = new THREE.Vector3(config.orbitRadius, 0, 0);

  // Animation function
  const animate = (parentPosition?: THREE.Vector3) => {
    const rotationalPeriod = config.rotationalPeriod ?? 1; // Default to 1 day, but allow 0

    // Rotate planet on its axis
    if (rotationalPeriod !== 0) {
      mesh.rotation.y += solarDay / rotationalPeriod;
    }

    // Orbital motion
    let newX: number, newZ: number;

    if (rotationalPeriod === 0) {
      // No orbital motion (for the sun)
      newX = config.orbitRadius;
      newZ = 0;
    } else {
      const orbitalPeriod = config.orbitalPeriod || 365.25; // Default to Earth's orbital period
      orbitAngle -= solarDay / orbitalPeriod;

      if (config.eccentricity && parentPosition) {
        // Elliptical orbit (for moons)
        const eccentricity = config.eccentricity;
        const ellipseRotation = config.ellipseRotation || Math.PI * 0.025;
        const orbitAppogee = config.orbitRadius * (1 + eccentricity);
        const orbitPerigee = config.orbitRadius * (1 - eccentricity);

        const relativeX =
          Math.cos(orbitAngle) * orbitAppogee * Math.cos(ellipseRotation) -
          Math.sin(orbitAngle) * orbitPerigee * Math.sin(ellipseRotation);
        const relativeZ =
          Math.cos(orbitAngle) * orbitAppogee * Math.sin(ellipseRotation) +
          Math.sin(orbitAngle) * orbitPerigee * Math.cos(ellipseRotation);

        newX = parentPosition.x + relativeX;
        newZ = parentPosition.z + relativeZ;
      } else {
        // Circular orbit (for planets)
        newX = Math.cos(orbitAngle) * config.orbitRadius;
        newZ = Math.sin(orbitAngle) * config.orbitRadius;
      }
    }

    // Update camera if controls exist
    if (controls) {
      const movement = new THREE.Vector3(
        newX - previousPosition.x,
        0,
        newZ - previousPosition.z
      );
      controls.object.position.add(movement);
    }

    // Update positions
    if (sprite) {
      sprite.position.set(newX, 0, newZ);
    }
    mesh.position.set(newX, 0, newZ);
    previousPosition.set(newX, 0, newZ);

    // Update camera target and controls
    if (controls) {
      controls.target.copy(mesh.position);
      controls.update();
    }

    // Animate child systems if they exist
    childSystems.forEach((childSystem) => {
      if (childSystem && childSystem.userData.animate) {
        childSystem.userData.animate(mesh.position);
      }
    });
  };

  // Setup controls function
  const setupControls = (domElement: HTMLElement) => {
    controls = new OrbitControls(camera, domElement);
    controls.target.copy(mesh.position);
  };

  // Set up userData
  group.userData = {
    camera,
    systemId: config.systemId,
    animate,
    setupControls,
    mesh, // Expose mesh for external access
    sprite, // Expose sprite for external access
  };

  return group;
}
