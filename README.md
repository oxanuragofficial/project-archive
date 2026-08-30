# Project Archive — Anurag Kumar

A single-page site showcasing client work and lab/practice repos, pulling live screenshots from `/images`.

## Structure

```
project-archive/
├── index.html      → markup only
├── css/
│   └── style.css   → all styling
├── js/
│   └── app.js      → project data + rendering + filters
├── images/          → one PNG per repo, filename must match the repo name exactly
└── README.md
```

No build step, no dependencies — plain HTML/CSS/JS. Opens directly in a browser.

## Push to GitHub

```bash
cd project-archive
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Enable GitHub Pages

1. On GitHub, go to your repo → **Settings → Pages**
2. Under "Build and deployment", set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` and folder to `/ (root)`
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Updating a project

- **Add a repo:** add an object to the `projects` (lab) or `clientProjects` (client work) array in `js/app.js`, and drop a matching `images/<repo-name>.png`.
- **Swap a screenshot:** just overwrite the PNG in `images/` — the filename (case-sensitive) must match the `name` field in `app.js`.
- **Reorder "big" projects to the top:** edit the `prioritize()` calls near the bottom of `js/app.js`.
