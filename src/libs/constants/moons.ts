const moonConfig = {
  diameter: 0.2727,
  orbitRadius: 30,
  eccentricity: 0.0549,
  texture: "solarimages/8k_moon.jpg",
  sprite: {
    color: "transparent",
    borderColor: "grey",
    opacity: 0.3,
    scaleFactor: 50,
  },
  orbitalPath: {
    visible: true,
    color: "grey",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 27.3,
  rotationPeriod: 27.3,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (5.145 / 180),
  systemId: "lunaSystem",
};

const phobosConfig = {
  diameter: 0.00174,
  orbitRadius: 0.735,
  eccentricity: 0.01,
  texture: "solarimages/8k_moon.jpg",
  sprite: {
    color: "transparent",
    borderColor: "grey",
    opacity: 1,
    scaleFactor: 250,
  },
  orbitalPath: {
    visible: true,
    color: "grey",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 0.3191,
  rotationPeriod: 0.3191,
  systemId: "phobosSystem",
  orbitalInclination: Math.PI * (1.093 / 180),
  ellipseRotation: Math.PI * 0.025,
};

const deimosConfig = {
  diameter: 0.00099,
  orbitRadius: 1.84,
  eccentricity: 0.00024,
  sprite: {
    color: "transparent",
    borderColor: "grey",
    opacity: 1,
    scaleFactor: 250,
  },
  orbitalPath: {
    visible: true,
    color: "grey",
    opacity: 0.8,
    lineWidth: 2,
  },
  texture: "solarimages/8k_moon.jpg",
  orbitalPeriod: 1.2624,
  rotationPeriod: 1.2624,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (1.8 / 180),
  systemId: "deimosSystem",
};

export { moonConfig, phobosConfig, deimosConfig };
