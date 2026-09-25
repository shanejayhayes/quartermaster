# Quartermaster

Private game character manager built with Next.js and Supabase.

## Current UI

- Email magic-link sign-in through Supabase Auth
- Game library for Neverwinter, The Division 2, and The First Descendant
- Separate platform/store accounts (e.g. Steam and Epic)
- Character roster, editable character details, progression, saved builds, owned equipment, and goals
- Responsive layout with pill controls, subtle tile shadows, and a light blue/graphite token system

## Run locally

1. Copy `.env.example` to `.env.local`.
2. `npm ci`
3. `npm run dev`
4. Open `http://localhost:3000`.

The Supabase project's Auth URL configuration must permit `http://localhost:3000` as a redirect URL for local magic links. Add the exact deployed origin to the allowlist before using sign-in on Vercel. Set the same two `NEXT_PUBLIC_` variables in Vercel project settings. The publishable key is safe for browser use; never add a service-role key to the app.

## Deployment

Deploy to a private Vercel project. Do not attach `myquartermaster.app` or enable public discoverability until the domain decision is final. Before launch, validate sign-in, one account, one character, and cross-account isolation in the hosted environment.

## Next iteration

- Assign owned equipment to individual builds using `build_equipment`.
- Edit and complete goals, activate builds, edit equipment, and add notes.
- Add screenshot-assisted sync and character history views.
