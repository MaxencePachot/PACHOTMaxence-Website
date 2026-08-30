# CV sources

The two CV PDFs served by the site are generated from the HTML in this folder.
**The PDFs are build output - edit the HTML, never the PDF.**

| Source | Output |
|---|---|
| `cv-en.html` | `public/maxence_pachot_cv.pdf` |
| `cv-fr.html` | `public/maxence_pachot_cv_fr.pdf` |

`cv.css` is shared by both. `photo.jpg` is the 420×560 portrait crop; the
original full-resolution photo is in git history at `public/diplome.jpg`.

## Regenerating

```bash
./render.sh en
./render.sh fr
```

The script stages the sources on a local path (headless Chrome does not read
UNC paths reliably), renders with Chrome's `--print-to-pdf`, and copies the
result into `public/`.

Without the script, the equivalent is:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
       --virtual-time-budget=6000 \
       --print-to-pdf=out.pdf file:///absolute/path/to/cv/cv-en.html
```

Page size and margins come from the `@page` rule in `cv.css`, so the PDF is A4
regardless of the machine's paper default.

## Verification

```bash
./cv/verify.sh
```

A lancer **apres chaque rendu et avant chaque commit**. Le script compare le
contenu du PDF a celui de sa source, verifie que le PDF est plus recent que
`cv-*.html` et `cv.css`, qu'il fait deux pages et qu'il ne contient aucun
cadratin.

Le piege qu'il attrape : editer le HTML apres avoir rendu, et publier un PDF
perime. C'est deja arrive une fois, et ni le nombre de pages ni l'absence de
cadratin ne le detectent.

## Rules

- **The CV opens the door; the site answers the questions it raises.** Keep the
  CV at the level of the platform and what was put in place. Forensic detail -
  test counts, duplicate helpers removed, code-ownership setup, ticket counts -
  belongs in the project cards on the site, not here. Repeating it in both makes
  the CV unreadable and leaves the site with nothing more to offer.
- **Quantify effects, not internals.** "From an empty subscription to
  production", "bill divided by roughly ten" are results a reader scores in
  seconds. "178 unit tests" is engineering hygiene: true, but it belongs on the
  site.
- **Three to four bullets per mission**, the first one carrying the outcome.
- **Nothing here may contradict the site.** The wording is condensed from
  `src/i18n/en.js` and `src/i18n/fr.js`.
- **Two pages, no more.** Swiss recruiters expect one to two. If something new
  has to go in, something old comes out. The layout is tuned to land exactly on
  two pages in both languages - check the page count after every edit.
- French runs roughly 15% longer than English, so the French file is the one
  that overflows first.
- Every number must be traceable to something real.
- No client names - industry and country only.
