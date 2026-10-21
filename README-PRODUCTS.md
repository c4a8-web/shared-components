# Products

## How to add a new product

In the Shared-Components:

- [ ] Add a new scss file to the "nuxt/src/assets/scss/themes" folder. The file should be named like the theme and should contain the theme related styling. It is usually best to copy an existing theme and adjust the colors and variables.
- [ ] (optional) Check if the new product should be visible at the secondary nav that has shortcuts to all products (top left). Add an entry if it should be there in "secondary-navigation.js".

In Cloudinary/CDN:

- [ ] Upload the logo and the other assets for the new product to cloudinary and check that you mirror the paths and file names, so they are consistent.

In Google Tag Manager:

- [ ] (optional) Add a new Tag for the new product

In the new Site:

- [ ] Copy Project from existing one
- [ ] Adjust siteicon
- [ ] Rename name in package.json + lock file
- [ ] Adjust site.url in nuxt.config.js
- [ ] (optional) Adjust googleTagManagerId in nuxt.config.js with the Tag ID from GTM
- [ ] Adjust theme parameter for shared-components in nuxt.config.js so it has the name of the new theme that was defined in the Shared-Components
- [ ] Adjust useSeoMeta + useSeo in app.vue
- [ ] Search for the name of the product you copied over the whole project. Adjust the places that are actually for the site and are not general information about other products

In all products sites:

- [ ] (optional) Rebuild all sites for secondary nav to update, if there were updates to it.

## House style of the product sites

The visual and structural system that sendman.com, realmjoin.com and konnekt.io share is documented in [docs/products-house-style.md](docs/products-house-style.md): section anatomy, tokens, recipes, the block catalogue, naming and content rules, what the web pipeline lints, and the known divergences between the sites.
