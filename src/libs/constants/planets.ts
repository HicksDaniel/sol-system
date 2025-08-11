const scale = 1000;

const ortCloudConfig = {
  radius: 999,
  orbitRadius: 0,
  texture: "solarimages/4k_sun.jpg",
  systemId: "solSystem",
  axialTilt: Math.PI * (0.00001 / 180),
  orbitalPeriod: 0,
  // sprite: {
  //   color: "transparent",
  //   borderColor: "lightgrey",
  //   opacity: 0.6,
  //   scaleFactor: scale * 0.774,
  // },
  rotationalPeriod: 0,
  orbitalInclination: 0,
};
const solConfig = {
  radius: 1000,
  orbitRadius: 0,
  texture: "solarimages/4k_sun.jpg",
  systemId: "solSystem",
  axialTilt: Math.PI * (0.00001 / 180),
  orbitalPeriod: 0,
  // sprite: {
  //   color: "transparent",
  //   borderColor: "lightgrey",
  //   opacity: 0.6,
  //   scaleFactor: scale * 23467,
  // },
  rotationalPeriod: 0,
  orbitalInclination: 0,
};
const mercuryConfig = {
  radius: 0.383,
  orbitRadius: 4545,
  axialTilt: Math.PI * (0.01 / 180),
  texture: "solarimages/2k_mercury.jpg",
  sprite: {
    color: "transparent",
    borderColor: "grey",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "grey",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 88,
  rotationalPeriod: 58.65,
  orbitalInclination: Math.PI * (7.0 / 180),
  systemId: "mercurySystem",
};

const venusConfig = {
  radius: 0.949,
  orbitRadius: 8476,
  axialTilt: Math.PI * (177.36 / 180),
  texture: "solarimages/2k_venus_atmosphere.jpg",
  sprite: {
    color: "transparent",
    borderColor: "yellow",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "yellow",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 224.7,
  rotationalPeriod: 243,
  orbitalInclination: Math.PI * (3.4 / 180),
  systemId: "venusSystem",
};
const earthConfig = {
  radius: 1,
  orbitRadius: 11740,
  axialTilt: Math.PI * (23.4 / 180),
  texture: "solarimages/2k_earth_daymap.jpg",
  sprite: {
    color: "transparent",
    borderColor: "#0088ff",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "#0088ff",
    opacity: 0.8,
    lineWidth: 2,
  },

  orbitalPeriod: 365.25,
  rotationalPeriod: 1,
  orbitalInclination: 0,
  systemId: "earthSystem",
};

const marsConfig = {
  radius: 0.53,
  orbitRadius: 17891,
  axialTilt: Math.PI * (25.2 / 180),
  texture: "solarimages/2k_mars.jpg",
  sprite: {
    color: "transparent",
    borderColor: "orange",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "orange",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 687,
  rotationalPeriod: 1.03,
  orbitalInclination: Math.PI * (1.85 / 180),
  systemId: "marsSystem",
};

const jupiterConfig = {
  radius: 11.209,
  orbitRadius: 47300,
  axialTilt: Math.PI * (3.13 / 180),
  texture: "solarimages/2k_jupiter.jpg",
  sprite: {
    color: "transparent",
    borderColor: "orange",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "orange",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 4332.6,
  rotationalPeriod: 0.41,
  orbitalInclination: Math.PI * (1.3 / 180),
  systemId: "jupiterSystem",
};

const saturnConfig = {
  radius: 9.45,
  orbitRadius: 77830,
  axialTilt: Math.PI * (26.73 / 180),
  texture: "solarimages/2k_saturn.jpg",
  sprite: {
    color: "transparent",
    borderColor: "blue",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "blue",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 10759,
  rotationalPeriod: 0.72,
  orbitalInclination: Math.PI * (2.5 / 180),
  systemId: "saturnSystem",
};

const uranusConfig = {
  radius: 4.01,
  orbitRadius: 118600,
  axialTilt: Math.PI * (97.77 / 180),
  texture: "solarimages/2k_uranus.jpg",
  sprite: {
    color: "transparent",
    borderColor: "green",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "green",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 30687,
  rotationalPeriod: 1.0274,
  orbitalInclination: Math.PI * (0.8 / 180),
  systemId: "uranusSystem",
};

const neptuneConfig = {
  radius: 3.88,
  orbitRadius: 142900,
  axialTilt: Math.PI * (28.32 / 180),
  texture: "solarimages/2k_neptune.jpg",
  sprite: {
    color: "transparent",
    borderColor: "blue",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPath: {
    visible: true,
    color: "blue",
    opacity: 0.8,
    lineWidth: 2,
  },
  orbitalPeriod: 60190,
  rotationalPeriod: 0.67,
  orbitalInclination: Math.PI * (1.8 / 180),
  systemId: "neptuneSystem",
};

export {
  earthConfig,
  venusConfig,
  mercuryConfig,
  marsConfig,
  solConfig,
  jupiterConfig,
  saturnConfig,
  uranusConfig,
  neptuneConfig,
  ortCloudConfig,
};
