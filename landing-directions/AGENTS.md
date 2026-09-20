# Prototype Instructions

## OrgTik project scope

- The user requested a public GitHub repository for this project. Publish the frontend, assets, brand PDF, plans, and QA documentation. Local dependencies, credentials, logs, builds, ZIP downloads, and unused hosting-worker infrastructure are excluded by the root `.gitignore`.
- The public repository has no Sites worker or `test:sites` command. The optional Sites instructions below apply only if the user later requests a Sites deployment and that infrastructure is restored. Do not add backend code as part of ordinary frontend work.

- The user requested three separate, working landing-page directions before selecting one: cinematic brand, editorial technology, and connected systems. This explicitly replaces the earlier image-selection-first sequence for this task.
- Frontend only. Use the original assets and colors from `../ORGTIK.pdf`, with an actual animated video placeholder in each hero. Never recreate the custom logo as text.
- Do not implement backend services, real authentication, transactions, or message delivery. All contact/account/plan behavior is labelled as a local preview.
- Build static client output only for this task. The starter's optional hosting files are untouched and not used or included in preview delivery.
- Do not extend the selected design into the full website until the user chooses a direction.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
