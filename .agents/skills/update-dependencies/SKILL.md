---
name: update-dependencies
description: >
  Review, update and verify Genshi's dependencies, including its Astro
  documentation and Sass toolchain, preserving the configured Node.js major.
  Use for dependency maintenance in this repository.
---

Work from the repository root; no prior chat context required.

## 1. Inventory

1. Inspect `package.json`, `pnpm-lock.yaml`, `mise.toml`, `.github/workflows/`,
   package-manager settings, overrides, release cooldowns and build-script approvals.
2. Context: Sass library in `src/`; Astro docs in `docs/`. Read
   `astro.config.mjs`, `tsconfig.json`, `stylelint.config.js`, Prettier config
   and relevant usage. Missing source imports do not prove a dependency unused:
   check scripts, config and Markdown processing.
3. Record configured and actual Node.js/pnpm versions separately. Baseline:
   Node.js `24`, pnpm `12`; mise's pnpm policy: `latest`.
   Use mise tools, e.g. `mise exec -- pnpm outdated` / `mise exec -- pnpm audit`.
   Resolve `latest`; it may differ from CI.
4. Check official Node.js [schedule](https://github.com/nodejs/Release#release-schedule)
   and [releases](https://nodejs.org/en/about/previous-releases) for support and
   updates. Newer majors: report only, including newer LTS releases or when the
   configured major is unsupported.

## 2. Select versions and review migrations

1. **Preserve the Node.js major configured at task start (currently 24).**
   Keep mise `node = "24"` and CI `node-version: "24"`; both allow newer 24.x.
   Exact pins may receive same-major minor/patch updates. No newer major,
   moving latest/LTS alias or engine-range widening to admit newer majors.
   Major upgrades require a separate explicit user request and plan.
2. Other used direct dependencies/tooling: latest eligible stable versions,
   including majors/build tools, unless user limits scope. Update
   `package.json` ranges and lockfile; preserve range style and classification
   unless migration requires changes. Exclude prereleases by default.
3. Check exact minimum runtime versions and peers. If Astro, pnpm or another
   package requires a newer Node.js major: choose the latest eligible compatible
   release or defer and report the requirement. Never raise Node.js to unblock it.
4. **Before edits:** read official changelogs, release notes and migration
   guides covering installed → target direct dependency versions; identify
   affected code/config and adaptations. Include selected Node.js/pnpm updates;
   transitive changelogs optional.
5. Scrutinize majors and 0.x minors: Astro [upgrade guides](https://docs.astro.build/en/guides/upgrade-astro/)
   and version-specific migrations; Sass changes/deprecations; Sharp native
   installation; Stylelint/SCSS configs/plugins; Prettier integration.
6. Audit: check upstream advisories, dependency paths, applicability and patched
   versions. Preserve existing cooldowns; verify eligibility beyond `outdated`.
   Security bypasses require reviewed fixes and documented version-specific
   exceptions. Never lower global cooldowns or exempt whole packages/scopes.
   Do not import cooldown policy from the source skill's repository.

## 3. Update and adapt

1. Group engine/peer-coupled updates, especially Stylelint, SCSS shared configs,
   `stylelint-order`, `stylelint-prettier` and Prettier. Apply reviewed migrations
   to Astro config/layouts/components, Markdown, Sass and scripts. Preserve CSS
   behavior and documented public API.
2. pnpm upgrades: synchronize explicit versions in both CI workflows,
   `packageManager` and other existing pins. Preserve mise's floating policy
   unless a concrete compatibility/reproducibility issue requires pinning.
   Verify local and CI pnpm can consume the lockfile.
3. Regenerate `pnpm-lock.yaml` with selected pnpm; never hand-edit resolved
   entries. Update remaining eligible transitives within reviewed constraints;
   inspect the diff.
4. Before security repair flags, check [pnpm audit docs](https://pnpm.io/cli/audit).
   Review generated overrides/exceptions;
   remove existing ones only when their purpose expires. Preserve cooldown
   exception pruning settings.
5. Never force upgrades by bypassing engines, disabling peer checks or approving
   unrelated install scripts.
6. Scope: dependency maintenance and required migrations only. No Genshi version
   bump, package publication or documentation deployment.

## 4. Verify

1. Use selected project tools on the preserved Node.js major. Run:

   - `pnpm install --frozen-lockfile`
   - `pnpm audit`
   - `pnpm run fmt:check`
   - `pnpm run lint`
   - `pnpm run dist`
   - `pnpm run dist:min`
   - `pnpm run docs`

2. Re-read `package.json`; run relevant newer checks. Currently no `build`,
   `test` or `typecheck` scripts: do not invent them or install tools merely to
   fill gaps. Astro build success does not prove separate type-check success.
3. Format changed files only; avoid repository-wide autoformatting. Separate
   pre-existing failures from regressions.
4. Inspect `dist/genshi.css`, `dist/genshi.min.css` and source maps. Investigate
   unexpected selector/declaration changes after Sass upgrades, even if builds pass.
5. Run `pnpm run docs:preview`; smoke-test production docs at `/genshi/` or the
   configured base: navigation; representative form/layout/theme pages;
   CSS/assets under base; light/dark styles; Montserrat; images; code highlighting.
   Check browser errors and server output. For relevant updates, inspect
   Markdown/Shiki transformation and Sharp image processing.
6. If development rebuilding is affected, exercise `pnpm run docs:dev`;
   restore temporary edits. Stop preview/dev processes after checks.
7. Fix regressions; rerun affected checks. Blocked audit/checks = unverified,
   never passing. Build success does not replace runtime/visual checks.

## 5. Report

1. Direct dependencies/tools: old → new versions; adaptations; deferred updates
   with reasons.
2. Security: fixed advisory IDs; remaining findings; overrides/cooldown
   exceptions added or removed.
3. Verification: checks passed, failed or unverified.
4. Node.js: preserved major; actual verification version; support status.
   Newer majors: information only; separate planning and explicit authorization required.

