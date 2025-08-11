import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { solarDay } from "../constants/time";
import createCircleSpriteTexture from "../constants/sprites";
import { timeManager } from "./timeManager";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";

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
  orbitalPath?: {
    visible: boolean;
    color?: number;
    opacity?: number;
    isLine: boolean;
    lineWidth?: number;
  };
  systemId: string;
  orbitalPeriod?: number; // in Earth days
  rotationPeriod?: number; // in Earth days
  rotationalPeriod?: number; // axial rotation period in Earth days
  eccentricity?: number; // orbital eccentricity
  ellipseRotation?: number; // rotation of the ellipse
  orbitalInclination?: number; // orbital plane inclination in radians
  cameraDistance?: number; // distance from planet to camera
}

export function createPlanetSystem(
  config: PlanetConfig,
  childSystemFactories?: (() => THREE.Group)[]
) {
  const group = new THREE.Group();
  let orbitAngle = 0;
  let controls: OrbitControls;

  let orbitalPath: THREE.Object3D | null = null;
  if (config.orbitalPath?.visible && config.orbitRadius > 0) {
    const createEllipticalOrbitPath = (
      semiMajorAxis: number,
      eccentricity: number = 0,
      orbitalInclination: number = 0,
      color: number = 0x444444,
      opacity: number = 0.4,
      lineWidth: number = 2,
      segments: number = 2048
    ) => {
      const points = [];
      const semiMinorAxis =
        semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = semiMajorAxis * Math.cos(angle);
        const z = semiMinorAxis * Math.sin(angle);
        points.push(x, 0, z);
      }

      const geometry = new LineGeometry();
      geometry.setPositions(points);

      const material = new LineMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        linewidth: lineWidth,
      });

      material.resolution.set(window.innerWidth * 2, window.innerHeight * 2);

      return new Line2(geometry, material);
    };

    orbitalPath = createEllipticalOrbitPath(
      config.orbitRadius,
      config.eccentricity || 0,
      config.orbitalInclination || 0,
      config.orbitalPath.color || 0x444444,
      config.orbitalPath.opacity || 0.4,
      config.orbitalPath.lineWidth || 2
    );

    if (config.orbitalInclination) {
      orbitalPath.rotation.x -= config.orbitalInclination;
    }
    group.add(orbitalPath);
  }
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

  let childSystems: THREE.Group[] = [];
  if (childSystemFactories) {
    childSystemFactories.forEach((factory) => {
      const childSystem = factory();
      childSystems.push(childSystem);
      group.add(childSystem);
    });
  }

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    999999999
  );

  const cameraDistance = config.cameraDistance || config.radius * 5 + 10;
  camera.position.set(
    config.orbitRadius + cameraDistance,
    cameraDistance * 0.3,
    cameraDistance * 0.5
  );
  camera.lookAt(config.orbitRadius, 0, 0);

  const inclination = config.orbitalInclination || 0;
  const initialY = inclination !== 0 ? 0 * Math.sin(inclination) : 0;
  let previousPosition = new THREE.Vector3(config.orbitRadius, initialY, 0);

  const animate = (parentPosition?: THREE.Vector3) => {
    const rotationalPeriod = config.rotationalPeriod ?? 1;
    const currentTimeMultiplier = timeManager.getMultiplier();
    const modelSpeed = solarDay * currentTimeMultiplier;

    if (rotationalPeriod !== 0) {
      mesh.rotation.y += modelSpeed / rotationalPeriod;
    }

    let newX: number, newZ: number;

    if (rotationalPeriod === 0) {
      newX = config.orbitRadius;
      newZ = 0;
    } else {
      const orbitalPeriod = config.orbitalPeriod || 365.25;
      orbitAngle -= modelSpeed / orbitalPeriod;

      if (config.eccentricity && parentPosition) {
        const eccentricity = config.eccentricity;
        const ellipseRotation = config.ellipseRotation || Math.PI * 0.025;
        const orbitAppogee = config.orbitRadius * (1 + eccentricity);
        const orbitPerigee = config.orbitRadius * (1 - eccentricity);

        let relativeX =
          Math.cos(orbitAngle) * orbitAppogee * Math.cos(ellipseRotation) -
          Math.sin(orbitAngle) * orbitPerigee * Math.sin(ellipseRotation);
        let relativeZ =
          Math.cos(orbitAngle) * orbitAppogee * Math.sin(ellipseRotation) +
          Math.sin(orbitAngle) * orbitPerigee * Math.cos(ellipseRotation);

        const inclination = config.orbitalInclination || 0;
        let relativeY = 0;
        if (inclination !== 0) {
          const originalZ = relativeZ;
          relativeZ = originalZ * Math.cos(inclination);
          relativeY = originalZ * Math.sin(inclination);
        }

        newX = parentPosition.x + relativeX;
        newZ = parentPosition.z + relativeZ;

        if (inclination !== 0) {
          mesh.position.y = parentPosition.y + relativeY;
        }
      } else {
        const baseX = Math.cos(orbitAngle) * config.orbitRadius;
        const baseZ = Math.sin(orbitAngle) * config.orbitRadius;

        const inclination = config.orbitalInclination || 0;
        if (inclination !== 0) {
          newX = baseX;
          newZ = baseZ * Math.cos(inclination);
          const newY = baseZ * Math.sin(inclination);

          mesh.position.y = newY;
        } else {
          newX = baseX;
          newZ = baseZ;
        }
      }
    }

    if (controls) {
      const currentY = mesh.position.y;
      const movement = new THREE.Vector3(
        newX - previousPosition.x,
        currentY - previousPosition.y,
        newZ - previousPosition.z
      );
      controls.object.position.add(movement);
    }

    const newY = mesh.position.y;
    if (sprite) {
      sprite.position.set(newX, newY, newZ);
    }
    mesh.position.set(newX, newY, newZ);
    previousPosition.set(newX, newY, newZ);

    if (controls) {
      controls.target.copy(mesh.position);
      controls.update();
    }

    childSystems.forEach((childSystem) => {
      if (childSystem && childSystem.userData.animate) {
        childSystem.userData.animate(mesh.position);
      }
    });
  };

  const setupControls = (domElement: HTMLElement) => {
    controls = new OrbitControls(camera, domElement);
    controls.target.copy(mesh.position);
  };

  group.userData = {
    camera,
    systemId: config.systemId,
    animate,
    setupControls,
    mesh,
    sprite,
  };

  return group;
}
