# Releases

# Release 0.4.125

- Adds an area variant to the team cards with an area label, accent color and CTA
- Adds an optional button field type to the form that emits a field-action event
- Adds a success slot and success/error handling for ajax form submissions
- Allows the cal-calendar to re-render its inline calendar

# Release 0.4.124

- Adds pipeline-based web translation with new languages (Swedish, Norwegian, Finnish, Danish, Icelandic, Italian, Dutch, Korean, Japanese) and locale-aware header, footer, secondary navigation and content links
- Adds a collapsible header with a new flyout design, info text, small CTA and an option to disable Cloudinary
- Adds a small CTA variant, a quote overlap option and a richtext conclusion box variant with a module option to opt out
- Adds a module hook for security.txt generation
- Reduces the page payload by passing only the active locale's header, footer and content data
- Fixes hydration issues in v-img, the lightbox and the blog-recent slider
- Fixes form labels mutating the shared form object when translated
- Removes stale SCSS components left over from the SFC migration

# Release 0.4.123

- Removes the 500 ms wait for update from the default gtag consent settings

# Release 0.4.122

- Fixes hydration mismatches by rendering the lightbox and dropdown teleports only after mount
- Fixes filter bar hydration by setting the active view in data and selecting the tag from the URL hash after mount
- Replaces nested anchors in the testimonial teaser with plain elements
- Adds the empty-state text for young professional job lists in English and Spanish

# Release 0.4.121

- Adds Sendman and Autopilot Monitor to the secondary navigation product list
- Renders the same tracking placeholder on the server and the client to avoid hydration mismatches
- Keeps the Google tag gateway health check off the wire
- Treats expired cookie writes as deletions in the tracking sessionStorage mirror
- Takes the header logo alt text from the home entry
- Removes a stray quote from the card body class attribute
- Fixes the ProseImg component by adding the missing import
- Pins GitHub Actions to commit hashes and restricts workflow permissions

# Release 0.4.120

- Aligns the post detail tags with the article content when an aside navigation is present

# Release 0.4.119

- Aligns small step list colors with the event component and adds a theme override for the step list copy color

# Release 0.4.118

- Fixes markdown images not rendering due to a missing import

# Release 0.4.117

- Adds automatic Cloudinary transforms (format, quality, width limit) to markdown images
- Limits markdown image width inside the aside wrapper
- Loads the Turnstile widget only when the form comes into view
- Removes the nuxt-swiper module dependency
- Fixes race condition when loading jQuery for the video slider

# Release 0.4.116

- Lazy loads the swiper, hero text-icon animation and less frequent icons for better performance
- Hydrates async components on idle

# Release 0.4.115

- Fixes tag blog link prefix when using an i18n strategy
- Fixes tag prerendering

# Release 0.4.114

- Exposes the shared components version number in the DOM
- Fixes double assets prefix in v-img
- Removes trailing chevron in the small step-list variant
- Fixes link-list style ordering issue

# Release 0.4.113

- Fixes the Sendman text underline color (highlight-second now uses light yellow)

# Release 0.4.112

- Adds a blurry fade option to the slider, enabled by default
- Adds a hover color to the slider controls
- Updates dependencies to remove a compromised package

# Release 0.4.111

- Adds schema.org structured data to event detail pages
- Adds a redirect for events without a detail page
- Fixes sidebar text alignment and prevents overflow
- Fixes carousel tile width

# Release 0.4.110

- Updates the simple-git dependency to a newer version

# Release 0.4.109

- Adds schema.org structured data for organization, events, authors and articles
- Improves slider controls styling and behaviour

# Release 0.4.108

- Fixes issue with duplicate id's

# Release 0.4.107

- Fixes issue with timeline component not showing entry text

# Release 0.4.106

- Fixes presorting before limiting items

# Release 0.4.105

- Migrates colors from figma into our codebase. Adjusted colors through all our components.

# Release 0.4.104

- Adds performance improvements to increase lighthouse score

# Release 0.4.103

- Fixes Job List and Job List Detail page to work with all languages

# Release 0.4.102

- Fixes job-list empty state

# Release 0.4.101

- Converted all components to single file components

# Release 0.4.100

