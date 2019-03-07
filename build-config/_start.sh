#!/usr/bin/env bash

echo "Build type: $BUILD_TYPE"

if [ "$BUILD_TYPE" == "storybook" ]; then
    echo "Starting storybook"
    start-storybook -s . -p 3000
else
    echo "Starting server"
    NODE_ENV=production node server.js 8000
fi
