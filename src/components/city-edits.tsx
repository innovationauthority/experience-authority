import { CityEditPicker } from "./city-edit-picker";
import type { resolveCityEdits } from "@/lib/city-edits";
import { guideMediaFor, imageCreditText } from "@/lib/media";
export function CityEdits({
  edits,
}: {
  edits: ReturnType<typeof resolveCityEdits>;
}) {
  const views = edits.flatMap((edit) => {
    const stops = edit.stops.flatMap(({ item, role, note }) => {
      const media = guideMediaFor(item.id);
      return media
        ? [
            {
              slug: item.slug,
              title: item.title,
              role,
              note,
              photo: {
                src: media.src,
                alt: media.alt,
                credit: imageCreditText(media),
                sourceUrl: media.sourceUrl,
              },
            },
          ]
        : [];
    });
    return stops.length === edit.stops.length
      ? [
          {
            slug: edit.slug,
            name: edit.name,
            title: edit.title,
            intro: edit.intro,
            stops,
          },
        ]
      : [];
  });
  return <CityEditPicker edits={views} />;
}
