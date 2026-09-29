# Rudresh Navali — Frontend Portfolio

An architecture-forward portfolio for Rudresh Navali, a technology lead focused on React systems, accessibility, design systems, and production-scale frontend performance.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/rudresh-portfolio run dev` — run the portfolio preview
- `pnpm --filter @workspace/portfolio-design-system run dev` — run the living design-system preview
- `pnpm run typecheck` — full typecheck across all packages
- `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/rudresh-portfolio run build` — build the portfolio locally
- `pnpm --filter @workspace/portfolio-design-system run tokens` — regenerate design-system outputs after editing tokens
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Frontend: React + Vite + Wouter, JavaScript/JSX source
- Shared UI: `@workspace/portfolio-design-system`

## Where things live

- `artifacts/rudresh-portfolio/` — deployable portfolio app at `/`
- `artifacts/portfolio-design-system/` — reusable tokens, primitives, and living style guide at `/design-system/`
- `artifacts/portfolio-design-system/tokens.json` — source of truth for the shared visual language
- `artifacts/rudresh-portfolio/src/pages/` — lazy-loaded route modules for overview, work, architecture lab, and contact
- `artifacts/rudresh-portfolio/src/components/Shell.jsx` — shared application shell and navigation

## Architecture decisions

- The portfolio is JavaScript-first: app routes and components are JSX; TypeScript remains only in generated/configuration scaffolding where the workspace template requires it.
- The design system owns tokens and reusable primitives. The portfolio imports the package directly instead of copying theme values or UI components.
- `/work` and `/architecture` are independently lazy-loaded feature surfaces with their own runtime error boundaries, making the micro-frontend boundary explicit without adding backend complexity.
- The initial route stays small through route-level `React.lazy` and a shared Suspense fallback; architecture trade-offs are demonstrated in the `/architecture` lab.

## Product

The portfolio presents Rudresh's production frontend experience across United Airlines and Infosys, explains his design-system and accessibility practice, and provides an interactive architecture lab that makes route splitting, micro frontends, caching, performance, and inclusive UI concrete.

## User preferences

- Keep the portfolio source JavaScript/JSX rather than converting it to TypeScript.
- Use the shared portfolio design system for any new reusable visual primitive or token.

## Gotchas

- The portfolio Vite config expects `PORT` and `BASE_PATH`; use the managed workflow for preview or provide both variables for a local build.
- Edit `artifacts/portfolio-design-system/tokens.json`, then run its `tokens` script; do not hand-edit generated CSS or token exports.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
