# ErgoSetupHub site (Astro)

Static site for ergosetuphub.com. Products live in one file: `src/data/categories.json`.

## Change a product
Edit `src/data/categories.json` (name, label, description, Amazon link) and commit. The site rebuilds and
deploys itself.

## Preview on your computer (optional)
Needs Node.js 20+.

    npm install
    npm run dev      # live preview at http://localhost:4321
    npm run build    # builds to ./dist

## Deploy (GitHub Pages)
In the repo: Settings -> Pages -> Source: **GitHub Actions**. Every push to `main` then builds and publishes.
`public/CNAME` keeps the custom domain ergosetuphub.com.
