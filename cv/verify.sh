#!/usr/bin/env bash
# Verifie que les PDF publies correspondent bien a leurs sources.
#
#   ./cv/verify.sh
#
# Le piege que ce script existe pour attraper : editer cv/cv-*.html apres avoir
# rendu, et publier un PDF perime qui contredit le site. Le nombre de pages et
# l'absence de cadratin ne suffisent pas a le detecter, il faut comparer le
# contenu.
set -euo pipefail

CV_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(dirname "$CV_DIR")"

# Sur cette machine le depot vit dans WSL mais s'edite depuis Windows : python3
# et pymupdf ne sont installes que cote Linux. On s'y relance si besoin.
if ! command -v python3 >/dev/null 2>&1; then
  if command -v wsl >/dev/null 2>&1; then
    exec wsl -e bash -c "cd /home/maxence/mon-site-perso && bash cv/verify.sh"
  fi
  echo "python3 introuvable (et pas de wsl pour s'y replier)." >&2
  exit 1
fi

cd "$REPO"

python3 - <<'PY'
import html
import os
import re
import sys

import pymupdf

PAIRS = [
    ("cv/cv-en.html", "public/maxence_pachot_cv.pdf", "EN"),
    ("cv/cv-fr.html", "public/maxence_pachot_cv_fr.pdf", "FR"),
]

failed = False

for src, pdf, label in PAIRS:
    doc = pymupdf.open(pdf)
    pdf_text = " ".join(" ".join(p.get_text().split()) for p in doc)

    body = html.unescape(re.sub(r"<[^>]+>", " ", open(src, encoding="utf-8").read()))
    sentences = [" ".join(s.split()) for s in re.split(r"(?<=[.])\s", body)]
    sentences = [s for s in sentences if 60 < len(s) < 180]
    missing = [s for s in sentences if s not in pdf_text]

    fresh = os.path.getmtime(pdf) > max(os.path.getmtime(src), os.path.getmtime("cv/cv.css"))
    dashes = pdf_text.count(chr(0x2014))

    problems = []
    if doc.page_count != 2:
        problems.append(f"{doc.page_count} pages au lieu de 2")
    if not fresh:
        problems.append("PDF plus ancien que sa source, rejouer render.sh")
    if missing:
        problems.append(f"{len(missing)} phrase(s) de la source absente(s) du PDF")
    if dashes:
        problems.append(f"{dashes} cadratin(s)")

    if problems:
        failed = True
        print(f"  KO   CV {label} : " + " ; ".join(problems))
        for m in missing[:3]:
            print(f"         manquante -> {m[:110]}")
    else:
        print(f"  OK   CV {label} : 2 pages, a jour, sans cadratin")

sys.exit(1 if failed else 0)
PY
