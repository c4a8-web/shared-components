# Products house style

The visual and structural system that sendman.com, realmjoin.com and konnekt.io share, written down from the code on 2026-10-16. Until now it existed only as components, header comments and the memory of the sessions that built the sites. The theme (colours, fonts, the shared components) lives in this repository; the product page blocks still live in each site repository and are kept in step by hand, so this document names the reference implementation of every rule. Where the three sites disagree, §14 lists the divergence; the rule stated in the body is the one new work follows.

Readers: web colleagues extending a product site, Claude sessions working on one, the web pipeline's review and lint steps.

## 1. Principles

- **One system.** A reader who knows one product site knows the others: same section anatomy, same blocks, same chips and tables, same hero recipe in the product's colour.
- **The theme decides colours and fonts.** Blocks use theme tokens (`--color-primary`, `--color-copy`, `--color-bg-grey`, …) and the site tokens of `app.vue` (§4); a literal colour appears only inside a block-local custom property with a documented purpose.
- **Light surfaces.** Sections are white or grey; the hero is the product colour; dark "ink" surfaces exist only inside console panels and screen mocks. No dark mode, no theme switch.
- **No web fonts, no new dependencies, no external scripts** beyond Cloudinary images and the shared tracking. Charts are CSS, diagrams are markup or inline SVG, canvases are plain 2D canvas.
- **Components are content-free.** Copy, example data and links arrive as props or slots from the page (or the locale file); record-like data lives in `content/*.json`.
- **Motion only where it demonstrates** the product (a rollout, an SMTP session, an enrollment screen) and always with a still or finished state under `prefers-reduced-motion`. No scroll-driven effects.
- **Accessible by construction:** keyboard-operable demos, `aria-pressed` on toggles, radio groups in fieldsets, `aria-live="polite"` on results, `scope` on table headers, tables in an `overflow-x: auto` wrapper, mocks `aria-hidden` with a visible "Example data." note where figures could be mistaken for real ones.
- **Facts have sources.** Numbers and hosting, privacy and compliance statements come from `content/facts.json` with `value`, `source` and `note`; nothing unverifiable goes on a page.

## 2. Page skeleton

- **Home:** `home-hero` with the product's signature visual (sendman: an animated SMTP session in a framed screen; realmjoin: the fleet canvas; konnekt: the Explorer simulation), then sections alternating white and grey, then the closing contact block or `cta-band`. A section on the primary colour (sendman's session walkthrough, the shared `step-list` on `var(--color-primary)`) is allowed once on the home page; konnekt allows one ink section ("Under the hood").
- **Product and audience pages:** `page-hero` (eyebrow, headline, subline, facts row, jump links, a mock in the visual slot), the page's sections as `feature-split` and the other blocks in a fixed order with stable ids, a `capability-grid` for the exhaustive list and for related pages, `cta-band` at the end with `footer.noMargin`.
- **Navigation and footer** come from the shared header and footer with the site's `content/header.*` and `content/footer.*`; pages never set header meta.
- **Section ids are stable**: navigation deep links, `llms.txt` and structured data point at them.

## 3. Section anatomy

Reference: `capability-grid.vue` on sendman.com; every section-level block repeats it.

```html
<section class="block" :class="{ 'block--grey': background === 'grey' }" :id="id">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 block__head">
        <span v-if="eyebrow" class="block__eyebrow">{{ eyebrow }}</span>
        <component :is="headline.level || 'h2'" class="headline h2-font-size">{{ headline.text }}</component>
        <p v-if="subline" class="block__subline font-size-2">{{ subline }}</p>
      </div>
    </div>
    <div class="row"><div class="col-12"><!-- content --></div></div>
  </div>
</section>
```

```css
.block          { padding: 6rem 0; background-color: #fff; color: var(--color-copy); }
.block--grey    { background-color: var(--color-bg-grey); }   /* #f1f3f4 in every theme */
.block__eyebrow { display: block; margin-bottom: 0.5rem; font-size: 1.125rem; font-weight: 700; }
.block__subline { margin-top: 1rem; margin-bottom: 3.5rem; }
```

