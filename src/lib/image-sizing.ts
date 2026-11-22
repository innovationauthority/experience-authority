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

/** The mobile cover crops to a 310px-high panel within the page margins. */
export function homeCoverPhotoSizes(src: string) {
  const size = (dimensions as Record<string, number[]>)[src];
  if (!size) return "(max-width: 700px) 700px, 1100px";
  const croppedWidth = Math.ceil(310 * (size[0] / size[1]));
  return `(max-width: 700px) max(calc(100vw - 40px), ${croppedWidth}px), 1100px`;
}
