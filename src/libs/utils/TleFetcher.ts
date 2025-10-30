import { useEffect, useState, useRef } from "react";
import * as satellite from "satellite.js";
import TleParser, { type TleData } from "./TleParser";

const CELESTRAK_BASE = "https://celestrak.org/NORAD/elements/gp.php";
const CORS_PROXY = "https://corsproxy.io/?";

interface SatEntry {
  name?: string;
  satrec: satellite.SatRec;
  lastPropogateTime: number;
  updateIntervalMs: number;
  position: { x: number; y: number; z: number };
}

export function useTleFetcher() {
  const satsRef = useRef<SatEntry[]>([]);

  const [tleData, setTleData] = useState<TleData[] | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const fetchStarLinkTles = async () => {
      try {
        const celestrakUrl = `${CELESTRAK_BASE}?GROUP=starlink&FORMAT=tle`;
        const url = `${CORS_PROXY}${encodeURIComponent(celestrakUrl)}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch TLEs: ${res.status}`);
        }
        const data = await res.text();
        const parsed = await TleParser(data);
        setTleData(parsed);
      } catch (err) {
        console.error("TLE fetch error:", err);
      }
    };
    fetchStarLinkTles();
  }, []);

  useEffect(() => {
    if (tleData === null) return;

    satsRef.current = tleData.map(({ name, line1, line2 }) => ({
      name,
      satrec: satellite.twoline2satrec(line1, line2),
      lastPropogateTime: 0,
      updateIntervalMs: 16.67,
      position: { x: 0, y: 0, z: 0 },
    }));

    const BATCH_SIZE = 250;
    let nextBatchStart = 0;
    let animationFrameId: number;

    const tick = () => {
      const now = Date.now();
      const sats = satsRef.current;
      const endIndex = Math.min(nextBatchStart + BATCH_SIZE, sats.length);

      for (let i = nextBatchStart; i < endIndex; i++) {
        const sat = sats[i];
        if (now - sat.lastPropogateTime > sat.updateIntervalMs) {
          const posVel = satellite.propagate(sat.satrec, new Date(now));

          // Update timestamp regardless of success to avoid infinite retries
          sat.lastPropogateTime = now;

          if (
            posVel &&
            posVel.position &&
            typeof posVel.position === "object"
          ) {
            const pos = posVel.position;
            if (pos.x && pos.y && pos.z) {
              sat.position.x = pos.x;
              sat.position.y = pos.y;
              sat.position.z = pos.z;
            }
          }
        }
      }

      // Move to next batch
      const wasLastBatch = endIndex >= sats.length;
      nextBatchStart = wasLastBatch ? 0 : endIndex;

      // Trigger re-render only after completing a full cycle through all satellites
      if (wasLastBatch) {
        setUpdateTrigger((prev) => prev + 1);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [tleData]);

  return { positions: satsRef, tleData, updateTrigger };
}
