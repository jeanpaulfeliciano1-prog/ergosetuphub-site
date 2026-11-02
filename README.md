# ErgoSetupHub site (Astro)

Static site for ergosetuphub.com. Products live in one file: `src/data/categories.json`.

## Change a product
Edit `src/data/categories.json` (name, label, description, Amazon link) and commit. The site rebuilds and
deploys itself in about a minute.

## Product photos
Each product has an `"image"` field. Leave it `""` to show the category icon tile. To show a photo, set it to
`"/products/file-name.jpg"` and put the file in `public/products/`.

**Amazon's rules:** do NOT download photos from Amazon product pages and upload them here. Amazon's Associates
agreement does not allow self-hosting Amazon images, and doing so can get the Associates account closed. Use
photos you are allowed to host, such as:
- the manufacturer's own press / media-kit images (check each brand's usage terms),
- your own photos of products you own,
- images served through Amazon's official Associates tools (Creators API), which must link to the matching product.

If you use Amazon-supplied images, each photo must link to the same product with your tag.

## Preview on your computer (optional)
Needs Node.js 22.22 or newer.

    npm install
    npm run dev      # live preview at http://localhost:4321
    npm run build    # builds to ./dist

## Deploy (GitHub Pages)
Settings -> Pages -> Source: **GitHub Actions**. Every push to `main` builds and publishes.
`public/CNAME` keeps the custom domain ergosetuphub.com.