- Add crossorigin anonymous to hero

# Release 0.4.99

- Add light prop to modal

# Release 0.4.97

- Adds a unique data key for useAsyncData calls to avoid duplicate content

# Release 0.4.95

- Fixes v-img picture tag generation

# Release 0.4.93

- Add Slot for Hero Component

# Release 0.4.91

- Fixes swiper Alert

# Release 0.4.90

- Add guardrail for service-overview
- Fix content-grid z-index issues
- Fix video-slider overvlow issue

# Release 0.4.89

- Add the option to add an image as the card product header

# Release 0.4.88

- Adds more itemprops to card and social post card
- Fixes date published format

# Release 0.4.87

- Adds itemprops to card and social post card

# Release 0.4.86

- Adds itemprops to social post card

# Release 0.4.84

- Adds Code Block component

# Release 0.4.83

- Fixes Contact Overlapping issue
- Adjusts colors for Event-Teaser Text and Cta

# Release 0.4.78

- Add Masonry Grid + Social Post Card component

# Release 0.4.70

- Fixes Post Detail Layout

# Release 0.4.69

- Changes the Post Detail to a Grid Layout for flexibility

# Release 0.4.68

- Add Shapes for multiple Structured Data Objects

# Release 0.4.67

- Adds anchor deeplinks to accordion

# Release 0.4.66

- Fix Modal issue without applications

# Release 0.4.65

- Fixes Form handling

# Release 0.4.62

- Adds Open Graph Image Parameters to max width

# Release 0.4.61

- Changes Sendman Colors

# Release 0.4.60

- Adds Sendman theme

# Release 0.4.59

- Add Component SVG Shape Animation
- Add SVG Shape Animation to Hero

# Release 0.4.56

- Adjustments to Card Layout

# Release 0.4.55

- Adjustments to Post Layout
- Adjustments to Card Layout
- Adjustments to Aside Wrapper Layout
- Adjustments to Richtext Layout

# Release 0.4.53

- Fixes overlapping of video component

# Release 0.4.45

- Adds Turnstile Captcha

# Release 0.4.44

- Adds Fab-Hint
- Adds Back-To-Top
- Fixes Sticky Behavior of Fab-Button
- Fix V-Table: handles no head or headSticky correctly

# Release 0.4.43

- Fix for Modal Application form

# Release 0.4.40

- Print Layout

# Release 0.4.38

- Bumps version to force update

# Release 0.4.37

- Fixed integration issues with casestudies page and enabled it back on

# Hotfix 0.4.36

- Disables casestudies page temporarily

# Release 0.4.35

- Fix Video Frame inside of posts cut of controls

# Release 0.4.34

- Migrates casestudies page
- Adds alt attributes to hero + v-header
- Fixes sticky-block to work correctly and without an external model
- Video has now subtitles option

# Hotfix 0.4.33

- Adds a temp fix for the issue with the rerendering of the ContentRenderer https://github.com/nuxt/content/pull/3544

# Release 0.4.32

- Enables default recaptcha

# Hotfix 0.4.30 - Hotfix 0.4.31

- Disables default recaptcha

# Release 0.4.29

- Adds recaptcha
- Adds onSurface Param to Contact

# Release 0.4.28

- Fixes Feature Grid Item svg handling

# Release 0.4.27

- Product Stage fixes

# Release 0.4.26

- Updates Default Calendar
- Adjusts team-cards-item layout

# Release 0.4.25

- Fixes issues with Hero

# Release 0.4.24

- Adds swiperjs as our new standard slider
- Fies sidebar hint
- Adjusts contact small variant to work within a flexbox

# Release 0.4.22

- Itsa components

# Release 0.4.19

- Fix for Dependency Issue with Peer Dependency + Vue

# Release 0.4.18

- Adds Composable for Structured Data
- Adds html formatting to list items
- Fix to Job List Translation

# Release 0.4.16

- v-img uses baseURL now for their paths

# Release 0.4.13

- Adds Redirect for Event or Blog Detail page
- Adds a lower preset for Accordion for WebP + GIF Images

# Release 0.4.11

- Blog Detail Page on Products was adjusted to have a different layout
