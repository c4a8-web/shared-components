var qt = Object.defineProperty;
var Ot = (t, e, s) => e in t ? qt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var p = (t, e, s) => Ot(t, typeof e != "symbol" ? e + "" : e, s);
var m;
let n = (m = class {
  static isInViewportPercent(e, s) {
    const i = e.getBoundingClientRect(), r = window.innerHeight || document.documentElement.clientHeight, a = window.innerWidth || document.documentElement.clientWidth, o = { x: i.x, y: i.y, width: i.width, height: i.height }, c = { x: 0, y: 0, width: a, height: r }, d = o.width * o.height, h = m.intersection(o, c);
    return s <= h / d * 100;
  }
  static getScrollTop(e) {
    if (!e) return;
    const s = document.querySelector("header"), i = s ? (s == null ? void 0 : s.offsetHeight) + 40 : 0;
    return e.getBoundingClientRect().top - i + window.scrollY;
  }
  static scrollIntoView(e, s) {
    e && window.scrollTo({
      top: m.getScrollTop(e),
      behavior: s ? "smooth" : "auto"
    });
  }
  static getLang() {
    return (document.querySelector("html").getAttribute("lang") || this.defaultLang).toLowerCase();
  }
  static isNotDefaultLang() {
    return this.getLang() !== this.defaultLang;
  }
  static scrollToTop() {
    m.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(e) {
    return m.getParent(e, ".is-component");
  }
  static getParent(e, s) {
    var r;
    const i = e.parentNode;
    return i === null || i.tagName === "body" ? null : (r = i.parentNode) != null && r.querySelector(s) ? i : m.getParent(i, s);
  }
  static append(e, s) {
    if (e) {
      const i = document.createElement("div");
      i.innerHTML = s != null && s.nodeType ? s.outerHTML : s;
      const r = i == null ? void 0 : i.children[0];
      if (r)
        return e.appendChild(r);
    }
    return null;
  }
  static replace(e, s) {
    e && s && (e.innerHTML = s.innerHTML);
  }
  static generateUrl(e, s, i) {
    let r;
    return e && s && (r = e.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), r = s + m.urlSeperator + r.replace(/-+$/, "") + "-" + i), r;
  }
  static toBase64(e) {
    return new Promise((s, i) => {
      const r = new FileReader();
      r.readAsDataURL(e), r.onload = () => {
        const a = r.result.split(",")[1];
        s(a);
      }, r.onerror = (a) => i(a);
    });
  }
  static toSize(e) {
    const s = ["Bytes", "KB", "MB", "GB", "TB"];
    if (e == 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
    return (e / Math.pow(1024, i)).toFixed(1) + " " + s[i];
  }
  static camalCaseToSnakeCase(e) {
    return e.replace(/[A-Z]/g, (s) => `_${s.toLowerCase()}`);
  }
  static animateValue(e, s, i, r, a = m.priceFormatter) {
    let o = null;
    const c = (d) => {
      o || (o = d);
      const h = Math.min((d - o) / r, 1), u = h * (i - s) + s, y = a.format(u);
      e.innerHTML = y, h < 1 && window.requestAnimationFrame(c);
    };
    window.requestAnimationFrame(c);
  }
  static isOutsideOf(e, s) {
    const i = s.composedPath ? s.composedPath() : s.path;
    return i ? !i.some((r) => r.className && r.className.includes && r.className.includes(e)) : !1;
  }
  static getExtension(e) {
    return e.split(".").pop();
  }
  static validateVueProps(e) {
    var a;
    const s = (a = e == null ? void 0 : e.$) == null ? void 0 : a.propsOptions[0], i = e == null ? void 0 : e.$props, r = { props: {} };
    return Object.keys(i).map((o) => {
      let c = i[o];
      c === "" && (c = s[o].default), r.props[o] = c;
    }), r;
  }
  static isTrue(e) {
    return e === !0 || e === "true";
  }
  static capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  static sleep(e) {
    return new Promise((s) => setTimeout(s, e));
  }
  static randomRange(e, s) {
    return Math.floor(Math.random() * (s - e + 1) + e);
  }
  static uuid() {
    const e = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), s = m.randomRange(0, 8), i = m.randomRange(0, 16);
    return "u" + [e.substring(s, s + 8), e.substring(i, i + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(e) {
    let s = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const i = m.getBreakpoint();
    return s.indexOf(e) >= s.indexOf(i);
  }
  static isUpperBreakpoint() {
    return !m.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(e) {
    let s;
    const i = e.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), r = e.match(/youtu\.be\/(.{11})/);
    return i ? s = i[2] : r && (s = r[1]), `https://i1.ytimg.com/vi/${s}/maxresdefault.jpg`;
  }
  static truncateWords(e, s) {
    if (!e) return;
    const i = e.split(" "), r = i.slice(0, s).join(" ");
    return i.length > s ? r + " ..." : r;
  }
  static stripHtml(e) {
    if (e)
      return e.replace(new RegExp(/<.*?>/g), "");
  }
  static isGermanDate(e) {
    return !!e.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
  }
  static isStorybook() {
    return window.STORYBOOK_ENV === "HTML";
  }
  static isTestingStorybook() {
    return document.location.pathname.indexOf(m.storybookPath) !== -1;
  }
  static getSiteAssetPath(e) {
    return m.isTestingStorybook() ? `${m.storybookPath}${e}` : e;
  }
  static getAssetPath(e) {
    return m.isStorybook() ? `../assets/${e}` : `/_includes/shared-components/assets/${e}`;
  }
  static findRecursive(e, s, i) {
    let r = !1, a, o, c;
    function d(h, u, y, N) {
      if (!r) {
        if (u(h, o)) {
          r = !0, a = N(h, y);
          return;
        }
        for (let q in h)
          typeof h[q] == "object" && (h === c && (o = q), d(h[q], u, h, N));
      }
    }
    return c = e, d(e, s, e, i), a;
  }
  static storageSave(e, s, i = !0) {
    localStorage.setItem(m.storagePrefix + e, i ? JSON.stringify(s) : s);
  }
  static storageGet(e) {
    return localStorage.getItem(m.storagePrefix + e);
  }
  static getJSON(e) {
    var s;
    if (e && typeof e == "object" && ((s = Object.keys(e)) == null ? void 0 : s.length) > 0) return e;
    if (e && typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        console.error("Error parsing JSON:", e);
        return;
      }
  }
  static getElementBgColor(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return;
    const s = window.getComputedStyle(e).backgroundColor;
    return s === "rgba(0, 0, 0, 0)" ? null : s;
  }
  static isValidTimeFormat(e) {
    return /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(e);
  }
  static standardizeTimeFormat(e) {
    if (!this.isValidTimeFormat(e)) return e;
    const s = "Uhr";
    let i = e.split("-"), r = i[0].trim();
    r.includes(":") || (r += ":00"), r.length === 4 && (r = "0" + r);
    let a = i[1].trim().replace(` ${s}`, "");
    return a.includes(":") || (a += ":00"), a.length === 4 && (a = "0" + a), `${r} - ${a} ${s}`;
  }
  static convertToDate(e) {
    const s = e.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (s) {
      const r = parseInt(s[1], 10), a = parseInt(s[2], 10) - 1, o = parseInt(s[3], 10);
      return new Date(o, a, r);
    }
    return null;
  }
  static XMLtoJSON(e) {
    let s = {};
    if (e.nodeType === Node.ELEMENT_NODE) {
      if (e.attributes.length > 0) {
        s["@attributes"] = {};
        for (let i = 0; i < e.attributes.length; i++) {
          const r = e.attributes.item(i);
          s["@attributes"][r.nodeName] = r.nodeValue;
        }
      }
    } else (e.nodeType === Node.TEXT_NODE || e.nodeType === Node.CDATA_SECTION_NODE) && (s = e.nodeValue);
    if (e.hasChildNodes())
      for (let i = 0; i < e.childNodes.length; i++) {
        const r = e.childNodes.item(i), a = r.nodeName;
        if (typeof s[a] > "u")
          s[a] = this.XMLtoJSON(r);
        else {
          if (typeof s[a].push > "u") {
            const o = s[a];
            s[a] = [], s[a].push(o);
          }
          s[a].push(this.XMLtoJSON(r));
        }
      }
    return s;
  }
  static hasFontSizeClass(e) {
    return e.indexOf("-font-size") !== -1 || e.indexOf("font-size-") !== -1;
  }
  static red(e) {
    return parseInt(e.substring(1, 3), 16);
  }
  static green(e) {
    return parseInt(e.substring(3, 5), 16);
  }
  static blue(e) {
    return parseInt(e.substring(5, 7), 16);
  }
  static hexToRgb(e) {
    let s;
    if (e.startsWith("--") || e.startsWith("var(")) {
      const c = e.replace(/--|var\(/, "").replace(/\)$/, ""), d = getComputedStyle(document.documentElement), h = 4;
      s = d.getPropertyValue(c).trim(), s.length === h && (s = `#${s[1]}${s[1]}${s[2]}${s[2]}${s[3]}${s[3]}`);
    }
    const i = s || e, r = m.red(i), a = m.green(i), o = m.blue(i);
    return `${r}, ${a}, ${o}`;
  }
  static getHash() {
    return window.location.hash;
  }
}, p(m, "defaultLang", "de"), p(m, "urlSeperator", "#"), p(m, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), p(m, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
p(m, "storybookPath", "/shared-components"), p(m, "decodeHTML", (e) => new DOMParser().parseFromString(e, "text/html").documentElement.textContent), p(m, "intersection", (e, s) => {
  const i = Math.max(0, Math.min(e.x + e.width, s.x + s.width) - Math.max(e.x, s.x)), r = Math.max(0, Math.min(e.y + e.height, s.y + s.height) - Math.max(e.y, s.y));
  return i * r;
}), p(m, "debounce", function(e, s, i) {
  let r;
  return function() {
    const a = this, o = arguments;
    var c = function() {
      r = null, i || e.apply(a, o);
    }, d = i && !r;
    clearTimeout(r), r = setTimeout(c, s), d && e.apply(a, o);
  };
}), m);
const Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n
}, Symbol.toStringTag, { value: "Module" })), l = {
  ACTIVE: "active",
  READY: "is-ready",
  ERROR: "is-invalid",
  VALID: "is-valid",
  SUCCESS: "is-successful",
  HAS_ERROR: "has-error",
  HOVERING: "is-hovering",
  DRAGGING: "is-dragging",
  HIDDEN: "d-none",
  INVISIBLE: "is-invisible",
  EXPANDED: "is-expanded",
  EXPANDABLE: "is-expandable",
  OFF_SCREEN: "is-off-screen",
  COLLAPSED: "is-collapsed",
  IS_COLLAPSING: "is-collapsing",
  SHOW: "show",
  FADE: "fade",
  INITIALIZED: "is-initialized",
  LOADING: "is-loading",
  HIDE_LOADING: "hide-loading",
  END: "is-end",
  IS_SCROLLED: "is-scrolled",
  MODAL_OPEN: "modal--open",
  HAS_BACKGROUND: "has-background",
  IS_FULL: "is-full",
  STICKY: "is-sticky",
  IN_TRANSITION: "in-transition",
  IS_STARTING: "is-starting"
}, Ft = {
  tagName: "accordion",
  computed: {
    imageWrapperClasses() {
      return ["accordion__floating-image-wrapper", n.isTrue(this.shadowless) === !0 ? null : "drop-shadow"];
    },
    containerClasses() {
      return [
        "accordion__container utility-animation container vue-component",
        this.spacing,
        this.accordion.image ? "accordion--has-image" : null
      ];
    },
    accordionClasses() {
      return [
        "accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component",
        this.accordion.image ? "accordion--has-image" : null
      ];
    },
    fallbackImageClasses() {
      return [
        "accordion__fallback-image-wrapper",
        n.isTrue(this.shadowless) === !0 ? null : "drop-shadow",
        this.showOutsideImage ? l.SHOW : null
      ];
    },
    columnClasses() {
      return ["col", n.isTrue(this.left) ? null : "text-center"];
    },
    headlineClasses() {
      var t;
      return `accordion__headline  ${(t = this.accordion) == null ? void 0 : t.headlineClasses}`;
    }
  },
  mounted() {
    this.accordion.tabs && (this.selectFallbackImage(), this.isUpperBreakpoint() ? this.changeOutsideImage() : this.outsideImage = this.fallbackImage, this.accordion.tabs.forEach((t) => {
      this.states.push(!!t.expanded);
    }));
  },
  methods: {
    isUpperBreakpoint() {
      return !n.isBelowBreakpoint("md");
    },
    selectFallbackImage() {
      if (!this.fallbackImage) {
        const t = this.getActiveTab();
        this.fallbackImage = this.accordion.image || (t == null ? void 0 : t.image), this.fallbackAnimated = this.accordion.image ? this.accordion.animated : t.animated;
      }
    },
    getActiveTab() {
      var e;
      const t = (e = this.accordion) == null ? void 0 : e.tabs.filter((s) => s.expanded);
      return t ? t[0] : null;
    },
    handleClick(t) {
      const e = this.states[t];
      this.states = this.states.map((s) => !1), this.states[t] = !e, this.isUpperBreakpoint() && this.changeOutsideImage(t), this.allTabsClosed() && this.changeToFallbackImage();
    },
    changeToFallbackImage() {
      this.showOutsideImage = !0, this.accordion.image = this.fallbackImage, this.outsideImage = this.fallbackImage, this.outsideAnimated = this.fallbackAnimated;
    },
    changeOutsideImage(t) {
      const e = this.getTabByIndex(t);
      this.showOutsideImage = !0, this.outsideImage = (e == null ? void 0 : e.image) || this.fallbackImage, this.outsideAnimated = e != null && e.image ? e.animated : this.fallbackAnimated;
    },
    getTabByIndex(t) {
      var e;
      return typeof t > "u" ? this.getActiveTab() : (e = this.accordion) == null ? void 0 : e.tabs[t];
    },
    allTabsClosed() {
      return this.states.filter((t) => t === !0).length === 0;
    },
    getStateByIndex(t) {
      return this.states[t];
    },
    getId(t, e, s) {
      return `${s}${t.id}${e}`;
    },
    isExpanded(t) {
      return t.expanded ? "true" : "false";
    },
    buttonClasses(t) {
      return [
        "accordion__btn btn btn-link btn-block d-flex justify-content-between",
        t.expanded ? null : "collapsed"
      ];
    },
    contentClasses(t) {
      return ["accordion__content collapse position-static", t.expanded ? "show" : null];
    },
    cardClasses(t) {
      return ["accordion__card", this.getStateByIndex(t) ? l.EXPANDED : null];
    },
    cardStyle(t) {
      return `--utility-animation-index: ${t}`;
    },
    accordionId(t) {
      return `#${t.id}`;
    },
    cloudinary(t) {
      return t.cloudinary || !0;
    },
    getImage(t) {
      return t.image ? t.image : this.accordion.image ? this.accordion.image : null;
    },
    getTab(t) {
      return t.image ? t : this.accordion;
    }
  },
  data() {
    return {
      showOutsideImage: !1,
      outsideImage: !1,
      outsideAnimated: !1,
      states: [],
      fallbackImage: !1,
      fallbackAnimated: !1
    };
  },
  props: {
    accordion: Object,
    shadowless: {
      default: null
    },
    left: {
      default: null
    },
    spacing: String
  },
  template: `
    <div :class="containerClasses" v-if="accordion.headline">
      <div class="row">
        <div :class="columnClasses">
          <headline
            :text="accordion.headline"
            :classes="headlineClasses"
          />
          <div class="accordion__subline font-size-2" v-if="accordion.subline">{{ accordion.subline }}</div>
        </div>
        <div class="row accordion__image" v-if="accordion.image">
          <v-img :img="accordion.image" :cloudinary="cloudinary(accordion)" :alt="accordion.alt" :animated="accordion.animated" />
        </div>
      </div>
    </div>
    <section :class="accordionClasses">
      <div class="row position-relative">
        <div class="accordion__image-spacer col-lg-6">
          <v-img :img="outsideImage" :cloudinary="cloudinary(accordion)" :lazy="true" :alt="accordion.alt" :animated="outsideAnimated" v-if="outsideImage" />
        </div>
        <div class="col-lg-6 position-static" :id="accordion.id">
          <div class="accordion__fallback-container mb-4 col-lg-6" v-if="outsideImage">
            <div :class="fallbackImageClasses">
              <v-img :img="outsideImage" :cloudinary="cloudinary(accordion)" :lazy="true" :alt="accordion.alt" :animated="outsideAnimated" />
            </div>
          </div>
          <div :class="cardClasses(index)" v-for="(tab, index) in accordion.tabs" :style="cardStyle(index)">
            <div class="accordion__card-header card-collapse" :id="getId(accordion, index, 'Heading')">
              <button type="button" :class="buttonClasses(tab)"
                  data-toggle="collapse"
                  :data-target="getId(accordion, index, '#Content')"
                  :aria-expanded="isExpanded(tab)"
                  :aria-controls="getId(accordion, index, 'Content')"
                  @click="handleClick(index)"
              >
                {{ tab.headline }}

                <span class="card-btn-toggle">
                  <icon icon="plus-minus" class="accordion__icon-toggle" :closed="!states[index]" />
                </span>
              </button>
            </div>
            <div :id="getId(accordion, index, 'Content')" :class="contentClasses(tab)" :aria-labelledby="getId(accordion, index, 'Heading')" :data-parent="accordionId(accordion)">
              <div class="accordion__richtext richtext richtext__small card-body">
                <div class="mb-4 col-lg-6 accordion__floating-container">
                  <div :class="imageWrapperClasses" v-if="getImage(tab)">
                    <v-img :img="getImage(tab)" :cloudinary="cloudinary(tab)" :lazy="true" :alt="tab.alt" :animated="getTab(tab).animated" />
                  </div>
                </div>
                <div class="accordion__text" v-html="tab.content"></div>
                <cta
                  v-if="tab.cta"
                  :text="tab.cta.text"
                  :link="tab.cta.link"
                  :href="tab.cta.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}, f = {
  REFRESH_ANIMATE_NUMBERS: "refresh-animate-numbers",
  FAB_BUTTON_CLOSE: "fab-button-close",
  FORM_AJAX_SUBMIT: "form-ajax-submit",
  FORM_RESET: "form-reset",
  FORM_ATTACHMENT_ERROR: "form-attachment-error",
  CHILD_HAS_UPDATE: "child-has-update",
  AD_BLOCK_INFO: "ad-block-info",
  DIMENSIONS_CHANGED: "dimensions-changed",
  SCROLL_UPDATE: "scroll-update",
  WINDOW_RESIZE: "window-resize",
  OPEN_MODAL: "open-modal",
  LOAD_MODAL: "load-modal",
  DROPDOWN_CHANGED: "dropdown-changed",
  DROPDOWN_OPENED: "dropdown-opened",
  CARD_TAG_CLICKED: "card-tag-clicked",
  ENDED: "ended"
}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f
}, Symbol.toStringTag, { value: "Module" })), w = class w {
  constructor(e, s) {
    var i;
    e && (this.root = e, this.options = s, (i = this.options) != null && i.noInit || this.root.classList.add(l.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(e) {
    window[w.namespacePrefix] || (window[w.namespacePrefix] = {});
    const s = this.getInstancesKey();
    window[w.namespacePrefix][s] || (window[w.namespacePrefix][s] = []), window[w.namespacePrefix][s].push(e);
  }
  static getInstance(e) {
    const i = window[w.namespacePrefix][this.getInstancesKey()].filter((r) => (r == null ? void 0 : r.root) === e);
    return i ? i[0] : null;
  }
  static initElement(e, s) {
    const i = new this(e, s);
    return this.instances.push(i), this.expose(i), i;
  }
  static init(e) {
    this.instances = [];
    const s = e || document, i = `${this.rootSelector}:not(.${l.INITIALIZED})`;
    [].forEach.call(
      s.querySelectorAll(i),
      (r) => {
        this.initElement(r);
      }
    );
  }
};
p(w, "rootSelector", ""), p(w, "instances", []), p(w, "namespacePrefix", "baseComponents");
let ct = w;
var X;
let dt = (X = class {
}, p(X, "rootSelector", ".form-attachments"), p(X, "base64Selector", ".form-attachments__base64"), X);
const _ = class _ extends ct {
  constructor(e, s) {
    var i;
    super(e, s), e && (this.root = e, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = e.querySelector(this.formSelector), this.subject = e.querySelector(this.subjectSelector), this.company = e.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = s, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (i = this.options) != null && i.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(e, s) {
      return this.optional(s) || _.regularExpression.test(e);
    });
  }
  isCompanyForm() {
    return !!(this.form && this.subject && this.company);
  }
  hasUrlParameter() {
    if (window.location.search !== "")
      return !0;
  }
  prefillFormValues() {
    const e = new URLSearchParams(window.location.search);
    for (const [s, i] of e.entries())
      this.prefillFormValue(s, i);
  }
  prefillFormValue(e, s) {
    const i = this.form;
    if (!i) return;
    const r = i.querySelector(`input[name="${e}"],textarea[name="${e}"]`);
    r && (r.value = s);
  }
  hasCustomValidation() {
    return this.root.classList.contains("form--custom-validation");
  }
  hasAjaxSubmit() {
    return this.root.classList.contains("form--ajax");
  }
  bindEvents() {
    (Object.keys(this.groups).length || this.hasCustomValidation() || this.hasAjaxSubmit() || this.isCompanyForm()) && (this.form.addEventListener("submit", this.handleSubmit.bind(this)), this.form.addEventListener("reset", this.handleReset.bind(this)));
  }
  addSubjectListener() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }
  handleReset() {
    _.reset(this.form);
  }
  static reset(e) {
    !e || !e.reset || (e.reset(), [].forEach.call(e.querySelectorAll(`.${l.VALID}`), (s) => {
      s.classList.remove(l.VALID);
    }), [].forEach.call(e.querySelectorAll(`.${l.ERROR}`), (s) => {
      s.classList.remove(l.ERROR);
    }));
  }
  handleSubmit(e) {
    this.validate(e) && this.submit(e);
  }
  updateSubject() {
    !this.subject || !this.company || (this.subject.value = this.subject.value + ": " + this.company.value);
  }
  submit(e) {
    e.stopImmediatePropagation(), e.preventDefault(), this.updateSubject(), this.customSubmit ? this.customSubmit(e) : this.hasAjaxSubmit() ? this.ajaxSubmit() : this.form.submit();
  }
  static getId(e) {
    return n.uuid() + this.delimiter + e;
  }
  static getName(e) {
    if (e.includes(this.delimiter)) {
      const s = e.indexOf(this.delimiter);
      return e.slice(s + this.delimiter.length);
    }
    return e;
  }
  static getFormData(e) {
    const s = new FormData(e), i = [];
    for (let r of s)
      i.push(encodeURIComponent(r[0]) + "=" + encodeURIComponent(r[1]));
    return i.join("&");
  }
  ajaxSubmit() {
    const e = _.getFormData(this.form);
    fetch(this.form.action, {
      method: this.form.method || "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: e
    }).then((s) => {
      (s.status === 200 || s.status === 302) && this.ajaxSubmitCompleted();
    });
  }
  ajaxSubmitCompleted() {
    document.dispatchEvent(
      new CustomEvent(f.FORM_AJAX_SUBMIT, {
        detail: { target: this.root }
      })
    );
  }
  triggerExternalValidation() {
    let e = !1;
    if (window.$) {
      const s = $(this.form);
      if (typeof s.validate != "function")
        return console.error("form.validate is not a function"), !0;
      e = s.validate().form();
    }
    return e;
  }
  validate(e) {
    let s = this.triggerExternalValidation();
    return (!this.isValid(e) || s === !1) && (e.stopImmediatePropagation(), e.preventDefault(), s = !1), s;
  }
  isValid(e) {
    e.stopImmediatePropagation();
    let s = !0, i = !0;
    this.hasAttachments() && (s = this.validateAttachments());
    for (const [r, a] of Object.entries(this.groups))
      this.isValidGroup(a) || (s = !1, this.addGroupError(a, i), i = !1);
    return s;
  }
  validateAttachments() {
    let e = !0;
    return [].forEach.call(this.form.querySelectorAll(dt.base64Selector), (s) => {
      s.value || (e = !1);
    }), e || (e = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (s) => {
      s.files.length === 0 && (e = !1, this.addAttachmentError(s));
    }), e);
  }
  addAttachmentError(e) {
    const s = n.getParent(e, dt.rootSelector);
    s !== null && s.classList.add(l.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(e, s) {
    for (let i = 0; i < e.length; i++) {
      const r = this.getGroupParent(e[i]);
      e[i].classList.add(l.ERROR), r && (s && n.scrollIntoView(r), this.addErrorMessage(r));
    }
  }
  addErrorMessage(e) {
    if (e && !e.classList.contains(l.ERROR)) {
      e.classList.add(l.ERROR);
      const s = document.createElement("div");
      s.innerHTML = e.dataset.msg, s.classList.add("invalid-feedback"), e.parentNode.insertBefore(s, e.nextSibling);
    }
  }
  delErrorMessage(e) {
    e && e.classList.contains(l.ERROR) && (e.classList.remove(l.ERROR), e.nextSibling.remove());
  }
  delGroupError(e) {
    for (let s = 0; s < e.length; s++) {
      const i = this.getGroupParent(e[s]);
      e[s].classList.remove(l.ERROR), i && this.delErrorMessage(i);
    }
  }
  isValidGroup(e) {
    const s = e.length;
    let i = !1;
    for (let r = 0; r < s; r++) {
      const a = e[r];
      if (a.type === "checkbox" && a.checked)
        i = !0;
      else if (a.type === "radio" && a.checked)
        i = !0;
      else {
        const o = a.closest('input[type="text"]');
        o && !i && o.value.length >= this.minLengthOther && (i = !0);
      }
    }
    return i;
  }
  getGroupByName(e) {
    return this.groups[e];
  }
  addValidation() {
    this.form && [].forEach.call(this.form.querySelectorAll("[data-form-group]"), (e) => {
      e.dataset.formGroup && (this.addGroupValidation(e), this.addLiveValidation(e));
    });
  }
  isRadio(e) {
    return (e == null ? void 0 : e.getAttribute("type")) === "radio";
  }
  isCheckbox(e) {
    return (e == null ? void 0 : e.getAttribute("type")) === "checkbox";
  }
  addLiveValidation(e) {
    e && (this.isCheckbox(e) || this.isRadio(e) ? e.addEventListener("change", this.handleLiveValidation.bind(this)) : e.addEventListener("keyup", this.handleLiveValidation.bind(this)));
  }
  groupFilter(e, s) {
    return e ? e.filter((i) => i.getAttribute("type") === s) : null;
  }
  handleGroupError(e, s) {
    e.checked ? this.delGroupError(s) : this.isValidGroup(s) || this.addGroupError(s);
  }
  handleLiveValidation(e) {
    const s = e.currentTarget;
    if (s) {
      const i = this.getGroupByName(s.dataset.formGroup);
      if (!i) return;
      const r = this.groupFilter(i, "checkbox"), a = this.groupFilter(i, "radio");
      s.getAttribute("type") === "checkbox" ? this.handleGroupError(s, r) : s.getAttribute("type") === "radio" ? this.handleGroupError(s, a) : this.isValidGroup(i) ? this.delGroupError(i) : this.addGroupError(i);
    }
  }
  getGroupParent(e) {
    var s;
    return (s = e.closest(".js-form-message")) == null ? void 0 : s.querySelector("[data-msg]");
  }
  addGroupValidation(e) {
    if (this.getGroupParent(e)) {
      const i = e.dataset.formGroup;
      this.groups[i] || (this.groups[i] = []), this.groups[i].push(e);
    }
  }
  updateGotcha() {
    const e = this.root.querySelector(this.gotchaSelector);
    e == null || e.classList.add(l.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(_.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(e) {
    var s;
    return ((s = e == null ? void 0 : e.parentNode) == null ? void 0 : s.classList.contains("form-field--show-in")) && e.offsetParent === null;
  }
  static getFormData(e) {
    if (e == null) return [];
    const s = e.querySelectorAll('input[type="text"], input[type="email"], textarea'), i = [];
    for (let r = 0; r < s.length; r++) {
      const a = s[r];
      if (this.isOptionalInputInvisible(a)) continue;
      let o;
      (a.type === "text" || a.type === "email" || a.tagName === "TEXTAREA") && (o = a.value), i.push({
        input: a,
        value: o
      });
    }
    return i;
  }
};
p(_, "rootSelector", ".form"), p(_, "instances", []), p(_, "delimiter", "-formHelper-"), p(_, "noCustomSubmitClass", "form--no-custom-submit"), p(_, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let D = _;
const Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" }));
class zt {
  constructor(e) {
    var i;
    this.position = e;
    const s = (i = window.i18n) == null ? void 0 : i.loader;
    s && s.then(() => {
      var r;
      this.translationData = (r = window.i18n) == null ? void 0 : r.getTranslationData([
        "positionTypePermanently",
        "positionTypeInternship",
        "positionTypeTraining",
        "positionTypeStudent"
      ]);
    });
  }
  get description() {
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((e, s) => this.getEnhanchedDescription(s, e.name, e.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(e) {
    return /^\s*<[^>]+>/.test(e);
  }
  getEnhanchedDescription(e, s, i) {
    const r = e > 0 && s && s["#text"] ? `<h4>${this.trimNewlines(s["#text"])}</h4>` : "";
    let a = i.replace(/<\/?span[^>]*>/g, ""), o = 0;
    const c = 5, d = 2;
    return e === 0 ? a = a.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (h, u) => u.length > c && /^\s*$/.test(u) ? u : o < d && u.length > c && u[0] !== "," ? (o++, "<p>" + u.trim() + "</p>") : u).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(a) && a.length > c && (a = "<p>" + a + "</p>"), `${r}${a}`.replace(/<\/p><br><p>/g, "</p><p>");
  }
  get id() {
    return this.getValue("id").replace(/\s/g, "");
  }
  get title() {
    return this.removeGenderNotations(this.getValue("name"));
  }
  removeGenderNotations(e) {
    const s = /\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;
    return e.replace(s, "").trim();
  }
  get tags() {
    const e = this.getValue("keywords");
    return e ? e.split(",") : [];
  }
  getTeamText(e) {
    if (!e) return;
    let s = e;
    if (s.includes("/")) {
      const i = s.split(" / "), r = i[0], a = i[1], o = "CSOC", c = "Managed Services", d = "Products";
      if (r === c && a !== o)
        s = c;
      else if (r === d)
        s = `${d} ${a}`;
      else
        switch (a) {
          case "Azure Architecture":
            s = "Azure";
            break;
          case "M365 Architecture":
            s = "Workplace";
            break;
          case o:
            s = "Security";
            break;
          default:
            s = a;
            break;
        }
    }
    return s + " Team";
  }
  get team() {
    const e = this.getTeamText(this.getValue("department")), s = e ? " / " : "";
    return `${e || ""}${this.positionType ? s + this.positionType : ""}`;
  }
  get data() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      team: this.team,
      position_type: this.positionType,
      tags: this.tags,
      order: this.order
    };
  }
  get positionType() {
    var s, i, r, a;
    let e = this.getValue("employmentType");
    switch (e) {
      case "permanent":
        e = (s = window.i18n) == null ? void 0 : s.translate("positionTypePermanently");
        break;
      case "intern":
        e = (i = window.i18n) == null ? void 0 : i.translate("positionTypeInternship");
        break;
      case "trainee":
        e = (r = window.i18n) == null ? void 0 : r.translate("positionTypeTraining");
        break;
      case "working_student":
        e = (a = window.i18n) == null ? void 0 : a.translate("positionTypeStudent");
        break;
      default:
      case "freelance":
      case "temporary":
        e = null;
        break;
    }
    return e;
  }
  get order() {
    const e = this.tags.find((r) => r.includes("ORDER_"));
    if (!e) return null;
    const s = e.split("_")[1];
    return parseInt(s, 10);
  }
  trimNewlines(e) {
    return e.replace(/\n|\t|    /g, "");
  }
  getValue(e, s = "text") {
    return this.position && this.position[e] ? this.trimNewlines(this.position[e][`#${s}`]) : null;
  }
}
const R = {
  VALID: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  PAYLOAD_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500
};
class jt {
  constructor(e) {
    p(this, "defaultLang", "de");
    p(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    p(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    p(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    p(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    p(this, "defaultClientName", "c4a8");
    p(this, "mockApplyUrl", "mock/jobApply.json");
    p(this, "mockDocumentsUrl", "mock/jobDocuments.json");
    this.options = e, (!this.options.client_name || this.options.client_name === "glueckkanja") && (this.options.client_name = this.defaultClientName), this.lang = this.defaultLang, this.jobId = null, this.apiUrl = "https://api.personio.de/v1", this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`, this.applicationsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications", this.documentsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents";
  }
  getUrl(e) {
    var r;
    let s;
    e !== this.types.OPENINGS && ((r = this.options.apiUrl) != null && r.match(/.xml$/)) ? e === this.types.APPLICATIONS ? s = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : s = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : s = this.options.apiUrl ? this.options.apiUrl : this[`${e}Url`];
    const i = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${s}${i}`;
  }
  setLang(e) {
    this.lang = e;
  }
  setFilter(e) {
    this.filter = e;
  }
  getAll() {
    const e = this.getUrl(this.types.OPENINGS);
    return this.fetch(e, null, this.responseTypes.XML);
  }
  getOpening(e) {
    return this.options.jobId = e, this.getAll();
  }
  convertPosition(e) {
    var a;
    const s = new zt(e), i = (a = this.options) == null ? void 0 : a.jobId;
    return s.description === null || i && s.id !== i || !this.filterPosition(s) ? null : {
      ...s.data,
      lang: this.lang
    };
  }
  filterPosition(e) {
    var s, i;
    return !((i = (s = this.filter) == null ? void 0 : s.tags) != null && i.length) || this.filter.tags.some((r) => e.tags.map((a) => a.toLowerCase()).includes(r.toLowerCase())) ? e : null;
  }
  convertData(e) {
    var a, o;
    const s = e, i = "workzag-jobs", r = (a = e[i]) == null ? void 0 : a.position;
    return s.objects = r.length ? (o = e[i]) == null ? void 0 : o.position.map((c) => this.convertPosition(c)).filter(Boolean) : [this.convertPosition(r)].filter(Boolean), s.meta = { offset: 0, limit: 20, total: 10 }, s;
  }
  getConvertedJson(e) {
    const i = new DOMParser().parseFromString(e, "application/xml"), r = n.XMLtoJSON(i);
    return this.convertData(r);
  }
  fetchXML(e) {
    return new Promise((s, i) => {
      e.then((r) => r.text()).then((r) => {
        s({
          json: () => this.getConvertedJson(r)
        });
      }).catch((r) => {
        console.error("Personio fetchXML Error:", r), i("Personio fetchXML Error");
      });
    });
  }
  fetch(e, s, i) {
    return new Promise((r, a) => {
      var o;
      if ((o = this.options) != null && o.client_name) {
        const c = fetch(e, s), d = i === this.responseTypes.XML ? this.fetchXML(c) : c;
        r(d);
      } else
        a("no client_name specified");
    });
  }
  async uploadDocuments(e) {
    const s = e.length > 0 ? e : [e], i = [];
    return Array.from(s).forEach((r) => {
      i.push(this.uploadDocument(r));
    }), Promise.all(i);
  }
  async uploadDocument(e) {
    const s = this.getUrl(this.types.DOCUMENTS), i = new FormData();
    return i.append(
      "file",
      new File([e], e.name, {
        type: e.type
      })
    ), this.fetch(s, {
      method: "POST",
      body: i,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(e, s, i) {
    return new Promise((r, a) => {
      this.uploadDocuments(e).then((o) => {
        if (this.hasValidResponseCodes(o)) return this.addFilesToFields(o, i, r, a);
        const c = o[0];
        c.json().then((d) => {
          if (d.errors) return a({ statusCode: c.status, errors: d.errors });
        }).catch((d) => a(d));
      }).catch((o) => a(o));
    });
  }
  addFilesToFields(e, s, i, r) {
    const a = s;
    a.files = [];
    const o = e.map((c) => c.json().then((d) => {
      a.files.push({
        uuid: d.uuid,
        original_filename: d.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(o).then(() => i(a)).catch((c) => r(c));
  }
  getMappedFieldName(e) {
    let s;
    switch (e) {
      case "salary":
        s = "salary_expectations";
        break;
      case "cancellation":
        s = "available_from";
        break;
      case "gender":
      case "birthday":
      case "location":
      case "phone":
        s = e;
        break;
      default:
        s = "custom_attribute_" + e;
        break;
    }
    return s;
  }
  isValidResponseCode(e) {
    return this.options.apiUrl ? e.status === R.VALID : e.status === R.VALID || e.status === R.CREATED || e.status === R.NO_CONTENT;
  }
  hasValidResponseCodes(e) {
    return e.every((s) => this.isValidResponseCode(s));
  }
  handleApply(e) {
    return new Promise((s, i) => {
      this.apply({ fields: e }).then((r) => {
        if (this.isValidResponseCode(r)) return s();
        r.json().then((a) => {
          if (a.errors) return i({ statusCode: r.status, errors: a.errors });
        }).catch((a) => i(a));
      }).catch((r) => i(r));
    });
  }
  getFormPayload(e, s) {
    const i = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, r = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let a = 0; a < e.length; a++) {
      const c = e[a].input, d = s.getName(c.name), h = n.camalCaseToSnakeCase(d);
      r.hasOwnProperty(h) ? i[h] = c.value : h !== "_gotcha" && i.attributes.push({
        id: this.getMappedFieldName(h),
        value: c.value
      });
    }
    return i;
  }
  getHeaders() {
    return {
      "Ocp-Apim-Subscription-Key": this.options.apiKey
    };
  }
  async apply(e) {
    const s = this.getUrl(this.types.APPLICATIONS);
    return this.fetch(s, {
      method: "POST",
      body: JSON.stringify(e.fields),
      headers: {
        ...this.getHeaders(),
        "Content-Type": "application/json"
      }
    });
  }
}
class pt {
  constructor(e) {
    p(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = e, this.api = new jt(this.options), this.jobDataUrl = n.getSiteAssetPath(this.jobDataUrl);
  }
  setLang(e) {
    this.api.setLang(e);
  }
  setFilter(e) {
    this.api.setFilter(e);
  }
  getAll() {
    return this.api.getAll();
  }
  getOpening(e) {
    return this.api.getOpening(e);
  }
  getUrl(e, s, i) {
    return this.api.getUrl(e, s, i);
  }
  fetch(e, s) {
    return this.api.fetch(e, s);
  }
  getLangFromEntry(e) {
    return e.lang || null;
  }
  getJobId() {
    let e = "";
    const s = window.location.hash;
    if (s)
      if (s.indexOf("-") !== -1) {
        const i = s.split("-");
        e = i[i.length - 1];
      } else
        e = s.substring(1);
    else this.options.jobId && (e = this.options.jobId);
    return e;
  }
  getOrderedList(e) {
    const s = e.filter((r) => r.order !== void 0).sort((r, a) => a.order - r.order), i = e.filter((r) => r.order === void 0);
    return [...s, ...i];
  }
  getFormData(e) {
    const s = D.getFormData(e);
    return this.api.getFormPayload(s, D);
  }
  applyFileData(e, s, i) {
    return this.api.applyFileData(e, s, i);
  }
  handleApply(e) {
    return this.api.handleApply(e);
  }
}
var E;
let Q = (E = class {
  constructor(e, s) {
    this.root = e, this.options = s, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(l.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new pt({
      ...this.jobId && { jobId: this.jobId },
      ...this.apiUrl && { apiUrl: this.apiUrl },
      client_name: this.clientName,
      apiKey: this.apiKey,
      mockApplyUrl: this.mockApplyUrl,
      mockDocumentsUrl: this.mockDocumentsUrl
    })), this.bindEvents();
  }
  isNotVueApp(e) {
    return e.getAttribute("data-v-app") === null;
  }
  bindEvents() {
    var e, s, i;
    if ((e = this.close) == null || e.addEventListener("click", this.handleClose.bind(this)), (s = this.successClose) == null || s.addEventListener("click", this.handleClose.bind(this)), (i = this.errorClose) == null || i.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const r = this.root.parentNode, a = D.getInstance(this.form);
      if (r && this.isNotVueApp(r)) {
        const o = r.querySelector(this.buttonSelector);
        o == null || o.addEventListener("click", this.handleOpen.bind(this));
      } else r && this.addTriggerListeners();
      a && a.canHaveCustomSubmit() && (a.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(f.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((s) => s.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(e) {
    var i;
    e.stopImmediatePropagation();
    const s = (i = e == null ? void 0 : e.detail) == null ? void 0 : i.id;
    !s || s !== this.modalId || this.handleOpen(e);
  }
  handleApplicationSubmit(e) {
    e.preventDefault(), e.stopImmediatePropagation(), this.setLoading(!0);
    const s = this.form.querySelector(dt.base64Selector), i = s == null ? void 0 : s.value;
    let r = this.api.getFormData(this.form), a;
    if (i)
      a = {
        name: s.dataset.fileName
      };
    else {
      const o = this.form.querySelector('input[type="file"]');
      a = o == null ? void 0 : o.files;
    }
    a ? this.handleApplicationRequest(r, a, i) : this.handleError();
  }
  setLoading(e) {
    document.dispatchEvent(new CustomEvent(f.LOAD_MODAL, { detail: e }));
  }
  handleApplicationRequest(e, s, i) {
    this.api.applyFileData(s, i, e).then((r) => {
      this.api.handleApply(r).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(r);
      }).catch((a) => {
        this.setLoading(!1), this.handleError(a);
      });
    }).catch((r) => {
      this.setLoading(!1), this.handleError(r);
    });
  }
  handleApplicationSuccess(e) {
    this.root.classList.add(l.SUCCESS);
    const s = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (s) {
      s.dataset.text || (s.dataset.text = s.innerText);
      const i = e.first_name;
      s.innerText = `${s.dataset.text} ${i}`;
    }
  }
  handleError(e) {
    if (!e) return console.error("handle generic error");
    const s = typeof e == "string" ? e : e.message ? e.message : e, i = typeof e == "object" && e.statusCode ? e.statusCode : R.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", s), i === R.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(e) : this.root.classList.add(l.ERROR);
  }
  handlePayloadTooLarge(e) {
    document.dispatchEvent(new CustomEvent(f.FORM_ATTACHMENT_ERROR, { detail: e }));
  }
  handleClose(e) {
    e.preventDefault(), E.close(this.root);
  }
  handleOpen(e) {
    e.preventDefault(), E.open(this.root);
  }
  static initElement(e, s) {
    const i = new this(e, s);
    return this.instances.push(i), i;
  }
  static open(e) {
    e && window.$ && $(e).modal("show");
  }
  static close(e) {
    e && window.$ && ($(e).modal("hide"), E.resetModal(e));
  }
  static resetModal(e) {
    setTimeout(function() {
      const s = e.querySelector("form");
      s == null || s.reset(), e.classList.remove(l.SUCCESS), e.classList.remove(l.ERROR);
    }, 200);
  }
  static init(e) {
    this.instances = [];
    const s = e || document, i = `${this.rootSelector}:not(.${l.READY})`;
    [].forEach.call(s.querySelectorAll(i), (r) => {
      this.initElement(r);
    });
  }
}, p(E, "rootSelector", ".modal"), p(E, "instances", []), E);
const Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" })), et = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' height='400' width='400'%3E%3Cpath fill='%23e5f8ff' stroke='%23DAEDF7' stroke-miterlimit='10' d='M50.28 90C72.3714 90 90.28 72.0914 90.28 50C90.28 27.9086 72.3714 10 50.28 10C28.1886 10 10.28 27.9086 10.28 50C10.28 72.0914 28.1886 90 50.28 90Z'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M66.226 41.1997H16.464C15.9336 41.1997 15.4248 41.4104 15.0498 41.7855C14.6747 42.1606 14.464 42.6693 14.464 43.1997V75.3337H68.226V43.1997C68.226 42.6693 68.0153 42.1606 67.6402 41.7855C67.2651 41.4104 66.7564 41.1997 66.226 41.1997Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23ff866e' d='M52.994 44.9966L20.42 75.3336H18.259L18.312 44.9966H52.994Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M41.345 84.2985C55.3178 84.2985 66.645 83.5598 66.645 82.6485C66.645 81.7373 55.3178 80.9985 41.345 80.9985C27.3722 80.9985 16.045 81.7373 16.045 82.6485C16.045 83.5598 27.3722 84.2985 41.345 84.2985Z' opacity='.15'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1286H9.72V76.3286C9.72 76.0634 9.82536 75.809 10.0129 75.6215C10.2004 75.434 10.4548 75.3286 10.72 75.3286H71.97C72.2352 75.3286 72.4896 75.434 72.6771 75.6215C72.8646 75.809 72.97 76.0634 72.97 76.3286V79.1286Z'%3E%3C/path%3E%3Cpath fill='%23adc4d9' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1289C67.0954 80.8072 61.0156 81.6587 54.906 81.6589H27.784C21.6744 81.6586 15.5946 80.8071 9.72 79.1289H72.97Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' stroke='%23e04122' stroke-linecap='round' stroke-linejoin='round' d='M46.145 67.3147C45.8364 67.3155 45.5307 67.2551 45.2456 67.137C44.9605 67.0189 44.7017 66.8454 44.484 66.6267L41.345 63.4887L38.207 66.6267C37.9885 66.8449 37.7292 67.0179 37.4439 67.1359C37.1586 67.2539 36.8528 67.3145 36.5441 67.3143C36.2353 67.3141 35.9296 67.2531 35.6444 67.1348C35.3593 67.0165 35.1002 66.8431 34.882 66.6247C34.6638 66.4062 34.4908 66.1469 34.3728 65.8616C34.2548 65.5763 34.1942 65.2705 34.1944 64.9618C34.1945 64.653 34.2555 64.3473 34.3739 64.0621C34.4922 63.777 34.6655 63.5179 34.884 63.2997L38.022 60.1607L34.884 57.0227C34.6602 56.8058 34.4818 56.5465 34.3592 56.2599C34.2365 55.9734 34.1721 55.6653 34.1697 55.3536C34.1673 55.042 34.2269 54.7329 34.345 54.4445C34.4632 54.1561 34.6376 53.894 34.8579 53.6737C35.0783 53.4533 35.3404 53.2789 35.6288 53.1608C35.9172 53.0426 36.2262 52.983 36.5379 52.9854C36.8496 52.9878 37.1577 53.0522 37.4442 53.1749C37.7308 53.2975 37.99 53.4759 38.207 53.6997L41.345 56.8387L44.484 53.6997C44.927 53.2703 45.521 53.0323 46.1379 53.0371C46.7548 53.0419 47.3451 53.2891 47.7813 53.7253C48.2176 54.1616 48.4648 54.7519 48.4696 55.3688C48.4744 55.9857 48.2364 56.5797 47.807 57.0227L44.668 60.1607L47.807 63.2997C48.1354 63.6284 48.359 64.0471 48.4496 64.5029C48.5401 64.9586 48.4935 65.431 48.3156 65.8603C48.1377 66.2895 47.8366 66.6565 47.4502 66.9146C47.0639 67.1728 46.6097 67.3106 46.145 67.3107V67.3147Z'%3E%3C/path%3E%3Cpath fill='%2300b8f0' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%2380ddff' d='M71.567 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V42.2998L71.567 15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M49.932 21.279C50.8549 21.279 51.603 20.5309 51.603 19.608C51.603 18.6851 50.8549 17.937 49.932 17.937C49.0091 17.937 48.261 18.6851 48.261 19.608C48.261 20.5309 49.0091 21.279 49.932 21.279Z'%3E%3C/path%3E%3Cpath fill='%23ffe500' d='M55.789 21.279C56.7119 21.279 57.46 20.5309 57.46 19.608C57.46 18.6851 56.7119 17.937 55.789 17.937C54.8661 17.937 54.118 18.6851 54.118 19.608C54.118 20.5309 54.8661 21.279 55.789 21.279Z'%3E%3C/path%3E%3Cpath fill='%2348cf3e' d='M61.646 21.279C62.5688 21.279 63.317 20.5309 63.317 19.608C63.317 18.6851 62.5688 17.937 61.646 17.937C60.7231 17.937 59.975 18.6851 59.975 19.608C59.975 20.5309 60.7231 21.279 61.646 21.279Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M55.999 34.052C56.9103 34.052 57.649 33.3132 57.649 32.402C57.649 31.4907 56.9103 30.752 55.999 30.752C55.0877 30.752 54.349 31.4907 54.349 32.402C54.349 33.3132 55.0877 34.052 55.999 34.052Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M76.899 34.052C77.8103 34.052 78.549 33.3132 78.549 32.402C78.549 31.4907 77.8103 30.752 76.899 30.752C75.9877 30.752 75.249 31.4907 75.249 32.402C75.249 33.3132 75.9877 34.052 76.899 34.052Z'%3E%3C/path%3E%3Cpath fill='%23c7f0ff' stroke='%233887B7' stroke-linecap='round' stroke-linejoin='round' d='M80.12 39.6307C80.1097 40.0406 79.9395 40.4302 79.646 40.7165C79.3524 41.0028 78.9585 41.163 78.5485 41.163C78.1384 41.163 77.7446 41.0028 77.451 40.7165C77.1574 40.4302 76.9873 40.0406 76.977 39.6307C76.977 38.7627 78.549 35.7017 78.549 35.7017C78.549 35.7017 80.12 38.7627 80.12 39.6307Z'%3E%3C/path%3E%3Cpath fill='%23ffb59e' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M61.727 44.2536C61.5404 44.2535 61.3563 44.2108 61.1886 44.1288C61.021 44.0468 60.8743 43.9277 60.7596 43.7804C60.645 43.6332 60.5654 43.4618 60.527 43.2791C60.4886 43.0965 60.4924 42.9076 60.538 42.7266C60.8732 41.4135 61.6361 40.2494 62.7064 39.418C63.7766 38.5866 65.0933 38.1353 66.4485 38.1353C67.8037 38.1353 69.1204 38.5866 70.1906 39.418C71.2609 40.2494 72.0238 41.4135 72.359 42.7266C72.406 42.9073 72.4106 43.0964 72.3722 43.2791C72.3339 43.4618 72.2537 43.6331 72.138 43.7796C72.0236 43.9274 71.8769 44.0469 71.7091 44.1291C71.5413 44.2113 71.3569 44.2539 71.17 44.2536C69.6156 43.9216 68.0367 43.7176 66.449 43.6436C64.861 43.7176 63.2817 43.9216 61.727 44.2536V44.2536Z'%3E%3C/path%3E%3C/svg%3E", Ht = {
  de: {
    tags: "Schlagwörter",
    tagsHeadline: "Posts nach Schlagwörtern",
    tagsClear: "Zurücksetzen",
    posts: "Einträge",
    follow: "Folgen",
    similarPosts: "Ähnliche Artikel",
    withAuthor: "Mit",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${et}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Hoppla, Adblocker erkannt!</h5>
            <div class="ad-block-info__text">Damit unsere Website reibungslos funktioniert, füge uns zur Whitelist hinzu. Wir nerven nicht mit Werbung. Versprochen!</div>
          </div>
        </div>`,
    vatInfo: "*Alle Preise sind exklusive Mehrwertsteuer. Unsere Angebote richten sich ausschließlich an gewerbliche Kunden."
  },
  en: {
    tags: "Tags",
    tagsHeadline: "Posts by Tags",
    tagsClear: "Clear all",
    posts: "Posts",
    follow: "Follow",
    similarPosts: "Similar Posts",
    withAuthor: "With",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${et}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detected!</h5>
            <div class="ad-block-info__text">To keep our website running smoothly, add us to the whitelist. We won't annoy you with ads. Promise!</div>
          </div>
        </div>`,
    vatInfo: "*All prices are excluding VAT. Our offers are addressing professional customers, only."
  },
  es: {
    tags: "Tags",
    tagsHeadline: "Entradas por Tags",
    tagsClear: "Borrar todo",
    posts: "Puestos",
    follow: "Siga",
    similarPosts: "Puestos similares",
    withAuthor: "Con",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${et}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detectado!</h5>
            <div class="ad-block-info__text">Para que nuestro sitio web funcione correctamente, añádenos a tu lista blanca. No te molestaremos con publicidad. Te lo prometemos.</div>
          </div>
        </div>`,
    vatInfo: "*Todos los precios son sin IVA. Nuestras ofertas se dirigen exclusivamente a clientes profesionales."
  }
}, st = Ht, Wt = {
  tagName: "ad-block-info",
  props: {
    text: String,
    show: {
      default: null
    }
  },
  computed: {
    textValue() {
      return this.text.length > 0 ? this.text : st == null ? void 0 : st.adBlockInfo;
    }
  },
  data() {
    return {
      disableDelay: 30 * 24 * 60 * 60 * 1e3,
      storageKey: "adBlockInfo"
    };
  },
  mounted() {
    this.bindEvents(), n.isTrue(this.show) && this.openModal();
  },
  methods: {
    bindEvents() {
      this.isDisabled() || document.addEventListener(f.AD_BLOCK_INFO, () => {
        this.openModal();
      });
    },
    openModal() {
      var t;
      Q.open((t = this.$refs["modal-component"]) == null ? void 0 : t.modal), this.disableInfoByTime();
    },
    disableInfoByTime() {
      const t = Date.now() + this.disableDelay;
      n.storageSave(this.storageKey, t);
    },
    isDisabled() {
      const t = n.storageGet(this.storageKey);
      return t && t > 0 && Date.now() <= t;
    }
  },
  template: `
    <div class="ad-block-info vue-component" v-if="textValue">
      <modal
        ref="modal-component"
        notification=true
      >
        <div class="container">
          <div class="row">
            <div class="col" v-html="textValue"></div>
          </div>
        </div>
      </modal>
    </div>
  `
}, Gt = {
  tagName: "arrow",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 28 17">
      <g transform="translate(0.75 0.75)">
        <path d="M0.5 0.5L26 0.5" transform="translate(0 7)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M0 15L7 7.5L0 0" transform="translate(19 0)" fill="none" fill-rule="evenodd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  `
}, Jt = {
  tagName: "arrow-curl",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" viewBox="0 0 26 28">
      <path d="M24.9384 0.252534C25.3512 0.218513 25.7134 0.525585 25.7475 0.938399C25.7815 1.35121 25.4744 1.71344 25.0616 1.74747L24.9384 0.252534ZM12.8286 3.88889L13.2309 4.52181L13.2309 4.52181L12.8286 3.88889ZM7.47313 12.5556L6.74138 12.3911L6.74138 12.3911L7.47313 12.5556ZM6.54139 27.5213C6.25346 27.8191 5.77865 27.8271 5.48088 27.5392L0.628414 22.847C0.330642 22.5591 0.322666 22.0843 0.610598 21.7865C0.89853 21.4888 1.37334 21.4808 1.67111 21.7687L5.98441 25.9395L10.1552 21.6262C10.4431 21.3284 10.9179 21.3204 11.2157 21.6084C11.5135 21.8963 11.5215 22.3711 11.2335 22.6689L6.54139 27.5213ZM25 1C25.0616 1.74747 25.0616 1.74746 25.0617 1.74746C25.0616 1.74746 25.0616 1.74747 25.0615 1.74747C25.0614 1.74749 25.0611 1.74751 25.0606 1.74755C25.0598 1.74762 25.0584 1.74773 25.0565 1.74789C25.0527 1.74821 25.0468 1.74871 25.0389 1.74939C25.0231 1.75075 24.9992 1.75283 24.9676 1.75565C24.9044 1.76131 24.8106 1.76994 24.6895 1.78173C24.4472 1.80532 24.0962 1.84151 23.664 1.8917C22.7987 1.99215 21.611 2.1483 20.3198 2.37103C19.0268 2.59406 17.6404 2.88208 16.3745 3.24447C15.0976 3.61001 13.9923 4.03778 13.2309 4.52181L12.4262 3.25597C13.3688 2.65666 14.6369 2.18165 15.9617 1.8024C17.2975 1.42 18.7409 1.12122 20.0648 0.892859C21.3904 0.664204 22.6066 0.504381 23.491 0.401705C23.9335 0.35033 24.2938 0.31317 24.5441 0.288795C24.6693 0.276606 24.767 0.267609 24.8339 0.261625C24.8673 0.258634 24.893 0.256395 24.9106 0.254887C24.9194 0.254133 24.9261 0.253562 24.9308 0.253171C24.9331 0.252975 24.9349 0.252825 24.9362 0.252719C24.9368 0.252666 24.9373 0.252624 24.9377 0.252593C24.9379 0.252578 24.938 0.252563 24.9381 0.252555C24.9383 0.252543 24.9384 0.252534 25 1ZM13.2309 4.52181C12.58 4.93566 11.5526 5.93156 10.5608 7.3853C9.57807 8.82573 8.66724 10.6624 8.20489 12.72L6.74138 12.3911C7.25274 10.1154 8.25333 8.1059 9.32172 6.53992C10.381 4.98725 11.5445 3.81648 12.4262 3.25597L13.2309 4.52181ZM8.20489 12.72C7.41961 16.2147 7.05543 19.7828 6.88837 22.4848C6.80495 23.834 6.77093 24.9629 6.75775 25.7534C6.75116 26.1485 6.74978 26.4588 6.75004 26.6694C6.75017 26.7748 6.7507 26.8552 6.7512 26.9088C6.75145 26.9356 6.75169 26.9557 6.75186 26.9689C6.75194 26.9755 6.75201 26.9803 6.75206 26.9834C6.75208 26.985 6.7521 26.9861 6.75211 26.9867C6.75212 26.9871 6.75212 26.9873 6.75212 26.9874C6.75212 26.9875 6.75212 26.9875 6.75212 26.9875C6.75212 26.9875 6.75212 26.9874 6.00223 27C5.25233 27.0126 5.25233 27.0125 5.25233 27.0123C5.25233 27.0123 5.25233 27.0121 5.25232 27.0119C5.25232 27.0116 5.25231 27.0111 5.2523 27.0106C5.25228 27.0094 5.25226 27.0079 5.25223 27.0059C5.25217 27.0018 5.25209 26.9961 5.25199 26.9885C5.25179 26.9735 5.25153 26.9514 5.25126 26.9227C5.25073 26.8652 5.25017 26.7808 5.25004 26.6713C5.24977 26.4523 5.25121 26.133 5.25795 25.7283C5.27145 24.9191 5.30621 23.7673 5.39122 22.3923C5.56103 19.6459 5.9323 15.9918 6.74138 12.3911L8.20489 12.72Z" :fill="color"/>
    </svg>
  `
}, Zt = {
  tagName: "arrow-external",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 34 34">
      <path d="M33.23,2.39,1.79,33.79" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
      <path d="M33.79,33.79v-30a2,2,0,0,0-2-2h-30" transform="translate(-0.79 -0.79)" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:3"></path>
    </svg>
  `
}, Kt = {
  tagName: "arrow-narrow",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 19.74 69.3">
      <polyline fill="none" stroke-width="3px" stroke-linecap="round" stroke-miterlimit="10" points="1.62 1.62 17.91 34.62 1.62 67.62"></polyline>
    </svg>
  `
}, Xt = {
  tagName: "aside-wrapper",
  methods: {},
  props: {},
  template: `
    <div class="aside-wrapper vue-component">
      <div class="aside-wrapper__content">
        <slot name='content'></slot>
      </div>
      <aside class="aside-wrapper__aside">
        <slot name='aside'></slot>
      </aside>
    </div>
  `
}, Yt = {
  tagName: "author-avatar",
  data() {
    return {
      defaultImageOffsetLeft: "50%",
      defaultImageOffsetTop: "60%"
    };
  },
  computed: {
    classList() {
      return ["author__avatar vue-component", this.classes ? this.classes : ""];
    },
    style() {
      const t = this.author.imageOffsetLeft || this.defaultImageOffsetLeft, e = this.author.imageOffsetTop || this.defaultImageOffsetTop;
      return `left:${t};top:${e}`;
    }
  },
  methods: {},
  props: {
    author: {
      default: null
    },
    classes: String,
    imgUrl: String
  },
  template: `
    <div :class="classList">
      <div class="author__avatar-frame">
        <div :style="style">
          <v-img :img="imgUrl" :cloudinary="true" preset="avatar" :alt="author.display_name" />
        </div>
      </div>
    </div>
  `
}, Qt = {
  tagName: "author-header",
  data() {
    return {
      translationData: {}
    };
  },
  computed: {
    classList() {
      return ["author-header row mb-4 mb-lg-5 vue-component", this.classes ? this.classes : ""];
    }
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData(["posts"]);
    });
  },
  methods: {},
  props: {
    author: {
      default: null
    },
    classes: String,
    imgUrl: String,
    postCount: Number
  },
  template: `
    <div :class="classList">
      <div class="author-header__back back">
        <icon icon='arrow' direction='left' hover=true circle=true />
      </div>
      <author-avatar :author="author" :imgUrl="imgUrl" classes="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"></author-avatar>
      <div class="author-header__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <h1 class="author-header__name h2" itemprop="name">{{ author.display_name }}</h1>
        </span>
        <span class="author-header__post-count">{{ postCount }}</span> <span class="ml-1">{{ translationData?.posts }}</span>
      </div>
    </div>
  `
}, te = {
  tagName: "authors",
  computed: {
    classList() {
      return [
        "authors",
        `${n.isTrue(this.noLink) === !0 ? "authors authors--no-link" : "authors"}`,
        "vue-component"
      ];
    },
    seperator() {
      return this.noLink ? " & " : ", ";
    },
    authorArray() {
      return typeof this.authorsList == "object" ? this.authorsList : [this.authorsList];
    },
    hasDataAndAuthors() {
      return this.authorArray && this.dataAuthors;
    },
    langValue() {
      return this.lang ? this.lang : n.getLang();
    }
  },
  methods: {
    authorsSeperator(t, e) {
      return t[t.length - 1] === e;
    },
    authorStart(t, e) {
      if (t[0] === e)
        return this.dataLang.withAuthor;
    },
    authorLink(t) {
      var s;
      const e = n.isNotDefaultLang() ? "/" + this.langValue : "";
      return (s = this.dataAuthors) != null && s.hasOwnProperty(t) ? `${e}${this.dataAuthors[t].permalink}` : null;
    }
  },
  props: {
    authorsList: Array,
    noLink: {
      default: null
    },
    dataLang: {
      default: "de"
    },
    dataAuthors: {
      default: null
    },
    lang: String
  },
  template: `
    <template v-if="hasDataAndAuthors">
      <span :class="classList" v-for="author in authorArray">
        <template v-if="!noLink">
          <a :href="authorLink(author)" class="authors__link post-teaser__auto" itemprop="author" itemscope itemtype="https://schema.org/Person">
            <span class="authors__name" itemprop="name">{{ author }}</span>
          </a>
        </template>
        <template v-else>
          <span class="authors__name" itemprop="name">{{ authorStart(authorArray, author) }} {{ author }}</span>
        </template>
        <template v-if="!authorsSeperator(authorArray, author)">
          {{ seperator }}&nbsp;
        </template>
      </span>
    </template>
  `
}, ee = {
  tagName: "awards",
  migrate: !0,
  template: `
                awards
            `
}, se = {
  tagName: "back-to-top",
  migrate: !0,
  template: `
              back-to-top
          `
}, ie = {
  tagName: "badge",
  props: {
    text: String,
    overlapping: Boolean,
    icon: String,
    color: {
      type: String,
      default: "var(--color-badge-background)"
    },
    textColor: {
      type: String,
      default: "var(--color-badge-icon)"
    },
    uppercase: Boolean,
    classes: String
  },
  computed: {
    classList() {
      return [
        "badge",
        "badge--normal",
        "font-size-1",
        "normal",
        { "badge--overlapping": this.overlapping },
        { "badge--uppercase": this.uppercase },
        this.classes
      ];
    },
    style() {
      return {
        backgroundColor: this.color,
        color: this.textColor
      };
    }
  },
  template: `
    <div :class="classList" :style="style">
      <div class="badge__text">{{ text }}</div>
      <div v-if="icon" class="badge__icon">
        <icon :icon="icon" color="var(--color-badge-icon)" size="medium" />
      </div>
    </div>
  `
}, ae = {
  tagName: "bin",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale)); stroke-linecap:round; stroke-linejoin:round;`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 24 24">
      <path d="M21,4.5,19.188,21.709A2,2,0,0,1,17.2,23.5H6.8a2,2,0,0,1-1.989-1.791L3,4.5" />
      <line x1="0.5" y1="4.5" x2="23.5" y2="4.5" />
      <path d="M7.5,4.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v3" />
      <line  x1="12" y1="9" x2="12" y2="19.5" />
      <line x1="16.5" y1="9" x2="16" y2="19.5" />
      <line x1="7.5" y1="9" x2="8" y2="19.5" />
    </svg>
  `
}, re = {
  tagName: "blog",
  migrate: !0,
  template: `
            blog
        `
};
class z {
  constructor(e) {
    this.root = e, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(f.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(f.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
  }
  addDebugPositions() {
    this.topPosition = document.createElement("div"), this.bottomPosition = document.createElement("div");
    const e = document.querySelector("main");
    e.appendChild(this.topPosition), e.appendChild(this.bottomPosition), this.bottomPosition.style.position = this.topPosition.style.position = "absolute", this.bottomPosition.style.boxSizing = "content-box", this.bottomPosition.style.left = this.topPosition.style.left = 0, this.bottomPosition.style.width = this.topPosition.style.width = "30px", this.bottomPosition.style.height = this.topPosition.style.height = "2px", this.bottomPosition.style.backgroundColor = "rgba(255, 255, 0, 1)", this.bottomPosition.style.border = "1px solid rgb(0, 0, 0)", this.topPosition.style.backgroundColor = "rgba(255, 0, 0, 1)", this.bottomPosition.style.zIndex = this.topPosition.style.zIndex = 1e3, this.bottomPosition.style.pointerEvents = this.topPosition.style.pointerEvents = "none", this.updateDebugPositions();
  }
  updateDebugPositions() {
    !this.topPosition || !this.bottomPosition || (this.topPosition.style.top = (this.calculatedOffsetTop || this.currentTopPosition) + "px", this.bottomPosition.style.top = (this.calculatedOffsetBottom || this.currentBottomPosition) + "px");
  }
  setMarginTop() {
    this.marginTop = parseInt(window.getComputedStyle(this.root).marginTop.replace("px", ""), 10);
  }
  handleDimensionsChanged(e) {
    e.detail === this.root && this.handleResize();
  }
  setOffsets() {
    this.offsetTop = this.root.offsetTop, this.offsetBottom = this.offsetTop + this.root.offsetHeight;
  }
  handleResize() {
    this.resetElements(), this.setOffsets(), this.setDimensions(), this.setPositions(), this.setStickyPosition();
  }
  handleScroll() {
    this.isUpdating || (this.isUpdating = !0, window.requestAnimationFrame(this.setStickyPosition.bind(this)));
  }
  getHeaderHeight() {
    var e, s;
    return this.isHeaderSticky() ? ((s = this.headerSpacer) == null ? void 0 : s.offsetHeight) || 0 : ((e = this.header) == null ? void 0 : e.offsetHeight) || 0;
  }
  isHeaderSticky() {
    if (!this.header) return !1;
    const e = window.getComputedStyle(this.header);
    return e.position === "fixed" || e.position === "absolute" || e.position === "sticky";
  }
  updateClipPath(e) {
    const s = "inset(0% 0% " + e + "%)";
    this.root.style.clipPath = s, this.isUpdating = !1;
  }
  isFirstChild(e) {
    return this.firstChild === e;
  }
  isSticky() {
    return this.root.classList.contains(l.STICKY);
  }
  setPositions() {
    this.setTopPosition(), this.setBottomPosition();
  }
  setTopPosition() {
    this.currentTopPosition = this.root.offsetTop;
  }
  setBottomPosition() {
    this.currentBottomPosition = this.root.offsetTop + this.root.offsetHeight;
  }
  getMainOffsetTop() {
    var e;
    return ((e = this.main) == null ? void 0 : e.offsetTop) || 0;
  }
  getPercentage(e, s) {
    this.calculatedOffsetTop = this.currentTopPosition - s - this.marginTop + this.getMainOffsetTop(), this.calculatedOffsetBottom = this.currentBottomPosition - s + this.getMainOffsetTop(), this.marginTop < 0 && (this.calculatedOffsetBottom -= this.marginTop);
    let i = e, r;
    if (this.calculatedOffsetBottom >= i) {
      let a = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? r = i / a : r = (i - this.calculatedOffsetTop) / a;
    } else
      r = this.maxPercentage;
    return parseFloat(r.toFixed(2));
  }
  isOutOfViewport(e) {
    return e >= this.maxPercentage || e < 0;
  }
  setStickyPosition() {
    const e = this.getHeaderHeight(), s = window.scrollY, i = this.root.offsetHeight - window.innerHeight, r = i > 0 ? this.offsetBottom : this.offsetBottom - e;
    let a = i > 0 ? -i : 0;
    a = a - this.marginTop;
    const o = this.getPercentage(s, a), c = this.isOutOfViewport(o), d = s > r - window.innerHeight;
    !c && d ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = a + "px", this.root.classList.remove(l.OFF_SCREEN), this.root.classList.add(l.STICKY), this.updateClipPath(o)) : o === 0 ? (this.isUpdating = !1, this.root.classList.remove(l.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(l.STICKY), this.root.classList.add(l.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const e = this.root.parentNode;
    this.spacer = document.createElement("div"), e && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), e.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(l.HAS_BACKGROUND) || n.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const e = this.spacer.nextSibling, s = "--color-sticky-scroller";
    if (!e) return;
    const i = n.getElementBgColor(e) || n.getElementBgColor(e.firstChild);
    this.spacer.style.setProperty(s, i), this.spacer.classList.add(l.HAS_BACKGROUND);
  }
  setDimensions() {
    const e = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > e ? e : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(l.STICKY);
  }
  static init() {
    this.instances = [], [].forEach.call(document.querySelectorAll(this.rootSelector), (e) => {
      this.instances.push(new this(e));
    });
  }
  static getRootClass() {
    return this.rootSelector.substring(1);
  }
}
p(z, "rootSelector", ".is-sticky-scroller"), p(z, "instances", []);
const oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: z
}, Symbol.toStringTag, { value: "Module" })), ne = {
  tagName: "blog-recent",
  computed: {
    classList() {
      return [
        "blog-recent utility-animation utility-animation--percentage-offset",
        `${this.hasBackground}`,
        `${this.skinClass}`,
        `${n.isTrue(this.hideContainer) === !0 ? "" : this.getSpacing}`,
        `${n.isTrue(this.sticky) === !0 ? z.rootSelector.substring(1) : ""}`,
        "vue-component"
      ];
    },
    getSpacing() {
      return this.spacing ? this.spacing : "";
    },
    hasBackground() {
      return this.bgColor ? l.HAS_BACKGROUND : "";
    },
    blogRecentContainerClass() {
      return [
        "blog-recent__container fade-in-bottom",
        `${n.isTrue(this.slider) === !0 ? "js-slick-carousel" : "row mb-3"}`,
        "vue-component"
      ];
    },
    hiddenContainer() {
      return n.isTrue(this.slider) === !1 ? n.isTrue(this.hideContainer) : !1;
    },
    skinClass() {
      return `${n.isTrue(this.slider) === !0 ? "has-slider" : ""}`;
    },
    itemClass() {
      return `${n.isTrue(this.slider) === !0 ? "mb-6 mb-lg-0 blog-recent__slide" : "col-sm-6 col-lg-4 mb-3 mb-sm-8"}`;
    },
    postsArray() {
      return this.posts ? JSON.parse(this.posts) : [];
    },
    ctaParse() {
      return this.cta ? JSON.parse(this.cta) : null;
    },
    caseStudies() {
      return n.isTrue(this.caseStudies) === !0;
    },
    carouselOptions() {
      const t = {
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.postsArray.length > 3,
        centerMode: !1,
        dotsClass: "slick-pagination is-default",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: !0,
              infinite: !0,
              centerPadding: "30px",
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.postsArray.length > 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: !0,
              infinite: !1,
              centerPadding: "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.postsArray.length > 1
            }
          }
        ]
      };
      return JSON.stringify(t);
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      const t = "h2-font-size";
      return this.headlineClasses ? n.hasFontSizeClass(this.headlineClasses) ? this.headlineClasses : `${t} ${this.headlineClasses}` : t;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : "font-size-2"}`;
    }
  },
  methods: {
    event(t) {
      return t.layout !== "post";
    },
    isTrue(t) {
      return n.isTrue(t);
    },
    blogTitleUrl(t) {
      return t.layout === "casestudies" ? t.blogtitlepic : this.imgUrl + t.blogtitlepic;
    },
    target(t) {
      return t.external ? "_blank" : "_self";
    }
  },
  props: {
    bgColor: String,
    dataAuthors: Object,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    posts: String,
    cta: {
      default: null
    },
    hideContainer: {
      default: !1
    },
    imgUrl: {
      default: null
    },
    limit: {
      default: null
    },
    slider: {
      default: null
    },
    sticky: {
      default: null
    }
  },
  template: `
    <template v-if="postsArray.length > 0">
      <div :class="classList">
        <div class="blog-recent__bg" :style="{ 'background-color' : bgColor  }" v-if="skinClass !== ''"></div>
        <wrapper :hideContainer="hiddenContainer">
          <div class="row" v-if="headline">
            <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom" data-utility-animation-step="1">
              <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
              <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
            </div>
          </div>
          <div :class="blogRecentContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
            <template v-for="(post, index) in postsArray">
              <div :class="itemClass" v-if="index <= limit">
                <card :url="post.url" :title="post.title" :blog-title-pic="blogTitleUrl(post)" :youtube-url="post.youtubeUrl" :excerpt="post.excerpt" :date="post.date" :author="post.author" :target="target(post)" :event="event(post)" :dataAuthors="dataAuthors" :external-language="post.externalLanguage">
              </div>
            </template>
          </div>
          <div class="blog-recent__cta-row row col-lg-12" v-if="ctaParse">
            <cta :text="ctaParse?.text" :button="ctaParse?.button" :target="ctaParse?.target" :width="ctaParse?.width" :href="ctaParse?.href" :external="ctaParse?.external" />
          </div>
        </wrapper>
      </div>
    </template>
  `
}, le = {
  tagName: "card-footer",
  data() {
    return {
      maxTags: 3
    };
  },
  computed: {
    lang() {
      return n.getLang();
    },
    tagsList() {
      return (Array.isArray(this.tags) ? this.tags : this.tags.split(",")).slice(0, this.maxTags);
    },
    dataAuthorsList() {
      return this.dataAuthors ? this.dataAuthors.display_name ? { [this.dataAuthors.display_name]: this.dataAuthors } : this.dataAuthors : null;
    }
  },
  template: `
    <div class="card__footer">
      <div class="card__tags" v-if="tags">
        <tag v-for="tag in tagsList" :key="tag" :tag="tag" variant="small" :lang="lang"></tag>
      </div>
      <div class="card__footer-infos d-flex align-items-end mt-auto" >
        <div :class="['card__date d-flex font-size-1 mr-3', isRow ? '' : 'media-body']">
          {{ date }}
        </div>
        <div class="card__authors" v-if="author">
          <authors :authorsList="authorsList" :noLink="hasNoLink" :dataAuthors="dataAuthorsList"></authors>
        </div>
      </div>
    </div>
  `,
  props: {
    classes: String,
    date: String,
    author: String,
    authorsList: Array,
    hasNoLink: Boolean,
    dataAuthors: Object,
    isRow: Boolean,
    tags: Array
  }
}, ce = {
  tagName: "card",
  components: {
    "card-footer": le
  },
  data() {
    return {
      wordsToTruncate: 20,
      activeView: null
    };
  },
  computed: {
    blogView() {
      return this.activeView;
    },
    combinedTitle() {
      return `${this.title} ${this.externalLanguage ? "(" + this.externalLanguage + ")" : ""}`;
    },
    noLink() {
      return this.url === void 0 || this.url === "";
    },
    indexValue() {
      return this.index != "" && this.index >= 0 ? this.index : null;
    },
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    hasAnimationValue() {
      return n.isTrue(this.hasAnimation) === !0;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? "1" : null;
    },
    rowValue() {
      return n.isTrue(this.row) === !0;
    },
    variant() {
      return n.isTrue(this.long) === !0 ? "card--long" : this.productValue ? "card--products" : n.isTrue(this.event) === !0 ? "card--event" : this.rowValue ? "card--row" : "card--default";
    },
    classList() {
      return [
        "card",
        this.hasAnimationValue ? "utility-animation fade-in-bottom" : "",
        `${this.noLink ? "card--no-link" : ""}`,
        `${n.isTrue(this.large) === !0 ? "card--large mb-11" : "h-100"}`,
        this.variant,
        this.spacing,
        "vue-component"
      ];
    },
    productValue() {
      return n.getJSON(this.product);
    },
    truncatedExcerpt() {
      const t = n.isTrue(this.long) === !0 ? this.strippedExcerpt : n.truncateWords(this.strippedExcerpt, this.wordsToTruncate);
      return n.decodeHTML(t);
    },
    strippedExcerpt() {
      return n.stripHtml(this.excerpt);
    },
    cardDate() {
      return this.formatDate(this.date);
    },
    hasExtension() {
      return this.youtubeUrl ? n.getYoutubeThumbnail(this.youtubeUrl) : /^.+\.(jpg|webp|png)/.test(this.blogTitlePic) ? this.blogTitlePic : this.blogTitlePic + ".jpg";
    },
    hasBlogTitlePic() {
      return !this.youtubeUrl;
    },
    hasNoLink() {
      return !!n.isTrue(this.webCast);
    },
    ctaValue() {
      const t = n.getJSON(this.cta);
      return t && t.link === void 0 && (t.link = !0), t;
    },
    cardFooterData() {
      return {
        date: this.cardDate,
        author: this.author,
        authorsList: this.authorList(this.author),
        hasNoLink: this.hasNoLink,
        dataAuthors: this.dataAuthors,
        isRow: this.rowValue,
        tags: this.tags
      };
    }
  },
  created() {
    if (n.isTrue(this.store) !== !0) return;
    const t = this.$root.StoreData.blogView;
    if (!t) return null;
    this.activeView = t(), t.subscribe((e) => {
      this.activeView = e;
    });
  },
  methods: {
    isTags(t) {
      return !!(t.parentElement.classList.contains("tags__btn") || t.parentElement.classList.contains("card__tags"));
    },
    formatDate(t) {
      if (!t) return;
      if (n.isGermanDate(t)) return t;
      const s = t.split(" ")[0].split("-"), i = s[0], r = s[1];
      return `${s[2]}.${r}.${i}`;
    },
    authorList(t) {
      return t && typeof t == "object" && t.length > 0 ? t : t && typeof t == "string" ? [t] : t;
    },
    subPointsList(t) {
      return n.getJSON(t);
    },
    headlineClassValue(t) {
      return t !== 0 ? "mt-5" : "";
    },
    handleClick(t) {
      if (this.noLink) return;
      const e = this.$refs.title, s = t.target;
      if (s.classList.contains("card__title")) return;
      const i = this.isTags(s);
      if (!s.parentElement.classList.contains("authors__link") && !i)
        t.stopImmediatePropagation(), e.click();
      else {
        if (!i) return;
        t.stopImmediatePropagation(), t.preventDefault(), this.$emit(f.CARD_TAG_CLICKED, s.dataset.tag);
      }
    },
    isIncluded(t) {
      return n.isTrue(t) ? "check-mark" : "x-mark";
    }
  },
  props: {
    blogTitlePic: String,
    url: String,
    title: String,
    target: String,
    excerpt: String,
    author: Array,
    date: String,
    footer: String,
    tag: {
      default: null
    },
    large: {
      default: null
    },
    long: {
      default: null
    },
    product: {
      default: null
    },
    subPoints: {
      default: null
    },
    event: {
      default: null
    },
    webCast: {
      default: null
    },
    youtubeUrl: String,
    dataAuthors: Object,
    scope: String,
    cta: {
      default: null
    },
    hasAnimation: {
      default: null
    },
    index: Number,
    externalLanguage: String,
    spacing: String,
    store: {
      default: null
    },
    row: {
      default: null
    },
    tags: Array
  },
  template: `
    <article :class="classList" itemscope itemtype="http://schema.org/BlogPosting"
      :onclick="handleClick"
      :data-utility-animation-step="utilityAnimationStep"
      :style="style"
    >
      <template v-if="large">
        <div class="row no-gutters">
          <div class="col-lg-8" v-if="blogTitlePic">
            <div class="card__img-top position-relative overflow-hidden is-foreground">
              <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
              <figure class="d-none d-lg-block">
                <svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure class="d-lg-none mb-n1">
                <svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card__body card-body d-flex flex-column h-100 p-4 p-lg-5">
              <headline level="h3"><a class="card__title text-inherit" ref="title" :href="url" :target="target">{{ combinedTitle }}</a></headline>
              <p v-html="truncatedExcerpt"></p>
              <card-footer v-bind="cardFooterData" />
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="productValue">
        <div class="card__img-top card-img--products position-relative no-gutters is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <div class="card__img-headline-container">
            <template v-if="tag">
              <span class="card__img-tag"
              :style="{'background-color': tag.bgColor, 'color': tag.color }">
                {{ tag.text }}
              </span>
            </template>
            <headline level="h4" classes="card__img-headline text-light text-center">
              <p class="w-100 pt-5 mb-0 no-gutters">
                {{ title }}
              </p>
            </headline>
            <div class="card-img-cutoff" />
          </div>
        </div>

        <div class="card__body card-body mt-0 pt-0 z-index-2">
          <template v-for="(info, index) in subPointsList(productValue)">
            <headline :class="headlineClassValue(index)" level="h6" :text="info.title"/>
            <template v-for="points in info.subpoints">
              <div class="card__check-mark-row">
                <span class="card__check-placeholder" v-if="points.hideIcon"></span>
                <icon class="card__check-mark-icon" v-else :icon="isIncluded(points.included)" size="medium" />
                <span class="card__check-mark-point">{{ points.subpoint }}</span>
              </div>
            </template>
          </template>
        </div>
     </template>

      <template v-else-if="long">
        <div class="card__img-top position-relative no-gutters is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
        </div>

        <div class="card__body card-body richtext">
          <div class="card__scope" v-if="scope">{{ scope }}</div>
          <headline level="h4"><a ref="title" class="card__title text-inherit text-decoration-none text-reset mt-4 mb-4" :href="url" :target="target">{{ combinedTitle }}</a></headline>
          <p class="mb-4 mt-4" v-html="truncatedExcerpt"></p>

          <ul class="card__points text-black">
            <template v-for="points in subPointsList(subPoints)">
              <li class="mb-4"><span>{{ points }}</span></li>
            </template>
          </ul>
          <p class="card-warning" v-if="footer">{{ footer }}</p>

          <div class="card__link" v-if="cta">
            <cta v-bind="ctaValue" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="card__img-top position-relative is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
              <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
            </svg>
          </figure>
        </div>

        <div class="card__content">
          <div class="card__body card-body">
            <headline level="h4"><a ref="title" class="card__title text-inherit" :href="url" :target="target">{{ combinedTitle }}</a></headline>
            <p v-html="truncatedExcerpt"></p>
          </div>

          <div class="card-footer border-0 pt-0">
            <card-footer v-bind="cardFooterData" />
          </div>
        </div>
      </template>
    </article>
  `
}, de = {
  tagName: "carousel-item",
  template: `
    <a :href="item.url" :target="item.target" class="carousel__item">
      <v-img
        :cloudinary="true"
        v-bind="item"
        :class="item.classes"
      ></v-img>
    </a>
  `,
  props: {
    item: Object
  }
}, he = {
  tagName: "carousel",
  components: {
    "carousel-item": de
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null
    };
  },
  computed: {
    jsonItems() {
      return n.getJSON(this.items);
    },
    classList() {
      return ["carousel vue-component", this.bgColor ? l.HAS_BACKGROUND : ""];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : "",
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : ""
      ];
    }
  },
  mounted() {
    const t = this.$refs["row-section"];
    this.resizeObserver = new ResizeObserver((e) => {
      for (let s of e)
        s.target === t && (this.clientWidth = s.contentRect.width);
    }), t && (this.resizeObserver.observe(t), window.addEventListener("resize", this.updateClientWidth));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      var t;
      this.clientWidth = (t = this.$refs["row-section"]) == null ? void 0 : t.clientWidth;
    }
  },
  props: {
    items: Array,
    bgColor: String
  },
  template: `
    <div :class="classList" ref="carousel" :style="style">
      <div class="carousel__container">
        <div class="carousel__row">
          <section class="carousel__row-section" ref="row-section">
            <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
          </section>
          <section class="carousel__row-section">
            <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
          </section>
        </div>
      </div>
    </div>
  `
}, pe = {
  tagName: "check",
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 512 512">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  `
}, ue = {
  tagName: "check-card",
  computed: {
    classList() {
      return [
        "check-card vue-component",
        this.hasProducts ? "check-card--products" : null,
        this.classes ? this.classes : null
      ];
    },
    checkCardsContainerClass() {
      return [
        "check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list"
      ];
    },
    containerValue() {
      return `col-lg-12 col-md-10 ${this.spacing ? this.spacing : ""} mb-9`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      return `h2-font-size utility-animation fade-in-bottom ${this.headlineClasses ? this.headlineClasses : ""} ${this.subline ? "mb-10" : ""}`;
    },
    sublineClassesValue() {
      return `check-card__subline utility-animation fade-in-bottom e w-lg-65 ${this.sublineClasses ? this.sublineClasses : "font-size-2"}`;
    },
    itemClass() {
      return "check-card__slide";
    },
    hasProducts() {
      var t;
      return (t = this.checks[0]) == null ? void 0 : t.product;
    },
    carouselOptions() {
      const t = this.hasProducts ? 2 : 3, e = {
        slidesToShow: t,
        slidesToScroll: t,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.checks.length > t,
        centerMode: !1,
        dotsClass: "slick-pagination is-default",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.checks.length > 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: !0,
              infinite: !0,
              centerPadding: this.hasProducts ? "37px" : "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: !0,
              infinite: !1,
              centerPadding: "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: !0,
              infinite: !1,
              centerPadding: "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1
            }
          }
        ]
      };
      return JSON.stringify(e);
    }
  },
  methods: {},
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    checks: {
      default: null
    },
    products: {
      default: null
    },
    classes: String
  },
  template: `
    <div :class="classList">
      <div class="container">
        <div class="row" v-if="headline">
          <div :class="containerValue">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" data-utility-animation-step="1" />
            <div v-if="subline" :class="sublineClassesValue" v-html="subline" data-utility-animation-step="1"></div>
          </div>
        </div>
        <div :class="checkCardsContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
          <template v-for="(check, index) in checks">
            <div :class="itemClass">
              <template v-if="hasProducts">
                <card :product="check.product" :title="check.title" :tag="check.tag" :blog-title-pic="check.picture" />
              </template>
              <template v-else>
                <card :url="check.url" :title="check.title" :blog-title-pic="check.picture" :excerpt="check.subline" :sub-points="check.subpoints" :scope="check.scope" :footer="check.footer" :cta="check.cta" long=true />
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  `
}, me = {
  tagName: "check-mark",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    foregroundStroke() {
      return this.color ? this.color : "#001F35";
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_904)">
        <path d="M24.86 3.19L11.91 24.13C11.47 24.56 10.88 24.81 10.27 24.81C9.65999 24.81 9.05999 24.57 8.62999 24.13L3.29999 18.8" stroke="#F5C663" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.97 1.42L10.03 22.36C9.58998 22.79 8.99998 23.04 8.38998 23.04C7.77998 23.04 7.17998 22.8 6.74998 22.36L1.41998 17.03" :stroke="foregroundStroke" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_904">
        <rect width="27.7" height="27.64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `
}, it = 48, ge = {
  tagName: "close",
  computed: {
    outerPosition() {
      return it - this.padding;
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    padding: Number,
    viewBoxWidth: String,
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 ${it} ${it}">
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="padding" :x2="padding" :y2="outerPosition"/>
      <line fill="none" stroke-linecap="round" stroke-linejoin="round" :x1="outerPosition" :y1="outerPosition" :x2="padding" :y2="padding"/>
    </svg>
  `
}, fe = {
  tagName: "computer-shield",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 28 22">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-286.000000, -596.000000)">
          <g transform="translate(120.000000, 564.000000)">
            <g transform="translate(166.995621, 33.000000)">
              <path d="M21.0044136,7.99696471 L21.0044136,2.47375743 C21.0072481,1.94643087 20.6570661,1.468542 20.1146962,1.25964335 C17.6802651,0.444696877 15.1042558,0.0183213697 12.5043788,0 C9.90429886,0.0192923452 7.32828319,0.446696323 4.89406129,1.26267864 C4.3516914,1.47157728 4.00150939,1.94946616 4.00439648,2.47679272 L4.00421285,7" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.00437876,16 C7.99128312,18.5570825 11.1446288,20 12.5043788,20 C13.8641287,20 17.0174744,18.5570825 19.0043788,16" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4.00437876,12 C3.81134242,13.593127 2.18171535,15.5806978 1.17121992,15.9606135 C1.08113014,15.9953185 1.01663477,16.0874351 1.00593652,16.1966824 C0.995238278,16.3059297 -0.0767125292,15.942815 0.00437876214,16 L2.00437876,18 L1.00437876,20 C0.963356109,20.0945274 2.27873674,19.8017021 2.33315117,19.8866815 C2.3875656,19.9716609 0.914354759,20.0180016 1.00437876,20 C2.24694081,19.8329143 5.99508794,17.8557747 7.00437876,17 L4.00437876,12 Z" id="Path" fill="#FCD116"></path>
              <path d="M3.51718325,13 C3.32414691,14.593127 1.18171535,15.5806978 0.171219921,15.9606135 C0.0811301363,15.9953185 0.0166347678,16.0874351 0.00593652312,16.1966824 C-0.00476172158,16.3059297 0.0402835633,16.4124316 0.121374855,16.4696165 L2.07439516,17.8266081 L1.31131252,19.5939506 C1.27028987,19.688478 1.27873674,19.8017021 1.33315117,19.8866815 C1.3875656,19.9716609 1.47867031,20.0139072 1.56869431,19.9959055 C2.81125636,19.8288199 3.99508794,19.2910874 5.00437876,18.4353127" id="Path-Copy-3" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M22.0043788,12 C22.1974151,13.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 21.013589,17.8559443 20.0043788,17" id="Path-Copy-2" fill="#FCD116"></path>
              <path d="M22.4915743,13 C22.6846106,14.593127 24.8261359,15.5806978 25.8375376,15.9606135 C25.9276274,15.9953185 25.9921228,16.0874351 26.002821,16.1966824 C26.0135192,16.3059297 25.968474,16.4124316 25.8873827,16.4696165 L23.9343624,17.8266081 L24.697445,19.5939506 C24.7384677,19.688478 24.7300208,19.8017021 24.6756064,19.8866815 C24.6211919,19.9716609 24.5300872,20.0139072 24.4400632,19.9959055 C23.1974607,19.8290077 22.013589,19.291257 21.0043788,18.4353127" id="Path" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path" fill="#FCD116"></path>
              <path d="M12.5043788,13.36902 C16.3585565,13.36902 18.3750405,14.8637551 19.2689924,15.8162193 C19.401543,15.9572068 19.6024313,16.0217025 19.7979613,15.986046 C19.9934914,15.9503895 20.1548788,15.8198299 20.2229184,15.642263 L21.9689537,11.0850389 C22.0629407,10.8447527 21.9648438,10.5749327 21.7347156,10.4407565 C18.9425573,8.86019218 15.7555445,8.0174578 12.5043788,8 C9.25279345,8.01875725 6.06575163,8.86298234 3.27404189,10.4450517 C3.04391371,10.5792279 2.94581682,10.8490479 3.03980384,11.0893341 L4.78583912,15.6465583 C4.85387876,15.8241251 5.01526616,15.9546847 5.21079618,15.9903412 C5.4063262,16.0259977 5.60721454,15.9615021 5.73976507,15.8205145 C6.63371703,14.8637551 8.65020107,13.36902 12.5043788,13.36902 Z" id="Path-Copy" style="stroke: currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `
}, ve = {
  tagName: "contact",
  props: {
    contact: Object,
    collapsed: Boolean,
    ajax: Boolean,
    spacing: String,
    quote: {
      type: Boolean,
      default: !1
    },
    bgColor: String,
    color: String,
    boxBgColor: String,
    boxColor: String,
    level: String,
    headline: String,
    subline: String,
    form: Object,
    buttons: Array,
    svgShape: Object,
    person: Object,
    noTopSpacing: Boolean
  },
  computed: {
    classList() {
      var t;
      return [
        "contact",
        this.contactVariantClass,
        "vue-component",
        this.collapsed ? "" : "space-bottom-2 utility-animation utility-animation--percentage-offset",
        { "bg-grey": this.contact.hasGreyBackground },
        this.noTopSpacing || (t = this.contact) != null && t.svgShape || this.collapsed ? "" : this.spacing
      ];
    },
    contactVariantClass() {
      return [
        this.contact.svgShape && !this.quote ? "contact--has-shape" : "",
        this.quote ? "contact--quote" : "",
        this.collapsed ? l.COLLAPSED : ""
      ];
    },
    contactLight() {
      return this.contact.light ? "contact__person--light" : "";
    },
    contactBoxClass() {
      return this.collapsed ? "" : "col-md-10 col-lg-5 offset-lg-1 order-2";
    },
    contactFormClass() {
      return this.collapsed ? "" : "col-md-10 col-lg-6 order-1";
    },
    contactContainerClass() {
      return this.collapsed ? "" : "container pt-8 pt-lg-10";
    },
    contactRowClass() {
      return this.collapsed ? "" : "row justify-content-center";
    },
    styleObject() {
      return {
        "--color-contact-background": this.bgColor || this.contact.bgColor,
        "--contact-copy-color": this.color || this.contact.color,
        "--color-contact-box-background": this.boxBgColor || this.contact.boxBgColor,
        "--contact-box-copy-color": this.boxColor || this.contact.boxColor
      };
    }
  },
  template: `
    <svg-shape v-if="contact.svgShape" :align="contact.svgShape.align" :peak="contact.svgShape.peak" spacing="mt-8 mt-lg-10" color="var(--color-bg-grey)" />
    <div :class="classList" :style="styleObject">
      <div :class="contactContainerClass">
        <div :class="contactRowClass">
          <div :class="['contact__form', contactFormClass]" v-if="!collapsed" data-utility-animation-step="1">
            <headline :text="contact.headline" :classes="contact.headlineClasses" :level="level" />
            <span class="contact__subline font-weight-bold font-size-2">{{ contact.subline }}</span>
            <formular v-if="contact.form" :form="contact.form" :ajax="ajax" uncentered="false" />
            <div v-if="contact.buttons" class="pt-4 pt-lg-6 pb-6">
              <cta-list :list="contact.buttons" />
            </div>
          </div>

          <div :class="['contact__box', contactBoxClass]" data-utility-animation-step="1">
            <div :class="['contact__person', contactLight]">
              <template v-if="quote">
                <div class="contact__person-quote">
                  <div class="contact__icon">
                    <icon icon="quotes" />
                  </div>
                  <div class="contact__image-quote">
                    <div class="contact__image-spacer">
                      <v-img :img="contact.person.image" :cloudinary="contact.person.cloudinary" :alt="contact.person.alt" preset="cardSmall" lazy />
                    </div>
                  </div>
                  <div class="contact__quote font-size-3 middle font-weight-light">{{ contact.person.quote }}</div>
                  <div class="d-flex flex-column">
                    <span>{{ contact.person.quotee }}</span>
                    <span class="font-weight-light">{{ contact.person.quoteeTitle }}</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="contact__image">
                  <v-img :img="contact.person.image" :cloudinary="contact.person.cloudinary" :alt="contact.person.alt" preset="cardSmall" lazy />
                </div>
                <div class="contact__name font-size-4 my-6 mx-5">{{ contact.person.name }}</div>
                <div class="contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap">
                  <div v-for="(detail, index) in contact.person.details" :key="index" class="contact__detail w-100 px-5 d-flex align-items-center" :class="{'mb-3 mb-lg-4': !index === contact.person.details.length - 1}">
                    <a :href="detail.href" class="d-flex custom">
                      <span class="streamline-sm mr-4">
                        <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                        <site-icons v-else icon="site/phone" />
                      </span>
                      <span class="contact__detail-text">{{ detail.text }}</span>
                    </a>
                    <div v-if="detail.notes" class="contact__notes">
                      <span class="contact__notes-spacing streamline-sm mr-4">
                        <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                        <site-icons v-else icon="site/phone" />
                      </span>
                      {{ detail.notes }}
                    </div>
                  </div>
                  <div v-if="contact.person.number" class="contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4">
                    <a :href="'tel:' + contact.person.number" class="custom">
                      <site-icons icon="site/phone" />
                      {{ contact.person.number }}
                    </a>
                  </div>
                  <div v-if="contact.person.mail" class="contact__mail w-100 px-5 d-flex align-items-center">
                    <a :href="'mailto:' + contact.person.mail" class="custom">
                      <site-icons icon="site/mail" />
                      {{ contact.person.mail }}
                    </a>
                  </div>
                </div>
              </template>
            </div>

            <div v-if="quote" class="contact__detail-quote">
              <headline :text="contact.person.detailsHeader" level="h4" classes="contact__detail-headline" />
              <div v-for="(detail, index) in contact.person.details" :key="index" class="contact__detail font-size-2 w-100 d-flex align-items-center" :class="{'mb-3 mb-lg-4': !index === contact.person.details.length - 1}">
                <a :href="detail.href" class="custom">
                  <span class="streamline-sm mr-4">
                    <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                    <site-icons v-else icon="site/phone" />
                  </span>
                  {{ detail.text }}
                </a>
                <div v-if="detail.notes" class="contact__notes">
                  <span class="contact__notes-spacing streamline-sm mr-4">
                    <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                    <site-icons v-else icon="site/phone" />
                  </span>
                  {{ detail.notes }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}, ye = {
  tagName: "content-scroller",
  data() {
    return {
      blockScrollPercentage: [],
      scrollDistancePercentage: 0,
      minHeight: 0,
      blockCount: 0,
      isScrolledUpOut: !1,
      isScrolledDownOut: !1
    };
  },
  computed: {
    blocksValue() {
      return n.getJSON(this.blocks);
    },
    headlineValue() {
      const t = n.getJSON(this.headline);
      return {
        ...t,
        level: t.level || "h2",
        classes: `content-scroller__headline ${t.classes || "h3-font-size"}`
      };
    },
    overlappingSizeValue() {
      return this.overlappingSize || "mt-md-n10";
    },
    style() {
      return {
        "--content-scroller-min-height": `${this.minHeight}px`
      };
    }
  },
  props: {
    headline: {
      default: null
    },
    blocks: Array,
    overlappingSize: String
  },
  mounted() {
    this.calcBlockCount(), this.$nextTick(() => {
      this.handleResize();
    }), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      this.calcScrollDistancePercentage(), this.updateBlocks();
    },
    handleResize() {
      this.calcMinHeight(), this.handleScroll();
    },
    resetIsScrolledUpOut() {
      const t = this.$refs.block;
      t && (t.forEach((e, s) => {
        this.setBlockMinPercentage(s);
      }), this.isScrolledUpOut = !0);
    },
    resetIsScrolledDownOut() {
      const t = this.$refs.block;
      t && (t.forEach((e, s) => {
        this.setBlockMaxPercentage(s);
      }), this.isScrolledDownOut = !0);
    },
    setBlockMaxPercentage(t) {
      this.blockScrollPercentage[t] = 100;
    },
    setBlockMinPercentage(t) {
      this.blockScrollPercentage[t] = 0;
    },
    updateBlocks() {
      if (!this.isScrolledUpOut && this.scrollDistancePercentage <= 0)
        return this.resetIsScrolledUpOut();
      if (!this.isScrolledDownOut && this.scrollDistancePercentage >= 100)
        return this.resetIsScrolledDownOut();
      if (this.scrollDistancePercentage <= 0 || this.scrollDistancePercentage >= 100)
        return;
      this.isScrolledUpOut = !1, this.isScrolledDownOut = !1;
      const s = 100 / this.blockCount, i = this.$refs.block;
      i && i.forEach((r, a) => {
        const o = a * s, c = (a + 1) * s;
        if (this.scrollDistancePercentage >= o && this.scrollDistancePercentage <= c) {
          let d = (this.scrollDistancePercentage - o) / s * 100;
          this.blockScrollPercentage[a] = d;
        } else this.scrollDistancePercentage < o ? this.setBlockMinPercentage(a) : this.scrollDistancePercentage > c && this.setBlockMaxPercentage(a);
      });
    },
    getViewportHeight() {
      return window.innerHeight;
    },
    calcScrollDistancePercentage() {
      const t = this.$el, e = window.scrollY, s = t.getBoundingClientRect().top + window.scrollY, r = t.offsetHeight / 2;
      let a = 0;
      e >= s && (a = (e - s) / r * 100), this.scrollDistancePercentage = a;
    },
    calcBlockCount() {
      const t = this.blocks.length;
      t && (this.blockCount = t);
    },
    calcBlockStyle(t) {
      return [
        {
          "--content-scroller-block-scroll-percentage": this.blockScrollPercentage[t]
        }
      ];
    },
    calcMinHeight() {
      const t = this.$refs.placeholder;
      t && (this.minHeight = t.offsetHeight);
    }
  },
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]" :style="style">
      <wrapper class="content-scroller__wrapper">
        <div class="content-scroller__row">
          <div class="content-scroller__grid col">
            <div class="content-scroller__content-wrapper">
              <div class="content-scroller__content">
                <headline
                  v-bind="headlineValue"
                />
              </div>
            </div>
            <div class="content-scroller__blocks">
              <div class="content-scroller__blocks-placeholder" ref="placeholder">
                <div class="content-scroller__blocks-frame">
                  <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index" ref="block" :style="calcBlockStyle(index)">
                    <main>
                      <div class="content-scroller__block-space">
                        <headline
                          v-if="block.headline"
                          v-bind="block.headline"
                          :level="block.headline.level || 'h3'"
                          classes="content-scroller__block-headline"
                        />
                        <p class="content-scroller__block-content">{{ block.content }}</p>
                      </div>
                    </main>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </wrapper>
      <div class="content-scroller__background"></div>
    </div>
  `
}, be = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return n.isTrue(this.external);
    },
    downloadValue() {
      return n.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        n.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        n.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && n.isTrue(this.active) === !0 ? l.ACTIVE : "",
        n.isTrue(this.loading) ? l.LOADING : "",
        n.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
        "vue-component"
      ];
    },
    innerSkin() {
      return this.link ? this.skin ? this.skin : "" : this.skin ? `btn-${this.skin}` : "btn-primary";
    },
    innerWidth() {
      return this.width ? this.width : `w-100 ${this.grow ? "" : "w-lg-auto"}`;
    },
    baseClass() {
      let t = this.$.type.tagName;
      return this.link ? t += " link" : t += " btn " + this.innerWidth, t;
    },
    iconName() {
      let t;
      return this.icon ? t = this.icon : this.externalValue || this.downloadValue ? t = "arrow-external" : this.link && (t = "arrow"), t;
    },
    targetValue() {
      return this.externalValue ? "_blank" : this.target;
    },
    sizeValue() {
      return "medium";
    }
  },
  props: {
    href: {
      default: null
    },
    button: Boolean,
    text: String,
    analytics: {
      default: null
    },
    link: Boolean,
    external: {
      default: null
    },
    skin: String,
    width: String,
    grow: Boolean,
    type: String,
    target: String,
    alternativeHref: {
      default: null
    },
    trigger: String,
    icon: String,
    download: {
      default: null
    },
    reversed: {
      default: null
    },
    monochrome: {
      default: null
    },
    active: {
      default: null
    },
    classes: {
      default: "",
      type: String
    },
    loading: {
      default: null
    },
    hasBackground: {
      default: null
    }
  },
  template: `
    <component :is='tag' role="button"
               :class="classList"
               :data-text="text"
               :href="href ? href : null"
               :data-analytics="analytics ? analytics : null"
               :type="type ? type : null"
               :target="targetValue ? targetValue : null"
               :data-alternative-href="alternativeHref ? alternativeHref : null"
               :data-trigger="trigger ? trigger : null"
    >
      <span class="cta__text">{{ text }}</span>
      <icon :icon="iconName" v-if="hasIcon" :size="sizeValue" />
    </component>`
}, Ce = {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return n.getJSON(this.list);
    }
  },
  methods: {
    text(t) {
      return t.text || t.ctaText;
    },
    href(t) {
      return t.href || t.ctaHref;
    },
    type(t) {
      return t.type || t.ctaType;
    }
  },
  props: {
    list: Array,
    classes: String
  },
  template: `
    <div :class="classList">
      <div v-for="cta in ctaList" class="cta-list__item d-inline-block mr-3 mb-2">
        <cta
          v-bind="cta"
          :text="text(cta)"
          :href="href(cta)"
          :type="type(cta)"
        ></cta>
      </div>
    </div>
  `
}, v = class v {
  constructor(e) {
    this.root = e, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${l.IS_STARTING}`).forEach((e) => {
      e.classList.remove(l.IS_STARTING);
    });
  }
  mergeNodes(e, s) {
    const i = Array.from(s);
    return i.unshift(e), i;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(e) {
    const s = [];
    this.currentElements.forEach((i) => {
      e.srcElement !== i && s.push(i);
    }), this.currentElements = s;
  }
  handleAnimationEnd(e) {
    const s = v.getGroup(e.srcElement);
    if (s) {
      const i = parseInt(s.style.getPropertyValue(v.groupItemsLoadedProperty), 10) || 0;
      v.setGroupItemsLoaded(s, i + 1);
    }
    this.updateCurrentElement(e), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(e) {
    e.forEach((s) => {
      s.classList.add(l.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(v.endDataset, !0);
  }
  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }
  static getGroup(e) {
    return e.closest(".utility-animation__group");
  }
  initialize() {
    this.root.addEventListener("animationend", (s) => {
      this.handleAnimationEnd(s);
    }), new MutationObserver((s) => {
      s.forEach((i) => {
        var r;
        i.type === "attributes" && i.attributeName.startsWith(v.inViewportDataset) && ((r = i.target) == null ? void 0 : r.getAttribute(v.inViewportDataset)) === "true" && this.startAnimation();
      });
    }).observe(this.root, { attributes: !0 });
  }
  static setGroupItemsLoaded(e, s) {
    e.style.setProperty(this.groupItemsLoadedProperty, s);
  }
  static hasPercentageOffset(e) {
    return e.root.classList.contains("utility-animation--percentage-offset");
  }
  static hasSmallOffset(e) {
    return e.root.classList.contains("utility-animation--small-offset");
  }
  static addObserver(e) {
    const r = (h) => {
      h.forEach((u) => {
        u.isIntersecting ? u.target.setAttribute(this.inViewportDataset, !0) : u.target.classList.contains("utility-animation--enter-exit") && u.target.removeAttribute(this.inViewportDataset);
      });
    }, a = new IntersectionObserver(r, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), o = new IntersectionObserver(r, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), c = new IntersectionObserver(r, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (e ? [e] : this.instances).forEach((h) => {
      v.hasSmallOffset(h) ? c.observe(h.root) : v.hasPercentageOffset(h) ? o.observe(h.root) : a.observe(h.root);
    });
  }
  static resetGroup(e) {
    this.setGroupItemsLoaded(e, 0), this.instances.forEach((s) => {
      if (this.getGroup(s.root) === e) {
        const r = s.root;
        s.currentElements = [r], r.removeAttribute("data-utility-animation-end"), s.startAnimation();
      }
    });
  }
  static initElement(e) {
    const s = e.$el ? e.$el : e, i = new this(s);
    return this.instances.push(i), i;
  }
  static init(e) {
    this.instances = [], [].forEach.call(e || document.querySelectorAll(this.rootSelector), (s) => {
      this.initElement(s);
    }), this.addObserver();
  }
  static isElementObserved(e) {
    return this.instances.some((s) => s.root === e);
  }
  static observeElementIfNotAlready(e) {
    let s;
    this.isElementObserved(e) || (s = this.initElement(e)), this.addObserver(s);
  }
  static getIndexStyle(e) {
    return `--utility-animation-index: ${e}`;
  }
};
p(v, "rootSelector", ".utility-animation"), p(v, "inViewportDataset", "data-utility-animation-in-viewport"), p(v, "endDataset", "data-utility-animation-end"), p(v, "instances", []), p(v, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let x = v;
const Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x
}, Symbol.toStringTag, { value: "Module" })), ke = {
  tagName: "dropdown",
  props: {
    label: String,
    items: String,
    filterable: {
      default: null
    },
    hasAnimation: {
      default: null
    },
    index: Number
  },
  computed: {
    teleportSelector() {
      return '[id="root"], [data-v-app]';
    },
    dropdownLabelClasses() {
      return [
        "dropdown__label font-size-sm",
        this.hasAnimation ? "utility-animation fade-in-bottom" : ""
      ];
    },
    parsedItems() {
      return n.getJSON(this.items);
    },
    filteredItems() {
      return this.filterableValue && this.filterText.length >= this.minCharsToFilter ? this.parsedItems.filter(
        (t) => t.text.toLowerCase().includes(this.filterText.toLowerCase())
      ) : this.parsedItems;
    },
    filterableValue() {
      return n.isTrue(this.filterable) === !0;
    },
    style() {
      return this.hasAnimation ? `--utility-animation-index: ${this.index};` : "";
    }
  },
  methods: {
    initActiveSelection() {
      this.activeSelection = this.filteredItems.filter((t) => t.checked);
    },
    updateUtilityAnimation() {
      this.hasAnimation && x.observeElementIfNotAlready(this.$refs.label);
    },
    resetSelection() {
      this.activeSelection = [];
    },
    applySelection() {
      this.toggleDropdown();
    },
    handleSelection(t) {
      if (!this.activeSelection.includes(t))
        this.activeSelection.push(t);
      else {
        const e = this.activeSelection.indexOf(t);
        this.activeSelection.splice(e, 1);
      }
      this.$emit(f.DROPDOWN_CHANGED, this.activeSelection);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen, this.isOpen ? (this.$emit(f.DROPDOWN_OPENED, this), this.modalOpened()) : (this.resetFilterText(), this.modalClosed());
    },
    closeModal() {
      document.body.classList.remove("modal-open");
    },
    modalOpened() {
      n.isUpperBreakpoint() || document.body.classList.add("modal-open");
    },
    modalClosed() {
      n.isUpperBreakpoint() || this.closeModal();
    },
    toggleIconClasses(t) {
      return [
        "dropdown__toggle-icon",
        this.activeSelection.includes(t) ? l.ACTIVE : ""
      ];
    },
    handleMouseEnter(t) {
      if (!n.isUpperBreakpoint()) return t.preventDefault();
      this.toggleDropdown();
    },
    handleMouseDown(t) {
      if (!n.isUpperBreakpoint()) return t.preventDefault();
      this.toggleDropdown();
    },
    handleClick(t) {
      if (n.isUpperBreakpoint()) return t.preventDefault();
      this.toggleDropdown();
    },
    getCheckboxId(t, e) {
      return `dropdown-checkbox-${t.value}-${e}`;
    },
    resetFilterText() {
      this.filterText = "";
    },
    resetModal() {
      this.isOpen = !1, this.closeModal();
    },
    handleResize() {
      this.resetModal();
    }
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData([
        "search",
        "apply",
        "reset"
      ]);
    }), this.initActiveSelection();
  },
  mounted() {
    this.updateUtilityAnimation(), window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      activeSelection: [],
      isOpen: !1,
      filterText: "",
      minCharsToFilter: 1
    };
  },
  template: `
    <div :class="{ 'dropdown--opened': isOpen, 'dropdown': true, 'dropdown--filtering': filterText.length > 0 }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseDown">
      <teleport :to="teleportSelector">
        <div :class="{'dropdown__background-shim': true, 'show': isOpen}" @click="toggleDropdown"></div>
      </teleport>
      <div :class="dropdownLabelClasses" @click="handleClick" :style="style" data-utility-animation-step="1" ref="label">
        <span class="dropdown__label-text">{{ label }}</span>
        <span class="dropdown__label-placeholder">{{ label }}</span>
        <span class="dropdown__label-icon">
          <icon icon="arrow-narrow" direction="clockwise" size="xs" />
        </span>
      </div>
      <div class="dropdown__items" v-show="isOpen">
        <div class="dropdown__items-content">
          <div class="dropdown__items-header">
            <span class="dropdown__items-header-text">{{ label }}</span>
            <icon
              @click="toggleDropdown"
              class="dropdown__items-close-icon"
              icon="close"
              size="medium"
            />
          </div>
          <div class="dropdown__search-container" v-if="filterableValue">
            <input type="text" class="dropdown__search" v-model="filterText" :placeholder="translationData?.search">
            <icon
              class="dropdown__search-icon"
              icon="magnifier"
              size="small"
            />
            <icon
              @click="resetFilterText"
              class="dropdown__close-icon"
              icon="close"
              size="small"
            />
          </div>
          <div class="dropdown__items-list">
            <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="(item, index) in filteredItems">
              <input class="dropdown__checkbox" type="checkbox" :value="item.value" :id="getCheckboxId(item, index)" :name="getCheckboxId(item, index)" :checked="activeSelection.includes(item)">
              <label class="dropdown__checkbox-label" :for="getCheckboxId(item, index)"></label>
              <span class="dropdown__item-text">{{ item.text }}</span>
              <span class="dropdown__item-count">{{ item.count }}</span>
            </div>
          </div>
          <div class="dropdown__buttons">
            <cta
              :text="translationData?.apply"
              class="dropdown__apply-button"
              href="#apply"
              @click="applySelection"
            />
            <cta
              :text="translationData?.reset"
              class="dropdown__reset-button"
              skin="secondary"
              :button="true"
              href="#reset"
              @click="resetSelection"
            />
          </div>
        </div>
      </div>
    </div>
  `
}, we = {
  tagName: "email-action-unread",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <rect x=".5" y="3.954" width="23" height="16" rx="2" ry="2"></rect>
      <path d="M22.911 4.536L12 13.454 1.089 4.536"></path>
    </g>
  </svg>
  `
}, _e = {
  tagName: "emergency",
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" viewBox="0 0 51.9 44.2" xml:space="preserve" :style="style">
      <g>
        <path d="M23.7,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.9H37l0.1,2.9
          c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h17.6"></path>
        <path d="M21.5,27.3c-0.2,0.1-0.5,0.1-0.8,0L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3
          c-0.1,0.2-0.1,0.3-0.1,0.5s0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1s0.3,0,0.4-0.1l6.4-3.9c0,0,0.3-0.4,0-0.8
          c-0.2-0.4-0.7-0.4-1-0.2L21.5,27.3z"></path>
        <path d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
          C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z"></path>
        <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
          c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
          C27.7,30,27.8,30.1,28,30.2z"></path>
        <path d="M46,27.4H32.4c-0.9,0-1.7-0.8-1.7-1.7v-1c0-1.5,1.2-2.6,2.7-2.6H45c1.5,0,2.7,1.2,2.7,2.6v1C47.7,26.6,46.9,27.4,46,27.4z
          M33.4,23.5c-0.7,0-1.2,0.6-1.2,1.2v1c0,0.1,0.1,0.3,0.3,0.3H46c0.1,0,0.3-0.1,0.3-0.3v-1c0-0.7-0.6-1.2-1.2-1.2H33.4z"></path>
        <path d="M44.6,23.5c-0.4,0-0.7-0.3-0.7-0.6l-0.9-10c-0.1-0.6-0.6-1.1-1.2-1.1l0,0h-5.3c-0.6,0-1.2,0.5-1.2,1.1l-0.8,9.9
          c0,0.4-0.4,0.7-0.8,0.6c-0.4,0-0.7-0.4-0.6-0.8l0.8-9.9c0.2-1.4,1.3-2.4,2.7-2.4h5.3l0,0c1.3,0,2.5,1,2.6,2.3l0.9,10
          C45.4,23.1,45.1,23.5,44.6,23.5C44.7,23.5,44.6,23.5,44.6,23.5z"></path>
        <path d="M39.2,8c-0.4,0-0.7-0.3-0.7-0.7v-3c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v2.9C39.9,7.6,39.6,8,39.2,8z"></path>
        <path d="M45,10.4c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l2.1-2.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-2.1,2.1
          C45.4,10.3,45.2,10.4,45,10.4z"></path>
        <path d="M50.4,15.7h-2.9c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S50.7,15.7,50.4,15.7z"></path>
        <path d="M33.4,10.4c-0.2,0-0.4-0.1-0.5-0.2l-2.1-2.1c-0.3-0.3-0.3-0.7,0-1s0.7-0.3,1,0l2.1,2.1c0.3,0.3,0.3,0.7,0,1
          C33.7,10.3,33.5,10.4,33.4,10.4z"></path>
        <path d="M30.9,15.7H28c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S31.3,15.7,30.9,15.7z"></path>
      </g>
    </svg>
  `
}, xe = {
  tagName: "event",
  data() {
    return {
      hasMultipleDays: !1
    };
  },
  computed: {
    style() {
      return `
                --color-event-background: ${this.bgColor ? this.bgColor : "var(--color-green-blue)"};
                --color-event-copy: ${this.color ? this.color : "var(--color-copy-light)"};
                --color-event-time: ${this.timeColor ? this.timeColor : "var(--color-green-blue)"};
            `;
    },
    textWithAmpersand() {
      return this.text.replace(/&amp;/g, "&");
    },
    validDate() {
      let t = new Date(this.date);
      return isNaN(t.getTime()) && (t = n.convertToDate(this.date), this.hasMultipleDays = !0, t && isNaN(t.getTime())) ? null : t;
    },
    dateDay() {
      if (!this.validDate) return;
      const t = this.validDate.getDate();
      return t < 10 ? `0${t}` : t;
    },
    dateMonth() {
      return this.validDate ? this.validDate.toLocaleDateString(void 0, {
        month: "short"
      }).slice(0, 3) : void 0;
    },
    dateWeekDay() {
      return this.validDate ? this.validDate.toLocaleDateString(void 0, {
        weekday: "short"
      }).slice(0, 2) : void 0;
    },
    imageValue() {
      return n.getJSON(this.image);
    },
    cloudinary() {
      return this.imageValue && this.imageValue.cloudinary ? this.imageValue.cloudinary : !0;
    },
    timeValue() {
      return this.hasMultipleDays ? this.date : n.standardizeTimeFormat(this.time);
    }
  },
  methods: {
    handleClick() {
      if (this.external) return window.open(this.url, "_blank");
      document.location.href = this.url;
    }
  },
  props: {
    title: String,
    date: String,
    category: String,
    text: String,
    image: Object,
    bgColor: String,
    color: String,
    time: String,
    timeColor: String,
    classes: String,
    url: String,
    external: Boolean
  },
  template: `
    <article :class="['event vue-component', classes ? classes : null]" :style="style" @click="handleClick">
      <div class="event__inner">
        <div class="event__date">
          <div class="event__date-week-day is-uppercase">{{ dateWeekDay }}</div>
          <div class="event__date-day">{{ dateDay }}</div>
          <div class="event__date-month is-uppercase">{{ dateMonth }}</div>
        </div>
        <div class="event__content">
          <div class="event__meta">
            <time class="event__time font-size-1 bold" v-if="timeValue">{{ timeValue }}</time>
            <span class="event__category font-size-1 bold is-uppercase" v-if="category">{{ category }}</span>
          </div>
          <headline class="event__headline" :text="title" level="h4" />
          <p class="event__text">{{ textWithAmpersand }}</p>
        </div>
        <div class="event__image-container is-background" v-if="imageValue">
          <v-img class="event__image" :cloudinary="cloudinary" v-bind="imageValue" :lazy="true" preset="eventThumb">
        </div>
      </div>
    </article>
  `
}, Le = {
  tagName: "event-overview",
  data() {
    return {
      translationData: null,
      defaultLimit: 3,
      maxLimitDefault: 6,
      showMore: !1
    };
  },
  computed: {
    classList() {
      return [
        "event-overview has-no-row is-component utility-animation vue-component",
        n.isTrue(this.overlap) ? "event-overview--overlap" : null
      ];
    },
    lastIndex() {
      return parseInt(this.limitValue, 10) + 1;
    },
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
    eventsValue() {
      return n.getJSON(this.events).slice(0, this.maxLimitValue) || [];
    },
    hasMore() {
      var t;
      return this.showMore ? !1 : ((t = this.translationData) == null ? void 0 : t.moreEvents) && this.eventsValue.length > this.limitValue;
    }
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData(["moreEvents"]);
    });
  },
  methods: {
    isVisible(t) {
      return this.showMore || t + 1 <= this.limitValue;
    },
    handleShowMore() {
      this.moreUrl && (document.location.href = this.moreUrl), this.showMore = !0;
    }
  },
  props: {
    events: Array,
    headline: String,
    headlineLevel: String,
    overlap: Boolean,
    limit: Number,
    maxLimit: Number,
    url: String,
    moreUrl: String
  },
  template: `
    <wrapper :class="classList">
      <headline class="event-overview__headline" :text="headline" :level="headlineLevel" v-if="headline" />
        <transition-group name="event-overview__item">
          <template v-for="(event, index) in eventsValue">
            <div :class="{'is-visible': isVisible(index), 'event-overview__item': true}">
              <div class="fade-in-bottom" data-utility-animation-step="1" :style="{'--utility-animation-index': index + 1}">
                <event :key="event.url" v-bind="event" />
              </div>
            </div>
          </template>
        </transition-group>

      <div class="event-overview__more font-size-1 bold fade-in-bottom" v-show="hasMore" @click="handleShowMore" data-utility-animation-step="1" :style="{'--utility-animation-index': lastIndex}">{{ translationData?.moreEvents }}</div>
    </wrapper>
  `
}, De = {
  tagName: "event-teaser",
  migrate: !0,
  template: `
                        event-teaser
                    `
}, Te = {
  tagName: "expand",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 22 12" fill="none">
      <path
        d="M1 1L9.58671 10.2646C9.96284 10.6704 10.597 10.6937 11.0019 10.3164L21 1"
        stroke-width="1.5"
        :stroke="stroke"
        stroke-linecap="round"
      />
    </svg>
  `
}, Ee = {
  tagName: "fab-button",
  migrate: !0,
  template: `
                      fab-button
                  `
}, Me = {
  tagName: "fab-hint",
  data() {
    return {
      expaned: !1,
      translationData: {}
    };
  },
  computed: {
    classList() {
      return ["fab-hint vue-component", this.expaned ? l.EXPANDED : ""];
    },
    options() {
      return `{
        "parentSelector": ".fab-hint",
        "breakpoint": "xs",
        "startPoint": ".fab-hint__start",
        "endPoint": "9999999",
        "stickyOffsetTop": "0",
        "stickyOffsetBottom": 20
      }`;
    },
    containerStyle() {
      return {
        ...this.bgColor ? { "--fab-hint-bg-color": this.bgColor } : {},
        ...this.iconColor ? { "--fab-hint-icon-color": this.iconColor } : {}
      };
    },
    iconValue() {
      return this.icon || "image-credits";
    },
    titleValue() {
      var t;
      return this.title || ((t = this.translationData) == null ? void 0 : t.imageCredits);
    },
    enhancedText() {
      if (!this.text) return "";
      const e = new DOMParser().parseFromString(this.text, "text/html");
      return e.querySelectorAll("a").forEach((s) => s.classList.add("is-basic-link")), e.body.innerHTML;
    }
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData([
        "imageCredits"
      ]);
    });
  },
  mounted() {
    this.addObserver();
  },
  methods: {
    addObserver() {
      new MutationObserver((e) => {
        e.forEach((s) => {
          var i, r;
          s.attributeName === "style" && (this.isVisible((r = (i = s == null ? void 0 : s.target) == null ? void 0 : i.style) == null ? void 0 : r.cssText) || this.handleClose());
        });
      }).observe(this.$el, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    },
    isVisible(t) {
      return t !== "";
    },
    handleClick() {
      this.expaned = !this.expaned;
    },
    handleClose() {
      this.expaned = !1;
    }
  },
  props: {
    icon: String,
    iconColor: String,
    bgColor: String,
    text: String,
    title: String
  },
  template: `
    <div :class="classList">
      <div class="fab-hint__container" :style="containerStyle">
        <div class="fab-hint__start"></div>
        <div class="fab-hint__wrapper js-sticky-block" :data-hs-sticky-block-options="options">
          <div class="fab-hint__icon" @click="handleClick">
            <icon :icon="iconValue" size="large" />
          </div>
        </div>
        <div class="fab-hint__content">
          <div class="fab-hint__title highlight-underline">{{ titleValue }}:</div>
          <icon class="fab-hint__close" icon="close" size="medium" :hover="true" :circle="true" @click="handleClose" />
          <div class="fab-hint__text" v-html="enhancedText"></div>
        </div>
        <div class="fab-hint__end"></div>
      </div>
    </div>
  `
}, Ne = {
  tagName: "faq",
  data() {
    return {
      entriesWithState: []
    };
  },
  beforeMount() {
    var t;
    this.entriesWithState = (t = this.entries) == null ? void 0 : t.map((e, s) => (e.isOpen = null, e.isDetailsOpen = null, e.height = null, e.index = s, e.id = `entry-${s}`, e));
  },
  computed: {
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    classList() {
      return [
        "faq",
        "utility-animation",
        "container space-top-2",
        "vue-component"
      ];
    },
    headlineClasses() {
      var t;
      return `faq__headline fade-in-bottom ${(t = this.headline) != null && t.classes ? this.headline.classes : ""}`;
    },
    headlineLevel() {
      var t;
      return (t = this.headline) != null && t.level ? this.headline.level : "h2";
    }
  },
  methods: {
    getDelay(t) {
      const e = t.index > 0 ? 200 : 0;
      return `--utility-animation-delay: ${`${t.index * e}ms`};`;
    },
    handleClick(t) {
      t.isOpen = t.isOpen === null ? !0 : null, t.isOpen && (t.isDetailsOpen = !0);
    },
    getElementByRef(t) {
      const e = this.$refs[t == null ? void 0 : t.id];
      if (!(!e || e.length === 0))
        return e[0];
    },
    afterLeave(t) {
      const e = this.getElementByRef(t);
      e && (t.isDetailsOpen = null, e.style.removeProperty("display"), e.style.removeProperty("height"), e.classList.remove(l.IS_COLLAPSING));
    },
    enter(t) {
      const e = this.getElementByRef(t);
      if (!e) return;
      const s = e.offsetHeight;
      e.style.removeProperty("height"), e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, setTimeout(() => {
        e.style.height = `${s}px`, e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom");
      });
    },
    leave(t) {
      const e = this.getElementByRef(t);
      if (!e) return;
      const s = e.offsetHeight;
      e.classList.add(l.IS_COLLAPSING), setTimeout(() => {
        e.style.height = `${s}px`;
      });
    }
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number
  },
  template: `
    <div :class="classList" :style="style">
      <div class="row">
        <div class="col-lg-8">
          <headline :text="headline?.text" :level="headlineLevel" :classes="headlineClasses" data-utility-animation-step="1" />
          <details v-for="entry in entriesWithState" :open="entry.isDetailsOpen" class="fade-in-bottom" data-utility-animation-step="1" :style="getDelay(entry)">
            <summary @click.prevent="handleClick(entry)" :open="entry.isDetailsOpen">
              <div class="faq__summary">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon">
                  <icon icon="arrow-narrow" direction="clockwise" size="small" />
                </div>
              </div>
            </summary>
            <Transition @after-leave="afterLeave(entry)" @enter="enter(entry)" @before-leave="leave(entry)">
              <div class="faq__content" v-show="entry.isOpen" :ref="entry.id">
                <div class="faq__text" v-html="entry.text" ></div>
              </div>
            </Transition>
          </details>
        </div>
      </div>
    </div>`
}, Pe = {
  tagName: "feature-grid",
  migrate: !0,
  template: `
                  feature-grid
              `
}, Ie = {
  tagName: "feature-grid-item",
  computed: {
    classList() {
      return [
        "feature-grid__item mb-3 fade-in-bottom",
        this.classes !== "" ? this.classes : "",
        this.centered ? "is-centered" : "",
        "vue-component"
      ];
    },
    style() {
      return `--utility-animation-index: ${this.index};`;
    },
    image() {
      var t;
      return (t = this.item) == null ? void 0 : t.image;
    },
    title() {
      var t;
      return (t = this.item) == null ? void 0 : t.title;
    },
    headlineLevel() {
      var t;
      return (t = this.item) != null && t.level ? this.item.level : "h3";
    },
    headlineClasses() {
      var s;
      const t = "mb-2", e = (s = this.item) != null && s.classes ? this.item.classes : "font-size-2 bold";
      return `${t} ${e}`;
    },
    description() {
      var t;
      return (t = this.item) == null ? void 0 : t.description;
    },
    copy() {
      var t;
      return (t = this.item) == null ? void 0 : t.copy;
    },
    secondCopy() {
      var t;
      return (t = this.item) == null ? void 0 : t.copy_1;
    },
    list() {
      var t;
      return (t = this.item) == null ? void 0 : t.list;
    },
    secondList() {
      var t;
      return (t = this.item) == null ? void 0 : t.list_1;
    },
    ctaClasses() {
      var s;
      if (!this.item.cta) return;
      const t = "mt-5", e = ((s = this.item) == null ? void 0 : s.cta.align) === "right" ? "d-flex justify-content-end" : "";
      return `${t} ${e}`;
    }
  },
  methods: {},
  props: {
    classes: String,
    item: Object,
    index: Number,
    centered: String
  },
  template: `
    <div :class="classList" data-utility-animation-step="1" :style="style">
      <div class="bg-white d-flex flex-column h-100 py-5 px-3">
        <figure class="w-100 max-w-10rem mb-5 mx-auto" v-if="image" >
          <v-img :img="image.src" :alt="image.alt" :cloudinary="image.cloudinary" />
        </figure>

        <headline v-if="title" :text="title" :level="headlineLevel" :classes="headlineClasses" />

        <p v-if="description" class="mb-0" v-html="description"></p>
        <p v-if="copy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="copy"></p>

        <ul v-if="list" class="dashed m-0 flex-grow-1" style="margin-bottom:10px !important;">
          <li v-for="text in list" class="feature-grid-item__text font-size-sm" v-html="text"></li>
        </ul>

        <p v-if="secondCopy" class="mb-0 font-size-sm d-flex" style="padding-bottom:5px;" v-html="secondCopy"></p>

        <ul v-if="secondList" class="dashed m-0 p-0 flex-grow-1">
          <li v-for="text in secondList" class="feature-grid-item__text font-size-sm" v-html="text"></li>
        </ul>

        <div v-if="item.cta" class="ctaClasses">
          <cta
            v-bind="item.cta"
          />
        </div>
      </div>
    </div>`
}, Ae = {
  tagName: "feature-list",
  data() {
    return {
      defaultIcon: "check"
    };
  },
  computed: {
    classList() {
      return ["feature-list container space-2 vue-component"];
    },
    itemsWithFallback() {
      const t = [];
      return this.items.forEach((e) => {
        const s = e.icon ? e.icon : this.defaultIcon, i = s === this.defaultIcon, r = i ? "var(--color-blue-jeans)" : e.color, a = i, o = i ? !0 : e.circle, c = i ? "medium" : e.size, d = e.bullet, h = {
          icon: s,
          color: r,
          hasBackground: a,
          circle: o,
          size: c,
          bullet: d
        };
        t.push(h);
      }), t;
    }
  },
  methods: {},
  props: {
    items: {
      default: null
    }
  },
  template: `
    <div :class="classList">
      <div class="row justify-content-lg-center align-items-md-center">
        <template v-for="item in itemsWithFallback">
          <div class="col-lg-10">
            <div class="media text-body mb-3">
              <icon class="mr-3" v-bind="item"></icon>
              <div class="media-body" v-html="item.bullet" />
            </div>
          </div>
        </template>
      </div>
    </div>
  `
}, $e = {
  tagName: "filter-bar",
  computed: {
    flatSelections() {
      return this.selections.flat();
    },
    storedItems() {
      return this.$root.StoreData.blogItems ? this.$root.StoreData.blogItems() : [];
    },
    dataAuthorsValue() {
      return n.getJSON(this.dataAuthors);
    },
    normalizedItems() {
      return this.storedItems.slice(this.itemStartPoint).map((t) => ({
        ...t,
        blogtitlepic: `${t.blog_image_path}${t.blogtitlepic}`
      }));
    },
    filteredItems() {
      if (!this.selections.length)
        return this.maxBlogPosts ? this.normalizedItems.slice(0, this.maxBlogPosts) : this.normalizedItems;
      let t = [];
      return this.selections.forEach((e) => {
        e.forEach((s) => {
          this.filterDropdowns.forEach((i) => {
            const r = i.key, a = this.normalizedItems.filter((o) => Array.isArray(o[r]) ? o[r].includes(s.value) : o[r] === s.value);
            t = [...t, ...a];
          });
        });
      }), this.getMaxItems(t);
    },
    authors() {
      return this.extractPropertyCounts("author");
    },
    topics() {
      return this.extractPropertyCounts("categories");
    },
    tags() {
      return this.extractPropertyCounts("tags");
    },
    dropdownCollection() {
      return [this.authors, this.topics, this.tags];
    }
  },
  created() {
    this.$root.StoreData.blogItems = this.$root.Store(
      n.getJSON(this.items)
    ), this.$root.StoreData.blogView = this.$root.Store(this.activeView);
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s, i, r, a;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData([
        "onlyLanguage",
        "filterAuthors",
        "filterTopics",
        "filterTags",
        "clearAll"
      ]), this.filterDropdowns = [
        {
          label: (i = this.translationData) == null ? void 0 : i.filterAuthors,
          items: this.authors,
          key: "author"
        },
        {
          label: (r = this.translationData) == null ? void 0 : r.filterTopics,
          items: this.topics,
          key: "categories"
        },
        {
          label: (a = this.translationData) == null ? void 0 : a.filterTags,
          items: this.getFilteredTags(),
          key: "tags",
          filterable: !0
        }
      ];
    });
  },
  mounted() {
    window.addEventListener("resize", this.handleResize), this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getFilteredTags() {
      const t = n.getHash();
      if (!t) return this.tags;
      const e = decodeURIComponent(t.substring(1)).toLowerCase();
      return this.tags.map((i) => i.text.toLowerCase() === e ? (this.addTagToSelection(i), { ...i, checked: !0 }) : i);
    },
    addTagToSelection(t, e) {
      const s = e || this.dropdownCollection.length - 1;
      this.selections[s] = [t];
    },
    getMaxItems(t) {
      return t = [...new Set(t)], this.maxBlogPosts ? t.slice(0, this.maxBlogPosts) : t;
    },
    handleResize() {
      this.itemStartPoint = n.isUpperBreakpoint() ? 1 : 0;
    },
    extractPropertyCounts(t) {
      return this.normalizedItems.reduce((s, i) => (Array.isArray(i[t]) ? i[t].forEach((r) => {
        this.updatePropertyCount(s, r);
      }) : this.updatePropertyCount(s, i[t]), s), []).sort((s, i) => s.text.localeCompare(i.text));
    },
    updatePropertyCount(t, e) {
      const s = t.find(
        (i) => i.text.toLowerCase() === e.toLowerCase()
      );
      s ? s.count += 1 : t.push({
        text: e,
        value: e,
        count: 1
      });
    },
    handleView(t) {
      this.activeView = t, this.$root.StoreData.blogView(this.activeView);
    },
    toggleIconClasses(t) {
      return [
        "filter-bar__toggle-icon",
        t === this.activeView ? l.ACTIVE : ""
      ];
    },
    isArrayEmpty(t) {
      return !Object.keys(t).length;
    },
    isArrayEmptyRecursive(t) {
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        if (s && !this.isArrayEmpty(s))
          return !1;
      }
      return !0;
    },
    handleCardTagClicked(t) {
      this.clearAllSelections(), this.getTagByName(t.toLowerCase());
    },
    getTagByName(t) {
      this.tags.map((e) => {
        if (e.text.toLowerCase() === t) {
          const s = this.filterDropdowns.length - 1;
          this.addTagToSelection(e, s), this.updateDropdownSelection([e], s), this.hasClickedOnTag = !0;
        }
      });
    },
    handleDropdownChange(t, e) {
      t.length === 0 ? this.selections[e] && delete this.selections[e] : (this.hasClickedOnTag && (this.hasClickedOnTag = !1, this.selections[e] = []), this.selections[e] = t), this.isArrayEmptyRecursive(this.selections) && (this.selections = []);
    },
    handleDropdownOpened(t) {
      this.$refs.dropdowns.forEach((e) => {
        e !== t && (e.isOpen = !1);
      });
    },
    clearAllSelections() {
      this.selections = [], this.$refs.dropdowns.forEach((t) => {
        t.isOpen = !1, t.activeSelection = [];
      });
    },
    removeSelection(t, e) {
      if (t.preventDefault(), this.selections = this.selections.map((i) => i.filter((r) => r.value !== e.value)), this.selections.forEach((i, r) => {
        this.updateDropdownSelection(i || [], r);
      }), this.selections.filter(
        (i) => i.length > 0
      ).length === 0) return this.clearAllSelections();
    },
    updateDropdownSelection(t, e) {
      const s = this.$refs.dropdowns[e];
      s && (s.activeSelection = t);
    }
  },
  data() {
    return {
      activeView: "tile-view",
      views: ["tile-view", "list-view"],
      filterDropdowns: [],
      selections: [],
      itemStartPoint: 0,
      hasClickedOnTag: !1
    };
  },
  props: {
    spacing: String,
    items: String,
    maxBlogPosts: Number,
    dataAuthors: String
  },
  template: `
    <div class="filter-bar" >
      <div class="filter-bar__controls">
        <div class="filter-bar__selection">
          <div class="filter-bar__dropdowns">
            <dropdown
              v-for="(dropdownItem, index) in filterDropdowns"
              v-bind="dropdownItem"
              @dropdown-changed="handleDropdownChange($event, index)"
              @dropdown-opened="handleDropdownOpened"
              ref="dropdowns"
              :has-animation="true"
              :key="index"
              :index="index"
            />
          </div>
          <div class="filter-bar__tags">
            <tag class="filter-bar__tag" :tag="selection.text" :key="index" v-for="(selection, index) in flatSelections" variant="icon" @click="removeSelection($event, selection)" />
            <a class="filter-bar__reset" v-if="flatSelections.length >= 2" @click="clearAllSelections">
              <icon icon="close" size="xs" /> {{ translationData?.clearAll }}
            </a>
          </div>
        </div>
        <div class="filter-bar__views">
          <div class="filter-bar__toggle">
            <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
              <icon :icon="view" size="small" />
            </div>
          </div>
        </div>
      </div>
      <grid-list
        :items="filteredItems"
        :view="activeView"
        :data-authors="dataAuthorsValue"
        @card-tag-clicked="handleCardTagClicked"
      />
    </div>
  `
}, qe = {
  tagName: "form-attachments",
  data() {
    return {
      isDragging: !1,
      hasError: !1,
      filesLength: 0,
      files: new DataTransfer()
    };
  },
  computed: {
    filesList() {
      if (!this.files.files) return null;
      const t = Array.from(this.files.files);
      return this.filesLength > this.maxFilesValue ? t.slice(0, this.maxFilesValue) : t;
    },
    classList() {
      return [
        "form-attachments",
        this.hasError === !0 ? "has-error" : "",
        this.isDragging ? l.DRAGGING : "",
        "vue-component"
      ];
    },
    interactableClassList() {
      return ["form-attachments__interactable", this.hasErrors ? l.HAS_ERROR : ""];
    },
    requiredValue() {
      return this.required ? "required" : null;
    },
    maxSizeMb() {
      return this.maxSize / 1e6;
    },
    maxFilesValue() {
      return this.maxFiles ? this.maxFiles : 5;
    },
    extensionList() {
      const t = this.extensions.map((e) => n.capitalize(e));
      return t == null ? void 0 : t.join(", ");
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensions.map((t) => `.${t}`).join(",");
    }
  },
  props: {
    hasError: {
      default: null
    },
    maxSize: Number,
    description: String,
    text: String,
    requiredMsg: {
      default: null
    },
    required: {
      default: null
    },
    extensions: Array,
    id: String,
    maxFiles: Number
  },
  mounted() {
    var t, e;
    this.root = this.$refs.root, this.interactable = this.$refs.interactable, this.button = this.$refs.button, this.textElement = this.$refs.text, this.file = this.$refs.file, this.error = this.$refs.error, this.base64 = this.$refs.base64, this.bindEvents(), (e = (t = window.i18n) == null ? void 0 : t.loader) == null || e.then(() => {
      var s, i, r;
      this.wrongTypeText = (s = window.i18n) == null ? void 0 : s.translate("formAttachmentsWrongType"), this.maxFilesText = (i = window.i18n) == null ? void 0 : i.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (r = window.i18n) == null ? void 0 : r.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(f.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
      const t = n.getParent(this.root, "form");
      t && t.addEventListener("reset", this.reset.bind(this));
    },
    handleFormAttachmentError(t) {
      this.showError(this.maxSizeText);
    },
    handleDragStart(t) {
      t.preventDefault(), t.stopPropagation();
    },
    handleDragOver(t) {
      t.preventDefault(), t.stopPropagation(), window.clearTimeout(this.dropTimeout), this.isDragging = !0;
    },
    handleDrop(t) {
      var s;
      t.preventDefault(), t.stopPropagation();
      const e = (s = t == null ? void 0 : t.dataTransfer) == null ? void 0 : s.files;
      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = !1, t.type === "drop" && this.handleDroppedFiles(e);
      }, 50);
    },
    isAllowedFileExtension(t) {
      var r;
      if (!t) return;
      const e = (r = this.file.getAttribute("accept")) == null ? void 0 : r.toLowerCase(), s = (e == null ? void 0 : e.split(",")) || [], i = n.getExtension(t.name);
      return s.includes(`.${i}`);
    },
    isUnderMaxSize(t) {
      if (!(!t || !t.size))
        return t.size <= this.maxSize;
    },
    handleDroppedFiles(t) {
      const e = this.getErrors(t);
      if (e) return this.showError(e);
      this.appendDroppedFiles(t);
    },
    handleAddAttachment() {
      this.file.click();
    },
    restoreDataTransfer() {
      this.file.files = this.files.files;
    },
    showError(t) {
      this.restoreDataTransfer(), this.setErrorText(t), this.hasError = !0;
    },
    setErrorText(t) {
      this.error && (this.error.innerText = t);
    },
    reset() {
      this.file.files = null, this.files = new DataTransfer(), this.resetError();
    },
    resetError() {
      this.setErrorText(this.requiredMsg), this.hasError = !1;
    },
    appendDroppedFiles(t) {
      this.base64 && (this.isRequired && (this.file.required = !1), this.appendFiles(t));
    },
    areFilesAllowed(t) {
      return Array.from(t).every((e) => this.isAllowedFileExtension(e));
    },
    getErrors(t) {
      if (!this.areFilesAllowed(t)) return this.wrongTypeText;
      if (this.files.files.length + t.length > this.maxFilesValue) return this.maxFilesText;
      if (!Array.from(t).every((e) => this.isUnderMaxSize(e))) return this.maxSizeText;
    },
    appendFiles(t) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);
      Array.from(t).forEach((e) => {
        this.files.items.add(e);
      }), this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length, this.file.files = this.files.files, this.resetError();
    },
    handleChange(t) {
      var i;
      const e = (i = t == null ? void 0 : t.target) == null ? void 0 : i.files, s = this.getErrors(e);
      if (s) return this.showError(s);
      this.appendFiles(e);
    },
    handleClick(t) {
      this.files.files[t] && (this.files.items.remove(t), this.syncFiles());
    },
    toSize(t) {
      return n.toSize(t);
    }
  },
  template: `
    <div :class="classList" :data-max-size="maxSize" :data-max-files="maxFilesValue" ref="root">
      <div :class="interactableClassList" ref="interactable">
        <div class="form-attachments__button" ref="button">
          <icon
            icon='close'
            circle=true
            hover=true
            :padding="10"
          />
        </div>
        <div class="form-attachments__content">
          <div class="form-attachments__description">
            {{ description }}
          </div>
          <div class="form-attachments__text" ref="text">
            {{ text }}
          </div>
          <div class="form-attachments__error is-error" ref="error">
            {{ requiredMsg }}
          </div>
          <div class="form-attachments__extensions">
            {{ extensionListText }}
          </div>
        </div>
      </div>
      <div class="form-attachments__files">
        <input type="file" class="form-attachments__file" ref="file"
          multiple
          :required="requiredValue"
          :id="id"
          :name="id"
          :accept="acceptList"
          @change="handleChange"
        >
        <input type="hidden" class="form-attachments__base64" ref="base64">
        <div class="form-attachments__files-list">
          <div class="form-attachments__files-list-item" v-for="(file, index) in filesList">
            <span class="form-attachments__file-details">{{ file.name }}</span>
            <span class="form-attachments__file-size">({{ toSize(file.size) }})</span>
            <icon class="form-attachments__delete" size="small" icon="bin" @click="handleClick(index)" />
          </div>
        </div>
      </div>
    </div>
  `
}, Oe = {
  tagName: "form-checkbox",
  computed: {
    otherId() {
      return `${this.idValue}_checkbox`;
    },
    required() {
      var t;
      return (t = this.checkbox) != null && t.required ? "required" : null;
    },
    idValue() {
      return this.id ? this.id : this.checkbox.id;
    }
  },
  props: {
    checkbox: Object,
    group: String,
    id: String
  },
  template: `
    <div class="form__checkbox-control custom-control custom-checkbox mb-1 vue-component">
      <template v-if="checkbox?.placeholder">
        <input class="form__checkbox form-check-input custom-control-input" type="checkbox" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
        <label class="form__checkbox-label custom-control-label" :for="otherId"></label>
        <input class="form__input form-control form-control-sm" type="text" :name="idValue" :id="idValue" :placeholder="checkbox?.placeholder" :data-form-group="group">
      </template>
      <template v-else>
        <input
          class="form__checkbox form-check-input custom-control-input"
          type="checkbox"
          :name="idValue"
          :id="idValue"
          :data-form-group="group"
          :required="required"
        >
        <label class="form__checkbox-label custom-control-label" :for="idValue" v-html="checkbox?.label"></label>
      </template>
    </div>
  `
}, Be = {
  tagName: "form-checkboxes",
  computed: {
    required() {
      var t;
      return (t = this.checkbox) != null && t.required ? "required" : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    },
    groupId() {
      return this.field.id;
    }
  },
  props: {
    field: Object,
    id: {
      default: null
    }
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="checkbox in field?.checkboxes">
      <form-checkbox :checkbox="checkbox" :group="groupId" :id="field.id + checkbox.id" />
    </template>
  `
}, Fe = {
  tagName: "form-fields",
  data() {
    return {
      edited: !1,
      userValue: null
    };
  },
  computed: {
    classList() {
      return [
        "form-field js-form-message form-group",
        `${this.field.type === "hidden" ? "d-none" : ""}`,
        this.groupClass,
        this.hasAnimation ? "utility-animation utility-animation--small-offset fade-in-bottom" : "",
        `${this.field.showIn ? "d-none form-field--show-in " + this.showInClasses : ""}`,
        "vue-component"
      ];
    },
    showInClasses() {
      var t, e;
      return (e = (t = this.field) == null ? void 0 : t.showIn) == null ? void 0 : e.map((s) => "show-in-" + s).join(" ");
    },
    groupClass() {
      return this.field.type === "checkbox" ? "mb-3" : this.field.type === "file" ? "mb-8" : "";
    },
    readonly() {
      return this.field.readonly ? "readonly" : null;
    },
    required() {
      return this.field.required ? "required" : null;
    },
    placeholder() {
      return this.field.placeholder ? this.field.placeholder : null;
    },
    value() {
      return this.edited ? this.userValue : this.replaceValue && this.field.value === "#form-field-replace-value#" ? this.replaceValue : this.field.value ? this.field.value : null;
    }
  },
  mounted() {
    const t = this.$parent;
    if (!t) return;
    const e = t.$el;
    e && e.addEventListener("reset", this.handleReset);
  },
  methods: {
    getRequiredMsg(t) {
      return t.requiredMsg ? t.requiredMsg : "";
    },
    handleChange(t) {
      const s = t.currentTarget.value;
      this.edited = !0, this.userValue = s;
    },
    handleReset() {
      this.edited = !1, this.userValue = null;
    }
  },
  props: {
    options: Array,
    field: Object,
    id: {
      default: null
    },
    replaceValue: {
      default: null
    },
    hasAnimation: {
      default: null
    }
  },
  template: `
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList" data-utility-animation-step="1">
        <template v-if="field.type === 'textarea'">
          <label class="input-label" :for="id">{{ field.label }}</label>
          <textarea class="form-control form-textarea" :id="id" :name="id" rows="4" :placeholder="placeholder" :required="required" :readonly="readonly" :data-msg="getRequiredMsg(field)"></textarea>
        </template>
        <template v-else-if="field.type ==='checkbox'">
          <form-checkbox :checkbox="field" :id="id" />
        </template>
        <template v-else-if="field.type ==='hidden'">
          <input type="hidden" :name="id" :value="value">
        </template>
        <template v-else-if="field.checkboxes">
          <form-checkboxes :field="field" :id="id" />
        </template>
        <template v-else-if="field.type === 'radio' ">
          <form-radio :radio="field" :id="id" />
        </template>
        <template v-else-if="field.radios">
          <form-radios :field="field" :id="id" @action-changed="$emit('action-changed', $event)" />
        </template>
        <template v-else-if="field.type === 'file'">
          <form-attachments
            :description="field.formAttachments?.description"
            :text="field.formAttachments?.text"
            :extensions="field.formAttachments?.extensions"
            :maxSize="field.formAttachments?.maxSize"
            :id="field.formAttachments?.id"
            :required="field.formAttachments?.required"
            :required-msg="getRequiredMsg(field.formAttachments)"
          />
        </template>
        <template v-else-if="field.type === 'select'">
          <form-select :field="field" :options="options" :id="id" />
        </template>
        <template v-else-if="field.type">
          <label class="input-label" :for="id">{{ field.label }}</label>
          <input ref="input" @change="handleChange" @keyup="handleChange" :type="field.type" :id="id" :name="id" class="form-control" :data-msg="getRequiredMsg(field)" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly">
        </template>
      </div>
    </template>`
}, Ve = {
  tagName: "form-radio",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var t;
      return (t = this.radio) != null && t.required ? "required" : null;
    },
    idValue() {
      return this.id ? this.id : this.radio.id;
    }
  },
  props: {
    radio: Object,
    group: String,
    id: String,
    name: String
  },
  methods: {
    changed(t) {
      this.$emit("action-changed", t.changeAction || null);
    }
  },
  template: `
  <div class="form__radio-control mb-1 vue-component">
    <template v-if="radio?.placeholder">
      <input class="form__radio" type="radio" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
      <label class="form__radio-label" :for="otherId"></label>
      <input class="form__input form-control form-control-sm" type="text" :name="name" :id="idValue" :placeholder="radio?.placeholder" :data-form-group="group">
    </template>
    <template v-else>
      <input
        class="form__radio"
        type="radio"
        :name="name"
        :id="idValue"
        :data-form-group="group"
        :required="required"
        @change="changed(radio)"
      >
      <label class="form__radio-label" :for="idValue" v-html="radio?.label">
      </label>
    </template>
  </div>
`
}, Re = {
  tagName: "form-radios",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var t;
      return (t = this.radio) != null && t.required ? "required" : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    }
  },
  props: {
    field: Object,
    id: {
      default: null
    }
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <div class="d-flex flex-wrap">
      <template v-for="radio in field?.radios">
        <form-radio class="pr-10" :radio="radio" :group="id" :name="id" :id="field.id + radio.id" @action-changed="$emit('action-changed', $event)" />
      </template>
    </div>
  `
}, ze = {
  tagName: "form-select",
  computed: {
    required() {
      var t;
      return (t = this.field) != null && t.required ? "required" : null;
    }
  },
  props: {
    options: Array,
    field: Object,
    id: String
  },
  template: `
    <label class="input-label" :for="id">{{field.label}}</label>
    <select class="form-control custom-select text-muted" :name="id" :required="required">
      <option value>{{field.placeholder}}</option>
      <template v-for="option in options">
        <option :value="option.value">{{option.text}}</option>
      </template>
    </select>
  `
}, je = {
  tagName: "formular",
  data() {
    return {
      originalAction: "",
      formAction: ""
    };
  },
  computed: {
    classList() {
      var t;
      return [
        "form",
        `${n.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${n.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${n.isTrue(this.container) === !0 ? "container" : ""}`,
        `${n.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((t = this.form) == null ? void 0 : t.noCustomSubmit) === !0 ? D.noCustomSubmitClass : "",
        "vue-component"
      ];
    },
    hasAnimationValue() {
      return n.isTrue(this.hasAnimation);
    },
    rowClassList() {
      return ["form__row", `${this.container ? "row" : ""}`];
    },
    wrapperClassList() {
      return [`${this.container ? "col-md-11 col-lg-10" : ""}`];
    },
    headlineClassList() {
      return [
        "container headline-row",
        `${this.space ? this.space : "space-top-2"}`,
        this.hasAnimationValue ? "utility-animation fade-in-bottom" : ""
      ];
    },
    sublineClassList() {
      return ["text-center", `${this.form.sublineClasses ? this.form.sublineClasses : ""}`];
    },
    formClassList() {
      return ["form__submit mt-5", `${this.positionValue}`];
    },
    positionValue() {
      return this.form.ctaPosition ? this.form.ctaPosition : n.isTrue(this.uncentered) ? "" : "justify-content-end";
    },
    method() {
      return this.form.method ? this.form.method : "post";
    },
    preparedBlocks() {
      const t = [];
      let e = 0, s = [];
      return this.form.fields.forEach((i) => {
        if (i.rowStart || i.rowEnd)
          i.rowStart ? (t[e] = s, s.push(i), i.rowEnd && (s = [], e++)) : i.rowEnd && (s.push(i), s = [], e++);
        else {
          if (s.push(i), t[e]) return;
          t[e] = s, s = [], e++;
        }
      }), t;
    }
  },
  beforeMount() {
    this.originalAction = this.formAction = this.form.action;
  },
  methods: {
    getOptions(t) {
      return typeof t.options == "string" ? this.options[t.options] : t.options;
    },
    getBlockClassList(t) {
      return ["row mx-n3", `${t != null && t.rowClass ? t.rowClass : ""}`];
    },
    getFieldClassList(t) {
      return ["px-3", `${t.col ? "col-md-" + t.col : "col-md-12"}`];
    },
    getId(t) {
      const e = (t == null ? void 0 : t.radios) || (t == null ? void 0 : t.checkboxes), s = e ? e[0].id : t == null ? void 0 : t.id;
      return n.isTrue(this.hasUuid) ? D.getId(s) : s;
    },
    updateAction(t) {
      t ? this.formAction = t : this.formAction = this.originalAction;
    }
  },
  props: {
    form: Object,
    light: {
      default: null
    },
    analytics: {
      default: null
    },
    space: String,
    container: {
      default: null
    },
    ajax: {
      default: null
    },
    uncentered: {
      default: null
    },
    replaceValue: {
      default: null
    },
    customValidation: {
      default: null
    },
    options: Object,
    hasUuid: {
      default: null
    },
    hasAnimation: {
      default: null
    }
  },
  template: `
    <div :class="classList">
      <div :class="rowClassList">
        <div :class="wrapperClassList">
          <div v-if="form.headline" :class="headlineClassList" data-utility-animation-step="1">
            <div class="row">
              <div class="col-sm-12">
                <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
                <p :class="sublineClassList" v-html="form.subline"></p>
              </div>
            </div>
          </div>
          <form class="form__form js-validate mt-6" :method="method" :action="formAction">
            <template v-for="block in preparedBlocks">
              <div :class="getBlockClassList(block[0])" v-if="block.length > 0">
                <div :class="getFieldClassList(field)" v-for="field in block">
                  <form-fields :field='field' :options="getOptions(field)" :replace-value="replaceValue" :id="getId(field)" :has-animation="hasAnimationValue" @action-changed="updateAction" />
                </div>
              </div>
            </template>
            <div :class="formClassList">
              <cta :text="form.ctaText" type="submit" :button="true" :skin="form.cta.skin" :width="form.cta.width" :analytics="analytics" />
            </div>
            <input type="text" class="form__super-field" name="_gotcha">
          </form>
        </div>
      </div>
    </div>
  `
};
let ut, tt, Nt, ht, Y = 0;
const g = function(t) {
  console.error("There was an issue loading a component. It might be blocked by an Adblock Script.", t);
}, Pt = () => {
  const t = new CustomEvent(tt.WINDOW_RESIZE, {});
  document.dispatchEvent(t);
}, Ue = () => {
  const t = new CustomEvent("VUE_IS_MOUNTED", {});
  document.dispatchEvent(t);
}, He = (t) => {
  let s = !1;
  t.forEach((i) => {
    if (!s && (i.contentRect.height > Y + 3 || i.contentRect.height < Y - 3)) {
      Y = i.contentRect.height, s = !0, Pt();
      return;
    }
  });
}, We = () => {
  new ResizeObserver(He).observe(document.body);
}, Ge = function(t) {
  t.detail !== null && It(t.detail.target);
}, It = function(t) {
  [].forEach.call(t == null ? void 0 : t.querySelectorAll("[data-animate-number]"), (e) => {
    const s = JSON.parse(e.dataset.animateNumber);
    Nt.animateValue(e, s.start, s.end, 1500);
  });
}, Je = function() {
  const t = new CustomEvent("SHARED_COMPONENTS_READY", {});
  document.dispatchEvent(t);
}, Ze = function(t) {
  for (let e = 0; e < ht.length; e++) {
    const s = ht[e];
    s && s.init && s.init(t);
  }
  document.addEventListener(tt.REFRESH_ANIMATE_NUMBERS, Ge), It(document), Je();
}, Ke = function() {
  const t = Promise.resolve().then(() => Rt).then((s) => s.default).catch(g), e = [
    // This is disabled for now because we want to check if users will complain or not
    // import('./analytics.js')
    //   .then((module) => {
    //     return module.default;
    //   })
    //   .catch(handleAdBlockerError),
    import("./anchor-CS_5KeJz.js").then((s) => s.default).catch(g),
    import("./data-an-CO8dGqsQ.js").then((s) => s.default).catch(g),
    Promise.resolve().then(() => oe).then((s) => s.default).catch(g),
    import("./toggle-switch-KvtFmdba.js").then((s) => s.default).catch(g),
    import("./back-DBZ7Q7gy.js").then((s) => s.default).catch(g),
    import("./back-to-top-DGjfJNpu.js").then((s) => s.default).catch(g),
    import("./contact-CptrTmgy.js").then((s) => s.default).catch(g),
    import("./fab-button-D6WXrkYI.js").then((s) => s.default).catch(g),
    t,
    import("./google-maps-C9ilvYLS.js").then((s) => s.default).catch(g),
    import("./hero-text-image-BUvn7KBM.js").then((s) => s.default).catch(g),
    import("./pricing-slider-BHJUhB5N.js").then((s) => s.default).catch(g),
    import("./tag-cloud-Cx_0ste6.js").then((s) => s.default).catch(g),
    import("./testimonial-list-Cx90aHX8.js").then((s) => s.default).catch(g),
    Promise.resolve().then(() => Se).then((s) => s.default).catch(g),
    import("./video-frame-By3HZ_im.js").then((s) => s.default).catch(g),
    Promise.resolve().then(() => Ut).then((s) => s.default).catch(g),
    import("./detail-D64a_too.js").then((s) => s.default).catch(g)
  ];
  Promise.all(e).then((s) => {
    ht = s, Ze();
  });
}, Xe = () => (Y = document.body.clientHeight, Promise.all([
  import("./index-CHFjDhNi.js").then((t) => {
    ut = t.default, window.i18n = new ut();
  }).catch(g),
  Promise.resolve().then(() => Vt).then((t) => {
    tt = t.default;
  }).catch(g),
  Promise.resolve().then(() => Bt).then((t) => {
    Nt = t.default;
  }).catch(g)
])), Ye = () => {
  document.addEventListener("VUE_IS_MOUNTED", (t) => {
    Xe().then(() => {
      Ke(), We();
    });
  }), window.addEventListener("scroll", () => {
    const t = new CustomEvent(tt.SCROLL_UPDATE, {});
    document.dispatchEvent(t);
  }), window.addEventListener("resize", () => {
    Pt();
  });
}, Qe = {
  tagName: "globals",
  mounted() {
    Ye(), Ue();
  },
  template: `
        <slot></slot>
    `
}, ts = {
  tagName: "google-map",
  computed: {
    classList() {
      return ["google-map position-relative mx-3 mx-md-8 vue-component"];
    },
    leafletOptions() {
      var i;
      const t = this.location.coordinates, e = [50, 45], s = {
        map: {
          scrollWheelZoom: !1,
          coords: t
        },
        marker: [
          {
            coords: t,
            icon: {
              iconUrl: n.getAssetPath("svg/icons/map-pin.svg"),
              iconSize: e
            },
            popup: {
              text: this.location.street + ", " + this.location.city,
              title: (i = window.i18n) == null ? void 0 : i.translate("address")
            }
          }
        ]
      };
      return JSON.stringify(s);
    }
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      var s, i;
      const t = this.$refs.map, e = (i = (s = $ == null ? void 0 : $.HSCore) == null ? void 0 : s.components) == null ? void 0 : i.HSLeaflet;
      e === null || L === null || e.init(t);
    }
  },
  props: {
    location: {
      default: null
    },
    entries: {
      default: null
    }
  },
  template: `
  <div :class="classList">
    <div class="container space-1 space-lg-3">
      <div class="row justify-content-md-end">
        <div class="col-md-6 col-lg-5">
          <div class="bg-white position-relative z-index-999 p-5 p-sm-7">
            <div class="mb-5">
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ location.office }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ location.city }}</span>
            </div>

            <template v-for="entry in entries">
              <google-map-entry v-bind="entry"/>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="position-md-absolute top-0 right-0 bottom-0 left-0">
      <div class="min-h-300rem h-100 rounded-lg" ref="map" :data-hs-leaflet-options='leafletOptions'></div>
    </div>
  </div>
  `
}, es = {
  tagName: "google-map-entry",
  computed: {
    classList() {
      return ["google-map-entry media vue-component", this.icon === "phone-charger" ? "" : "mb-5"];
    }
  },
  props: {
    icon: String,
    headline: String,
    subline: String
  },
  template: `
    <div :class="classList">
      <icon class="mr-3" :icon="icon" size="medium"/>
      <div class="media-body">
        <h5 class=" mb-1">{{ headline }}</h5>
        <span class="d-block text-body font-size-1" v-html="subline" />
      </div>
    </div>
  `
}, ss = {
  tagName: "grid",
  computed: {
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h2";
    },
    headlineClassesValue() {
      return `grid__headline ${this.headlineClasses ? this.headlineClasses : "h3-font-size"}`;
    },
    style() {
      const t = n.isTrue(this.light) ? "var(--color-copy-light)" : null;
      return {
        backgroundColor: this.bgColor,
        "--color-copy": t,
        "--color-headlines": t
      };
    },
    itemsValue() {
      return n.getJSON(this.items);
    }
  },
  methods: {
    getItemStyle(t) {
      return x.getIndexStyle(t);
    }
  },
  props: {
    items: String,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    light: {
      default: !1
    },
    bgColor: String
  },
  template: `
    <div class="grid has-background utility-animation vue-component" :style="style">
      <div class="grid__container container">
        <div class="grid__row row">
          <div class="grid__col col">
            <headline :text="headline" :level="headlineLevelValue" :classes="headlineClassesValue" />
            <div class="grid__items">
              <div class="grid__item fade-in-bottom" v-for="(item, index) in itemsValue" :key="index" :style="getItemStyle(index)" data-utility-animation-step="1">
                <span class="grid__item-title" v-if="item.title">{{ item.title }}</span>
                <v-img class="grid__item-img" :img="item.img" :alt="item.alt" v-if="item.img" :cloudinary="item.cloudinary" />
                <p class="grid__item-text">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}, is = {
  tagName: "grid-list",
  computed: {
    classList() {
      return ["grid-list row mb-3 utility-animation__group vue-component"];
    },
    columnClassList() {
      return [
        this.view === "tile-view" ? "col-sm-6 col-lg-4" : "col-sm-6 col-lg-12",
        "mb-3 mb-sm-8"
      ];
    },
    isList() {
      return this.view === "list-view";
    },
    isRow() {
      return !!this.isList;
    }
  },
  watch: {
    view() {
      this.resetUtilityAnimation();
    },
    items() {
      this.itemsChanged = !0;
    }
  },
  created() {
  },
  updated() {
    this.itemsChanged && (this.itemsChanged = !1, this.reinitUtilityAnimation());
  },
  methods: {
    resetUtilityAnimation() {
      setTimeout(() => {
        x.resetGroup(this.$refs.group);
      }, 100);
    },
    reinitUtilityAnimation() {
      !this.$refs.items || !this.$refs.items.length === 0 || (x.instances = [], x.init(Array.from(this.$refs.items)), x.addObserver());
    },
    blogImgUrl(t) {
      const e = "blog/heads/";
      return t.includes(e) ? t : `${e}${t}`;
    },
    handleCardTagClicked(t) {
      this.$emit(f.CARD_TAG_CLICKED, t);
    }
  },
  props: {
    items: String,
    view: String,
    dataAuthors: Array
  },
  template: `
    <div :class="classList" ref="group">
      <template v-for="(item, index) in items">
        <div :class="columnClassList">
          <card
            @card-tag-clicked="handleCardTagClicked"
            :title="item.title"
            :url="item.url"
            :blog-title-pic="blogImgUrl(item.blogtitlepic)"
            :excerpt="item.excerpt"
            :date="item.moment ? item.moment : item.date"
            :url="item.url"
            :author="item.author"
            :hasAnimation="true"
            :index="index"
            :data-authors="dataAuthors"
            :row="isRow"
            :tags="item.tags"
            ref="items"
          />
        </div>
      </template>
    </div>
  `
}, mt = "0s", j = "0.5s", I = "0.3s", U = "2", at = "2s", as = {
  tagName: "hand",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 308 304" fill="none">
    <g class="hand-outline" id="hand-outline">
      <path id="hand-outline-outter" d="M50.5707 135.135C42.6425 127.207 29.4289 127.207 20.1793 135.135C12.2511 143.063 12.2511 156.277 20.1793 165.527L133.816 279.164C147.03 292.378 165.529 300.306 185.35 300.306C205.17 300.306 223.669 292.378 236.883 279.164L265.953 250.094C285.774 230.274 295.023 201.204 289.738 173.455L271.239 82.281C269.917 73.0314 263.31 66.4246 254.061 65.1032C242.168 62.4605 228.955 71.7101 227.633 83.6024L222.348 127.207L124.567 29.4264C116.639 21.4982 103.425 21.4982 94.1758 29.4264C86.2476 37.3546 86.2476 50.5682 94.1758 59.8178L80.9621 45.2828C73.0339 37.3546 59.8203 37.3546 50.5707 45.2828C42.6425 53.211 42.6425 66.4246 50.5707 75.6742L65.1057 90.2092C57.1775 82.281 43.9639 82.281 34.7143 90.2092C26.7861 98.1374 26.7861 111.351 34.7143 120.601L50.5707 135.135Z" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path id="hand-outline-inner-finger" d="M94.1547 59.7668L153.616 119.228" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M65.1072 90.2095L125.891 149.671" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="hand-outline-inner-finger" d="M95.4982 180.062L50.5718 135.135" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="inner-lines">
      <path id="inner-line-top" d="M205.17 36.0347C210.456 36.0347 214.42 37.356 218.384 39.9988" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="inner-line-bottom" d="M36.0364 240.846C36.0364 255.381 47.9287 267.273 62.4637 267.273" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <g id="outter-lines">
      <path id="outter-line-top" d="M211.778 3C226.313 3 239.527 8.28546 248.776 18.8564" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="outter-line-bottom" d="M3 247.452C3 276.522 26.7846 300.307 55.8546 300.307" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <animateTransform id="reset-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 15 187.5 192"
      begin="hand-rotation.end+0s" dur="${I}"
      additive="sum"
    />

    <animateTransform id="reset-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 0 0"
      begin="hand-movement.end+0s" dur="${I}"
      additive="sum"
    />

    <animateTransform id="pause-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192"
      begin="reset-hand-rotation.end+0s" dur="${at}"
      additive="sum"
    />

    <animateTransform id="set-hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="0 0; -5 -15"
      begin="pause-hand-rotation.end+0s" dur="${I}"
      additive="sum"
    />

    <animateTransform id="set-hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="15 187.5 192; -17 187.5 192"
      begin="pause-hand-rotation.end+0s" dur="${I}"
      additive="sum"
    />

    <animateTransform id="hand-movement" href="#hand-outline" attributeName="transform" type="translate"
      values="-5 -15; 2 2; -5 -15"
      begin="0s;set-hand-rotation.end+0s" dur="${j}"
      repeatCount="${U}"
      additive="sum"
    />

    <animateTransform id="hand-rotation" href="#hand-outline" attributeName="transform" type="rotate"
      values="-17 187.5 192; 22 187.5 192; -17 187.5 192"
      begin="0s;set-hand-rotation.end+0s" dur="${j}"
      repeatCount="${U}" additive="sum" keySplines="0.4 0.17 1 1; 0.2 0.2 0.5 0.9" calcMode="spline"
    />

    <animate id="pause-inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1"
      begin="inner-lines-opacity.end+${I}" dur="${at}"
    />

    <animate id="inner-lines-opacity" href="#inner-lines" attributeName="opacity"
      values="1; 0.8; 1"
      begin="${mt}; pause-inner-lines-opacity.end+${I}" dur="${j}" repeatCount="${U}"
    />

    <animate id="pause-outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="1"
      begin="outter-lines-opacity.end+${I}" dur="${at}"
    />

    <animate id="outter-lines-opacity" href="#outter-lines" attributeName="opacity"
      values="0.8; 1; 0.8"
      begin="${mt}; pause-outter-lines-opacity.end+${I}" dur="${j}" repeatCount="${U}"
    />
  </svg>
  `
}, rs = {
  tagName: "headline",
  computed: {
    tag() {
      return this.level ? this.level : "h2";
    },
    classList() {
      return `${this.classes && n.hasFontSizeClass(this.classes) ? this.classes : `${this.tag}-font-size ${this.classes ? this.classes : ""}`} headline vue-component`;
    },
    dataUtilityAnimationStep() {
      return this.utilityAnimationStep ? this.utilityAnimationStep : null;
    }
  },
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number },
  template: `
    <component
      :is="tag"
      :class="classList"
      v-html="text"
      v-if="text"
      :data-utility-animation-step="dataUtilityAnimationStep"
    >
    </component>
    <component :is="tag" :class="classList" v-else :data-utility-animation-step="dataUtilityAnimationStep">
      <slot></slot>
    </component>
`
}, os = {
  tagName: "headline-row",
  migrate: !0,
  template: `
                    headline-row
                `
}, ns = {
  tagName: "hero-pattern",
  template: `
    <svg width="1393" height="696" viewBox="0 0 1393 696" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M616 13L1194 103L1242 606L636 696L616 13Z" fill="#D1D9DD" />
      <g filter="url(#filter0_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7762 72.1904L42.6441 74.2293L56.4455 97.8893L18.8934 106.099L11.7762 72.1904Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter1_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M392.512 537.332L490.251 496.165L459 537L426.691 580.548L392.512 537.332Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter2_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1013.26 51.2925L989.911 103.324L987.275 75.8276L984.063 46.8784L1013.26 51.2925Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter3_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1264.1 60.4603L1342.54 9.19567L1393.77 77.3657L1332.46 100.181L1264.1 60.4603Z" fill="#D1D9DD"/>
      </g>
      <defs>
        <filter id="filter0_f" x="0.90324" y="61.3173" width="66.4156" height="55.6548" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="5.43656" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter1_f" x="389.793" y="493.447" width="103.176" height="89.8188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter2_f" x="975.909" y="38.7236" width="45.5049" height="72.7549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="4.07742" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter3_f" x="1261.38" y="6.47752" width="135.108" height="96.4219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  `
}, ls = {
  tagName: "hero",
  components: {
    "hero-pattern": ns
  },
  data() {
    return {
      introHeight: null
    };
  },
  mounted() {
    this.setIntroStyle();
  },
  methods: {
    setIntroStyle() {
      if (!this.isCentered) return;
      const t = this.$refs.intro;
      t && (this.introHeight = t.offsetHeight, t.style.height = "0");
    },
    handleLetterSwitcherEnded() {
      const t = this.$refs.intro;
      t && (t.style.height = `${this.introHeight}px`, t.style.opacity = 1);
    }
  },
  computed: {
    classList() {
      return [
        "hero vue-component",
        this.variant,
        this.isLight ? "is-light" : "",
        this.isLightOverline ? "is-light-overline" : "",
        this.shapePosition,
        this.fullscreen ? "hero--fullscreen" : "",
        this.shapeFullscreen ? "hero--shape-fullscreen" : "",
        this.animation ? "hero--animation" : "",
        this.textShadow ? "hero--text-shadow" : "",
        this.bgWidth ? "hero--bg-width" : "",
        this.isCentered ? "hero--centered" : "",
        this.shapeInContent ? "hero--shape-in-content" : "",
        this.hasStickyScroller ? z.getRootClass() : ""
      ];
    },
    contentClassList() {
      return ["hero__content", this.spacing ? this.spacing : this.animation ? "" : "py-10 py-lg-11"];
    },
    style() {
      return [
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${n.hexToRgb(this.bgColor)}` : "",
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : "",
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : ""
      ];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    isLight() {
      return this.heroJson ? this.heroJson.light : !1;
    },
    isLightOverline() {
      return this.heroJson && typeof this.heroJson.lightOverline < "u" ? this.heroJson.lightOverline : this.isLight;
    },
    background() {
      return this.heroJson && this.heroJson.background ? this.heroJson.background : null;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    bgWidth() {
      return this.heroJson ? this.heroJson.bgWidth : null;
    },
    overline() {
      return this.heroJson ? this.heroJson.overline : null;
    },
    overlineBgColor() {
      return this.heroJson ? this.heroJson.overlineBgColor : null;
    },
    subline() {
      return this.heroJson ? this.heroJson.subline : null;
    },
    headline() {
      return this.heroJson ? this.heroJson.headline : null;
    },
    headlineClasses() {
      return this.heroJson ? this.heroJson.headlineClasses : null;
    },
    headlineClassList() {
      return ["hero__headline", this.headlineClasses];
    },
    textShadow() {
      return this.heroJson ? this.heroJson.textShadow : null;
    },
    level() {
      return this.heroJson && this.heroJson.level ? this.heroJson.level : "h1";
    },
    animation() {
      return this.heroJson ? this.heroJson.animation : null;
    },
    letterSwitcher() {
      return this.heroJson ? this.heroJson.letterSwitcher : null;
    },
    icon() {
      return this.heroJson && this.background ? this.background.icon : null;
    },
    fullscreen() {
      return this.heroJson && this.heroJson.fullscreen ? this.heroJson.fullscreen : !1;
    },
    spacing() {
      return this.heroJson && this.background ? this.background.spacing : null;
    },
    img() {
      return this.heroJson && this.background ? this.background.img : null;
    },
    hasStickyScroller() {
      return this.heroJson ? this.heroJson.sticky : !1;
    },
    lottieSettings() {
      if (!this.shape || !this.shape.lottie) return;
      const t = this.shapeFullscreen ? "100%" : "auto";
      return {
        ...this.shape.lottieSettings,
        width: "auto",
        height: t
      };
    },
    lottieFileData() {
      return this.shape ? this.shape.lottie ? this.shape.lottie : this.lottieData ? n.getJSON(this.lottieData) : null : null;
    },
    showShape() {
      return this.shape.img || this.shape.lottie || this.lottieFileData;
    },
    shape() {
      return this.heroJson && this.heroJson.shape ? this.heroJson.shape : null;
    },
    shapeFullscreen() {
      return this.shape && this.shape.fullscreen ? this.shape.fullscreen : !1;
    },
    shapeBottom() {
      return this.shape && this.shape.bottom || null;
    },
    shapeTop() {
      return this.shape && this.shape.top || null;
    },
    shapePosition() {
      return this.shape ? this.shapeFullscreen || this.shapeTop ? "hero--shape-top" : this.shapeBottom ? "hero--shape-bottom" : "hero--shape-center" : null;
    },
    shapeInContent() {
      return this.shape && this.shape.inContent ? this.shape.inContent : !1;
    },
    variant() {
      return this.heroJson && this.heroJson.variant ? this.heroJson.variant : null;
    },
    pattern() {
      return this.heroJson && this.heroJson.pattern ? this.heroJson.pattern : null;
    },
    ctaList() {
      return !this.heroJson || this.animation || !this.heroJson.cta && !this.heroJson.ctaList ? null : this.heroJson.cta ? [this.heroJson.cta] : this.heroJson.ctaList;
    },
    showShapeContainer() {
      return this.bgWidth || this.isSmall || this.showShape && this.shapeInContent;
    },
    isCentered() {
      return !!this.letterSwitcher;
    },
    isSmall() {
      return this.variant === "hero--small";
    },
    imgSrcSets() {
      return this.bgWidth ? "heroStudy" : null;
    },
    badges() {
      return this.heroJson && this.heroJson.badges ? this.heroJson.badges : !1;
    },
    hasBack() {
      return this.heroJson && this.heroJson.back ? this.heroJson.back : !1;
    },
    heroJson() {
      return n.getJSON(this.hero);
    }
  },
  props: {
    hero: Object,
    lottieData: String
  },
  template: `
    <div :class="classList" :style="style">
      <hero-pattern
        class="hero__pattern"
        v-if="pattern"
      />
      <v-img
        v-if="img"
        class="hero__background-img" :cloudinary="background.cloudinary" :img="img">
      >
      </v-img>
      <div class="hero__container container">
        <main :class="contentClassList">
          <div class="hero__back-row row" v-if="hasBack">
            <div class="hero__back-col col">
              <div class="hero__back back">
                <icon
                  icon="arrow"
                  classes="hero__back-icon"
                  direction="left"
                  :hover="true"
                  :circle="true">
                </icon>
              </div>
            </div>
          </div>
          <letter-switcher
            v-if="letterSwitcher"
            v-bind="letterSwitcher"
            class="hero__letter-switcher"
            @ended="handleLetterSwitcherEnded"
          >
          </letter-switcher>
          <div class="hero__intro row" v-if="overline || headline || subline" ref="intro">
            <div class="hero__intro-col col">
              <span class="hero__overline" v-if="overline">{{ overline }}</span>
              <headline :class="headlineClassList" v-if="headline" :level="level" v-html="headline"></headline>
              <div class="hero__content-shape" v-if="shapeInContent">
                <v-img
                  v-if="showShape"
                  :cloudinary="shape.cloudinary"
                  :img="shape.img"
                  :alt="shape.alt"
                  :lottie="lottieFileData"
                  :lottie-settings="lottieSettings"
                  :img-src-sets="imgSrcSets"
                >
                </v-img>
              </div>
              <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
              <cta-list
                v-if="ctaList"
                classes="hero__cta-list"
                :list="ctaList"
              >
              </cta-list>
              <div class="hero__badges" v-if="badges">
                <div class="hero__badge-container" v-for="badge in badges">
                  <v-img
                    :cloudinary="true"
                    v-bind="badge"
                    class="hero__badge-image"
                  ></v-img>
                </div>
              </div>
            </div>
          </div>
          <text-icon-animation
            v-if="animation"
            :animation="animation"
            :cta="cta"
            :icon="icon"
            classes="hero__animation"
          >
          </text-icon-animation>
        </main>
      </div>
      <wrapper class="hero__background-shape-wrapper" v-if="shape" :hideContainer="!showShapeContainer">
        <wrapper class="hero__background-shape-content" :hideContainer="!showShapeContainer" :hideContainerClass="true">
          <div class="hero__background-shape">
            <v-img
              v-if="showShape"
              :cloudinary="shape.cloudinary"
              :img="shape.img"
              :alt="shape.alt"
              :lottie="lottieFileData"
              :lottie-settings="lottieSettings"
              :img-src-sets="imgSrcSets"
            >
            </v-img>
          </div>
        </wrapper>
      </wrapper>
    </div>
  `
}, cs = {
  tagName: "hero-text-image",
  migrate: !0,
  template: `
                  hero-text-image
              `
}, ds = {
  tagName: "icon",
  data() {
    return n.validateVueProps(this);
  },
  computed: {
    classList() {
      return [
        "icon",
        `${this.classes ? this.classes : ""}`,
        `${this.props.hasBackground ? "icon--has-background" : ""}`,
        `icon--${this.props.direction}`,
        `icon--${this.props.icon}`,
        `${this.props.animation ? "js-text-animation__icon" : ""}`,
        `${this.props.circle ? "icon--circle" : ""}`,
        `${this.props.hover ? "icon--hover" : ""}`,
        "vue-component"
      ];
    },
    innerSize() {
      var t;
      switch (this.props.size) {
        case "xxl":
          t = "200px";
          break;
        case "xl":
          t = "120px";
          break;
        case "medium":
          t = "28px";
          break;
        case "small":
          t = "18px";
          break;
        case "xs":
          t = "10px";
          break;
        default:
        case "large":
          t = "48px";
          break;
      }
      return t;
    },
    parentStyle() {
      return `--color-icon: ${this.props.color}; --icon-rotation: ${this.rotation}`;
    },
    rotation() {
      return this.props.direction === "left" ? "180deg" : this.props.direction === "clockwise" ? "90deg" : "0deg";
    },
    settings() {
      return {
        width: this.innerSize,
        height: this.innerSize,
        padding: this.props.padding,
        "xml:space": "preserve",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:link": "http://www.w3.org/1999/xlink"
      };
    }
  },
  props: {
    icon: {
      default: "close"
    },
    color: {
      default: "currentColor"
    },
    direction: {
      default: "right"
    },
    size: {
      default: "large"
    },
    circle: {
      default: null
    },
    hover: {
      default: null
    },
    padding: {
      default: 6
    },
    animation: {
      default: null
    },
    classes: {
      default: ""
    },
    closed: {
      default: null
    },
    hasBackground: {
      default: null
    },
    step: {
      default: null
    }
  },
  template: `
    <span :class="classList" :style="parentStyle">
      <component :is="icon" v-bind="settings" :color="props.color" :closed="closed" :step="step" />
    </span>
    `
}, hs = {
  tagName: "icon-blocks",
  migrate: !0,
  template: `
                  icon-blocks
              `
}, ps = {
  tagName: "image-block",
  computed: {
    classList() {
      return ["image-block space-2"];
    },
    imageWithCloudinary() {
      return {
        img: this.imageBlock.image,
        cloudinary: !0,
        alt: this.imageBlock.alt
      };
    }
  },
  props: {
    imageBlock: {
      default: null
    }
  },
  template: `
    <wrapper :classes="classList">
      <div class="mx-auto">
        <v-img v-bind="imageWithCloudinary" />
      </div>
    </wrapper>
  `
}, us = {
  tagName: "image-credits",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style"viewBox="0 0 38 38" fill="none">
      <path d="M33 17V3.66666C33 0.999998 30.3333 1 30.3333 1H3.66666C0.999998 1 1 3.66666 1 3.66666V30.3333C1 33 3.66666 33 3.66666 33H17" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 10.6666C7 11.7275 7.42143 12.7449 8.17157 13.4951C8.92172 14.2452 9.93913 14.6666 11 14.6666C12.0609 14.6666 13.0783 14.2452 13.8284 13.4951C14.5786 12.7449 15 11.7275 15 10.6666C15 9.60576 14.5786 8.58834 13.8284 7.8382C13.0783 7.08805 12.0609 6.66663 11 6.66663C9.93913 6.66663 8.92172 7.08805 8.17157 7.8382C7.42143 8.58834 7 9.60576 7 10.6666Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 13.0189C27.7795 12.7091 27.4814 12.4544 27.1318 12.2769C26.7821 12.0994 26.3914 12.0044 25.9935 12.0002C25.5957 11.996 25.2027 12.0827 24.8488 12.2528C24.495 12.4229 24.1909 12.6712 23.9629 12.9762L17.4462 21.6644L14.8408 19.8438C14.576 19.6461 14.2701 19.5021 13.9427 19.4207C13.6152 19.3394 13.2732 19.3225 12.9385 19.3712C12.6037 19.4199 12.2833 19.5331 11.9978 19.7037C11.7122 19.8742 11.4676 20.0983 11.2794 20.3619L3 32" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 29C21 31.1217 21.8429 33.1566 23.3431 34.6569C24.8434 36.1571 26.8783 37 29 37C31.1217 37 33.1566 36.1571 34.6569 34.6569C36.1571 33.1566 37 31.1217 37 29C37 26.8783 36.1571 24.8434 34.6569 23.3431C33.1566 21.8429 31.1217 21 29 21C26.8783 21 24.8434 21.8429 23.3431 23.3431C21.8429 24.8434 21 26.8783 21 29Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31 31.1213C30.4507 31.6839 29.7057 32 28.9289 32C28.1521 32 27.4071 31.6839 26.8579 31.1213C26.3086 30.5587 26 29.7956 26 29C26 28.2044 26.3086 27.4413 26.8579 26.8787C27.4071 26.3161 28.1521 26 28.9289 26C29.7057 26 30.4507 26.3161 31 26.8787" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}, ms = {
  tagName: "image-list",
  computed: {
    imagesObject() {
      return this.images ? JSON.parse(this.images) : [];
    }
  },
  props: {
    images: Array
  },
  template: `
    <div class="image-list vue-component" v-for="(image, index) in imagesObject">
      <div class="image-list__item is--desktop">
        <v-img :img="image.src" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
      <div class="image-list__item is--mobile">
        <v-img :img="image.mobile" :cloudinary="image.cloudinary" :alt="image.alt" />
      </div>
    </div>`
}, gs = {
  tagName: "img",
  migrate: !0,
  template: `
                  img -> vimg
              `
}, fs = {
  tagName: "img-filter",
  props: {
    img: String,
    alt: String,
    cloudinary: {
      default: null
    },
    lazy: Boolean,
    classes: String,
    color: String
  },
  computed: {
    cloudinaryValue() {
      return n.isTrue(this.cloudinary);
    },
    colorValue() {
      return this.color ? this.color : "#000520";
    },
    svgFilter() {
      const t = parseFloat((n.red(this.colorValue) / 255).toFixed(5)), e = parseFloat((n.green(this.colorValue) / 255).toFixed(5)), s = parseFloat((n.blue(this.colorValue) / 255).toFixed(5)), i = 1, r = Math.max(t, e, s), a = Math.min(t, e, s), o = 100 * (r + a) / 2 + "%", c = "img-to-color";
      return `
        filter: saturate(0%) brightness(0%) invert(${o}) opacity(${i});
        filter: url('data:image/svg+xml;utf8,        <svg xmlns="http://www.w3.org/2000/svg">          <filter id="${c}" color-interpolation-filters="sRGB">            <feColorMatrix type="matrix" values="              0 0 0 0 ${t}              0 0 0 0 ${e}              0 0 0 0 ${s}              0 0 0 ${i} 0            "/>          </filter>        </svg>        #${c}')
      `;
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
  template: `
    <div class="img-filter vue-component" :style="svgFilter">
      <v-img
        :img="img"
        :alt="alt"
        :cloudinary="cloudinaryValue"
        :lazy="lazy"
      />
    </div>
  `
}, vs = {
  tagName: "info",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    },
    fill() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" :stroke="fill" fill="none" stroke-width="1.5" />
      <g transform="translate(7, 3)">
        <path d="M2.352 3.03999C2.268 3.03999 2.198 3.01199 2.142 2.95599C2.086 2.89999 2.058 2.83 2.058 2.746V1.21999C2.058 1.13599 2.086 1.06599 2.142 1.00999C2.198 0.953995 2.268 0.925995 2.352 0.925995H3.304C3.388 0.925995 3.458 0.953995 3.514 1.00999C3.57 1.06599 3.598 1.13599 3.598 1.21999V2.746C3.598 2.83 3.57 2.89999 3.514 2.95599C3.458 3.01199 3.388 3.03999 3.304 3.03999H2.352ZM2.688 12C2.492 12 2.324 11.9347 2.184 11.804C2.05333 11.664 1.988 11.496 1.988 11.3V5.57399H0.853998C0.769998 5.57399 0.699998 5.546 0.643998 5.49C0.587998 5.434 0.559998 5.364 0.559998 5.27999V4.27199C0.559998 4.18799 0.587998 4.11799 0.643998 4.06199C0.699998 4.00599 0.769998 3.97799 0.853998 3.97799H2.968C3.164 3.97799 3.32733 4.048 3.458 4.18799C3.598 4.31866 3.668 4.48199 3.668 4.67799V10.404H4.802C4.886 10.404 4.956 10.432 5.012 10.488C5.068 10.544 5.096 10.614 5.096 10.698V11.706C5.096 11.79 5.068 11.86 5.012 11.916C4.956 11.972 4.886 12 4.802 12H2.688Z" fill="#011E33" />
      </g>
    </svg>
  `
}, ys = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    x.init([this.$refs.root]);
  },
  props: {
    copy: String,
    variant: String,
    headline: String,
    spacing: String,
    headlineClasses: {
      type: String,
      default: "text-center"
    },
    copyClasses: String
  },
  template: `
    <figure :class="classList" ref="root">
      <div class="container space-lg-2">
        <div v-if="headline" class="row mb-9 mt-9">
          <div :class="['col', headlineClasses, 'fade-in-bottom']" data-utility-animation-step="1">
            <headline :text="headline" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p :class="['intro-text__copy fade-in-bottom', copyClasses]" data-utility-animation-step="1" v-html="copy"></p>
          </div>
        </div>
      </div>
    </figure>
  `
};
class At {
  constructor(e, s) {
    this.root = e, this.maxShapes = 3, this.loadingClass = "loading", this.shapeClass = "loading__shape", this.bounceClasses = {
      up: "loading--bounce-up",
      down: "loading--bounce-down"
    }, this.types = ["circle", "square", "triangle", "triangle-2", "rectangle"], this.colors = ["--color-loading--1", "--color-loading--2", "--color-loading--3", "--color-loading--4"], this.currentColors = {}, this.maxRuns = 20, this.scaleMin = 4, this.scaleMax = 5, this.rotationMin = 90, this.rotationMax = 270, this.animationInterval = 800, this.intervals = [], this.hasShapes = !1, this.init(s);
  }
  getRandomColor(e) {
    let s = this.colors[Math.floor(Math.random() * this.colors.length)];
    return e < this.maxRuns && this.currentColors[s] && (e++, s = this.getRandomColor(e)), s;
  }
  getRandomType() {
    return this.types[Math.floor(Math.random() * this.types.length)];
  }
  getRandomTypeClass() {
    return `loading__shape--${this.getRandomType()}`;
  }
  getRandomScale() {
    return Math.floor(Math.random() * (this.scaleMax - this.scaleMin + 1)) + this.scaleMin;
  }
  getRandomRotation() {
    return Math.floor(Math.random() * (this.rotationMin - this.rotationMax + 1)) + this.rotationMin;
  }
  getRandomOffset() {
    let e = Math.random() * 6 - 2;
    return `${e >= 0 ? "+ " : "- "}${e}`;
  }
  getRandomStyle() {
    const e = this.getRandomColor();
    return {
      style: `
      left: calc(50% ${this.getRandomOffset()}vw);
      --color-loading: var(${e});
      --loading-scale: ${this.getRandomScale()}vh;
      --loading-rotation: ${this.getRandomRotation()}deg
    `,
      color: e
    };
  }
  createShapes() {
    for (var e = 0; e < this.maxShapes; e++) {
      const s = document.createElement("shape"), i = n.append(this.root, s);
      this.startAnimation(i);
    }
  }
  startAnimation(e) {
    this.intervals.push(
      setInterval(() => {
        const s = this.getRandomStyle();
        this.currentColors[s.color] = !0, e.className = "", e.classList.add(this.getRandomTypeClass()), e.classList.add(this.shapeClass), e.setAttribute("style", s.style), e.classList.contains(this.bounceClasses.up) ? e.classList.replace(this.bounceClasses.down, this.bounceClasses.up) : e.classList.add(this.bounceClasses.up), setTimeout(() => {
          e.classList.replace(this.bounceClasses.up, this.bounceClasses.down), this.currentColors[s.color] = !1;
        }, this.animationInterval / 2);
      }, this.animationInterval)
    );
  }
  init(e) {
    if (e && typeof e == "function") return e();
    this.root.classList.add(this.loadingClass);
  }
  on(e) {
    this.hasShapes || (this.hasShapes = !0, this.createShapes()), e !== !0 && this.root.classList.add(l.LOADING);
  }
  clear() {
    this.intervals.forEach((e) => {
      clearInterval(e);
    });
  }
  off(e, s) {
    e ? this.clear() : setTimeout(() => {
      this.clear(), s !== !0 && this.root.classList.remove(l.LOADING);
    }, 100);
  }
}
const bs = {
  tagName: "job-list",
  computed: {
    classList() {
      return [
        "job-list container",
        `${this.hasLoading ? l.LOADING : ""}`,
        `${this.hasLoader ? "loading" : ""}`,
        `${n.isTrue(this.sticky) === !0 ? z.rootSelector.substring(1) : ""}`,
        "vue-component"
      ];
    },
    expandClassList() {
      return [
        "job-list__expand-button",
        `${this.hasExpand ? "" : l.HIDDEN}`,
        `${this.isExpandVisible ? "" : l.INVISIBLE}`
      ];
    },
    headlineClassValue() {
      return `job-list__headline ${this.headlineClasses}`;
    },
    headlineLevelValue() {
      return `${this.headlineLevel ? this.headlineLevel : "h2"}`;
    },
    tagList() {
      return this.tags ? this.tags.split(",") : void 0;
    }
  },
  mounted() {
    this.api = new pt({
      ...this.jobId && { jobId: this.jobId },
      ...this.apiUrl && { apiUrl: this.apiUrl },
      client_name: this.clientName
    }), this.lang && this.api.setLang(this.lang), this.tagList && this.api.setFilter({ tags: this.tagList }), this.loading = new At(this.$refs["job-list"], () => {
      this.hasLoader = !0;
    }), this.loading.on(!0), this.init();
  },
  methods: {
    init() {
      var s;
      const t = (s = window.i18n) == null ? void 0 : s.loader, e = this.jobId ? this.loadJob : this.loadJobs;
      t ? t.then(() => {
        var i;
        this.translationData = (i = window.i18n) == null ? void 0 : i.getTranslationData([
          "jobListEmpty"
        ]), e.bind(this)();
      }) : e();
    },
    handleExpand() {
      this.isExpandVisible = !1, this.hasExpand = !1, this.showJobs();
    },
    showJobs() {
      this.entries.forEach((t) => {
        t.isInvisible = !1;
      });
    },
    loadJobData() {
      const t = `${this.api.jobDataUrl}jobs.json`;
      return fetch(t, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((e) => e.json()).then((e) => {
        this.jobData = e;
      }).catch((e) => {
        console.error("Job-list Local Job Data Error:", e);
      });
    },
    loadJob(t) {
      const e = t ? "getAll" : "getOpening";
      this.promises.push(this.loadJobData()), this.api[e]().then((s) => s.json()).then((s) => {
        this.handleJobs(s);
      }).catch((s) => {
        console.error("Job-list Error:", s);
      });
    },
    loadJobs() {
      this.loadJob(!0);
    },
    handleJobs(t) {
      n.sleep(this.sleepDelay).then(() => {
        let e = t;
        if (typeof e.objects != "object" && (e = {
          objects: [e],
          meta: e == null ? void 0 : e.meta
        }), this.data = e, !this.data.meta) return this.loading.off();
        Promise.all(this.promises).then(() => {
          const s = this.api.getOrderedList(e.objects);
          this.filterJobs(t, s);
        }).catch((s) => {
          console.error("Job-List Promises.all ~ error", s);
        });
      });
    },
    filterJobs(t, e) {
      var a, o, c;
      this.data.objects = e;
      const s = (a = window.i18n) == null ? void 0 : a.translate("gender"), i = [];
      let r = 0;
      for (let d = 0; d < (e == null ? void 0 : e.length); d++) {
        const h = e[d], { city: u } = (h == null ? void 0 : h.location) || {};
        if (!h) continue;
        const { title: y, position_type: N, team: q } = h, $t = {
          city: u,
          title: y,
          gender: s,
          team: q,
          positionType: N !== "" ? (o = window.i18n) == null ? void 0 : o.translate(N) : null,
          isInvisible: this.maxItems > 0 && r > this.maxItems - 1,
          id: d
        };
        this.isAvailableEntry(h) && (i[d] = $t, r++);
      }
      this.entries = i, this.entries.length === 0 && (this.isEmpty = !0), this.maxItems > 0 && ((c = t.objects) == null ? void 0 : c.length) > this.maxItems && this.showExpandButton(), this.stopLoading();
    },
    showExpandButton() {
      this.hasExpand = !0, setTimeout(() => {
        this.isExpandVisible = !0;
      }, this.loadingDelay);
    },
    isAvailableEntry(t) {
      var s;
      let e = !0;
      if (t.tags.includes(this.api.hiddenTag)) return !1;
      if (this.team) {
        const i = (s = t.team) == null ? void 0 : s.toLowerCase(), r = this.team.toLowerCase();
        (i === void 0 || (i == null ? void 0 : i.indexOf(r)) === -1) && (e = !1);
      }
      return e;
    },
    stopLoading() {
      setTimeout(() => {
        this.loading.off(!0, !0), this.hasLoading = !1;
      }, this.loadingDelay);
    },
    handleEntryClick(t) {
      const e = t.currentTarget;
      if (e && this.detailUrl) {
        const s = this.getData(e), i = this.getDetailUrl(s), r = n.generateUrl(
          s == null ? void 0 : s.title,
          i,
          s == null ? void 0 : s.id
        );
        document.location.href = r;
      }
    },
    getData(t) {
      var s;
      let e = null;
      return t && t.dataset.id && ((s = this.data) != null && s.objects) && (e = this.data.objects[t.dataset.id]), e;
    },
    getDetailUrl(t) {
      if (typeof this.detailUrl != "object") return this.detailUrl;
      const e = this.api.getLangFromEntry(t);
      return this.detailUrl[e] || this.detailUrl.default;
    }
  },
  data() {
    return {
      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: !0,
      hasLoader: !1,
      api: {},
      hasExpand: !1,
      isExpandVisible: !1,
      entries: [],
      jobData: {},
      promises: [],
      isEmpty: !1
    };
  },
  props: {
    clientName: String,
    maxItems: String,
    detailUrl: Object,
    jobId: String,
    tags: String,
    lang: String,
    team: String,
    apiUrl: String,
    headlineClasses: String,
    headlineLevel: String,
    headlineText: String,
    expandText: String,
    sublineText: String,
    sticky: {
      default: null
    }
  },
  template: `
    <div
      :class="classList"
      :data-id="clientName"
      :data-max-items="maxItems"
      :data-detail-url="detailUrl"
      :data-job-id="jobId"
      :data-tags="tags"
      :data-lang="lang"
      :data-team="team"
      :data-api-url="apiUrl"
      ref="job-list"
    >
      <div class="row">
        <div class="job-list__header col-lg-12">
          <headline
            :text="headlineText"
            :level="headlineLevelValue"
            :classes="headlineClassValue"
          />
        </div>
        <div v-if="sublineText !== ''" class="job-list__meta col-lg-7">
          <div class="job-list__subline">{{sublineText}}</div>
        </div>
        <div class="col-lg-12">
          <div class="job-list__entries">
            <div class="job-list__message h3-font-size" v-if="isEmpty">
              {{ translationData?.jobListEmpty }}
            </div>
            <template v-for="entry in entries" :key="entry?.id">
              <job-list-entry
                v-if="entry"
                :title="entry?.title"
                :gender="entry?.gender"
                :city="entry?.city"
                :team="entry?.team"
                :position-type="entry?.positionType"
                :is-invisible="entry?.isInvisible"
                :id="entry?.id"
                @click="handleEntryClick"
              />
            </template>
          </div>
          <div :class="expandClassList" @click="handleExpand" >{{expandText}}</div>
        </div>
      </div>
    </div>
  `
}, Cs = {
  tagName: "job-list-detail",
  computed: {
    classList() {
      return [
        "job-list__detail page-detail",
        `${this.hasLoading ? l.LOADING : ""}`,
        `${this.hasLoader ? "loading" : ""}`,
        `${this.hideLoading ? l.HIDE_LOADING : ""}`,
        `${this.hasBack ? "page-detail--has-back" : ""}`,
        "vue-component"
      ];
    },
    headlineClassList() {
      return `job-list__detail-headline page-detail__headline ${this.headlineClasses ? this.headlineClasses : ""}`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h1";
    },
    style() {
      return `--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`;
    },
    color() {
      return this.detailColor ? this.detailColor : "--color-job-list-detail";
    },
    baseData() {
      return this.base ? JSON.parse(this.base) : {};
    },
    getUuid() {
      return "job-list-detail-style";
    }
  },
  mounted() {
    this.loading = new At(this.$refs["job-list-detail"], () => {
      this.hasLoader = !0;
    }), this.loading.on(!0), this.init();
  },
  data() {
    return {
      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: !0,
      hasLoader: !1,
      hideLoading: !1,
      api: {},
      hasBack: !1,
      entryData: {},
      personQuote: null,
      videoInner: null,
      jobIdValue: null
    };
  },
  methods: {
    init() {
      var r;
      const t = this.mockApplyUrl, e = this.mockDocumentsUrl;
      this.api = new pt({
        ...this.apiUrl && { apiUrl: this.apiUrl },
        client_name: this.clientName,
        apiKey: this.apiKey,
        mockApplyUrl: t,
        mockDocumentsUrl: e
      }), this.api.setLang(n.getLang());
      const s = this.api.getJobId() || this.jobId;
      this.jobIdValue = s, this.showBackButton();
      const i = (r = window.i18n) == null ? void 0 : r.loader;
      i ? i.then(() => {
        this.loadJob();
      }) : this.loadJob();
    },
    showBackButton() {
      document.referrer.indexOf(document.location.host) !== -1 && (this.hasBack = !0);
    },
    loadJob() {
      var t;
      this.loadLocalJobData(), (t = this.api) == null || t.getOpening(this.jobIdValue).then((e) => e.json()).then((e) => {
        this.handleJob(e);
      }).catch((e) => {
        console.error("Job-list Error:", e);
      });
    },
    handleCta() {
      var t;
      Q.open((t = this.$refs["modal-component"]) == null ? void 0 : t.modal);
    },
    handleJob(t) {
      n.sleep(this.sleepDelay).then(() => {
        var s;
        const e = t.objects ? t.objects[0] : t;
        if (e) {
          const i = (s = window.i18n) == null ? void 0 : s.translate("gender"), { title: r, description: a } = e, o = {
            description: a,
            title: r,
            gender: i
          };
          this.hideLoading = !0, this.update(o);
        } else
          console.error("handleJob has no entry");
      });
    },
    stopLoading() {
      setTimeout(() => {
        this.loading.off(!0, !0), this.hasLoading = !1;
      }, this.loadingDelay);
    },
    update(t) {
      this.entryData = t, this.stopLoading();
    },
    loadLocalJobData() {
      const t = `${this.api.jobDataUrl}${this.jobIdValue}.json`;
      return this.addCustomStyle(), fetch(t, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((e) => e.json()).then((e) => {
        if (e.videoInner) return this.videoInner = e.videoInner;
        this.personQuote = e.personQuote;
      }).catch((e) => {
        console.error("Job-list-Detail Local Job Data Error:", e);
      });
    },
    addCustomStyle() {
      var e;
      const t = document.createElement("style");
      t.id = this.getUuid, (e = document.getElementById(this.getUuid)) == null || e.remove(), t.innerHTML = `
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `, document.head.appendChild(t);
    }
  },
  props: {
    detailColor: String,
    clientName: String,
    jobId: String,
    apiUrl: String,
    base: String,
    headlineLevel: String,
    headlineClasses: String,
    ctaText: String,
    ctaButton: Boolean,
    form: Object,
    googleMaps: Object,
    modalSuccess: Object,
    modalError: Object,
    apiKey: String,
    mockApplyUrl: String,
    mockDocumentsUrl: String
  },
  template: `
    <div :class="classList" :style="style" :data-id="clientName" :data-job-id="jobIdValue" :data-api-url="apiUrl" ref="job-list-detail">
      <div class="job-list__detail-container page-detail__container container">
        <div class="job-list__detail-start page-detail__start row">
          <div class="job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5">
            <div class="job-list__detail-intro page-detail__intro js-sticky-block"
              data-hs-sticky-block-options='{
                "parentSelector": ".job-list__sticky-start",
                "breakpoint": "lg",
                "startPoint": ".job-list__sticky-start",
                "endPoint": ".job-list__sticky-end",
                "stickyOffsetTop": 200,
                "stickyOffsetBottom": 20
              }'
            >
              <div class="job-list__detail-back page-detail__back page-detail__animation-3 back back--animated">
                <icon icon='arrow' direction='left' hover=true circle=true />
              </div>
              <headline :text="entryData?.title" :level="headlineLevelValue" :classes="headlineClassList" />
              <span class="job-list__detail-gender">{{ entryData?.gender }}</span>
              <div class="job-list__detail-share">
                <!-- TODO share bar -->
              </div>
              <div class="job-list__detail-cta">
                <cta :text="baseData?.ctaText" :button="baseData?.ctaButton" @click="handleCta" />
              </div>
            </div>
          </div>
          <div class="job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
            <!-- job list detail can switch to profile based on url parameter -->
            <div class="job-list__detail-description page-detail__description has-no-border richtext" v-html="entryData?.description"></div>
            <video-inner variant="reversed" :video="videoInner.video" v-if="videoInner"></video-inner>

            <div v-if="personQuote" class="job-list__detail-quote">
              <person-quote :img="personQuote.img" :text="personQuote.text" :name="personQuote.name" />
            </div>

            <!-- <div class="job-list__detail-maps">
              <slot name="google-maps" />
            </div> -->

          </div>
        </div>
      </div>
      <div class="job-list__sticky-end"></div>
      <modal
        ref="modal-component"
        :client-name="clientName"
        :api-url="apiUrl"
        :job-id="jobIdValue"
        :api-key="apiKey"
        :mock-apply-url="mockApplyUrl"
        :mock-documents-url="mockDocumentsUrl"
        :modal-error="modalError"
      >
        <slot name="modal-application" />
      </modal>
    </div>
  `
}, Ss = {
  tagName: "job-list-entry",
  computed: {
    classList() {
      return [
        "job-list__entry",
        `${n.isTrue(this.isInvisible) === !0 ? l.HIDDEN : ""}`,
        "vue-component"
      ];
    }
  },
  props: {
    title: String,
    gender: String,
    city: String,
    team: String,
    positionType: String,
    isInvisible: {
      default: null
    },
    id: Number
  },
  template: `
    <div :class="classList" :data-id="id">
      <div class="job-list__entry-header">
        <template v-if="team && team !== ''"> {{team}} </template>
      </div>
      <div class="job-list__entry-content">
        <div class="job-list__entry-title">
          {{title}}
          <span class="job-list__entry-gender">{{gender}}</span>
        </div>
      </div>
    </div>
  `
}, gt = "l-block", ks = {
  tagName: gt,
  computed: {
    name() {
      return gt;
    },
    secondShapeBackgroundColor() {
      return this.secondShape.backgroundColor ? this.secondShape.backgroundColor : "var(--color-yellow)";
    },
    secondShapeFirstColor() {
      return this.secondShape.firstColor ? this.secondShape.firstColor : "var(--color-orange)";
    },
    secondShapeSecondColor() {
      return this.secondShape.secondColor ? this.secondShape.secondColor : "var(--color-white)";
    },
    firstShape() {
      return this.getShapeData(0);
    },
    secondShape() {
      return this.getShapeData(1);
    },
    thirdShape() {
      return this.getShapeData(2);
    },
    fourthShape() {
      return this.getShapeData(3);
    },
    classList() {
      return ["l-block", "vue-component"];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    }
  },
  methods: {
    allProps(t) {
      const e = {};
      for (const s of Object.keys(t))
        e[s] = t[s];
      return e;
    },
    getShapeData(t) {
      const e = (this.shapes && this.shapes[t]) ?? {};
      return this.allProps(e);
    },
    defaultComponent(t) {
      switch (t) {
        default:
        case 0:
          return "shape-moving-eye";
        case 1:
          return "rect";
        case 2:
          return "shape-semi-circle";
        case 3:
          return "shape-half-square";
      }
    }
  },
  props: {
    shapes: Array,
    backgroundColor: String,
    firstColor: String,
    secondColor: String
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">
      <component
        transform="translate(0 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(0 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <g v-else transform="translate (-400 0)" >
        <path :fill="secondShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="secondShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="secondShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

      <component
        transform="translate(0 800)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
    </svg>
  `
}, ws = {
  tagName: "letter-switcher",
  data() {
    return {
      show: !1,
      end: !1,
      overline: "",
      endDelay: 3400,
      startDelay: 900,
      isLower: null
    };
  },
  computed: {
    classList() {
      return [
        "letter-switch",
        `${this.show ? l.SHOW : ""}`,
        `${this.end ? l.END : ""}`,
        "vue-component"
      ];
    },
    fontSize() {
      return this.isLower ? "font-size-5" : "font-size-6 bold";
    },
    letterSwitchEndClassList() {
      return ["letter-switcher__end-animation", this.fontSize];
    },
    letterSwitchAnimationClassList() {
      return [
        "letter-switcher__animation",
        this.fontSize,
        "justify-content-center",
        `${this.isLower ? "flex-column" : ""}`
      ];
    }
  },
  mounted() {
    this.overline = this.overlineStart, this.isLower = this.isLowerBreakpoint(), this.bindEvents(), setTimeout(() => {
      this.setHeight(), this.startAnimation();
    }, this.startDelay);
  },
  methods: {
    bindEvents() {
      window.addEventListener("resize", () => {
        this.handleResize();
      });
    },
    handleResize() {
      this.isLower = this.isLowerBreakpoint(), this.setHeight();
    },
    isLowerBreakpoint() {
      return n.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = !1;
      const t = this.$refs.animation;
      if (!t) return;
      const e = t.querySelector(".letter-switcher__letter"), s = this.isLower ? e.offsetHeight * 2 : e.offsetHeight;
      t.style.height = s + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (s, i) => {
          const r = i * 0.3, a = 0.07 * s.children.length;
          s.style.animation = `letter-switch ${a}s ${r}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const t = this.$refs["end-text"], e = this.$refs.end;
      if (!t || !e) return this.emitEnded();
      t.style.width = "0px", e.classList.remove(l.COLLAPSED), this.emitEnded();
    },
    switchOverline(t) {
      const e = this.$refs.overline;
      e && (e.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, e.style.opacity = 1, t();
      }), e.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(f.ENDED);
    }
  },
  props: {
    textStart: String,
    textEnd: String,
    overlineStart: String,
    overlineEnd: String
  },
  template: `
    <div :class="classList" ref="root">
      <div class="letter-switcher__overline font-size-5 light" ref="overline">{{ overline }}</div>
      <div class="letter-switcher__container">
        <div :class="letterSwitchAnimationClassList" ref="animation">
          <div class="letter-switcher__container-animation">
            <span>S</span><div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>cherhei<div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">t</span>
              <span class="letter-switcher__letter letter-switcher__middle">s</span>
              <span class="letter-switcher__letter letter-switcher__middle">r</span>
              <span class="letter-switcher__letter letter-switcher__middle">q</span>
              <span class="letter-switcher__letter letter-switcher__middle">p</span>
              <span class="letter-switcher__letter letter-switcher__middle">o</span>
              <span class="letter-switcher__letter letter-switcher__middle">n</span>
              <span class="letter-switcher__letter letter-switcher__middle">m</span>
              <span class="letter-switcher__letter letter-switcher__middle">l</span>
              <span class="letter-switcher__letter letter-switcher__middle">k</span>
              <span class="letter-switcher__letter letter-switcher__middle">j</span>
              <span class="letter-switcher__letter letter-switcher__middle">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>s<template v-if="isLower">-<br/></template>
          </div>
          <div class="letter-switcher__container-animation">
          lüc<div class="letter-switcher__group" ref="group">
              <span class="letter-switcher__letter letter-switcher__letter-end">k</span>
              <span class="letter-switcher__letter letter-switcher__middle">j</span>
              <span class="letter-switcher__letter letter-switcher__middle">i</span>
              <span class="letter-switcher__letter letter-switcher__middle">h</span>
              <span class="letter-switcher__letter letter-switcher__middle">g</span>
              <span class="letter-switcher__letter letter-switcher__middle">f</span>
              <span class="letter-switcher__letter letter-switcher__middle">e</span>
              <span class="letter-switcher__letter letter-switcher__middle">d</span>
              <span class="letter-switcher__letter letter-switcher__middle">c</span>
              <span class="letter-switcher__letter letter-switcher__middle">b</span>
              <span class="letter-switcher__letter letter-switcher__middle">a</span>
              <span class="letter-switcher__letter letter-switcher__default">_</span>
            </div>e!
          </div>
        </div>
        <div :class="letterSwitchEndClassList">
          <div class="letter-switcher__spacer">
            <div class="letter-switcher__end is-collapsed" ref="end" >{{ textEnd }}</div>
            <div class="letter-switcher__end-text" ref="end-text"></div>
          </div>
        </div>
      </div>
    </div>
  `
}, _s = {
  tagName: "link-list",
  computed: {
    classList() {
      return [
        "link-list",
        this.hasNoAnimation ? "" : "utility-animation",
        `${this.isExpanded ? l.EXPANDED : ""}`,
        `${this.isExpandable() ? l.EXPANDABLE : ""}`,
        `${this.hasActiveItem ? l.ACTIVE : ""}`,
        `${this.isHidden ? "link-list--hidden" : ""}`,
        `${this.inTransition ? "link-list--in-transition" : ""}`,
        this.classes,
        "vue-component"
      ];
    },
    hasNoAnimation() {
      return n.isTrue(this.noAnimation);
    },
    classListTitle() {
      return [
        "link-list__title font-size-8 bold",
        this.hasNoAnimation ? "" : "fade-in-bottom"
      ];
    },
    classListList() {
      return [
        "link-list__list header__list--expanded",
        this.hasNoAnimation ? "" : "fade-in-bottom"
      ];
    },
    hasActiveItem() {
      const t = this.list.children;
      if (t)
        return t.filter((e) => {
          var s;
          return ((s = e.languages[this.lang]) == null ? void 0 : s.active) === !0;
        }).length > 0;
    },
    isHidden() {
      return n.isTrue(this.hidden) === !0;
    }
  },
  watch: {
    hidden(t, e) {
      t || (this.inTransition = !0);
    }
  },
  updated() {
    this.updateHeight(), this.inTransition = !1;
  },
  mounted() {
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      this.parentOfParent = this.$refs.root.parentNode.parentNode, this.parentOfParent.addEventListener(
        f.CHILD_HAS_UPDATE,
        this.handleUpdate.bind(this)
      );
    },
    handleUpdate(t) {
      const e = t.detail.root;
      this.isExpanded && this.$refs.root !== e && this.handleClick();
    },
    isLowerBreakpoint() {
      return n.isBelowBreakpoint("md");
    },
    isExpandable() {
      var t;
      return !!(this.isLowerBreakpoint() && this.list.languages && ((t = this.list.languages[this.lang]) != null && t.title));
    },
    updateHeight() {
      const t = this.$refs.root;
      if (!t) return;
      const e = this.isHidden ? "" : t.scrollHeight + "px";
      t.style.height = e;
    },
    handleClick(t) {
      if (!this.isExpandable()) return;
      this.isExpanded = !this.isExpanded;
      const e = this.$refs.root;
      if (t) {
        const s = new CustomEvent(f.CHILD_HAS_UPDATE, {
          detail: {
            root: e
          }
        });
        this.parentOfParent.dispatchEvent(s);
      }
      !e || this.isExpanded || (e.style.height = "");
    }
  },
  props: {
    list: Object,
    lang: String,
    classes: String,
    hidden: {
      default: null
    },
    noAnimation: {
      default: null
    }
  },
  data() {
    return {
      inTransition: !1,
      isExpanded: !1,
      parentOfParent: null
    };
  },
  template: `
    <figure :class="classList" v-if="list" ref="root">
      <figcaption :class="classListTitle" data-utility-animation-step="1" v-if="list?.languages" v-on:click="handleClick">
        {{ list.languages[lang]?.title }}
        <icon class="link-list__icon" icon="expand" size="small" />
      </figcaption>
      <ul :class="classListList" data-utility-animation-step="1">
        <template v-for="subChild in list.children">
          <li class="link-list__item" v-if="subChild.languages && subChild.languages[lang]">
            <cta
              :href="subChild.languages[lang].url"
              :text="subChild.languages[lang].title"
              :active="subChild.languages[lang].active"
              link=true
              reversed=true
              monochrome=true
            />
          </li>
        </template>
      </ul>
    </figure>
  `
}, xs = {
  tagName: "list",
  migrate: !0,
  template: `
          list
      `
}, Ls = {
  tagName: "list-container",
  computed: {
    classValue() {
      return [
        "list-container vue-component",
        `${this.spacing ? this.spacing : ""}`,
        `${this.classes ? this.classes : ""}`,
        n.isTrue(this.headlineSticky) ? "list-container--headline-sticky has-headline-sticky" : ""
      ];
    },
    colorStyling() {
      const t = this.bgColor ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);` : "", e = this.headlineColor ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}` : "";
      return [t, e];
    }
  },
  props: {
    classes: String,
    headline: String,
    level: String,
    bgColor: String,
    headlineColor: String,
    headlineSticky: {
      default: !1
    },
    spacing: String
  },
  template: `
    <div :class="classValue" :style="colorStyling">
      <div class="list-container__container utility-animation container headline-sticky__target fade-in-bottom" data-utility-animation-step="1">
        <div class="row">
          <div class="col-sm-12 ">
            <headline :text="headline" :level="level" classes="list-container__headline" />
          </div>
        </div>
      </div>
      <slot-items :items="$slots.default"></slot-items>
    </div>
  `
}, Ds = {
  tagName: "list-view",
  computed: {
    style() {
      const t = this.color ? this.color : "#5CBBFF";
      return `fill: ${t}; stroke: ${t}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 18 16">
      <path d="M6.52277 2.84119H17.204C17.3993 2.84119 17.5867 2.76358 17.7248 2.62543C17.863 2.48729 17.9406 2.29992 17.9406 2.10455C17.9406 1.90919 17.863 1.72182 17.7248 1.58368C17.5867 1.44553 17.3993 1.36792 17.204 1.36792H6.52277C6.3274 1.36792 6.14003 1.44553 6.00189 1.58368C5.86374 1.72182 5.78613 1.90919 5.78613 2.10455C5.78613 2.29992 5.86374 2.48729 6.00189 2.62543C6.14003 2.76358 6.3274 2.84119 6.52277 2.84119Z" stroke-width="0" />
      <path d="M17.204 7.26123H6.52277C6.3274 7.26123 6.14003 7.33884 6.00189 7.47699C5.86374 7.61513 5.78613 7.8025 5.78613 7.99787C5.78613 8.19323 5.86374 8.3806 6.00189 8.51874C6.14003 8.65689 6.3274 8.7345 6.52277 8.7345H17.204C17.3993 8.7345 17.5867 8.65689 17.7248 8.51874C17.863 8.3806 17.9406 8.19323 17.9406 7.99787C17.9406 7.8025 17.863 7.61513 17.7248 7.47699C17.5867 7.33884 17.3993 7.26123 17.204 7.26123Z" stroke-width="0" />
      <path d="M17.204 13.1545H6.52277C6.3274 13.1545 6.14003 13.2321 6.00189 13.3703C5.86374 13.5084 5.78613 13.6958 5.78613 13.8912C5.78613 14.0865 5.86374 14.2739 6.00189 14.4121C6.14003 14.5502 6.3274 14.6278 6.52277 14.6278H17.204C17.3993 14.6278 17.5867 14.5502 17.7248 14.4121C17.863 14.2739 17.9406 14.0865 17.9406 13.8912C17.9406 13.6958 17.863 13.5084 17.7248 13.3703C17.5867 13.2321 17.3993 13.1545 17.204 13.1545Z" stroke-width="0" />
      <path d="M2.83963 1V0.75H1.36636C1.23054 0.75 1.11205 0.784675 1.01476 0.849537C0.919027 0.913356 0.858328 0.996658 0.82048 1.07236C0.783121 1.14707 0.765687 1.21877 0.757203 1.26967C0.752863 1.29571 0.750596 1.31796 0.749402 1.33468C0.748801 1.34308 0.748464 1.35021 0.748276 1.35585L0.748091 1.36323L0.748056 1.36607L0.748049 1.36727L0.748047 1.36781L0.748047 1.36807C0.748047 1.36819 0.748047 1.36832 0.998047 1.36832H0.748047V2.84159C0.748047 2.97741 0.782722 3.0959 0.847584 3.19319C0.911403 3.28892 0.994705 3.34962 1.0704 3.38747C1.14512 3.42483 1.21681 3.44226 1.26771 3.45075C1.29376 3.45509 1.31601 3.45736 1.33273 3.45855C1.34113 3.45915 1.34825 3.45949 1.3539 3.45968L1.36128 3.45986L1.36411 3.45989L1.36531 3.4599L1.36586 3.4599L1.36612 3.4599C1.36624 3.4599 1.36636 3.4599 1.36636 3.2099V3.4599H2.83963C2.97546 3.4599 3.09395 3.42523 3.19124 3.36037C3.28697 3.29655 3.34767 3.21325 3.38552 3.13755C3.42288 3.06283 3.44031 2.99114 3.44879 2.94024C3.45313 2.91419 3.4554 2.89194 3.4566 2.87522C3.4572 2.86682 3.45753 2.8597 3.45772 2.85405L3.45791 2.84667L3.45794 2.84384L3.45795 2.84264L3.45795 2.84209L3.45795 2.84184C3.45795 2.84171 3.45795 2.84159 3.20795 2.84159H3.45795V1.36832C3.45795 1.23249 3.42328 1.114 3.35841 1.01671C3.29459 0.92098 3.21129 0.860281 3.1356 0.822433C3.06088 0.785074 2.98919 0.76764 2.93828 0.759156C2.91224 0.754816 2.88999 0.752549 2.87327 0.751355C2.86487 0.750755 2.85774 0.750417 2.8521 0.750229L2.84472 0.750044L2.84188 0.750009L2.84068 0.750002L2.84014 0.750001L2.83988 0.75C2.83976 0.75 2.83963 0.75 2.83963 1Z" stroke-width="0.5"/>
      <path d="M2.83963 6.89331V6.64331H1.36636C1.23054 6.64331 1.11205 6.67799 1.01476 6.74285C0.919027 6.80667 0.858328 6.88997 0.82048 6.96567C0.783121 7.04038 0.765687 7.11208 0.757203 7.16298C0.752863 7.18902 0.750596 7.21127 0.749402 7.22799C0.748801 7.23639 0.748464 7.24352 0.748276 7.24916L0.748091 7.25654L0.748056 7.25938L0.748049 7.26058L0.748047 7.26112L0.748047 7.26138C0.748047 7.2615 0.748047 7.26163 0.998047 7.26163H0.748047V8.7349C0.748047 8.87072 0.782722 8.98921 0.847584 9.08651C0.911403 9.18223 0.994705 9.24293 1.0704 9.28078C1.14512 9.31814 1.21681 9.33557 1.26771 9.34406C1.29376 9.3484 1.31601 9.35067 1.33273 9.35186C1.34113 9.35246 1.34825 9.3528 1.3539 9.35299L1.36128 9.35317L1.36411 9.3532L1.36531 9.35321L1.36586 9.35321L1.36612 9.35321C1.36624 9.35321 1.36636 9.35321 1.36636 9.10321V9.35321H2.83963C2.97546 9.35321 3.09395 9.31854 3.19124 9.25368C3.28697 9.18986 3.34767 9.10656 3.38552 9.03086C3.42288 8.95614 3.44031 8.88445 3.44879 8.83355C3.45313 8.8075 3.4554 8.78525 3.4566 8.76853C3.4572 8.76013 3.45753 8.75301 3.45772 8.74736L3.45791 8.73999L3.45794 8.73715L3.45795 8.73595L3.45795 8.7354L3.45795 8.73515C3.45795 8.73502 3.45795 8.7349 3.20795 8.7349H3.45795V7.26163C3.45795 7.1258 3.42328 7.00731 3.35841 6.91002C3.29459 6.81429 3.21129 6.75359 3.1356 6.71574C3.06088 6.67838 2.98919 6.66095 2.93828 6.65247C2.91224 6.64813 2.88999 6.64586 2.87327 6.64467C2.86487 6.64407 2.85774 6.64373 2.8521 6.64354L2.84472 6.64335L2.84188 6.64332L2.84068 6.64331L2.84014 6.64331L2.83988 6.64331C2.83976 6.64331 2.83963 6.64331 2.83963 6.89331Z" stroke-width="0.5" stroke-linejoin="round"/>
      <path d="M2.84307 12.7861V12.5361H1.36705C1.23105 12.5361 1.11244 12.5709 1.01505 12.6358C0.919221 12.6997 0.858457 12.783 0.820566 12.8588C0.783164 12.9336 0.765709 13.0054 0.757214 13.0564C0.752868 13.0825 0.750598 13.1047 0.749403 13.1215C0.748802 13.1299 0.748464 13.137 0.748276 13.1427L0.748091 13.15L0.748056 13.1529L0.748049 13.1541L0.748047 13.1546L0.748047 13.1549C0.748047 13.155 0.748047 13.1551 0.998047 13.1551H0.748047V14.6312C0.748047 14.7672 0.782765 14.8858 0.847691 14.9832C0.911575 15.079 0.994963 15.1398 1.07075 15.1776C1.14555 15.215 1.21733 15.2325 1.2683 15.241C1.29437 15.2453 1.31665 15.2476 1.33338 15.2488C1.3418 15.2494 1.34893 15.2497 1.35458 15.2499L1.36196 15.2501L1.3648 15.2502L1.366 15.2502L1.36655 15.2502L1.3668 15.2502C1.36693 15.2502 1.36705 15.2502 1.36705 15.0002V15.2502H2.84307C2.97907 15.2502 3.09769 15.2154 3.19508 15.1505C3.29091 15.0866 3.35167 15.0033 3.38956 14.9275C3.42696 14.8527 3.44442 14.7809 3.45291 14.7299C3.45726 14.7038 3.45953 14.6816 3.46072 14.6648C3.46133 14.6564 3.46166 14.6493 3.46185 14.6436L3.46204 14.6363L3.46207 14.6334L3.46208 14.6322L3.46208 14.6317L3.46208 14.6314C3.46208 14.6313 3.46208 14.6312 3.21208 14.6312H3.46208V13.1551C3.46208 13.0191 3.42736 12.9005 3.36244 12.8031C3.29855 12.7073 3.21516 12.6465 3.13938 12.6087C3.06458 12.5712 2.9928 12.5538 2.94183 12.5453C2.91576 12.541 2.89348 12.5387 2.87674 12.5375C2.86833 12.5369 2.8612 12.5366 2.85555 12.5364L2.84817 12.5362L2.84533 12.5361L2.84413 12.5361L2.84358 12.5361L2.84332 12.5361C2.8432 12.5361 2.84307 12.5361 2.84307 12.7861Z" stroke-width="0.5"/>
    </svg>
  `
}, Ts = {
  tagName: "logo-list-items",
  computed: {},
  methods: {
    getItemComponent(t) {
      return t != null && t.url ? "a" : "span";
    },
    getDelay(t) {
      const e = this.getIndex(t), s = e > 0 ? 100 : 0;
      return `--utility-animation-delay: ${`${e * s}ms`};`;
    },
    getIndex(t) {
      return this.isClone ? this.list.length + t : t;
    }
  },
  template: `
    <component v-for="(item, index) in list" :is="getItemComponent(item)"
      :href="item.url"
      target="_blank"
      rel="noopener"
      :class="['logo-list__item justify-content-center align-items-center fade-in-bottom', { 'py-8 px-4 mb-3': !isOverlapping, 'logo-list--clone': isClone }]"
      :title="item.title"
      data-utility-animation-step="1"
      :style="getDelay(index)"
    >
      <v-img :img="item.img" :alt="item.alt" preset="logoList" :cloudinary="true" />
    </component>
  `,
  props: {
    list: Array,
    isOverlapping: Boolean,
    isClone: Boolean
  }
}, Es = {
  tagName: "logo-list",
  components: {
    "logo-list-items": Ts
  },
  computed: {
    defaultSpacing() {
    },
    classValue() {
      return [
        "logo-list container utility-animation vue-component",
        this.aspectRatio ? "logo-list--aspect-ratio" : "",
        n.isTrue(this.sticky) ? "is-sticky-scroller" : "",
        this.spacing ? this.spacing : "py-4",
        this.isOverlapping ? "logo-list--is-overlapping" : ""
      ];
    },
    isOverlapping() {
      return n.isTrue(this.overlapping);
    },
    columnsValue() {
      const e = parseInt(this.columns);
      return "--column-width: " + `calc(${100 / (Number.isNaN(e) ? 4 : e)}% - 3px)`;
    },
    aspectRatioValue() {
      const t = this.aspectRatio.split("/");
      return t.length != 2 ? "" : `--aspect-ratio-width: ${t[0]}; --aspect-ratio-height: ${t[1]}`;
    },
    styles() {
      return [
        this.columnsValue,
        this.aspectRatioValue,
        this.bgColor ? `--logo-list-background: ${this.bgColor}` : ""
      ].join("; ");
    }
  },
  props: {
    list: Array,
    sticky: {
      default: !1
    },
    spacing: String,
    columns: Number,
    aspectRatio: {
      default: !1
    },
    overlapping: {
      default: !1
    },
    bgColor: String
  },
  template: `
    <div :class="classValue" :style="styles">
      <div class="logo-list__row row">
        <wrapper classes="logo-list__scroller" :hide-container="!isOverlapping" :hide-container-class="true">
          <div :class="['logo-list__col col d-flex', { 'flex-wrap': !isOverlapping }]">
            <logo-list-items :list="list" :is-overlapping="isOverlapping" />
            <logo-list-items :list="list" is-clone="true" :is-overlapping="isOverlapping" v-if="isOverlapping" />
          </div>
        </wrapper>
      </div>
    </div>
  `
}, Ms = {
  tagName: "lottie",
  // components: {
  //   Vue3Lottie,
  // },
  computed: {
    classList() {
      return ["lottie", "vue-component"];
    },
    widthValue() {
      return this.width && this.width !== "" ? this.width : "100%";
    },
    heightValue() {
      return this.height && this.height !== "" ? this.height : "100%";
    },
    backgroundValue() {
      return this.background && this.background !== "" ? this.background : "transparent";
    },
    loopValue() {
      return this.loop && this.loop !== "" ? this.loop : !0;
    },
    autoplayValue() {
      return this.autoplay && this.autoplay !== "" ? this.autoplay : !0;
    },
    nameValue() {
      return this.name && this.name !== "" ? this.name : "lottie-" + Math.random();
    },
    rendererValue() {
      return this.renderer && this.renderer !== "" ? this.renderer : "svg";
    },
    options() {
      return {
        renderer: this.rendererValue,
        loop: this.loopValue,
        autoplay: this.autoplayValue,
        width: this.getSize(this.widthValue),
        height: this.getSize(this.heightValue),
        animationData: this.data
      };
    }
  },
  data() {
    return {
      style: {}
    };
  },
  mounted() {
    this.initStyle();
  },
  methods: {
    initStyle() {
      this.style = {
        width: this.getSize(this.widthValue),
        height: this.getSize(this.heightValue),
        background: this.backgroundValue
      };
    },
    getSize(t) {
      return !t.indexOf || t.indexOf("px") === -1 && t.indexOf("%") === -1 ? `${t}px` : t;
    }
  },
  props: {
    data: Object,
    name: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    background: {
      type: String
    },
    loop: {
      type: [Boolean, Number]
    },
    autoplay: {
      type: Boolean
    },
    renderer: {
      type: String
    }
  },
  template: `
    <div :class="classList">
    </div>
  `
}, Ns = {
  tagName: "magnifier",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    },
    fill() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 21 21" fill="none">
    <path d="M15.1186 13.027H14.2152L13.895 12.7182C15.0157 11.4146 15.6903 9.72223 15.6903 7.88118C15.6903 3.77598 12.3627 0.448364 8.25753 0.448364C4.15232 0.448364 0.824707 3.77598 0.824707 7.88118C0.824707 11.9864 4.15232 15.314 8.25753 15.314C10.0986 15.314 11.791 14.6393 13.0946 13.5187L13.4033 13.8389V14.7422L19.1209 20.4484L20.8247 18.7445L15.1186 13.027ZM8.25753 13.027C5.41018 13.027 3.11173 10.7285 3.11173 7.88118C3.11173 5.03384 5.41018 2.73539 8.25753 2.73539C11.1049 2.73539 13.4033 5.03384 13.4033 7.88118C13.4033 10.7285 11.1049 13.027 8.25753 13.027Z" :fill="fill"/>
  </svg>
  `
}, Ps = {
  tagName: "mail",
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(1.5);`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 42 28">
      <g>
        <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path>
      </g>
    </svg>
  `
}, Is = {
  tagName: "meerkat",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 203 363">
      <defs>
          <path d="M0.331,0.141 C2.649,3.188 6.517,9.438 6.686,9.665 L6.686,9.665 C13.064,18.257 18.496,26.341 24.899,34.915 L24.899,34.915 L7.379,104.733 C7.379,104.733 3.5,131.257 0.297,173.806 L0.297,173.806 C0.297,173.806 0,179.589 0,179.59 L0,179.59 C0,179.59 9.278,196.693 9.292,196.752 L9.292,196.752 C9.278,196.693 12.801,202.691 12.742,202.701 L12.742,202.701 C12.919,202.672 15.854,219.4 15.854,219.4 L15.854,219.4 C15.906,221.533 30.958,275.435 30.958,275.435 L30.958,275.435 L26.97,284.459 L52.286,284.459 C51.382,284.074 48.43,276.252 48.43,276.252 L48.43,276.252 C48.43,276.252 48.512,217.555 48.523,217.512 L48.523,217.512 L52.657,201.413 L62.231,188.494 L72.149,200.959 L75.465,220.343 L74.134,275.138 C74.4,276.18 70.57,284.754 71.197,284.754 L71.197,284.754 L92.746,284.754 C93.652,284.754 90.12,276.579 90.19,276.232 L90.19,276.232 C90.19,276.232 104.198,227.893 108.316,217.041 L108.316,217.041 C108.328,217.009 117.295,182.837 117.296,182.833 L117.296,182.833 C117.291,182.833 114.313,149.101 114.313,149.101 L114.313,149.101 L124.3,115.094 L111.307,63.933 L103.856,34.915 C103.856,34.916 109.431,27.147 115.007,19.378 L115.007,19.378 C120.588,11.604 126.169,3.829 126.16,3.842 L126.16,3.842 C126.141,3.866 128.954,0.142 129,0.004 L129,0.004 L129,0 L0.331,0.141 Z M52.286,284.459 C52.331,284.478 52.371,284.479 52.405,284.459 L52.405,284.459 L52.286,284.459 Z" id="path-1"/>
          <path d="M59.558,66.458 L55.5,93.394 C55.5,93.394 51.894,142.106 51.401,140.558 L51.401,140.558 C51.401,140.558 31.098,150.631 30.82,150.619 L30.82,150.619 L16.632,113.154 C16.632,113.154 2.214,95.987 0.222,86.114 L0.222,86.114 C1.297,95.059 5.907,134.677 5.907,134.677 L5.907,134.677 L26.414,176.665 C26.414,176.665 51.786,168.865 65.352,166.36 L65.352,166.36 C65.411,166.35 65.47,166.342 65.529,166.332 L65.529,166.332 C65.352,166.36 63.187,147.026 63.187,147.026 L63.187,147.026 C63.187,147.024 69.608,108.217 69.505,108.349 L69.505,108.349 C69.467,108.397 69.558,108.254 69.608,108.217 L69.608,108.217 L75.562,89.161 L108.798,118.094 L111,104.157 L84.597,30.589 L88.173,15.065 L76.35,-1.13686838e-13 L59.558,66.458 Z M0,84.339 C0.02,84.898 0.096,85.491 0.222,86.114 L0.222,86.114 C0.085,84.976 0.005,84.334 0,84.334 L0,84.334 L0,84.339 Z" id="path-3"/>
          <path d="M0,0.5 C0.444,0.5 0.889,0.5 1.333,0.5 L1.333,0.5 C1.556,0.5 1.778,0.5 2,0.5 L2,0.5 L0,0.5 Z" id="path-5"/>
          <path d="M0,0.7845 C0.666,0.5945 1.333,0.4055 2,0.2155 L2,0.2155 C1.333,0.4045 0.666,0.5945 0,0.7845 L0,0.7845 Z" id="path-7"/>
          <path d="M59.472,2.204 C47.677,5.185 27.287,24.626 27.287,24.626 L27.287,24.626 L1.13686838e-13,54.63 L15.432,78.013 C15.496,78.043 38.694,79.317 38.694,79.317 L38.694,79.317 L56.209,89.183 L67.199,94.626 C66.955,93.563 65.78,90.32 65.78,89.183 L65.78,89.183 C65.78,85.852 66.899,82.789 68.764,80.323 L68.764,80.323 C70.425,78.367 72.88,76.606 75.708,75.282 L75.708,75.282 C77.201,74.771 78.796,74.479 80.463,74.479 L80.463,74.479 C81.499,74.479 82.509,74.59 83.484,74.794 L83.484,74.794 C87.37,75.784 88.505,77.23 91.411,79.411 L91.411,79.411 C93.726,82.011 95.143,85.427 95.143,89.183 L95.143,89.183 C95.143,89.963 93.515,93.27 93.398,94.018 L93.398,94.018 L96.867,91.933 L119.359,79.407 L144.286,78.68 L144.238,78.672 L160.101,55.328 C150.439,44.793 130.813,23.78 130.813,23.78 L130.813,23.78 C130.813,23.78 110.146,5.043 101.506,2.204 L101.506,2.204 C96.81,0.661 89.49,2.27373675e-13 81.991,2.27373675e-13 L81.991,2.27373675e-13 C73.543,2.27373675e-13 64.87,0.84 59.472,2.204 L59.472,2.204 Z" id="path-9"/>
          <path d="M0,23.375 L5.522,24.121 C23.669,25.973 27.166,12.632 16.588,0 L16.588,0 L0,23.375 Z" id="path-11"/>
          <path d="M10.143,0.819 C7.291,1.797 4.833,3.605 3.049,5.963 L3.049,5.963 C1.143,8.477 0,11.601 0,15 L0,15 C0,16.161 0.143,17.285 0.394,18.37 L0.394,18.37 C1.925,25.029 7.876,30 15.001,30 L15.001,30 C22.489,30 28.679,24.505 29.8,17.332 L29.8,17.332 C29.92,16.571 30,15.796 30,15 L30,15 C30,11.167 28.552,7.682 26.187,5.031 L26.187,5.031 C24.093,2.683 21.283,0.99 18.088,0.32 L18.088,0.32 C17.091,0.113 16.059,0 15.001,0 L15.001,0 C13.297,0 11.667,0.297 10.143,0.819 L10.143,0.819 Z" id="path-13"/>
          <path d="M5.90199653,0.799 C-4.67700347,13.431 -1.08100347,26.474 17.0669965,24.622 L17.0669965,24.622 L21.3309965,24.186 L6.62399653,0 L5.90199653,0.799 Z" id="path-15"/>
          <path d="M15.553,1.257 C11.18,2.755 7.411,5.529 4.676,9.142 L4.676,9.142 C1.754,12.998 0,17.789 0,23 L0,23 C0,24.779 0.222,26.505 0.604,28.168 L0.604,28.168 C2.952,38.378 12.077,46 23.001,46 L23.001,46 C34.484,46 43.973,37.576 45.695,26.576 L45.695,26.576 C45.878,25.407 46,24.219 46,23 L46,23 C46,17.124 43.778,11.78 40.153,7.714 L40.153,7.714 C36.943,4.115 32.633,1.519 27.736,0.493 L27.736,0.493 C26.207,0.173 24.623,0 23.001,0 L23.001,0 C20.391,0 17.891,0.455 15.553,1.257 L15.553,1.257 Z" id="path-17"/>
          <path d="M15.216,1.23 C10.936,2.695 7.25,5.409 4.574,8.944 L4.574,8.944 C1.716,12.717 0,17.402 0,22.5 L0,22.5 C0,24.24 0.217,25.928 0.591,27.556 L0.591,27.556 C2.888,37.544 11.815,45 22.5,45 L22.5,45 C33.734,45 43.017,36.759 44.702,25.998 L44.702,25.998 C44.88,24.855 45,23.693 45,22.5 L45,22.5 C45,16.752 42.827,11.524 39.28,7.547 L39.28,7.547 C36.139,4.025 31.923,1.485 27.132,0.483 L27.132,0.483 C25.637,0.17 24.089,0 22.5,0 L22.5,0 C19.947,0 17.503,0.446 15.216,1.23 L15.216,1.23 Z" id="path-19"/>
          <path d="M7.438,0.601 C5.347,1.318 3.545,2.645 2.236,4.372 L2.236,4.372 C0.839,6.217 0,8.508 0,11 L0,11 C0,11.851 0.106,12.676 0.289,13.471 L0.289,13.471 C1.412,18.356 5.776,22 11.001,22 L11.001,22 C16.492,22 21.03,17.971 21.854,12.71 L21.854,12.71 C21.941,12.152 22,11.583 22,11 L22,11 C22,8.19 20.937,5.634 19.203,3.689 L19.203,3.689 C17.668,1.968 15.607,0.726 13.264,0.235 L13.264,0.235 C12.533,0.082 11.776,0 11.001,0 L11.001,0 C9.751,0 8.557,0.217 7.438,0.601 L7.438,0.601 Z" id="path-21"/>
          <path d="M7.439,0.6 C5.347,1.318 3.545,2.644 2.236,4.372 L2.236,4.372 C0.839,6.216 0,8.508 0,11 L0,11 C0,11.85 0.106,12.676 0.289,13.471 L0.289,13.471 C1.411,18.356 5.776,22 11.001,22 L11.001,22 C16.493,22 21.03,17.971 21.853,12.71 L21.853,12.71 C21.941,12.152 22,11.583 22,11 L22,11 C22,8.19 20.937,5.634 19.203,3.689 L19.203,3.689 C17.667,1.968 15.607,0.726 13.264,0.235 L13.264,0.235 C12.534,0.082 11.777,0 11.001,0 L11.001,0 C9.752,0 8.557,0.217 7.439,0.6 L7.439,0.6 Z" id="path-23"/>
          <path d="M2.367,0.191 C1.701,0.419 1.128,0.842 0.711,1.391 L0.711,1.391 C0.266,1.978 0,2.707 0,3.5 L0,3.5 C0,3.771 0.034,4.033 0.092,4.287 L0.092,4.287 C0.448,5.84 1.838,7 3.499,7 L3.499,7 C5.248,7 6.692,5.718 6.953,4.044 L6.953,4.044 C6.981,3.867 7,3.686 7,3.5 L7,3.5 C7,2.607 6.662,1.792 6.11,1.174 L6.11,1.174 C5.621,0.627 4.966,0.232 4.221,0.075 L4.221,0.075 C3.987,0.026 3.747,0 3.499,0 L3.499,0 C3.102,0 2.723,0.069 2.367,0.191 L2.367,0.191 Z" id="path-25"/>
          <path d="M0,16.719 L22.336,113 L60.3,89.34 L47.339,38.301 C47.339,38.301 38.434,69.79 36.357,72.885 L36.357,72.885 L10.881,0 L0,16.719 Z" id="path-27"/>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-606, -330)">
              <g transform="translate(606, 330)">
                  <g transform="translate(52, 77.872)">
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"/>
                      </mask>
                      <g id="Clip-2"/>
                      <polygon id="Fill-1" fill="#F98620" mask="url(#mask-2)" points="-1 285.754 130 285.754 130 -3.246 -1 -3.246"/>
                  </g>
                  <g id="Group-6" transform="translate(0, 114.961)">
                      <mask id="mask-4" fill="white">
                          <use xlink:href="#path-3"/>
                      </mask>
                      <g id="Clip-5"/>
                      <polygon id="Fill-4" fill="#FCD400" mask="url(#mask-4)" points="-1 177.665 112 177.665 112 -1.335 -1 -1.335"/>
                  </g>
                  <g id="Group-9" transform="translate(155, 78.626)">
                      <mask id="mask-6" fill="white">
                          <use xlink:href="#path-5"/>
                      </mask>
                      <g id="Clip-8"/>
                      <polygon id="Fill-7" fill="#DA740D" mask="url(#mask-6)" points="-1 1.5 3 1.5 3 -0.501 -1 -0.501"/>
                  </g>
                  <g id="Group-12" transform="translate(148, 79.6255)">
                      <mask id="mask-8" fill="white">
                          <use xlink:href="#path-7"/>
                      </mask>
                      <g id="Clip-11"/>
                      <polygon id="Fill-10" fill="#DA740D" mask="url(#mask-8)" points="-1 1.7845 3 1.7845 3 -0.7845 -1 -0.7845"/>
                  </g>
                  <g id="Group-15" transform="translate(36.899, 0)">
                      <mask id="mask-10" fill="white">
                          <use xlink:href="#path-9"/>
                      </mask>
                      <g id="Clip-14"/>
                      <polygon id="Fill-13" fill="#FCD400" mask="url(#mask-10)" points="-1.899 95.626 161.101 95.626 161.101 -1.374 -1.899 -1.374"/>
                  </g>
                  <g id="Group-18" transform="translate(180.412, 55.328)">
                      <mask id="mask-12" fill="white">
                          <use xlink:href="#path-11"/>
                      </mask>
                      <g id="Clip-17"/>
                      <polygon id="Fill-16" fill="#F98620" mask="url(#mask-12)" points="-0.412 26.974 23.588 26.974 23.588 -0.702 -0.412 -0.702"/>
                  </g>
                  <g id="Group-21" transform="translate(102, 73.626)">
                      <mask id="mask-14" fill="white">
                          <use xlink:href="#path-13"/>
                      </mask>
                      <g id="Clip-20"/>
                      <polygon id="Fill-19" fill="#000421" mask="url(#mask-14)" points="-1 31 31 31 31 -1 -1 -1"/>
                  </g>
                  <g id="Group-24" transform="translate(31, 53.827)">
                      <mask id="mask-16" fill="white">
                          <use xlink:href="#path-15"/>
                      </mask>
                      <g id="Clip-23"/>
                      <polygon id="Fill-22" fill="#F98620" mask="url(#mask-16)" points="-5.67700347 27.475 22.9999965 27.475 22.9999965 -0.201 -5.67700347 -0.201"/>
                  </g>
                  <g id="Group-27" transform="translate(67, 24.626)">
                      <mask id="mask-18" fill="white">
                          <use xlink:href="#path-17"/>
                      </mask>
                      <g id="Clip-26"/>
                      <polygon id="Fill-25" fill="#F98620" mask="url(#mask-18)" points="-1 47 47 47 47 -1 -1 -1"/>
                  </g>
                  <g id="Group-30" transform="translate(121, 24.626)">
                      <mask id="mask-20" fill="white">
                          <use xlink:href="#path-19"/>
                      </mask>
                      <g id="Clip-29"/>
                      <polygon id="Fill-28" fill="#F98620" mask="url(#mask-20)" points="-1 46 46 46 46 -1 -1 -1"/>
                  </g>
                  <g id="Group-33" transform="translate(125, 44.626)">
                      <mask id="mask-22" fill="white">
                          <use xlink:href="#path-21"/>
                      </mask>
                      <g id="Clip-32"/>
                      <polygon id="Fill-31" fill="#000421" mask="url(#mask-22)" points="-1 23 23 23 23 -1 -1 -1"/>
                  </g>
                  <g id="Group-36" transform="translate(87, 45.626)">
                      <mask id="mask-24" fill="white">
                          <use xlink:href="#path-23"/>
                      </mask>
                      <g id="Clip-35"/>
                      <polygon id="Fill-34" fill="#000421" mask="url(#mask-24)" points="-1 23 23 23 23 -1 -1 -1"/>
                  </g>
                  <g id="Group-39" transform="translate(115, 107.626)">
                      <mask id="mask-26" fill="white">
                          <use xlink:href="#path-25"/>
                      </mask>
                      <g id="Clip-38"/>
                      <polygon id="Fill-37" fill="#000421" mask="url(#mask-26)" points="-1 8 8 8 8 -1 -1 -1"/>
                  </g>
                  <g id="Group-42" transform="translate(116, 103.626)">
                      <mask id="mask-28" fill="white">
                          <use xlink:href="#path-27"/>
                      </mask>
                      <g id="Clip-41"/>
                      <polygon id="Fill-40" fill="#FCD400" mask="url(#mask-28)" points="-1 114 61 114 61 -1 -1 -1"/>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  `
}, As = {
  tagName: "menu",
  computed: {
    strokeWidth() {
      return 2;
    },
    effectiveKeySplines() {
      return "0.19 1 0.2 1";
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    lineData() {
      return {
        line1: {
          from: {
            x1: "8.5",
            x2: "44.5",
            y1: "5.5",
            y2: "5.5"
          },
          to: {
            x1: "13",
            x2: "38.4558",
            y1: "31.8787",
            y2: "6.42284"
          }
        },
        line2: {
          from: {
            x1: "8.5",
            x2: "44.5",
            y1: "25.5",
            y2: "25.5"
          },
          to: {
            x1: "15.1213",
            x2: "40.5772",
            y1: "6",
            y2: "31.4558"
          }
        },
        line3: {
          from: {
            x1: "19.5",
            x2: "44.5",
            y1: "15.5",
            y2: "15.5"
          },
          to: {
            x1: "19.5",
            x2: "19.5",
            y1: "15.5",
            y2: "15.5"
          }
        }
      };
    }
  },
  updated() {
    this.animateLines(this.closed);
  },
  mounted() {
    this.animateLines(this.closed, !0);
  },
  methods: {
    animateLines(t, e) {
      const s = [];
      this.$refs.svg.querySelectorAll("animate").forEach((r) => {
        (!t && !r.classList.contains("closed") || t && r.classList.contains("closed")) && s.push(r);
      });
      const i = e ? "beginElementAt" : "beginElement";
      s.forEach((r) => {
        r[i](1e3);
      });
    }
  },
  props: {
    settings: Object,
    color: String,
    closed: Boolean
  },
  data() {
    return {
      duration: "0.55s",
      begin: "indefinite",
      keyTimes: "0;1"
    };
  },
  template: `
    <svg v-bind="settings" :style="style" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svg" >
      <line id="line1" :x1="lineData.line1.from.x1" :x2="lineData.line1.from.x2" :y1="lineData.line1.from.y1" :y2="lineData.line1.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line1" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line1.from.x1" :to="lineData.line1.to.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line1.from.x2" :to="lineData.line1.to.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line1.from.y1" :to="lineData.line1.to.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line1.from.y2" :to="lineData.line1.to.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line1.to.x1" :to="lineData.line1.from.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line1.to.x2" :to="lineData.line1.from.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line1.to.y1" :to="lineData.line1.from.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line1.to.y2" :to="lineData.line1.from.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 0.05s" id="line2" :x1="lineData.line2.from.x1" :x2="lineData.line2.from.x2" :y1="lineData.line2.from.y1" :y2="lineData.line2.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line2" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line2.from.x1" :to="lineData.line2.to.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line2.from.x2" :to="lineData.line2.to.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line2.from.y1" :to="lineData.line2.to.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line2.from.y2" :to="lineData.line2.to.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line2.to.x1" :to="lineData.line2.from.x1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line2.to.x2" :to="lineData.line2.from.x2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line2.to.y1" :to="lineData.line2.from.y1" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line2.to.y2" :to="lineData.line2.from.y2" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 0.05s" id="line3" :x1="lineData.line3.from.x1" :x2="lineData.line3.from.x2" :y1="lineData.line3.from.y1" :y2="lineData.line3.from.y2" :stroke-width="strokeWidth" stroke-linecap="round" ref="line3" >
        <animate attributeName="stroke-width" :begin="begin" dur="0.01s" :from="strokeWidth" to="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate class="closed" attributeName="stroke-width" :begin="begin" dur="0.01s" :to="strokeWidth" from="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
    </svg>
  `
}, $s = {
  tagName: "minus",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `
}, qs = {
  tagName: "modal",
  computed: {
    modalErrorValue() {
      return n.getJSON(this.modalError);
    },
    classList() {
      return [
        "modal fade",
        this.slimValue ? "modal--slim" : "",
        this.notificationValue ? "modal--notification" : "",
        this.isCenterSlim ? "modal--center-slim" : "",
        "vue-component"
      ];
    },
    dialogClassList() {
      return [
        "modal-dialog",
        `${this.slimValue ? "modal-lg" : "modal-xl"}`,
        `${this.centerValue ? "modal-dialog-centered" : ""}`
      ];
    },
    settings() {
      return {
        "data-client-name": this.clientName ? this.clientName : null,
        "data-api-url": this.apiUrl ? this.apiUrl : null,
        "data-job-id": this.jobId ? this.jobId : null,
        "data-modal-id": this.modalId ? this.modalId : null,
        "data-api-key": this.apiKey ? this.apiKey : null,
        "data-mock-apply-url": this.mockApplyUrl ? this.mockApplyUrl : null,
        "data-mock-documents-url": this.mockDocumentsUrl ? this.mockDocumentsUrl : null
      };
    },
    isCenterSlim() {
      return this.slimValue && this.centerValue;
    },
    modal() {
      return this.$refs.modal;
    },
    centerValue() {
      return n.isTrue(this.center);
    },
    slimValue() {
      return n.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? !0 : null;
    },
    notificationValue() {
      return n.isTrue(this.notification);
    },
    size() {
      return this.slimValue || this.notificationValue ? "small" : null;
    },
    hasCircleAndHover() {
      return !(this.isCenterSlim || this.notificationValue);
    },
    circle() {
      return this.hasCircleAndHover;
    },
    hover() {
      return this.hasCircleAndHover;
    },
    bodyClasses() {
      return ["modal__body", this.loading ? l.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(f.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(t) {
      const e = document.querySelector("html");
      t ? e.classList.add(l.MODAL_OPEN) : (e.classList.remove(l.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const e = this.$refs.modal.querySelector(D.rootSelector);
      if (!e) return;
      const s = D.getInstance(e);
      s || D.reset(s.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(f.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(t) {
      const e = t == null ? void 0 : t.detail;
      this.loading = e;
    },
    openModal() {
      setTimeout(() => {
        Q.open(this.$refs.modal);
      }, 70);
    }
  },
  data() {
    return {
      observer: null,
      loading: !1,
      blabla: "text"
    };
  },
  props: {
    application: Boolean,
    form: Object,
    success: Object,
    clientName: String,
    apiUrl: String,
    jobId: String,
    modalId: String,
    slim: {
      default: null
    },
    show: {
      default: null
    },
    center: {
      default: null
    },
    notification: {
      default: null
    },
    apiKey: String,
    mockApplyUrl: String,
    mockDocumentsUrl: String,
    modalError: Object,
    content: String
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" :data-loading="loadingValue" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings">
      <div :class="dialogClassList">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="hover" :circle="circle" :size="size" />
            </div>
          </div>
          <div :class="bodyClasses">
            <modal-application v-if="application" :form="form" :success="success" />
            <div class="container" v-else-if="content">
              <div class="row">
                <div class="col" v-html="content"></div>
              </div>
            </div>
            <slot></slot>
            <div class="modal__error container" v-if="modalErrorValue">
              <div class="modal__error-row row">
                <div class="modal__error-content col-lg-8">
                  <div class="modal__error-headline">
                    <headline
                      :text="modalErrorValue.headline.text"
                      level='h2'
                      :classes="modalErrorValue.headline.classes"
                    />
                  </div>
                  <div class="modal__error-icon">
                    <icon
                      icon='meerkat'
                      size='xxl'
                    />
                  </div>
                  <div class="modal__error-subline">
                    {{ modalErrorValue.subline }}
                  </div>
                  <div class="modal__error-text">
                    {{ modalErrorValue.text }}
                  </div>
                  <div class="modal__error-mail">
                    <icon icon='mail' size="small" /> <a class="custom" :href="'mailto:' + modalErrorValue.mail">{{ modalErrorValue.mail }} </a>
                  </div>
                  <div class="modal__error-phone">
                    <icon icon='phone' size="small" /> <a class="custom" :href="'tel:' + modalErrorValue.phone" > {{ modalErrorValue.phone }} </a>
                  </div>
                  <div class="modal__error-close" v-if="modalErrorValue.cta">
                    <cta
                      :text="modalErrorValue.cta.text"
                      :skin="modalErrorValue.cta.skin"
                      :width="modalErrorValue.cta.width"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
}, Os = {
  tagName: "modal-application",
  props: {
    form: Object,
    success: {
      type: Object,
      default: () => ({})
    }
  },
  template: `
      <div class="modal__application">
        <div class="modal__body-default">
          <formular
            :form="form"
            :space="' '"
            :container="true"
            :customValidation="true"
            :hasUuid="true"
          />
        </div>
        <div class="modal__success container">
          <div class="modal__success-row row">
            <div class="modal__success-content col-lg-8">
              <div class="modal__success-headline">
                <headline
                  :text="success.headline.text"
                  :level="'h2'"
                  :classes="success.headline.classes"
                />
              </div>
              <div class="modal__success-icon">
                <icon icon="rocket" />
              </div>
              <div class="modal__success-subline">
                {{ success.subline }}
              </div>
              <div class="modal__success-subheadline">
                <headline
                  :text="success.subheadline.text"
                  :level="'h4'"
                  :classes="success.subheadline.classes"
                />
              </div>
              <div class="modal__success-text">
                {{ success.text }}
              </div>
              <div class="modal__success-close">
                <cta :text="success.cta.text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `
}, Bs = {
  tagName: "people-square",
  migrate: !0,
  template: `
                        people-square
                    `
}, Fs = {
  tagName: "person-quote",
  props: {
    img: String,
    text: String,
    name: String,
    srcSet: Object
  },
  template: `
    <div class="person-quote">
      <div class="person-quote__img">
        <!-- TODO find a solution for site.data.imgSrcSets.square -->
        <v-img :img="img" :cloudinary="true" :imgSrcSets="imgSrcSets" />
      </div>
      <div class="person-quote__content">
        <div class="person-quote__text">{{text}}</div>
        <div class="person-quote__name">{{name}}</div>
      </div>
    </div>
  `
}, Vs = {
  tagName: "phone",
  computed: {
    style() {
      return `stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round; `;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M9.086 7.4a2.315 2.315 0 0 0 0-3.271L6.632 1.678a2.313 2.313 0 0 0-3.271 0L2.016 3.024a3.463 3.463 0 0 0-.439 4.365 53.778 53.778 0 0 0 15.034 15.034 3.469 3.469 0 0 0 4.366-.437l1.345-1.346a2.312 2.312 0 0 0 0-3.271l-2.453-2.453a2.312 2.312 0 0 0-3.271 0l-.818.818A54.879 54.879 0 0 1 8.268 8.22z" ></path>
    </g>
  </svg>
  `
}, Rs = {
  tagName: "phone-charger",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <line class="a" x1="2.5" y1="0.5" x2="2.5" y2="3.5" />
    <line class="a" x1="10.5" y1="0.5" x2="10.5" y2="3.5" />
    <line class="a" x1="4.5" y1="6.5" x2="8.5" y2="6.5" />
    <path class="a" d="M6.5,16.5v3a4,4,0,0,0,8,0v-.75a5.251,5.251,0,0,1,5.25-5.25H23.5" />
    <path class="a" d="M4.5,13.158V15.5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V13.158" />
    <path class="a" d="M12.5,7.5a6,6,0,0,1-12,0v-3a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1Z" />
  </svg>
  `
}, zs = {
  tagName: "phone-mail",
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 51.9 44.2">
      <path fill="none"
      d="M25.8,15.5H5.6c-0.8,0-1.5,0.7-1.5,1.5v18c0,0.8,0.7,1.5,1.5,1.5h30c0.8,0,1.5-0.7,1.5-1.5L37,31v-0.7
                L25.8,15.5z M13.2,30.2l-5.5,2.7C7.7,32.9,7.5,33,7.4,33c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.3-0.1-0.7,0.2-0.9c0,0,0.1,0,0.1-0.1
                l5.5-2.7c0.4-0.2,0.8-0.1,1.1,0.2C13.7,29.6,13.6,30,13.2,30.2C13.3,30.2,13.3,30.2,13.2,30.2z M27.7,29.8c-0.1-0.2,0-0.4,0.1-0.5
                c0.2-0.2,0.4-0.3,0.7-0.3c0.1,0,0.3,0,0.4,0.1l5.4,2.7c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0,0.4-0.1,0.5c-0.2,0.2-0.4,0.3-0.7,0.3
                c-0.1,0-0.3,0-0.4-0.1L28,30.2C27.8,30.1,27.7,30,27.7,29.8z M30.7,23l-9.2,5.9c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1
                L8,21.2c-0.2-0.1-0.3-0.3-0.3-0.4c0-0.2,0-0.4,0.1-0.5C7.9,20.1,8.2,20,8.4,20c0.1,0,0.3,0,0.4,0.1l12.3,7.4l8.8-5.7L30.7,23z" />
    <path fill="none" d="M41.9,32.4c0.6,0.5,1.3,0.9,2.1,1c1.1,0.2,2.2-0.1,3.1-0.7l2.2-1.5c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-4
                c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4l-1.3,0.9c-0.2,0.1-0.3,0.2-0.5,0.1c-0.2,0-0.3-0.1-0.4-0.2c-3.2-3.8-6.1-7.9-8.5-12.2
                c-0.2-0.3-0.1-0.7,0.2-0.9l1.3-0.9c1.1-0.8,1.4-2.4,0.6-3.5c0,0,0,0,0,0l-2.8-3.9c-0.4-0.5-1-0.9-1.6-1c-0.7-0.1-1.3,0-1.9,0.4
                l-2.2,1.5c-1.6,1.1-2.2,3.2-1.4,5C29,17.4,34.7,25.6,41.9,32.4z" />
    <path fill="none" d="M25.4,15.5h0.4L37,30.4v0.7l1.6,1.6v-0.6L25,13.9h-0.2c0,0.1,0,0.2,0,0.2L25.4,15.5z" />
    <path fill="none" d="M2.6,35v3h3C4,38,2.6,36.6,2.6,35L2.6,35z" />
    <path fill="none" d="M2.6,17c0-1.7,1.3-3,3-3l0,0l19.2-0.1H25l13.6,18.2V35c0,1.7-1.3,3-3,3h23V-1h-56L2.6,17z M25.7,2.2l2.2-1.5
                c1.8-1.2,4.2-0.8,5.4,1l2.8,4c1.2,1.8,0.8,4.2-1,5.4l-0.8,0.6c2.2,3.9,4.8,7.6,7.7,11l0.8-0.6c0.8-0.6,1.9-0.9,3-0.8
                c1,0.2,1.9,0.8,2.5,1.6l2.8,3.9c1.2,1.8,0.8,4.2-1,5.5c0,0,0,0,0,0l-2.1,1.5c-2.2,1.5-5.1,1.3-7-0.5C33.6,26.5,27.8,18.2,23.8,9
                C22.7,6.5,23.5,3.7,25.7,2.2z" />
    <path fill="none" d="M-44.4-45V88h140V-45H-44.4z M78.6,60h-96v-79h96V60z" />
    <path fill="none" d="M-17.4,60h96v-79h-96L-17.4,60z M58.6-1v39h-56V-1H58.6z" />
    <path d="M24.6,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.3L37,31.1l0.1,3.9
                c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h19.8" />
    <path d="M21.1,27.5L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3c-0.1,0.2-0.1,0.3-0.1,0.5
                c0,0.2,0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l9-5.8l-0.8-1.2L21.1,27.5z" />
    <path
      d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
                C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z" />
    <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
                c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
                C27.7,30,27.8,30.1,28,30.2z" />
    <path d="M40.9,33.4c1.9,1.8,4.8,2,7,0.5l2.1-1.5c1.8-1.2,2.2-3.7,1-5.4l-2.8-4c-0.6-0.9-1.5-1.4-2.5-1.6
                c-1-0.2-2.1,0-2.9,0.6L42,22.6c-2.9-3.4-5.4-7.1-7.7-11l0.8-0.6c1.8-1.2,2.2-3.7,1-5.4l-2.8-3.9c-1.2-1.8-3.7-2.2-5.4-1l-2.2,1.6
                c-2.1,1.5-2.9,4.3-1.9,6.7C27.8,18.2,33.6,26.5,40.9,33.4z M26.5,3.4l2.2-1.5c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1
                l2.8,3.9c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-1.3,1c-0.3,0.2-0.4,0.6-0.2,0.9c2.4,4.3,5.3,8.4,8.5,12.2c0.1,0.1,0.3,0.2,0.4,0.2
                c0.2,0,0.4,0,0.5-0.1l1.3-0.9c0.5-0.4,1.2-0.5,1.9-0.4c0.7,0.1,1.2,0.5,1.6,1l2.8,4c0.8,1.1,0.5,2.7-0.6,3.5c0,0,0,0,0,0l-2.2,1.5
                c-0.9,0.6-2,0.9-3.1,0.7c-0.8-0.1-1.5-0.5-2.1-1c-7.1-6.8-12.9-15-16.8-24C24.3,6.6,24.9,4.5,26.5,3.4z" />
    </svg>
  `
}, js = {
  tagName: "pin",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round;`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path d="M12 .71a7.5 7.5 0 0 1 7.5 7.5c0 3.547-5.5 12.381-7.079 14.85a.5.5 0 0 1-.842 0C10 20.592 4.5 11.757 4.5 8.21A7.5 7.5 0 0 1 12 .71z"></path>
      <circle cx="12" cy="8.21" r="3"></circle>
    </g>
  </svg>
  `
}, Us = {
  tagName: "plus",
  computed: {
    style() {
      return "transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));";
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
      <path d="M12 1V23" stroke="#000520" stroke-linecap="round"/>
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `
}, Hs = {
  tagName: "plus-minus",
  computed: {
    effectiveKeySplines() {
      return "0.19 1 0.2 1";
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  updated() {
    this.animate(this.closed);
  },
  mounted() {
    this.animate(this.closed, !0);
  },
  methods: {
    animate(t, e) {
      const s = [];
      this.$refs.svg.querySelectorAll("animate, animateTransform").forEach((r) => {
        (!t && !r.classList.contains("closed") || t && r.classList.contains("closed")) && s.push(r);
      });
      const i = e ? "beginElementAt" : "beginElement";
      s.forEach((r) => {
        r[i](1e3);
      });
    }
  },
  props: {
    settings: Object,
    color: String,
    closed: Boolean
  },
  data() {
    return {
      duration: "0.35s",
      begin: "indefinite",
      keyTimes: "0;1"
    };
  },
  template: `
    <svg v-bind="settings" :style="style" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svg" >
      <g id="plus-minus__group" style="transform-origin: 12px 12px">
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="0" to="90" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="90" to="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" class="closed" />
        <path d="M12 1V23" stroke-linecap="round" />
        <path d="M23 12H1" stroke-linecap="round" style="transition-duration: 0s">
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" from="1" to="0" fill="freeze" />
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" to="1" from="0" fill="freeze" class="closed" />
        </path>
      </g>
    </svg>
  `
}, Ws = {
  tagName: "post-teaser",
  data() {
    return {
      translationData: null,
      spacing: 2
    };
  },
  computed: {
    formattedDate() {
      var e;
      const t = (e = this.postData) == null ? void 0 : e.date;
      if (t)
        return t.split("-").reverse().join(".");
    },
    classList() {
      return [
        "post-teaser",
        this.classes !== "" ? this.classes : "",
        "vue-component"
      ];
    },
    title() {
      var t, e, s, i;
      return ((t = this.postData) == null ? void 0 : t.lang) !== this.lang && this.postData.lang !== "" && ((e = this.translationData) != null && e.onlyLanguage) ? `${this.postData.title} (${(s = this.translationData) == null ? void 0 : s.onlyLanguage})` : (i = this.postData) == null ? void 0 : i.title;
    },
    excerpt() {
      var e;
      return n.decodeHTML(
        n.truncateWords((e = this.postData) == null ? void 0 : e.excerpt, 30)
      );
    },
    imgUrl() {
      var t;
      return `/blog/heads/${(t = this.postData) == null ? void 0 : t.blogtitlepic}.jpg`;
    },
    postData() {
      return n.getJSON(this.post);
    },
    listClasses() {
      return `list-inline-item mx-sm-n${this.spacing}`;
    },
    href() {
      var t;
      return (t = this.postData) == null ? void 0 : t.url;
    }
  },
  beforeMount() {
    var e;
    const t = (e = window.i18n) == null ? void 0 : e.loader;
    t && t.then(() => {
      var s;
      this.translationData = (s = window.i18n) == null ? void 0 : s.getTranslationData([
        "onlyLanguage"
      ]);
    });
  },
  props: {
    classes: String,
    post: Object,
    tag: String,
    site: Object,
    lang: String
  },
  template: `
    <div class="post-teaser mb-8 row vue-component" :data-tags="tag">
      <div class="post-teaser__img-container col-sm-4 mb-4 mb-sm-0">
        <a :href="href" class="post-teaser__link is-foreground">
          <v-img :img="imgUrl" :alt="title" class="img-responsive shadow" :cloudinary="true" preset="postTeaser" img-src-sets="postTeaser" />
        </a>
      </div>
      <div class="col-sm-8">
        <div class="post-teaser__date mb-2">
          {{ formattedDate }}
        </div>
        <h3 class="post-teaser__title mb-3">
          <a :href="href" class="post-teaser__link" v-html="title"></a>
        </h3>
        <p class="post-teaser__abstract mb-5" v-html="excerpt"></p>
        <ul class="list-inline">
          <li :class="listClasses">
            <tag v-for="tag in postData?.tags" :key="tag" :tag="tag" :spacing="spacing" ></tag>
          </li>
        </ul>
      </div>
    </div>
  `
}, Gs = {
  tagName: "pricing-product",
  migrate: !0,
  template: `
                      pricing-product
                  `
}, Js = {
  tagName: "product-blocks",
  migrate: !0,
  template: `
                      product-blocks
                  `
}, Zs = {
  tagName: "product-stage",
  migrate: !0,
  template: `
                      product-stage
                  `
}, Ks = {
  tagName: "quotes",
  migrate: !0,
  template: `
                      quotes
                  `
}, Xs = {
  tagName: "rocket",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 210.22 222.22">
      <defs>
        <clipPath id="icon--rocket-clip-path">
          <rect class="icon--rocket-cls-1" x="-603.94" y="-277.25" width="1440" height="1430" />
        </clipPath>
        <clipPath id="icon--rocket-clip-path-2">
          <path class="icon--rocket-cls-2" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        </clipPath>
      </defs>
      <g class="icon--rocket-cls-3">
        <line class="icon--rocket-cls-4" x1="27.7" y1="17.97" x2="32" y2="34.02" />
        <line class="icon--rocket-cls-4" x1="37.87" y1="23.85" x2="21.83" y2="28.15" />
        <line class="icon--rocket-cls-5" x1="35.3" y1="110.51" x2="39.6" y2="126.55" />
        <line class="icon--rocket-cls-5" x1="45.47" y1="116.38" x2="29.43" y2="120.68" />
        <line class="icon--rocket-cls-6" x1="192" y1="85.71" x2="196.3" y2="101.76" />
        <line class="icon--rocket-cls-6" x1="202.18" y1="91.59" x2="186.13" y2="95.88" />
        <line class="icon--rocket-cls-4" x1="158.92" y1="154.76" x2="163.22" y2="170.8" />
        <line class="icon--rocket-cls-4" x1="169.09" y1="160.63" x2="153.05" y2="164.93" />
        <path class="icon--rocket-cls-4" d="M11.7,54.5A2.08,2.08,0,0,1,14.24,56" />
        <path class="icon--rocket-cls-4" d="M10.23,57.05A2.08,2.08,0,0,1,11.7,54.5" />
        <path class="icon--rocket-cls-4" d="M12.77,58.51a2.07,2.07,0,0,1-2.54-1.46" />
        <path class="icon--rocket-cls-4" d="M14.24,56a2.07,2.07,0,0,1-1.47,2.54" />
        <path class="icon--rocket-cls-6" d="M168.4,29.71a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-6" d="M166.93,32.25a2.08,2.08,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-6" d="M169.48,33.72a2.08,2.08,0,0,1-2.55-1.47" />
        <path class="icon--rocket-cls-6" d="M170.94,31.18a2.08,2.08,0,0,1-1.46,2.54" />
        <path class="icon--rocket-cls-4" d="M114,147.46a2.07,2.07,0,0,1,2.54,1.47" />
        <path class="icon--rocket-cls-4" d="M112.51,150a2.07,2.07,0,0,1,1.47-2.54" />
        <path class="icon--rocket-cls-4" d="M115.05,151.47a2.07,2.07,0,0,1-2.54-1.47" />
        <path class="icon--rocket-cls-4" d="M116.52,148.93a2.07,2.07,0,0,1-1.47,2.54" />
        <line class="icon--rocket-cls-4" x1="37.03" y1="213.21" x2="67.69" y2="160.1" />
      </g>
      <g class="icon--rocket-cls-7">
        <g class="icon--rocket-cls-3">
          <rect class="icon--rocket-cls-8" x="51.62" y="72.01" width="77.81" height="97.08"
            transform="translate(-28.12 27.54) rotate(-15)" />
        </g>
      </g>
      <g class="icon--rocket-cls-3">
        <path class="icon--rocket-cls-4" d="M79,157.06a8.3,8.3,0,0,1-14.38-8.3L102,84a8.31,8.31,0,0,1,14.38,8.31Z" />
        <path class="icon--rocket-cls-5" d="M37.37,54.07A53.64,53.64,0,0,1,83.93,67.39" />
        <path class="icon--rocket-cls-9" d="M93.23,21.91A70.24,70.24,0,0,1,101.83,54" />
        <path class="icon--rocket-cls-9" d="M124,56.64A87.79,87.79,0,0,1,158.48,8.72" />
        <path class="icon--rocket-cls-5" d="M133.42,75.62s19-9.38,34.23-.58" />
        <path class="icon--rocket-cls-10" d="M134.78,96.75a55.74,55.74,0,0,1,36.67,24.56" />
        <line class="icon--rocket-cls-4" x1="131.06" y1="114.94" x2="136.43" y2="134.99" />
        <path class="icon--rocket-cls-10" d="M62.3,99a50.37,50.37,0,0,1,19-9.39" />
      </g>
    </svg>
  `
}, ft = "s-block", Ys = {
  tagName: ft,
  computed: {
    name() {
      return ft;
    },
    secondShapeBackgroundColor() {
      return this.secondShape.backgroundColor ? this.secondShape.backgroundColor : "var(--color-primary-accent-light)";
    },
    fourthShapeBackgroundColor() {
      return this.fourthShape.backgroundColor ? this.fourthShape.backgroundColor : "var(--color-primary-accent-light)";
    },
    fourthShapeFirstColor() {
      return this.fourthShape.firstColor ? this.fourthShape.firstColor : "var(--color-primary-accent)";
    },
    fourthShapeSecondColor() {
      return this.fourthShape.secondColor ? this.fourthShape.secondColor : "var(--color-secondary)";
    },
    firstShape() {
      return this.getShapeData(0);
    },
    secondShape() {
      return this.getShapeData(1);
    },
    thirdShape() {
      return this.getShapeData(2);
    },
    fourthShape() {
      return this.getShapeData(3);
    },
    classList() {
      return ["s-block", "vue-component"];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    }
  },
  methods: {
    allProps(t) {
      const e = {};
      for (const s of Object.keys(t))
        e[s] = t[s];
      return e;
    },
    getShapeData(t) {
      const e = (this.shapes && this.shapes[t]) ?? {};
      return this.allProps(e);
    },
    defaultComponent(t) {
      switch (t) {
        default:
        case 0:
          return "square-square-circle";
        case 1:
          return "rect";
        case 2:
          return "shape-fast-forward";
        case 3:
          return "shape-pyramid";
      }
    }
  },
  props: {
    shapes: Array,
    backgroundColor: String,
    firstColor: String,
    secondColor: String
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">

      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>
      <rect v-else x="400" y="400" :width="shapeWidth" :height="shapeHeight" :fill="secondShapeBackgroundColor" />

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        v-if="fourthShape.name"
        transform="translate(0 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
      <g v-else >
        <path :fill="fourthShapeBackgroundColor" d="M.18 800h400v400H.18z"/>
        <path :fill="fourthShapeFirstColor" d="M400 1200H.18L200 1000l200 200z"/>
        <path :fill="fourthShapeSecondColor" d="m200 1000 200 200H200V1000z"/>
      </g>
    </svg>
  `
}, Qs = {
  tagName: "screenshot",
  computed: {
    style() {
      return {
        "background-color": this.bgColor
      };
    },
    leftValue() {
      return n.isTrue(this.left);
    }
  },
  props: {
    spacing: String,
    level: String,
    headline: String,
    copy: String,
    left: Boolean,
    bgColor: String,
    source: String,
    sourceCaption: String,
    image: Object,
    cloudinary: Boolean,
    alt: String,
    classes: String,
    list: Object
  },
  template: `
    <div class="screenshot full-width-container vue-component">
      <div :class="['screenshot__container container', spacing ? spacing : null]" >
        <div :class="['row d-flex align-items-center', leftValue ? 'flex-row-reverse' : null]">
          <div :class="['col-lg-4 my-4 my-lg-0 py-4', leftValue ? 'offset-lg-1' : null]">
            <headline
              :level=level
              :text=headline
            />
            <div class="screenshot__copy" v-html="copy"></div>
            <div class="screenshot__list pt-4" v-if="list">
              <cta
                :text=list.ctaText
                :href=list.ctaHref
                :skin=list.skin
                :type=list.ctaType
                :target=list.target
                :external=list.external
              />
            </div>
          </div>
          <div :class="['screenshot__img d-flex align-items-center col-lg-7', leftValue ? null : 'offset-lg-1']" :style="style">
            <a class="js-fancybox media-viewer" href="javascript:;"
              data-hs-fancybox-options='{"speed": 700}'
              :data-src="source"
              :data-caption="sourceCaption"
            >
              <v-img :img="image" :alt="alt" :cloudinary="cloudinary" class="py-4 position-relative z-index-2" />
              <span class="media-viewer-container">
                <span class="media-viewer-icon">
                  <i class="fas fa-plus"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}, ti = {
  tagName: "scroll-arrow",
  computed: {
    classList() {
      return ["scroll-arrow", "container", this.spacingValue, "vue-component"];
    },
    spacingValue() {
      return this.spacing ? `${this.spacing}` : "";
    }
  },
  methods: {
    handleClick() {
      const t = document.querySelector(this.target);
      t && n.scrollIntoView(t, !0);
    }
  },
  props: {
    target: String,
    spacing: {
      default: null
    }
  },
  template: `
    <div :class="classList">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <icon classes="scroll-arrow__button" size="xl" icon="arrow-narrow" :onclick="handleClick"  />
        </div>
      </div>
    </div>
  `
}, vt = {}, ei = {
  tagName: "search",
  computed: {
    classList() {
      return [
        "search",
        // `${this.expanded ? 'search--expanded' : ''}`,
        `${this.searchExpanded ? "search--expanded" : ""}`,
        "vue-component"
      ];
    },
    limitedResults() {
      var t;
      return (t = this.results) == null ? void 0 : t.slice(0, this.maxResults);
    }
  },
  data() {
    return {
      search: null,
      store: null,
      results: null,
      maxResults: 15,
      searchExpanded: !1
    };
  },
  methods: {
    handleEnter() {
      const t = `${this.endpoint}`;
      if (t)
        return this.store ? this.handleSearch() : fetch(t, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((e) => e.json()).then((e) => {
          this.store = e, this.handleSearch();
        }).catch((e) => {
          console.log("handleEnter ~ error", e);
        });
    },
    handleSearch() {
      this.searchEngine || this.initSearchEngine();
      const t = `${this.$refs.search.value}`;
      t && (this.results = this.searchEngine.search(t), console.log("handleSearch ~ this.results", this.results));
    },
    initSearchEngine() {
      const t = this.store, { results: e, weights: s } = t;
      if (!vt) return;
      const i = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: s
      };
      this.searchEngine = new vt(e, i);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(t) {
      this.searchExpanded = n.isOutsideOf("search", t) ? !1 : this.searchExpanded;
    }
  },
  props: {
    placeholder: String,
    endpoint: String,
    language: String
  },
  template: `
    <div :class="classList">
      <icon
        v-on:click="handleSearchBar"
        class="search__icon"
        icon="magnifier"
        size="medium"
      />
      <input class="search__bar" ref="search" type="search" @keypress.enter="handleEnter" />
      <div v-for="result in limitedResults">
        <div class="">
          <div>title: {{ result.item.title }}</div>
          <div>excerpt: {{ result.item.excerpt }}</div>
          <div>score: {{ result.score }}</div>
        </div>
        <br/><br/>
      </div>
    </div>
  `
}, si = {
  tagName: "services",
  computed: {
    classValue() {
      return [
        "services",
        this.author ? `services--author ${this.authorHasSocials ? "" : "services--no-socials"}` : "",
        "vue-component"
      ];
    },
    authorHasSocials() {
      var t;
      return ((t = this.author) == null ? void 0 : t.socials) !== void 0;
    },
    itemsList() {
      return this.authorHasSocials ? this.author.socials : this.items;
    }
  },
  methods: {},
  props: {
    items: {
      default: null
    },
    title: {
      default: null
    },
    label: {
      default: null
    },
    value: {
      default: null
    },
    author: {
      default: null
    },
    shareUrl: {
      default: null
    }
  },
  template: `
  <div :class="classValue">
    <template v-if="itemsList">
      <div class="services__title font-size-xs bold">
        {{ title }}
      </div>
      <div class="services__items font-size-1" >
        <template v-for="item in itemsList">
          <div class="services__item">
            <cta v-bind="item" link="true" :external="authorHasSocials"/>
          </div>
        </template>
      </div>
    </template>
    <div class="services__footer">
      <template v-if="author">
        <socials :author="author" :message="followMessage" expand="true" :share-url="shareUrl"/>
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ label }}</div>
        <div class="services__value">{{ value }}</div>
      </template>
    </div>
  </div>
`
}, ii = {
  tagName: "shape",
  computed: {
    classList() {
      return ["shape", "vue-component"];
    },
    shapeName() {
      return this.name ? this.name : "s-block";
    }
  },
  methods: {},
  props: {
    name: String,
    shapes: Array
  },
  template: `
    <div :class="classList">
      <div class="shape__container">
        <component :is="shapeName" :shapes="shapes" ></component>
      </div>
    </div>`
}, ai = {
  tagName: "shape-animation",
  computed: {
    tag() {
      return this.isAnimate ? "animate" : this.isMotion ? "animateMotion" : "animateTransform";
    },
    isAnimate() {
      let t = !1;
      switch (this.attributeName) {
        case "opacity":
          t = !0;
          break;
      }
      return t;
    },
    defaultCalcMode() {
      return this.isAnimate ? null : "spline";
    },
    defaultKeyTimes() {
      return this.isAnimate ? null : "0;1";
    },
    effectiveKeySplines() {
      return this.isAnimate ? null : this.keySplines;
    }
  },
  props: {
    id: String,
    href: String,
    begin: String,
    attributeName: String,
    by: String,
    from: String,
    to: String,
    dur: String,
    fill: String,
    calcMode: String,
    keyTimes: String,
    keySplines: String,
    keyPoints: String,
    type: String,
    additive: Boolean,
    isMotion: Boolean,
    isAnimate: Boolean,
    path: String,
    values: String
  },
  template: `
    <component :is="tag"
      :id="id"
      :href="href"
      :begin="begin"
      :attributeName="attributeName ? attributeName : 'transform'"
      :by="by"
      :from="from"
      :to="to"
      :dur="dur"
      :fill="fill ? fill : 'freeze'"
      :calcMode="calcMode ? calcMode : defaultCalcMode"
      :keyTimes="keyTimes ? keyTimes : defaultKeyTimes"
      :keySplines="effectiveKeySplines"
      :keyPoints="keyPoints"
      :path="path"
      :values="values"
      :type="type"
      :additive="additive ? 'sum': null"
    />
  `
};
class M {
  constructor({ tagName: e, elements: s, begin: i }) {
    this.tagName = e, this.elements = s, this.begin = i, this.tagNameId = this.createTagNameId();
  }
  createStepNames(e) {
    return this.elements.forEach((s) => {
      const i = s.name;
      e[i] = s, Object.keys(s).forEach((a) => {
        if (a === "name") return;
        const o = s[a];
        o && (o.id = this.getStepId(`${i.toLowerCase()}-${a}`));
      });
    }), e;
  }
  getSequence() {
    const e = this.createStepNames({});
    return this.elements.forEach((s) => {
      const i = s.name;
      e[i] = s, Object.keys(s).forEach((a) => {
        if (a === "name") return;
        const o = s[a];
        o && (o.begin = this.getStepBegin(e, o), o.start && (o.begin = `${this.begin};${o.begin}`));
      }), s.id = this.getStepId(`${i.toLowerCase()}-id`), s.href = `#${s.id}`;
    }), e;
  }
  getStepBegin(e, s) {
    const a = `${("" + s.delay).indexOf("s") !== -1 ? s.delay : `${s.delay}s`}`;
    return s.waitFor ? `${this.getWaitForName(e, s.waitFor)}+${a}` : a;
  }
  getWaitForName(e, s) {
    const i = ".end", r = s.split("."), a = r[0], o = r[1];
    return `${e[a] && e[a][o] ? e[a][o].id : ""}${i}`;
  }
  getStepId(e) {
    return `${this.tagNameId}__${e}`;
  }
  createTagNameId() {
    return `${n.uuid()}-${this.tagName}`;
  }
}
const ri = "0.1s", rt = "7s", P = "0.05s", yt = "shape-circle-within-square", oi = {
  tagName: yt,
  computed: {
    begin() {
      return this.start ? this.start : ri;
    },
    firstSquareStaticColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    firstCircleColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    secondCircleColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-gigas)";
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-gigas)";
    },
    thirdCircleColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    firstCircle() {
      return this.sequence.firstCircle;
    },
    secondSquare() {
      return this.sequence.secondSquare;
    },
    secondCircle() {
      return this.sequence.secondCircle;
    },
    thirdSquare() {
      return this.sequence.thirdSquare;
    },
    thirdCircle() {
      return this.sequence.thirdCircle;
    },
    fourthSquare() {
      return this.sequence.fourthSquare;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "1.8s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: yt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "transform2",
              from: "400 0",
              to: "0 0",
              dur: "0.3s",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "transform",
              dur: "",
              from: "0 0",
              to: "1 1",
              type: "scale"
            }
          ]
        }
      ],
      elements: [
        {
          name: "firstCircle",
          transform: {
            delay: P,
            values: "0 0;1 1;1 -1",
            keyTimes: "0;0.5;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1",
            start: !0,
            waitFor: "fourthSquare.transform2"
          },
          reset: {
            waitFor: "secondSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        },
        {
          name: "secondSquare",
          transform2: {
            delay: rt,
            waitFor: "firstCircle.transform"
          },
          reset: {
            waitFor: "thirdSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        },
        {
          name: "secondCircle",
          transform: {
            delay: P,
            values: "0 0;1 1;1 -1",
            keyTimes: "0;0.5;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1",
            waitFor: "secondSquare.transform2"
          },
          reset: {
            waitFor: "thirdSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        },
        {
          name: "thirdSquare",
          transform2: {
            delay: rt,
            waitFor: "secondCircle.transform"
          },
          reset: {
            waitFor: "fourthSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        },
        {
          name: "thirdCircle",
          transform: {
            delay: P,
            values: "0 0;1 1;1 -1",
            keyTimes: "0;0.5;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1",
            waitFor: "thirdSquare.transform2"
          },
          reset: {
            waitFor: "fourthSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        },
        {
          name: "fourthSquare",
          transform2: {
            delay: rt,
            waitFor: "thirdCircle.transform"
          },
          reset: {
            waitFor: "fourthSquare.transform2",
            delay: P,
            dur: "0.01s"
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('firstCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('fourthSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstCircle?.reset?.id"
            :href="firstCircle?.href"
            :begin="firstCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="firstCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondCircle?.reset?.id"
            :href="secondCircle?.href"
            :begin="secondCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="secondCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="thirdSquare?.reset?.id"
            :href="thirdSquare?.href"
            :begin="thirdSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="thirdSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="thirdCircle?.reset?.id"
            :href="thirdCircle?.href"
            :begin="thirdCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="thirdCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g>
          <g dstyle="display:none">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="firstCircle?.id" transform="scale(0, 0)" :fill="firstCircleColor"
              r="150" />
          </g>
         <g transform="translate(400, 0)" :id="secondSquare?.id">
            <rect :fill="secondSquareColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="secondCircle?.id" transform="scale(0, 0)" :fill="secondCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="thirdSquare?.id">
            <rect :fill="thirdSquareColor"
              width="400" height="400" />
          </g>
            <g transform="translate(200, 200) rotate(990) ">
            <circle :id="thirdCircle?.id" transform="scale(0, 0)" :fill="thirdCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="fourthSquare?.id">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
        </g>
      </g>`
}, ni = "1s", b = "7", C = "0.05", bt = "shape-fast-forward", li = {
  tagName: bt,
  computed: {
    classList() {
      return ["shape-square-forward", "vue-component"];
    },
    begin() {
      return this.start ? this.start : ni;
    },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : "var(--color-primary-accent)";
    },
    pathColor() {
      return this.firstColor ? this.firstColor : "var(--color-primary-accent-light)";
    },
    secondArrowColor() {
      return this.secondColor ? this.secondColor : "var(--color-secondary)";
    },
    firstArrow() {
      return this.sequence.firstArrow;
    },
    secondArrow() {
      return this.sequence.secondArrow;
    },
    thirdArrow() {
      return this.sequence.thirdArrow;
    },
    overall() {
      return {
        keySplines: "0.19 1 0.2 1",
        dur: "1.3s"
      };
    },
    internalWidth() {
      return this.width ? this.width : 400;
    },
    internalHeight() {
      return this.internalWidth;
    },
    halfWidth() {
      return this.internalWidth / 2;
    },
    halfHeight() {
      return this.internalHeight / 2;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: bt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    },
    points() {
      const t = this.internalWidth, e = this.halfWidth, s = this.internalHeight, i = this.halfHeight;
      return {
        firstArrow: `0,0 0,${s} ${i},${e}`,
        secondArrow: `${e},0, ${e},${s}, ${t},${i}`,
        thirdArrow: `${-e},0, ${-e},${s}, 0,${e}`
      };
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "moveTo1",
              from: "0",
              to: "-400",
              dur: "0.01s",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "show",
              from: "0.1",
              to: "1",
              dur: "0.01s",
              attributeName: "opacity",
              animate: !0
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo2",
              to: "-200",
              from: "-400",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo3",
              by: "200",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "hide",
              from: "0.6",
              to: "0.1",
              dur: "0.01s",
              attributeName: "opacity",
              animate: !0
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo4",
              type: "translate"
            },
            {
              name: "shrink",
              type: "scale",
              additive: !0,
              from: "1 1",
              to: "0.1 0.1"
            }
          ]
        }
      ],
      elements: [
        {
          name: "firstArrow",
          moveTo3: {
            start: !0,
            waitFor: "firstArrow.reset",
            delay: b
          },
          shrink: {
            waitFor: "firstArrow.moveTo3",
            delay: b
          },
          moveTo4: {
            waitFor: "firstArrow.moveTo3",
            from: "200",
            to: "400",
            delay: b
          },
          hide: {
            waitFor: "firstArrow.moveTo4",
            delay: C
          },
          moveTo1: {
            waitFor: "firstArrow.hide",
            delay: C,
            from: "-400",
            to: "-200"
          },
          show: {
            waitFor: "firstArrow.moveTo1",
            delay: C
          },
          reset: {
            waitFor: "firstArrow.show",
            delay: b - C * 3.5
          }
        },
        {
          name: "secondArrow",
          moveTo4: {
            start: !0,
            waitFor: "secondArrow.reset",
            delay: b,
            from: "0",
            to: "200"
          },
          shrink: {
            start: !0,
            waitFor: "secondArrow.reset",
            delay: b
          },
          hide: {
            waitFor: "secondArrow.shrink",
            delay: C
          },
          moveTo1: {
            waitFor: "secondArrow.hide",
            delay: C,
            dur: "0.001s"
          },
          show: {
            waitFor: "secondArrow.moveTo1",
            delay: C
          },
          moveTo2: {
            waitFor: "secondArrow.show",
            delay: b - C * 3.5
          },
          reset: {
            waitFor: "secondArrow.moveTo2",
            delay: b
          }
        },
        {
          name: "thirdArrow",
          moveTo2: {
            start: !0,
            waitFor: "thirdArrow.show",
            delay: b - C * 3.5,
            from: "0",
            to: "200"
          },
          moveTo3: {
            waitFor: "thirdArrow.moveTo2",
            delay: b,
            from: "200",
            to: "400"
          },
          shrink: {
            waitFor: "thirdArrow.moveTo3",
            delay: b
          },
          moveTo4: {
            waitFor: "thirdArrow.moveTo3",
            from: "400",
            to: "600",
            delay: b
          },
          hide: {
            waitFor: "thirdArrow.moveTo4",
            delay: C
          },
          reset: {
            waitFor: "thirdArrow.hide",
            delay: C,
            dur: "0.01s"
          },
          show: {
            waitFor: "thirdArrow.reset",
            delay: C
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
    start: String,
    width: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.animate && (a.animate = o.animate), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="internalWidth" :height="internalHeight" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="internalWidth" :height="internalHeight" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id" style="transform-origin: 0px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('firstArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstArrow?.reset?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
        <polygon :fill="secondArrowColor" :points="points?.secondArrow" :id="secondArrow?.id" style="transform-origin: 200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('secondArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="secondArrow?.reset?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            aafrom="200"
            aato="400"
            aaby="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
        <polygon :fill="pathColor" :points="points?.thirdArrow" :id="thirdArrow?.id" style="transform-origin: -200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('thirdArrow', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :attributeName="stepData?.step?.attributeName"
                :isAnimate="stepData?.step?.animate"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="thirdArrow?.reset?.id"
            :href="thirdArrow?.href"
            :begin="thirdArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="thirdArrow?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
            type="translate"
          ></shape-animation>
        </polygon>
      </g>
    </g>`
}, ci = "0s", H = "6s", S = "0.3s", Ct = "shape-four-squares", di = {
  tagName: Ct,
  computed: {
    begin() {
      return this.start ? this.start : ci;
    },
    squareUpperLeftFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-blue-light)";
    },
    squareUpperRightFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    squareBottomLeftFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    squareBottomRightFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-blue-light)";
    },
    squareUpperLeftSecondColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-orange)";
    },
    squareUpperRightSecondColor() {
      return this.fourthColor ? this.fourthColor : "var(--color-gigas)";
    },
    squareBottomLeftSecondColor() {
      return this.fourthColor ? this.fourthColor : "var(--color-gigas)";
    },
    squareBottomRightSecondColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-orange)";
    },
    squareUpperLeftFirst() {
      return this.sequence.squareUpperLeftFirst;
    },
    squareUpperRightFirst() {
      return this.sequence.squareUpperRightFirst;
    },
    squareBottomLeftFirst() {
      return this.sequence.squareBottomLeftFirst;
    },
    squareBottomRightFirst() {
      return this.sequence.squareBottomRightFirst;
    },
    squareUpperLeftSecond() {
      return this.sequence.squareUpperLeftSecond;
    },
    squareUpperRightSecond() {
      return this.sequence.squareUpperRightSecond;
    },
    squareBottomLeftSecond() {
      return this.sequence.squareBottomLeftSecond;
    },
    squareBottomRightSecond() {
      return this.sequence.squareBottomRightSecond;
    },
    squareUpperLeftReset() {
      return this.sequence.squareUpperLeftReset;
    },
    squareUpperRightReset() {
      return this.sequence.squareUpperRightReset;
    },
    squareBottomLeftReset() {
      return this.sequence.squareBottomLeftReset;
    },
    squareBottomRightReset() {
      return this.sequence.squareBottomRightReset;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "0.8s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: Ct,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "moveTo1",
              from: "0 -200",
              to: "0 0",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo2",
              from: "400 0",
              to: "200 0",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo3",
              from: "-200 200",
              to: "0 200",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo4",
              from: "200 400",
              to: "200 200",
              dur: "",
              type: "translate"
            }
          ]
        }
      ],
      elements: [
        {
          name: "squareUpperLeftFirst",
          moveTo1: {
            start: !0,
            delay: S,
            waitFor: "squareUpperLeftSecond.reset"
          },
          reset: {
            waitFor: "squareUpperLeftSecond.moveTo1",
            delay: S,
            dur: "0.01s"
          }
        },
        {
          name: "squareUpperRightFirst",
          moveTo2: {
            start: !0,
            delay: S,
            waitFor: "squareUpperLeftSecond.reset"
          },
          reset: {
            waitFor: "squareUpperRightSecond.moveTo2",
            delay: S,
            dur: "0.01s"
          }
        },
        {
          name: "squareBottomLeftFirst",
          moveTo3: {
            start: !0,
            delay: S,
            waitFor: "squareUpperLeftSecond.reset"
          },
          reset: {
            waitFor: "squareBottomLeftSecond.moveTo3",
            delay: S,
            dur: "0.01s"
          }
        },
        {
          name: "squareBottomRightFirst",
          moveTo4: {
            start: !0,
            delay: S,
            waitFor: "squareUpperLeftSecond.reset"
          },
          reset: {
            waitFor: "squareBottomRightSecond.moveTo4",
            delay: S,
            dur: "0.01s"
          }
        },
        {
          name: "squareUpperLeftSecond",
          moveTo1: {
            delay: S,
            waitFor: "squareUpperLeftFirst.moveTo1"
          },
          reset: {
            waitFor: "squareUpperLeftSecond.moveTo1",
            delay: H,
            dur: "1s"
          }
        },
        {
          name: "squareUpperRightSecond",
          moveTo2: {
            delay: S,
            waitFor: "squareUpperRightFirst.moveTo2"
          },
          reset: {
            waitFor: "squareUpperRightSecond.moveTo2",
            delay: H,
            dur: "1s"
          }
        },
        {
          name: "squareBottomLeftSecond",
          moveTo3: {
            delay: S,
            waitFor: "squareBottomLeftFirst.moveTo3"
          },
          reset: {
            waitFor: "squareBottomLeftSecond.moveTo3",
            delay: H,
            dur: "1s"
          }
        },
        {
          name: "squareBottomRightSecond",
          moveTo4: {
            delay: S,
            waitFor: "squareBottomRightFirst.moveTo4"
          },
          reset: {
            waitFor: "squareBottomRightSecond.moveTo4",
            delay: H,
            dur: "1s"
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    fourthColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('squareUpperLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperLeftSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightSecond', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperLeftReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareUpperRightReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomLeftReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('squareBottomRightReset', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="squareUpperLeftFirst?.reset?.id"
            :href="squareUpperLeftFirst?.href"
            :begin="squareUpperLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightFirst?.reset?.id"
            :href="squareUpperRightFirst?.href"
            :begin="squareUpperRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftFirst?.reset?.id"
            :href="squareBottomLeftFirst?.href"
            :begin="squareBottomLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightFirst?.reset?.id"
            :href="squareBottomRightFirst?.href"
            :begin="squareBottomRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftSecond.reset?.id"
            :href="squareUpperLeftSecond?.href"
            :begin="squareUpperLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightSecond?.reset?.id"
            :href="squareUpperRightSecond?.href"
            :begin="squareUpperRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftSecond?.reset?.id"
            :href="squareBottomLeftSecond?.href"
            :begin="squareBottomLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightSecond?.reset?.id"
            :href="squareBottomRightSecond?.href"
            :begin="squareBottomRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftReset?.reset?.id"
            :href="squareUpperLeftReset?.href"
            :begin="squareUpperLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightReset?.reset?.id"
            :href="squareUpperRightReset?.href"
            :begin="squareUpperRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftReset?.reset?.id"
            :href="squareBottomLeftReset?.href"
            :begin="squareBottomLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightReset?.reset?.id"
            :href="squareBottomRightReset?.href"
            :begin="squareBottomRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="squareUpperLeftFirst?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightFirst?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftFirst?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightFirst?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightFirstColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftSecond?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightSecond?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftSecond?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightSecond?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightSecondColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftReset?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightReset?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftReset?.id" transform="translate(-200, 200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightReset?.id" transform="translate(200, 400)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>

      </g>
    </g>`
}, hi = "0s", T = "1s", W = "0.01s", G = "0.01s", St = "shape-four-triangles", pi = {
  tagName: St,
  computed: {
    begin() {
      return this.start ? this.start : hi;
    },
    triangleBottomLeftColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    triangleUpperLeftColor() {
      return this.secondColor ? this.secondColor : "var(--color-secondary)";
    },
    triangleUpperRightColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    triangleBottomRightColor() {
      return this.secondColor ? this.secondColor : "var(--color-secondary)";
    },
    squareColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-white)";
    },
    triangleBottomLeft() {
      return this.sequence.triangleBottomLeft;
    },
    triangleUpperLeft() {
      return this.sequence.triangleUpperLeft;
    },
    triangleUpperRight() {
      return this.sequence.triangleUpperRight;
    },
    triangleBottomRight() {
      return this.sequence.triangleBottomRight;
    },
    square() {
      return this.sequence.square;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "4s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: St,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "motion",
              attributeName: "motion",
              motion: !0,
              dur: ""
            }
          ]
        },
        {
          steps: [
            {
              name: "transformRotate",
              dur: "",
              type: "rotate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo1",
              dur: "",
              type: "translate",
              additive: !0
            }
          ]
        }
      ],
      elements: [
        {
          name: "triangleBottomLeft",
          moveTo1: {
            start: !0,
            delay: T,
            from: "-200 0",
            to: "-200 0",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-200 0;-200 0",
            waitFor: "triangleBottomLeft.reset"
          },
          motion: {
            start: !0,
            delay: T,
            path: "M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200",
            keyPoints: "0;1;1",
            keyTimes: "0;0.333333;1",
            keySplines: "0.333 0 0.667 1;0 0 0 0",
            waitFor: "triangleBottomLeft.reset"
          },
          transformRotate: {
            start: !0,
            delay: T,
            from: "90",
            to: "0",
            values: "90;90;0;0",
            keyTimes: "0;0.333333;0.666667;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",
            waitFor: "triangleBottomLeft.reset"
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: W,
            dur: G
          }
        },
        {
          name: "triangleUpperLeft",
          moveTo1: {
            start: !0,
            delay: T,
            from: "-200 0",
            to: "-200 0",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-200 0;-200 0",
            waitFor: "triangleUpperLeft.reset"
          },
          motion: {
            start: !0,
            delay: T,
            keyTimes: "0;0.666667;0.95;1",
            path: "M200 200 C200,200 200,200 200,200 C200,200 400,200 400,200 C400,200 400,200 400,200",
            keySplines: "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            keyPoints: "0;0;1;1",
            waitFor: "triangleUpperLeft.reset"
          },
          transformRotate: {
            start: !0,
            delay: T,
            from: "90",
            to: "0",
            values: "90;90;0;0",
            keyTimes: "0;0.333333;0.666667;1",
            keySplines: "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            waitFor: "triangleUpperLeft.reset"
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: W,
            dur: G
          }
        },
        {
          name: "triangleUpperRight",
          moveTo1: {
            start: !0,
            delay: T,
            from: "-100 -100",
            to: "-100 -100",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-100 -100;-100 -100",
            waitFor: "triangleUpperRight.reset"
          },
          motion: {
            start: !0,
            delay: T,
            keyTimes: "0;0.522222;0.855556;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",
            path: "M300 100 C300,100 300,100 300,100 C300,100 100,100 100,100 C100,100 100,100 100,100",
            keyPoints: "0;0;1;1",
            waitFor: "triangleUpperRight.reset"
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: W,
            dur: G
          }
        },
        {
          name: "triangleBottomRight",
          moveTo1: {
            start: !0,
            delay: T,
            from: "-100 -100",
            to: "-100 -100",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-100 -100;-100 -100",
            waitFor: "triangleBottomRight.reset"
          },
          motion: {
            start: !0,
            delay: T,
            keyTimes: "0;0.333333;1",
            keySplines: "0.167 0.167 0.833 0.833;0 0 0 0",
            path: "M300 300 C300,300 300,100 300,100 C300,100 300,100 300,100",
            keyPoints: "0;1;1",
            waitFor: "triangleBottomRight.reset"
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: W,
            dur: G
          }
        },
        {
          name: "square",
          moveTo1: {
            delay: "14s",
            dur: "0.5s",
            from: "0 0",
            to: "-400 0",
            waitFor: "triangleBottomRight.moveTo1"
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: "1s",
            dur: "0.5s"
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('triangleBottomLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleBottomRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            <template v-for="stepData in getStepData('square', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="triangleBottomLeft?.reset?.id"
            :begin="triangleBottomLeft?.reset?.begin"
            :dur="triangleBottomLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperLeft?.reset?.id"
            :begin="triangleUpperLeft?.reset?.begin"
            :dur="triangleUpperLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperRight?.reset?.id"
            :begin="triangleUpperRight?.reset?.begin"
            :dur="triangleUpperRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleBottomRight?.reset?.id"
            :begin="triangleBottomRight?.reset?.begin"
            :dur="triangleBottomRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="square?.reset?.id"
            :href="square?.href"
            :begin="square?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="square?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="triangleBottomLeft?.id">
          <path :fill="triangleBottomLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperLeft?.id">
          <path :fill="triangleUpperLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperRight?.id">
          <path :fill="triangleUpperRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="triangleBottomRight?.id">
          <path :fill="triangleBottomRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="square?.id" transform="translate(400, 0)">
          <rect :fill="squareColor"
            width="400" height="400" />
        </g>
      </g>
    </g>`
}, ui = "0.3s", mi = "7", O = "0.2", kt = "shape-half-square", gi = {
  tagName: kt,
  computed: {
    begin() {
      return this.start ? this.start : ui;
    },
    backgroundSquareColor() {
      return this.backgroundColor ? this.backgroundColor : "var(--color-blue-light)";
    },
    firstSquareColor() {
      return this.firstColor ? this.firstColor : "var(--color-page-detail-shape)";
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : "var(--color-background)";
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-primary-accent)";
    },
    squareGroup() {
      return this.sequence.squareGroup;
    },
    firstSquare() {
      return this.sequence.firstSquare;
    },
    secondSquare() {
      return this.sequence.secondSquare;
    },
    thirdSquare() {
      return this.sequence.thirdSquare;
    },
    fourthSquare() {
      return this.sequence.fourthSquare;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "0.8s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: kt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "transform1",
              from: "400",
              to: "200",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "transform2",
              from: "200",
              to: "-80",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "transform3",
              from: "-80",
              to: "-200",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "transform4",
              from: "0",
              to: "-400",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "animate",
              animate: !0,
              attributeName: "width",
              from: "300",
              to: "200",
              dur: "",
              type: "animate"
            }
          ]
        }
      ],
      elements: [
        {
          name: "squareGroup",
          transform1: {
            delay: O,
            start: !0,
            waitFor: "fourthSquare.reset",
            keySplines: "0.2, 0.8, 0.7, 1"
          },
          transform2: {
            delay: O,
            waitFor: "squareGroup.transform1",
            keySplines: "0.2, 0.7, 0.8, 1"
          },
          transform3: {
            delay: O,
            waitFor: "squareGroup.transform2",
            keySplines: "0.2, 0.7, 0.8, 1"
          },
          reset: {
            waitFor: "fourthSquare.transform4",
            delay: O,
            dur: "0.01s"
          }
        },
        {
          name: "secondSquare",
          animate: {
            delay: O,
            waitFor: "squareGroup.transform2",
            keySplines: "0.2, 0.8, 0.7, 1"
          },
          reset: {
            waitFor: "fourthSquare.transform4",
            delay: O,
            dur: "0.01s"
          }
        },
        {
          name: "fourthSquare",
          transform4: {
            delay: mi,
            waitFor: "squareGroup.transform3",
            keySplines: "0.2, 0.8, 0.7, 1"
          },
          reset: {
            waitFor: "fourthSquare.transform4",
            delay: O,
            dur: "0.1s"
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.animate && (a.animate = o.animate), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('squareGroup', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('firstSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('fourthSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="squareGroup?.reset?.id"
            :href="squareGroup?.href"
            :begin="squareGroup?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="400"
            :dur="squareGroup?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="width"
            type="animate"
            calcMode="paced"
            from="200"
            to="300"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            :isAnimate
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>


        <g :id="staticSquare">
          <rect :fill="backgroundSquareColor" width="400" height="400" />
        </g>

        <g transform="translate(400, 0)" :id="squareGroup?.id" >
          <g ><rect :id="firstSquare?.id" :fill="firstSquareColor" width="200" height="400"  /></g>
          <g transform="translate(400, 0)" ><rect :fill="thirdSquareColor" width="200" height="400" /></g>
          <g transform="translate(200, 0)" ><rect :id="secondSquare?.id" :fill="secondSquareColor" width="300" height="400"/></g>

        </g>
          <g transform="translate(400, 0)" ><rect :id="fourthSquare?.id" :fill="backgroundSquareColor" width="400" height="400"/></g>


      </g>
    </g>`
}, fi = "0s", ot = "0s", nt = "0.01s", wt = "shape-moving-eye", vi = {
  tagName: wt,
  computed: {
    begin() {
      return this.start ? this.start : fi;
    },
    squareColor() {
      return this.backgroundColor ? this.backgroundColor : "var(--color-green-blue)";
    },
    circleColor() {
      return this.firstColor ? this.firstColor : "var(--color-yellow)";
    },
    upperSquare() {
      return this.sequence.upperSquare;
    },
    bottomSquare() {
      return this.sequence.bottomSquare;
    },
    eyeCircle() {
      return this.sequence.eyeCircle;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "20s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: wt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "motion",
              attributeName: "motion",
              motion: !0
            }
          ]
        },
        {
          steps: [
            {
              name: "transform",
              from: "1.3 1.01",
              to: "1.3 1.01",
              dur: "",
              type: "scale"
            }
          ]
        }
      ],
      elements: [
        {
          name: "upperSquare",
          transform: {
            start: !0,
            delay: 0,
            values: "1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",
            keyTimes: "0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",
            keySplines: "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            additive: !0,
            waitFor: "eyeCircle.reset"
          },
          reset: {
            waitFor: "eyeCircle.motion",
            delay: ot,
            dur: nt
          }
        },
        {
          name: "bottomSquare",
          transform: {
            start: !0,
            delay: 0,
            values: "1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01",
            keyTimes: "0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",
            keySplines: "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            additive: !0,
            waitFor: "eyeCircle.reset"
          },
          reset: {
            waitFor: "eyeCircle.motion",
            delay: ot,
            dur: nt
          }
        },
        {
          name: "eyeCircle",
          motion: {
            start: !0,
            delay: 0,
            keyTimes: "0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1",
            keySplines: "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0",
            path: "M 263 168 C 263 168 263 168 263 168 C 237 167 109 167 109 167 C 109 167 212 167 263 168 C 283 168 239 168 263 168 C 296 167 397 168 412 168 C 436 168 287 168 263 168 C 238 168 263 168 263 168 C 263 168 263 168 263 168",
            keyPoints: "0;0;0.23;0.47;0.51;0.73;0.97;1;1",
            waitFor: "eyeCircle.reset"
          },
          reset: {
            waitFor: "eyeCircle.motion",
            delay: ot,
            dur: nt
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('upperSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('bottomSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('eyeCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>


          <shape-animation
            :id="upperSquare?.reset?.id"
            :href="upperSquare?.href"
            :begin="upperSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="upperSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="bottomSquare?.reset?.id"
            :href="bottomSquare?.href"
            :begin="bottomSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="bottomSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="eyeCircle?.reset?.id"
            :href="eyeCircle?.href"
            :begin="eyeCircle?.reset?.begin"
            attributeName="motion"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="eyeCircle?.reset?.dur"
            isMotion=true
            fill="freeze"
            calcMode="paced"
          ></shape-animation>
        </g>

        <g :id="eyeCircle?.id" transform="translate(-62, 32)">
          <circle :fill="circleColor" r="90" />
        </g>

        <g :id="upperSquare?.id" transform=" translate(200, 200)">
          <path :fill="squareColor"
            d=" M 150 -400 C 150 -400 -175 -400 -175 -400 C -175 -400 -200 0 -200 0 C -200 0 -175 -150 0 -150 C 175 -150 200 0 200 0 C 200 0 150 -400 150 -400 z " />
        </g>

        <g :id="bottomSquare?.id" transform=" translate(200, 200) rotate(180)">
          <path :fill="squareColor"
            d=" M 200 -200 C 200 -200 150 -450 150 -450 C 150 -450 -150 -450 -150 -450 C -150 -450 -200 -200 -200 -200 C -200 -200 -200 0 -200 0 C -200 0 -170 -150 0 -150 C 170 -150 200 0 200 0 C 200 0 200 -200 200 -200 z " />
        </g>
      </g>
    </g>`
}, yi = "1s", _t = "shape-security-eye", bi = {
  tagName: _t,
  computed: {
    classList() {
      return ["shape-square-forward", "vue-component"];
    },
    begin() {
      return this.start ? this.start : yi;
    },
    overall() {
      return {
        dur: "10s",
        sonarDelay: "9"
      };
    },
    internalWidth() {
      return this.width ? this.width : 400;
    },
    internalHeight() {
      return this.internalWidth;
    },
    halfWidth() {
      return this.internalWidth / 2;
    },
    halfHeight() {
      return this.internalHeight / 2;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: _t,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {};
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
    start: String,
    width: String
  },
  methods: {
    leftUpperSonarBegin(t) {
      let e = 8.44;
      return e = t ? e + t / 100 : e, `${e}s;leftUpperSonarStep1.end+${this.overall.sonarDelay}s`;
    },
    leftBottomSonarBegin(t) {
      let e = 5.5;
      return e = t ? e + t / 100 : e, `${e}s;leftBottomSonarStep1.end+${this.overall.sonarDelay}s`;
    },
    rightBottomSonarBegin(t) {
      let e = 2.5;
      return e = t ? e + t / 100 : e, `${e}s;rightBottomSonarStep1.end+${this.overall.sonarDelay}s`;
    },
    rightUpperSonarBegin(t) {
      let e = 0.2;
      return e = t ? e + t / 100 : e, `${e}s;rightUpperSonarStep1.end+${this.overall.sonarDelay}s`;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="internalWidth" :height="internalHeight" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="_R_G" style="transform:scale(0.46) translate(-106px, -90px)">
          <defs>
            <linearGradient id="sonar" >
              <stop offset="0" stop-color="#000"/>
              <stop offset="0" stop-color="#000"/>
              <stop offset="0.5" stop-color="#000"/>
              <stop offset="0.6" stop-color="#ddd"/>
              <stop offset="1" stop-color="#fff"/>
            </linearGradient>
            <mask id="sonarMask">
              <path d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="url(#sonar)"/>
            </mask>

          </defs>
          <g id="background">
            <rect fill="#543b9c" width="1080" height="1080" />
          </g>
          <g id="eyeForm">
            <path
              fill="#5cbbff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M530.2 321.91 C343.96,321.91 118.52,537.66 118.52,537.66 C118.52,537.66 961.48,537.66 961.48,537.66 C888.78,468.09 716.43,321.91 530.2,321.91z "
            />
            <path
              fill="#ffffff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M551.43 758.09 C705,758.09 961.48,537.66 961.48,537.66 C961.48,537.66 118.52,537.66 118.52,537.66 C205.92,621.29 397.87,758.09 551.43,758.09z "
            />
          </g>
          <g
            id="irisRing1"
            transform=" translate(540, 540.5) scale(0.47, 0.47) translate(0, 0)"
          >
            <path
              stroke="#543b9c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="332"
              stroke-opacity="1"
              d=" M0 -176.5 C97.41,-176.5 176.5,-97.41 176.5,0 C176.5,97.41 97.41,176.5 0,176.5 C-97.41,176.5 -176.5,97.41 -176.5,0 C-176.5,-97.41 -97.41,-176.5 0,-176.5z "
            />
          </g>
          <g
            id="irisLine4"
            transform=" translate(543, 540.5) scale(0.77, 0.77) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              fill="#ff0000"
              stroke-width="2"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine3"
            transform=" translate(543, 540.5) scale(1.55, 1.55) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine2"
            transform=" translate(543, 540.5) scale(2.2, 2.2) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine1"
            transform=" translate(543, 540.5) scale(2.72, 2.72) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="centerDot"
            transform=" translate(543, 540.5) scale(0.29, 0.29) translate(0, 0)"
          >
            <path
              fill="#f8842c"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>

          <g id="rightUpperSonar" opacity="0">
            <g transform="translate(570, 510)">
              <circle id="rightUpperSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="rightUpperSonarStep1"
              dur="1s"
              :begin="rightUpperSonarBegin()"
              href="#rightUpperSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="rightUpperSonarStep3"
              dur="1s"
              :begin="rightUpperSonarBegin(1)"
              href="#rightUpperSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="rightUpperSonarStep2"
              dur="1s"
              :begin="rightUpperSonarBegin(2)"
              href="#rightUpperSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
          <g id="leftUpperSonar" opacity="0">
            <g transform="translate(434, 562)">
              <circle id="leftUpperSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="leftUpperSonarStep1"
              dur="1s"
              :begin="leftUpperSonarBegin()"
              href="#leftUpperSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="leftUpperSonarStep3"
              dur="1s"
              :begin="leftUpperSonarBegin(1)"
              href="#leftUpperSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="leftUpperSonarStep2"
              dur="1s"
              :begin="leftUpperSonarBegin(2)"
              href="#leftUpperSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
          <g id="rightBottomSonar" opacity="0">
            <g transform="translate(590, 720)">
              <circle id="rightBottomSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="rightBottomSonarStep1"
              dur="1s"
              :begin="rightBottomSonarBegin()"
              href="#rightBottomSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="rightBottomSonarStep3"
              dur="1s"
              :begin="rightBottomSonarBegin(1)"
              href="#rightBottomSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="rightBottomSonarStep2"
              dur="1s"
              :begin="rightBottomSonarBegin(2)"
              href="#rightBottomSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>

          <g transform="translate(375, 375) scale(1.3, 1.3)">
            <path xmlns="http://www.w3.org/2000/svg" d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="#f8842c" mask="url(#sonarMask)" >
              <animateTransform attributeName="transform" type="rotate" dur="10.0" from="0,128,128" to="360,128,128" repeatCount="indefinite"/>
            </path>
          </g>

          <g id="yellowIris">
            <path
              fill="#fcd116"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M540 318.99 C418.03,318.99 319.17,417.95 319.17,540.02 C319.17,662.09 418.03,761.01 540,761.01 C661.97,761.01 760.83,662.05 760.83,539.98 C760.83,417.91 661.97,318.99 540,318.99z  M540.05 701.37 C447.56,701.45 373.17,623.67 378.9,529.91 C383.8,449.58 449.12,384.13 529.45,379.07 C623.2,373.15 701.13,447.4 701.21,539.9 C701.21,539.95 701.21,540 701.21,540.05 C701.23,629.08 629.08,701.27 540.05,701.32 C540.05,701.32 540.05,701.37 540.05,701.37z "
            />
          </g>

          <g id="leftBottomSonar" opacity="0">
            <g transform="translate(384, 708)">
              <circle id="leftBottomSonarCircle" cx="70" cy="-86" r="40" stroke="#ffffff" stroke-width="80" fill="none" style="transform-box:fill-box;transform-origin:center" />
            </g>
            <animate
              id="leftBottomSonarStep1"
              dur="1s"
              :begin="leftBottomSonarBegin()"
              href="#leftBottomSonar"
              attributeName="opacity"
              keyTimes="0;0.1;0.5;0.6;1"
              values="0;0.3;0.5;0.6;0"
              fill="freeze"
            />
            <animate
              id="leftBottomSonarStep3"
              dur="1s"
              :begin="leftBottomSonarBegin(1)"
              href="#leftBottomSonarCircle"
              attributeName="stroke-width"
              from="80"
              to="5"
              fill="freeze"
            />
            <animateTransform
              id="leftBottomSonarStep2"
              dur="1s"
              :begin="leftBottomSonarBegin(2)"
              href="#leftBottomSonarCircle"
              attributeName="transform"
              from="0.01"
              to="0.6"
              type="scale"
              fill="freeze"
              calcMode="paced"
            />
          </g>
        </g>
      </g>
    </g>`
}, Ci = "0s", Si = "6s", V = "0.05s", xt = "shape-semi-circle", ki = {
  tagName: xt,
  computed: {
    begin() {
      return this.start ? this.start : Ci;
    },
    squareColor() {
      return this.backgroundColor ? this.backgroundColor : "var(--color-green-blue)";
    },
    circleColor() {
      return this.firstColor ? this.firstColor : "var(--color-yellow)";
    },
    semiCircle() {
      return this.sequence.semiCircle;
    },
    resetSquare() {
      return this.sequence.resetSquare;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "1s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: xt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "moveTo1",
              from: "700 -300",
              to: "350 50",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo2",
              from: "350 50",
              to: "50 350",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo3",
              from: "50 350",
              to: "-300 700",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo4",
              from: "400 0",
              to: "0 0",
              dur: "",
              type: "translate"
            }
          ]
        }
      ],
      elements: [
        {
          name: "semiCircle",
          moveTo1: {
            start: !0,
            delay: Si,
            keySplines: "0.5, 0.6, 0.8, 1",
            waitFor: "resetSquare.reset"
          },
          moveTo2: {
            delay: V,
            keySplines: "0.5, 0.7, 0.8, 1",
            waitFor: "semiCircle.moveTo1"
          },
          moveTo3: {
            delay: V,
            waitFor: "semiCircle.moveTo2"
          },
          reset: {
            waitFor: "resetSquare.moveTo4",
            delay: V,
            dur: V
          }
        },
        {
          name: "resetSquare",
          moveTo4: {
            delay: V,
            waitFor: "semiCircle.moveTo3"
          },
          reset: {
            waitFor: "resetSquare.moveTo4",
            delay: "1s",
            dur: V
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('semiCircle', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('resetSquare', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="semiCircle?.reset?.id"
            :href="semiCircle?.href"
            :begin="semiCircle?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-300 700"
            to="700 -300"
            :dur="semiCircle?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="resetSquare?.reset?.id"
            :href="resetSquare?.href"
            :begin="resetSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="resetSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>


      <g>
        <g id="staticSquare">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
        <g :id="semiCircle?.id" transform="translate(700, -300)">
          <circle :fill="circleColor" r="380" />
        </g>
        <g :id="resetSquare?.id" transform="translate(400, 0)">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
      </g>
    </g>`
}, wi = "1s", B = 70, _i = "0.8s", F = 155, Lt = "shape-square-circle", xi = {
  tagName: Lt,
  computed: {
    classList() {
      return ["shape-square-circle", "vue-component"];
    },
    begin() {
      return this.start ? this.start : wi;
    },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : "var(--color-primary-accent)";
    },
    circleColor() {
      return this.firstColor ? this.firstColor : "var(--color-secondary)";
    },
    bigCircle() {
      return this.sequence.bigCircle;
    },
    smallCircle() {
      return this.sequence.smallCircle;
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId})`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: Lt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      elements: [
        {
          name: "smallCircle",
          grow: {
            start: !0,
            waitFor: "bigCircle.reset",
            delay: "20s"
          },
          shrink: {
            waitFor: "bigCircle.shrink",
            delay: "0.1s"
          },
          reset: {
            waitFor: "bigCircle.shrink",
            delay: "0.8s"
          }
        },
        {
          name: "bigCircle",
          shrink: {
            waitFor: "smallCircle.grow",
            delay: "0.01s"
          },
          reset: {
            waitFor: "smallCircle.shrink",
            delay: "0.01s"
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    start: String
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <circle :fill="circleColor" :id="bigCircle?.id" cx="200" cy="200" r="${F}">
          <animate
            :id="bigCircle?.shrink?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.shrink?.begin"
            attributeName="r"
            from="${F}"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="bigCircle?.reset?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${F}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${F / 1.1};${F / 1.15};${F / 1.1};${F}"
          />
        </circle>
        <circle :fill="rectColor" :id="smallCircle?.id" cx="200" cy="200" r="${B}">
          <animate
            :id="smallCircle?.grow?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.grow?.begin"
            attributeName="r"
            from="${B}"
            :to="width"
            dur="${_i}"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.shrink?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.shrink?.begin"
            attributeName="r"
            :from="width"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.reset?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${B}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${B / 1.1};${B / 1.15};${B / 1.1};${B}"
          />
        </circle>
      </g>
    </g>`
}, Li = "0s", J = "6s", A = "1s", Dt = "shape-triangles-to-center", Di = {
  tagName: Dt,
  computed: {
    begin() {
      return this.start ? this.start : Li;
    },
    triangleUpperStaticColor() {
      return this.firstColor ? this.firstColor : "var(--color-green-blue)";
    },
    triangleBottomStaticColor() {
      return this.firstColor ? this.firstColor : "var(--color-green-blue)";
    },
    triangleLeftStaticColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-yellow)";
    },
    triangleRightStaticColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-yellow)";
    },
    triangleUpperFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    triangleBottomFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    triangleLeftFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-green-blue)";
    },
    triangleRightFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-green-blue)";
    },
    triangleUpperFirst() {
      return this.sequence.triangleUpperFirst;
    },
    triangleBottomFirst() {
      return this.sequence.triangleBottomFirst;
    },
    triangleLeftFirst() {
      return this.sequence.triangleLeftFirst;
    },
    triangleRightFirst() {
      return this.sequence.triangleRightFirst;
    },
    overall() {
      return {
        keySplines: "0 0 1 1",
        dur: "1s"
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      var t;
      return `${(t = this.shapeElements) == null ? void 0 : t.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      var t;
      return (t = this.shapeElements) == null ? void 0 : t.getSequence();
    },
    shapeElements() {
      return this.shapeElementsInstance || (this.shapeElementsInstance = new M({
        tagName: Dt,
        elements: this.elements,
        begin: this.begin
      })), this.shapeElementsInstance;
    }
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "moveTo1",
              from: "0 -200",
              to: "0 0",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo2",
              from: "0 400",
              to: "0 200",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo3",
              from: "-200 0",
              to: "0 0",
              dur: "",
              type: "translate"
            }
          ]
        },
        {
          steps: [
            {
              name: "moveTo4",
              from: "400 0",
              to: "200 0",
              dur: "",
              type: "translate"
            }
          ]
        }
      ],
      elements: [
        {
          name: "triangleUpperFirst",
          moveTo1: {
            delay: A,
            start: !0,
            waitFor: "triangleUpperFirst.reset"
          },
          reset: {
            waitFor: "triangleUpperFirst.moveTo1",
            delay: J,
            dur: A
          }
        },
        {
          name: "triangleBottomFirst",
          moveTo2: {
            delay: A,
            start: !0,
            waitFor: "triangleBottomFirst.reset"
          },
          reset: {
            waitFor: "triangleBottomFirst.moveTo2",
            delay: J,
            dur: A
          }
        },
        {
          name: "triangleLeftFirst",
          moveTo3: {
            delay: A,
            start: !0,
            waitFor: "triangleLeftFirst.reset"
          },
          reset: {
            waitFor: "triangleLeftFirst.moveTo3",
            delay: J,
            dur: A
          }
        },
        {
          name: "triangleRightFirst",
          moveTo4: {
            delay: A,
            start: !0,
            waitFor: "triangleRightFirst.reset"
          },
          reset: {
            waitFor: "triangleRightFirst.moveTo4",
            delay: J,
            dur: A
          }
        }
      ],
      shapeElementsInstance: null
    };
  },
  props: {
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    start: String
  },
  methods: {
    getStepData(t, e) {
      const s = this.sequence[t];
      if (!s) return;
      const i = [];
      return e.forEach((r) => {
        const a = { ...r }, o = s[a == null ? void 0 : a.name];
        if (!o) return;
        o.href = s.href, o.by && (a.by = o.by), o.from && (a.from = o.from), o.to && (a.to = o.to), o.additive && (a.additive = o.additive), o.dur && (a.dur = o.dur), o.motion && (a.motion = o.motion), o.keyTimes && (a.keyTimes = o.keyTimes), a.dur || (a.dur = this.overall.dur), a.keySplines || (a.keySplines = o.keySplines ? o.keySplines : this.overall.keySplines);
        const c = { step: a, data: o };
        i.push(c);
      }), i;
    }
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('triangleUpperFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleBottomFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleLeftFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleRightFirst', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="triangleUpperFirst?.reset?.id"
            :href="triangleUpperFirst?.href"
            :begin="triangleUpperFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="triangleUpperFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleBottomFirst?.reset?.id"
            :href="triangleBottomFirst?.href"
            :begin="triangleBottomFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="0 400"
            :dur="triangleBottomFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleLeftFirst?.reset?.id"
            :href="triangleLeftFirst?.href"
            :begin="triangleLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="-200 0"
            :dur="triangleLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleRightFirst?.reset?.id"
            :href="triangleRightFirst?.href"
            :begin="triangleRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="triangleRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>
        </g>


        <g :id="triangleUpperFirstStatic" transform=" translate(0, 0)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperStaticColor" />
        </g>
        <g :id="triangleBottomStatic" transform=" translate(0, 200)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomStaticColor" />
        </g>
        <g :id="triangleLeftStatic" transform=" translate(0, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftStaticColor" />
        </g>
        <g :id="triangleRightStatic" transform=" translate(200, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightStaticColor" />
        </g>

        <g :id="triangleUpperFirst?.id" transform=" translate(0, -200)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperFirstColor" />
        </g>
        <g :id="triangleBottomFirst?.id" transform=" translate(0, 400)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomFirstColor" />
        </g>
        <g :id="triangleLeftFirst?.id" transform=" translate(-200, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftFirstColor" />
        </g>
        <g :id="triangleRightFirst?.id" transform=" translate(400, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightFirstColor" />
        </g>

      </g>
    </g>`
}, Ti = {
  tagName: "site-icons",
  computed: {
    svgTemplate() {
      return templates[this.icon] || "";
    },
    classList() {
      return "streamline-sm mr-4";
    }
  },
  props: {
    icon: String,
    noSpan: Boolean
  },
  template: `
    <template v-if="icon === 'site/mail' && noSpan === true" :class="classList">
      <svg class="streamline-icon" viewBox="0 0 42 28" xmlns="http://www.w3.org/2000/svg">
        <title>{{ icon }}</title>
        <g id="envelope">
          <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path>
          <path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path>
          <path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path>
          <path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path>
        </g>
      </svg>
    </template>
    <span v-else-if="icon == 'site/mail'" :class="classList">
      <svg class="streamline-icon" viewBox="0 0 42 28" xmlns="http://www.w3.org/2000/svg">
        <title>{{ icon }}</title>
        <g id="envelope">
          <path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path>
          <path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path>
          <path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path>
          <path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path>
        </g>
      </svg>
    </span>
    <span v-else-if="icon == 'site/phone'" :class="classList">
      <svg class="streamline-icon" viewbox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">
        <title>{{ icon }}</title>
        <g id="phone" transform="matrix(0.9848077 0.17364818 -0.17364818 0.9848077 5.730377 0)">
          <path d="M25.076 32C23.9878 32 22.9343 31.6841 22.0326 31.0871C13.6133 25.4928 6.50909 18.3887 0.914793 9.97086C-0.531095 7.79022 -0.237464 4.86645 1.61478 3.0184L3.48511 1.14529C4.22405 0.406349 5.20653 0 6.25303 0C7.29952 0 8.282 0.406349 9.02095 1.14529L12.436 4.55612C13.9598 6.08271 13.9598 8.56534 12.4374 10.0919L11.7457 10.785C14.6097 14.2069 17.7937 17.3923 21.2157 20.2576L21.9059 19.5674C22.6532 18.8243 23.6329 18.4207 24.6738 18.4207C25.7203 18.4207 26.7028 18.8284 27.4418 19.5674L30.8568 22.9824C32.382 24.509 32.3806 26.9916 30.8554 28.5168L28.9837 30.3899C27.9441 31.428 26.5567 32 25.076 32ZM6.25303 1.39161C5.5781 1.39161 4.94491 1.65323 4.46898 2.12916L2.59865 4.00226C1.21399 5.38413 0.994115 7.57034 2.0754 9.19991C7.56532 17.4633 14.5387 24.4366 22.8021 29.9265C23.4757 30.3732 24.2619 30.6084 25.0774 30.6084C26.1851 30.6084 27.2247 30.1812 28.0026 29.4047L29.8743 27.5329C30.8582 26.5491 30.8582 24.9501 29.8757 23.9663C29.8757 23.9663 26.4607 20.5513 26.4607 20.5513C25.9847 20.0753 25.3516 19.8123 24.678 19.8123C24.0045 19.8123 23.3713 20.0739 22.8954 20.5499L21.7556 21.6896C21.6248 21.8204 21.4495 21.8928 21.263 21.8928C21.103 21.8928 20.9457 21.8371 20.8218 21.7341C16.981 18.5738 13.4324 15.0238 10.272 11.1816C10.0438 10.9032 10.0633 10.5025 10.3165 10.2478L11.4549 9.10668C12.4374 8.12281 12.4374 6.52107 11.4549 5.5372L8.03847 2.12916C7.56254 1.65323 6.92796 1.39161 6.25303 1.39161Z" transform="translate(0.17733586 0.59690577)" class="a" />
        </g>
      </svg>
    </span>
  `
}, Ei = ({ length: t, centerPadding: e }) => ({
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
  nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
  dots: t > 3,
  centerMode: !1,
  dotsClass: "slick-pagination is-default",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: !0,
        infinite: !1,
        centerPadding: e || "30px",
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: t > 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: !0,
        infinite: !1,
        centerPadding: e || "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: t > 1
      }
    }
  ]
}), Mi = {
  tagName: "slider",
  computed: {
    classList() {
      return [
        "slider",
        `${n.isTrue(this.hideContainer) === !0 ? "" : this.getSpacing}`,
        `${this.backgroundClass}`,
        "vue-component"
      ];
    },
    jsonOptions() {
      return n.getJSON(this.options);
    },
    getSpacing() {
      return this.spacing ? this.spacing : "";
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      return `slider__headline ${this.headlineClasses ? this.headlineClasses : "h3-font-size"}`;
    },
    centerPaddingValue() {
      return this.centerPadding ? this.centerPadding + "px" : null;
    },
    carouselOptions() {
      const t = this.childrenLength;
      if (t === 0) return null;
      const e = this.jsonOptions ? this.jsonOptions : Ei({
        length: t,
        centerPadding: this.centerPaddingValue
      });
      return this.jsonOptions || (e.slidesToShow = e.slidesToScroll = 1, e.dots = !0, e.responsive.forEach((i) => {
        i.settings.dots = !0, i.settings.slidesToScroll = i.settings.slidesToShow = 1;
      })), JSON.stringify(e);
    },
    childrenLength() {
      var t;
      return ((t = this.children) == null ? void 0 : t.length) || 0;
    },
    children() {
      return this.$slots.default();
    },
    hideBackgroundValue() {
      return n.isTrue(this.hideBackground);
    },
    hideContainerValue() {
      return n.isTrue(this.hideContainer);
    },
    backgroundClass() {
      return this.hideBackgroundValue === !1 ? l.HAS_BACKGROUND : "";
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : this.defaultBgColor;
    },
    style() {
      if (!this.hideBackgroundValue)
        return {
          "background-color": this.backgroundColor
        };
    }
  },
  data() {
    return {
      defaultBgColor: "var(--color-bg-grey)"
    };
  },
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    spacing: String,
    hideContainer: {
      default: !1
    },
    hideBackground: {
      default: !1
    },
    bgColor: String,
    centerPadding: Number,
    options: Object
  },
  // TODO move shape to a vue component and insert it here
  template: `
    <div :class="classList">
      <div class="slider__bg" v-if="!hideBackgroundValue">
        <figure class="svgshape" style="pointer-events: all; transform: translateY(2px);">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 10">
            <polygon :fill="backgroundColor" points="-5,10 100,10 100,0" />
          </svg>
        </figure>
      </div>
      <wrapper :hideContainer="hideContainerValue" classes="slider__wrapper" :style="style">
        <div class="row" v-if="headline">
          <div class="slider__header col-lg-12 col-md-10 mt-6 mt-lg-8 mb-6 mb-lg-8 text-center">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
            <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
          </div>
        </div>
        <div class="slider__container js-slick-carousel" :data-hs-slick-carousel-options="carouselOptions">
          <wrapper-slot-items :items="$slots.default"></wrapper-slot-items>
        </div>
      </wrapper>
    </div>`
}, Ni = {
  tagName: "slot-items",
  props: {
    items: {
      default: []
    }
  },
  render() {
    const t = this.items(), e = [];
    return t.forEach((s, i) => {
      var r;
      (r = s == null ? void 0 : s.props) != null && r.style || (s.props.style = `--utility-animation-index: ${i + 1}`), e.push(s);
    }), e;
  }
}, k = "indefinite", Pi = {
  tagName: "smile",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  data() {
    return {
      "step-1": [],
      "step-2": [],
      "step-3": []
    };
  },
  props: {
    settings: Object,
    color: String,
    step: Number
  },
  watch: {
    step() {
      this.startStep();
    }
  },
  methods: {
    setElementRef(t, e) {
      const s = this["step-" + e];
      !t || s.includes(t) || s.push(t);
    },
    startStep() {
      const t = this["step-" + this.step];
      [].forEach.call(t, (e) => {
        e.setAttribute("begin", "0s"), e.beginElement();
      });
    }
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 371.78 342.67">
      <defs>
        <clipPath id="icon--smile-clip-path">
          <rect x="-999.96" y="-267.47" width="1440" height="1315" fill="none" />
        </clipPath>
      </defs>
      <g style="clip-path: url(#icon--smile-clip-path);">
        <g transform="translate(20,0)">
          <path id="smile-left-eye" class="left-eye" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59" />
          <path id="smile-left-eyebrow" class="left-eyebrow" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M131.55,81.59a53.31,53.31,0,0,0-58,27.83" />
          <path id="smile-right-eyebrow" class="right-eyebrow" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M212.55,102.49a53.23,53.23,0,0,1,53,26.93" />
          <path id="smile-right-eye" class="right-eye" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59" />
          <path id="smile-mouth" class="mouth" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M85,221.75a93.26,93.26,0,0,0,172.17,0" />
          <path id="mouth-upper" class="mouth-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M247,207A69,36,0,0,1,140,206" />
          <path id="smile-circle" class="circle" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="6px" fill="none" d="M170.12,335.42a165,165,0,1,1,0.1,0" />
          <path id="hand" class="hand" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M72.55,308.07l44.86-15.78-5-35.5a14.32,14.32,0,1,1,28.36-4l5,35.5,96.32-29.75a14.32,14.32,0,0,1,17.76,9.75,13.42,13.42,0,0,1,.43,2l.13.94a14.35,14.35,0,0,1-8.78,15.31l-31.91,11.91L220,298.36a30.7,50.7,0,0,1-.42,33.06" />
        </g>
        <g style="transform: scale(0.9) translate(-5px,-25px);">
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M36.21,271.8,26,240.85a24.5,24.5,0,0,1,46.57-15.21L82.8,256.59" />
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M135.41,258.76l-.14-.44a18.21,18.21,0,0,0-23-11.61l-27.65,9.13-11.33,3.7L53.63,266a59.16,59.16,0,0,0-37.9,74.57l9,27.46a59.28,59.28,0,0,0,74.74,37.82l19.71-6.42,39.07-12.75a18.19,18.19,0,0,0,11.63-22.94l-.15-.42a18.18,18.18,0,0,0-22.95-11.63,18.18,18.18,0,0,0,11.62-22.93l-.14-.44a18.2,18.2,0,0,0-23-11.61A18.16,18.16,0,0,0,147,293.78l-.2-.48a18.23,18.23,0,0,0-23-11.62,18.16,18.16,0,0,0,11.63-22.92Z"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M84.8,256.79l27.86-9.08a18.34,18.34,0,0,1,23.11,11.65l.15.44a18.21,18.21,0,0,1-11.79,22.92L96.27,291.8"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M95.8,290.76l27.84-9.05a18.35,18.35,0,0,1,23.1,11.61l.14.44a18,18,0,0,1-1,13.91,18.24,18.24,0,0,1-10.66,9.07l-27.82,9.06"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M106.8,325.77l27.83-9.06a18.34,18.34,0,0,1,23.12,11.63l.14.43a18.17,18.17,0,0,1-11.7,23l-27.86,9.08"></path>
          <path class="hand-upper" style="stroke: {{ iconColor }}" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="none" d="M118.8,360.78l27.85-9.08a18.34,18.34,0,0,1,23.1,11.65l.14.42a18.2,18.2,0,0,1-11.7,23l-27.85,9.06"></path>
        </g>
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-mouth" attributeName="d" values="
          M85,221.75a93.26,93.26,0,0,0,172.17,0;
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-left-eye" attributeName="d" values="
          M92.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-right-eye" attributeName="d" values="
          M250,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-1" :ref="el => setElementRef(el, 1)" href="#smile-circle" attributeName="d" values="
          M170.12,335.42a165,165,0,1,1,0.1,0;
          M44.12,277.42a165,165,0,1,1,254.87,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-mouth" attributeName="d" values="
          M164.55,220.75a93.26,174.26,0,0,0,54.17,-16;
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-left-eye" attributeName="d" values="
          M113.13,139.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59;
          M127.13,129.25a3.59,3.59,0,1,1-3.59,3.59,3.59,3.59,0,0,1,3.59-3.59
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-2" :ref="el => setElementRef(el, 2)" href="#smile-right-eye" attributeName="d" values="
          M229,139.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59;
          M265,129.25a3.59,3.59,0,1,0,3.58,3.59,3.59,3.59,0,0,0-3.58-3.59
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-mouth" attributeName="d" values="
          M140.55,206.75a59.26,86.26,0,0,0,107.17,0;
          M85,221.75a93.26,93.26,0,0,0,172.17,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-left-eyebrow" attributeName="d" values="
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0;
          M140.35,121.86a33.84,33.84,0,0,1-57.39,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-right-eyebrow" attributeName="d" values="
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0;
          M214.09,120.86a33.84,33.84,0,0,0,57.39,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 0.4 0.6 1"
        />
        <animate class="js-text-animation__step-3" :ref="el => setElementRef(el, 3)" href="#smile-circle" attributeName="d" values="
          M44.12,277.42a165,165,0,1,1,254.87,0;
          M170.12,335.42a165,165,0,1,1,0.1,0
        "
          begin="${k}" dur="0.7s" fill="freeze" calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </g>
    </svg>
  `
}, Ii = {
  tagName: "socials",
  data() {
    return {
      follow: ""
    };
  },
  computed: {
    classValue() {
      return [
        "socials align-items-center",
        n.isTrue(this.expand) ? this.showLabel ? "socials--label-expand" : "socials--expand" : "",
        n.isTrue(this.vertical) ? "is-vertical-xl mr-5 mr-xl-0 align-items-xl-start mb-xl-4" : "",
        "vue-component"
      ];
    },
    iconClasses() {
      return [n.isTrue(this.vertical) ? "mb-5 mr-xl-0" : ""];
    },
    showLabel() {
      return !n.isTrue(this.label);
    },
    socialItemClass() {
      return ["socials__item", this.iconClasses];
    },
    getList() {
      var c, d;
      const t = "https://www.twitter.com/", e = "https://www.linkedin.com/in/", s = [
        "mailto:?subject=",
        "https://www.linkedin.com/shareArticle?mini=true&url=",
        "https://twitter.com/intent/tweet?text=&url="
      ], i = {
        email: "fas fa-envelope",
        linkedin: "fab fa-linkedin",
        twitter: "fab fa-x-twitter"
      }, a = [
        {
          link: (c = this.author) != null && c.twitter ? t + this.author.twitter : "",
          icon: i.twitter
        },
        {
          link: (d = this.author) != null && d.linkedin ? e + this.author.linkedin : "",
          icon: i.linkedin
        }
      ].filter(
        (h) => h.link !== ""
      );
      if (a.length > 0) return a;
      const o = s.map((h) => h + this.shareUrl);
      return o == null ? void 0 : o.map((h, u) => {
        const y = Object.keys(i)[u];
        return {
          link: h,
          icon: i[y]
        };
      });
    }
  },
  mounted() {
    var t, e;
    (e = (t = window.i18n) == null ? void 0 : t.loader) == null || e.then(() => {
      var s;
      this.follow = (s = window.i18n) == null ? void 0 : s.translate("follow");
    });
  },
  methods: {},
  props: {
    label: String,
    author: {
      default: null
    },
    vertical: {
      default: null
    },
    expand: {
      default: null
    },
    shareUrl: {
      default: null
    }
  },
  template: `
  <div :class="classValue" v-if="getList">
    <template v-if="showLabel">
      <span class="socials__label mr-4">{{ follow }}</span>
    </template>

    <template v-for="(listEntry, index) in getList">
      <a :href="listEntry.link" target="_blank" rel="noopener"
        :class="socialItemClass" >
        <i :class="listEntry.icon"></i>
      </a>
    </template>
  </div>
  `
}, Tt = "square", Ai = {
  tagName: Tt,
  computed: {
    name() {
      return Tt;
    },
    allProps() {
      const t = {};
      t.width = this.shapeWidth;
      for (const e of Object.keys(this.shape))
        t[e] = this.shape[e];
      return t;
    },
    shape() {
      return this.shapes ? this.shapes[0] : null;
    },
    classList() {
      return ["square", "vue-component"];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    },
    viewBox() {
      return `0 0 ${this.shapeWidth} ${this.shapeHeight}`;
    }
  },
  props: {
    shapes: Array
  },
  template: `
    <svg style="width: 200px" :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="shapeWidth" :height="shapeHeight" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <component :is="shape.name" v-if="shape" v-bind="allProps"></component>
    </svg>
  `
}, $i = {
  tagName: "step-list",
  migrate: !0,
  template: `
                        step-list
                    `
}, qi = {
  tagName: "strategy-split",
  computed: {
    style() {
      return `stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round;`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 46 46">
      <path d="M18.7994 11.1646C18.6252 11.1648 18.454 11.1188 18.3033 11.0314C18.1526 10.944 18.0277 10.8183 17.9414 10.667C17.855 10.5157 17.8102 10.3443 17.8116 10.17C17.8129 9.99584 17.8603 9.82509 17.9491 9.67516L22.1479 2.5466C22.2356 2.39865 22.3602 2.27608 22.5097 2.19094C22.6591 2.10581 22.8281 2.06104 23.0001 2.06104C23.172 2.06104 23.341 2.10581 23.4904 2.19094C23.6399 2.27608 23.7645 2.39865 23.8522 2.5466L28.051 9.67516C28.1398 9.82509 28.1872 9.99584 28.1886 10.17C28.1899 10.3443 28.1451 10.5157 28.0587 10.667C27.9724 10.8183 27.8475 10.944 27.6968 11.0314C27.5461 11.1188 27.3749 11.1648 27.2007 11.1646H18.7994Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.3592 18.7957C11.4204 18.6474 11.4414 18.4855 11.42 18.3265C11.3986 18.1675 11.3355 18.0169 11.2372 17.8902C11.1388 17.7634 11.0087 17.6648 10.86 17.6045C10.7114 17.5441 10.5494 17.5242 10.3905 17.5466L2.84313 18.6081C2.68509 18.6297 2.53549 18.6924 2.4093 18.7899C2.2831 18.8874 2.18475 19.0164 2.12409 19.1639C2.06342 19.3115 2.04258 19.4723 2.06363 19.6304C2.08469 19.7885 2.14692 19.9383 2.24408 20.0648L6.82894 26.1519C6.92537 26.2804 7.05411 26.3811 7.20208 26.4438C7.35005 26.5065 7.51196 26.5289 7.67139 26.5087C7.83081 26.4885 7.98206 26.4265 8.10976 26.329C8.23747 26.2315 8.33709 26.1019 8.39849 25.9534L9.87883 22.3791L11.3592 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.96094 22.2935C13.8205 23.8921 17.1193 26.5993 19.4402 30.0728C21.7611 33.5462 22.9999 37.6299 22.9999 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34.6408 18.7957C34.5795 18.6474 34.5585 18.4855 34.5799 18.3265C34.6014 18.1675 34.6644 18.0169 34.7628 17.8902C34.8611 17.7634 34.9912 17.6648 35.1399 17.6045C35.2886 17.5441 35.4506 17.5242 35.6094 17.5466L43.1568 18.6081C43.3148 18.6297 43.4644 18.6924 43.5906 18.7899C43.7168 18.8874 43.8152 19.0164 43.8758 19.1639C43.9365 19.3115 43.9573 19.4723 43.9363 19.6304C43.9152 19.7885 43.853 19.9383 43.7558 20.0648L39.171 26.1519C39.0745 26.2804 38.9458 26.3811 38.7978 26.4438C38.6499 26.5065 38.488 26.5289 38.3285 26.5087C38.1691 26.4885 38.0179 26.4265 37.8902 26.329C37.7625 26.2315 37.6628 26.1019 37.6014 25.9534L36.1211 22.3791L34.6408 18.7957Z" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36.039 22.2935C32.1795 23.8921 28.8807 26.5993 26.5597 30.0728C24.2388 33.5462 23 37.6299 23 41.8074V43.9396" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 11.1646V43.0292" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}, Oi = {
  tagName: "success-story",
  migrate: !0,
  template: `
                        sucess-story
                    `
}, Bi = {
  props: {
    tagName: "svg-shape",
    align: {
      type: String,
      default: "bottom"
    },
    peak: {
      type: String,
      default: "right"
    },
    color: {
      type: String,
      default: "var(--color-white)"
    },
    obliquity: {
      type: Number,
      default: 10
    },
    classes: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 100
    }
  },
  computed: {
    svgShapeAlign() {
      return this.align;
    },
    svgShapePeak() {
      return this.peak;
    },
    svgShapeColor() {
      return this.color;
    },
    svgShapeObliquity() {
      return this.obliquity;
    },
    svgShapeClasses() {
      return this.classes;
    },
    svgShapeHeight() {
      return this.height;
    },
    basePoints() {
      return this.svgShapeAlign === "top" ? `0,0 ${this.svgShapeHeight},0` : `0,${this.svgShapeObliquity} ${this.svgShapeHeight},${this.svgShapeObliquity}`;
    },
    peakPointY() {
      return this.svgShapeAlign === "top" ? this.svgShapeObliquity : 0;
    },
    peakPointX() {
      return this.svgShapePeak === "left" ? 0 : this.svgShapeHeight;
    },
    points() {
      return `${this.basePoints} ${this.peakPointX},${this.peakPointY}`;
    },
    translateStyle() {
      return this.svgShapeAlign !== "top" ? "transform: translateY(2px);" : "";
    }
  },
  template: `
    <figure :class="'svgshape ' + svgShapeClasses" :style="'pointer-events: all;' + translateStyle">
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" :viewBox="'0 0 ' + svgShapeHeight + ' ' + svgShapeObliquity">
        <polygon :fill="svgShapeColor" :points="points"/>
      </svg>
    </figure>
  `
}, Fi = {
  tagName: "tab-list",
  data() {
    return {
      smallVariant: "tab-list--small",
      showLeftArrow: !1,
      showRightArrow: !1,
      currentIndex: 0,
      currentTabId: ""
    };
  },
  mounted() {
    this.handleScroll(), this.currentTabId = this.list[0].id;
  },
  computed: {
    leftValue() {
      return n.isTrue(this.left) === !0;
    },
    columnClassList() {
      const s = "col-" + (this.tabs ? "" : "lg-") + 12 / this.list.length;
      return [
        this.tabs ? "px-2 px-lg-3 nav-item" : "mb-6 mb-md-8 mb-lg-0",
        this.isSmall ? "" : s
      ];
    },
    variantClass() {
      return this.variant ? this.variant : this.smallVariant;
    },
    classList() {
      return [
        "tab-list vue-component",
        this.tabs ? "px-4 px-lg-0" : "",
        this.leftValue ? "tab-list--left" : "",
        this.variantClass,
        this.showLeftArrow ? "show-left-arrow" : "",
        this.showRightArrow ? "show-right-arrow" : ""
      ];
    },
    listClassList() {
      return ["tab-list__list row nav nav-pills"];
    },
    isSmall() {
      return this.variantClass === this.smallVariant;
    },
    hideContainer() {
      return !this.leftValue;
    }
  },
  methods: {
    canScrollLeft() {
      const t = this.$refs.tabList;
      if (t)
        return t.scrollLeft > 0;
    },
    canScrollRight() {
      const t = this.$refs.tabList;
      if (t)
        return t.scrollLeft + t.clientWidth < t.scrollWidth - 2;
    },
    tabClassList(t) {
      return [
        "tab-list__tab rounded",
        t === this.currentIndex ? "active" : ""
      ];
    },
    ariaSelected(t) {
      return t === this.currentIndex;
    },
    boxClassList(t) {
      return ["tab-list__box rounded", t.link ? "" : "bg-white shadow-lg"];
    },
    isLink(t) {
      return t.link ? t.link.href : null;
    },
    linkAttributes(t, e) {
      const s = {};
      return t.link && Object.assign(s, {
        href: t.link.href,
        target: t.link.target
      }), t.id && Object.assign(s, {
        id: t.id + "-tab",
        "data-toggle": "pill",
        role: "tab",
        "aria-controls": t.id,
        "aria-selected": this.ariaSelected(e)
      }), s;
    },
    handleContentSwitch(t) {
      const e = document.getElementById(t);
      if (!e) return;
      const s = document.getElementById(this.currentTabId);
      s.classList.remove("active"), s.classList.remove("show"), e.classList.add("active"), setTimeout(() => {
        e.classList.add("show");
      }, 50), this.currentTabId = t;
    },
    handleClick(t) {
      t.preventDefault(), t.stopImmediatePropagation();
      const e = t.currentTarget;
      if (!e.href) return;
      const s = e.href.split("#")[1], i = document.getElementById(s), r = Array.prototype.indexOf.call(
        this.$refs.tabLink,
        e
      );
      this.currentIndex = r, i !== null && (document.dispatchEvent(
        new CustomEvent(f.REFRESH_ANIMATE_NUMBERS, {
          detail: { target: i }
        })
      ), this.handleContentSwitch(s));
    },
    handleScroll() {
      this.showLeftArrow = this.canScrollLeft(), this.showRightArrow = this.canScrollRight();
    },
    getArrowOffset() {
      const t = this.$refs.left;
      return t ? t.offsetWidth : 0;
    },
    scrollToTab(t) {
      const e = this.$refs.tabList, s = this.$refs.tab[this.currentIndex];
      if (!e || !s) return;
      const i = this.$refs.tab[t];
      if (!i) return;
      const r = this.getArrowOffset(), a = i.offsetLeft - r;
      e.scrollLeft = t === 0 ? 0 : a, i.querySelector("a").click();
    },
    scrollToNext() {
      this.scrollToTab(this.currentIndex + 1);
    },
    scrollToPrevious() {
      this.scrollToTab(this.currentIndex - 1);
    }
  },
  props: {
    list: Array,
    tabs: Boolean,
    left: {
      default: null
    },
    variant: String
  },
  template: `
    <div :class="classList">
      <wrapper :hide-container="hideContainer">
        <div class="tab-list__controls">
          <div class="tab-list__left" @click="scrollToPrevious" ref="left">
            <div class="tab-list__arrow-icon"></div>
          </div>
          <div class="tab-list__right" @click="scrollToNext">
            <div class="tab-list__arrow-icon"></div>
          </div>
        </div>
        <ul :class="listClassList" role="tablist" ref="tabList" @scroll="handleScroll">
          <li v-for="(tab, index) in list" :class="columnClassList" ref="tab">
            <a v-bind="linkAttributes(tab, index)"
              :class="tabClassList(index)" @click="handleClick" ref="tabLink">
              <div class="tab-list__content">
                <div :class="boxClassList(tab)">
                  <div class="d-flex flex-column align-items-center position-relative z-index-2">
                    <h2 class="tab-list__text mb-4 mb-md-6 text-center" v-if="tab.title">
                      {{ tab.title }}
                    </h2>
                    <p class="mb-6 flex-grow-1" v-if="tab.description">{{ tab.description }}</p>
                      <cta
                        text=tab.cta.text
                        href=tab.cta.href
                        target=tab.cta.target
                        skin=tab.cta.skin
                        classes="align-self-center z-index-2"
                        v-if="tab.cta != tab.href"
                      ></cta>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </wrapper>
    </div>
  `
}, Vi = {
  tagName: "tag",
  data() {
    return n.validateVueProps(this);
  },
  computed: {
    lowerLang() {
      return this.lang.toLowerCase();
    },
    classList() {
      var t;
      return [
        "tags__btn btn btn-xs btn-soft-secondary btn-pill mb-2 vue-component",
        this.variant ? "tag--" + this.variant : `mx-sm-${(t = this.props) == null ? void 0 : t.spacing}`,
        this.classes ? this.classes : null
      ];
    },
    url() {
      return this.lowerLang === "de" ? "" : `index-${this.lowerLang}/`;
    },
    href() {
      return "/blog/" + this.url + "#" + encodeURIComponent(this.tag);
    },
    hasIcon() {
      return this.variant === "icon";
    }
  },
  props: {
    tag: {
      type: String,
      required: !0
    },
    count: {
      type: Number,
      default: null
    },
    filter: {
      type: Boolean,
      default: !1
    },
    lang: {
      type: String,
      default: "de"
    },
    spacing: {
      type: Number,
      default: 1
    },
    classes: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  template: `
    <a
      :class="classList"
      :data-text="filter ? tag : undefined"
      :data-tag="tag"
      :href="href"
      rel="tag"
      :title="'Posts tagged with ' + tag"
    >
      {{ tag }}<span v-if="count">({{ count }})</span><span class="tag__icon" v-if="hasIcon"><icon icon="close" size="xs" /></span>
    </a>
  `
}, Ri = {
  tagName: "tag-cloud",
  migrate: !0,
  template: `
                        tag-cloud
                    `
}, Et = "t-block", zi = {
  tagName: Et,
  computed: {
    name() {
      return Et;
    },
    secondShapeBackgroundColor() {
      return this.secondShape.backgroundColor ? this.secondShape.backgroundColor : "var(--color-page-detail-shape)";
    },
    secondShapeFirstColor() {
      return this.secondShape.firstColor ? this.secondShape.firstColor : "var(--color-orange)";
    },
    secondShapeSecondColor() {
      return this.secondShape.secondColor ? this.secondShape.secondColor : "var(--color-background)";
    },
    firstShape() {
      return this.getShapeData(0);
    },
    secondShape() {
      return this.getShapeData(1);
    },
    thirdShape() {
      return this.getShapeData(2);
    },
    fourthShape() {
      return this.getShapeData(3);
    },
    classList() {
      return ["t-block", "vue-component"];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    }
  },
  methods: {
    allProps(t) {
      const e = {};
      for (const s of Object.keys(t))
        e[s] = t[s];
      return e;
    },
    getShapeData(t) {
      const e = (this.shapes && this.shapes[t]) ?? {};
      return this.allProps(e);
    },
    defaultComponent(t) {
      switch (t) {
        default:
        case 0:
          return "shape-moving-eye";
        case 1:
          return "shape-half-square";
        case 2:
          return "shape-semi-circle";
        case 3:
          return "rect";
      }
    }
  },
  props: {
    shapes: Array,
    backgroundColor: String,
    firstColor: String,
    secondColor: String
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">
      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <g v-else transform="translate(0 0)">
        <path :fill="secondShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="secondShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="secondShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
    </svg>
  `
}, ji = {
  tagName: "teaser",
  migrate: !0,
  template: `
                        teaser
                    `
}, Ui = {
  tagName: "testimonial-list",
  template: `
    <div class="testimonial-list vue-component">
      <div class="testimonial-list__contents container-lg">
        <slot></slot>
      </div>
    </div>
  `
}, Hi = {
  tagName: "testimonials-detail",
  migrate: !0,
  template: `
                        testimonials-detail
                    `
}, Wi = {
  tagName: "testimonials-slider",
  migrate: !0,
  template: `
                        testimonials-slider
                    `
}, Gi = {
  tagName: "testimonial-teaser",
  migrate: !0,
  template: `
                        testimonial-teaser
                    `
}, Ji = {
  tagName: "text-animation",
  props: {
    sequence: Object,
    fixed: Boolean,
    cta: Object
  },
  data() {
    return {
      defaultTextSize: "font-size-6",
      defaultSublineSize: "font-size-2",
      timeout: null,
      textTimeout: null,
      letterDelay: 120,
      sizeBasedDelay: null,
      minDelay: 800,
      currentDelay: 0,
      lastDelay: 0,
      delayOffset: 1600,
      sublineDelay: 1150,
      buttonDelay: 800,
      step: 0,
      textValue: "",
      currentSubline: "",
      currentSublineSize: null,
      currentTextSize: "",
      currentText: "",
      isEnded: !1,
      isSecondLast: !1,
      showSubline: !1,
      sublineValue: null,
      isCalculated: !1,
      calculationStep: 0,
      calculatedMaxHeight: 0
    };
  },
  computed: {
    classList() {
      return [
        "text-animation vue-component",
        this.isCalculated ? "" : l.INVISIBLE,
        this.isEnded ? l.END : "",
        this.isFixed ? "text-animation--fixed" : ""
      ];
    },
    isFixed() {
      return n.isTrue(this.fixed);
    },
    textClassList() {
      return ["text-animation__text", this.currentTextSize];
    },
    sublineClassList() {
      return [
        "text-animation__subline",
        this.currentSublineSize,
        this.showSubline ? "" : l.INVISIBLE
      ];
    },
    placeholderSublineClassList() {
      return ["text-animation__subline", this.currentSublineSize];
    },
    placeholderTextClassList() {
      return ["text-animation__text", this.currentTextSize];
    },
    placeholderCtaClassList() {
      return [
        "text-animation__cta",
        this.isSecondLast || this.isEnded ? "" : l.INVISIBLE
      ];
    },
    ctaClassList() {
      return ["text-animation__cta", this.isEnded ? "" : l.INVISIBLE];
    },
    sequenceData() {
      return n.getJSON(this.sequence);
    },
    ctaData() {
      return n.getJSON(this.cta);
    }
  },
  methods: {
    getDelayByValue(t) {
      switch (t) {
        case 6:
          this.sizeBasedDelay = this.letterDelay / 1.8, this.sizeBasedOffset = this.delayOffset;
          break;
        case 7:
        default:
          this.sizeBasedDelay = this.letterDelay / 10, this.sizeBasedOffset = this.minDelay;
          break;
      }
    },
    calculateDelay() {
      var e;
      this.currentSequenceStep = this.sequenceData[this.step], this.currentText = this.currentSequenceStep.text, this.currentTextSize = this.currentSequenceStep.textSize || this.defaultTextSize;
      const t = parseInt(this.currentTextSize.match(/\d+/)[0]);
      this.getDelayByValue(t), this.currentSubline = ((e = this.currentSequenceStep) == null ? void 0 : e.subline) || "", this.currentDelay = this.currentText.length * this.sizeBasedDelay + this.sizeBasedOffset + (this.currentSubline.length > 0 ? this.sublineDelay : 0), this.currentDelay < this.minDelay && (this.currentDelay = this.minDelay), this.lastDelay = this.lastDelay + this.currentDelay;
    },
    showButtonAtLastRun(t) {
      this.step + 1 < this.sequenceData.length || setTimeout(() => {
        this.end();
      }, t + this.buttonDelay);
    },
    end() {
      this.isEnded = !0, this.$emit("text-animation-ended", this.isEnded), window.clearTimeout(this.timeout);
    },
    next() {
      this.step >= this.sequenceData.length - 1 || (this.step++, this.animate());
    },
    animateText() {
      this.currentSublineSize = this.currentSequenceStep.sublineSize || this.defaultSublineSize, this.sublineValue = this.currentSubline, this.step + 1 !== this.sequenceData.length && (this.isEnded = !1), this.step === this.sequenceData.length - 1 && (this.isSecondLast = !0), this.$emit("text-animation-state", {
        step: this.step,
        isSecondLast: this.isSecondLast
      });
      for (let t = 0; t < this.currentText.length; t++)
        this.textTimeout = t * this.sizeBasedDelay + this.sizeBasedDelay, setTimeout(() => {
          this.typeLetter(this.currentText[t]);
        }, this.textTimeout);
      this.currentSubline.length && (this.textTimeout = this.textTimeout + this.sublineDelay, setTimeout(() => {
        this.sublineValue = this.currentSubline, this.showSubline = !0;
      }, this.textTimeout)), this.showButtonAtLastRun(this.textTimeout);
    },
    resetText() {
      this.textValue = "", this.sublineValue = "", this.showSubline = !1, this.oldStep = this.sequenceData[this.step - 1], this.nextStep = this.sequenceData[this.step + 1] || this.sequenceData[0], this.currentTextSize = this.nextStep.textSize || this.defaultTextSize, this.currentSublineSize = this.nextStep.sublineSize || this.defaultSublineSize;
    },
    animate() {
      this.calculateDelay(), this.animateText(), this.timeout = setTimeout(() => {
        this.resetText(), this.next();
      }, this.currentDelay);
    },
    typeLetter(t) {
      if (!t) return;
      (() => {
        this.textValue = this.textValue + t;
      })();
    },
    calculateNextMaxHeight() {
      const t = this.sequenceData[this.calculationStep];
      if (!t) return this.isCalculated = !0;
      this.currentText = null, this.sublineValue = null, this.ctaData = null, this.currentTextSize = t.textSize || this.defaultTextSize, this.currentText = t.text, t.subline && (this.currentSublineSize = t.sublineSize || this.defaultSublineSize, this.sublineValue = t.subline), this.calculationStep++;
    },
    handleResize() {
      this.calculatedMaxHeight = null;
      const t = this.$refs.placeholder;
      this.calculatedMaxHeight = t.offsetHeight;
    }
  },
  updated() {
    if (!this.isCalculated) {
      const t = this.$refs.placeholder;
      this.$refs.placeholderCta.style.display = "none", this.calculatedMaxHeight = t.offsetHeight > this.calculatedMaxHeight ? t.offsetHeight : this.calculatedMaxHeight, this.calculateNextMaxHeight(), this.$refs.placeholderCta.style.display = "";
    }
  },
  created() {
    this.text = this.$refs.text, this.sizeBasedDelay = this.letterDelay;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleResize), this.calculateNextMaxHeight();
  },
  watch: {
    isCalculated(t) {
      t && (this.$refs.placeholder.style.minHeight = this.calculatedMaxHeight + "px", this.animate());
    }
  },
  template: `
    <div :class="classList">
      <div class="text-animation__placeholder" ref="placeholder">
        <span :class="placeholderTextClassList" ref="placeholderText" v-html="currentText"></span>
        <div :class="placeholderSublineClassList" v-html="sublineValue"></div>
        <div :class="placeholderCtaClassList" ref="placeholderCta" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
      <div class="text-animation__visible">
        <span :class="textClassList" ref="text" v-html="textValue"></span>
        <div :class="sublineClassList" v-html="sublineValue"></div>
        <div :class="ctaClassList" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
    </div>
  `
}, Zi = {
  tagName: "text-icon-animation",
  props: {
    animation: Object,
    icon: String,
    fixed: Boolean,
    cta: Object,
    classes: String
  },
  data() {
    return {
      textAnimationStep: 0,
      isEnded: !1,
      isSecondLast: !1
    };
  },
  computed: {
    animationData() {
      return n.getJSON(this.animation);
    },
    sequence() {
      return this.animationData.sequence;
    },
    classList() {
      return [
        "text-icon-animation row vue-component",
        this.classes,
        this.isFixed ? "text-icon-animation--fixed" : "",
        this.isEnded ? "text-icon-animation--ended" : "",
        this.isSecondLast ? "text-icon-animation--is-second-last" : ""
      ];
    },
    isFixed() {
      return n.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    }
  },
  methods: {
    handleTextAnimationState(t) {
      this.textAnimationStep = t == null ? void 0 : t.step, this.isSecondLast = t == null ? void 0 : t.isSecondLast;
    },
    handleTextAnimationEnded(t) {
      this.isEnded = t;
    }
  },
  template: `
    <div :class="classList">
      <div class="text-icon-animation__animation col-lg-8">
        <text-animation
          :sequence="sequence"
          :fixed="fixed"
          :cta="cta"
          @text-animation-state="handleTextAnimationState"
          @text-animation-ended="handleTextAnimationEnded"
        >
        </text-animation>
      </div>
      <div class="text-icon-animation__icon-container col-lg-4">
        <icon :icon="icon" :classes="iconClassList" :animation="animationData" :step="textAnimationStep"></icon>
      </div>
    </div>
  `
}, Ki = {
  tagName: "text-image",
  props: {
    spacing: { type: String, default: "space-top-2" },
    image: String,
    imageClasses: String,
    imagePreset: String,
    lottie: Object,
    float: Boolean,
    overline: String,
    headline: String,
    subline: String,
    left: Boolean,
    alt: String,
    cloudinary: Boolean,
    offset: Boolean,
    white: Boolean,
    copy: String,
    list: Array,
    bgColor: String,
    copyClasses: String,
    copyLight: String,
    background: String,
    firstColWidth: Number,
    secondColWidth: Number,
    reduceSpacing: { type: Boolean, default: !1 },
    cta: Object,
    modal: Object,
    href: String,
    badge: Object,
    sticky: Boolean,
    noAnimation: Boolean,
    index: Number,
    noGutters: { type: Boolean, default: !1 },
    level: { type: String, default: "h3" },
    headlineClasses: String
  },
  computed: {
    textImageLightText() {
      return this.copyLight ? "text-light" : "";
    },
    textImageFirstColWidthXl() {
      return this.firstColWidth || 4;
    },
    textImageFirstColWidthComputed() {
      return this.firstColWidth || 6;
    },
    textImageSecondColWidthXl() {
      return this.secondColWidth || 8;
    },
    textImageSecondColWidthComputed() {
      return this.secondColWidth || 6;
    },
    textImageHeadlineClassesComputed() {
      let t = `${this.headlineClasses || ""} ${this.textImageLightText} mb-2 mb-lg-4`;
      return this.headlineClasses || (t += this.float ? " h3-font-size" : " h4-font-size font-weight-normal"), t.trim();
    },
    textImageImgSrcSets() {
      return this.float ? this.imagePreset ? this.imagePreset : "textImageFloatingSmall" : this.imagePreset ? this.imagePreset : null;
    },
    textImagePreset() {
      return this.float ? this.imagePreset || "textImageFloatingSmall" : this.imagePreset || null;
    },
    textImageClass() {
      return [
        "text-image",
        "is-component",
        this.spacing,
        { "text-image--bg-color": this.bgColor },
        { "is-sticky-scroller": this.sticky },
        { "utility-animation utility-animation--enter-exit": !this.noAnimation },
        { "text-image--float": this.float },
        "vue-component"
      ];
    },
    textImageStyle() {
      return {
        "background-color": this.bgColor,
        "--utility-animation-index": this.index,
        "background-image": this.background ? `url('${this.background}')` : void 0
      };
    },
    textImageFirstColClasses() {
      const t = [
        "text-image__first-col",
        "d-flex",
        "text-image__img",
        "justify-content-center",
        this.imageClasses,
        `col-lg-${this.float ? this.textImageFirstColWidthComputed : this.offset ? this.textImageFirstColWidthComputed - 1 : this.textImageFirstColWidthComputed}`
      ];
      return this.float ? t.push(`col-xl-${this.textImageFirstColWidthXl}`, "text-image__img--floating") : this.offset && !this.left && t.push("offset-lg-1"), t;
    },
    textImageSecondColClasses() {
      const t = [
        "text-image__second-col",
        { "no-gutters": this.noGutters },
        { "pt-2 pt-lg-4": !this.noGutters },
        `col-lg-${this.textImageSecondColWidthComputed}`,
        { "fade-in-bottom": !this.noAnimation },
        { "text-white": this.white },
        { [this.reduceSpacing]: this.reduceSpacing }
      ];
      return this.reduceSpacing || t.push(`${this.left ? "pr-lg-" : "pl-lg-"}${this.textImageSecondColWidthComputed}`), this.float ? t.push(`col-xl-${this.textImageSecondColWidthXl}`) : this.left && this.offset && t.push("offset-lg-1"), t;
    },
    textImageLightTextClass() {
      return [this.copyClasses || "", this.textImageLightText];
    }
  },
  mounted() {
    x.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  },
  template: `
    <div :class="textImageClass" :style="textImageStyle" ref="root">
      <div class="container">
        <div class="row" :class="{ 'flex-row-reverse': left }">
          <div
            v-if="float"
            :class="['text-image__floating-col', 'justify-content-end', 'text-image__floating-img', 'position-absolute', 'top-0', 'right-0', 'col-lg-' + textImageFirstColWidthComputed, 'col-xl-' + textImageFirstColWidthXl]"
            @click="handleClick"
            :style="{ cursor: href ? 'pointer' : undefined }"
          >
            <v-img
              :img="image"
              :cloudinary="cloudinary"
              :alt="alt"
              imgSrcSets="textImageFloating"
              preset="textImageFloating"
              :lottie="lottie"
            />
          </div>
          <div
            :class="textImageFirstColClasses"
            @click="handleClick"
            :style="{ cursor: href ? 'pointer' : undefined }"
          >
            <div class="text-image__first-col-wrapper" :class="{ 'fade-in-bottom': !noAnimation }" data-utility-animation-step="1">

              <v-img
                :img="image"
                :cloudinary="cloudinary"
                :imgSrcSets="textImageImgSrcSets"
                :preset="textImagePreset"
                :alt="alt"
                :lottie="lottie"
              />
            </div>
          </div>
          <div :class="textImageSecondColClasses" data-utility-animation-step="1">
            <badge
              v-if="badge"
              :text="badge.text"
              :icon="badge.icon"
              :uppercase="!badge.noUppercase"
              classes="text-image__badge"
            />
            <span v-if="overline" class="text-image__overline d-inline-block mb-2 font-size-2">
              {{ overline }}
            </span>
            <headline
              v-if="headline"
              :level="level"
              :text="headline"
              :classes="textImageHeadlineClassesComputed"
            />
            <span v-if="subline" class="richtext">{{ subline }}</span>
            <div v-if="subline" class="text-image__img text-image__img--subline mb-5 mt-5">
              <v-img
                :img="image"
                :cloudinary="cloudinary"
                :imgSrcSets="textImageImgSrcSets"
                :preset="textImagePreset"
                :alt="alt"
                :lottie="lottie"
              />
            </div>
            <div :class="textImageLightTextClass" v-html="copy"></div>
            <div v-if="list" class="pt-4 pt-lg-6 pb-6">
              <cta-list :list="list" />
            </div>
          </div>
          <div v-if="cta" class="text-image__cta col-lg-12">
            <cta
              :text="cta.text"
              button
              :href="cta.href"
              :trigger="cta.trigger"
            />
          </div>
        </div>
      </div>
      <modal
        v-if="modal"
        :form="modal.form"
        :success="modal.success"
        :error="modal.error"
        :application="true"
        :clientName="modal.clientName"
        :jobId="modal.jobId"
        :apiUrl="modal.apiUrl"
        :apiKey="modal.apiKey"
      />
    </div>
  `
}, Xi = {
  tagName: "text-image-list",
  migrate: !0,
  template: `
                        text-image-list
                    `
}, Yi = {
  tagName: "text-teaser",
  computed: {
    classList() {
      return ["text-teaser utility-animation", this.spacing ? this.spacing : "", "vue-component"];
    },
    style() {
      return [
        this.background ? `background-image: url('${this.background}');` : "",
        this.bgColor ? `background-color: ${this.bgColor};` : ""
      ];
    },
    rowBackgroundClass() {
      return ["row", this.background ? "justify-content-center" : ""];
    },
    colBackgroundClass() {
      return [
        this.background ? "col-lg-6 py-11 d-flex text-center justify-content-center align-items-center flex-wrap font-size-4 font-weight-light" : "col-lg-7 offset-lg-1 pt-8"
      ];
    },
    ctaListClass() {
      return ["pt-4 pt-lg-6 w-100 w-md-auto fade-in-bottom"];
    },
    logoClass() {
      return ["text-teaser__logo-container", this.background ? "mx-auto" : ""];
    },
    ctaListNormalize() {
      return this.ctaList.map((e) => {
        const s = {};
        for (const i in e)
          i === "ctaText" ? s.text = e[i] : i === "ctaHref" ? s.href = e[i] : s[i] = e[i];
        return s;
      });
    }
  },
  props: {
    ctaList: Object,
    spacing: String,
    background: String,
    bgColor: String,
    logo: Object,
    copy: String
  },
  template: `
    <div :class="classList" :style="style">
      <div class="container">
        <div :class="rowBackgroundClass">
          <div :class="colBackgroundClass">
            <div class="mb-4 w-100" v-if="logo">
              <figure :class="logoClass">
                <v-img v-bind="logo" />
              </figure>
            </div>

            <div class="text-teaser__copy fade-in-bottom" data-utility-animation-step="1">{{ copy }}</div>

            <div :class="ctaListClass" data-utility-animation-step="1" v-if="ctaList">
              <template v-for="entry in ctaListNormalize">
                <cta v-bind="entry" />
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  `
}, Qi = {
  tagName: "tile-view",
  computed: {
    style() {
      return `fill: ${this.color ? this.color : "#5CBBFF"}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 16 16">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1234 0C0.825462 0 0.539715 0.118358 0.329038 0.329038C0.118358 0.539717 0 0.825457 0 1.1234V6.02553C0 6.32348 0.118358 6.60922 0.329038 6.81988C0.539715 7.0306 0.825462 7.14894 1.1234 7.14894H6.02553C6.32348 7.14894 6.60922 7.0306 6.81991 6.81988C7.03057 6.60922 7.14897 6.32348 7.14897 6.02553V1.1234C7.14897 0.825457 7.03057 0.539717 6.81991 0.329038C6.60922 0.118358 6.32348 0 6.02553 0H1.1234ZM9.97246 0C9.67452 0 9.38876 0.118358 9.17811 0.329038C8.96745 0.539717 8.84905 0.825457 8.84905 1.1234V6.02553C8.84905 6.32348 8.96745 6.60922 9.17811 6.81988C9.38876 7.0306 9.67452 7.14894 9.97246 7.14894H14.8746C15.1725 7.14894 15.4583 7.0306 15.6689 6.81988C15.8797 6.60922 15.998 6.32348 15.998 6.02553V1.1234C15.998 0.825457 15.8797 0.539717 15.6689 0.329038C15.4583 0.118358 15.1725 0 14.8746 0H9.97246ZM0.329038 9.18012C0.539715 8.9694 0.825462 8.85106 1.1234 8.85106H6.02553C6.32348 8.85106 6.60922 8.9694 6.81991 9.18012C7.03057 9.39077 7.14897 9.67653 7.14897 9.97447V14.8766C7.14897 15.1745 7.03057 15.4603 6.81991 15.6709C6.60922 15.8817 6.32348 16 6.02553 16H1.1234C0.825462 16 0.539715 15.8817 0.329038 15.6709C0.118358 15.4603 0 15.1745 0 14.8766V9.97447C0 9.67653 0.118358 9.39077 0.329038 9.18012ZM9.97246 8.85106C9.67452 8.85106 9.38876 8.9694 9.17811 9.18012C8.96745 9.39077 8.84905 9.67653 8.84905 9.97447V14.8766C8.84905 15.1745 8.96745 15.4603 9.17811 15.6709C9.38876 15.8817 9.67452 16 9.97246 16H14.8746C15.1725 16 15.4583 15.8817 15.6689 15.6709C15.8797 15.4603 15.998 15.1745 15.998 14.8766V9.97447C15.998 9.67653 15.8797 9.39077 15.6689 9.18012C15.4583 8.9694 15.1725 8.85106 14.8746 8.85106H9.97246Z" />
    </svg>
  `
}, ta = {
  tagName: "timeline-entry-inner-text",
  computed: {},
  template: `
    <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
      <template v-if="entry.title">
        <div class="timeline__entry-title">{{ entry.title }}</div>
        <p class="timeline__entry-text">{{ entry.text }}</p>
      </template>
      <template v-else><span v-html="entry"></span></template>
    </div>
  `,
  props: {
    entry: Object,
    simple: Boolean
  }
}, ea = {
  tagName: "timeline",
  components: {
    "timeline-entry-inner-text": ta
  },
  computed: {
    classList() {
      return [
        "timeline",
        "has-background",
        "timeline--headline-sticky has-headline-sticky",
        this.isReady ? l.READY : "",
        this.expanded ? l.EXPANDED : "",
        this.spacing,
        this.simpleValue ? "timeline--simple" : "",
        "vue-component"
      ];
    },
    copyColor() {
      return this.color ? this.color : "var(--color-copy-light)";
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : "var(--color-blue-dark)";
    },
    style() {
      return `--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`;
    },
    headlineClasses() {
      var t;
      return `timeline__headline headline-sticky__target h2-font-size light ${(t = this.headline) != null && t.classes ? this.headline.classes : ""}`;
    },
    lineEndStyle() {
      var t;
      return `--timeline-line-position: ${(t = this.entries) == null ? void 0 : t.length}`;
    },
    simpleValue() {
      return n.isTrue(this.simple);
    },
    iconName() {
      return "strategy-split";
    }
  },
  mounted() {
    this.bindEvents(), this.handleScroll();
  },
  data() {
    return {
      lastIndex: null,
      isReady: !1,
      startDelay: 500,
      isVisible: !1,
      percentageInViewport: 40,
      minPercentage: -10,
      maxPercentage: 100,
      entryContainerStates: [],
      entryContainerStyles: []
    };
  },
  methods: {
    bindEvents() {
      document.addEventListener("scroll", this.handleScroll);
    },
    startAnimation() {
      setTimeout(() => {
        this.isReady = !0;
      }, this.startDelay);
    },
    getEntryLineStyle(t) {
      return `--timeline-line-position: ${t}`;
    },
    handleScroll() {
      this.expanded ? this.isInViewport() : this.updateAnimation();
    },
    updateAnimation() {
      const t = this.getScrollPercentage();
      if (t <= this.minPercentage) return this.setAnimationStart();
      if (t >= this.maxPercentage) return this.setAnimationEnd();
      this.isReady || this.startAnimation(), this.showEntryByPercent(t);
    },
    setAnimationStart() {
      this.isReady = !1;
    },
    setAnimationEnd() {
      for (let e = 0; e < this.entries.length; e++)
        this.entryContainerStyles[e] = "0", this.entryContainerStates[e] = [l.SHOW, l.IS_FULL];
    },
    showEntryByPercent(t) {
      const e = this.maxPercentage / this.entries.length;
      for (let s = 0; s < this.entries.length; s++)
        this.updateNextStep(s, t, e);
    },
    updateNextStep(t, e, s) {
      this.entryContainerStates[t] = l.SHOW;
      const i = 0, r = s * t, a = s * (t + 1);
      let o = 0;
      if (e >= r && e <= a) {
        const c = s, d = e - r, h = 60;
        o = this.maxPercentage - Math.ceil(d * 100 / c), o < h && (this.entryContainerStates[t] = [
          l.SHOW,
          "timeline__entry-container--visible"
        ]);
      } else e > a ? (o = i, this.entryContainerStates[t] = [l.SHOW, l.IS_FULL]) : o = this.maxPercentage;
      this.simpleValue && (o < this.maxPercentage && o > i ? o = 1 : o = 0), this.entryContainerStyles[t] = `${o}`;
    },
    getEntryContainerClasses(t) {
      return ["timeline__entry-container", this.entryContainerStates[t]];
    },
    getEntryContainerStyle(t) {
      return `--timeline-entry-container-percentage: ${this.entryContainerStyles[t] ? this.entryContainerStyles[t] : this.simpleValue ? 0 : this.maxPercentage}`;
    },
    getScrollPercentage() {
      const t = this.$refs.root, e = t.getBoundingClientRect().height, s = window.innerHeight / 3;
      let i = n.getScrollTop(t) - s;
      i < 0 && (i = 0);
      const r = window.scrollY - i, a = e - s;
      return r * 100 / a;
    },
    isInViewport() {
      if (this.isVisible) return;
      const t = this.$refs.root;
      n.isInViewportPercent(
        t,
        this.percentageInViewport
      ) && this.startAnimation();
    }
  },
  props: {
    headline: Object,
    bgColor: {
      default: null
    },
    color: {
      default: null
    },
    entries: Array,
    expanded: {
      default: null
    },
    spacing: String,
    simple: {
      default: null
    },
    subline: String
  },
  template: `
    <div :class="classList" :style="style" ref="root">
      <div class="container">
        <div class="timeline__row row">
          <div class="timeline__col col">
            <template v-if="subline">
              <div class="timeline__header">
                <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
                <div class="timeline__subline" v-if="subline">{{ subline }}</div>
              </div>
            </template>
            <template v-else>
              <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
            </template>

            <div class="timeline__content">
              <div class="timeline__line">
                <div class="timeline__line-start">
                  <div class="timeline__line-corner">
                    <span></span>
                  </div>
                </div>
                <div :class="getEntryContainerClasses(index)" v-for="(entry, index) in entries" :style="getEntryContainerStyle(index)">
                  <div class="timeline__entry" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                      <div class="timeline__entry-inner-line">
                        <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                      </div>
                      <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                    </div>
                  </div>
                  <div class="timeline__entry-line" :style="getEntryLineStyle(index)" ref="entry-line"></div>
                  <div class="timeline__entry-spacer" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                      <div class="timeline__entry-inner-line">
                        <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                      </div>
                      <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                    </div>
                  </div>
                </div>
                <div class="timeline__line-end" :style="lineEndStyle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
}, sa = {
  tagName: "toggle-form",
  migrate: !0,
  template: `
                       toggle-form
                    `
}, Mt = {
  bgColor: "var(--color-midnight)",
  mail: "info@glueckkanja.com",
  offices: ["Germany", "Austria", "Spain", "Australia"],
  copyright: "2024 glueckkanja AG. All rights reserved.",
  logos: [
    {
      img: "/logos/gk-Logo-sw.svg",
      alt: "glueckkanja Logo",
      url: "index.html",
      class: "max-w-23rem"
    }
  ],
  partners: [
    {
      img: "/logos/partner-seal-mpoy.svg",
      alt: "Partner of the Year Award"
    },
    {
      img: "/logos/partner-seal-mssp.svg",
      alt: "Security MSSP of the Year"
    }
  ],
  brandLogos: [
    {
      title: "a brand of:",
      img: "/logos/gk-Logo-sw.svg",
      alt: "glueckkanja AG",
      url: "https://www.glueckkanja.com/de",
      classes: "w-30 w-sm-40 w-lg-60 w-xl-50",
      target: "_blank"
    }
  ],
  highlights: [
    {
      img: "/logos/partner-misa-mxdr.svg",
      alt: "Microsoft Intelligent Security Association"
    },
    {
      img: "/logos/seal-mssp-infrastructure.svg",
      alt: "MSP Infrastructure Azure"
    },
    {
      img: "/logos/seal-mssp-data-ai.svg",
      alt: "MSP Data & AI Azure"
    },
    {
      img: "/logos/seal-msp-digital-app-innovation.svg",
      alt: "MSP Digital & App Innovation Azure"
    },
    {
      img: "/logos/seal-mssp-modern-work.svg",
      alt: "MSP Modern Work"
    },
    {
      img: "/logos/seal-mssp-security.svg",
      alt: "MSP Security"
    },
    {
      img: "/logos/isg-2024-m365-services-large-enterprises.svg",
      alt: "ISG Microsoft 365 Services Large Enterprises"
    },
    {
      img: "/logos/isg-2024-m365-services-midmarket.svg",
      alt: "ISG Microsoft 365 Services Midmarket"
    },
    {
      img: "/logos/isg-2024-azure-large-enterprises.svg",
      alt: "ISG Microsoft Azure Large Enterprises"
    },
    {
      img: "/logos/isg-2024-azure-midmarket.svg",
      alt: "ISG Microsoft Azure Midmarket"
    },
    {
      img: "/logos/iso27001.svg",
      alt: "ISO 27001",
      url: "https://www.glueckkanja.com/documents/general/gkgab-ISO27001Certificate-de.pdf",
      target: "_blank",
      classes: "max-rem-10 max-lg-rem-11"
    },
    {
      img: "/logos/kununu-compact.svg",
      alt: "Kununu Logo",
      url: "https://www.kununu.com/de/glueck-kanja-consulting",
      target: "_blank"
    }
  ],
  socials: [
    {
      icon: "fa-x-twitter",
      url: "https://twitter.com/glueckkanja_",
      title: "Twitter"
    },
    {
      icon: "fa-youtube",
      url: "https://www.youtube.com/user/glueckkanja",
      title: "Youtube"
    },
    {
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/company/glueckkanja",
      title: "LinkedIn"
    },
    {
      icon: "fa-github",
      url: "https://github.com/glueckkanja",
      title: "Github"
    }
  ],
  links: [
    {
      title: "Datenschutz",
      url: "https://www.glueckkanja.com/de/datenschutz",
      target: "_blank"
    },
    {
      title: "Impressum",
      url: "https://www.glueckkanja.com/de/impressum",
      target: "_blank"
    }
  ],
  linksEn: [
    {
      title: "Privacy",
      url: "https://www.glueckkanja.com/en/privacy",
      target: "_blank"
    },
    {
      title: "Imprint",
      url: "https://www.glueckkanja.com/en/imprint",
      target: "_blank"
    }
  ]
}, ia = {
  tagName: "v-footer-slider",
  template: `
    <div class="footer__slider-container">
      <carousel
        :items="items"
        :bg-color="bgColor"
      >
      </carousel>
    </div>
  `,
  props: {
    items: Array,
    bgColor: String
  }
}, aa = {
  tagName: "v-footer",
  components: {
    "footer-slider": ia
  },
  data() {
    return {
      bgColorRgbaValue: null
    };
  },
  computed: {
    classList() {
      return [
        "footer text-white",
        n.isTrue(this.noMargin) ? "" : "mt-8 mt-lg-11",
        this.isCorporate ? "footer--corporate" : "",
        "vue-component"
      ];
    },
    isCorporate() {
      var t;
      return !((t = this.dataValue) != null && t.brandLogos);
    },
    style() {
      var t;
      return [(t = this.dataValue) != null && t.bgColor ? `background-color: ${this.dataValue.bgColor};` : ""];
    },
    dataValue() {
      return this.data ? { ...Mt, ...n.getJSON(this.data) } : { ...Mt };
    },
    links() {
      const t = this.lang.toLowerCase();
      if (t === "de" || t === "")
        return this.dataValue.links;
      {
        const e = n.capitalize(this.lang), s = this.dataValue[`links${e}`];
        return s || this.dataValue.links;
      }
    },
    locations() {
      const t = [];
      return t.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail
      }), this.dataValue.additionalLocations && this.dataValue.additionalLocations.length && t.push(...this.dataValue.additionalLocations), t;
    }
  },
  mounted() {
    this.bgColorRgbaValue = this.bgColorRgba();
  },
  methods: {
    bgColorRgba() {
      if (!this.$refs.root) return null;
      const s = window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g, "").split(",");
      return `rgba(${s[0]}, ${s[1]}, ${s[2]}, 1)`;
    }
  },
  props: {
    data: Object,
    noMargin: {
      default: null
    },
    lang: String
  },
  template: `
    <footer :class="classList" :style="style" ref="root">
      <div class="container">
        <div class="footer__content-row row">
          <div class="footer__content col-lg-12">
            <div class="footer__address">
              <div :class="['mb-3', logo?.classes]" v-for="logo in dataValue.logos">
                <a
                  :href="logo.url"
                  :target="logo.target"
                  aria-label="Front"
                  :class="['footer__logos-link d-block pr-6', logo.linkClasses ? logo.linkClasses : 'w-75 w-md-35 w-lg-100']"
                >
                  <v-img
                    :cloudinary="true"
                    v-bind="logo"
                  ></v-img>
                </a>
              </div>

              <ul class="footer__locations nav nav-x-0 nav-white flex-column" v-for="location in locations">
                <li class="nav-item" v-if="location.name">
                  {{ location.name }}
                </li>
                <li class="nav-item" v-if="location.over">{{ location.over }}</li>
                <li class="nav-item" v-if="location.street">
                  {{ location.street }}
                </li>
                <li v-if="location.city" :class="['nav-item footer__address-block', location.postalReversed ? 'is-reversed' : '']">
                  <span class="footer__postal-code">{{ location.postalCode }}</span>
                  <span class="footer__city">{{ location.city }}</span>
                  <span class="footer__country">{{ location.country }}</span>
                </li>
                <li class="nav-item" v-if="location.number">
                  <a class="nav-link media" :href="'tel:' + location.number">
                    <span class="media">
                      <span class="streamline-xs streamline-site-phone mr-3 d-flex"><site-icons icon="site/mail" :no-span="true" /></span>
                      <span class="media-body">
                        {{ location.number }}
                      </span>
                    </span>
                  </a>
                </li>
                <li v-if="dataValue.offices" class="footer__nav-item nav-item">
                  <a class="footer__nav-link nav-link">
                    <icon icon="world" class="footer__nav-icon footer__office-icon" />
                    <div class="footer__offices">
                      <span class="footer__office" v-for="(office, index) in dataValue.offices">
                        {{ office }}<span v-if="index < dataValue.offices.length - 1">,&nbsp;</span>
                      </span>
                    </div>
                  </a>
                </li>
                <li :class="['nav-item', locations.length > 1 ? 'pt-4' : '']" v-if="location.mail">
                  <a class="footer__nav-link nav-link" :href="'mailto:' + location.mail">
                    <span class="d-flex">
                      <span class="streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex"><site-icons icon="site/mail" :no-span="true" /></span>
                      <span class="footer__mail media-body">
                        {{ location.mail }}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <template v-if="!isCorporate" v-for="(brandLogo, index) in dataValue.brandLogos">
                <span v-if="brandLogo.title" class="footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6">{{ brandLogo.title }}</span>
                <a :href="brandLogo.url" :target="brandLogo.target" :class="['footer__brand-logo-link d-block space-top-1', index === 0 ? 'mt-3': '', brandLogo.classes ? brandLogo.classes : 'w-90']">
                  <v-img
                    :cloudinary="true"
                    v-bind="brandLogo"
                  ></v-img>
                </a>
              </template>
            </div>

            <div class="footer__highlights">
              <div class="footer__partners">
                <template v-for="(partner, index) in dataValue.partners">
                  <a :href="partner.url" :target="partner.target" class="footer__partner-images">
                    <v-img
                      :cloudinary="true"
                      v-bind="partner"
                      class="footer__partner-image"
                    ></v-img>
                  </a>
                  <div class="footer__vertical-line" v-if="index < dataValue.partners.length-1"></div>
                </template>
              </div>

              <footer-slider
                :items="dataValue.highlights"
                :bg-color="bgColorRgbaValue"
                v-if="!isCorporate"
              />
            </div>
          </div>
        </div>

        <div v-if="isCorporate" class="footer__content-row row">
          <div class="footer__content col-lg-12">
            <footer-slider
              :items="dataValue.highlights"
              :bg-color="bgColorRgbaValue"
            />
          </div>
        </div>

        <hr class="footer__divider mx-lg-3">

        <div class="mt-3">
          <div class="row align-items-md-center mb-3">
            <div class="col-md-8 mb-4 mb-md-0">
              <!-- Nav Link -->
              <ul class="nav nav-sm nav-white nav-x-0 align-items-center">
                <li class="nav-item mr-6 footer__links" v-for="link in links">
                  <a class="nav-link" :href="link.url" v-bind="link">{{ link.title }}</a>
                </li>
              </ul>
              <!-- End Nav Link -->
            </div>

            <div class="col-md-4 text-md-right">
              <ul class="list-inline mb-0 footer__socials">
                <!-- Social Networks -->
                <li class="list-inline-item" v-for="social in dataValue.socials">
                  <a class="btn btn-xs btn-icon btn-soft-light" :title="social.title" :href="social.url" target="_blank" rel="noopener">
                    <i :class="['fab', social.icon]"></i>
                  </a>
                </li>
                <!-- End Social Networks -->
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="row pb-2">
            <div class="col">
              <p class="text-white small">Copyright © {{ dataValue.copyright }}</p>
            </div>
          </div>
          <!-- End Copyright -->
        </div>
      </div>
    </footer>
  `
}, ra = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? l.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        n.isTrue(this.hover) ? l.HOVERING : "",
        n.isTrue(this.product) ? "header--product" : "",
        n.isTrue(this.closed) ? "" : l.EXPANDED,
        n.isTrue(this.blendMode) ? "header--blending" : "",
        "vue-component"
      ];
    },
    headerContainerClassList() {
      return ["header__container", this.containerClass];
    },
    containerClass() {
      return n.isTrue(this.product) ? "container" : "container-xxl";
    },
    homeObj() {
      var t;
      return (t = this.home) == null ? void 0 : t.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return n.isTrue(this.search);
    },
    metaList() {
      return {
        ...this.meta,
        children: this.meta
      };
    },
    spacerBgColor() {
      return `--color-header-spacer-background: ${this.bgColor ? this.bgColor : "var(--color-header-background)"}; background-color: var(--color-header-spacer-background);`;
    },
    activeNavigation() {
      return this.setActiveLinks(), this.navigation;
    },
    isLight() {
      return n.isTrue(this.light) === !0;
    },
    hasLangSwitch() {
      var t;
      return Object.keys((t = this.home) == null ? void 0 : t.languages).length > 1;
    },
    hasContact() {
      return this.contact;
    },
    hasMeta() {
      return this.meta && this.meta.length > 0;
    }
  },
  mounted() {
    this.bindEvents(), this.setCtaClasses(), this.setLinkWidth();
  },
  updated() {
    this.inUpdate && (this.updateProductListHeight(), this.inUpdate = !1, this.inTransition = !1);
  },
  methods: {
    setLinkWidth() {
      var e;
      const t = this.$refs.link;
      if (t)
        for (let s = 0; s < t.length; s++) {
          const i = t[s], r = (e = i.querySelector(".header__link-text-spacer")) == null ? void 0 : e.clientWidth;
          i.style.setProperty("--header-link-text-width", r + "px");
        }
    },
    showFlyoutBlock(t) {
      return !(t.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return n.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(f.WINDOW_RESIZE, this.handleResize.bind(this));
    },
    handleResize() {
      this.reset(), this.setLinkWidth();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > this.scrollThreshold, this.setCtaClasses();
    },
    reset() {
      this.resetFlyouts(), this.updateProductListHeight(), this.closed = !0;
    },
    handleCloseClick() {
      this.closed = !this.closed, this.closed && this.reset();
    },
    resetFlyouts() {
      Object.keys(this.linkLists).forEach((t) => {
        this.linkLists[t] = !1;
      });
    },
    handleClick(t, e) {
      if (!this.isLowerBreakpoint()) return;
      const s = this.getId(t, e);
      this.linkLists[s] = !this.linkLists[s], this.linkLists[s] && (this.inTransition = !0), this.inUpdate = !0, this.closeAllSiblings(s), this.closeAllChildren();
    },
    closeAllSiblings(t) {
      Object.keys(this.linkLists).forEach((s) => {
        s !== t && (this.linkLists[s] = !1);
      });
    },
    closeAllChildren() {
      const t = new CustomEvent(f.CHILD_HAS_UPDATE, {
        detail: {}
      });
      this.$refs.list.dispatchEvent(t);
    },
    getId(t, e) {
      return `${t.name}_${e}`;
    },
    handleHeaderMouseOver() {
      this.hoverHeader = !0, this.setCtaClasses();
    },
    handleHeaderMouseOut() {
      this.hoverHeader = !1, this.setCtaClasses();
    },
    setCtaClasses() {
      this.isLight && (this.hoverHeader || this.isScrolled ? this.ctaClassList = null : this.ctaClassList = "is-light-lg");
    },
    handleMouseOver(t, e) {
      if (!t.children) return;
      this.resetAllFlyouts(), this.hover = !0;
      const s = this.getLinkRef(e);
      if (!s) return;
      s.classList.add(l.EXPANDED);
      const i = this.getFlyoutRef(e);
      i && (this.flyoutIndex = e, i.classList.add(l.EXPANDED));
    },
    handleMouseOut(t) {
      var i;
      if ((i = t.relatedTarget) != null && i.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.getLinkRef(this.flyoutIndex);
      if (!e) return;
      e.classList.remove(l.EXPANDED);
      const s = this.getFlyoutRef(this.flyoutIndex);
      s && s.classList.remove(l.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const t = this.$refs.languageSwitch;
      t && t.classList.add(l.EXPANDED);
    },
    handleLanguageOut(t) {
      var s;
      if ((s = t.relatedTarget) != null && s.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.$refs.languageSwitch;
      e && e.classList.remove(l.EXPANDED);
    },
    resetAllFlyouts() {
      var t, e;
      (t = this.$refs.link) == null || t.forEach((s) => {
        s.classList.remove(l.EXPANDED);
      }), (e = this.$refs.flyout) == null || e.forEach((s) => {
        s.classList.remove(l.EXPANDED);
      });
    },
    getFlyoutRef(t) {
      return this.getRef("flyout", t);
    },
    getLinkRef(t) {
      return this.getRef("link", t);
    },
    getRef(t, e) {
      const s = this.$refs[t][e];
      if (s)
        return s;
    },
    getHref(t) {
      var e;
      return t.children ? "javascript:void(0);" : (e = t.languages[this.lowerLang]) == null ? void 0 : e.url;
    },
    getTarget(t) {
      var s;
      const e = (s = t.languages[this.lowerLang]) == null ? void 0 : s.target;
      return e || null;
    },
    getNextLanguage() {
      const t = this.home.languages;
      if (!t) return;
      const e = Object.keys(t);
      if (!e.length) return;
      const s = e.filter((i) => i !== this.lowerLang);
      if (s.length)
        return s[0];
    },
    handleLanguageSwitch(t) {
      var i;
      const e = this.getActiveUrlByLang(t), s = e || ((i = this.home.languages[t]) == null ? void 0 : i.url);
      n.storageSave("preferedLanguage", t, !1), document.location.href = s;
    },
    getCurrentPath() {
      return document.location.pathname;
    },
    getActiveUrlByLang(t, e) {
      var c;
      const s = this.getCurrentPath(), i = "/", r = (d, h) => {
        if (!(d != null && d.title)) return;
        let u = d == null ? void 0 : d.url;
        s[(s == null ? void 0 : s.length) - 1] === i && u && u[(u == null ? void 0 : u.length) - 1] !== i && (u = u + i);
        const y = u === s;
        if (e && y) {
          d.active = !0;
          const N = this.getParentLink(h);
          N && (N.active = !0);
        }
        return y;
      }, a = (d, h) => h;
      let o = n.findRecursive(this.navigation, r, a);
      if (o || (o = n.findRecursive(this.meta, r, a)), o || (o = n.findRecursive(this.contact, r, a)), !o) {
        const d = this.getHrefLang(t);
        return d || this.getTranslatedUrl(s, t);
      }
      return (c = o[t]) == null ? void 0 : c.url;
    },
    getTranslatedUrl(t, e) {
      if (this.isBlogTagsUrl(t)) return this.getBlogTagsUrl(e, t);
      const s = this.getFolderSwitchSegment(t);
      return s ? this.getFolderSwitchUrl(e, t, s) : null;
    },
    getFolderSwitchSegment(t) {
      const e = this.home.folderSwitch;
      return e && e.find((i) => t.includes(i)) || null;
    },
    getFolderSwitchUrl(t, e, s) {
      if (!s) return e;
      let i;
      if (t === this.defaultLang) {
        const r = new RegExp(`/${this.lowerLang}/`);
        i = e.replace(r, "/");
      } else
        i = e.replace(s, `${t}/${s}`);
      return i;
    },
    isBlogTagsUrl(t) {
      return /\/blog\/tags/.test(t);
    },
    getBlogTagsUrl(t, e) {
      let s;
      const i = "tags";
      switch (t) {
        case "en":
          s = e.replace(i, `${i}-${t}`);
          break;
        default:
        case this.defaultLang:
          const r = new RegExp(`${i}-..`);
          s = e.replace(r, i);
          break;
      }
      return s + document.location.search;
    },
    getHrefLang(t) {
      const e = document.querySelector(`link[hreflang=${t}]`);
      if (e)
        return e.getAttribute("href");
    },
    getParentLink(t) {
      return this.navigation[t].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(t) {
      var e;
      return ["header__item", (e = t.languages[this.lowerLang]) != null && e.active ? l.ACTIVE : ""];
    },
    isLinkListHidden(t, e) {
      const s = this.getId(t, e);
      return !this.linkLists[s];
    },
    headerLinkClasses(t, e) {
      return this.getListClasses(t, e, ["header__link custom"]);
    },
    headerProductListClasses(t, e) {
      return this.getListClasses(t, e, ["header__product-list", this.inTransition ? l.IN_TRANSITION : ""]);
    },
    getListClasses(t, e, s) {
      const i = this.isLinkListHidden(t, e);
      return [...s, i ? "" : l.EXPANDED];
    },
    updateProductListHeight() {
      const t = this.$refs["product-list"];
      if (t)
        for (let e = 0; e < t.length; e++) {
          const s = t[e], r = !s.classList.contains(l.EXPANDED) || s.style.height !== "" ? "" : s.scrollHeight + "px";
          s.style.height = r;
        }
    },
    navHighlightClasses(t, e) {
      return ["header__nav-highlight custom", this.isLinkListHidden(t, e) ? "is-hidden" : ""];
    },
    hasContactLink(t) {
      var e, s;
      return ((e = this.contact) == null ? void 0 : e.languages) && !((s = t.languages[this.lowerLang]) != null && s.emergency);
    }
  },
  props: {
    home: Object,
    navigation: Object,
    meta: Object,
    light: {
      default: null
    },
    search: {
      default: null
    },
    lang: String,
    contact: Object,
    bgColor: String,
    product: {
      default: null
    },
    button: {
      default: null
    },
    blendMode: {
      default: null
    }
  },
  data() {
    return {
      inUpdate: !1,
      inTransition: !1,
      defaultLang: "de",
      closed: !0,
      hover: !1,
      headerHover: !1,
      flyoutIndex: null,
      linkLists: {},
      scrollThreshold: 10,
      isScrolled: !1,
      ctaClassList: null,
      maxLinkListsInFlyout: 3
    };
  },
  template: `
    <div class="header__spacer" :style="spacerBgColor"></div>
    <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
      <div :class="headerContainerClassList">
        <div class="header__row row">
          <div class="header__col col">
            <div class="header__logo">
              <a :href="homeObj?.url">
                <v-img :img="home?.imgLight" class="header__logo-light" :cloudinary="true" />
                <v-img :img="home?.img" class="header__logo-default" :cloudinary="true" />
              </a>
            </div>
            <div class="header__menu" v-on:click="handleCloseClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav class="header__nav" v-on:mouseout="handleMouseOut">
              <ul class="header__list" ref="list">
                <li :class="headerItemClasses(item)" v-for="(item, index) in activeNavigation">
                  <a :class="headerLinkClasses(item, index)" :href="getHref(item)" :target="getTarget(item)" v-on:click="handleClick(item, index)" v-if="item?.languages" ref="link">
                    <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
                      <span class="header__link-text">{{ item.languages[lowerLang]?.title }}</span>
                      <span class="header__link-text-spacer">{{ item.languages[lowerLang]?.title }}</span>
                      <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
                    </div>
                  </a>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :hidden="isLinkListHidden(item, index)"
                      classes="header__link-list"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div :class="headerProductListClasses(item, index)" ref="product-list" v-else>
                      <a :href="subChild?.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild?.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild?.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>

                  <a :href="item.languages[lowerLang]?.emergency.href" :class="navHighlightClasses(item, index)" v-if="item.languages[lowerLang]?.emergency">
                    <icon :icon="item.languages[lowerLang]?.emergency.icon" size="medium" />
                    {{ item.languages[lowerLang]?.emergency.text }}
                  </a>

                </li>
              </ul>
              <div class="header__footer">
                <link-list
                  :list="metaList"
                  :lang="lowerLang"
                  classes="header__meta-list"
                  :no-animation="true"
                  v-if="hasMeta"
                />

                <div class="header__contact header__contact--mobile" v-if="hasContact">
                  <a class="header__contact-link custom" :href="contact.languages[lowerLang]?.url" v-if="contact?.languages">
                    <div class="header__contact-text">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </div>
                  </a>
                </div>
                <div class="header__button" v-if="button">
                  <cta
                    :text="button.text"
                    :href="button.href"
                    :target="button.target"
                    :skin="button.skin"
                    :classes="ctaClassList"
                  />
                </div>
                <div class="header__language-switch" v-if="hasLangSwitch">
                  <a v-for="(language, key) in home.languages" :class="{'header__language-link custom': true, 'active': key === lowerLang}" v-on:click="handleLanguageSwitch(key)">{{ key }}</a>
                </div>
              </div>
            </nav>
            <div class="header__button" v-if="button">
              <cta
                :text="button.text"
                :href="button.href"
                :target="button.target"
                :skin="button.skin"
                :classes="ctaClassList"
              />
            </div>
            <search v-if="searchValue" class="header__search" language="de" placeholder="search" />
            <div class="header__language-switch" v-on:mouseover="handleLanguageOver" v-on:mouseout="handleLanguageOut" v-if="hasLangSwitch" ref="languageSwitch">
              <span class="header__link-text">{{ lang }}</span>
              <span class="header__link-text-spacer">{{ lang }}</span>
              <icon class="header__link-icon" icon="expand" size="small" />
              <div class="header__language-switch-flyout" ref="languageSwitchFlyout">
                <a v-for="(language, key) in home.languages" :class="{'header__language-link custom': true, 'd-none': key === lowerLang}" v-on:click="handleLanguageSwitch(key)">{{ key }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header__flyout" v-on:mouseout="handleMouseOut">
        <div :class="containerClass">
          <div class="row">
            <div class="col">
              <div class="header__flyout-content" v-for="(item, index) in activeNavigation" ref="flyout">
                <div class="header__flyout-items" v-if="item.children">
                  <figure class="header__flyout-block" v-if="showFlyoutBlock(item.children)">
                    <figcaption class="header__flyout-caption">
                      {{ item.languages[lowerLang]?.title }}
                    </figcaption>
                    <div class="header__flyout-description font-size-1 thin" v-html="item.languages[lowerLang]?.description"></div>
                    <a class="header__link custom" :href="contact.languages[lowerLang]?.url" v-if="hasContactLink(item)">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </a>
                    <div class="header__highlight-cta has-emergency-colors" v-if="item.languages[lowerLang]?.emergency">
                      <cta v-bind="item.languages[lowerLang].emergency" />
                    </div>
                  </figure>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div class="header__product-list is-expanded" v-else>
                      <a :href="subChild.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
}, oa = {
  tagName: "video-frame",
  migrate: !0,
  template: `
                        video-frame
                    `
};
class na {
  static getEmbedSrc(e, s) {
    const i = encodeURIComponent(document.location.origin), r = encodeURIComponent(document.location.href);
    return `https://www.youtube-nocookie.com/embed/${e}?origin=${i}&autoplay=${s}&widget_referrer=${r}&enablejsapi=1&widgetid=1`;
  }
}
const la = {
  tagName: "video-inner",
  computed: {
    videoClass() {
      return [
        "video utility-animation",
        `${this.videoParsed.id ? "video--has-video" : "hover__parent"}`,
        `${this.isVariantRow ? "container" : "d-flex flex-column"}`,
        `${n.isTrue(this.overlapping) ? "video--is-overlapping" : ""}`,
        `${this.spacing ? this.spacing : "space-bottom-1 space-bottom-lg-0"}`,
        `${this.isReversed() ? "" : "h-100"}`,
        `${this.variant ? "video--" + this.variant : ""}`,
        "vue-component"
      ];
    },
    videoPlayerClass() {
      return [
        "video__player fade-in-bottom",
        `${this.variantClasses}`,
        `${this.isPlayed ? "video-player-played is-starting" : ""}`,
        `${this.videoParsed.ctaText ? "video__player--has-link" : ""}`,
        "vue-component"
      ];
    },
    videoContentClass() {
      const t = this.isReversed() ? "pb-4" : "py-4 px-3 p-lg-5";
      return [
        "video__content fade-in-bottom",
        `${this.videoParsed.ctaText ? "hover__parent" : ""}`,
        `${this.isVariantRow ? "col-md-6 " : "flex-grow-1 " + t}`
      ];
    },
    variantClasses() {
      return this.variant ? this.isVariantRow ? "col-md-6 order-md-2" : "" : "bg-dark";
    },
    isVariantRow() {
      return this.variant === "row";
    },
    videoParsed() {
      return typeof this.video != "object" ? JSON.parse(this.video) : this.video;
    },
    onClickVideoContent() {
      return this.videoParsed.ctaText ? "this.querySelector('a').click()" : null;
    },
    onClick() {
      return this.videoParsed.ctaText && this.videoParsed.id ? "this.querySelector('a').click()" : null;
    },
    videoId() {
      return "video-id__" + this.videoParsed.id;
    },
    videoFrameId() {
      return this.videoId + "-frame";
    },
    headlineClasses() {
      return `h4-font-size ${this.isVariantRow ? "mb-0" : ""}`;
    },
    dataOptionsLightBox() {
      const t = {
        selector: `#${this.videoId} .js-video-button`,
        speed: 700,
        buttons: ["fullScreen", "close"],
        media: {
          youtube: {
            url: "https://www.youtube-nocookie.com/embed/$4",
            params: {
              autoplay: 1
            }
          }
        }
      };
      return JSON.stringify(t);
    },
    options() {
      return {
        videoId: this.videoParsed.id,
        parentSelector: "#" + this.videoId,
        targetSelector: "#" + this.videoFrameId,
        isAutoplay: !0
      };
    },
    dataOptionsRegular() {
      return JSON.stringify(this.options);
    },
    dataSrc() {
      return "https://www.youtube-nocookie.com/" + this.videoParsed.id;
    },
    embedSrc() {
      return na.getEmbedSrc(
        this.videoParsed.id,
        this.options.isAutoplay
      );
    },
    dataCaption() {
      return this.videoParsed.headline;
    }
  },
  mounted() {
    var t, e, s;
    (s = (e = (t = $ == null ? void 0 : $.HSCore) == null ? void 0 : t.components) == null ? void 0 : e.HSFancyBox) == null || s.init($(this.$refs.lightbox));
  },
  methods: {
    isReversed() {
      return this.variant === "reversed";
    },
    handleButtonClick() {
      this.isPlayed = !0;
    },
    handleClose() {
      this.isPlayed = !1;
    }
  },
  data() {
    return {
      isPlayed: !1
    };
  },
  props: {
    video: Object,
    variant: String,
    spacing: String,
    overlapping: String,
    level: {
      default: "h4"
    }
  },
  template: `
    <div :class="videoClass" :onclick="onClick">
      <wrapper class="row align-items-end no-gutters" :hideContainer="!isVariantRow">
        <div :class="videoPlayerClass" :id="videoId" data-utility-animation-step="1">
          <template v-if="videoParsed.lightbox">
            <a class="js-video-button media-viewer video-player-btn" href="javascript:;" :data-src="dataSrc" :data-caption="dataCaption" :data-hs-fancybox-options="dataOptionsLightBox" ref="lightbox">
              <div class="img-fluid" >
                <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
              </div>
              <span class="media-viewer-container">
                <span class="video-player-icon">
                  <i class="fas fa-play"></i>
                </span>
              </span>
            </a>
          </template>
          <template v-else>
            <div class="img-fluid video-player-preview">
              <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt">
            </div>
            <template v-if="videoParsed.id" >
              <a class="js-inline-video-player video__player-btn video-player-btn video-player-centered" href="javascript:;" :data-hs-video-player-options="dataOptionsRegular" ref="video-player" :onclick="handleButtonClick">
                <span class="video-player-icon video__player-icon">
                  <i class="fas fa-play"></i>
                </span>
              </a>
            </template>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe v-if="isPlayed" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" :src="embedSrc" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"></iframe>
            </div>
          </template>
        </div>
        <template v-if="videoParsed.headline">
          <div :class="videoContentClass" :onclick="onClickVideoContent" data-utility-animation-step="1">
            <div class="row no-gutters d-flex flex-wrap">
              <template v-if="videoParsed.logo">
                <div class="video__logo col-lg-5 order-lg-2 pb-3 pb-lg-0">
                  <v-img :img="videoParsed.logo" :cloudinary="true" :alt="videoParsed.logoAlt">
                </div>
                <div class="col-lg-7 order-lg-1">
                  <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses">
                </div>
              </template>
              <template v-else>
                <div class="col-lg-12 order-lg-1">
                  <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses">
                </div>
              </template>
              <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.text" v-html="videoParsed.text"></div>
              <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.date">
                {{ videoParsed.date }}
              </div>
            </div>
            <div class="pt-4 pt-lg-6 pb-6" v-if="videoParsed.ctaText">
              <cta :text="videoParsed?.ctaText" :href="videoParsed?.ctaHref" :link="videoParsed?.link" :target="videoParsed?.target" :type="videoParsed?.type">
            </div>
          </div>
        </template>
      </wrapper>
    </div>
    `
}, Z = {
  min_width: 320,
  max_width: 1200,
  fallback_max_width: 1200,
  steps: 5,
  sizes: "100vw",
  figure: "auto",
  attributes: {},
  width_height: !0,
  height: !1,
  crop: "limit",
  aspect_ratio: !1,
  gravity: !1,
  zoom: !1,
  x: !1,
  y: !1,
  format: !1,
  fetch_format: "auto",
  quality: "auto",
  radius: !1,
  angle: !1,
  effect: !1,
  opacity: !1,
  border: !1,
  background: !1,
  overlay: !1,
  underlay: !1,
  default_image: !1,
  delay: !1,
  color: !1,
  color_space: !1,
  dpr: !1,
  page: !1,
  density: !1,
  flags: !1,
  transformation: !1
}, ca = {
  height: "h",
  crop: "c",
  aspect_ratio: "ar",
  gravity: "g",
  zoom: "z",
  x: "x",
  y: "y",
  fetch_format: "f",
  quality: "q",
  radius: "r",
  angle: "a",
  effect: "e",
  opacity: "o",
  border: "bo",
  background: "b",
  overlay: "l",
  underlay: "u",
  default_image: "d",
  delay: "dl",
  color: "co",
  color_space: "cs",
  dpr: "dpr",
  page: "pg",
  density: "dn",
  flags: "fl",
  transformation: "t"
}, K = {
  cloud_name: "c4a8",
  developer_mode: !1,
  origin_url: "",
  verbose: !1,
  presets: {
    avatar: {
      fallback_max_width: 300,
      min_width: 100,
      max_width: 300,
      steps: 2,
      sizes: "(min-width: 50rem)",
      figure: "never",
      loading: "auto"
    },
    textImageFloatingSmall: {
      "min-width": 320,
      "max-width": 1e3,
      steps: 3,
      sizes: "(min-width: 766px) 766px, 991px",
      figure: "never",
      loading: "auto"
    },
    textImageFloating: {
      "min-width": 460,
      "max-width": 1e3,
      steps: 2,
      sizes: "(min-width: 1200px) 1200px, 1300px",
      figure: "never",
      loading: "auto"
    },
    person: {
      "min-width": 50,
      "max-width": 200,
      steps: 3,
      sizes: "(min-width: 8rem) 8rem, 90vw",
      figure: "never",
      loading: "auto"
    },
    default: {
      min_width: 320,
      max_width: 1600,
      fallback_max_width: 800,
      steps: 5,
      sizes: "(min-width: 50rem) 50rem, 90vw",
      figure: "never",
      loading: "auto"
    },
    fullscreen4k: {
      min_width: 480,
      max_width: 3840,
      fallback_max_width: 3840,
      steps: 6,
      sizes: "(max-width: 30rem) 40rem, (max-width: 40rem) 50rem, (max-width: 50rem) 60rem, (max-width: 70rem) 80rem, (max-width: 90rem) 100rem, 200vw",
      figure: "never",
      loading: "auto"
    },
    thumb: {
      min_width: 320,
      max_width: 1600,
      fallback_max_width: 800,
      steps: 5,
      sizes: "(min-width: 50rem) 50rem, 90vw",
      figure: "never",
      loading: "auto"
    },
    cardSmall: {
      min_width: 600,
      max_width: 800,
      steps: 2,
      sizes: "(min-width: 50rem)",
      figure: "never",
      loading: "auto"
    },
    postTeaser: {
      min_width: 400,
      max_width: 800,
      steps: 2,
      sizes: "(min-width: 50rem)",
      figure: "never",
      loading: "auto"
    },
    author: {
      min_width: 100,
      max_width: 300,
      steps: 2,
      sizes: "(min-width: 50rem)",
      figure: "never",
      loading: "auto"
    },
    logoList: {
      min_width: 200,
      max_width: 500,
      fallback_max_width: 500,
      steps: 4,
      sizes: "(min-width: 50rem) 50rem, 90vw",
      figure: "never",
      loading: "auto"
    },
    eventThumb: {
      min_width: 300,
      max_width: 800,
      steps: 3,
      sizes: "(min-width: 50rem)",
      figure: "never",
      loading: "auto"
    }
  }
}, da = {
  heroStudy: {
    srcSets: [
      {
        params: "c_fill,g_face,h_600,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_800,w_800,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: "c_fill,g_face,h_600,w_1000,x_0,y_0/",
        media: "(max-width: 1200px)"
      },
      {
        params: "c_fill,g_face,h_600,w_1350,x_0,y_0/"
      }
    ]
  },
  testimonialTeaser16x9: {
    srcSets: [
      {
        params: "c_fill,g_face,h_281,w_500,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_225,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: "c_fill,g_face,h_388,w_600,x_0,y_0/",
        media: "(max-width: 1200px)"
      },
      {
        params: "c_fill,g_face,h_450,w_800,x_0,y_0/"
      }
    ]
  },
  testimonialTeaser4xx3: {
    srcSets: [
      {
        params: "c_fill,g_face,h_281,w_500,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_225,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: "c_fill,g_face,h_600,w_800,x_0,y_0/",
        media: "(max-width: 1200px)"
      },
      {
        params: "c_fill,g_face,h_600,w_800,x_0,y_0/"
      }
    ]
  },
  square: {
    ratioClasses: "ratio-1x1",
    srcSets: [
      {
        params: "c_fill,g_face,h_600,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_400,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: "c_fill,g_face,h_600,w_600,x_0,y_0/"
      }
    ]
  },
  testimonial: {
    srcSets: [
      {
        params: "c_fill,g_face,h_600,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_400,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: ""
      }
    ]
  },
  event: {
    srcSets: [
      {
        params: "c_fill,g_face,h_400,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_300,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: ""
      }
    ]
  },
  eventTeaser: {
    srcSets: [
      {
        params: "c_fill,g_face,h_450,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_450,w_600,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: ""
      }
    ]
  },
  cardSmall: {
    srcSets: [
      {
        params: "c_fill,g_face,h_450,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_300,w_400,x_0,y_0/",
        media: "(max-width: 765px)"
      },
      {
        params: "c_fill,g_face,h_600,w_800,x_0,y_0/"
      }
    ]
  },
  textImageFloating: {
    srcSets: [
      {
        params: "c_fill,g_xy_center,h_1000,w_490,x_870,y_0/",
        media: "(max-width: 1199px)"
      },
      {
        params: "c_fill,g_face,h_1200,w_800,x_0,y_0/"
      }
    ]
  },
  textImageFloatingSmallSquare: {
    ratioClasses: "ratio-1x1",
    srcSets: [
      {
        params: "c_fill,g_face,h_500,w_500,x_0,y_0/"
      }
    ]
  },
  textImageFloatingSmall: {
    ratioClasses: "ratio-2x1",
    srcSets: [
      {
        params: "c_fill,g_face,h_500,w_1000,x_0,y_0/"
      }
    ]
  },
  postTeaser: {
    ratioClasses: "ratio-1x1",
    srcSets: [
      {
        params: "c_fill,g_face,h_600,w_600,x_0,y_0/",
        media: "(max-width: 576px)"
      },
      {
        params: "c_fill,g_face,h_500,w_500,x_0,y_0/"
      }
    ]
  }
}, lt = "https://res.cloudinary.com/c4a8/image/upload/", ha = {
  name: "VImg",
  tagName: "v-img",
  data() {
    return {
      dimensions: {
        naturalHeight: null,
        naturalWidth: null
      },
      dimStack: {},
      previousImg: null,
      srcset: "",
      noCloudinary: null,
      sizes: null
    };
  },
  computed: {
    classList() {
      return ["v-img", "vue-component", this.classListComponent];
    },
    classListComponent() {
      return [
        this.isSvg() ? "is-svg" : "",
        this.class ? this.class : "",
        this.canGenerateSrcSet() ? "no-small img-responsive" : ""
      ];
    },
    isLottie() {
      return typeof this.jsonLottieData == "object";
    },
    jsonLottieData() {
      if (this.lottie)
        return typeof this.lottie != "object" ? n.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? n.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return n.isTrue(this.cloudinary);
    },
    source() {
      return this.isCloudinary ? this.noCloudinary || this.getCloudinaryLink() : this.noCloudinary;
    },
    loading() {
      return this.lazy ? "lazy" : null;
    },
    crossOriginValue() {
      return this.isCloudinary ? this.crossorigin ? this.crossorigin : "anonymous" : null;
    },
    hasPictureTag() {
      return this.isCloudinary && this.imgSrcSets;
    },
    pictureWrapperClassList() {
      var t;
      return ["img__picture-wrapper", (t = this.imgSrcSetValue) == null ? void 0 : t.ratioClasses];
    },
    imgSrcSetValue() {
      return da[this.imgSrcSets];
    },
    imgSrcSetSources() {
      var t, e;
      return (e = (t = this.imgSrcSetValue) == null ? void 0 : t.srcSets) == null ? void 0 : e.filter((s) => s.media);
    },
    imgSrcSetImg() {
      var e;
      const t = (e = this.imgSrcSetValue) == null ? void 0 : e.srcSets;
      return t ? this.getCloudinaryBasePathLink(t[t.length - 1]) : null;
    }
  },
  watch: {
    animated(t, e) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = Z.sizes);
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const t = this.getPreset(), e = this.getTransformationString(t);
      return { preset: t, transformationsString: e };
    },
    getPreset() {
      try {
        return this.preset ? K.presets && K.presets[this.preset] ? Object.assign(Z, K.presets[this.preset]) : Z : { ...Z, ...K.presets.default };
      } catch (t) {
        console.error(t);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var t;
      return n.isTestingStorybook() ? this.img : ((t = this.img) == null ? void 0 : t.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(t) {
      return `${lt}${t ? t.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: t, transformationsString: e } = this.getSetup(), s = /w_\d+/.test(this.img), i = lt + e, r = `/${this.img}`;
      return s ? `${i}${r}` : `${i},w_${t.fallback_max_width}${r}`;
    },
    loadImage(t) {
      if (!this.canGenerateSrcSet()) return;
      const e = document.createElement("img");
      e.onload = () => {
        const s = e == null ? void 0 : e.naturalHeight, i = e == null ? void 0 : e.naturalWidth;
        let r;
        if (this.isSvg())
          r = {
            naturalHeight: s,
            naturalWidth: i
          };
        else {
          const { preset: a, transformationsString: o } = this.getSetup();
          this.sizes = a == null ? void 0 : a.sizes, r = {
            naturalHeight: s || (a == null ? void 0 : a.fallback_max_width),
            naturalWidth: i || (a == null ? void 0 : a.fallback_max_width)
          }, s && i && !this.isSvg() && this.buildSrcSet(a, o);
        }
        this.dimensions = r;
      }, e.src = t || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(t) {
      const e = [];
      for (const [i, r] of Object.entries(ca))
        t[i] && e.push(`${r}_${t[i]}`);
      return e.length > 0 ? e.join(",") : "";
    },
    buildSrcSet(t, e) {
      const s = [], i = t.steps, r = t.min_width, o = (t.max_width - r) / (i - 1), { naturalWidth: c } = this.dimensions;
      for (let d = 1; d <= i; d++) {
        const h = r + (d - 1) * o, u = h <= c, y = u ? h : c, q = `${this.hasPictureTag ? this.imgSrcSetImg : `${lt}${e},w_${y}/${this.img}`} ${y}w`;
        if (s.push(q), !u) break;
      }
      this.srcset = c < r ? "" : s.join(`, 
`);
    },
    isGif() {
      return this.img ? this.img.split(".")[1].toLowerCase() === "gif" : void 0;
    },
    isSvg() {
      var e;
      return n.getExtension(this.getCloudinaryBasePathLink()).toLowerCase() === "svg" || ((e = this.img) == null ? void 0 : e.indexOf(".svg")) !== -1;
    }
  },
  props: {
    // TODO handle img src set and correct all the places where it is not used correctly
    imgSrcSets: {
      type: String,
      default: null
    },
    img: String,
    alt: String,
    cloudinary: Boolean,
    crossorigin: String,
    lazy: Boolean,
    class: String,
    preset: String,
    lottie: Object,
    lottieSettings: Object,
    animated: Boolean
  },
  template: `
    <template v-if="hasPictureTag">
      <div :class="pictureWrapperClassList">
        <picture>
          <source v-for="srcSet in imgSrcSetSources" :key="srcSet.params" :media="srcSet.media" :srcset="getCloudinaryBasePathLink(srcSet)" />
          <img @load="loadImage(imgSrcSetImg)" ref="image" :src="imgSrcSetImg" :loading="loading" :class="classList" :alt="alt" :width="dimensions.naturalWidth" :height="dimensions.naturalHeight" :srcset="srcset" :sizes="sizes" :crossorigin="crossOriginValue">
        </picture>
      </div>
    </template>
    <lottie v-else-if="isLottie" :data="jsonLottieData" :class="classListComponent" v-bind="jsonLottieSettingsData" />
    <img v-else @load="loadImage()" ref="image" :src="source" :loading="loading" :class="classList" :alt="alt" :width="dimensions.naturalWidth" :height="dimensions.naturalHeight" :srcset="srcset" :sizes="sizes" :crossorigin="crossOriginValue">
  `
}, pa = {
  tagName: "world",
  computed: {
    style() {
      return "scale(var(--icon-scale));";
    },
    stroke() {
      return this.color;
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 20 20">
      <g clip-path="url(#icon-world-mask)">
        <path d="M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.418945 9.57001H19.5831" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="icon-world-mask">
        <rect width="20" height="20" :fill="stroke" />
      </clipPath>
      </defs>
    </svg>
  `
}, ua = {
  tagName: "wrapper",
  computed: {
    classList() {
      return ["wrapper vue-component", this.classes ? this.classes : null, this.hideContainerClass ? "" : "container"];
    }
  },
  props: {
    hideContainer: {
      default: !1
    },
    hideContainerClass: {
      default: !1
    },
    classes: {
      default: ""
    }
  },
  template: `
    <template v-if="!hideContainer">
      <div :class="classList">
        <slot></slot>
      </div>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  `
}, ma = {
  tagName: "wrapper-slot-items",
  props: {
    items: {
      default: []
    }
  },
  render() {
    const t = window.vueH, e = this.items(), s = typeof e[0].type == "symbol" ? e[0].children : e, i = [];
    return s.length === 0 ? null : (s.forEach((r) => {
      const a = t("div", { class: "wrapper-slot-items__item" }, r);
      i.push(a);
    }), i);
  }
}, ga = {
  tagName: "x-mark",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    foregroundStroke() {
      return this.color ? this.color : "#FF0000";
    }
  },
  props: {
    settings: Object,
    color: String
  },
  template: `
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_958)">
        <path d="M2.72115 2.72115L22.2692 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2692 2.72115L2.72115 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.40385 2.72115L20.9519 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9519 2.72115L1.40385 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_958">
        <rect width="28" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `
}, ya = {
  install(t) {
    t.component("Accordion", Ft), t.component("AdBlockInfo", Wt), t.component("Arrow", Gt), t.component("ArrowCurl", Jt), t.component("ArrowExternal", Zt), t.component("ArrowNarrow", Kt), t.component("AsideWrapper", Xt), t.component("AuthorAvatar", Yt), t.component("AuthorHeader", Qt), t.component("Authors", te), t.component("Awards", ee), t.component("BackToTop", se), t.component("Badge", ie), t.component("Bin", ae), t.component("Blog", re), t.component("BlogRecent", ne), t.component("Card", ce), t.component("Carousel", he), t.component("Check", pe), t.component("CheckCard", ue), t.component("CheckMark", me), t.component("Close", ge), t.component("ComputerShield", fe), t.component("Contact", ve), t.component("ContentScroller", ye), t.component("Cta", be), t.component("CtaList", Ce), t.component("Dropdown", ke), t.component("EmailActionUnread", we), t.component("Emergency", _e), t.component("Event", xe), t.component("EventOverview", Le), t.component("EventTeaser", De), t.component("Expand", Te), t.component("FabButton", Ee), t.component("FabHint", Me), t.component("Faq", Ne), t.component("FeatureGrid", Pe), t.component("FeatureGridItem", Ie), t.component("FeatureList", Ae), t.component("FilterBar", $e), t.component("FormAttachments", qe), t.component("FormCheckbox", Oe), t.component("FormCheckboxes", Be), t.component("FormFields", Fe), t.component("FormRadio", Ve), t.component("FormRadios", Re), t.component("FormSelect", ze), t.component("Formular", je), t.component("Globals", Qe), t.component("GoogleMap", ts), t.component("GoogleMapEntry", es), t.component("Grid", ss), t.component("GridList", is), t.component("Hand", as), t.component("Headline", rs), t.component("HeadlineRow", os), t.component("Hero", ls), t.component("HeroTextImage", cs), t.component("Icon", ds), t.component("IconBlocks", hs), t.component("ImageBlock", ps), t.component("ImageCredits", us), t.component("ImageList", ms), t.component("Img", gs), t.component("ImgFilter", fs), t.component("Info", vs), t.component("IntroText", ys), t.component("JobList", bs), t.component("JobListDetail", Cs), t.component("JobListEntry", Ss), t.component("LBlock", ks), t.component("LetterSwitcher", ws), t.component("LinkList", _s), t.component("List", xs), t.component("ListContainer", Ls), t.component("ListView", Ds), t.component("LogoList", Es), t.component("Lottie", Ms), t.component("Magnifier", Ns), t.component("Mail", Ps), t.component("Meerkat", Is), t.component("Menu", As), t.component("Minus", $s), t.component("Modal", qs), t.component("ModalApplication", Os), t.component("PeopleSquare", Bs), t.component("PersonQuote", Fs), t.component("Phone", Vs), t.component("PhoneCharger", Rs), t.component("PhoneMail", zs), t.component("Pin", js), t.component("Plus", Us), t.component("PlusMinus", Hs), t.component("PostTeaser", Ws), t.component("PricingProduct", Gs), t.component("ProductBlocks", Js), t.component("ProductStage", Zs), t.component("Quotes", Ks), t.component("Rocket", Xs), t.component("SBlock", Ys), t.component("Screenshot", Qs), t.component("ScrollArrow", ti), t.component("Search", ei), t.component("Services", si), t.component("Shape", ii), t.component("ShapeAnimation", ai), t.component("ShapeCircleWithinSquare", oi), t.component("ShapeFastForward", li), t.component("ShapeFourSquares", di), t.component("ShapeFourTriangles", pi), t.component("ShapeHalfSquare", gi), t.component("ShapeMovingEye", vi), t.component("ShapeSecurityEye", bi), t.component("ShapeSemiCircle", ki), t.component("ShapeSquareCircle", xi), t.component("ShapeTrianglesToCenter", Di), t.component("SiteIcons", Ti), t.component("Slider", Mi), t.component("SlotItems", Ni), t.component("Smile", Pi), t.component("Socials", Ii), t.component("Square", Ai), t.component("StepList", $i), t.component("StrategySplit", qi), t.component("SuccessStory", Oi), t.component("SvgShape", Bi), t.component("TabList", Fi), t.component("Tag", Vi), t.component("TagCloud", Ri), t.component("TBlock", zi), t.component("Teaser", ji), t.component("TestimonialList", Ui), t.component("TestimonialsDetail", Hi), t.component("TestimonialsSlider", Wi), t.component("TestimonialTeaser", Gi), t.component("TextAnimation", Ji), t.component("TextIconAnimation", Zi), t.component("TextImage", Ki), t.component("TextImageList", Xi), t.component("TextTeaser", Yi), t.component("TileView", Qi), t.component("Timeline", ea), t.component("ToggleForm", sa), t.component("VFooter", aa), t.component("VHeader", ra), t.component("VideoFrame", oa), t.component("VideoInner", la), t.component("VImg", ha), t.component("World", pa), t.component("Wrapper", ua), t.component("WrapperSlotItems", ma), t.component("XMark", ga);
  }
};
export {
  Re as $,
  Ft as A,
  ct as B,
  ce as C,
  ke as D,
  f as E,
  D as F,
  _e as G,
  xe as H,
  Le as I,
  De as J,
  Te as K,
  Ee as L,
  Q as M,
  Me as N,
  Ne as O,
  Pe as P,
  Ie as Q,
  Ae as R,
  l as S,
  n as T,
  $e as U,
  qe as V,
  Oe as W,
  Be as X,
  na as Y,
  Fe as Z,
  Ve as _,
  Wt as a,
  pi as a$,
  ze as a0,
  je as a1,
  Qe as a2,
  ts as a3,
  es as a4,
  ss as a5,
  is as a6,
  as as a7,
  rs as a8,
  os as a9,
  $s as aA,
  qs as aB,
  Os as aC,
  Bs as aD,
  Fs as aE,
  Vs as aF,
  Rs as aG,
  zs as aH,
  js as aI,
  Us as aJ,
  Hs as aK,
  Ws as aL,
  Gs as aM,
  Js as aN,
  Zs as aO,
  Ks as aP,
  Xs as aQ,
  Ys as aR,
  Qs as aS,
  ti as aT,
  ei as aU,
  si as aV,
  ii as aW,
  ai as aX,
  oi as aY,
  li as aZ,
  di as a_,
  ls as aa,
  cs as ab,
  ds as ac,
  hs as ad,
  ps as ae,
  us as af,
  ms as ag,
  gs as ah,
  fs as ai,
  vs as aj,
  ys as ak,
  bs as al,
  Cs as am,
  Ss as an,
  ks as ao,
  ws as ap,
  _s as aq,
  xs as ar,
  Ls as as,
  Ds as at,
  Es as au,
  Ms as av,
  Ns as aw,
  Ps as ax,
  Is as ay,
  As as az,
  Gt as b,
  gi as b0,
  vi as b1,
  bi as b2,
  ki as b3,
  xi as b4,
  Di as b5,
  Ti as b6,
  Mi as b7,
  Ni as b8,
  Pi as b9,
  la as bA,
  ha as bB,
  pa as bC,
  ua as bD,
  ma as bE,
  ga as bF,
  ya as bG,
  Ii as ba,
  Ai as bb,
  $i as bc,
  qi as bd,
  Oi as be,
  Bi as bf,
  Fi as bg,
  Vi as bh,
  Ri as bi,
  zi as bj,
  ji as bk,
  Ui as bl,
  Hi as bm,
  Wi as bn,
  Gi as bo,
  Ji as bp,
  Zi as bq,
  Ki as br,
  Xi as bs,
  Yi as bt,
  Qi as bu,
  ea as bv,
  sa as bw,
  aa as bx,
  ra as by,
  oa as bz,
  Jt as c,
  Zt as d,
  Kt as e,
  Xt as f,
  Yt as g,
  Qt as h,
  te as i,
  ee as j,
  se as k,
  ie as l,
  ae as m,
  re as n,
  ne as o,
  he as p,
  pe as q,
  ue as r,
  me as s,
  ge as t,
  fe as u,
  ve as v,
  ye as w,
  be as x,
  Ce as y,
  we as z
};
