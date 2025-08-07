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

function App() {
  const sceneRef = useRef<HTMLCanvasElement>(null);
  const currentCameraRef = useRef<THREE.Camera | null>(null);
  const systemCamerasRef = useRef<Map<string, THREE.Camera>>(new Map());
  const planetarySystemsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    let frameId: number;

    if (!sceneRef.current) return;

    const solarScene = new THREE.Scene();

    const mainCamera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      999999999
    );
    mainCamera.position.setZ(6000);
    currentCameraRef.current = mainCamera;

    const renderer = new THREE.WebGLRenderer({
      canvas: sceneRef.current,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(mainCamera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.update();
    // Add heliocentric galaxy view
    const heliocentricGalaxyView = HeliocentricGalaxyView();
    solarScene.add(heliocentricGalaxyView);

    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(1, 2, 1);
    directional.castShadow = true;
    solarScene.add(directional);

    // Add planetary systems
    const earthSystem = EarthSystem();
    const marsSystem = MarsSystem();
    const solSystem = SolSystem();
    const venusSystem = VenusSystem();
    const mercurySystem = MercurySystem();
    const jupiterSystem = JupiterSystem();
    const saturnSystem = SaturnSystem();
    const uranusSystem = UranusSystem();
    const neptuneSystem = NeptuneSystem();

    const systems = [
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
    planetarySystemsRef.current = systems;

    // Register all system cameras
    systems.forEach((system) => {
      solarScene.add(system);
      if (system.userData.camera && system.userData.systemId) {
        systemCamerasRef.current.set(
          system.userData.systemId,
          system.userData.camera
        );
        // Setup controls for each system
        if (system.userData.setupControls) {
          system.userData.setupControls(renderer.domElement);
        }
      }
    });

    const switchToCamera = (systemId: string) => {
      const camera = systemCamerasRef.current.get(systemId);
      console.log("Setting up controls for EarthSystem, camera: ", camera);
      if (camera) {
        currentCameraRef.current = camera;
        // Don't use the main controls for system cameras
        // Each system should handle its own controls
      }
    };

    const switchToMainCamera = () => {
      currentCameraRef.current = mainCamera;
      controls.object = mainCamera;
      controls.update();
    };

    const handleDoubleClick = (event: MouseEvent) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, currentCameraRef.current!);

      // Check each planetary system
      for (const system of planetarySystemsRef.current) {
        const intersects = raycaster.intersectObjects(system.children, true);
        if (intersects.length > 0) {
          switchToCamera(system.userData.systemId);
          return;
        }
      }

      // No system clicked, switch to main camera
      switchToMainCamera();
    };

    renderer.domElement.addEventListener("dblclick", handleDoubleClick);

    const animate = () => {
      // Animate all systems
      planetarySystemsRef.current.forEach((system) => {
        if (system.userData.animate) {
          system.userData.animate();
        }
      });

      // Only update main controls if we're using the main camera
      if (currentCameraRef.current === mainCamera) {
        controls.update();
      }

      renderer.render(solarScene, currentCameraRef.current!);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.domElement.removeEventListener("dblclick", handleDoubleClick);
      cancelAnimationFrame(frameId);
      solarScene.remove(earthSystem);
      solarScene.remove(marsSystem);
      solarScene.remove(solSystem);
      solarScene.remove(heliocentricGalaxyView);
      renderer.dispose();
    };
  }, []);

  document.addEventListener("mousedown", () => {
    console.log(currentCameraRef.current);
  });

  return (
    <>
      <canvas ref={sceneRef} id="bg" />
    </>
  );
}

export default App;
