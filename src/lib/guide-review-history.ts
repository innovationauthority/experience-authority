import type { GuideReview } from "./catalog";
/** Prior source reviews retained for historical eligibility checks, never a fallback for expired current evidence. */
export const guideReviewHistory: Record<string, GuideReview[]> = {
  "give-lunch-half-an-hour-of-listening": [
  {
    "basis": "public_sources",
    "scope": "public_programme",
    "requiresSpecialPermission": false,
    "checkedOn": "2026-09-25",
    "reviewBy": "2026-10-09",
    "accessUrl": "https://www.concertgebouw.nl/lunchconcerten",
    "sources": [
      {
        "title": "Concertgebouw: lunchtime concerts",
        "url": "https://www.concertgebouw.nl/lunchconcerten",
        "note": "Primary dated programme, performance versus rehearsal, ticket-release dates and duration."
      },
      {
        "title": "Concertgebouw: visitor questions",
        "url": "https://www.concertgebouw.nl/veelgestelde-vragen",
        "note": "Official route to current audience, accessibility, age, recording and ticket-charge policies. Individual event conditions still apply."
      }
    ]
  }
],

  "swim-a-sydney-harbour-length": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-17",
      "reviewBy": "2026-11-01",
      "accessUrl": "https://www.northsydney.nsw.gov.au/directory-record/1523/maccallum-pool",
      "sources": [
        {
          "title": "North Sydney Council: Maccallum Pool",
          "url": "https://www.northsydney.nsw.gov.au/directory-record/1523/maccallum-pool",
          "note": "Rechecked 17 October: currently open, with cleaning closures on 21 to 22 and 29 to 30 October. Gate notices remain authoritative."
        },
        {
          "title": "Destination NSW: Maccallum Pool",
          "url": "https://www.sydney.com/destinations/sydney/sydney-north/mosman/attractions/maccallum-pool",
          "note": "State tourism listing for the exact public pool and Cremorne Point setting."
        }
      ]
    }
  ],
  "make-room-for-a-cape-town-jazz-set": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-17",
      "reviewBy": "2026-11-01",
      "accessUrl": "https://theathletic.co.za/",
      "sources": [
        {
          "title": "Athletic Club & Social: official venue and music contact",
          "url": "https://theathletic.co.za/",
          "note": "Current venue, address, jazz contact and official ticket links. General opening-time blocks conflict."
        },
        {
          "title": "Cape Town Tourism: live jazz venues",
          "url": "https://www.capetown.travel/where-to-see-live-jazz-in-cape-town/",
          "note": "2026 city-tourism account of local jazz context and the venue's programme, with weekly confirmation required."
        },
        {
          "title": "GetOutIn: current Athletic Club event listing",
          "url": "https://www.getoutin.co.za/events/freed-friends-in-capetown",
          "note": "Local listing for 21 October 2026 corroborates current public music activity. Artist, admission and conflicting age shorthand still require direct operator confirmation."
        }
      ]
    }
  ]
};

export function firstVerifiedOn(guide: { slug: string; guideReview?: GuideReview }) {
 return [guide.guideReview?.checkedOn, ...(guideReviewHistory[guide.slug] || []).map(review => review.checkedOn)].filter((date): date is string => Boolean(date)).sort()[0];
}