- Eyebrows are written in caps in the content ("THE PROBLEM", "PLATFORM"); there is no `text-transform`.
- Put the 3.5 rem bottom gap on `.block__head` and the subline's bottom margin to 0 when a head may have no subline (realmjoin and konnekt `capability-grid`, `data-table`).
- Half-step blocks: `feature-split` and `fact-strip` use 4.5 rem; `works-with` 1.75 rem with a bottom hairline.
- Heroes: 7 rem top and bottom, 10 rem / 9 rem from 992 px. `cta-band`: 0 top, 6 rem bottom (7 rem from 992 px), its edge strip 4 rem / 5 rem below.
- The `background` prop is a keyword, `"white"` (default) or `"grey"`; the page alternates them by hand. Two other props take CSS colour strings instead: `edgeBackground` on `cta-band` (the colour of the section above) and `background` on the shared `step-list` (`var(--color-primary)` on the home pages).
- Page-owned sections copy the anatomy with page-scoped CSS (`padding: 6rem 0`, `__subline { margin: 1rem 0 3.5rem }`).

## 4. Tokens

Theme tokens the blocks rely on (`nuxt/src/assets/scss/themes/_<theme>.scss`, `_colors.scss`): `--color-primary` (sendman `#2e96e2`, realmjoin `#f8842c`, konnekt `#0072c6`), `--color-primary-accent` (`#226ea6`, `#c66a23`, `#00508b`), `--color-copy` and `--color-headlines` (`var(--color-products-dark-blue)` `#011e33` everywhere), `--color-bg-grey` (`#f1f3f4`), `--color-copy-light` (`#fff`), `--color-link` and `--color-link-hover`, `--color-surface-background` (set to `#fff` where shared `event` cards sit on grey).

Site tokens, defined once in `app.vue` and read by every local block through an alias with the same fallback (`--capability-line: var(--color-line, #e3e7ea)`):

