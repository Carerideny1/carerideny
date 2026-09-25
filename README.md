# Care Ride Transportation

Six main pages (Home, About, Services, Service Area, How to Book, Contact), six service details, callback privacy information, and an authorized staff inbox.

## Content and assets

The company name, contact details, service descriptions, logo, and vehicle illustration were carried over from https://website-creation.spiffy-gull-4747.chatgpt.site/. The logo is displayed without the phone-number portion because that artwork differs from the original page's dispatch number. The dispatch number used throughout the site is (631) 948-3362, matching the source page's text and telephone links.

MAS's Suffolk County scheduling number (844-666-6270) was corroborated by New York State Department of Health search results: https://www.health.ny.gov/health_care/medicaid/members/medtrans_overview.htm . No fares, precise response times, approval guarantees, unverified reviews, or purported real team photos have been invented.

## Callback requests

Requests persist in the DB binding using the generated Drizzle migration. The public form collects only basic contact details and callback preferences. It does not confirm transportation. Email/SMS notifications are not configured. The website owner must review /staff regularly. Staff authorization is an explicit server-side allowlist in lib/staff.ts, currently restricted to the verified website owner. Grant additional staff access only after their identity and authorization have been confirmed. All API reads, status updates, and deletions require staff authorization; write operations require a same-origin request. The staff page and API are dynamic; API responses are not cached.

## Coverage and motion update

The owner confirmed service throughout Long Island, Manhattan, Queens, Brooklyn, and the Bronx. Coverage copy and the interactive explorer reflect that instruction. The map uses simplified March 2026 NYS ITS Counties_Shoreline geometry from https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Civil_Boundaries/MapServer/3 . County geometry is stored locally, so the map does not rely on live map tiles or an API key. Connecting lines are illustrative, not driving routes or live vehicle positions. The Shirley marker indicates the locality, not an office address.

The homepage has two AI-created illustrative vehicle scenes, with slow pans, crossfades, manual scene selection, and pause controls. They do not show actual company vehicles or patients. Scene motion respects the operating system reduced-motion preference. The original vehicle illustration remains in the source assets but is no longer the homepage visual.

The logo loading overlay is progressive enhancement. It does not prevent default navigation, delay requests, or intercept external/telephone links. Arrival animation dismisses with CSS even when JavaScript is unavailable; the native mobile menu remains usable. Section jumps use a brief compact logo. Hover and scroll effects are restrained and disabled for reduced motion.

## Validation

- TypeScript check passed.
- Cloudflare-compatible build passed; final publication rebuilds changes.
- Desktop and 390px mobile views checked through the internal preview.
- Mobile menu and navigation, service detail links, booking situations, preparation checklist, FAQs, and service-area selector exercised.
- Navigation uses ordinary document links, and the mobile menu uses native details/summary so both work before JavaScript loads. Main-page navigation and a service detail link were checked at 390px with scripts disabled after the navigation fix.
- Coverage update checked on desktop and in a 390px mobile frame: region controls, direct map selection, NYC zoom, scene pause, section jump, loading dismissal, mobile page navigation, and script-disabled navigation. Mobile content fits without horizontal overflow. Client hydration errors found during development were fixed before publication.
- Missing callback consent produces an error; a synthetic local submission succeeded and was read back from local D1. Test data is not included in production migrations.
- The optional WebMCP booking-guide registration is feature-detected. WebMCP execution validation was unavailable because the preview browser did not expose document.modelContext.
- Staff sign-in requires the hosted dispatcher, so the complete sign-in flow is not available in the local preview.

## Development

Preserve the existing pnpm lockfile and the Sites execution profile. The generated SQL in drizzle/ is applied by Sites during publication. Never edit a previously applied migration. Publication preserves the current Sites sharing configuration; this coverage update was opened with public access already enabled.
