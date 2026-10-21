# Agent Contract: Add a New Language to the Shared Components Nuxt Module

This contract defines the exact, complete set of changes required to add a new UI language
(locale) to this Nuxt module. An agent following this contract MUST perform every step and
MUST pass the verification checklist before committing. Reference example: commit
`9fd7cf429` ("feat(lang): add sv") — note that it is *incomplete* per this contract, see
[Known pitfalls](#known-pitfalls).

## Inputs

| Input | Description | Example |
| --- | --- | --- |
| `CODE` | Lowercase ISO 639-1 locale code | `sv` |
| Translations | Values for every key of the `en` block in `nuxt/locales/global.js` | — |
| Conclusion word | The language's word for "Conclusion" (used as a heading ID in richtext styling) | `Slutsats` |
| About word | The language's word for "About" (same mechanism, prefix-matched) | `Om` |
| Privacy-policy path | Localized privacy-policy URL used in form consent text | `/sv/integritetspolicy` |

## Ground rules

1. **Only edit source files under `nuxt/`.** The directories `nuxt/src/runtime/**`,
   `nuxt/dist/**` and the repo-root `dist/**` (including all `.d.ts` files and
   `dist/styles/*.css`) are **generated**. Never hand-edit them; regenerate them in
   Step 6 and commit the output.
2. Keys must be in **exact parity** with the `en` locale block — same keys, same nesting
   (including the nested `form.event` object). No missing keys, no extra keys, **no
   duplicate keys** within a block.
3. All steps are mandatory. A language is not "added" until every step is done.

## Steps

### 1. `nuxt/locales/global.js` — main translation catalog

a. Add a new top-level `CODE: { ... }` block mirroring **every** key of the `en` block,
   including the nested `form.event` object. In `form.event.dataprotection`, link the
   **localized** privacy-policy path (input above), not the German/English one.

b. Inside the new block, the `onlyLanguage*` keys must cover the new language itself
   **and** all previously existing languages:
   `onlyLanguage`, `onlyLanguageDE`, `onlyLanguageEN`, `onlyLanguageES`, … plus one per
   any other locale already present.

c. **Update every existing locale block** (`de`, `en`, `es`, `sv`, …) with a new key
   `onlyLanguage<CODE-UPPERCASE>` (e.g. `onlyLanguageSV: 'Nur Schwedisch'`). This is
   required because `nuxt/utils/tools.js` builds the key dynamically:
   `translateFn('onlyLanguage' + lang?.toUpperCase())` — a missing key renders as the raw
   key string in the UI.

### 2. `nuxt/utils/lang.js` — legacy `LangData` object

Add a `CODE: { ... }` block with exactly these keys (mirror the existing blocks):

```
loadMorePosts, tags, tagsHeadline, tagsClear, posts, follow,
similarPosts, withAuthor, vatInfo
```

### 3. `nuxt/src/assets/scss/_richtext.scss` — conclusion heading styling

Richtext headings whose ID is the language's word for "Conclusion" get a highlighted
petrol box. The heading ID is derived from the heading text by the markdown renderer, so
the new language's conclusion word **must be added as ID selectors**, otherwise the
conclusion box silently does not render for that language.

There are **two** selector lists to extend, both inside the `h2, h3, h4 { ... }` rule:

a. The main selector list (currently ends with `&#Fazit, &#fazit, &#Conclusion,
   &#conclusion`): add the capitalized **and** lowercase variant of the new word, e.g.

   ```scss
   &#Slutsats,
   &#slutsats {
   ```

b. The margin-override list further down (currently `&#fazit, &#conclusion, &#slutsats`):
   add the **lowercase** variant there, matching the existing pattern.

Also check the `about`/`über` selectors in the same rule (`&[id='about']`,
`&[id^='about-']`, …): if product sites publish an "About" heading in the new language,
add the language's About word with the same four variants (exact + prefix, capitalized +
lowercase).

> **Diacritics warning:** the CSS selector must match the ID the renderer actually emits.
> If the conclusion word contains non-ASCII characters (e.g. Spanish *Conclusión*),
> render a test page and copy the generated `id` attribute verbatim instead of guessing.

### 4. `nuxt/nuxt.config.ts` — dev/storybook i18n config

Add `CODE` to the `i18n.locales` array (currently `['de', 'en', 'es']`). This only
affects local development and Storybook, but without it the new locale cannot be tested
inside this repo.

