var bt = Object.defineProperty;
var xt = (s, t, e) => t in s ? bt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var y = (s, t, e) => xt(s, typeof t != "symbol" ? t + "" : t, e);
import { openBlock as n, createElementBlock as h, Fragment as L, createBlock as C, resolveDynamicComponent as Lt, normalizeClass as v, withCtx as et, createElementVNode as l, toDisplayString as S, createCommentVNode as f, createTextVNode as it, resolveComponent as _t, normalizeStyle as W, createVNode as b, mergeProps as B, renderList as E } from "vue";
const w = class w {
  static isInViewportPercent(t, e) {
    const r = t.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, o = { x: r.x, y: r.y, width: r.width, height: r.height }, d = { x: 0, y: 0, width: i, height: a }, g = o.width * o.height, p = w.intersection(o, d);
    return e <= p / g * 100;
  }
  static getScrollTop(t) {
    if (!t) return;
    const e = document.querySelector("header"), r = e ? (e == null ? void 0 : e.offsetHeight) + 40 : 0;
    return t.getBoundingClientRect().top - r + window.scrollY;
  }
  static scrollIntoView(t, e) {
    t && window.scrollTo({
      top: w.getScrollTop(t),
      behavior: e ? "smooth" : "auto"
    });
  }
  static getLang() {
    return (document.querySelector("html").getAttribute("lang") || this.defaultLang).toLowerCase();
  }
  static isNotDefaultLang() {
    return this.getLang() !== this.defaultLang;
  }
  static scrollToTop() {
    w.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(t) {
    return w.getParent(t, ".is-component");
  }
  static getParent(t, e) {
    var a;
    const r = t.parentNode;
    return r === null || r.tagName === "body" ? null : (a = r.parentNode) != null && a.querySelector(e) ? r : w.getParent(r, e);
  }
  static append(t, e) {
    if (t) {
      const r = document.createElement("div");
      r.innerHTML = e != null && e.nodeType ? e.outerHTML : e;
      const a = r == null ? void 0 : r.children[0];
      if (a)
        return t.appendChild(a);
    }
    return null;
  }
  static replace(t, e) {
    t && e && (t.innerHTML = e.innerHTML);
  }
  static generateUrl(t, e, r) {
    let a;
    return t && e && (a = t.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), a = e + w.urlSeperator + a.replace(/-+$/, "") + "-" + r), a;
  }
  static toBase64(t) {
    return new Promise((e, r) => {
      const a = new FileReader();
      a.readAsDataURL(t), a.onload = () => {
        const i = a.result.split(",")[1];
        e(i);
      }, a.onerror = (i) => r(i);
    });
  }
  static toSize(t) {
    const e = ["Bytes", "KB", "MB", "GB", "TB"];
    if (t == 0) return "0 Byte";
    const r = parseInt(Math.floor(Math.log(t) / Math.log(1024)));
    return (t / Math.pow(1024, r)).toFixed(1) + " " + e[r];
  }
  static camalCaseToSnakeCase(t) {
    return t.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
  }
  static animateValue(t, e, r, a, i = w.priceFormatter) {
    let o = null;
    const d = (g) => {
      o || (o = g);
      const p = Math.min((g - o) / a, 1), c = p * (r - e) + e, x = i.format(c);
      t.innerHTML = x, p < 1 && window.requestAnimationFrame(d);
    };
    window.requestAnimationFrame(d);
  }
  static isOutsideOf(t, e) {
    const r = e.composedPath ? e.composedPath() : e.path;
    return r ? !r.some((a) => a.className && a.className.includes && a.className.includes(t)) : !1;
  }
  static getExtension(t) {
    return t.split(".").pop();
  }
  static validateVueProps(t) {
    var i;
    const e = (i = t == null ? void 0 : t.$) == null ? void 0 : i.propsOptions[0], r = t == null ? void 0 : t.$props, a = { props: {} };
    return Object.keys(r).map((o) => {
      let d = r[o];
      d === "" && (d = e[o].default), a.props[o] = d;
    }), a;
  }
  static isTrue(t) {
    return t === !0 || t === "true";
  }
  static capitalize(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  static sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  static randomRange(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t);
  }
  static uuid() {
    const t = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), e = w.randomRange(0, 8), r = w.randomRange(0, 16);
    return "u" + [t.substring(e, e + 8), t.substring(r, r + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(t) {
    let e = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const r = w.getBreakpoint();
    return e.indexOf(t) >= e.indexOf(r);
  }
  static isUpperBreakpoint() {
    return !w.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(t) {
    let e;
    const r = t.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), a = t.match(/youtu\.be\/(.{11})/);
    return r ? e = r[2] : a && (e = a[1]), `https://i1.ytimg.com/vi/${e}/maxresdefault.jpg`;
  }
  static truncateWords(t, e) {
    if (!t) return;
    const r = t.split(" "), a = r.slice(0, e).join(" ");
    return r.length > e ? a + " ..." : a;
  }
  static stripHtml(t) {
    if (t)
      return t.replace(new RegExp(/<.*?>/g), "");
  }
  static isGermanDate(t) {
    return !!t.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
  }
  static isStorybook() {
    return window.STORYBOOK_ENV === "HTML";
  }
  static isTestingStorybook() {
    return document.location.pathname.indexOf(w.storybookPath) !== -1;
  }
  static getSiteAssetPath(t) {
    return w.isTestingStorybook() ? `${w.storybookPath}${t}` : t;
  }
  static getAssetPath(t) {
    return w.isStorybook() ? `../assets/${t}` : `/_includes/shared-components/assets/${t}`;
  }
  static findRecursive(t, e, r) {
    let a = !1, i, o, d;
    function g(p, c, x, k) {
      if (!a) {
        if (c(p, o)) {
          a = !0, i = k(p, x);
          return;
        }
        for (let T in p)
          typeof p[T] == "object" && (p === d && (o = T), g(p[T], c, p, k));
      }
    }
    return d = t, g(t, e, t, r), i;
  }
  static storageSave(t, e, r = !0) {
    localStorage.setItem(w.storagePrefix + t, r ? JSON.stringify(e) : e);
  }
  static storageGet(t) {
    return localStorage.getItem(w.storagePrefix + t);
  }
  static getJSON(t) {
    var e;
    if (t && typeof t == "object" && ((e = Object.keys(t)) == null ? void 0 : e.length) > 0) return t;
    if (t && typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        console.error("Error parsing JSON:", t);
        return;
      }
  }
  static getElementBgColor(t) {
    if (!t || t.nodeType !== Node.ELEMENT_NODE) return;
    const e = window.getComputedStyle(t).backgroundColor;
    return e === "rgba(0, 0, 0, 0)" ? null : e;
  }
  static isValidTimeFormat(t) {
    return /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(t);
  }
  static standardizeTimeFormat(t) {
    if (!this.isValidTimeFormat(t)) return t;
    const e = "Uhr";
    let r = t.split("-"), a = r[0].trim();
    a.includes(":") || (a += ":00"), a.length === 4 && (a = "0" + a);
    let i = r[1].trim().replace(` ${e}`, "");
    return i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i), `${a} - ${i} ${e}`;
  }
  static convertToDate(t) {
    const e = t.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (e) {
      const a = parseInt(e[1], 10), i = parseInt(e[2], 10) - 1, o = parseInt(e[3], 10);
      return new Date(o, i, a);
    }
    return null;
  }
  static XMLtoJSON(t) {
    let e = {};
    if (t.nodeType === Node.ELEMENT_NODE) {
      if (t.attributes.length > 0) {
        e["@attributes"] = {};
        for (let r = 0; r < t.attributes.length; r++) {
          const a = t.attributes.item(r);
          e["@attributes"][a.nodeName] = a.nodeValue;
        }
      }
    } else (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.CDATA_SECTION_NODE) && (e = t.nodeValue);
    if (t.hasChildNodes())
      for (let r = 0; r < t.childNodes.length; r++) {
        const a = t.childNodes.item(r), i = a.nodeName;
        if (typeof e[i] > "u")
          e[i] = this.XMLtoJSON(a);
        else {
          if (typeof e[i].push > "u") {
            const o = e[i];
            e[i] = [], e[i].push(o);
          }
          e[i].push(this.XMLtoJSON(a));
        }
      }
    return e;
  }
  static hasFontSizeClass(t) {
    return t.indexOf("-font-size") !== -1 || t.indexOf("font-size-") !== -1;
  }
  static red(t) {
    return parseInt(t.substring(1, 3), 16);
  }
  static green(t) {
    return parseInt(t.substring(3, 5), 16);
  }
  static blue(t) {
    return parseInt(t.substring(5, 7), 16);
  }
  static hexToRgb(t) {
    let e;
    if (t.startsWith("--") || t.startsWith("var(")) {
      const d = t.replace(/--|var\(/, "").replace(/\)$/, ""), g = getComputedStyle(document.documentElement), p = 4;
      e = g.getPropertyValue(d).trim(), e.length === p && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);
    }
    const r = e || t, a = w.red(r), i = w.green(r), o = w.blue(r);
    return `${a}, ${i}, ${o}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
y(w, "defaultLang", "de"), y(w, "urlSeperator", "#"), y(w, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), y(w, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
y(w, "storybookPath", "/shared-components"), y(w, "decodeHTML", (t) => new DOMParser().parseFromString(t, "text/html").documentElement.textContent), y(w, "intersection", (t, e) => {
  const r = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), a = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return r * a;
}), y(w, "debounce", function(t, e, r) {
  let a;
  return function() {
    const i = this, o = arguments;
    var d = function() {
      a = null, r || t.apply(i, o);
    }, g = r && !a;
    clearTimeout(a), a = setTimeout(d, e), g && t.apply(i, o);
  };
});
let u = w;
const rt = {
  tagName: "icon",
  data() {
    return u.validateVueProps(this);
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
      var s;
      switch (this.props.size) {
        case "xxl":
          s = "200px";
          break;
        case "xl":
          s = "120px";
          break;
        case "medium":
          s = "28px";
          break;
        case "small":
          s = "18px";
          break;
        case "xs":
          s = "10px";
          break;
        default:
        case "large":
          s = "48px";
          break;
      }
      return s;
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
}, m = {
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
}, z = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [r, a] of t)
    e[r] = a;
  return e;
}, Ct = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return u.isTrue(this.external);
    },
    downloadValue() {
      return u.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        u.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        u.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && u.isTrue(this.active) === !0 ? m.ACTIVE : "",
        u.isTrue(this.loading) ? m.LOADING : "",
        u.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
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
      let s = this.$.type.tagName;
      return this.link ? s += " link" : s += " btn " + this.innerWidth, s;
    },
    iconName() {
      let s;
      return this.icon ? s = this.icon : this.externalValue || this.downloadValue ? s = "arrow-external" : this.link && (s = "arrow"), s;
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
  }
}, kt = { class: "cta__text" };
function Et(s, t, e, r, a, i) {
  const o = rt;
  return n(), h(L, null, [
    (n(), C(Lt(i.tag), {
      role: "button",
      class: v(i.classList),
      "data-text": e.text,
      href: e.href ? e.href : null,
      "data-analytics": e.analytics ? e.analytics : null,
      type: e.type ? e.type : null,
      target: i.targetValue ? i.targetValue : null,
      "data-alternative-href": e.alternativeHref ? e.alternativeHref : null,
      "data-trigger": e.trigger ? e.trigger : null
    }, {
      default: et(() => [
        l("span", kt, S(e.text), 1),
        i.hasIcon ? (n(), C(o, {
          key: 0,
          icon: i.iconName,
          size: i.sizeValue
        }, null, 8, ["icon", "size"])) : f("", !0)
      ]),
      _: 1
    }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"])),
    t[0] || (t[0] = it("` "))
  ], 64);
}
const It = /* @__PURE__ */ z(Ct, [["render", Et]]), Ot = {
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
}, At = {
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
      return u.getJSON(this.animation);
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
      return u.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    }
  },
  methods: {
    handleTextAnimationState(s) {
      this.textAnimationStep = s == null ? void 0 : s.step, this.isSecondLast = s == null ? void 0 : s.isSecondLast;
    },
    handleTextAnimationEnded(s) {
      this.isEnded = s;
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
}, yt = {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return u.getJSON(this.list);
    }
  },
  methods: {
    text(s) {
      return s.text || s.ctaText;
    },
    href(s) {
      return s.href || s.ctaHref;
    },
    type(s) {
      return s.type || s.ctaType;
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
}, dt = {
  tagName: "headline",
  computed: {
    tag() {
      return this.level ? this.level : "h2";
    },
    classList() {
      return `${this.classes && u.hasFontSizeClass(this.classes) ? this.classes : `${this.tag}-font-size ${this.classes ? this.classes : ""}`} headline vue-component`;
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
}, P = {
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
}, Tt = {
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
        `${this.show ? m.SHOW : ""}`,
        `${this.end ? m.END : ""}`,
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
      return u.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = !1;
      const s = this.$refs.animation;
      if (!s) return;
      const t = s.querySelector(".letter-switcher__letter"), e = this.isLower ? t.offsetHeight * 2 : t.offsetHeight;
      s.style.height = e + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (e, r) => {
          const a = r * 0.3, i = 0.07 * e.children.length;
          e.style.animation = `letter-switch ${i}s ${a}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const s = this.$refs["end-text"], t = this.$refs.end;
      if (!s || !t) return this.emitEnded();
      s.style.width = "0px", t.classList.remove(m.COLLAPSED), this.emitEnded();
    },
    switchOverline(s) {
      const t = this.$refs.overline;
      t && (t.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, t.style.opacity = 1, s();
      }), t.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(P.ENDED);
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
}, R = {
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
}, vt = {
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
}, M = {
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
}, wt = {
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
}, nt = "https://res.cloudinary.com/c4a8/image/upload/", at = {
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
        return typeof this.lottie != "object" ? u.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? u.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return u.isTrue(this.cloudinary);
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
      var s;
      return ["img__picture-wrapper", (s = this.imgSrcSetValue) == null ? void 0 : s.ratioClasses];
    },
    imgSrcSetValue() {
      return wt[this.imgSrcSets];
    },
    imgSrcSetSources() {
      var s, t;
      return (t = (s = this.imgSrcSetValue) == null ? void 0 : s.srcSets) == null ? void 0 : t.filter((e) => e.media);
    },
    imgSrcSetImg() {
      var t;
      const s = (t = this.imgSrcSetValue) == null ? void 0 : t.srcSets;
      return s ? this.getCloudinaryBasePathLink(s[s.length - 1]) : null;
    }
  },
  watch: {
    animated(s, t) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = R.sizes);
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const s = this.getPreset(), t = this.getTransformationString(s);
      return { preset: s, transformationsString: t };
    },
    getPreset() {
      try {
        return this.preset ? M.presets && M.presets[this.preset] ? Object.assign(R, M.presets[this.preset]) : R : { ...R, ...M.presets.default };
      } catch (s) {
        console.error(s);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var s;
      return u.isTestingStorybook() ? this.img : ((s = this.img) == null ? void 0 : s.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(s) {
      return `${nt}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: t } = this.getSetup(), e = /w_\d+/.test(this.img), r = nt + t, a = `/${this.img}`;
      return e ? `${r}${a}` : `${r},w_${s.fallback_max_width}${a}`;
    },
    loadImage(s) {
      if (!this.canGenerateSrcSet()) return;
      const t = document.createElement("img");
      t.onload = () => {
        const e = t == null ? void 0 : t.naturalHeight, r = t == null ? void 0 : t.naturalWidth;
        let a;
        if (this.isSvg())
          a = {
            naturalHeight: e,
            naturalWidth: r
          };
        else {
          const { preset: i, transformationsString: o } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, a = {
            naturalHeight: e || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: r || (i == null ? void 0 : i.fallback_max_width)
          }, e && r && !this.isSvg() && this.buildSrcSet(i, o);
        }
        this.dimensions = a;
      }, t.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const t = [];
      for (const [r, a] of Object.entries(vt))
        s[r] && t.push(`${a}_${s[r]}`);
      return t.length > 0 ? t.join(",") : "";
    },
    buildSrcSet(s, t) {
      const e = [], r = s.steps, a = s.min_width, o = (s.max_width - a) / (r - 1), { naturalWidth: d } = this.dimensions;
      for (let g = 1; g <= r; g++) {
        const p = a + (g - 1) * o, c = p <= d, x = c ? p : d, T = `${this.hasPictureTag ? this.imgSrcSetImg : `${nt}${t},w_${x}/${this.img}`} ${x}w`;
        if (e.push(T), !c) break;
      }
      this.srcset = d < a ? "" : e.join(`, 
`);
    },
    isGif() {
      return this.img ? this.img.split(".")[1].toLowerCase() === "gif" : void 0;
    },
    isSvg() {
      var t;
      return u.getExtension(this.getCloudinaryBasePathLink()).toLowerCase() === "svg" || ((t = this.img) == null ? void 0 : t.indexOf(".svg")) !== -1;
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
};
class lt {
  constructor(t) {
    this.root = t, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(P.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(P.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
  }
  addDebugPositions() {
    this.topPosition = document.createElement("div"), this.bottomPosition = document.createElement("div");
    const t = document.querySelector("main");
    t.appendChild(this.topPosition), t.appendChild(this.bottomPosition), this.bottomPosition.style.position = this.topPosition.style.position = "absolute", this.bottomPosition.style.boxSizing = "content-box", this.bottomPosition.style.left = this.topPosition.style.left = 0, this.bottomPosition.style.width = this.topPosition.style.width = "30px", this.bottomPosition.style.height = this.topPosition.style.height = "2px", this.bottomPosition.style.backgroundColor = "rgba(255, 255, 0, 1)", this.bottomPosition.style.border = "1px solid rgb(0, 0, 0)", this.topPosition.style.backgroundColor = "rgba(255, 0, 0, 1)", this.bottomPosition.style.zIndex = this.topPosition.style.zIndex = 1e3, this.bottomPosition.style.pointerEvents = this.topPosition.style.pointerEvents = "none", this.updateDebugPositions();
  }
  updateDebugPositions() {
    !this.topPosition || !this.bottomPosition || (this.topPosition.style.top = (this.calculatedOffsetTop || this.currentTopPosition) + "px", this.bottomPosition.style.top = (this.calculatedOffsetBottom || this.currentBottomPosition) + "px");
  }
  setMarginTop() {
    this.marginTop = parseInt(window.getComputedStyle(this.root).marginTop.replace("px", ""), 10);
  }
  handleDimensionsChanged(t) {
    t.detail === this.root && this.handleResize();
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
    var t, e;
    return this.isHeaderSticky() ? ((e = this.headerSpacer) == null ? void 0 : e.offsetHeight) || 0 : ((t = this.header) == null ? void 0 : t.offsetHeight) || 0;
  }
  isHeaderSticky() {
    if (!this.header) return !1;
    const t = window.getComputedStyle(this.header);
    return t.position === "fixed" || t.position === "absolute" || t.position === "sticky";
  }
  updateClipPath(t) {
    const e = "inset(0% 0% " + t + "%)";
    this.root.style.clipPath = e, this.isUpdating = !1;
  }
  isFirstChild(t) {
    return this.firstChild === t;
  }
  isSticky() {
    return this.root.classList.contains(m.STICKY);
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
    var t;
    return ((t = this.main) == null ? void 0 : t.offsetTop) || 0;
  }
  getPercentage(t, e) {
    this.calculatedOffsetTop = this.currentTopPosition - e - this.marginTop + this.getMainOffsetTop(), this.calculatedOffsetBottom = this.currentBottomPosition - e + this.getMainOffsetTop(), this.marginTop < 0 && (this.calculatedOffsetBottom -= this.marginTop);
    let r = t, a;
    if (this.calculatedOffsetBottom >= r) {
      let i = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? a = r / i : a = (r - this.calculatedOffsetTop) / i;
    } else
      a = this.maxPercentage;
    return parseFloat(a.toFixed(2));
  }
  isOutOfViewport(t) {
    return t >= this.maxPercentage || t < 0;
  }
  setStickyPosition() {
    const t = this.getHeaderHeight(), e = window.scrollY, r = this.root.offsetHeight - window.innerHeight, a = r > 0 ? this.offsetBottom : this.offsetBottom - t;
    let i = r > 0 ? -r : 0;
    i = i - this.marginTop;
    const o = this.getPercentage(e, i), d = this.isOutOfViewport(o), g = e > a - window.innerHeight;
    !d && g ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = i + "px", this.root.classList.remove(m.OFF_SCREEN), this.root.classList.add(m.STICKY), this.updateClipPath(o)) : o === 0 ? (this.isUpdating = !1, this.root.classList.remove(m.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(m.STICKY), this.root.classList.add(m.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const t = this.root.parentNode;
    this.spacer = document.createElement("div"), t && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), t.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(m.HAS_BACKGROUND) || u.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const t = this.spacer.nextSibling, e = "--color-sticky-scroller";
    if (!t) return;
    const r = u.getElementBgColor(t) || u.getElementBgColor(t.firstChild);
    this.spacer.style.setProperty(e, r), this.spacer.classList.add(m.HAS_BACKGROUND);
  }
  setDimensions() {
    const t = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > t ? t : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(m.STICKY);
  }
  static init() {
    this.instances = [], [].forEach.call(document.querySelectorAll(this.rootSelector), (t) => {
      this.instances.push(new this(t));
    });
  }
  static getRootClass() {
    return this.rootSelector.substring(1);
  }
}
y(lt, "rootSelector", ".is-sticky-scroller"), y(lt, "instances", []);
const Pt = {
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
}, Dt = {
  tagName: "hero",
  components: {
    "hero-pattern": Pt
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
      const s = this.$refs.intro;
      s && (this.introHeight = s.offsetHeight, s.style.height = "0");
    },
    handleLetterSwitcherEnded() {
      const s = this.$refs.intro;
      s && (s.style.height = `${this.introHeight}px`, s.style.opacity = 1);
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
        this.hasStickyScroller ? lt.getRootClass() : ""
      ];
    },
    contentClassList() {
      return ["hero__content", this.spacing ? this.spacing : this.animation ? "" : "py-10 py-lg-11"];
    },
    style() {
      return [
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${u.hexToRgb(this.bgColor)}` : "",
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
    headlineText() {
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
      const s = this.shapeFullscreen ? "100%" : "auto";
      return {
        ...this.shape.lottieSettings,
        width: "auto",
        height: s
      };
    },
    lottieFileData() {
      return this.shape ? this.shape.lottie ? this.shape.lottie : this.lottieData ? u.getJSON(this.lottieData) : null : null;
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
      return u.getJSON(this.hero);
    }
  },
  props: {
    hero: Object,
    lottieData: String
  }
}, Nt = { class: "hero__container container" }, Vt = {
  key: 0,
  class: "hero__back-row row"
}, Bt = { class: "hero__back-col col" }, Rt = { class: "hero__back back" }, Mt = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, Ht = { class: "hero__intro-col col" }, Ft = {
  key: 0,
  class: "hero__overline"
}, jt = {
  key: 2,
  class: "hero__content-shape"
}, zt = ["innerHTML"], Ut = {
  key: 5,
  class: "hero__badges"
}, Gt = { class: "hero__badge-container" }, Wt = { class: "hero__background-shape" };
function Jt(s, t, e, r, a, i) {
  const o = _t("hero-pattern"), d = at, g = rt, p = Tt, c = dt, x = yt, k = At, T = Ot;
  return n(), h("div", {
    class: v(i.classList),
    style: W(i.style)
  }, [
    i.pattern ? (n(), C(o, {
      key: 0,
      class: "hero__pattern"
    })) : f("", !0),
    i.img ? (n(), C(d, {
      key: 1,
      class: "hero__background-img",
      cloudinary: i.background.cloudinary,
      img: i.img
    }, {
      default: et(() => t[0] || (t[0] = [
        it(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : f("", !0),
    l("div", Nt, [
      l("main", {
        class: v(i.contentClassList)
      }, [
        i.hasBack ? (n(), h("div", Vt, [
          l("div", Bt, [
            l("div", Rt, [
              b(g, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : f("", !0),
        i.letterSwitcher ? (n(), C(p, B({ key: 1 }, i.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: i.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : f("", !0),
        i.overline || i.headlineText || i.subline ? (n(), h("div", Mt, [
          l("div", Ht, [
            i.overline ? (n(), h("span", Ft, S(i.overline), 1)) : f("", !0),
            i.headlineText ? (n(), C(c, {
              key: 1,
              class: v(i.headlineClassList),
              level: i.level,
              innerHTML: i.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : f("", !0),
            i.shapeInContent ? (n(), h("div", jt, [
              i.showShape ? (n(), C(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : f("", !0)
            ])) : f("", !0),
            i.subline ? (n(), h("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: i.subline
            }, null, 8, zt)) : f("", !0),
            i.ctaList ? (n(), C(x, {
              key: 4,
              classes: "hero__cta-list",
              list: i.ctaList
            }, null, 8, ["list"])) : f("", !0),
            i.badges ? (n(), h("div", Ut, [
              (n(!0), h(L, null, E(i.badges, (tt) => (n(), h("div", Gt, [
                b(d, B({
                  cloudinary: !0,
                  ref_for: !0
                }, tt, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : f("", !0)
          ])
        ], 512)) : f("", !0),
        i.animation ? (n(), C(k, {
          key: 3,
          animation: i.animation,
          cta: i.cta,
          icon: i.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : f("", !0)
      ], 2)
    ]),
    i.shape ? (n(), C(T, {
      key: 2,
      class: "hero__background-shape-wrapper",
      hideContainer: !i.showShapeContainer
    }, {
      default: et(() => [
        b(T, {
          class: "hero__background-shape-content",
          hideContainer: !i.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: et(() => [
            l("div", Wt, [
              i.showShape ? (n(), C(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : f("", !0)
            ])
          ]),
          _: 1
        }, 8, ["hideContainer"])
      ]),
      _: 1
    }, 8, ["hideContainer"])) : f("", !0)
  ], 6);
}
const qt = /* @__PURE__ */ z(Dt, [["render", Jt]]), O = class O {
  constructor(t) {
    this.root = t, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${m.IS_STARTING}`).forEach((t) => {
      t.classList.remove(m.IS_STARTING);
    });
  }
  mergeNodes(t, e) {
    const r = Array.from(e);
    return r.unshift(t), r;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(t) {
    const e = [];
    this.currentElements.forEach((r) => {
      t.srcElement !== r && e.push(r);
    }), this.currentElements = e;
  }
  handleAnimationEnd(t) {
    const e = O.getGroup(t.srcElement);
    if (e) {
      const r = parseInt(e.style.getPropertyValue(O.groupItemsLoadedProperty), 10) || 0;
      O.setGroupItemsLoaded(e, r + 1);
    }
    this.updateCurrentElement(t), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(t) {
    t.forEach((e) => {
      e.classList.add(m.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(O.endDataset, !0);
  }
  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }
  static getGroup(t) {
    return t.closest(".utility-animation__group");
  }
  initialize() {
    this.root.addEventListener("animationend", (e) => {
      this.handleAnimationEnd(e);
    }), new MutationObserver((e) => {
      e.forEach((r) => {
        var a;
        r.type === "attributes" && r.attributeName.startsWith(O.inViewportDataset) && ((a = r.target) == null ? void 0 : a.getAttribute(O.inViewportDataset)) === "true" && this.startAnimation();
      });
    }).observe(this.root, { attributes: !0 });
  }
  static setGroupItemsLoaded(t, e) {
    t.style.setProperty(this.groupItemsLoadedProperty, e);
  }
  static hasPercentageOffset(t) {
    return t.root.classList.contains("utility-animation--percentage-offset");
  }
  static hasSmallOffset(t) {
    return t.root.classList.contains("utility-animation--small-offset");
  }
  static addObserver(t) {
    const a = (p) => {
      p.forEach((c) => {
        c.isIntersecting ? c.target.setAttribute(this.inViewportDataset, !0) : c.target.classList.contains("utility-animation--enter-exit") && c.target.removeAttribute(this.inViewportDataset);
      });
    }, i = new IntersectionObserver(a, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), o = new IntersectionObserver(a, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), d = new IntersectionObserver(a, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (t ? [t] : this.instances).forEach((p) => {
      O.hasSmallOffset(p) ? d.observe(p.root) : O.hasPercentageOffset(p) ? o.observe(p.root) : i.observe(p.root);
    });
  }
  static resetGroup(t) {
    this.setGroupItemsLoaded(t, 0), this.instances.forEach((e) => {
      if (this.getGroup(e.root) === t) {
        const a = e.root;
        e.currentElements = [a], a.removeAttribute("data-utility-animation-end"), e.startAnimation();
      }
    });
  }
  static initElement(t) {
    const e = t.$el ? t.$el : t, r = new this(e);
    return this.instances.push(r), r;
  }
  static init(t) {
    this.instances = [], [].forEach.call(t || document.querySelectorAll(this.rootSelector), (e) => {
      this.initElement(e);
    }), this.addObserver();
  }
  static isElementObserved(t) {
    return this.instances.some((e) => e.root === t);
  }
  static observeElementIfNotAlready(t) {
    let e;
    this.isElementObserved(t) || (e = this.initElement(t)), this.addObserver(e);
  }
  static getIndexStyle(t) {
    return `--utility-animation-index: ${t}`;
  }
};
y(O, "rootSelector", ".utility-animation"), y(O, "inViewportDataset", "data-utility-animation-in-viewport"), y(O, "endDataset", "data-utility-animation-end"), y(O, "instances", []), y(O, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let st = O;
const $t = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && st.init([this.$refs.root]);
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
  }
}, Xt = { class: "container space-lg-2" }, Kt = {
  key: 0,
  class: "row mb-9 mt-9"
}, Zt = { class: "row" }, Yt = { class: "col" }, Qt = ["innerHTML"];
function te(s, t, e, r, a, i) {
  const o = dt;
  return n(), h("figure", {
    class: v(i.classList),
    ref: "root"
  }, [
    l("div", Xt, [
      e.headline ? (n(), h("div", Kt, [
        l("div", {
          class: v(["col", e.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          b(o, { text: e.headline }, null, 8, ["text"])
        ], 2)
      ])) : f("", !0),
      l("div", Zt, [
        l("div", Yt, [
          l("p", {
            class: v(["intro-text__copy fade-in-bottom", e.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: e.copy
          }, null, 10, Qt)
        ])
      ])
    ])
  ], 2);
}
const ee = /* @__PURE__ */ z($t, [["render", te]]), N = class N {
  constructor(t, e) {
    var r;
    t && (this.root = t, this.options = e, (r = this.options) != null && r.noInit || this.root.classList.add(m.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(t) {
    window[N.namespacePrefix] || (window[N.namespacePrefix] = {});
    const e = this.getInstancesKey();
    window[N.namespacePrefix][e] || (window[N.namespacePrefix][e] = []), window[N.namespacePrefix][e].push(t);
  }
  static getInstance(t) {
    const r = window[N.namespacePrefix][this.getInstancesKey()].filter((a) => (a == null ? void 0 : a.root) === t);
    return r ? r[0] : null;
  }
  static initElement(t, e) {
    const r = new this(t, e);
    return this.instances.push(r), this.expose(r), r;
  }
  static init(t) {
    this.instances = [];
    const e = t || document, r = `${this.rootSelector}:not(.${m.INITIALIZED})`;
    [].forEach.call(
      e.querySelectorAll(r),
      (a) => {
        this.initElement(a);
      }
    );
  }
};
y(N, "rootSelector", ""), y(N, "instances", []), y(N, "namespacePrefix", "baseComponents");
let ct = N;
class Q {
}
y(Q, "rootSelector", ".form-attachments"), y(Q, "base64Selector", ".form-attachments__base64");
const V = class V extends ct {
  constructor(t, e) {
    var r;
    super(t, e), t && (this.root = t, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = t.querySelector(this.formSelector), this.subject = t.querySelector(this.subjectSelector), this.company = t.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = e, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (r = this.options) != null && r.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(t, e) {
      return this.optional(e) || V.regularExpression.test(t);
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
    const t = new URLSearchParams(window.location.search);
    for (const [e, r] of t.entries())
      this.prefillFormValue(e, r);
  }
  prefillFormValue(t, e) {
    const r = this.form;
    if (!r) return;
    const a = r.querySelector(`input[name="${t}"],textarea[name="${t}"]`);
    a && (a.value = e);
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
    V.reset(this.form);
  }
  static reset(t) {
    !t || !t.reset || (t.reset(), [].forEach.call(t.querySelectorAll(`.${m.VALID}`), (e) => {
      e.classList.remove(m.VALID);
    }), [].forEach.call(t.querySelectorAll(`.${m.ERROR}`), (e) => {
      e.classList.remove(m.ERROR);
    }));
  }
  handleSubmit(t) {
    this.validate(t) && this.submit(t);
  }
  updateSubject() {
    !this.subject || !this.company || (this.subject.value = this.subject.value + ": " + this.company.value);
  }
  submit(t) {
    t.stopImmediatePropagation(), t.preventDefault(), this.updateSubject(), this.customSubmit ? this.customSubmit(t) : this.hasAjaxSubmit() ? this.ajaxSubmit() : this.form.submit();
  }
  static getId(t) {
    return u.uuid() + this.delimiter + t;
  }
  static getName(t) {
    if (t.includes(this.delimiter)) {
      const e = t.indexOf(this.delimiter);
      return t.slice(e + this.delimiter.length);
    }
    return t;
  }
  static getFormData(t) {
    const e = new FormData(t), r = [];
    for (let a of e)
      r.push(encodeURIComponent(a[0]) + "=" + encodeURIComponent(a[1]));
    return r.join("&");
  }
  ajaxSubmit() {
    const t = V.getFormData(this.form);
    fetch(this.form.action, {
      method: this.form.method || "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: t
    }).then((e) => {
      (e.status === 200 || e.status === 302) && this.ajaxSubmitCompleted();
    });
  }
  ajaxSubmitCompleted() {
    document.dispatchEvent(
      new CustomEvent(P.FORM_AJAX_SUBMIT, {
        detail: { target: this.root }
      })
    );
  }
  triggerExternalValidation() {
    let t = !1;
    if (window.$) {
      const e = $(this.form);
      if (typeof e.validate != "function")
        return console.error("form.validate is not a function"), !0;
      t = e.validate().form();
    }
    return t;
  }
  validate(t) {
    let e = this.triggerExternalValidation();
    return (!this.isValid(t) || e === !1) && (t.stopImmediatePropagation(), t.preventDefault(), e = !1), e;
  }
  isValid(t) {
    t.stopImmediatePropagation();
    let e = !0, r = !0;
    this.hasAttachments() && (e = this.validateAttachments());
    for (const [a, i] of Object.entries(this.groups))
      this.isValidGroup(i) || (e = !1, this.addGroupError(i, r), r = !1);
    return e;
  }
  validateAttachments() {
    let t = !0;
    return [].forEach.call(this.form.querySelectorAll(Q.base64Selector), (e) => {
      e.value || (t = !1);
    }), t || (t = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (e) => {
      e.files.length === 0 && (t = !1, this.addAttachmentError(e));
    }), t);
  }
  addAttachmentError(t) {
    const e = u.getParent(t, Q.rootSelector);
    e !== null && e.classList.add(m.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(t, e) {
    for (let r = 0; r < t.length; r++) {
      const a = this.getGroupParent(t[r]);
      t[r].classList.add(m.ERROR), a && (e && u.scrollIntoView(a), this.addErrorMessage(a));
    }
  }
  addErrorMessage(t) {
    if (t && !t.classList.contains(m.ERROR)) {
      t.classList.add(m.ERROR);
      const e = document.createElement("div");
      e.innerHTML = t.dataset.msg, e.classList.add("invalid-feedback"), t.parentNode.insertBefore(e, t.nextSibling);
    }
  }
  delErrorMessage(t) {
    t && t.classList.contains(m.ERROR) && (t.classList.remove(m.ERROR), t.nextSibling.remove());
  }
  delGroupError(t) {
    for (let e = 0; e < t.length; e++) {
      const r = this.getGroupParent(t[e]);
      t[e].classList.remove(m.ERROR), r && this.delErrorMessage(r);
    }
  }
  isValidGroup(t) {
    const e = t.length;
    let r = !1;
    for (let a = 0; a < e; a++) {
      const i = t[a];
      if (i.type === "checkbox" && i.checked)
        r = !0;
      else if (i.type === "radio" && i.checked)
        r = !0;
      else {
        const o = i.closest('input[type="text"]');
        o && !r && o.value.length >= this.minLengthOther && (r = !0);
      }
    }
    return r;
  }
  getGroupByName(t) {
    return this.groups[t];
  }
  addValidation() {
    this.form && [].forEach.call(this.form.querySelectorAll("[data-form-group]"), (t) => {
      t.dataset.formGroup && (this.addGroupValidation(t), this.addLiveValidation(t));
    });
  }
  isRadio(t) {
    return (t == null ? void 0 : t.getAttribute("type")) === "radio";
  }
  isCheckbox(t) {
    return (t == null ? void 0 : t.getAttribute("type")) === "checkbox";
  }
  addLiveValidation(t) {
    t && (this.isCheckbox(t) || this.isRadio(t) ? t.addEventListener("change", this.handleLiveValidation.bind(this)) : t.addEventListener("keyup", this.handleLiveValidation.bind(this)));
  }
  groupFilter(t, e) {
    return t ? t.filter((r) => r.getAttribute("type") === e) : null;
  }
  handleGroupError(t, e) {
    t.checked ? this.delGroupError(e) : this.isValidGroup(e) || this.addGroupError(e);
  }
  handleLiveValidation(t) {
    const e = t.currentTarget;
    if (e) {
      const r = this.getGroupByName(e.dataset.formGroup);
      if (!r) return;
      const a = this.groupFilter(r, "checkbox"), i = this.groupFilter(r, "radio");
      e.getAttribute("type") === "checkbox" ? this.handleGroupError(e, a) : e.getAttribute("type") === "radio" ? this.handleGroupError(e, i) : this.isValidGroup(r) ? this.delGroupError(r) : this.addGroupError(r);
    }
  }
  getGroupParent(t) {
    var e;
    return (e = t.closest(".js-form-message")) == null ? void 0 : e.querySelector("[data-msg]");
  }
  addGroupValidation(t) {
    if (this.getGroupParent(t)) {
      const r = t.dataset.formGroup;
      this.groups[r] || (this.groups[r] = []), this.groups[r].push(t);
    }
  }
  updateGotcha() {
    const t = this.root.querySelector(this.gotchaSelector);
    t == null || t.classList.add(m.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(V.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(t) {
    var e;
    return ((e = t == null ? void 0 : t.parentNode) == null ? void 0 : e.classList.contains("form-field--show-in")) && t.offsetParent === null;
  }
  static getFormData(t) {
    if (t == null) return [];
    const e = t.querySelectorAll('input[type="text"], input[type="email"], textarea'), r = [];
    for (let a = 0; a < e.length; a++) {
      const i = e[a];
      if (this.isOptionalInputInvisible(i)) continue;
      let o;
      (i.type === "text" || i.type === "email" || i.tagName === "TEXTAREA") && (o = i.value), r.push({
        input: i,
        value: o
      });
    }
    return r;
  }
};
y(V, "rootSelector", ".form"), y(V, "instances", []), y(V, "delimiter", "-formHelper-"), y(V, "noCustomSubmitClass", "form--no-custom-submit"), y(V, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let H = V;
class se {
  constructor(t) {
    var r;
    this.position = t;
    const e = (r = window.i18n) == null ? void 0 : r.loader;
    e && e.then(() => {
      var a;
      this.translationData = (a = window.i18n) == null ? void 0 : a.getTranslationData([
        "positionTypePermanently",
        "positionTypeInternship",
        "positionTypeTraining",
        "positionTypeStudent"
      ]);
    });
  }
  get description() {
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((t, e) => this.getEnhanchedDescription(e, t.name, t.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(t) {
    return /^\s*<[^>]+>/.test(t);
  }
  getEnhanchedDescription(t, e, r) {
    const a = t > 0 && e && e["#text"] ? `<h4>${this.trimNewlines(e["#text"])}</h4>` : "";
    let i = r.replace(/<\/?span[^>]*>/g, ""), o = 0;
    const d = 5, g = 2;
    return t === 0 ? i = i.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (p, c) => c.length > d && /^\s*$/.test(c) ? c : o < g && c.length > d && c[0] !== "," ? (o++, "<p>" + c.trim() + "</p>") : c).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(i) && i.length > d && (i = "<p>" + i + "</p>"), `${a}${i}`.replace(/<\/p><br><p>/g, "</p><p>");
  }
  get id() {
    return this.getValue("id").replace(/\s/g, "");
  }
  get title() {
    return this.removeGenderNotations(this.getValue("name"));
  }
  removeGenderNotations(t) {
    const e = /\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;
    return t.replace(e, "").trim();
  }
  get tags() {
    const t = this.getValue("keywords");
    return t ? t.split(",") : [];
  }
  getTeamText(t) {
    if (!t) return;
    let e = t;
    if (e.includes("/")) {
      const r = e.split(" / "), a = r[0], i = r[1], o = "CSOC", d = "Managed Services", g = "Products";
      if (a === d && i !== o)
        e = d;
      else if (a === g)
        e = `${g} ${i}`;
      else
        switch (i) {
          case "Azure Architecture":
            e = "Azure";
            break;
          case "M365 Architecture":
            e = "Workplace";
            break;
          case o:
            e = "Security";
            break;
          default:
            e = i;
            break;
        }
    }
    return e + " Team";
  }
  get team() {
    const t = this.getTeamText(this.getValue("department")), e = t ? " / " : "";
    return `${t || ""}${this.positionType ? e + this.positionType : ""}`;
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
    var e, r, a, i;
    let t = this.getValue("employmentType");
    switch (t) {
      case "permanent":
        t = (e = window.i18n) == null ? void 0 : e.translate("positionTypePermanently");
        break;
      case "intern":
        t = (r = window.i18n) == null ? void 0 : r.translate("positionTypeInternship");
        break;
      case "trainee":
        t = (a = window.i18n) == null ? void 0 : a.translate("positionTypeTraining");
        break;
      case "working_student":
        t = (i = window.i18n) == null ? void 0 : i.translate("positionTypeStudent");
        break;
      default:
      case "freelance":
      case "temporary":
        t = null;
        break;
    }
    return t;
  }
  get order() {
    const t = this.tags.find((a) => a.includes("ORDER_"));
    if (!t) return null;
    const e = t.split("_")[1];
    return parseInt(e, 10);
  }
  trimNewlines(t) {
    return t.replace(/\n|\t|    /g, "");
  }
  getValue(t, e = "text") {
    return this.position && this.position[t] ? this.trimNewlines(this.position[t][`#${e}`]) : null;
  }
}
const G = {
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
class ie {
  constructor(t) {
    y(this, "defaultLang", "de");
    y(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    y(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    y(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    y(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    y(this, "defaultClientName", "c4a8");
    y(this, "mockApplyUrl", "mock/jobApply.json");
    y(this, "mockDocumentsUrl", "mock/jobDocuments.json");
    this.options = t, (!this.options.client_name || this.options.client_name === "glueckkanja") && (this.options.client_name = this.defaultClientName), this.lang = this.defaultLang, this.jobId = null, this.apiUrl = "https://api.personio.de/v1", this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`, this.applicationsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications", this.documentsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents";
  }
  getUrl(t) {
    var a;
    let e;
    t !== this.types.OPENINGS && ((a = this.options.apiUrl) != null && a.match(/.xml$/)) ? t === this.types.APPLICATIONS ? e = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : e = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : e = this.options.apiUrl ? this.options.apiUrl : this[`${t}Url`];
    const r = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${e}${r}`;
  }
  setLang(t) {
    this.lang = t;
  }
  setFilter(t) {
    this.filter = t;
  }
  getAll() {
    const t = this.getUrl(this.types.OPENINGS);
    return this.fetch(t, null, this.responseTypes.XML);
  }
  getOpening(t) {
    return this.options.jobId = t, this.getAll();
  }
  convertPosition(t) {
    var i;
    const e = new se(t), r = (i = this.options) == null ? void 0 : i.jobId;
    return e.description === null || r && e.id !== r || !this.filterPosition(e) ? null : {
      ...e.data,
      lang: this.lang
    };
  }
  filterPosition(t) {
    var e, r;
    return !((r = (e = this.filter) == null ? void 0 : e.tags) != null && r.length) || this.filter.tags.some((a) => t.tags.map((i) => i.toLowerCase()).includes(a.toLowerCase())) ? t : null;
  }
  convertData(t) {
    var i, o;
    const e = t, r = "workzag-jobs", a = (i = t[r]) == null ? void 0 : i.position;
    return e.objects = a.length ? (o = t[r]) == null ? void 0 : o.position.map((d) => this.convertPosition(d)).filter(Boolean) : [this.convertPosition(a)].filter(Boolean), e.meta = { offset: 0, limit: 20, total: 10 }, e;
  }
  getConvertedJson(t) {
    const r = new DOMParser().parseFromString(t, "application/xml"), a = u.XMLtoJSON(r);
    return this.convertData(a);
  }
  fetchXML(t) {
    return new Promise((e, r) => {
      t.then((a) => a.text()).then((a) => {
        e({
          json: () => this.getConvertedJson(a)
        });
      }).catch((a) => {
        console.error("Personio fetchXML Error:", a), r("Personio fetchXML Error");
      });
    });
  }
  fetch(t, e, r) {
    return new Promise((a, i) => {
      var o;
      if ((o = this.options) != null && o.client_name) {
        const d = fetch(t, e), g = r === this.responseTypes.XML ? this.fetchXML(d) : d;
        a(g);
      } else
        i("no client_name specified");
    });
  }
  async uploadDocuments(t) {
    const e = t.length > 0 ? t : [t], r = [];
    return Array.from(e).forEach((a) => {
      r.push(this.uploadDocument(a));
    }), Promise.all(r);
  }
  async uploadDocument(t) {
    const e = this.getUrl(this.types.DOCUMENTS), r = new FormData();
    return r.append(
      "file",
      new File([t], t.name, {
        type: t.type
      })
    ), this.fetch(e, {
      method: "POST",
      body: r,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(t, e, r) {
    return new Promise((a, i) => {
      this.uploadDocuments(t).then((o) => {
        if (this.hasValidResponseCodes(o)) return this.addFilesToFields(o, r, a, i);
        const d = o[0];
        d.json().then((g) => {
          if (g.errors) return i({ statusCode: d.status, errors: g.errors });
        }).catch((g) => i(g));
      }).catch((o) => i(o));
    });
  }
  addFilesToFields(t, e, r, a) {
    const i = e;
    i.files = [];
    const o = t.map((d) => d.json().then((g) => {
      i.files.push({
        uuid: g.uuid,
        original_filename: g.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(o).then(() => r(i)).catch((d) => a(d));
  }
  getMappedFieldName(t) {
    let e;
    switch (t) {
      case "salary":
        e = "salary_expectations";
        break;
      case "cancellation":
        e = "available_from";
        break;
      case "gender":
      case "birthday":
      case "location":
      case "phone":
        e = t;
        break;
      default:
        e = "custom_attribute_" + t;
        break;
    }
    return e;
  }
  isValidResponseCode(t) {
    return this.options.apiUrl ? t.status === G.VALID : t.status === G.VALID || t.status === G.CREATED || t.status === G.NO_CONTENT;
  }
  hasValidResponseCodes(t) {
    return t.every((e) => this.isValidResponseCode(e));
  }
  handleApply(t) {
    return new Promise((e, r) => {
      this.apply({ fields: t }).then((a) => {
        if (this.isValidResponseCode(a)) return e();
        a.json().then((i) => {
          if (i.errors) return r({ statusCode: a.status, errors: i.errors });
        }).catch((i) => r(i));
      }).catch((a) => r(a));
    });
  }
  getFormPayload(t, e) {
    const r = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, a = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let i = 0; i < t.length; i++) {
      const d = t[i].input, g = e.getName(d.name), p = u.camalCaseToSnakeCase(g);
      a.hasOwnProperty(p) ? r[p] = d.value : p !== "_gotcha" && r.attributes.push({
        id: this.getMappedFieldName(p),
        value: d.value
      });
    }
    return r;
  }
  getHeaders() {
    return {
      "Ocp-Apim-Subscription-Key": this.options.apiKey
    };
  }
  async apply(t) {
    const e = this.getUrl(this.types.APPLICATIONS);
    return this.fetch(e, {
      method: "POST",
      body: JSON.stringify(t.fields),
      headers: {
        ...this.getHeaders(),
        "Content-Type": "application/json"
      }
    });
  }
}
class re {
  constructor(t) {
    y(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = t, this.api = new ie(this.options), this.jobDataUrl = u.getSiteAssetPath(this.jobDataUrl);
  }
  setLang(t) {
    this.api.setLang(t);
  }
  setFilter(t) {
    this.api.setFilter(t);
  }
  getAll() {
    return this.api.getAll();
  }
  getOpening(t) {
    return this.api.getOpening(t);
  }
  getUrl(t, e, r) {
    return this.api.getUrl(t, e, r);
  }
  fetch(t, e) {
    return this.api.fetch(t, e);
  }
  getLangFromEntry(t) {
    return t.lang || null;
  }
  getJobId() {
    let t = "";
    const e = window.location.hash;
    if (e)
      if (e.indexOf("-") !== -1) {
        const r = e.split("-");
        t = r[r.length - 1];
      } else
        t = e.substring(1);
    else this.options.jobId && (t = this.options.jobId);
    return t;
  }
  getOrderedList(t) {
    const e = t.filter((a) => a.order !== void 0).sort((a, i) => i.order - a.order), r = t.filter((a) => a.order === void 0);
    return [...e, ...r];
  }
  getFormData(t) {
    const e = H.getFormData(t);
    return this.api.getFormPayload(e, H);
  }
  applyFileData(t, e, r) {
    return this.api.applyFileData(t, e, r);
  }
  handleApply(t) {
    return this.api.handleApply(t);
  }
}
const j = class j {
  constructor(t, e) {
    this.root = t, this.options = e, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(m.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new re({
      ...this.jobId && { jobId: this.jobId },
      ...this.apiUrl && { apiUrl: this.apiUrl },
      client_name: this.clientName,
      apiKey: this.apiKey,
      mockApplyUrl: this.mockApplyUrl,
      mockDocumentsUrl: this.mockDocumentsUrl
    })), this.bindEvents();
  }
  isNotVueApp(t) {
    return t.getAttribute("data-v-app") === null;
  }
  bindEvents() {
    var t, e, r;
    if ((t = this.close) == null || t.addEventListener("click", this.handleClose.bind(this)), (e = this.successClose) == null || e.addEventListener("click", this.handleClose.bind(this)), (r = this.errorClose) == null || r.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const a = this.root.parentNode, i = H.getInstance(this.form);
      if (a && this.isNotVueApp(a)) {
        const o = a.querySelector(this.buttonSelector);
        o == null || o.addEventListener("click", this.handleOpen.bind(this));
      } else a && this.addTriggerListeners();
      i && i.canHaveCustomSubmit() && (i.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(P.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((e) => e.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(t) {
    var r;
    t.stopImmediatePropagation();
    const e = (r = t == null ? void 0 : t.detail) == null ? void 0 : r.id;
    !e || e !== this.modalId || this.handleOpen(t);
  }
  handleApplicationSubmit(t) {
    t.preventDefault(), t.stopImmediatePropagation(), this.setLoading(!0);
    const e = this.form.querySelector(Q.base64Selector), r = e == null ? void 0 : e.value;
    let a = this.api.getFormData(this.form), i;
    if (r)
      i = {
        name: e.dataset.fileName
      };
    else {
      const o = this.form.querySelector('input[type="file"]');
      i = o == null ? void 0 : o.files;
    }
    i ? this.handleApplicationRequest(a, i, r) : this.handleError();
  }
  setLoading(t) {
    document.dispatchEvent(new CustomEvent(P.LOAD_MODAL, { detail: t }));
  }
  handleApplicationRequest(t, e, r) {
    this.api.applyFileData(e, r, t).then((a) => {
      this.api.handleApply(a).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(a);
      }).catch((i) => {
        this.setLoading(!1), this.handleError(i);
      });
    }).catch((a) => {
      this.setLoading(!1), this.handleError(a);
    });
  }
  handleApplicationSuccess(t) {
    this.root.classList.add(m.SUCCESS);
    const e = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (e) {
      e.dataset.text || (e.dataset.text = e.innerText);
      const r = t.first_name;
      e.innerText = `${e.dataset.text} ${r}`;
    }
  }
  handleError(t) {
    if (!t) return console.error("handle generic error");
    const e = typeof t == "string" ? t : t.message ? t.message : t, r = typeof t == "object" && t.statusCode ? t.statusCode : G.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", e), r === G.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(t) : this.root.classList.add(m.ERROR);
  }
  handlePayloadTooLarge(t) {
    document.dispatchEvent(new CustomEvent(P.FORM_ATTACHMENT_ERROR, { detail: t }));
  }
  handleClose(t) {
    t.preventDefault(), j.close(this.root);
  }
  handleOpen(t) {
    t.preventDefault(), j.open(this.root);
  }
  static initElement(t, e) {
    const r = new this(t, e);
    return this.instances.push(r), r;
  }
  static open(t) {
    t && window.$ && $(t).modal("show");
  }
  static close(t) {
    t && window.$ && ($(t).modal("hide"), j.resetModal(t));
  }
  static resetModal(t) {
    setTimeout(function() {
      const e = t.querySelector("form");
      e == null || e.reset(), t.classList.remove(m.SUCCESS), t.classList.remove(m.ERROR);
    }, 200);
  }
  static init(t) {
    this.instances = [];
    const e = t || document, r = `${this.rootSelector}:not(.${m.READY})`;
    [].forEach.call(e.querySelectorAll(r), (a) => {
      this.initElement(a);
    });
  }
};
y(j, "rootSelector", ".modal"), y(j, "instances", []);
let ht = j;
const ae = {
  tagName: "modal",
  computed: {
    modalErrorValue() {
      return u.getJSON(this.modalError);
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
      return u.isTrue(this.center);
    },
    slimValue() {
      return u.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? !0 : null;
    },
    notificationValue() {
      return u.isTrue(this.notification);
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
      return ["modal__body", this.loading ? m.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(P.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(s) {
      const t = document.querySelector("html");
      s ? t.classList.add(m.MODAL_OPEN) : (t.classList.remove(m.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const t = this.$refs.modal.querySelector(H.rootSelector);
      if (!t) return;
      const e = H.getInstance(t);
      e || H.reset(e.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(P.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(s) {
      const t = s == null ? void 0 : s.detail;
      this.loading = t;
    },
    openModal() {
      setTimeout(() => {
        ht.open(this.$refs.modal);
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
}, St = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return u.isTrue(this.external);
    },
    downloadValue() {
      return u.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        u.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        u.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && u.isTrue(this.active) === !0 ? m.ACTIVE : "",
        u.isTrue(this.loading) ? m.LOADING : "",
        u.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
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
      let s = this.$.type.tagName;
      return this.link ? s += " link" : s += " btn " + this.innerWidth, s;
    },
    iconName() {
      let s;
      return this.icon ? s = this.icon : this.externalValue || this.downloadValue ? s = "arrow-external" : this.link && (s = "arrow"), s;
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
}, ne = {
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
}, oe = {
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
      let s = `${this.headlineClasses || ""} ${this.textImageLightText} mb-2 mb-lg-4`;
      return this.headlineClasses || (s += this.float ? " h3-font-size" : " h4-font-size font-weight-normal"), s.trim();
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
      const s = [
        "text-image__first-col",
        "d-flex",
        "text-image__img",
        "justify-content-center",
        this.imageClasses,
        `col-lg-${this.float ? this.textImageFirstColWidthComputed : this.offset ? this.textImageFirstColWidthComputed - 1 : this.textImageFirstColWidthComputed}`
      ];
      return this.float ? s.push(`col-xl-${this.textImageFirstColWidthXl}`, "text-image__img--floating") : this.offset && !this.left && s.push("offset-lg-1"), s;
    },
    textImageSecondColClasses() {
      const s = [
        "text-image__second-col",
        { "no-gutters": this.noGutters },
        { "pt-2 pt-lg-4": !this.noGutters },
        `col-lg-${this.textImageSecondColWidthComputed}`,
        { "fade-in-bottom": !this.noAnimation },
        { "text-white": this.white },
        { [this.reduceSpacing]: this.reduceSpacing }
      ];
      return this.reduceSpacing || s.push(`${this.left ? "pr-lg-" : "pl-lg-"}${this.textImageSecondColWidthComputed}`), this.float ? s.push(`col-xl-${this.textImageSecondColWidthXl}`) : this.left && this.offset && s.push("offset-lg-1"), s;
    },
    textImageLightTextClass() {
      return [this.copyClasses || "", this.textImageLightText];
    }
  },
  mounted() {
    this.$refs.root && st.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, le = { class: "container" }, ce = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, he = {
  key: 3,
  class: "richtext"
}, de = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, ue = ["innerHTML"], ge = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, me = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function fe(s, t, e, r, a, i) {
  const o = at, d = ne, g = dt, p = yt, c = St, x = ae;
  return n(), h("div", {
    class: v(i.textImageClass),
    style: W(i.textImageStyle),
    ref: "root"
  }, [
    l("div", le, [
      l("div", {
        class: v(["row", { "flex-row-reverse": e.left }])
      }, [
        e.float ? (n(), h("div", {
          key: 0,
          class: v([
            "text-image__floating-col",
            "justify-content-end",
            "text-image__floating-img",
            "position-absolute",
            "top-0",
            "right-0",
            "col-lg-" + i.textImageFirstColWidthComputed,
            "col-xl-" + i.textImageFirstColWidthXl
          ]),
          onClick: t[0] || (t[0] = (...k) => i.handleClick && i.handleClick(...k)),
          style: W({ cursor: e.href ? "pointer" : void 0 })
        }, [
          b(o, {
            img: e.image,
            cloudinary: e.cloudinary,
            alt: e.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: e.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : f("", !0),
        l("div", {
          class: v(i.textImageFirstColClasses),
          onClick: t[1] || (t[1] = (...k) => i.handleClick && i.handleClick(...k)),
          style: W({ cursor: e.href ? "pointer" : void 0 })
        }, [
          l("div", {
            class: v(["text-image__first-col-wrapper", { "fade-in-bottom": !e.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            b(o, {
              img: e.image,
              cloudinary: e.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: e.alt,
              lottie: e.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ], 2)
        ], 6),
        l("div", {
          class: v(i.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          e.badge ? (n(), C(d, {
            key: 0,
            text: e.badge.text,
            icon: e.badge.icon,
            uppercase: !e.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : f("", !0),
          e.overline ? (n(), h("span", ce, S(e.overline), 1)) : f("", !0),
          e.headline ? (n(), C(g, {
            key: 2,
            level: e.level,
            text: e.headline,
            classes: i.textImageHeadlineClassesComputed
          }, null, 8, ["level", "text", "classes"])) : f("", !0),
          e.subline ? (n(), h("span", he, S(e.subline), 1)) : f("", !0),
          e.subline ? (n(), h("div", de, [
            b(o, {
              img: e.image,
              cloudinary: e.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: e.alt,
              lottie: e.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : f("", !0),
          l("div", {
            class: v(i.textImageLightTextClass),
            innerHTML: e.copy
          }, null, 10, ue),
          e.list ? (n(), h("div", ge, [
            b(p, { list: e.list }, null, 8, ["list"])
          ])) : f("", !0)
        ], 2),
        e.cta ? (n(), h("div", me, [
          b(c, {
            text: e.cta.text,
            button: "",
            href: e.cta.href,
            trigger: e.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : f("", !0)
      ], 2)
    ]),
    e.modal ? (n(), C(x, {
      key: 0,
      form: e.modal.form,
      success: e.modal.success,
      error: e.modal.error,
      application: !0,
      clientName: e.modal.clientName,
      jobId: e.modal.jobId,
      apiUrl: e.modal.apiUrl,
      apiKey: e.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : f("", !0)
  ], 6);
}
const pe = /* @__PURE__ */ z(oe, [["render", fe]]), _e = {
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
}, ft = {
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
}, ye = {
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
}, ve = {
  tagName: "v-footer",
  components: {
    "footer-slider": ye
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
        u.isTrue(this.noMargin) ? "" : "mt-8 mt-lg-11",
        this.isCorporate ? "footer--corporate" : "",
        "vue-component"
      ];
    },
    isCorporate() {
      var s;
      return !((s = this.dataValue) != null && s.brandLogos);
    },
    style() {
      var s;
      return [(s = this.dataValue) != null && s.bgColor ? `background-color: ${this.dataValue.bgColor};` : ""];
    },
    dataValue() {
      return this.data ? { ...ft, ...u.getJSON(this.data) } : { ...ft };
    },
    links() {
      const s = this.lang.toLowerCase();
      if (s === "de" || s === "")
        return this.dataValue.links;
      {
        const t = u.capitalize(this.lang), e = this.dataValue[`links${t}`];
        return e || this.dataValue.links;
      }
    },
    locations() {
      const s = [];
      return s.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail
      }), this.dataValue.additionalLocations && this.dataValue.additionalLocations.length && s.push(...this.dataValue.additionalLocations), s;
    }
  },
  mounted() {
    this.bgColorRgbaValue = this.bgColorRgba();
  },
  methods: {
    bgColorRgba() {
      if (!this.$refs.root) return null;
      const e = window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g, "").split(",");
      return `rgba(${e[0]}, ${e[1]}, ${e[2]}, 1)`;
    }
  },
  props: {
    data: Object,
    noMargin: {
      default: null
    },
    lang: String
  }
}, we = { class: "container" }, Se = { class: "footer__content-row row" }, be = { class: "footer__content col-lg-12" }, xe = { class: "footer__address" }, Le = ["href", "target"], Ce = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, ke = {
  key: 0,
  class: "nav-item"
}, Ee = {
  key: 1,
  class: "nav-item"
}, Ie = {
  key: 2,
  class: "nav-item"
}, Oe = { class: "footer__postal-code" }, Ae = { class: "footer__city" }, Te = { class: "footer__country" }, Pe = {
  key: 4,
  class: "nav-item"
}, De = ["href"], Ne = { class: "media" }, Ve = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, Be = { class: "media-body" }, Re = {
  key: 5,
  class: "footer__nav-item nav-item"
}, Me = { class: "footer__nav-link nav-link" }, He = { class: "footer__offices" }, Fe = { class: "footer__office" }, je = { key: 0 }, ze = ["href"], Ue = { class: "d-flex" }, Ge = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, We = { class: "footer__mail media-body" }, Je = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, qe = ["href", "target"], $e = { class: "footer__highlights" }, Xe = { class: "footer__partners" }, Ke = ["href", "target"], Ze = {
  key: 0,
  class: "footer__vertical-line"
}, Ye = {
  key: 0,
  class: "footer__content-row row"
}, Qe = { class: "footer__content col-lg-12" }, ts = { class: "mt-3" }, es = { class: "row align-items-md-center mb-3" }, ss = { class: "col-md-8 mb-4 mb-md-0" }, is = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, rs = { class: "nav-item mr-6 footer__links" }, as = ["href"], ns = { class: "col-md-4 text-md-right" }, os = { class: "list-inline mb-0 footer__socials" }, ls = { class: "list-inline-item" }, cs = ["title", "href"], hs = { class: "row pb-2" }, ds = { class: "col" }, us = { class: "text-white small" };
function gs(s, t, e, r, a, i) {
  const o = at, d = _e, g = rt, p = _t("footer-slider");
  return n(), h("footer", {
    class: v(i.classList),
    style: W(i.style),
    ref: "root"
  }, [
    l("div", we, [
      l("div", Se, [
        l("div", be, [
          l("div", xe, [
            (n(!0), h(L, null, E(i.dataValue.logos, (c) => (n(), h("div", {
              class: v(["mb-3", c == null ? void 0 : c.classes])
            }, [
              l("a", {
                href: c.url,
                target: c.target,
                "aria-label": "Front",
                class: v([
                  "footer__logos-link d-block pr-6",
                  c.linkClasses ? c.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                b(o, B({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, Le)
            ], 2))), 256)),
            (n(!0), h(L, null, E(i.locations, (c) => (n(), h("ul", Ce, [
              c.name ? (n(), h("li", ke, S(c.name), 1)) : f("", !0),
              c.over ? (n(), h("li", Ee, S(c.over), 1)) : f("", !0),
              c.street ? (n(), h("li", Ie, S(c.street), 1)) : f("", !0),
              c.city ? (n(), h("li", {
                key: 3,
                class: v(["nav-item footer__address-block", c.postalReversed ? "is-reversed" : ""])
              }, [
                l("span", Oe, S(c.postalCode), 1),
                l("span", Ae, S(c.city), 1),
                l("span", Te, S(c.country), 1)
              ], 2)) : f("", !0),
              c.number ? (n(), h("li", Pe, [
                l("a", {
                  class: "nav-link media",
                  href: "tel:" + c.number
                }, [
                  l("span", Ne, [
                    l("span", Ve, [
                      b(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", Be, S(c.number), 1)
                  ])
                ], 8, De)
              ])) : f("", !0),
              i.dataValue.offices ? (n(), h("li", Re, [
                l("a", Me, [
                  b(g, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  l("div", He, [
                    (n(!0), h(L, null, E(i.dataValue.offices, (x, k) => (n(), h("span", Fe, [
                      it(S(x), 1),
                      k < i.dataValue.offices.length - 1 ? (n(), h("span", je, ", ")) : f("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : f("", !0),
              c.mail ? (n(), h("li", {
                key: 6,
                class: v(["nav-item", i.locations.length > 1 ? "pt-4" : ""])
              }, [
                l("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + c.mail
                }, [
                  l("span", Ue, [
                    l("span", Ge, [
                      b(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", We, S(c.mail), 1)
                  ])
                ], 8, ze)
              ], 2)) : f("", !0)
            ]))), 256)),
            i.isCorporate ? f("", !0) : (n(!0), h(L, { key: 0 }, E(i.dataValue.brandLogos, (c, x) => (n(), h(L, null, [
              c.title ? (n(), h("span", Je, S(c.title), 1)) : f("", !0),
              l("a", {
                href: c.url,
                target: c.target,
                class: v([
                  "footer__brand-logo-link d-block space-top-1",
                  x === 0 ? "mt-3" : "",
                  c.classes ? c.classes : "w-90"
                ])
              }, [
                b(o, B({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, qe)
            ], 64))), 256))
          ]),
          l("div", $e, [
            l("div", Xe, [
              (n(!0), h(L, null, E(i.dataValue.partners, (c, x) => (n(), h(L, null, [
                l("a", {
                  href: c.url,
                  target: c.target,
                  class: "footer__partner-images"
                }, [
                  b(o, B({
                    cloudinary: !0,
                    ref_for: !0
                  }, c, { class: "footer__partner-image" }), null, 16)
                ], 8, Ke),
                x < i.dataValue.partners.length - 1 ? (n(), h("div", Ze)) : f("", !0)
              ], 64))), 256))
            ]),
            i.isCorporate ? f("", !0) : (n(), C(p, {
              key: 0,
              items: i.dataValue.highlights,
              "bg-color": a.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      i.isCorporate ? (n(), h("div", Ye, [
        l("div", Qe, [
          b(p, {
            items: i.dataValue.highlights,
            "bg-color": a.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : f("", !0),
      t[0] || (t[0] = l("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      l("div", ts, [
        l("div", es, [
          l("div", ss, [
            l("ul", is, [
              (n(!0), h(L, null, E(i.links, (c) => (n(), h("li", rs, [
                l("a", B({
                  class: "nav-link",
                  href: c.url,
                  ref_for: !0
                }, c), S(c.title), 17, as)
              ]))), 256))
            ])
          ]),
          l("div", ns, [
            l("ul", os, [
              (n(!0), h(L, null, E(i.dataValue.socials, (c) => (n(), h("li", ls, [
                l("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: c.title,
                  href: c.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  l("i", {
                    class: v(["fab", c.icon])
                  }, null, 2)
                ], 8, cs)
              ]))), 256))
            ])
          ])
        ]),
        l("div", hs, [
          l("div", ds, [
            l("p", us, "Copyright © " + S(i.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const ms = /* @__PURE__ */ z(ve, [["render", gs]]), pt = {}, fs = {
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
      var s;
      return (s = this.results) == null ? void 0 : s.slice(0, this.maxResults);
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
      const s = `${this.endpoint}`;
      if (s)
        return this.store ? this.handleSearch() : fetch(s, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((t) => t.json()).then((t) => {
          this.store = t, this.handleSearch();
        }).catch((t) => {
          console.log("handleEnter ~ error", t);
        });
    },
    handleSearch() {
      this.searchEngine || this.initSearchEngine();
      const s = `${this.$refs.search.value}`;
      s && (this.results = this.searchEngine.search(s), console.log("handleSearch ~ this.results", this.results));
    },
    initSearchEngine() {
      const s = this.store, { results: t, weights: e } = s;
      if (!pt) return;
      const r = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: e
      };
      this.searchEngine = new pt(t, r);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(s) {
      this.searchExpanded = u.isOutsideOf("search", s) ? !1 : this.searchExpanded;
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
}, ps = {
  tagName: "link-list",
  computed: {
    classList() {
      return [
        "link-list",
        this.hasNoAnimation ? "" : "utility-animation",
        `${this.isExpanded ? m.EXPANDED : ""}`,
        `${this.isExpandable() ? m.EXPANDABLE : ""}`,
        `${this.hasActiveItem ? m.ACTIVE : ""}`,
        `${this.isHidden ? "link-list--hidden" : ""}`,
        `${this.inTransition ? "link-list--in-transition" : ""}`,
        this.classes,
        "vue-component"
      ];
    },
    hasNoAnimation() {
      return u.isTrue(this.noAnimation);
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
      const s = this.list.children;
      if (s)
        return s.filter((t) => {
          var e;
          return ((e = t.languages[this.lang]) == null ? void 0 : e.active) === !0;
        }).length > 0;
    },
    isHidden() {
      return u.isTrue(this.hidden) === !0;
    }
  },
  watch: {
    hidden(s, t) {
      s || (this.inTransition = !0);
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
        P.CHILD_HAS_UPDATE,
        this.handleUpdate.bind(this)
      );
    },
    handleUpdate(s) {
      const t = s.detail.root;
      this.isExpanded && this.$refs.root !== t && this.handleClick();
    },
    isLowerBreakpoint() {
      return u.isBelowBreakpoint("md");
    },
    isExpandable() {
      var s;
      return !!(this.isLowerBreakpoint() && this.list.languages && ((s = this.list.languages[this.lang]) != null && s.title));
    },
    updateHeight() {
      const s = this.$refs.root;
      if (!s) return;
      const t = this.isHidden ? "" : s.scrollHeight + "px";
      s.style.height = t;
    },
    handleClick(s) {
      if (!this.isExpandable()) return;
      this.isExpanded = !this.isExpanded;
      const t = this.$refs.root;
      if (s) {
        const e = new CustomEvent(P.CHILD_HAS_UPDATE, {
          detail: {
            root: t
          }
        });
        this.parentOfParent.dispatchEvent(e);
      }
      !t || this.isExpanded || (t.style.height = "");
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
}, _s = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? m.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        u.isTrue(this.hover) ? m.HOVERING : "",
        u.isTrue(this.product) ? "header--product" : "",
        u.isTrue(this.closed) ? "" : m.EXPANDED,
        u.isTrue(this.blendMode) ? "header--blending" : "",
        "vue-component"
      ];
    },
    headerContainerClassList() {
      return ["header__container", this.containerClass];
    },
    containerClass() {
      return u.isTrue(this.product) ? "container" : "container-xxl";
    },
    homeObj() {
      var s;
      return (s = this.home) == null ? void 0 : s.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return u.isTrue(this.search);
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
      return u.isTrue(this.light) === !0;
    },
    hasLangSwitch() {
      var s;
      return Object.keys((s = this.home) == null ? void 0 : s.languages).length > 1;
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
      var t;
      const s = this.$refs.link;
      if (s)
        for (let e = 0; e < s.length; e++) {
          const r = s[e], a = (t = r.querySelector(".header__link-text-spacer")) == null ? void 0 : t.clientWidth;
          r.style.setProperty("--header-link-text-width", a + "px");
        }
    },
    showFlyoutBlock(s) {
      return !(s.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return u.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(P.WINDOW_RESIZE, this.handleResize.bind(this));
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
      Object.keys(this.linkLists).forEach((s) => {
        this.linkLists[s] = !1;
      });
    },
    handleClick(s, t) {
      if (!this.isLowerBreakpoint()) return;
      const e = this.getId(s, t);
      this.linkLists[e] = !this.linkLists[e], this.linkLists[e] && (this.inTransition = !0), this.inUpdate = !0, this.closeAllSiblings(e), this.closeAllChildren();
    },
    closeAllSiblings(s) {
      Object.keys(this.linkLists).forEach((e) => {
        e !== s && (this.linkLists[e] = !1);
      });
    },
    closeAllChildren() {
      const s = new CustomEvent(P.CHILD_HAS_UPDATE, {
        detail: {}
      });
      this.$refs.list.dispatchEvent(s);
    },
    getId(s, t) {
      return `${s.name}_${t}`;
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
    handleMouseOver(s, t) {
      if (!s.children) return;
      this.resetAllFlyouts(), this.hover = !0;
      const e = this.getLinkRef(t);
      if (!e) return;
      e.classList.add(m.EXPANDED);
      const r = this.getFlyoutRef(t);
      r && (this.flyoutIndex = t, r.classList.add(m.EXPANDED));
    },
    handleMouseOut(s) {
      var r;
      if ((r = s.relatedTarget) != null && r.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.getLinkRef(this.flyoutIndex);
      if (!t) return;
      t.classList.remove(m.EXPANDED);
      const e = this.getFlyoutRef(this.flyoutIndex);
      e && e.classList.remove(m.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const s = this.$refs.languageSwitch;
      s && s.classList.add(m.EXPANDED);
    },
    handleLanguageOut(s) {
      var e;
      if ((e = s.relatedTarget) != null && e.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.$refs.languageSwitch;
      t && t.classList.remove(m.EXPANDED);
    },
    resetAllFlyouts() {
      var s, t;
      (s = this.$refs.link) == null || s.forEach((e) => {
        e.classList.remove(m.EXPANDED);
      }), (t = this.$refs.flyout) == null || t.forEach((e) => {
        e.classList.remove(m.EXPANDED);
      });
    },
    getFlyoutRef(s) {
      return this.getRef("flyout", s);
    },
    getLinkRef(s) {
      return this.getRef("link", s);
    },
    getRef(s, t) {
      const e = this.$refs[s][t];
      if (e)
        return e;
    },
    getHref(s) {
      var t;
      return s.children ? "javascript:void(0);" : (t = s.languages[this.lowerLang]) == null ? void 0 : t.url;
    },
    getTarget(s) {
      var e;
      const t = (e = s.languages[this.lowerLang]) == null ? void 0 : e.target;
      return t || null;
    },
    getNextLanguage() {
      const s = this.home.languages;
      if (!s) return;
      const t = Object.keys(s);
      if (!t.length) return;
      const e = t.filter((r) => r !== this.lowerLang);
      if (e.length)
        return e[0];
    },
    handleLanguageSwitch(s) {
      var r;
      const t = this.getActiveUrlByLang(s), e = t || ((r = this.home.languages[s]) == null ? void 0 : r.url);
      u.storageSave("preferedLanguage", s, !1), document.location.href = e;
    },
    getCurrentPath() {
      let s = "/";
      return process.server ? s = this.$route.fullPath : process.client && (s = window.location.pathname), s;
    },
    getActiveUrlByLang(s, t) {
      var d;
      const e = this.getCurrentPath(), r = "/", a = (g, p) => {
        if (!(g != null && g.title)) return;
        let c = g == null ? void 0 : g.url;
        e[(e == null ? void 0 : e.length) - 1] === r && c && c[(c == null ? void 0 : c.length) - 1] !== r && (c = c + r);
        const x = c === e, k = this.getParentLink(p);
        return t && x ? (g.active = !0, k && (k.active = !0)) : (g.active = !1, k && (k.active = !1)), x;
      }, i = (g, p) => p;
      let o = u.findRecursive(this.navigation, a, i);
      if (o || (o = u.findRecursive(this.meta, a, i)), o || (o = u.findRecursive(this.contact, a, i)), !o) {
        const g = this.getHrefLang(s);
        return g || this.getTranslatedUrl(e, s);
      }
      return (d = o[s]) == null ? void 0 : d.url;
    },
    getTranslatedUrl(s, t) {
      if (this.isBlogTagsUrl(s)) return this.getBlogTagsUrl(t, s);
      const e = this.getFolderSwitchSegment(s);
      return e ? this.getFolderSwitchUrl(t, s, e) : null;
    },
    getFolderSwitchSegment(s) {
      const t = this.home.folderSwitch;
      return t && t.find((r) => s.includes(r)) || null;
    },
    getFolderSwitchUrl(s, t, e) {
      if (!e) return t;
      let r;
      if (s === this.defaultLang) {
        const a = new RegExp(`/${this.lowerLang}/`);
        r = t.replace(a, "/");
      } else
        r = t.replace(e, `${s}/${e}`);
      return r;
    },
    isBlogTagsUrl(s) {
      return /\/blog\/tags/.test(s);
    },
    getBlogTagsUrl(s, t) {
      let e;
      const r = "tags";
      switch (s) {
        case "en":
          e = t.replace(r, `${r}-${s}`);
          break;
        default:
        case this.defaultLang:
          const a = new RegExp(`${r}-..`);
          e = t.replace(a, r);
          break;
      }
      return e + document.location.search;
    },
    getHrefLang(s) {
      const t = document.querySelector(`link[hreflang=${s}]`);
      if (t)
        return t.getAttribute("href");
    },
    getParentLink(s) {
      return this.navigation[s].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(s) {
      var t;
      return ["header__item", (t = s.languages[this.lowerLang]) != null && t.active ? m.ACTIVE : ""];
    },
    isLinkListHidden(s, t) {
      const e = this.getId(s, t);
      return !this.linkLists[e];
    },
    headerLinkClasses(s, t) {
      return this.getListClasses(s, t, ["header__link custom"]);
    },
    headerProductListClasses(s, t) {
      return this.getListClasses(s, t, ["header__product-list", this.inTransition ? m.IN_TRANSITION : ""]);
    },
    getListClasses(s, t, e) {
      const r = this.isLinkListHidden(s, t);
      return [...e, r ? "" : m.EXPANDED];
    },
    updateProductListHeight() {
      const s = this.$refs["product-list"];
      if (s)
        for (let t = 0; t < s.length; t++) {
          const e = s[t], a = !e.classList.contains(m.EXPANDED) || e.style.height !== "" ? "" : e.scrollHeight + "px";
          e.style.height = a;
        }
    },
    navHighlightClasses(s, t) {
      return ["header__nav-highlight custom", this.isLinkListHidden(s, t) ? "is-hidden" : ""];
    },
    hasContactLink(s) {
      var t, e;
      return ((t = this.contact) == null ? void 0 : t.languages) && !((e = s.languages[this.lowerLang]) != null && e.emergency);
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
  }
}, ys = { class: "header__row row" }, vs = { class: "header__col col" }, ws = { class: "header__logo" }, Ss = ["href"], bs = {
  class: "header__list",
  ref: "list"
}, xs = ["href", "target", "onClick"], Ls = ["onMouseover"], Cs = { class: "header__link-text" }, ks = { class: "header__link-text-spacer" }, Es = ["href", "target"], Is = { class: "header__product-list-data" }, Os = { class: "header__product-list-title font-size-8 bold" }, As = { class: "header__product-list-subtitle" }, Ts = ["href"], Ps = { class: "header__footer" }, Ds = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, Ns = ["href"], Vs = { class: "header__contact-text" }, Bs = { class: "header__contact-title" }, Rs = {
  key: 2,
  class: "header__button"
}, Ms = {
  key: 3,
  class: "header__language-switch"
}, Hs = ["onClick"], Fs = {
  key: 0,
  class: "header__button"
}, js = { class: "header__link-text" }, zs = { class: "header__link-text-spacer" }, Us = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, Gs = ["onClick"], Ws = { class: "row" }, Js = { class: "col" }, qs = {
  key: 0,
  class: "header__flyout-items"
}, $s = {
  key: 0,
  class: "header__flyout-block"
}, Xs = { class: "header__flyout-caption" }, Ks = ["innerHTML"], Zs = ["href"], Ys = { class: "header__contact-title" }, Qs = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, ti = {
  key: 1,
  class: "header__product-list is-expanded"
}, ei = ["href", "target"], si = { class: "header__product-list-data" }, ii = { class: "header__product-list-title font-size-8 bold" }, ri = { class: "header__product-list-subtitle" };
function ai(s, t, e, r, a, i) {
  var x, k, T, tt, ut, gt;
  const o = at, d = rt, g = ps, p = St, c = fs;
  return n(), h(L, null, [
    l("div", {
      class: "header__spacer",
      style: W(i.spacerBgColor)
    }, null, 4),
    l("header", {
      class: v(i.classList),
      onMouseover: t[5] || (t[5] = (..._) => i.handleHeaderMouseOver && i.handleHeaderMouseOver(..._)),
      onMouseout: t[6] || (t[6] = (..._) => i.handleHeaderMouseOut && i.handleHeaderMouseOut(..._))
    }, [
      l("div", {
        class: v(i.headerContainerClassList)
      }, [
        l("div", ys, [
          l("div", vs, [
            l("div", ws, [
              l("a", {
                href: (x = i.homeObj) == null ? void 0 : x.url
              }, [
                b(o, {
                  img: (k = e.home) == null ? void 0 : k.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0
                }, null, 8, ["img"]),
                b(o, {
                  img: (T = e.home) == null ? void 0 : T.img,
                  class: "header__logo-default",
                  cloudinary: !0
                }, null, 8, ["img"])
              ], 8, Ss)
            ]),
            l("div", {
              class: "header__menu",
              onClick: t[0] || (t[0] = (..._) => i.handleCloseClick && i.handleCloseClick(..._))
            }, [
              b(d, {
                icon: "menu",
                class: "header__menu-icon",
                closed: a.closed
              }, null, 8, ["closed"])
            ]),
            l("nav", {
              class: "header__nav",
              onMouseout: t[1] || (t[1] = (..._) => i.handleMouseOut && i.handleMouseOut(..._))
            }, [
              l("ul", bs, [
                (n(!0), h(L, null, E(i.activeNavigation, (_, I) => {
                  var F, J, q, X, K, U;
                  return n(), h("li", {
                    class: v(i.headerItemClasses(_))
                  }, [
                    _ != null && _.languages ? (n(), h("a", {
                      key: 0,
                      class: v(i.headerLinkClasses(_, I)),
                      href: i.getHref(_),
                      target: i.getTarget(_),
                      onClick: (D) => i.handleClick(_, I),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      l("div", {
                        class: "header__link-content",
                        onMouseover: (D) => i.handleMouseOver(_, I, D)
                      }, [
                        l("span", Cs, S((F = _.languages[i.lowerLang]) == null ? void 0 : F.title), 1),
                        l("span", ks, S((J = _.languages[i.lowerLang]) == null ? void 0 : J.title), 1),
                        _.children ? (n(), C(d, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : f("", !0)
                      ], 40, Ls)
                    ], 10, xs)) : f("", !0),
                    (n(!0), h(L, null, E(_.children, (D) => (n(), h(L, null, [
                      _.children && !D.products ? (n(), C(g, {
                        key: 0,
                        list: D,
                        lang: i.lowerLang,
                        hidden: i.isLinkListHidden(_, I),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (n(), h("div", {
                        key: 1,
                        class: v(i.headerProductListClasses(_, I)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (n(!0), h(L, null, E(D.children, (A) => {
                          var Z, Y, mt;
                          return n(), h("a", {
                            href: (Z = A == null ? void 0 : A.languages[i.lowerLang]) == null ? void 0 : Z.url,
                            target: A.target,
                            class: "header__product-list-item custom"
                          }, [
                            b(o, {
                              img: A.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", Is, [
                              l("div", Os, S((Y = A == null ? void 0 : A.languages[i.lowerLang]) == null ? void 0 : Y.title), 1),
                              l("div", As, S((mt = A == null ? void 0 : A.languages[i.lowerLang]) == null ? void 0 : mt.subtitle), 1)
                            ])
                          ], 8, Es);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (q = _.languages[i.lowerLang]) != null && q.emergency ? (n(), h("a", {
                      key: 1,
                      href: (X = _.languages[i.lowerLang]) == null ? void 0 : X.emergency.href,
                      class: v(i.navHighlightClasses(_, I))
                    }, [
                      b(d, {
                        icon: (K = _.languages[i.lowerLang]) == null ? void 0 : K.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      it(" " + S((U = _.languages[i.lowerLang]) == null ? void 0 : U.emergency.text), 1)
                    ], 10, Ts)) : f("", !0)
                  ], 2);
                }), 256))
              ], 512),
              l("div", Ps, [
                i.hasMeta ? (n(), C(g, {
                  key: 0,
                  list: i.metaList,
                  lang: i.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : f("", !0),
                i.hasContact ? (n(), h("div", Ds, [
                  (tt = e.contact) != null && tt.languages ? (n(), h("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (ut = e.contact.languages[i.lowerLang]) == null ? void 0 : ut.url
                  }, [
                    l("div", Vs, [
                      b(d, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      l("span", Bs, S((gt = e.contact.languages[i.lowerLang]) == null ? void 0 : gt.title), 1)
                    ])
                  ], 8, Ns)) : f("", !0)
                ])) : f("", !0),
                e.button ? (n(), h("div", Rs, [
                  b(p, {
                    text: e.button.text,
                    href: e.button.href,
                    target: e.button.target,
                    skin: e.button.skin,
                    classes: a.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : f("", !0),
                i.hasLangSwitch ? (n(), h("div", Ms, [
                  (n(!0), h(L, null, E(e.home.languages, (_, I) => (n(), h("a", {
                    class: v({ "header__language-link custom": !0, active: I === i.lowerLang }),
                    onClick: (F) => i.handleLanguageSwitch(I)
                  }, S(I), 11, Hs))), 256))
                ])) : f("", !0)
              ])
            ], 32),
            e.button ? (n(), h("div", Fs, [
              b(p, {
                text: e.button.text,
                href: e.button.href,
                target: e.button.target,
                skin: e.button.skin,
                classes: a.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : f("", !0),
            i.searchValue ? (n(), C(c, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : f("", !0),
            i.hasLangSwitch ? (n(), h("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: t[2] || (t[2] = (..._) => i.handleLanguageOver && i.handleLanguageOver(..._)),
              onMouseout: t[3] || (t[3] = (..._) => i.handleLanguageOut && i.handleLanguageOut(..._)),
              ref: "languageSwitch"
            }, [
              l("span", js, S(e.lang), 1),
              l("span", zs, S(e.lang), 1),
              b(d, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              l("div", Us, [
                (n(!0), h(L, null, E(e.home.languages, (_, I) => (n(), h("a", {
                  class: v({ "header__language-link custom": !0, "d-none": I === i.lowerLang }),
                  onClick: (F) => i.handleLanguageSwitch(I)
                }, S(I), 11, Gs))), 256))
              ], 512)
            ], 544)) : f("", !0)
          ])
        ])
      ], 2),
      l("div", {
        class: "header__flyout",
        onMouseout: t[4] || (t[4] = (..._) => i.handleMouseOut && i.handleMouseOut(..._))
      }, [
        l("div", {
          class: v(i.containerClass)
        }, [
          l("div", Ws, [
            l("div", Js, [
              (n(!0), h(L, null, E(i.activeNavigation, (_, I) => {
                var F, J, q, X, K;
                return n(), h("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  _.children ? (n(), h("div", qs, [
                    i.showFlyoutBlock(_.children) ? (n(), h("figure", $s, [
                      l("figcaption", Xs, S((F = _.languages[i.lowerLang]) == null ? void 0 : F.title), 1),
                      l("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (J = _.languages[i.lowerLang]) == null ? void 0 : J.description
                      }, null, 8, Ks),
                      i.hasContactLink(_) ? (n(), h("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (q = e.contact.languages[i.lowerLang]) == null ? void 0 : q.url
                      }, [
                        b(d, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        l("span", Ys, S((X = e.contact.languages[i.lowerLang]) == null ? void 0 : X.title), 1)
                      ], 8, Zs)) : f("", !0),
                      (K = _.languages[i.lowerLang]) != null && K.emergency ? (n(), h("div", Qs, [
                        b(p, B({ ref_for: !0 }, _.languages[i.lowerLang].emergency), null, 16)
                      ])) : f("", !0)
                    ])) : f("", !0),
                    (n(!0), h(L, null, E(_.children, (U) => (n(), h(L, null, [
                      _.children && !U.products ? (n(), C(g, {
                        key: 0,
                        list: U,
                        lang: i.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (n(), h("div", ti, [
                        (n(!0), h(L, null, E(U.children, (D) => {
                          var A, Z, Y;
                          return n(), h("a", {
                            href: (A = D.languages[i.lowerLang]) == null ? void 0 : A.url,
                            target: D.target,
                            class: "header__product-list-item custom"
                          }, [
                            b(o, {
                              img: D.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", si, [
                              l("div", ii, S((Z = D.languages[i.lowerLang]) == null ? void 0 : Z.title), 1),
                              l("div", ri, S((Y = D.languages[i.lowerLang]) == null ? void 0 : Y.subtitle), 1)
                            ])
                          ], 8, ei);
                        }), 256))
                      ]))
                    ], 64))), 256))
                  ])) : f("", !0)
                ], 512);
              }), 256))
            ])
          ])
        ], 2)
      ], 32)
    ], 34)
  ], 64);
}
const ni = /* @__PURE__ */ z(_s, [["render", ai]]), oi = {
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
    getSize(s) {
      return !s.indexOf || s.indexOf("px") === -1 && s.indexOf("%") === -1 ? `${s}px` : s;
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
}, ot = "https://res.cloudinary.com/c4a8/image/upload/", li = {
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
        return typeof this.lottie != "object" ? u.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? u.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return u.isTrue(this.cloudinary);
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
      var s;
      return ["img__picture-wrapper", (s = this.imgSrcSetValue) == null ? void 0 : s.ratioClasses];
    },
    imgSrcSetValue() {
      return wt[this.imgSrcSets];
    },
    imgSrcSetSources() {
      var s, t;
      return (t = (s = this.imgSrcSetValue) == null ? void 0 : s.srcSets) == null ? void 0 : t.filter((e) => e.media);
    },
    imgSrcSetImg() {
      var t;
      const s = (t = this.imgSrcSetValue) == null ? void 0 : t.srcSets;
      return s ? this.getCloudinaryBasePathLink(s[s.length - 1]) : null;
    }
  },
  watch: {
    animated(s, t) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = R.sizes);
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const s = this.getPreset(), t = this.getTransformationString(s);
      return { preset: s, transformationsString: t };
    },
    getPreset() {
      try {
        return this.preset ? M.presets && M.presets[this.preset] ? Object.assign(R, M.presets[this.preset]) : R : { ...R, ...M.presets.default };
      } catch (s) {
        console.error(s);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var s;
      return u.isTestingStorybook() ? this.img : ((s = this.img) == null ? void 0 : s.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(s) {
      return `${ot}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: t } = this.getSetup(), e = /w_\d+/.test(this.img), r = ot + t, a = `/${this.img}`;
      return e ? `${r}${a}` : `${r},w_${s.fallback_max_width}${a}`;
    },
    loadImage(s) {
      if (!this.canGenerateSrcSet()) return;
      const t = document.createElement("img");
      t.onload = () => {
        const e = t == null ? void 0 : t.naturalHeight, r = t == null ? void 0 : t.naturalWidth;
        let a;
        if (this.isSvg())
          a = {
            naturalHeight: e,
            naturalWidth: r
          };
        else {
          const { preset: i, transformationsString: o } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, a = {
            naturalHeight: e || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: r || (i == null ? void 0 : i.fallback_max_width)
          }, e && r && !this.isSvg() && this.buildSrcSet(i, o);
        }
        this.dimensions = a;
      }, t.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const t = [];
      for (const [r, a] of Object.entries(vt))
        s[r] && t.push(`${a}_${s[r]}`);
      return t.length > 0 ? t.join(",") : "";
    },
    buildSrcSet(s, t) {
      const e = [], r = s.steps, a = s.min_width, o = (s.max_width - a) / (r - 1), { naturalWidth: d } = this.dimensions;
      for (let g = 1; g <= r; g++) {
        const p = a + (g - 1) * o, c = p <= d, x = c ? p : d, T = `${this.hasPictureTag ? this.imgSrcSetImg : `${ot}${t},w_${x}/${this.img}`} ${x}w`;
        if (e.push(T), !c) break;
      }
      this.srcset = d < a ? "" : e.join(`, 
`);
    },
    isGif() {
      if (!this.img) return;
      const s = this.img.split(".")[1];
      return (s == null ? void 0 : s.toLowerCase()) === "gif";
    },
    isSvg() {
      var t;
      const s = u.getExtension(this.getCloudinaryBasePathLink());
      return (s == null ? void 0 : s.toLowerCase()) === "svg" || ((t = this.img) == null ? void 0 : t.indexOf(".svg")) !== -1;
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
  }
}, ci = ["media", "srcset"], hi = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], di = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function ui(s, t, e, r, a, i) {
  const o = oi;
  return i.hasPictureTag ? (n(), h("div", {
    key: 0,
    class: v(i.pictureWrapperClassList)
  }, [
    l("picture", null, [
      (n(!0), h(L, null, E(i.imgSrcSetSources, (d) => (n(), h("source", {
        key: d.params,
        media: d.media,
        srcset: i.getCloudinaryBasePathLink(d)
      }, null, 8, ci))), 128)),
      l("img", {
        onLoad: t[0] || (t[0] = (d) => i.loadImage(i.imgSrcSetImg)),
        ref: "image",
        src: i.imgSrcSetImg,
        loading: i.loading,
        class: v(i.classList),
        alt: e.alt,
        width: a.dimensions.naturalWidth,
        height: a.dimensions.naturalHeight,
        srcset: a.srcset,
        sizes: a.sizes,
        crossorigin: i.crossOriginValue
      }, null, 42, hi)
    ])
  ], 2)) : i.isLottie ? (n(), C(o, B({
    key: 1,
    data: i.jsonLottieData,
    class: i.classListComponent
  }, i.jsonLottieSettingsData), null, 16, ["data", "class"])) : (n(), h("img", {
    key: 2,
    onLoad: t[1] || (t[1] = (d) => i.loadImage()),
    ref: "image",
    src: i.source,
    loading: i.loading,
    class: v(i.classList),
    alt: e.alt,
    width: a.dimensions.naturalWidth,
    height: a.dimensions.naturalHeight,
    srcset: a.srcset,
    sizes: a.sizes,
    crossorigin: i.crossOriginValue
  }, null, 42, di));
}
const gi = /* @__PURE__ */ z(li, [["render", ui]]), pi = {
  install(s) {
    s.component("Cta", It), s.component("Hero", qt), s.component("IntroText", ee), s.component("TextImage", pe), s.component("VFooter", ms), s.component("VHeader", ni), s.component("VImg", gi);
  }
};
export {
  It as Cta,
  qt as Hero,
  ee as IntroText,
  pe as TextImage,
  ms as VFooter,
  ni as VHeader,
  gi as VImg,
  pi as default
};
