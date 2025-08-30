# Personal Website Starter

A minimal, clean academic homepage (like a simple Google Sites profile) built with plain HTML/CSS and designed to host on **GitHub Pages**.

## Quick start

1. Create a new GitHub repo named **`YOUR-USERNAME.github.io`** (replace with your GitHub username).
2. Download this folder and push it to that repo (or upload via the GitHub web UI).
3. In a minute or two, your site will be live at **https://YOUR-USERNAME.github.io**.

> If you prefer a project site (e.g. `github.com/YOUR-USERNAME/personal-site`), go to **Settings → Pages**, choose **Branch: main / root**, and your site will be published at `https://YOUR-USERNAME.github.io/personal-site`.

## Customize

- Edit text in the `.html` files (start with `index.html`).
- Replace `assets/profile.svg` with your own photo (e.g., `profile.jpg`) and update the `src`.
- Put your PDF at `cv/CV.pdf` and the top navigation **CV** link will work.
- Tweak colors, spacing, or fonts in `assets/style.css`.
- The small script in `assets/script.js` highlights the current page in the nav.

## Local preview (optional)

You can simply open `index.html` in your browser. For a nicer local server:

- Python 3: `python -m http.server` (then open http://localhost:8000)

## Custom domain (optional)

- Buy a domain (e.g., from a registrar).
- In your repo, add a file named `CNAME` containing your domain (e.g., `yourname.dev`).
- In GitHub: **Settings → Pages → Custom domain**, enter your domain and enable HTTPS.
- Set DNS `A`/`ALIAS` or `CNAME` records per GitHub Pages docs.

## Notes

- This site is plain HTML/CSS: no build steps, easy to maintain.
- If you later want a blog or templates, you can migrate to Jekyll or another static site generator and keep the same content structure.

© 2025 Your Name
