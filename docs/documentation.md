**Environements**
local --> Dev
main branch --> PRE-PRD
gh-pages branch --> PRD

**Setup & Deployment**
Install Vite
Setup Tailwind with Vite
Add tailwind plugin in vite config; Add base in Vite config
Install gh-pages (guide https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3)
Use package.json config base: '/'
CNAME file for custom domain
Added React JSX later to the project --> change index.html, rename main.js to main.jsx, add react plugin to vite vonfig

**Code**
HTML
TAILWIND CSS
REACT JSX

**Libraries & Frameworks**
VITE --> Build tool & dev server
REACT --> UI library
TAILWIND --> Utility-first CSS framework
REACT ROUTER DOM --> Client-side routing
REACT ICONS --> Icon library
GH-PAGES --> GitHub Pages deployment

**Formatter**
Prettier configured

**Relevant project structure**
/dist/ --> Production Environment which gets published to Github Pages

/public/ --> Static assets directory
/public/CNAME --> Custom Domain Name for Github Pages

/src/ --> Source code directory
/src/main.jsx --> React JSX entry point (ReactDOM render root)
/src/app.jsx --> Root component (main app logic & routing)
/src/style.css --> Global stylesheet with Tailwind imports
/src/components/ --> Reusable React components
/src/components/navbar.jsx --> Navigation bar component

index.html --> Main HTML entry point
package.json --> Project dependencies and scripts
vite.config.js --> Vite configuration file
README.md --> Project README

**Development & Deployment**

### npm run dev

Start local development server - dev preview

### npm run build

Build production-ready files to `/dist/`.

### npm run preview

Serve the production build locally from `/dist/` for final preview checks.

### git add .

### git c -m "message"

### git push

### npm run deploy

Build the project and deploy the contents of `/dist/` to the `gh-pages` branch,
which is used by GitHub Pages.
