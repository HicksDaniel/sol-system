const moonConfig = {
  radius: 0.2727,
  orbitRadius: 30,
  eccentricity: 0.0549,
  texture: "solarimages/8k_moon.jpg",
  orbitalPeriod: 27.3,
  rotationPeriod: 27.3,
  systemId: "lunaSystem",
  ellipseRotation: Math.PI * 0.025,
};

const phobosConfig = {
  radius: 0.00174,
  orbitRadius: 0.735,
  eccentricity: 0.01,
  texture: "solarimages/8k_moon.jpg",
  sprite: {
    color: "grey",
    borderColor: "black",
    opacity: 0.3,
    scaleFactor: 50,
  },
  orbitalPeriod: 0.3191,
  rotationPeriod: 0.3191,
  systemId: "marsPhobosSystem",
  ellipseRotation: Math.PI * 0.025,
};

const deimosConfig = {
  radius: 0.00099,
  orbitRadius: 1.84,
  eccentricity: 0.00024,
  sprite: {
    color: "grey",
    borderColor: "black",
    opacity: 0.3,
    scaleFactor: 50,
  },
  texture: "solarimages/8k_moon.jpg",
  orbitalPeriod: 1.2624,
  rotationPeriod: 1.2624,
  systemId: "marsDeimosSystem",
  ellipseRotation: Math.PI * 0.025,
};

export { moonConfig, phobosConfig, deimosConfig };
