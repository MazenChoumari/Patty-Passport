// Approximate placement of each destination around a stylized Mediterranean
// basin, in a 1000x560 viewBox. Not surveyed geography — a brand map, tuned
// so each region reads as a cluster in roughly the right compass direction.
export const MAP_POSITIONS: Record<string, { x: number; y: number }> = {
  // Iberian & Western Route
  spain: { x: 175, y: 235 },
  france: { x: 330, y: 150 },
  monaco: { x: 385, y: 178 },
  italy: { x: 455, y: 260 },
  malta: { x: 470, y: 350 },

  // Adriatic Route
  slovenia: { x: 495, y: 165 },
  croatia: { x: 525, y: 195 },
  bosnia: { x: 545, y: 222 },
  montenegro: { x: 562, y: 248 },
  albania: { x: 578, y: 275 },

  // Aegean Route
  greece: { x: 650, y: 235 },
  turkey: { x: 760, y: 195 },
  cyprus: { x: 800, y: 275 },

  // Levant Route
  syria: { x: 778, y: 305 },
  lebanon: { x: 758, y: 335 },
  palestine: { x: 742, y: 368 },

  // North African Route
  egypt: { x: 695, y: 425 },
  libya: { x: 555, y: 430 },
  tunisia: { x: 415, y: 425 },
  algeria: { x: 295, y: 445 },
  morocco: { x: 155, y: 420 },
};

export const REGION_ORDER = [
  "Iberian & Western Route",
  "Adriatic Route",
  "Aegean Route",
  "Levant Route",
  "North African Route",
] as const;

export const REGION_COLORS: Record<(typeof REGION_ORDER)[number], string> = {
  "Iberian & Western Route": "var(--color-brand-sky)",
  "Adriatic Route": "var(--color-brand-yellow)",
  "Aegean Route": "var(--color-brand-red)",
  "Levant Route": "var(--color-brand-yellow)",
  "North African Route": "var(--color-brand-sky)",
};

export const REGION_SHORT_LABEL: Record<(typeof REGION_ORDER)[number], string> = {
  "Iberian & Western Route": "Iberian & Western",
  "Adriatic Route": "Adriatic",
  "Aegean Route": "Aegean",
  "Levant Route": "Levant",
  "North African Route": "North African",
};
