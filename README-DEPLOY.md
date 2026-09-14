# Getting ergosetuphub.com back online

This folder is a complete, working replacement site for ergosetuphub.com — an ergonomic
home-office product guide monetized with your Amazon Associates ID (`jeanventures2-20`,
already built into every "Check price on Amazon" link).

It does not depend on Manus or any AI website builder, so this kind of outage can't
happen to it again. Below are two ways to get it live, and the exact DNS changes to
make at GoDaddy either way.

## Important note on the GoDaddy API key

I tried to use the GoDaddy API key/secret you shared to update DNS automatically, but
this cloud environment's network policy blocks outbound calls to api.godaddy.com, and
I also couldn't reach your linked computer to run the update from there. Since that key
was pasted into a chat, it's good practice to regenerate it in your GoDaddy Developer
Console (https://developer.godaddy.com/keys) once you're done here, even though nothing
was done with it. The manual DNS steps below take about 5 minutes either way.

## Step 1: Put the site somewhere it can be served from

**Recommended: GitHub Pages (free, no coding, very reliable)**

1. Create a free account at github.com if you don't have one.
2. Click "New repository." Name it anything (e.g. `ergosetuphub-site`). Keep it Public.
3. On the new repo's page, click "uploading an existing file" and drag in every file
   and folder from this package (`index.html`, `about.html`, `disclosure.html`, and the
   `assets` folder). Commit the upload.
4. Go to the repo's **Settings → Pages**.
   - Under "Build and deployment," set Source to "Deploy from a branch," branch `main`,
     folder `/ (root)`. Save.
   - Under "Custom domain," type `ergosetuphub.com` and Save. GitHub will add a `CNAME`
     file to your repo automatically.
5. Leave this tab open — you'll come back to check the "DNS check successful" status
   and turn on "Enforce HTTPS" once Step 2 is done.

**Alternative: any other static host** (Netlify, Cloudflare Pages, or your GoDaddy
hosting plan if you have one) — the files are plain HTML/CSS/JS, so they'll work
anywhere. If you tell me which one you'd rather use, I can give you exact steps for it.

## Step 2: Point GoDaddy's DNS at it

In your GoDaddy account: **My Products → ergosetuphub.com → DNS → Manage DNS**, then:

1. Delete any existing `A` record(s) for `@` (the root domain) if present.
2. Add four `A` records, all with name `@`, pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add (or edit) a `CNAME` record: name `www`, value `<your-github-username>.github.io`.

DNS changes usually take effect within 15–60 minutes, sometimes up to a few hours.
Once GitHub's Pages settings show "DNS check successful," check the "Enforce HTTPS" box
so the site loads securely.

## Step 3: A couple of things to personalize

- `disclosure.html` currently lists `contact@ergosetuphub.com` as a placeholder contact
  address — set up that mailbox (GoDaddy offers email hosting) or swap in an address you
  actually check.
- The product picks are well-known, real products with general editorial descriptions —
  swap in different ones any time by editing the `.pick` blocks in `index.html`; each
  Amazon link already carries your `jeanventures2-20` tag.

## If your computer reconnects to this session

I can drive a browser directly to do the GitHub upload and the GoDaddy DNS edits for
you, instead of you doing it by hand — just let me know and I'll pick that back up.
