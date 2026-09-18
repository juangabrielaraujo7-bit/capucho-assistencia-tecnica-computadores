import * as THREE from "three";

export interface PartTransform {
  position: [number, number, number];
  /** Euler rotation in radians. */
  rotation: [number, number, number];
}

export interface PartConfig {
  key: string;
  size: [number, number, number];
  radius: number;
  color: string;
  metalness: number;
  roughness: number;
  scattered: PartTransform;
  assembled: PartTransform;
  /** Internal components fade out as they reach the assembled pose (they'd be tucked inside the shell). */
  internal?: boolean;
}

const deg = THREE.MathUtils.degToRad;

const BODY_COLOR = "#24272d";
const ACCENT_COLOR = "#3d6bff";
const SCREW_COLOR = "#c9d3e0";

export const laptopParts: PartConfig[] = [
  {
    key: "base",
    size: [2.4, 0.14, 1.5],
    radius: 0.05,
    color: BODY_COLOR,
    metalness: 0.4,
    roughness: 0.4,
    scattered: { position: [1.7, -1.4, 0.6], rotation: [deg(15), deg(30), deg(8)] },
    assembled: { position: [0, 0, 0], rotation: [0, 0, 0] },
  },
  {
    key: "lid",
    size: [2.28, 0.08, 1.46],
    radius: 0.03,
    color: BODY_COLOR,
    metalness: 0.4,
    roughness: 0.4,
    scattered: { position: [-1.9, 1.3, -0.8], rotation: [deg(-40), deg(-25), deg(-10)] },
    assembled: { position: [0, 0.73, -0.68], rotation: [deg(-98), 0, 0] },
  },
  {
    key: "battery",
    size: [1.5, 0.09, 0.9],
    radius: 0.035,
    color: "#14161a",
    metalness: 0.2,
    roughness: 0.6,
    scattered: { position: [1.6, 1.1, 1.4], rotation: [deg(20), deg(50), 0] },
    assembled: { position: [0, 0.01, 0.25], rotation: [0, 0, 0] },
    internal: true,
  },
  {
    key: "ram",
    size: [0.62, 0.05, 0.14],
    radius: 0.018,
    color: ACCENT_COLOR,
    metalness: 0.3,
    roughness: 0.35,
    scattered: { position: [-1.8, -1.1, 1.5], rotation: [deg(-20), deg(60), deg(30)] },
    assembled: { position: [0.55, 0.02, -0.35], rotation: [0, 0, 0] },
    internal: true,
  },
  {
    key: "ssd",
    size: [0.46, 0.035, 0.26],
    radius: 0.012,
    color: ACCENT_COLOR,
    metalness: 0.3,
    roughness: 0.35,
    scattered: { position: [2.0, 0.2, -1.4], rotation: [deg(35), deg(-40), 0] },
    assembled: { position: [0.75, 0.015, 0.3], rotation: [0, 0, 0] },
    internal: true,
  },
  {
    key: "cooler",
    size: [0.42, 0.09, 0.42],
    radius: 0.035,
    color: "#1c1e22",
    metalness: 0.5,
    roughness: 0.4,
    scattered: { position: [-1.5, -1.3, -1.5], rotation: [deg(40), deg(20), deg(-30)] },
    assembled: { position: [-0.65, 0.01, -0.35], rotation: [0, 0, 0] },
    internal: true,
  },
  {
    key: "screw-1",
    size: [0.07, 0.05, 0.07],
    radius: 0.016,
    color: SCREW_COLOR,
    metalness: 0.7,
    roughness: 0.3,
    scattered: { position: [-2.2, 1.6, 1.2], rotation: [deg(60), deg(10), 0] },
    assembled: { position: [-1.08, 0.08, 0.65], rotation: [0, 0, 0] },
  },
  {
    key: "screw-2",
    size: [0.07, 0.05, 0.07],
    radius: 0.016,
    color: SCREW_COLOR,
    metalness: 0.7,
    roughness: 0.3,
    scattered: { position: [2.3, -0.4, 1.7], rotation: [deg(-30), deg(80), 0] },
    assembled: { position: [1.08, 0.08, 0.65], rotation: [0, 0, 0] },
  },
  {
    key: "screw-3",
    size: [0.07, 0.05, 0.07],
    radius: 0.016,
    color: SCREW_COLOR,
    metalness: 0.7,
    roughness: 0.3,
    scattered: { position: [-2.0, -1.6, -1.0], rotation: [deg(10), deg(-60), deg(20)] },
    assembled: { position: [-1.08, 0.08, -0.65], rotation: [0, 0, 0] },
  },
  {
    key: "screw-4",
    size: [0.07, 0.05, 0.07],
    radius: 0.016,
    color: SCREW_COLOR,
    metalness: 0.7,
    roughness: 0.3,
    scattered: { position: [2.1, 1.5, -1.3], rotation: [deg(-50), deg(-15), 0] },
    assembled: { position: [1.08, 0.08, -0.65], rotation: [0, 0, 0] },
  },
];