### 5. Consuming sites (out of scope, but flag it)

Product sites configure their own locale lists. Adding a language here does not enable it
on any site; note in the PR/commit description that consuming sites must opt in.

### 6. Regenerate the distribution

```bash
cd nuxt
npm run update
```

This runs `copy-components.js` (copies `locales/`, `utils/`, `components/`, … into
`nuxt/src/runtime/`), `nuxt-module-build` (emits JS + `.d.ts`), `prepare-styles.js`
(compiles SCSS → `dist/styles/*.css`, so the richtext change lands in CSS), and
`move-module.js` (moves the output to the repo-root `dist/`). **Commit the generated
files together with the source changes** — consuming sites use `dist/`.

### 7. Version bump and commit

- Bump the package version so consuming sites pick up the change: `npm run patch`
  (or `npm run new-version` for a minor bump), run from `nuxt/`.
- Commit message convention: `feat(lang): add <CODE>`.

## Verification checklist (all MUST pass)

- [ ] `nuxt/locales/global.js`: the new block has exactly the same key set as `en`
      (including nested `form.event`); no duplicate keys inside the block.
- [ ] Every locale block (old and new) contains `onlyLanguage<XX>` for **every** locale
      in the file, plus its own `onlyLanguage`.
- [ ] `nuxt/utils/lang.js` has the new block with all 9 keys.
- [ ] `nuxt/src/assets/scss/_richtext.scss` contains the new conclusion word in **both**
      selector lists (capitalized + lowercase).
- [ ] After `npm run update`: the conclusion word appears in `dist/styles/index.css`
      (`grep -i <word> dist/styles/index.css`), and `dist/runtime/locales/global.js` +
      `dist/runtime/utils/lang.js` contain the new locale.
- [ ] `nuxt/nuxt.config.ts` `i18n.locales` includes the new code.
- [ ] `form.event.dataprotection` links the localized privacy-policy path.
- [ ] No hand edits under `nuxt/src/runtime/**` or `dist/**` — only generated output.

## Known pitfalls

Observed in the original `sv` commit (`9fd7cf429`), fixed in a follow-up — this contract
exists to prevent repeating them:

- Existing locales (`de`, `en`, `es`) were **not** given an `onlyLanguageSV` key
  (violates Step 1c).
- `sv` was **not** added to `i18n.locales` in `nuxt/nuxt.config.ts` (violates Step 4).
- The Swedish conclusion word (`Slutsats`/`slutsats`) was **not** added to
  `_richtext.scss` (violates Step 3).
- The `sv` block in `global.js` copied the duplicate `posts`/`follow` keys that the
  older locale blocks carry for historical reasons. Do **not** replicate the duplicates
  in new blocks (`es` even has conflicting values: `posts: 'Puestos'` vs `'Entradas'` —
  the last one silently wins).

## Word reference

> **The table is a starting point, not the truth.** The word that matters is the one the
> translator *actually used* as the conclusion heading, and translations drift from the
> dictionary word (fi produced `Yhteenveto`, not `Johtopäätös`). After translating a
> language's content, verify against the real headings and extend the selectors if needed:
> `grep -rhoE '^#{2,3} \S+' content/<code>/ | sort | uniq -c` in the consuming site —
> every recurring conclusion-style heading word must appear in both `_richtext.scss`
> selector lists.

| Locale | Conclusion word (ID selectors) |
| --- | --- |
| `de` | `Fazit` / `fazit` |
| `en` | `Conclusion` / `conclusion` |
| `es` | *(missing — would be `Conclusión`, verify slugified ID)* |
| `sv` | `Slutsats` / `slutsats` |
| `no` | `Konklusjon` / `konklusjon` |
| `fi` | `Yhteenveto` / `yhteenveto` **and** `Johtopäätös` / `johtopäätös` *(the fi translations consistently produced "Yhteenveto" ("summary"), not the dictionary word — both are in the CSS since 2026-07-15)* |
| `da` | `Konklusion` / `konklusion` |
| `is` | `Niðurstaða` / `niðurstaða` *(verify slugified ID — diacritics)* |
| `it` | `Conclusione` / `conclusione` |
| `nl` | `Conclusie` / `conclusie` |
| `ko` | `결론` *(no case distinction; verify slugified ID)* |
| `ja` | `結論` **and** `まとめ` *(no case distinction; Japanese articles typically close with a "まとめ" heading, so both are covered — verify slugified ID against real content)* |
