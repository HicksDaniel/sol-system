export interface SatelliteGroup {
  id: string;
  name: string;
  url: string;
  proxyUrl: string;
  color: number;
  enabled: boolean;
  updateInterval: number;
}
const CELESTRAK_BASE = "https://celestrak.org/NORAD/elements/gp.php";
const CORS_PROXY = "https://corsproxy.io/?";

export const SATELLITE_GROUPS: SatelliteGroup[] = [
  {
    id: "starlink",
    name: "Starlink",
    url: `${CELESTRAK_BASE}?GROUP=starlink&FORMAT=tle`,
    proxyUrl: `${CORS_PROXY}${encodeURIComponent(
      `${CELESTRAK_BASE}?GROUP=starlink&FORMAT=tle`
    )}`,
    color: 0x00ff00,
    enabled: true,
    updateInterval: 33.33,
  },
  {
    id: "iridium",
    name: "Iridium",
    url: `${CELESTRAK_BASE}?GROUP=iridium&FORMAT=tle`,
    proxyUrl: `${CORS_PROXY}${encodeURIComponent(
      `${CELESTRAK_BASE}?GROUP=iridium&FORMAT=tle`
    )}`,
    color: 0xff0000,
    enabled: false,
    updateInterval: 33.33,
  },
  {
    id: "gps",
    name: "GPS",
    url: `${CELESTRAK_BASE}?GROUP=gps-ops&FORMAT=tle`,
    proxyUrl: `${CORS_PROXY}${encodeURIComponent(
      `${CELESTRAK_BASE}?GROUP=gps-ops&FORMAT=tle`
    )}`,
    color: 0x0088ff,
    enabled: false,
    updateInterval: 100,
  },
  {
    id: "iss",
    name: "Space Stations",
    url: `${CELESTRAK_BASE}?GROUP=stations&FORMAT=tle`,
    proxyUrl: `${CORS_PROXY}${encodeURIComponent(
      `${CELESTRAK_BASE}?GROUP=stations&FORMAT=tle`
    )}`,
    color: 0xffff00,
    enabled: false,
    updateInterval: 33.33,
  },
];
