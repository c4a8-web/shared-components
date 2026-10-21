# Nuxt // Nuxt Module

This project is a nuxt module that is consumed by several sites.

Right now the nuxt project is located in the "nuxt" folder. In order to use storybook to develop you need to switch to "nuxt".

There you can start storybook via:

```
npm run storybook
```

The first time you start storybook you need to create a valid nuxt build via:

```
npm run build
```

So a .nuxt folder is present, which holds the types that are extended.

All the source files are located in "nuxt" too. Outside sites will use the
dist (distribution) files that are generated when you create a new version
and commit those files.

// TODO automate the distribution on new commits of the source files.

# Development

While your site is linked to this package you can use the update command to
update your distribution files and therefore reload your site by:

```
npm run update
```

# New Patch // New Version

To force the sites that consume this nuxt module to update and use your changed
code, you need to create a new patch or version otherwise you don't have consistent
updates.

You can do this by running:

```
npm run patch
```

or

```
npm run new-version
```

# Adding a New Language

Follow the agent contract in [contracts/add-language.md](contracts/add-language.md). It
covers the translation catalogs, the `onlyLanguage*` cross-keys, the conclusion-word
selectors in `_richtext.scss`, and regenerating `dist/`.
