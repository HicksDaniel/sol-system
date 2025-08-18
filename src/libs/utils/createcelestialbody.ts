import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { solarDay } from "../constants/time";
import createCircleSpriteTexture from "../constants/sprites";
import { timeManager } from "./timeManager";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";

interface PlanetConfig {
  diameter: number;
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

  // Shared function to calculate elliptical position
  const calculateEllipticalPosition = (
    angle: number,
    orbitRadius: number,
    eccentricity: number,
    ellipseRotation: number = 0
  ) => {
    const semiMajorAxis = orbitRadius;
    const semiMinorAxis =
      orbitRadius * Math.sqrt(1 - eccentricity * eccentricity);
    const focalDistance = orbitRadius * eccentricity;

    // Calculate position on ellipse
    let x = semiMajorAxis * Math.cos(angle) - focalDistance;
    let z = semiMinorAxis * Math.sin(angle);

    // Apply ellipse rotation
    if (ellipseRotation !== 0) {
      const rotatedX =
        x * Math.cos(ellipseRotation) - z * Math.sin(ellipseRotation);
      const rotatedZ =
        x * Math.sin(ellipseRotation) + z * Math.cos(ellipseRotation);
      x = rotatedX;
      z = rotatedZ;
    }

    return { x, z };
  };

  let orbitalPath: THREE.Object3D | null = null;
  if (config.orbitalPath?.visible && config.orbitRadius > 0) {
    const createEllipticalOrbitPath = (
      eccentricity: number = 0,
      orbitRadius: number,
      ellipseRotation: number = 0,
      color: number = 0x444444,
      opacity: number = 0.4,
      lineWidth: number = 2,
      segments: number = 2048
    ) => {
      const points = [];

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const { x, z } = calculateEllipticalPosition(
          angle,
          orbitRadius,
          eccentricity,
          ellipseRotation
        );
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
      config.eccentricity || 0,
      config.orbitRadius,
      config.ellipseRotation || 0,
      config.orbitalPath.color || 0x444444,
      config.orbitalPath.opacity || 0.4,
      config.orbitalPath.lineWidth || 2
    );

    if (config.orbitalInclination) {
      orbitalPath.rotation.x -= config.orbitalInclination;
    }
    group.add(orbitalPath);
  }

  const texture = new THREE.TextureLoader().load(config.texture);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(config.diameter, 64, 64),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  mesh.position.set(config.orbitRadius, 0, 0);
  if (config.axialTilt) {
    mesh.rotation.x = config.axialTilt;
  }
  mesh.renderOrder = 0;

  group.add(mesh);

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
      alphaTest: 0.1,
    });

    sprite = new THREE.Sprite(spriteMat);
    sprite.center.set(0.4, 0.4);
    sprite.scale.set(
      config.diameter * config.sprite.scaleFactor,
      config.diameter * config.sprite.scaleFactor,
      1
    );
    sprite.frustumCulled = false;
    sprite.renderOrder = 1;

    // Make sprite non-raycastable
    (sprite as any).isSprite = true;
    sprite.userData.nonRaycastable = true;

    sprite.position.copy(mesh.position);
    group.add(sprite);
  }

  let childSystems: THREE.Group[] = [];
  if (childSystemFactories) {
    childSystemFactories.forEach((factory) => {
      const childSystem = factory();
      childSystems.push(childSystem);

      childSystem.userData.parentSystemId = config.systemId;
      group.add(childSystem);
    });
  }

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.0015,
    999999999
  );

  const cameraDistance = config.cameraDistance || config.diameter * 10 + 0.5;
  camera.position.set(
    config.orbitRadius + cameraDistance,
    cameraDistance * 0.3,
    cameraDistance * 0.5
  );
  camera.lookAt(config.orbitRadius, 0, 0);

  const inclination = config.orbitalInclination || 0;
  const initialY = inclination !== 0 ? 0 * Math.sin(inclination) : 0;
  let previousPosition = new THREE.Vector3(config.orbitRadius, initialY, 0);

  const animate = (
    parentPosition?: THREE.Vector3,
    currentActiveCamera?: THREE.Camera
  ) => {
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
        // Handle elliptical orbit around parent position
        const { x: relativeX, z: relativeZ } = calculateEllipticalPosition(
          orbitAngle,
          config.orbitRadius,
          config.eccentricity,
          config.ellipseRotation || 0
        );

        // Apply orbital inclination to the elliptical position
        const inclination = config.orbitalInclination || 0;
        let finalX = relativeX;
        let finalZ = relativeZ;
        let finalY = 0;

        if (inclination !== 0) {
          // Apply inclination rotation around X-axis
          finalZ = relativeZ * Math.cos(inclination);
          finalY = relativeZ * Math.sin(inclination);
        }

        newX = parentPosition.x + finalX;
        newZ = parentPosition.z + finalZ;
        mesh.position.y = parentPosition.y + finalY;
      } else if (parentPosition) {
        // Handle circular orbit around parent position
        const baseX = Math.cos(orbitAngle) * config.orbitRadius;
        const baseZ = Math.sin(orbitAngle) * config.orbitRadius;

        const inclination = config.orbitalInclination || 0;
        if (inclination !== 0) {
          newX = parentPosition.x + baseX;
          newZ = parentPosition.z + baseZ * Math.cos(inclination);
          mesh.position.y = parentPosition.y + baseZ * Math.sin(inclination);
        } else {
          newX = parentPosition.x + baseX;
          newZ = parentPosition.z + baseZ;
          mesh.position.y = parentPosition.y;
        }
      } else {
        // No parent position - orbit around origin
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
    mesh.position.set(newX, newY, newZ);
    previousPosition.set(newX, newY, newZ);

    if (sprite) {
      sprite.position.set(newX, newY, newZ);

      // Hide sprite if current camera belongs to this system or any child system
      const isCurrentSystemActive = currentActiveCamera === camera;
      const isChildSystemActive = childSystems.some(
        (childSystem) => childSystem.userData.camera === currentActiveCamera
      );

      sprite.visible = !isCurrentSystemActive && !isChildSystemActive;
    }

    if (controls) {
      controls.target.copy(mesh.position);
      controls.update();
    }

    // Update child systems with this system's position as their parent
    childSystems.forEach((childSystem) => {
      if (childSystem && childSystem.userData.animate) {
        childSystem.userData.animate(mesh.position, currentActiveCamera);
        // Update orbital paths to follow parent
        if (childSystem.children) {
          childSystem.children.forEach((child) => {
            if (child instanceof Line2) {
              child.position.copy(mesh.position);
            }
          });
        }
      }
    });

    // Update orbital path position if this is a child system
    if (parentPosition && orbitalPath) {
      orbitalPath.position.copy(parentPosition);
    }
  };

  const setupControls = (domElement: HTMLElement) => {
    controls = new OrbitControls(camera, domElement);
    controls.target.copy(mesh.position);
  };

  const cameraClose = () => {
    return camera.position.distanceTo(mesh.position) < config.orbitRadius * 2;
  };

  group.userData = {
    camera,
    systemId: config.systemId,
    animate,
    setupControls,
    mesh,
    sprite,
    childSystems,
    parentSystemId: null, // Will be set by parent if this is a child
  };

  return group;
}
