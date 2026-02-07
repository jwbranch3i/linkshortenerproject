# Auth (Clerk)

## Scope

- This app uses Clerk for all authentication.
- No other auth providers, libraries, or custom auth flows are allowed.

## Requirements

- Protect `/dashboard`: users must be signed in to access it.
- If a signed-in user visits `/`, redirect them to `/dashboard`.
- Clerk `signIn` and `signUp` must always open as modals.
