# OrgTik landing directions — design QA

**final result: passed**

Scope: the three frontend landing-page directions and the comparison gallery. This is acceptance for choosing a direction, not a release audit of the future complete website.

## Visual truth and comparison evidence

The user requested three original landing-page interpretations of the brand PDF and the written project plan. There is no supplied page mockup to reproduce pixel for pixel. The PDF is the visual truth for logos, typography, colors, and brand imagery; the three approved-for-exploration direction descriptions define the composition goals.

- Source: `../ORGTIK.pdf`, especially pages 8, 12, 14, 17, 18, 19, and 20.
- Rendered source references: `references/brand-page-8.png`, `brand-page-14.png`, `brand-page-17.png`, `brand-page-18.png`, `brand-page-19.png`, and `brand-page-20.png` (1248 × 702 pixels each).
- Combined comparison input: `qa/brand-comparison.jpg` (1600 × 1140), viewed after the fixes. It places the original PDF artwork and corresponding desktop/mobile implementations in one board.
- Individual hero evidence: `qa/cinematic-desktop.png`, `qa/editorial-desktop.png`, `qa/connected-desktop.png`, and each direction's `*-mobile.png` and `*-tablet.png`.
- Additional evidence: `qa/editorial-services.png` and the full-page captures. Full-page captures are qualitative evidence because the browser provider can normalize the capture dimensions.
- User-facing overview: `qa/three-directions.jpg`.

Desktop hero comparison: CSS viewport 1280 × 720; provider PNG output 1265 × 712. Mobile: CSS viewport 390 × 844; PNG output 375 × 811. Tablet: CSS viewport 768 × 1024; PNG output 753 × 1004. Device density was approximately 1. The comparison board fits these images proportionally, without stretching, and does not claim pixel-accurate alignment with the PDF's slide layout. The reference and implementation represent different compositions by design.

States: initial hero and default navigation, playing/paused video, selected modules, open/closed dialogs, form validation and success, expanded FAQ/service content, and selected/cleared direction. The connected mobile hero screenshot shows CRM selected; its desktop screenshot shows the initial Tasks selection. This is an intentional state difference, not design drift.

## Findings and fix history

No actionable P0/P1/P2 findings remain in the reviewed prototype scope.

| Priority | Earlier finding | Fix and post-fix evidence |
| --- | --- | --- |
| P1 | Connected video control was underneath the workspace console and did not pause playback. | Removed the parent stacking barrier and placed the desktop control in the hero's bottom center. Browser clicks then returned `paused: true`, followed by `paused: false` after Play. Mobile control was visually checked below the console. |
| P2 | Header Plans passed a click event as if it were a module ID, creating a false initial selection. | Guarded the input to accept only a string module ID. Header Plans now shows “Choose a module to begin”; opening from Files selects Files. Reviewing HR + Files returns the correct names. |
| P2 | Mobile line-break removal could concatenate words, and the display headings wrapped awkwardly. | Added explicit spacing and responsive headline sizing. All three pages checked at 360 and 390 CSS pixels with no horizontal overflow. Final phone hero captures show readable, deliberate wrapping. |
| P2 | Cinematic video edge and overlay treatment created a visible seam and weaker text contrast at tablet/phone widths. | Extended opaque coverage at the image boundary and strengthened the responsive text scrim. Raised the motion control above the scrim. Final desktop, tablet, and mobile captures were reviewed. |
| P2 | Editorial accent sentence was too pale against the light surface. | Darkened the accent from `#9c8aa7` to `#867292`; inspected the revised statement/hero flow. |
| P2 | Compact mobile direction-choice control lost its visible text. | Added an explicit accessible name, “Choose this direction”. Verified that the icon button opens the choice dialog. |

## Required visual surfaces

**Fonts and typography:** Self-hosted Montserrat Variable loads for display and UI text; Arial supports body content. Browser computed font family confirmed Montserrat. Heading scale, weight, line height, letter spacing, and wrapping were reviewed on all three layouts. The extracted logo preserves its original letterforms rather than using typed replacement text.

