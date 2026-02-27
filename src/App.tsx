import "./App.css";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EarthSystem } from "./components/planetarysystems/earthsystem";
import { HeliocentricGalaxyView } from "./components/solarsystem/heliocentricgalaxyview";
import { MarsSystem } from "./components/planetarysystems/marssystem";
import { SolSystem } from "./components/solarsystem/solsystem";
import { VenusSystem } from "./components/planetarysystems/venussystem";
import { MercurySystem } from "./components/planetarysystems/mercurysystem";
import { JupiterSystem } from "./components/planetarysystems/jupitersystem";
import { SaturnSystem } from "./components/planetarysystems/saturnsystem";
import { UranusSystem } from "./components/planetarysystems/uranussystem";
import { NeptuneSystem } from "./components/planetarysystems/neptunesystem";
import TimeControl from "./components/overlays/timeControl";

function App() {
  const sceneRef = useRef<HTMLCanvasElement>(null);
  const lockedSystemRef = useRef<THREE.Group | null>(null);
  const previousLockedPositionRef = useRef<THREE.Vector3 | null>(null);
  const planetarySystemsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    let frameId: number;

    if (!sceneRef.current) return;

    const solarScene = new THREE.Scene();

    const mainCamera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      999999999
    );
    mainCamera.position.set(-8000, 2500, 4000);

    const renderer = new THREE.WebGLRenderer({
      canvas: sceneRef.current,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const controls = new OrbitControls(mainCamera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

    const heliocentricGalaxyView = HeliocentricGalaxyView();
    solarScene.add(heliocentricGalaxyView);

    const earthSystem = EarthSystem();
    const marsSystem = MarsSystem();
    const solSystem = SolSystem();
    const venusSystem = VenusSystem();
    const mercurySystem = MercurySystem();
    const jupiterSystem = JupiterSystem();
    const saturnSystem = SaturnSystem();
    const uranusSystem = UranusSystem();
    const neptuneSystem = NeptuneSystem();

    // Collect all systems including child systems
    const allSystems = [
      earthSystem,
      marsSystem,
      solSystem,
      venusSystem,
      mercurySystem,
      jupiterSystem,
      saturnSystem,
      uranusSystem,
      neptuneSystem,
    ];

    // Add child systems to the main systems array
    const addChildSystems = (system: THREE.Group) => {
      if (system.userData.childSystems) {
        system.userData.childSystems.forEach((childSystem: THREE.Group) => {
          allSystems.push(childSystem);
          childSystem.userData.parentSystemId = system.userData.systemId;
          addChildSystems(childSystem); // Recursively add nested children
        });
      }
    };

    allSystems.slice().forEach(addChildSystems);

    planetarySystemsRef.current = allSystems;

    allSystems.forEach((system) => solarScene.add(system));

    // Add function to collect all systems recursively
    const collectAllSystems = (systems: THREE.Group[]): THREE.Group[] => {
      const allSystems: THREE.Group[] = [];

      const addSystemAndChildren = (system: THREE.Group) => {
        allSystems.push(system);
        // Check for child systems
        system.children.forEach((child) => {
          if (child instanceof THREE.Group && child.userData.systemId) {
            addSystemAndChildren(child);
          }
        });
      };

      systems.forEach(addSystemAndChildren);
      return allSystems;
    };

    const handleDoubleClick = (event: MouseEvent) => {
      const allSystems = collectAllSystems(planetarySystemsRef.current);

      let closestSystem: THREE.Group | null = null;
      let closestScreenDistance = Infinity;
      const CLICK_THRESHOLD_PX = 80;

      for (const system of allSystems) {
        if (!system.userData.mesh) continue;

        const worldPosition = system.userData.mesh.position.clone();
        const screenPosition = worldPosition.project(mainCamera);

        const screenX = (screenPosition.x * 0.5 + 0.5) * window.innerWidth;
        const screenY = (-screenPosition.y * 0.5 + 0.5) * window.innerHeight;

        const dx = screenX - event.clientX;
        const dy = screenY - event.clientY;
        const screenDistance = Math.sqrt(dx * dx + dy * dy);

        if (screenDistance < closestScreenDistance) {
          closestScreenDistance = screenDistance;
          closestSystem = system;
        }
      }

      if (closestSystem && closestScreenDistance <= CLICK_THRESHOLD_PX) {
        const meshPosition = closestSystem.userData.mesh.position;
        const offset = closestSystem.userData.cameraOffset;
        mainCamera.position.copy(meshPosition).add(offset);
        controls.target.copy(meshPosition);
        lockedSystemRef.current = closestSystem;
        previousLockedPositionRef.current = meshPosition.clone();
        return;
      }

      lockedSystemRef.current = null;
      previousLockedPositionRef.current = null;
    };

    renderer.domElement.addEventListener("dblclick", handleDoubleClick);

    let lastFrameTime = 0;
    const fps = 60;
    const frameDuration = 1000 / fps;

    const animate = (currentTime: number = 0) => {
      if (currentTime - lastFrameTime < frameDuration) {
        frameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime;

      const lockedSystemId = lockedSystemRef.current?.userData.systemId;

      planetarySystemsRef.current.forEach((system) => {
        if (system.userData.animate) {
          let parentPosition: THREE.Vector3 | undefined;

          // Check if this system has a parent
          if (system.userData.parentSystemId) {
            const parentSystem = planetarySystemsRef.current.find(
              (s) => s.userData.systemId === system.userData.parentSystemId
            );
            if (parentSystem && parentSystem.userData.mesh) {
              parentPosition = parentSystem.userData.mesh.position;
            }
          }

          system.userData.animate(parentPosition, lockedSystemId);
        }
      });

      // If a system is locked, translate the camera by how far the body moved this frame
      const locked = lockedSystemRef.current;
      if (locked && locked.userData.mesh) {
        const currentPosition = locked.userData.mesh.position;
        const previous = previousLockedPositionRef.current;

        if (previous) {
          const delta = currentPosition.clone().sub(previous);
          mainCamera.position.add(delta);
          controls.target.add(delta);
        }

        previousLockedPositionRef.current = currentPosition.clone();
      }

      controls.update();
      renderer.render(solarScene, mainCamera);
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.domElement.removeEventListener("dblclick", handleDoubleClick);
      cancelAnimationFrame(frameId);
      solarScene.remove(earthSystem);
      solarScene.remove(marsSystem);
      solarScene.remove(venusSystem);
      solarScene.remove(mercurySystem);
      solarScene.remove(jupiterSystem);
      solarScene.remove(saturnSystem);
      solarScene.remove(uranusSystem);
      solarScene.remove(neptuneSystem);
      solarScene.remove(solSystem);
      solarScene.remove(heliocentricGalaxyView);
      renderer.dispose();
    };
  }, []);

  // document.addEventListener("mousedown", () => {
  //   console.log(currentCameraRef.current);
  // });

  return (
    <>
      <canvas ref={sceneRef} id="bg" />
      <TimeControl />
    </>
  );
}

export default App;
