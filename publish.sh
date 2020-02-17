#!/usr/bin/env bash

lerna version patch

cd packages/core
npm run build
npm publish --access public dist/

cd ../docs
