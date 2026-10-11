#!/usr/bin/env bash
# Build an element's gallery into a standalone gallery.js (works from file://).
#
# Usage: build_gallery.sh <element-slug> [alias=path ...]
#   Bundles elements/<slug>/gallery/gallery.src.tsx with esbuild.
#   Each alias maps a package name to vendored source, e.g.
#     border-beam=elements/border-beam/source/src/index.ts
#
# Needs: ESBUILD (path to an esbuild binary) and NODE_MODULES (a folder with
# react, react-dom, scheduler and any peer deps such as three) in the env.
set -euo pipefail

here="$(cd "$(dirname "$0")/.." && pwd)"
slug="$1"; shift
: "${ESBUILD:?set ESBUILD to an esbuild binary}"
: "${NODE_MODULES:?set NODE_MODULES to a node_modules folder}"

aliases=()
for a in "$@"; do
  aliases+=("--alias:${a%%=*}=$here/${a#*=}")
done

NODE_PATH="$NODE_MODULES" "$ESBUILD" "$here/elements/$slug/gallery/gallery.src.tsx" \
  --bundle --format=iife --target=es2020 --minify --jsx=automatic \
  --define:process.env.NODE_ENV='"production"' \
  "${aliases[@]}" \
  --legal-comments=none \
  --banner:js="/*! $slug gallery — bundles the library from ../source (see its LICENSE/NOTICE) and React 18 (MIT © Meta). */" \
  --outfile="$here/elements/$slug/gallery/gallery.js"
