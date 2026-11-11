#!/bin/sh
# Renders og/og.html to assets/og-image.png (1200x630) with headless Chrome.
cd "$(dirname "$0")/.." || exit 1
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --virtual-time-budget=6000 \
  --screenshot="$(pwd)/assets/og-image.png" "file://$(pwd)/og/og.html"
