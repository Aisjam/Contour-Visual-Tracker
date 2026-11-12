# Contour website

Static website for Contour by Aisjam. No build step or package installation is required.

## Publish with GitHub Pages

1. Extract the ZIP. Upload its contents, including `index.html`, `contour-media/`, `versions.json`, `CHANGELOG.md` and `.nojekyll`, to the root of your website repository or website branch. Upload the extracted files, not the ZIP itself.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing these files and **/(root)**, then save.
5. GitHub Pages will display the published URL once deployment finishes.

For an existing application repository, keep its README and changelog. Use a separate website branch, or place this package in `/docs` and select that folder in Pages. Do not overwrite existing project documentation. This package's README is only website setup guidance.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files and updates

- `index.html`: all page content, styles and scripts. Keep the filename lowercase for hosting.
- `contour-media/`: 11 PNG images rendered by Contour. Keep this folder beside `index.html`.
- `versions.json`: website version feed. Entries accept `version`, `title`, optional `date`, and a `notes` array. It currently records public release pending, not an invented release.
- `CHANGELOG.md`: release notes linked from the page. Update alongside `versions.json`.
- `.nojekyll`: serves this package as static files.

All site-owned asset links are relative, so the site can be hosted below a repository URL. Links to the application repository point to Aisjam/Contour-Visual-Tracker; change them if needed.

## Preview

Open `index.html` for a basic preview. Browsers may block the JSON feed when opened as a local file. To preview over HTTP with Python installed, run `python -m http.server 8000 --bind 127.0.0.1` in this folder, then open http://127.0.0.1:8000.

## Images and credits

Roll, Phrase, Plasma, Vortex and Performance are actual development-build captures with demonstration data. The six synth images are cropped instrument panels from Contour's development render harness. They are labelled accordingly on the page.

The reverb adapts Freeverb by Jezar at Dreampoint. MacroBraids and PolyBraids use Emilie Gillet's Mutable Instruments Braids engine and supporting stmlib code. Other project dependencies are acknowledged in the page and the application's source notices; this website package does not include the application or replace its licence notices.

Fonts load from Google Fonts, and hardware photographs load from existing Anbernic URLs. They require an internet connection and are not bundled. Existing affiliate links and disclosure remain in the page. No new licence has been assigned to website artwork or third-party assets by this packaging step.