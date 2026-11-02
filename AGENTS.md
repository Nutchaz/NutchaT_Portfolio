# Project guidance

- Use the App Router under `src/app` and keep components server-rendered unless browser state or event handling requires a client component.
- Keep shared UI primitives in `src/components/ui`; use the shadcn/ui CLI to add registry components.
- Group growing product areas by feature under `src/features` and keep feature-only code with its feature.
- Keep TypeScript strict. Prefer explicit boundary types and inferred types from schemas over `any`.
- Use Tailwind utilities and the CSS theme variables in `src/app/globals.css` for styling.
- Follow `.agents/skills/shadcn/SKILL.md` when adding or composing shadcn/ui components.
- Follow `.agents/skills/nextjs/SKILL.md` for App Router, server/client boundaries, routing, data, and caching decisions.
- Check the official, version-matched Next.js docs bundled under `node_modules/next/dist/docs` when changing framework behavior.
- For React and Next.js performance, follow `.agents/skills/react-best-practices/SKILL.md`.
- For UI accessibility and interface quality, follow `.agents/skills/web-design-guidelines/SKILL.md`.

## Official references

- Next.js: https://nextjs.org/docs
- React: https://react.dev/learn
- TypeScript: https://www.typescriptlang.org/docs/
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
