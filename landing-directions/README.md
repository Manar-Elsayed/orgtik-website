# OrgTik — three landing-page directions

Three separate, responsive landing pages for choosing the visual direction of the future OrgTik website. Built with React and Vite, using the original OrgTik brand PDF. This is a frontend design exploration; the rest of the website awaits direction selection.

## Open the comparison

The local preview is at **http://127.0.0.1:4173/** while the preview process is running.

| Direction | URL | Design emphasis |
| --- | --- | --- |
| Cinematic brand | `/cinematic` | Full-bleed brand imagery, dark plum surfaces, confident display typography, service accordions |
| Editorial technology | `/editorial` | Warm light surfaces, generous whitespace, structured storytelling, prominent brand applications |
| Connected systems | `/connected` | Deep indigo, an interactive workspace explorer, module combinations, a platform-led narrative |

Use the bottom switcher to compare. **Choose this direction** saves a preference locally; the comparison page can clear it. Copying a choice does not send it to anyone. Tell Codex your choice to continue the full website.

## Implemented experience

- Separate complete landing compositions with hero, service/platform content, process, FAQ, and contact entry points.
- Actual 12-second H.264 background video placeholders: original PDF imagery with slow, seamless camera movement. Desktop and mobile encodes, matching WebP posters, no audio, and visible pause/play controls.
- Background playback pauses offscreen and in hidden tabs. Manual pause is respected. Reduced-motion and data-saving preferences show a poster until the user chooses play.
- Scroll reveals, restrained image/CTA transitions, state changes, and keyboard focus treatments. Motion respects `prefers-reduced-motion`.
- Six-module explorer with accessible tabs and arrow/Home/End keyboard navigation.
- Local plan combinations with selected/empty/review states and no invented pricing.
- Enquiry preview with required-field/email validation and explicit no-send confirmation.
- Mobile navigation and modal dialogs with Escape dismissal, focus restoration, and body scroll locking.
- Selection storage only; enquiry details are not persisted or transmitted.

Account access is a clearly labelled preview. There is no authentication, payment, subscription, real enquiry delivery, database, external API, or backend implementation.

## Brand and content

`public/assets/manifest.json` identifies the original PDF source of each image and logo. The logo vectors are extracted from the PDF's original paths. Display/UI typography is self-hosted Montserrat, with Arial for body copy, following the brand guide.

Palette anchors: `#190B25`, `#3B1E59`, `#6C3CAA`, `#9458F4`, `#121649`, `#243089`, `#394BC6`, `#4157F7`. Additional neutrals/tints support readable interfaces.

The PDF's business-card, glass-emblem, phone, and tablet imagery are **brand applications**, not screenshots of a shipped platform. Copy labels platform functionality as a concept. No customer names, testimonials, results, or case-study metrics have been invented.

`public/assets/video-manifest.json` describes all six video encodes. `tools/extract_brand.py` and `tools/make_videos.py` document asset preparation; running the site does not require Python or FFmpeg.

## Development and static build

Requires Node.js and npm. From this directory:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
```

```sh
npm run format:check
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Use either the development server or the preview server on port 4173, not both simultaneously. The build writes static browser files to `dist/client`. A static host must return `index.html` for `/cinematic`, `/editorial`, and `/connected` (SPA fallback). Serve at the domain root because assets use absolute paths. Opening `index.html` via `file://` is not supported.

The optional hosting-worker files inherited from the starter remain untouched in the workspace. They are not used by this build or included in the download package. There is no new server application.

## Source map

- `src/App.jsx`: route selection, comparison gallery, and choice storage.
- `src/Cinematic.jsx`, `src/Editorial.jsx`, `src/Connected.jsx`: independent landing compositions.
- `src/shared.jsx`: navigation, video, module explorer, dialogs, process, FAQ, footer, comparison dock.
- `src/content.js`: shared modules, services, and direction descriptions.
- `src/design.css`: responsive design system and animation rules.
- `design-qa.md` and `qa/`: browser verification notes and screenshots.

The original plan and enhanced IA remain in the parent workspace. Selecting a direction is the next step before expanding the remaining page templates.
