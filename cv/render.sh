#!/usr/bin/env bash
# Render a CV source to PDF with headless Chrome.
#
#   ./render.sh en                       -> public/maxence_pachot_cv.pdf
#   ./render.sh fr                       -> public/maxence_pachot_cv_fr.pdf
#   ./render.sh en out.pdf               -> out.pdf, from cv/cv-en.html
#   ./render.sh en out.pdf src.html      -> out.pdf, from src.html
#
# The last form is what the tailor-cv skill uses: it renders a per-application
# variant without touching the published CVs.
#
# The sources are staged in a temporary directory first: Chrome does not read
# UNC paths (\\wsl.localhost\...) reliably, and the stylesheet pulls the font
# from ../node_modules, so the relative layout has to be preserved.
set -euo pipefail

LANG_CODE="${1:-}"
if [[ "$LANG_CODE" != "en" && "$LANG_CODE" != "fr" ]]; then
  echo "usage: $0 <en|fr> [output.pdf] [source.html]" >&2
  exit 1
fi

CV_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(dirname "$CV_DIR")"

if [[ -n "${2:-}" ]]; then
  OUT="$2"
elif [[ "$LANG_CODE" == "en" ]]; then
  OUT="$REPO/public/maxence_pachot_cv.pdf"
else
  OUT="$REPO/public/maxence_pachot_cv_fr.pdf"
fi

SOURCE="${3:-$CV_DIR/cv-$LANG_CODE.html}"
if [[ ! -f "$SOURCE" ]]; then
  echo "source introuvable : $SOURCE" >&2
  exit 1
fi

CHROME="${CHROME:-}"
if [[ -z "$CHROME" ]]; then
  for candidate in \
    "/c/Program Files/Google/Chrome/Application/chrome.exe" \
    "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" \
    "$(command -v google-chrome || true)" \
    "$(command -v chromium || true)"; do
    [[ -n "$candidate" && -x "$candidate" ]] && CHROME="$candidate" && break
  done
fi
if [[ -z "$CHROME" ]]; then
  echo "Chrome not found. Set CHROME=/path/to/chrome and retry." >&2
  exit 1
fi

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

mkdir -p "$STAGE/cv" "$STAGE/node_modules/@fontsource/source-sans-3/files"
cp "$CV_DIR/cv.css" "$CV_DIR/photo.jpg" "$STAGE/cv/"
cp "$SOURCE" "$STAGE/cv/cv-$LANG_CODE.html"
cp "$REPO/node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2" \
   "$REPO/node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff2" \
   "$STAGE/node_modules/@fontsource/source-sans-3/files/"

# Chrome on Windows needs a Windows-style path in the file:// URL.
if [[ "$CHROME" == /c/* ]]; then
  STAGE_URL="$(cd "$STAGE" && pwd -W 2>/dev/null || echo "$STAGE")"
else
  STAGE_URL="$STAGE"
fi

"$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --virtual-time-budget=6000 \
  --print-to-pdf="$STAGE/out.pdf" \
  "file:///$STAGE_URL/cv/cv-$LANG_CODE.html"

cp "$STAGE/out.pdf" "$OUT"
echo "wrote $OUT"
