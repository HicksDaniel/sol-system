const scale = 1000;

const solConfig = {
  radius: 1000,
  orbitRadius: 0,
  texture: "solarimages/4k_sun.jpg",
  systemId: "solSystem",
  axialTilt: Math.PI * (0.00001 / 180),
  orbitalPeriod: 0,
  rotationalPeriod: 0,
};
const mercuryConfig = {
  radius: 0.383,
  orbitRadius: 4545,
  axialTilt: Math.PI * (0.01 / 180),
  texture: "solarimages/2k_mercury.jpg",
  sprite: {
    color: "transparent",
    borderColor: "blue",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPeriod: 88,
  rotationalPeriod: 58.65,
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
  orbitalPeriod: 224.7,
  rotationalPeriod: 243,
  systemId: "venusSystem",
};
const earthConfig = {
  radius: 1,
  orbitRadius: 11740,
  axialTilt: Math.PI * (23.4 / 180),
  texture: "solarimages/2k_earth_daymap.jpg",
  sprite: {
    color: "transparent",
    borderColor: "blue",
    opacity: 0.6,
    scaleFactor: scale,
  },
  systemId: "earthSystem",
  orbitalPeriod: 365.25,
  rotationalPeriod: 1,
};

const marsConfig = {
  radius: 0.53,
  orbitRadius: 17891,
  axialTilt: Math.PI * (25.2 / 180),
  texture: "solarimages/2k_mars.jpg",
  sprite: {
    color: "transparent",
    borderColor: "red",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPeriod: 687,
  rotationalPeriod: 1.03,
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
  orbitalPeriod: 4332.6,
  rotationalPeriod: 0.41,
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
  orbitalPeriod: 10759,
  rotationalPeriod: 0.72,
  systemId: "saturnSystem",
};

const uranusConfig = {
  radius: 4.01,
  orbitRadius: 118600,
  axialTilt: Math.PI * (97.77 / 180),
  texture: "solarimages/2k_uranus.jpg",
  sprite: {
    color: "transparent",
    borderColor: "lightblue",
    opacity: 0.6,
    scaleFactor: scale,
  },
  orbitalPeriod: 30687,
  rotationalPeriod: 1.0274,
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
  orbitalPeriod: 60190,
  rotationalPeriod: 0.67,
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
};
