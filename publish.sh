#!/usr/bin/env bash

lerna version patch

cd packages/core2
npm run build
npm publish --access public dist/

cd ../docs
now --target production --scope commerce-ui
