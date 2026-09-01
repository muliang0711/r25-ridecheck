# RideCheck

A mobile-first, offline-friendly used-motorcycle inspection checklist distilled from a detailed Yamaha R25 / Ninja 250 buying discussion.

## Features

- Three-state inspection results: OK, Watch, and Walk Away
- Immediate warning when a non-negotiable fault is found
- R25-specific engine, cooling, tyre, chain, gearbox, and ownership checks
- Repair-cost deductions from a configurable clean-condition value
- Automatic local saving without an account or backend
- Copyable summary, JSON export, and print layout
- Responsive static site suitable for GitHub Pages

## Run locally

No build step is needed. Serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## GitHub Pages

The included workflow publishes the repository root to GitHub Pages after every push to `main`.

1. Create a public GitHub repository and push these files to its `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. The `Deploy static site to Pages` workflow will publish the site.

Inspection guidance is informational and does not replace a qualified mechanic or official JPJ guidance.
