#!/usr/bin/env bash
# Build the demo into dist/ (static, works from file://).
# Needs ESBUILD, TAILWIND (standalone binaries) and NODE_MODULES (react 19,
# @base-ui/react, @shadcn/react, cva, clsx, tailwind-merge, lucide-react,
# tw-animate-css, shadcn) — no Node required.
set -euo pipefail
cd "$(dirname "$0")"
: "${ESBUILD:?}" "${TAILWIND:?}" "${NODE_MODULES:?}"
mkdir -p dist
NODE_PATH="$NODE_MODULES" "$ESBUILD" app/main.tsx --bundle --format=iife --target=es2020 --minify \
  --jsx=automatic --define:process.env.NODE_ENV='"production"' --tsconfig=tsconfig.json \
  --legal-comments=none --outfile=dist/app.js
# Tailwind resolves @import "tw-animate-css"/"shadcn/tailwind.css" from a
# node_modules next to the css, so point one at NODE_MODULES while building.
ln -sfn "$NODE_MODULES" node_modules
"$TAILWIND" -i app/globals.css -o dist/app.css --minify
rm node_modules
