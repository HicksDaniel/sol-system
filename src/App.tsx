import { useEffect, useRef, useState } from "react";
import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useTleFetcher } from "./libs/utils/TleFetcher";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const satInstancedRef = useRef<THREE.InstancedMesh | null>(null);

  const { positions, updateTrigger } = useTleFetcher();

  const globalRadius = 1;
  const earthRadiusKm = 6371;

  // Setup scene once
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const controls = new OrbitControls(camera, canvasRef.current);
    const light = new THREE.AmbientLight(0x404040, 40);
    scene.add(light);

    // Earth
    const loader = new THREE.TextureLoader();
    const texture = loader.load("solarimages/8k_earth_daymap.jpg");
    const earthGeometry = new THREE.SphereGeometry(globalRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: texture });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Create instanced mesh for satellites
    const satGeometry = new THREE.IcosahedronGeometry(0.005, 1); // Bigger
    const satMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 1.0,
      wireframe: true,
    });
    const maxSatellites = 10000;
    const instancedMesh = new THREE.InstancedMesh(
      satGeometry,
      satMaterial,
      maxSatellites
    );
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(instancedMesh);
    satInstancedRef.current = instancedMesh;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, []); // Only run once

  // Update satellite positions when data changes
  useEffect(() => {
    const instancedMesh = satInstancedRef.current;

    const dummy = new THREE.Object3D();
    let validPositions = 0;

    positions.current.forEach((data, i) => {
      const pos = data.position;

      if (
        !pos ||
        typeof pos.x !== "number" ||
        typeof pos.y !== "number" ||
        typeof pos.z !== "number"
      ) {
        console.warn(`Invalid position for satellite ${i}:`, pos);
        return;
      }

      validPositions++;

      const scale = globalRadius / earthRadiusKm;
      const scaledX = pos.x * scale;
      const scaledY = pos.z * scale;
      const scaledZ = -pos.y * scale;

      dummy.position.set(scaledX, scaledY, scaledZ);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    });

    instancedMesh.count = validPositions;
    instancedMesh.instanceMatrix.needsUpdate = true;
  }, [updateTrigger, positions, globalRadius, earthRadiusKm]);

  return (
    <div className="App">
      <canvas ref={canvasRef} />
    </div>
  );
}
