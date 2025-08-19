export const solarDay = (Math.PI * 2) / 60;

export const timeSpeedLabels = [
  { value: 0, label: "Stop", description: "HammerTime" },
  { value: 0.000695, label: "1m", description: "Slowest" },
  { value: 0.04167, label: "1h", description: "Slower" },
  { value: 0.25, label: "4h", description: "Slow" },
  { value: 1, label: "1d", description: "Base Speed" },
  { value: 30, label: "month", description: "Fast" },
  { value: 365, label: "year", description: "Faster" },
  { value: 1825, label: "5 years", description: "Fastest" },
] as const;
