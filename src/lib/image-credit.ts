/** Formatting is shared without shipping the photograph rights ledger to clients. */
export function imageCreditText(media: {
  photographer: string;
  sourceUrl: string;
}) {
  const creator = media.photographer
    .replace(". Individual photographer not named", "")
    .replace(", publishing source", "");
  const publication = media.sourceUrl.includes("commons.wikimedia.org")
    ? "Wikimedia Commons"
    : media.sourceUrl.includes("unsplash.com")
      ? "Unsplash"
      : "";
  return publication ? `${creator} / ${publication}` : creator;
}
