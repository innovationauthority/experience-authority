import { getExperiences } from "@/lib/data";
import { toPassportExperience } from "@/lib/catalog-projections";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(getExperiences().map(toPassportExperience), {
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
