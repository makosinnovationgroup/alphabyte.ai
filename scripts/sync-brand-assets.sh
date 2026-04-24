#!/usr/bin/env bash
# sync-brand-assets.sh
#
# Copies selected brand assets from the local branding folder into this
# Next.js project's public/ directory with web-friendly names.
#
# Source: /Users/mitchellmakos/Documents/projects/alphabyte/resources/1 Branding
#
# Re-runnable — overwrites existing files if the source has been updated.
# Does NOT copy images (handled per-feature) or Aeonik fonts (.otf only).

set -euo pipefail

SRC="/Users/mitchellmakos/Documents/projects/alphabyte/resources/1 Branding"
DST="$(cd "$(dirname "$0")/.." && pwd)"

LOGO_SRC="$SRC/2 Logo/1 Current Brand/Logo Suite/Primary Logo/Digital/RGB/SVG"
ICON_SRC="$SRC/2 Logo/1 Current Brand/Logo Suite/Primary Icon/Digital/RGB/SVG"
FONT_SRC="$SRC/3 Fonts/Geist/webfonts"
GRAD_SRC="$SRC/2 Logo/1 Current Brand/Gradients"

mkdir -p "$DST/public/logos" "$DST/public/fonts" "$DST/public/backgrounds"

echo "Copying logos..."
cp "$LOGO_SRC/Alphabyte_Logo_RGB_Blue.svg"  "$DST/public/logos/alphabyte-logo-blue.svg"
cp "$LOGO_SRC/Alphabyte_Logo_RGB_White.svg" "$DST/public/logos/alphabyte-logo-white.svg"
cp "$LOGO_SRC/Alphabyte_Logo_RGB_Black.svg" "$DST/public/logos/alphabyte-logo-black.svg"

echo "Copying icons..."
cp "$ICON_SRC/Alphabyte_Icon_RGB_Blue.svg"  "$DST/public/logos/alphabyte-icon-blue.svg"
cp "$ICON_SRC/Alphabyte_Icon_RGB_White.svg" "$DST/public/logos/alphabyte-icon-white.svg"
cp "$ICON_SRC/Alphabyte_Icon_RGB_Black.svg" "$DST/public/logos/alphabyte-icon-black.svg"

echo "Copying fonts..."
cp "$FONT_SRC/Geist-Regular.woff2"       "$DST/public/fonts/Geist-Regular.woff2"
cp "$FONT_SRC/Geist-RegularItalic.woff2" "$DST/public/fonts/Geist-RegularItalic.woff2"
cp "$FONT_SRC/Geist-Medium.woff2"        "$DST/public/fonts/Geist-Medium.woff2"
cp "$FONT_SRC/Geist-Bold.woff2"          "$DST/public/fonts/Geist-Bold.woff2"
cp "$FONT_SRC/Geist-BoldItalic.woff2"    "$DST/public/fonts/Geist-BoldItalic.woff2"

echo "Copying gradient backgrounds..."
cp "$GRAD_SRC/Horizontal/JPG/Alphabyte_RGB_Gradient_Horizontal_1.jpg" "$DST/public/backgrounds/alphabyte-gradient-horizontal.jpg"
cp "$GRAD_SRC/Square/JPG/Alphabyte_RGB_Gradient_Square_1.jpg"         "$DST/public/backgrounds/alphabyte-gradient-square.jpg"
cp "$GRAD_SRC/Vertical/JPG/Alphabyte_RGB_Gradient_Vertical_1.jpg"     "$DST/public/backgrounds/alphabyte-gradient-vertical.jpg"

# Verify
FAIL=0
for f in \
  "$DST/public/logos/alphabyte-logo-blue.svg" \
  "$DST/public/logos/alphabyte-logo-white.svg" \
  "$DST/public/logos/alphabyte-logo-black.svg" \
  "$DST/public/logos/alphabyte-icon-blue.svg" \
  "$DST/public/logos/alphabyte-icon-white.svg" \
  "$DST/public/logos/alphabyte-icon-black.svg" \
  "$DST/public/fonts/Geist-Regular.woff2" \
  "$DST/public/fonts/Geist-RegularItalic.woff2" \
  "$DST/public/fonts/Geist-Medium.woff2" \
  "$DST/public/fonts/Geist-Bold.woff2" \
  "$DST/public/fonts/Geist-BoldItalic.woff2" \
  "$DST/public/backgrounds/alphabyte-gradient-horizontal.jpg" \
  "$DST/public/backgrounds/alphabyte-gradient-square.jpg" \
  "$DST/public/backgrounds/alphabyte-gradient-vertical.jpg"; do
  if [ ! -s "$f" ]; then
    echo "FAIL: $f is missing or empty"
    FAIL=1
  fi
done

if [ "$FAIL" -eq 0 ]; then
  echo ""
  echo "Done — 6 SVGs in public/logos/, 5 .woff2 in public/fonts/, 3 JPGs in public/backgrounds/"
else
  exit 1
fi