**Spacing and layout rhythm:** Cinematic uses an asymmetric image hero and alternating service/platform sections; editorial uses light surfaces and a structured text/image grid; connected uses a functional module console and platform-led content. Header, hero, module content, service rows, process, FAQ, closing CTA, and footer were inspected. Layouts checked at 1280, 768, 390, and 360 CSS-pixel widths. No horizontal overflow was observed. Mobile controls remain reachable, and footer padding clears the fixed comparison dock.

**Colors and tokens:** Primary plum/violet and indigo/blue colors follow PDF page 8. Supporting neutral surfaces and text tints are intentional interface extensions. Active tabs, selected modules, focus states, white/light logos, and background overlays are visible against their surfaces. Stronger scrims preserve readable hero copy over bright artwork. This was a visual/targeted contrast review, not a full automated WCAG certification.

**Image quality and fidelity:** Original embedded PDF images supply the glass emblem, business cards, phone, and tablet. Original logo paths supply the SVG wordmark/emblem. The combined board shows the same source subjects and correct colors, with intentional responsive crops. Images were visually checked for sharpness and unwanted clipping; browser inspection found no broken images. The requested placeholders are real MP4 video files using slow camera movement, with matching posters. No generated substitute imagery or fake customer/product screenshots were used.

**Copy and content:** The pages distinguish digital services from the six-module platform concept. They have no invented client logos, testimonials, performance metrics, or case-study claims. Brand applications are identified as such. Pricing requires confirmation rather than fabricated amounts. Enquiry, account, and plan previews explain their actual behavior. Product copy remains draft material for owner review before the full website is published.

## Interaction verification

- Comparison links opened the three separate routes. Choice persisted to the gallery and could be cleared. The test preference was cleared.
- Hero MP4 duration was 12 seconds. Playback was confirmed on all three routes. Mobile switched to `*-mobile.mp4` sources.
- Pause/Play worked; a manually paused cinematic video stayed paused after navigating away from and returning to its hero.
- Main navigation moved to the intended sections; mobile menu opened, linked to Services, closed, and returned focus to its trigger after Escape.
- Module tabs updated content. ArrowRight changed CRM to Files, and focus/selected state moved together.
- Module-specific plan entry selected the correct module. Adding HR to Files and reviewing produced “HR + Files”. Header Plans opened empty.
- Enquiry submission with missing values stayed in the form and focused the required name input. Example values completed the local preview with the explicit “No message was sent” state.
- Escape closed the dialog and restored focus to its opener.
- Service accordion and FAQ expanded to expose their content.
- Sign in opened the account preview without credential fields or authentication.
- Browser console warning/error inspection returned no entries during the checked flows.

## Build and scope verification

- `npm run format:check`: passed.
- `npm run build`: passed; static output in `dist/client`.
- Main production JS: approximately 297.69 kB / 86.18 kB gzip. CSS: approximately 61.71 kB / 13.06 kB gzip.
- Six MP4 files are approximately 0.22–0.70 MB each. Other directions' videos are not mounted on the current route.
- Backend services, real accounts, payment, enquiry delivery, databases, and external API integrations were not implemented.

## Remaining review limits and follow-up polish

- Browser checks were performed in the available Chromium-based in-app browser. Safari, Firefox, real iOS/Android devices, and a screen-reader session remain future release checks.
- Reduced-motion and save-data branches were reviewed in source. The selected browser tooling did not emulate those OS/network preferences; they are not claimed as browser-tested states.
- Tiny decorative captions could be adjusted after the preferred direction is selected. Core body content and primary controls were checked separately.
- Final commercial claims, module availability, copy, and any replacement footage require the owner's content decisions before publication.

## Implementation checklist

- [x] Three independent landing compositions and a comparison gallery.
- [x] Original PDF brand imagery and extracted logos.
- [x] Actual animated video placeholders with posters and controls.
- [x] Desktop/tablet/phone visual and overflow checks.
- [x] Main interactive preview flows verified in the browser.
- [x] P0/P1/P2 findings fixed and reviewed again.
- [x] Static build and source formatting checks passed.
- [ ] User chooses the direction before the remaining website is developed.

**final result: passed**
