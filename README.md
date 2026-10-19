# EduLearn static educational website

A responsive, frontend-only educational website. It does not need a database, API, account, or backend.

## Run the website
- Easiest: open `index.html` in a browser.
- Recommended for local development: from this folder run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Included
- Responsive home page and course cards
- Course search and subject filter
- Study notes with downloadable sample `.txt` revision sheets
- Educational video search links
- Mobile-friendly navigation

## Edit the content
Open `script.js` and edit the `courses`, `notes`, and `videos` arrays. The notes download as text files on purpose so the demo works without a backend or external file hosting. Video links open YouTube search results; replace them with specific video URLs if you prefer.

## Publish it
Upload the `website` folder to GitHub Pages, Netlify, or Vercel as a static site. No build command is required. After publishing, copy the public website URL into the mobile app's `App.js`.
