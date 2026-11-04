import type { GuideReview } from "./catalog";
/** Prior source reviews retained for historical eligibility checks, never a fallback for expired current evidence. */
export const guideReviewHistory: Record<string, GuideReview[]> = {
  "give-amsterdam-a-seat-beside-the-jazz-stage": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-21",
      "reviewBy": "2026-11-04",
      "accessUrl": "https://www.bimhuis.nl/en/calendar",
      "sources": [
        {
          "title": "BIMHUIS: live calendar",
          "url": "https://www.bimhuis.nl/en/calendar",
          "note": "Current October and November 2026 concerts, individual ticket routes and the separate café jam."
        },
        {
          "title": "BIMHUIS: frequently asked questions",
          "url": "https://www.bimhuis.nl/en/plan-your-visit/faq/",
          "note": "Cashless payments, event ticketing and café access, with event-specific checks still needed."
        },
        {
          "title": "BIMHUIS: accessibility",
          "url": "https://www.bimhuis.nl/en/plan-your-visit/accessibility/",
          "note": "Official route, seating and assistance arrangements rather than assumed universal access."
        }
      ]
    }
  ],
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
  ],
  "let-an-archive-film-interrupt-a-dublin-lunchtime": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-21",
      "reviewBy": "2026-10-27",
      "accessUrl": "https://ifi.ie/irish-film-directory/archive-at-lunchtime",
      "sources": [
        {
          "title": "IFI: Archive at Lunchtime",
          "url": "https://ifi.ie/irish-film-directory/archive-at-lunchtime",
          "note": "Standing series, thematic programmes, free box-office tickets and possible online booking charge."
        },
        {
          "title": "IFI: October 2026 Archive at Lunchtime Programme 2",
          "url": "https://ifi.ie/films/archive-at-lunchtime-october-2026-programme-2",
          "note": "Actual 21 and 26 October sessions at different times, with a twenty-six-minute duration. Not a guarantee of next month's programme."
        },
        {
          "title": "IFI: accessible cinema",
          "url": "https://ifi.ie/about-ifi/accessible-cinema",
          "note": "Official access and booking information, distinct from a guarantee that every session has every access format."
        }
      ]
    }
  ],
  "watch-mexicos-regional-dances-share-one-stage": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-20",
      "reviewBy": "2026-10-31",
      "accessUrl": "https://inba.gob.mx/actividad/18495/ballet-folklorico-de-mexico-de-amalia-hernandez",
      "sources": [
        {
          "title": "INBAL: Ballet Folklórico October programme",
          "url": "https://inba.gob.mx/actividad/18495/ballet-folklorico-de-mexico-de-amalia-hernandez",
          "note": "Current Bellas Artes dates including 21, 25 and 28 October, with programme-change notice."
        },
        {
          "title": "Ticketmaster México: dated October performances",
          "url": "https://www.ticketmaster.com.mx/ballet-folklorico-de-mexico-de-amalia-boletos/artist/803500?endDate=2026-10-31&startDate=2026-10-01",
          "note": "Independent ticketing corroboration of the institution's dates and separate venues. No purchase or seat hold."
        },
        {
          "title": "Ballet Folklórico de México: official company",
          "url": "https://balletfolkloricodemexico.com.mx/",
          "note": "Company context only. Its older presentation page is not evidence of a current performance."
        }
      ]
    }
  ],
  "follow-the-hands-conducting-buenos-aires": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-20",
      "reviewBy": "2026-11-03",
      "accessUrl": "https://www.labombadetiempo.com/",
      "sources": [
        {
          "title": "La Bomba de Tiempo: current dates",
          "url": "https://www.labombadetiempo.com/",
          "note": "26 October 2026 Lunes Bomba listed as forthcoming, with adult admission distinguished from overseas dates."
        },
        {
          "title": "La Bomba de Tiempo: Lunes Bomba",
          "url": "https://www.labombadetiempo.com/lunes-bomba/",
          "note": "Venue, seasonal spaces and public ticket route, not a traditional ceremony or musical training."
        },
        {
          "title": "Tickets Konex: La Bomba de Tiempo",
          "url": "https://entradas.cckonex.org/event/la-bomba-de-tiempo-2026",
          "note": "Official event conditions and age restrictions read. Embedded error and anti-abuse messages do not establish a completed booking or remaining seats."
        }
      ]
    }
  ],
  "read-athens-through-a-building-and-its-park": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-17",
      "reviewBy": "2026-10-30",
      "accessUrl": "https://www.ticketservices.gr/event/snfcc-guided-tours/?lang=en",
      "sources": [
        {
          "title": "SNFCC: authorised 2026 guided-tour booking",
          "url": "https://www.ticketservices.gr/event/snfcc-guided-tours/?lang=en",
          "note": "Current paid format, October dates, languages, route, advance booking and space restrictions."
        },
        {
          "title": "SNFCC: official cultural centre",
          "url": "https://www.snfcc.org/",
          "note": "Institutional identity, facilities and current visitor information, not independent sustainability validation."
        }
      ]
    }
  ],
  "hear-the-song-behind-a-familiar-naples-refrain": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-17",
      "reviewBy": "2026-10-31",
      "accessUrl": "https://www.napulitanata.com/it/spettacolo/",
      "sources": [
        {
          "title": "Napulitanata: the concert format",
          "url": "https://www.napulitanata.com/it/spettacolo/",
          "note": "Voice and instruments, repertoire and approximate one-hour format."
        },
        {
          "title": "Napulitanata: current reservations",
          "url": "https://www.napulitanata.com/it/prenotazioni/",
          "note": "Future October 2026 dates, sold-out notices and compulsory public registration and booking."
        }
      ]
    }
  ],
  "ride-new-yorks-island-without-the-traffic": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-14",
      "reviewBy": "2026-10-31",
      "accessUrl": "https://www.govisland.com/things-to-do/recreation/citi-bike",
      "sources": [
        {
          "title": "Governors Island: cycling and Citi Bike",
          "url": "https://www.govisland.com/things-to-do/recreation/citi-bike",
          "note": "Seven-mile public cycling network, bicycle docks and separately operated rental options."
        },
        {
          "title": "Governors Island: current visitor information",
          "url": "https://www.govisland.com/plan-your-visit",
          "note": "Fall hours, ferry season, accessibility and current Fort Jay and kayak-dock limitations."
        }
      ]
    }
  ],
  "give-dublin-a-glasshouse-paced-morning": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-14",
      "reviewBy": "2026-10-31",
      "accessUrl": "https://heritageireland.ie/visit/places-to-visit/national-botanic-garden/",
      "sources": [
        {
          "title": "Heritage Ireland: National Botanic Gardens",
          "url": "https://heritageireland.ie/visit/places-to-visit/national-botanic-garden/",
          "note": "OPW public access, glasshouses, seasonal hours and visitor restrictions."
        },
        {
          "title": "Heritage Ireland: conservation and research",
          "url": "https://heritageireland.ie/learn/conservation-research/what-we-do/",
          "note": "OPW collection and conservation context, not a guarantee about a particular glasshouse's opening."
        }
      ]
    }
  ],
  "taste-york-before-decorating-the-chocolate": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-07",
      "reviewBy": "2026-10-20",
      "accessUrl": "https://www.yorkschocolatestory.com/whats-on/classic-guided-tour/",
      "sources": [
        {
          "title": "York's Chocolate Story: Classic Guided Tour",
          "url": "https://www.yorkschocolatestory.com/whats-on/classic-guided-tour/",
          "note": "2026 programme, duration, included activity and September to October refurbishment notice."
        },
        {
          "title": "Visit York: York's Chocolate Story",
          "url": "https://visityork.org/business-directory/yorks-chocolate-story",
          "note": "Official city tourism listing and visitor context, not an independent tasting review."
        }
      ]
    }
  ],
  "follow-amsterdams-winter-ice-loop": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-07",
      "reviewBy": "2026-10-18",
      "accessUrl": "https://www.jaapeden.nl/praktische-informatie/openingstijden/",
      "sources": [
        {
          "title": "Jaap Eden: season and public opening times",
          "url": "https://www.jaapeden.nl/praktische-informatie/openingstijden/",
          "note": "2026 to 2027 outdoor season, public-session interruptions and web-shop timetable."
        },
        {
          "title": "Jaap Eden: rink rules",
          "url": "https://www.jaapeden.nl/praktische-informatie/huisregels/",
          "note": "Mandatory gloves, recommended helmet, lane etiquette and direction changes."
        },
        {
          "title": "Jaap Eden: frequently asked questions",
          "url": "https://www.jaapeden.nl/praktische-informatie/veelgesteldevragen/",
          "note": "Rental provider and practical distinctions between public skating and lessons."
        }
      ]
    }
  ],
  "follow-the-forest-water-to-balcoes": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-27",
      "reviewBy": "2026-10-15",
      "accessUrl": "https://www.visitmadeira.com/en/what-to-do/nature-seekers/activities/hiking/pr-11-vereda-dos-balcoes/",
      "sources": [
        {
          "title": "Visit Madeira: PR11 Vereda dos Balcões",
          "url": "https://www.visitmadeira.com/en/what-to-do/nature-seekers/activities/hiking/pr-11-vereda-dos-balcoes/",
          "note": "Official route, distance, current status, difficulty and visitor fee."
        },
        {
          "title": "SIMplifica Madeira",
          "url": "https://simplifica.madeira.gov.pt/",
          "note": "Regional public portal for current trail access and payment rules."
        }
      ]
    }
  ],
  "read-seville-from-paddle-height": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-27",
      "reviewBy": "2026-10-20",
      "accessUrl": "https://kayaksevilla.com/",
      "sources": [
        {
          "title": "Kayak Sevilla: guided city tour",
          "url": "https://kayaksevilla.com/",
          "note": "Current tour types, kayak option, booking sequence, equipment and language statement."
        },
        {
          "title": "Kayak Sevilla: contact and launch",
          "url": "https://kayaksevilla.com/contacto/",
          "note": "Current launch area and direct contact route for confirming the booked duration."
        }
      ]
    }
  ],
  "watch-valencia-settle-water-in-public": [
    {
      "basis": "public_sources",
      "scope": "public_observation",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-27",
      "reviewBy": "2026-10-20",
      "accessUrl": "https://tribunaldelasaguas.org/visitas-al-tribunal/",
      "sources": [
        {
          "title": "Tribunal de les Aigües: public visits",
          "url": "https://tribunaldelasaguas.org/visitas-al-tribunal/",
          "note": "Public observation rules, normal time, place and holiday exception."
        },
        {
          "title": "UNESCO: Irrigators' tribunals",
          "url": "https://ich.unesco.org/en/RL/irrigators-tribunals-of-the-spanish-mediterranean-coast-the-council-of-wise-men-of-the-plain-of-murcia-and-the-water-tribunal-of-the-plain-of-valencia-00171",
          "note": "Independent heritage context for the continuing water courts."
        }
      ]
    }
  ],
  "leave-space-for-a-free-concourse-set": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-27",
      "reviewBy": "2026-10-07",
      "accessUrl": "https://www.esplanade.com/whats-on",
      "sources": [
        {
          "title": "Esplanade: What's On",
          "url": "https://www.esplanade.com/whats-on",
          "note": "Changing current calendar and free-performance discovery route."
        },
        {
          "title": "Esplanade: KotoKottoN",
          "url": "https://www.esplanade.com/whats-on/festivals-and-series/crossing-borders/2026/kotokotton",
          "note": "Dated example of free Concourse set, with time and duration. Recheck after the event."
        }
      ]
    }
  ],
  "paddle-below-waterlands-low-bridges": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-25",
      "accessUrl": "https://www.wetlandssafari.nl/nl/english/2025-2/",
      "sources": [
        {
          "title": "Wetlands Safari: Fresh Air canoe tour",
          "url": "https://www.wetlandssafari.nl/nl/english/2025-2/",
          "note": "Current two-hour programme, Watergang meeting address, age and departure pattern."
        },
        {
          "title": "Wetlands Safari: questions and requirements",
          "url": "https://www.wetlandssafari.nl/nl/english/tourinformatie/faq/",
          "note": "Fitness, low bridges, weather and the distinction between guided tours and independent hire."
        }
      ]
    }
  ],
  "join-vancouvers-edges-by-bicycle": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-25",
      "accessUrl": "https://cyclevancouver.com/bike-tours/the-grand-tour/",
      "sources": [
        {
          "title": "Cycle City: Vancouver Grand Tour",
          "url": "https://cyclevancouver.com/bike-tours/the-grand-tour/",
          "note": "Specific public tour, route, duration, distance, equipment and meeting instructions."
        },
        {
          "title": "Cycle City: visitor questions",
          "url": "https://cyclevancouver.com/about/faqs/",
          "note": "Advance booking, weather, bike fit and distinction between tour and rental addresses."
        }
      ]
    }
  ],
  "see-table-mountain-from-a-kayak": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-25",
      "accessUrl": "https://kayakadventures.capetown/cape-town-kayaking",
      "sources": [
        {
          "title": "Kayak Adventures: Cape Town kayaking",
          "url": "https://kayakadventures.capetown/cape-town-kayaking",
          "note": "Cape Town programme, duration, launch and exact meeting instructions."
        },
        {
          "title": "Kayak Adventures: participation questions",
          "url": "https://kayakadventures.capetown/faqs",
          "note": "Age, weight, equipment and weather boundaries. Promotional safety language is not adopted as an EA assessment."
        }
      ]
    }
  ],
  "let-oslos-waterline-set-a-slower-pace": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-25",
      "accessUrl": "https://koknorge.no/en/sauna-experiences/shared-sauna/",
      "sources": [
        {
          "title": "KOK: shared sauna",
          "url": "https://koknorge.no/en/sauna-experiences/shared-sauna/",
          "note": "Individual shared-session access, duration, locations and distinction from a cruise."
        },
        {
          "title": "KOK: questions and answers",
          "url": "https://koknorge.no/en/questions-and-answers-2/",
          "note": "Supervision, equipment, changing, weather and conduct conditions. Health claims are not adopted."
        }
      ]
    }
  ],
  "let-the-caller-bring-you-into-the-dance": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-25",
      "accessUrl": "https://www.sloansglasgow.co.uk/ceilidh",
      "sources": [
        {
          "title": "Sloans: Friday Night Ceilidh",
          "url": "https://www.sloansglasgow.co.uk/ceilidh",
          "note": "Public Friday format, live band, instruction, minimum age and ticket options."
        },
        {
          "title": "Sloans: ceilidh tickets",
          "url": "https://www.sloansglasgow.co.uk/book-ceilidh-tickets",
          "note": "Current booking route, 8.30pm start, venue address and card-only policy."
        }
      ]
    }
  ],
  "begin-kabuki-with-a-single-act": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-25",
      "reviewBy": "2026-10-09",
      "accessUrl": "https://www.kabukiweb.net/about/ticket/single-act-tickets/",
      "sources": [
        {
          "title": "Kabukiweb: single-act tickets",
          "url": "https://www.kabukiweb.net/about/ticket/single-act-tickets/",
          "note": "Primary explanation of the single-act system and links to current monthly notices."
        },
        {
          "title": "Shochiku: single-act ticket service",
          "url": "https://www.e-tix.jp/shochiku_makumi/en/",
          "note": "Ticket-release timing, dedicated seating, monthly conditions and caption-device limits."
        },
        {
          "title": "Kabukiweb: Kabukiza",
          "url": "https://www.kabukiweb.net/theatres/kabukiza/",
          "note": "Theatre location and programme context, not a guarantee of any particular act."
        }
      ]
    }
  ],
  "shape-a-cup-without-a-wheel": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-24",
      "accessUrl": "https://www.puraceramica.pt/en/whats-on.html",
      "sources": [
        {
          "title": "PURACERÂMICA: current workshop calendar",
          "url": "https://www.puraceramica.pt/en/whats-on.html",
          "note": "Live dated handbuilding sessions. Takes precedence over older dates on the course description."
        },
        {
          "title": "PURACERÂMICA: handbuilding",
          "url": "https://www.puraceramica.pt/en/handbuilding-workshop.html",
          "note": "Technique, English, age, duration, group size, included firing and collection delay."
        }
      ]
    }
  ],
  "learn-to-read-the-water-before-standing": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-08",
      "accessUrl": "https://manlysurfschool.com/lessons/adult-group-lesson/",
      "sources": [
        {
          "title": "Manly Surf School: adult group lessons",
          "url": "https://manlysurfschool.com/lessons/adult-group-lesson/",
          "note": "Duration, equipment, age boundary, tides and session distinctions."
        },
        {
          "title": "Manly Surf School: current booking notice",
          "url": "https://manlysurfschool.com/",
          "note": "Temporary phone/email booking instruction takes precedence over older embedded online-booking text."
        }
      ]
    }
  ],
  "ride-between-buenos-aires-city-stories": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-24",
      "accessUrl": "https://buenosairesbiketours.com/book-now/",
      "sources": [
        {
          "title": "BA Bikes: South Circuit booking",
          "url": "https://buenosairesbiketours.com/book-now/",
          "note": "Current tour, neighbourhood route, departure and duration."
        },
        {
          "title": "BA Bikes: practical questions",
          "url": "https://buenosairesbiketours.com/faqs/",
          "note": "Reservation, language, equipment and weather information. Published meeting addresses conflict, so confirmation is necessary."
        }
      ]
    }
  ],
  "swim-a-london-length-under-open-sky": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-24",
      "accessUrl": "https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/where-to-go-at-hampstead-heath/parliament-hill-lido",
      "sources": [
        {
          "title": "City of London: Parliament Hill Lido",
          "url": "https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/where-to-go-at-hampstead-heath/parliament-hill-lido",
          "note": "Responsible operator's live session, temperature, safety, payment and access information."
        },
        {
          "title": "Parliament Hill Lido Users' Group",
          "url": "https://parliamenthilllido.org/",
          "note": "Community context. Operator notices take precedence for all practical decisions."
        }
      ]
    }
  ],
  "watch-a-story-travel-through-a-gesture": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-24",
      "accessUrl": "https://salachalermkrung.com/?c=news&cid=90&m=detail",
      "sources": [
        {
          "title": "Sala Chalermkrung: visitor performance",
          "url": "https://salachalermkrung.com/?c=news&cid=90&m=detail",
          "note": "Thai and English descriptions, mixed programme, performance times, subtitles and ticket entitlement."
        },
        {
          "title": "The Grand Palace: official visitor programme",
          "url": "https://www.royalgrandpalace.th/en/home",
          "note": "Official connection to the khon performance offer. Confirm validity before relying on inclusion."
        }
      ]
    }
  ],
  "hear-the-band-without-a-screen-between-you": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-24",
      "reviewBy": "2026-10-24",
      "accessUrl": "https://www.preservationhall.com/calendar/",
      "sources": [
        {
          "title": "Preservation Hall: live calendar",
          "url": "https://www.preservationhall.com/calendar/",
          "note": "Current dates, ensembles and direct ticket availability."
        },
        {
          "title": "Preservation Hall: visitor questions",
          "url": "https://www.preservationhall.com/faq/",
          "note": "Duration, current check-in, age, recording and ticket rules."
        }
      ]
    }
  ],
  "give-helsinki-time-between-the-heat": [
    {
      "basis": "public_sources",
      "scope": "public_admission",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-23",
      "reviewBy": "2026-10-03",
      "accessUrl": "https://www.loylyhelsinki.fi/en/public-sauna",
      "sources": [
        {
          "title": "Löyly: public sauna",
          "url": "https://www.loylyhelsinki.fi/en/public-sauna",
          "note": "Primary session duration, mixed-sauna swimwear, age accompaniment, equipment and reservation route."
        },
        {
          "title": "Löyly: information",
          "url": "https://www.loylyhelsinki.fi/en/info",
          "note": "Current practical information, including the announced 4 to 7 October closure and 8 October reopening."
        },
        {
          "title": "MyHelsinki: Löyly",
          "url": "https://www.myhelsinki.fi/fi/places/loyly-2/",
          "note": "Official city context for the shoreline sauna and architecture. Not a replacement for current operator notices."
        }
      ]
    }
  ],
  "follow-the-festa-through-the-streets": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-09-12",
      "reviewBy": "2026-10-04",
      "accessUrl": "https://www.visitmalta.com/en/events-in-malta-and-gozo/",
      "sources": [
        {
          "title": "Visit Malta: events in Malta and Gozo",
          "url": "https://www.visitmalta.com/en/events-in-malta-and-gozo/",
          "note": "Official destination calendar with current public village-feast listings. Each event page and local programme should be rechecked before travel."
        },
        {
          "title": "Archdiocese of Malta: feasts in Malta and Gozo in 2026",
          "url": "https://church.mt/feasts-in-malta-and-gozo-in-2026/",
          "note": "Current dated parish feast calendar for Malta and Gozo, useful for selecting one place and confirming the religious context."
        },
        {
          "title": "UNESCO: Maltese village festa",
          "url": "https://ich.unesco.org/en/RL/maltese-village-festa-an-annual-community-celebration-01871",
          "note": "Cultural context for the annual community practice, preparation, procession, bands, fireworks and food. It is not a live access calendar."
        }
      ]
    }
  ],
  "let-edinburgh-tell-you-a-story-out-loud": [
    {
      "basis": "public_sources",
      "scope": "public_programme",
      "requiresSpecialPermission": false,
      "checkedOn": "2026-10-20",
      "reviewBy": "2026-10-31",
      "accessUrl": "https://www.sisf.org.uk/news-post/newsid/27174-scottish-international-storytelling-festival-2026-tickets-on-sale/",
      "sources": [
        {
          "title": "SISF: 2026 tickets and festival announcement",
          "url": "https://www.sisf.org.uk/news-post/newsid/27174-scottish-international-storytelling-festival-2026-tickets-on-sale/",
          "note": "21 to 31 October 2026 dates and Bird and Beast theme."
        },
        {
          "title": "Scottish Storytelling Centre: current programme",
          "url": "https://www.scottishstorytellingcentre.com/",
          "note": "Current event links including Mossycoat on 23 October."
        },
        {
          "title": "SISF: official ticket programme",
          "url": "https://sisf.online.red61.co.uk/",
          "note": "Event-specific booking, age, language and time information. No ticket reserved."
        },
        {
          "title": "Scottish Storytelling Centre: accessibility",
          "url": "https://www.scottishstorytellingcentre.com/about-us/accessibility/",
          "note": "Lift, hearing support and advance contact for individual arrangements."
        }
      ]
    }
  ],
};

export function firstVerifiedOn(guide: { slug: string; guideReview?: GuideReview }) {
 return [guide.guideReview?.checkedOn, ...(guideReviewHistory[guide.slug] || []).map(review => review.checkedOn)].filter((date): date is string => Boolean(date)).sort()[0];
}
