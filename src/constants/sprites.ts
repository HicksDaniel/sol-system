import * as THREE from "three";

export default function createCircleSpriteTexture(
  size = 2048,
  fillColor = "white",
  borderColor = "black"
) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const r = size * 0.5;
  if (!ctx) {
    throw new Error("Failed to get 2D context for canvas");
  }
  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(r, r, r, 0, Math.PI * 2);
  ctx.closePath();

  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  if (borderColor) {
    ctx.lineWidth = size * 0.005;
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);

  // Make sure WebGL doesn't attempt to flip or premultiply alpha on upload
  texture.flipY = false;
  texture.premultiplyAlpha = false;
  texture.needsUpdate = true;

  return texture; // Return the configured texture, not a new one
}
