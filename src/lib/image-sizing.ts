import dimensions from "./image-dimensions.json";

/** object-fit: cover scales landscape photographs by height in the tall guide hero. */
export function guidePhotoSizes(src: string) {
  const size = (dimensions as Record<string, number[]>)[src];
  if (!size) return "(max-width: 800px) 100vw, 54vw";
  const ratio = size[0] / size[1];
  const mobile = Math.min(size[0], Math.ceil(390 * ratio));
  const desktop = Math.min(size[0], 2048, Math.ceil(1000 * ratio));
  return `(max-width: 800px) max(100vw, ${mobile}px), max(54vw, ${desktop}px)`;
}
