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

## **Important!**

`react` and `react-dom` must be in parent `package.json` `devDependencies`. If they are in packages then hooks error shows up (two instances of React-DOM). It's a bit shitty case which happens because of how webpack links packages:

1. We run demo.
2. Some code in demo imports react `import React from "react"`. Webpack will obviously link it to `demo/node_modules/react`
3. We import components from `commerce-ui` by simply calling `import { Grid } from @commerce-ui/core/Grid`.
4. `demo/node_modules/@commerce-ui/core` is a symlink to `core/` directory (this is done by `lerna` when we call `lerna bootstrap`).
5. And now, `Grid.js` script from our core (`core/src/packages/Grid.js`) might also impor `React` and call `import React from "react"`.
6. In this case, webpack looks for `react` not in `/demo/node_modules` but in `/core/node_modules` because `Grid.js` is in `/core/...` directory.
7. This makes us have 2 instances of `React` in the app.
8. Hooks don't work with multiple instances of `React`

Solution?

1. Get rid of `react` package in `dependencies` of `core` and `demo` (it must be in `core` as `peerDependency` but peer dependencies doesnt make `npm` download package).
2. Add `react` to `devDepedencies` or root directory.
3. Then we have only 1 instance and all packages will use it.
