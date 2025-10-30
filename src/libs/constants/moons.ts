const moonConfig = {
  diameter: 0.2727,
  orbitRadius: 30,
  eccentricity: 0.0549,
  texture: "solarimages/2k_mercury.jpg",
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

  orbitalInclination: Math.PI * (5.145 / 180),
  systemId: "lunaSystem",
};

const phobosConfig = {
  diameter: 0.100174,
  orbitRadius: 0.735,
  eccentricity: 0.01,
  texture: "solarimages/2k_mercury.jpg",
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
  texture: "solarimages/2k_mercury.jpg",
  orbitalPeriod: 1.2624,
  rotationPeriod: 1.2624,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (1.8 / 180),
  systemId: "deimosSystem",
};

const ioConfig = {
  diameter: 0.2859,
  orbitRadius: 33.1,
  eccentricity: 0.0041,
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
  texture: "solarimages/2k_mercury.jpg",
  orbitalPeriod: 1.769,
  rotationPeriod: 1.769,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (0.05 / 180),
  systemId: "ioSystem",
};

const europaConfig = {
  diameter: 0.245,
  orbitRadius: 52.7,
  eccentricity: 0.009,
  texture: "solarimages/2k_mercury.jpg",
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
  orbitalPeriod: 3.551,
  rotationPeriod: 3.551,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (0.47 / 180),
  systemId: "europaSystem",
};

const ganymedeConfig = {
  diameter: 0.4134,
  orbitRadius: 84.0,
  eccentricity: 0.0013,
  texture: "solarimages/2k_mercury.jpg",
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
  orbitalPeriod: 7.155,
  rotationPeriod: 7.155,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (0.2 / 180),
  systemId: "ganymedeSystem",
};

const callistoConfig = {
  diameter: 0.3784,
  orbitRadius: 147.8,
  eccentricity: 0.0074,
  texture: "solarimages/2k_mercury.jpg",
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
  orbitalPeriod: 16.689,
  rotationPeriod: 16.689,
  ellipseRotation: Math.PI * 0.025,
  orbitalInclination: Math.PI * (0.192 / 180),
  systemId: "callistoSystem",
};

export {
  moonConfig,
  phobosConfig,
  deimosConfig,
  ioConfig,
  europaConfig,
  ganymedeConfig,
  callistoConfig,
};
