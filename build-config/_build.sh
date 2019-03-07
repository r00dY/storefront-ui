#!/usr/bin/env bash

echo "Build type: $BUILD_TYPE"

if [ "$BUILD_TYPE" == "storybook" ]; then
    echo "Building storybook"
else
    echo "Building next"
    ./node_modules/.bin/next build
fi
