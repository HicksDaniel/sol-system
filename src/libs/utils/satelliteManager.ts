import React from "react";
import { useEffect, useState, useRef } from "react";
import * as satellite from "satellite.js";
import TleParser, { type TleData } from "./TleParser";
import { SATELLITE_GROUPS } from "../constants/satellites";

export default function useSatelliteManager() {
  const [enabledGroups, setEnabledGroups] = useState([]);
  return <div>useSatelliteManager</div>;
}
