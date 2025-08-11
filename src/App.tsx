import "./App.css";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EarthSystem } from "./components/planetarysystems/earthsystem";
import { HeliocentricGalaxyView } from "./components/solarsystem/heliocentricgalaxyview";
import { MarsSystem } from "./components/planetarysystems/marssystem";
import { SolSystem } from "./components/solarsystem/solsystem";
import { useTimeManager } from "./libs/utils/timeManager";
import { VenusSystem } from "./components/planetarysystems/venussystem";
import { MercurySystem } from "./components/planetarysystems/mercurysystem";
import { JupiterSystem } from "./components/planetarysystems/jupitersystem";
import { SaturnSystem } from "./components/planetarysystems/saturnsystem";
import { UranusSystem } from "./components/planetarysystems/uranussystem";
import { NeptuneSystem } from "./components/planetarysystems/neptunesystem";
import { OrtCloudSystem } from "./components/solarsystem/ortcloudsystem";

function App() {
  const sceneRef = useRef<HTMLCanvasElement>(null);
  const currentCameraRef = useRef<THREE.Camera | null>(null);
  const systemCamerasRef = useRef<Map<string, THREE.Camera>>(new Map());
  const planetarySystemsRef = useRef<THREE.Group[]>([]);
  const [timeMultiplier, setTimeMultiplier] = useTimeManager();

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
    const ortCloudSystem = OrtCloudSystem();

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
      ortCloudSystem,
    ];
    planetarySystemsRef.current = systems;

    systems.forEach((system) => {
      solarScene.add(system);
      if (system.userData.camera && system.userData.systemId) {
        systemCamerasRef.current.set(
          system.userData.systemId,
          system.userData.camera
        );

        if (system.userData.setupControls) {
          system.userData.setupControls(renderer.domElement);
        }
      }
    });

    const switchToCamera = (systemId: string) => {
      const camera = systemCamerasRef.current.get(systemId);
      for (const system of systems) {
        console.log(
          camera?.position?.distanceTo(system?.userData?.mesh?.position) < 1000
            ? `In range of ${system.userData.systemId} system`
            : `Not in range of ${system.userData.systemId} system`
        );
      }
      if (camera) {
        currentCameraRef.current = camera;
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

      for (const system of planetarySystemsRef.current) {
        const intersects = raycaster.intersectObjects(system.children, true);
        if (intersects.length > 0) {
          switchToCamera(system.userData.systemId);
          return;
        }
      }

      switchToMainCamera();
    };

    renderer.domElement.addEventListener("dblclick", handleDoubleClick);

    const animate = () => {
      planetarySystemsRef.current.forEach((system) => {
        if (system.userData.animate) {
          system.userData.animate();
        }
      });

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
      solarScene.remove(venusSystem);
      solarScene.remove(mercurySystem);
      solarScene.remove(jupiterSystem);
      solarScene.remove(saturnSystem);
      solarScene.remove(uranusSystem);
      solarScene.remove(neptuneSystem);
      solarScene.remove(ortCloudSystem);
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
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000,
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <label
          htmlFor="speed-control"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Time Speed: {timeMultiplier}x
        </label>
        <select
          id="speed-control"
          value={timeMultiplier}
          onChange={(e) => setTimeMultiplier(Number(e.target.value))}
          style={{
            padding: "5px",
            fontSize: "14px",
            backgroundColor: "#333",
            color: "white",
            border: "1px solid #555",
            borderRadius: "4px",
          }}
        >
          <option value={0}>0x (Very Slow)</option>
          <option value={0.1}>1/10x (Very Slow)</option>
          <option value={0.25}>1/4x (Slow)</option>
          <option value={1}>1x (Normal)</option>
          <option value={10}>10x (Fast)</option>
          <option value={100}>100x (Very Fast)</option>
          <option value={1000}>1000x (Ultra Fast)</option>
        </select>
      </div>
    </>
  );
}

export default App;
