#!/usr/bin/env bash

# bump version of packages
lerna version patch

# build and publish core
cd packages/core2
npm run build
npm publish --access public dist/

# publish docs to Now
cd ../docs
now --target production --scope commerce-ui
