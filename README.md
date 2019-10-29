# How to start work?

1. `npm install`
2. `lerna bootstrap` (if you don't have `lerna`, install it globally)

## I'm working on `core`

Then just visit `packages/core` and work. `npm run dev` opens docs.

## I'm working on `demo`

Demo has `@commerce-ui/core` depenedency which is linked to `packages/core`. This is managed by `lerna`, but you must remember to compile `core` before running demo.

So:

1. Go to `packages/demo`
2. Run `npm run build`. Voila.

Now you can go to `packages/demo` and run it via `npm run dev`.