| Token | Purpose | sendman | realmjoin | konnekt |
|---|---|---|---|---|
| `--color-hero-background` | the hero surface | `var(--color-gk-light-blue)` `#5cbbff` (hard-coded in the heroes) | `var(--color-primary)` | `var(--color-primary)` |
| `--color-hero-copy` | text on the hero | dark (`--color-copy`) | dark | `#fff` |
| `--color-accent-text` | small labels, numbers, links in the accent at text contrast | `--color-primary-accent` `#226ea6` | `#a9561a` (5.2:1; the theme's `#c66a23` is 3.8:1) | `#00508b` (7.3:1) |
| `--color-line` | hairlines and card borders | `#e3e7ea` | `#e3e7ea` | `#d7e0ea` |
| `--color-muted` | secondary text | `#525f6d` | `#525f6d` | `#4f5d6b` |
| `--font-mono` | machine output | the stack below | same | same |
| `--color-folder` | konnekt only: Explorer folder yellow inside mocks | — | — | `#ffc83d` |
| `--color-ink` | konnekt only: the one dark section | — | — | `#011e33` |

Mono stack: `ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`.

Rule for new blocks: read the site tokens through an alias with the realmjoin fallback values; never hard-code `#e3e7ea` or `#525f6d` directly. (sendman.com has no token block yet and hard-codes the values per block, §14.)

## 5. Typography

- The theme font is Miriam Libre on all three sites; nothing else is loaded.
- Section headings are `h2.headline.h2-font-size` (the shared `.h2-font-size`: 3.75 rem at xl, lighter weight below lg, line height 1.4, colour `--color-headlines`); sublines `.font-size-2` (1.25 rem at lg, 1.125 rem at sm, line height 1.7). `feature-split` headings are smaller: 1.75 rem, 2 rem from 992 px, weight 700, line height 1.25.
- Hero headline `clamp(2.5rem, 4vw, 3.4rem)`, weight 700, line height 1.15, letter-spacing −0.01em; hero subline 1.5 rem / 1.4.
- Card titles 1.15625 rem / 600 / 1.3; card copy 0.9375 rem / 1.6 in `--color-muted`.
- **Mono is for machine output only:** package IDs, group names, versions, paths, log lines, registry values, policy names, code, and the mono labels of §7. Never for emphasis. Inline `code` in copy is reset to the copy colour, no background, 0.9em, `white-space: nowrap`.
- Platform mocks depict their platform and use its font stack (Segoe UI for Windows, the Apple system stack for macOS and iOS); nothing else deviates from the theme font.

## 6. Colour and surfaces

- Sections: white (`#fff`) and grey (`var(--color-bg-grey)`), alternating.
- Hero: `--color-hero-background` with `--color-hero-copy`; text on sendman's light blue and realmjoin's orange is dark, on konnekt's blue white.
- Accent for text, dashes, arrows, active states: `--color-accent-text`; accent fills use a tint of it (realmjoin `rgba(248,132,44,.08)` for the highlighted table column, konnekt `rgba(0,114,198,.07)`).
- Status colours on light surfaces: pass `#1f7a4d`, warn `#c28000`, fail `#b3392f`. On dark surfaces: ok `#3ab979`, warn `#e0a54a`, fail `#eb776a`, key `#8fd3ff`, string `#ffd08a`.
- Microsoft blue (`var(--color-gk-mid-blue)`) marks Microsoft's side in a diagram and appears nowhere else.
- Ink palette for console panels and framed screens (sendman origin): 900 `#040e1a`, 800 `#0d1926`, 700 `#192532`, 600 `#273442`, 500 `#414f5d`, 400 `#728091`, 300 `#8b9aab`, 200 `#b0c0d1`. realmjoin's `console-panel` uses 800 `#0b1a2b`, 700 `#142639`, 100 `#e6edf4`; konnekt's a blue-shifted set (900 `#00111f`, 800 `#06304f`). The palette is scoped to the component.

## 7. Recipes

**Card** (reference `capability-grid.vue`): `padding: 1.5rem; border: 1px solid var(--color-line); border-radius: 4px`; box `#f8f9fb` on white sections, `#fff` on grey; grid gap 1.25 rem, `repeat(auto-fill, minmax(280px, 1fr))` then fixed 2 or 3 columns from 992 px; a lone last card in a two-column grid spans the full width between 768 and 991 px. A linked card covers itself with the title link's `::after { inset: 0 }`, hover sets the border to the accent, the title ends in an arrow in the accent colour. Points inside a card sit under a hairline, 1 rem gap, with an accent dash `::before` (0.625 rem × 2 px) and 1.25 rem indent.

**Mono labels:** group titles, indices and area labels are mono 0.75 rem / 500 / letter-spacing 0.15em / uppercase in `--color-accent-text` (spec-sheet group, FAQ index, ledger index, table group row). Hero facts and ledger indices use 0.8125 rem / 0.04em with an accent dash. Card `meta` lines 0.75 rem / 0.06em, no caps. The `works-with` label 0.6875 rem / 0.12em caps in muted. Table heads 0.6875 rem / 600 / 0.12em caps in muted, in the theme font, not mono.

**Chips:** mono 0.625 rem / 500 / 0.12em / line height 1 / uppercase, padding 0.3125 rem 0.5 rem, radius 2 px. Tones: neutral `rgba(82,95,109,.12)` with muted text; pass `rgba(31,122,77,.12)` / `#1f7a4d`; warn `rgba(194,128,0,.12)` / `#c28000` (also the "Preview" badge); fail `rgba(179,57,47,.12)` / `#b3392f`; accent at 12 % of the accent; active: accent background, white text; `--mono` variant without caps at 0.04em. On the hero or dark surfaces: amber `rgba(255,210,122,.18)` with a 1 px `rgba(255,210,122,.6)` border and `#ffd27a` text.

**Filter pills:** 1 px line, radius 999 px, padding 0.375 rem 0.875 rem, 0.875 rem / 600 in muted; `aria-pressed="true"` gives `--color-copy` background and white text. Rows carry `tags`; hidden rows use the `hidden` attribute.

**Tables** (`data-table`): section anatomy around a `<table>` in an `overflow-x: auto` wrapper; `scope` on headers; optional groups, filters, a `check` mode rendering ✓ and —, a `highlight` column with the accent tint and a 2 px accent rule on its head, a `note` below.

**Console panel:** the only dark surface; radius 8 px (sendman's inline terminals 4 px), 1 px ink-600 border, mono 0.8125 rem / line height 1.9, a bar at 0.75 rem / 0.06em caps with a green dot, optional tabs whose active tab carries a `--color-primary` border, line tones `--muted`, `--ok`, `--warn`, `--fail`, `--key`, `--string`. Copyable snippets use the shared `code-block` instead.

**Mocks:** realmjoin's `mock-portal-window` frames a portal: 1 px line, radius 8 px, shadow `0 10px 40px 10px rgba(1,30,51,.08)`, bar `#f8f9fb`, rail in `--color-copy`; inside it data-driven primitives (`mock-table`, `mock-kv`, `mock-cards`, `mock-chips`, `mock-kpis`, `mock-store-grid`, `mock-form`). konnekt's platform mocks (Explorer, Finder, Excel, menu bar, iPhone) draw the platform in its own look with the house shadow `0 30px 70px -28px rgba(6,36,67,.45), 0 10px 24px -14px rgba(6,36,67,.25)`. All mocks are `aria-hidden`, carry "Example data." where figures appear, and keep their example data in the page.

**Hero:** `<section>` `position: relative; overflow: hidden` on `--color-hero-background` with `<svg-shape-animation>` stretched behind (`position: absolute; inset: 0`), the container at `z-index: 1`; grid areas intro / device / cta / badges, from 992 px two columns (sendman `1.2fr 1fr`, realmjoin `7fr 5fr` with the device pinned to the screen's right edge, konnekt `6fr 5fr` with the demo full width beneath); the framed screen `border: 10px solid #0d1926; border-radius: 14px; background: #040e1a; box-shadow: 0 30px 60px -24px rgba(4,14,26,.55)`, max-width 40 rem; buttons as `<cta skin="primary is-cutoff" :on-surface="true">` (secondary `secondary is-cutoff`); badges as `v-img` at `min(100%, 27rem)`; the angled edge `<svg-shape align="bottom" peak="left" :obliquity="4">`, peaking right when a visual is present; `edge: false` keeps partner cards on the coloured stage.

**Closing band** (`cta-band`): the hero colour again, headline, copy, two buttons, the shared `svg-shape` angling into it from the colour of the section above (`edgeBackground`); the page sets `footer.noMargin`.

**Feature split** (`feature-split`): text column (heading, HTML copy, points, link, note) beside the visual slot, `flip` puts the visual left, 4.5 rem padding, `background` white or grey, `headline.badge` adds a chip.

## 8. Blocks

Reference implementation in brackets. "S/R/K" marks where a block exists.

| Block | S | R | K | Purpose |
|---|---|---|---|---|
| `home-hero` [S, R extends with the visual slot] | ✓ | ✓ | ✓ | the home stage with the signature visual |
| `page-hero` [R] | ✓ | ✓ | ✓ | every other page's stage: eyebrow, headline, subline, facts, jump links, visual slot, meta slot (blog), default slot (cards on the stage) |
| `capability-grid` [R] | ✓ | ✓ | ✓ | card grids, 2 or 3 columns, linked cards, meta line, points, `bare` inside page-owned sections |
| `spec-sheet` [S] | ✓ | ✓ | ✓ | grouped key/value data sheet |
| `faq-list` [R] | ✓ | ✓ | ✓ | native `<details>` accordion, HTML answers, FAQPage schema added by the page |
| `feature-split` [R] | – | ✓ | ✓ | text beside a visual |
| `gap-ledger` [R; recipe from S `ways-out`] | (`ways-out`) | ✓ | ✓ | numbered pain → answer rows |
| `data-table` [R] | – | ✓ | ✓ | tables with groups, filters, check mode, highlight column |
| `fact-strip` [R] | – | ✓ | ✓ | big numbers with rules |
| `console-panel` [R] | (inlined) | ✓ | ✓ | the dark panel |
| `cta-band` [R] | – | ✓ | ✓ | closing band |
| `works-with`, `data-flow`, `stat-bars`, `usage-chart`, `changelog-list` | – | ✓ | – | realmjoin-specific blocks (strip, four-zone diagram, bars, chart, dated list) |
| `ways-out`, `session-walkthrough`, `policy-playground` | ✓ | – | – | sendman-specific blocks |
| `numbered-steps`, `list-pair` | – | – | ✓ | konnekt-specific; `numbered-steps` exists because the shared `step-list` steps are plain HTML and cannot hold components |
| `content/at-a-glance`, `content/ProseA`, `content/ProseTable` | ✓ | ✓ | – | blog components |

Every block starts with a header comment (what it is, where it is used, what it expects), declares props with `{ type, default }` and a comment per prop, uses scoped CSS with block-local custom properties, BEM-ish class names and `@media (min-width: 992px)`.

Demos (`components/demo/*`) and mocks (`components/mock/*`) follow one contract: a meaningful server-rendered default state, keyboard operation, `aria-live` on results, a still or instant state under reduced motion; logic in the component, copy in the page or locale file, scenario data in `content/*.json`. `Math.random` and `new Date()` only on user action, ids from `useId()`, dates formatted by hand, animations started after hydration.

## 9. Naming and shadowing

Nuxt auto-imports local components over shared ones, and a prop name can shadow a shared component inside a template. Therefore:

- Never name a local component `faq`, `timeline`, `table`, `tag`, `badge`, `icon`, `search`, `stats`, `grid`, `card`, `list`, `screenshot`, `code-block`, `modal`, `teaser`, `hero`, `headline`, `cta`, `contact`, `event`, `wrapper`, `slider`, `content`, `back`, `circle`, `accordion`, `services`, `prose` (the shared component names; `table` is `v-table` there).
- Never name a prop or a page-level constant `cta`, `contact`, `event`, `hero`, `wrapper`, or `headline` as a plain string. Buttons are `button` (one) or `buttons` (a list); headings are `headline: { text, level }`. The dev log says "missing template" when it happens.
- Folder prefixes give the tags: `components/mock/table.vue` is `<mock-table>`, `components/demo/rollout-planner.vue` is `<demo-rollout-planner>`.

## 10. Content

- One constant per section in the page, passed with `v-bind`; the component holds no copy. Record-like data (facts, changelog entries, runbook definitions, policies, releases) lives in `content/*.json` and is imported.
- `content/facts.json`: `{ "<key>": { "value", "source", "note" } }`, precedence code over documentation over draft; realmjoin adds a `_localized` map of per-locale overrides read by `composables/useFacts.js`; konnekt's `useFacts` returns null for a fact whose `source` starts with `PENDING`, and the page then drops the sentence.
- Sites with the translation pipeline (konnekt.io, realmjoin.com since October 2026): all copy lives in `i18n/locales/en.json` under `content.<page>` and `common`; pages define `const t = (key) => $t(\`content.<page>.${key}\`)`; `$t` returns subtrees, so arrays and objects are read whole; HTML leaves are `{ "html": "…" }`; the other locale files are generated and never edited by hand; pushing a change to `en.json` on a built branch starts the translation workflow, whose rolling pull request merges into that branch. Internal links inside HTML copy are written with the locale prefix (`/en/...`) and `class="custom"`.
- Example data is fictional and labelled "Example data." (konnekt: `common.exampleData`).
- Blog posts: Markdown in `content/en/blog/` with `title`, `description`, `date` (ISO 8601 with offset), `author`, `seo` and `outro`; links get `class="custom"` through `ProseA`; numbers follow `facts.json` by hand.

## 11. SEO, structured data, llms.txt, security

- Every page calls `useSeo({ title, description })`: titles under about 50 characters (" | Brand" is appended), descriptions under 155; the home page uses `titleTemplate: "%s"`. `app.vue` sets the default description and a 1200 × 630 social image.
- `app.vue` defines Organization (glueckkanja AG with the brand) and WebSite; the home page adds WebPage, SoftwareApplication (`featureList` from the module cards), FAQPage (via `hasPart`) and one Event node per upcoming event; every other page a WebPage variant (CollectionPage, ContactPage, AboutPage); pricing its own FAQPage.
- `public/llms.txt`: `# Brand`, a summary line, `## Key facts`, `## Pages`, `## Blog`; kept in line with the home page and `facts.json`; new posts are added by hand.
- `nuxt-security` runs in production only; the CSP is configured in `nuxt.config.js` and duplicated in `_headers`, both kept in sync; sendman and realmjoin also set a Permissions-Policy and cache rules. The CSP allows images only from self, data, Cloudinary and YouTube thumbnails, fonts from self and CloudFront; no inline third-party scripts.
- Viewport: no zoom lock (`user-scalable` and `maximum-scale` are not set).

## 12. Gotchas from the shared stylesheet

- `svg { margin-bottom: -8px }` is global; reset it on icon classes.
- Every link is coloured through `a:not(.btn):not(.custom):not(.nav-link):not(.cta):not(.page-link):not(.dropdown-item)`; a link with its own style needs `class="custom"`.
- `left: true` on the shared `text-image` means text left, image right.
- The shared header renders dropdown children on the client only; links that must be in the static HTML need a second home (band, footer, `llms.txt`).
- The shared `v-img` can log a check-only hydration mismatch (`sizes`), the shared `event.vue` warns about duplicate keys at build; both are shared-components bugs, not page defects.
- Local `v-for` keys are usually content strings (titles, points, labels); keep them unique within a block.

## 13. What the pipeline lints

Derived from the rules above; a violation blocks the review step of the web pipeline.

1. No literal colour outside a block-local custom property; `#e3e7ea`, `#525f6d` and friends only as token fallbacks.
2. No local component or prop with a shadowing name (§9).
3. No copy in `components/*`; on i18n sites no copy in `pages/*` either.
4. No number in copy that does not come from `facts.json` (digits in `en.json` or page constants are flagged unless the key is a fact placeholder or marked example data).
5. Every section-level block has an `id` when the page links to it.
6. HTML links in copy carry `class="custom"`.
7. No `font-family` other than the mono stack, the theme font or a platform stack inside `components/mock/` and `components/demo/`.
8. No new dependency in `package.json`, no external script or stylesheet in a page.

## 14. Known divergences

Open until someone decides; new work follows the rule in the body.

| Topic | sendman | realmjoin | konnekt | Proposal |
|---|---|---|---|---|
| Hero buttons | `button` object | `button` object | `buttons` array | `buttons` array, `button` kept as an alias |
| Hero text | dark on light blue | dark on orange | white on blue | per site via `--color-hero-copy`; sendman and realmjoin should define it |
| Site tokens | none, values hard-coded per block | defined, sendman fallbacks | defined, own fallbacks (`#d7e0ea`, `#4f5d6b`) | add the token block to sendman; one fallback set everywhere |
| Accent tints | – | `rgba(248,132,44,.08)` | `rgba(0,114,198,.07)` | derive from the accent as a token (`--color-accent-tint`) |
| `feature-split` columns | – | 5/7 fixed | 6/6, `wide` gives 5/7 | 5/7 default, `wide` dropped |
| `capability-grid` columns | 3 | 2 or 3 | 2, 3 or 4, plus a `dark` background | 2 or 3, no dark cards outside the ink section |
| `faq-list` | plain text, no background | HTML answers, background | HTML answers, background, HTML subline | realmjoin's |
| Card grid min width | 280 px | 280 px | 260 px | 280 px |
| Console panel | inlined in three blocks | component, radius 8 | component with copy button | realmjoin's component plus konnekt's `copyable` |
| Steps | shared `step-list` | shared `step-list` | own `numbered-steps` | fix the shared `step-list` so steps can hold components |
| Permissions-Policy, cache rules | yes | yes | missing | add to konnekt |
| Viewport zoom lock | rejected | rejected | still set | remove on konnekt |
| Social image, Twitter card | 1200 × 630, large | 1200 × 630, large | icon, `summary` | align konnekt |
| Dead code | – | `ProseTable` header claims a sendman twin that does not exist | `migration-teaser` unused, no header, `$t` inside | fix the comment, delete the component |
| realmjoin `CLAUDE.md` | – | predates the i18n port and the `useFacts` composable | – | update |

The long-term fix for most rows is the same: move the blocks into this repository (`nuxt/src/components/products/`), give them the token block as a mixin, and let the sites delete their copies.
