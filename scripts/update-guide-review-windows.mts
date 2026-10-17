import fs from "node:fs/promises";
import { publicGuides } from "../src/lib/public-guides";
import { guideMediaFor } from "../src/lib/media";

/** Mechanical smoke-test input. Unit tests require an exact match to the catalogue. */
const windows = Object.fromEntries(
  publicGuides.map((guide) => {
    const review = guide.guideReview;
    const media = guideMediaFor(guide.id);
    if (!review || !media) throw new Error(`Incomplete guide: ${guide.id}`);
    return [
      `/experiences/${guide.slug}`,
      {
        availableFrom: [review.checkedOn, media.visualReview.checkedOn]
          .sort()
          .at(-1),
        reviewBy: review.reviewBy,
        countrySlug: guide.countrySlug,
        regionSlug: guide.regionSlug,
      },
    ];
  }),
);
await fs.writeFile(
  new URL("./guide-review-windows.json", import.meta.url),
  JSON.stringify(windows, null, 2) + "\n",
);
console.log(`Updated ${Object.keys(windows).length} guide review windows`);
