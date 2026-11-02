# Next.js Project Starter

A production-ready starting point using the Next.js App Router, React, strict TypeScript, Tailwind CSS v4, and shadcn/ui.

## Requirements

- Node.js 20.9 or newer
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev       # Start the development server
npm run typecheck # Check TypeScript
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Serve the production build
```

## Project structure

```text
src/
  app/             App Router routes and global styles
  components/
    ui/            shadcn/ui components
  features/        Feature-based application code as it grows
  hooks/           Shared React hooks
  lib/             Shared utilities
  types/           Shared application types
public/            Static assets
docs/              Project documentation
.agents/skills/    Project-local Codex skills
```

See [AGENTS.md](./AGENTS.md) for project conventions and official framework references.
