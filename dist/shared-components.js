var ze = Object.defineProperty;
var He = (s, e, t) => e in s ? ze(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var L = (s, e, t) => He(s, typeof e != "symbol" ? e + "" : e, t);
import { openBlock as a, createElementBlock as o, mergeProps as M, createElementVNode as l, normalizeClass as _, normalizeStyle as O, createBlock as S, resolveDynamicComponent as ge, toDisplayString as y, createVNode as v, createCommentVNode as u, renderSlot as ce, withCtx as q, Fragment as b, renderList as E, resolveComponent as he, createStaticVNode as pe, createTextVNode as j, withModifiers as je, Transition as qe, withDirectives as Ue, vShow as Ge, normalizeProps as We, guardReactiveProps as Je } from "vue";
const C = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, n] of e)
    t[r] = n;
  return t;
}, Ke = {
  tagName: "arrow",
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  }
};
function Xe(s, e, t, r, n, i) {
  return a(), o("svg", M(t.settings, {
    style: i.style,
    viewBox: "0 0 28 17"
  }), e[0] || (e[0] = [
    l("g", { transform: "translate(0.75 0.75)" }, [
      l("path", {
        d: "M0.5 0.5L26 0.5",
        transform: "translate(0 7)",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }),
      l("path", {
        d: "M0 15L7 7.5L0 0",
        transform: "translate(19 0)",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })
    ], -1)
  ]), 16);
}
const Ze = /* @__PURE__ */ C(Ke, [["render", Xe]]), A = class A {
  static isInViewportPercent(e, t) {
    const r = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, c = { x: r.x, y: r.y, width: r.width, height: r.height }, h = { x: 0, y: 0, width: i, height: n }, m = c.width * c.height, g = A.intersection(c, h);
    return t <= g / m * 100;
  }
  static getScrollTop(e) {
    if (!e) return;
    const t = document.querySelector("header"), r = t ? (t == null ? void 0 : t.offsetHeight) + 40 : 0;
    return e.getBoundingClientRect().top - r + window.scrollY;
  }
  static scrollIntoView(e, t) {
    e && window.scrollTo({
      top: A.getScrollTop(e),
      behavior: t ? "smooth" : "auto"
    });
  }
  static getLang() {
    return (document.querySelector("html").getAttribute("lang") || this.defaultLang).toLowerCase();
  }
  static isNotDefaultLang() {
    return this.getLang() !== this.defaultLang;
  }
  static scrollToTop() {
    A.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(e) {
    return A.getParent(e, ".is-component");
  }
  static getParent(e, t) {
    var n;
    const r = e.parentNode;
    return r === null || r.tagName === "body" ? null : (n = r.parentNode) != null && n.querySelector(t) ? r : A.getParent(r, t);
  }
  static append(e, t) {
    if (e) {
      const r = document.createElement("div");
      r.innerHTML = t != null && t.nodeType ? t.outerHTML : t;
      const n = r == null ? void 0 : r.children[0];
      if (n)
        return e.appendChild(n);
    }
    return null;
  }
  static replace(e, t) {
    e && t && (e.innerHTML = t.innerHTML);
  }
  static generateUrl(e, t, r) {
    let n;
    return e && t && (n = e.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), n = t + A.urlSeperator + n.replace(/-+$/, "") + "-" + r), n;
  }
  static toBase64(e) {
    return new Promise((t, r) => {
      const n = new FileReader();
      n.readAsDataURL(e), n.onload = () => {
        const i = n.result.split(",")[1];
        t(i);
      }, n.onerror = (i) => r(i);
    });
  }
  static toSize(e) {
    const t = ["Bytes", "KB", "MB", "GB", "TB"];
    if (e == 0) return "0 Byte";
    const r = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
    return (e / Math.pow(1024, r)).toFixed(1) + " " + t[r];
  }
  static camalCaseToSnakeCase(e) {
    return e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
  }
  static animateValue(e, t, r, n, i = A.priceFormatter) {
    let c = null;
    const h = (m) => {
      c || (c = m);
      const g = Math.min((m - c) / n, 1), d = g * (r - t) + t, x = i.format(d);
      e.innerHTML = x, g < 1 && window.requestAnimationFrame(h);
    };
    window.requestAnimationFrame(h);
  }
  static isOutsideOf(e, t) {
    const r = t.composedPath ? t.composedPath() : t.path;
    return r ? !r.some((n) => n.className && n.className.includes && n.className.includes(e)) : !1;
  }
  static getExtension(e) {
    return e.split(".").pop();
  }
  static validateVueProps(e) {
    var i;
    const t = (i = e == null ? void 0 : e.$) == null ? void 0 : i.propsOptions[0], r = e == null ? void 0 : e.$props, n = { props: {} };
    return Object.keys(r).map((c) => {
      let h = r[c];
      h === "" && (h = t[c].default), n.props[c] = h;
    }), n;
  }
  static isTrue(e) {
    return e === !0 || e === "true";
  }
  static capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  static sleep(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  static randomRange(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
  }
  static uuid() {
    const e = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), t = A.randomRange(0, 8), r = A.randomRange(0, 16);
    return "u" + [e.substring(t, t + 8), e.substring(r, r + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(e) {
    let t = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const r = A.getBreakpoint();
    return t.indexOf(e) >= t.indexOf(r);
  }
  static isUpperBreakpoint() {
    return !A.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(e) {
    let t;
    const r = e.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), n = e.match(/youtu\.be\/(.{11})/);
    return r ? t = r[2] : n && (t = n[1]), `https://i1.ytimg.com/vi/${t}/maxresdefault.jpg`;
  }
  static truncateWords(e, t) {
    if (!e) return;
    const r = e.split(" "), n = r.slice(0, t).join(" ");
    return r.length > t ? n + " ..." : n;
  }
  static stripHtml(e) {
    if (e)
      return e.replace(new RegExp(/<.*?>/g), "");
  }
  static isGermanDate(e) {
    return !!e.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
  }
  static isStorybook() {
    return !!(typeof window < "u" && window.__STORYBOOK_ADDONS_CHANNEL__);
  }
  static isTestingStorybook() {
    return typeof document > "u" ? !1 : document.location.pathname.indexOf(A.storybookPath) !== -1;
  }
  static getSiteAssetPath(e) {
    return A.isTestingStorybook() ? `${A.storybookPath}${e}` : e;
  }
  static getAssetPath(e) {
    return A.isStorybook() ? `../assets/${e}` : `/_includes/shared-components/assets/${e}`;
  }
  static findRecursive(e, t, r) {
    let n = !1, i, c, h;
    function m(g, d, x, k) {
      if (!n) {
        if (d(g, c)) {
          n = !0, i = k(g, x);
          return;
        }
        for (let T in g)
          typeof g[T] == "object" && (g === h && (c = T), m(g[T], d, g, k));
      }
    }
    return h = e, m(e, t, e, r), i;
  }
  static storageSave(e, t, r = !0) {
    localStorage.setItem(A.storagePrefix + e, r ? JSON.stringify(t) : t);
  }
  static storageGet(e) {
    return localStorage.getItem(A.storagePrefix + e);
  }
  static getJSON(e) {
    var t;
    if (e && typeof e == "object" && ((t = Object.keys(e)) == null ? void 0 : t.length) > 0) return e;
    if (e && typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        console.error("Error parsing JSON:", e);
        return;
      }
  }
  static getElementBgColor(e) {
    if (typeof getComputedStyle != "function") return "";
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return;
    const t = getComputedStyle(e).backgroundColor;
    return t === "rgba(0, 0, 0, 0)" ? null : t;
  }
  static isValidTimeFormat(e) {
    return /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(e);
  }
  static standardizeTimeFormat(e) {
    if (!this.isValidTimeFormat(e)) return e;
    const t = "Uhr";
    let r = e.split("-"), n = r[0].trim();
    n.includes(":") || (n += ":00"), n.length === 4 && (n = "0" + n);
    let i = r[1].trim().replace(` ${t}`, "");
    return i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i), `${n} - ${i} ${t}`;
  }
  static convertToDate(e) {
    const t = e.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (t) {
      const n = parseInt(t[1], 10), i = parseInt(t[2], 10) - 1, c = parseInt(t[3], 10);
      return new Date(c, i, n);
    }
    return null;
  }
  static XMLtoJSON(e) {
    let t = {};
    if (e.nodeType === Node.ELEMENT_NODE) {
      if (e.attributes.length > 0) {
        t["@attributes"] = {};
        for (let r = 0; r < e.attributes.length; r++) {
          const n = e.attributes.item(r);
          t["@attributes"][n.nodeName] = n.nodeValue;
        }
      }
    } else (e.nodeType === Node.TEXT_NODE || e.nodeType === Node.CDATA_SECTION_NODE) && (t = e.nodeValue);
    if (e.hasChildNodes())
      for (let r = 0; r < e.childNodes.length; r++) {
        const n = e.childNodes.item(r), i = n.nodeName;
        if (typeof t[i] > "u")
          t[i] = this.XMLtoJSON(n);
        else {
          if (typeof t[i].push > "u") {
            const c = t[i];
            t[i] = [], t[i].push(c);
          }
          t[i].push(this.XMLtoJSON(n));
        }
      }
    return t;
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
    if (typeof getComputedStyle != "function") return "";
    let t;
    if (e.startsWith("--") || e.startsWith("var(")) {
      const h = e.replace(/--|var\(/, "").replace(/\)$/, ""), m = getComputedStyle(document.documentElement), g = 4;
      t = m.getPropertyValue(h).trim(), t.length === g && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);
    }
    const r = t || e, n = A.red(r), i = A.green(r), c = A.blue(r);
    return `${n}, ${i}, ${c}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
L(A, "defaultLang", "de"), L(A, "urlSeperator", "#"), L(A, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), L(A, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
L(A, "storybookPath", "/shared-components"), L(A, "decodeHTML", (e) => new DOMParser().parseFromString(e, "text/html").documentElement.textContent), L(A, "intersection", (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), n = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return r * n;
}), L(A, "debounce", function(e, t, r) {
  let n;
  return function() {
    const i = this, c = arguments;
    var h = function() {
      n = null, r || e.apply(i, c);
    }, m = r && !n;
    clearTimeout(n), n = setTimeout(h, t), m && e.apply(i, c);
  };
});
let f = A;
const Ye = {
  tagName: "icon",
  data() {
    return f.validateVueProps(this);
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
  }
};
function Qe(s, e, t, r, n, i) {
  return a(), o("span", {
    class: _(i.classList),
    style: O(i.parentStyle)
  }, [
    (a(), S(ge(t.icon), M(i.settings, {
      color: s.props.color,
      closed: t.closed,
      step: t.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const J = /* @__PURE__ */ C(Ye, [["render", Qe]]), $e = {
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
  }
}, et = { class: "badge__text" }, tt = {
  key: 0,
  class: "badge__icon"
};
function st(s, e, t, r, n, i) {
  const c = J;
  return a(), o("div", {
    class: _(i.classList),
    style: O(i.style)
  }, [
    l("div", et, y(t.text), 1),
    t.icon ? (a(), o("div", tt, [
      v(c, {
        icon: t.icon,
        color: "var(--color-badge-icon)",
        size: "medium"
      }, null, 8, ["icon"])
    ])) : u("", !0)
  ], 6);
}
const Te = /* @__PURE__ */ C($e, [["render", st]]), it = {
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
  }
};
function rt(s, e, t, r, n, i) {
  return t.hideContainer ? ce(s.$slots, "default", { key: 1 }) : (a(), o("div", {
    key: 0,
    class: _(i.classList)
  }, [
    ce(s.$slots, "default")
  ], 2));
}
const fe = /* @__PURE__ */ C(it, [["render", rt]]), p = {
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
}, nt = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return f.isTrue(this.external);
    },
    downloadValue() {
      return f.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        f.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        f.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && f.isTrue(this.active) === !0 ? p.ACTIVE : "",
        f.isTrue(this.loading) ? p.LOADING : "",
        f.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
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
}, at = { class: "cta__text" };
function lt(s, e, t, r, n, i) {
  const c = J;
  return a(), S(ge(i.tag), {
    role: "button",
    class: _(i.classList),
    "data-text": t.text,
    href: t.href ? t.href : null,
    "data-analytics": t.analytics ? t.analytics : null,
    type: t.type ? t.type : null,
    target: i.targetValue ? i.targetValue : null,
    "data-alternative-href": t.alternativeHref ? t.alternativeHref : null,
    "data-trigger": t.trigger ? t.trigger : null
  }, {
    default: q(() => [
      l("span", at, y(t.text), 1),
      i.hasIcon ? (a(), S(c, {
        key: 0,
        icon: i.iconName,
        size: i.sizeValue
      }, null, 8, ["icon", "size"])) : u("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const G = /* @__PURE__ */ C(nt, [["render", lt]]), I = {
  REFRESH_ANIMATE_NUMBERS: "refresh-animate-numbers",
  FAB_BUTTON_CLOSE: "fab-button-close",
  FORM_AJAX_SUBMIT: "form-ajax-submit",
  FORM_RESET: "form-reset",
  FORM_ATTACHMENT_ERROR: "form-attachment-error",
  FORM_FIELD_UPDATED: "form-field-updated",
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
}, ot = {
  tagName: "card-footer",
  data() {
    return {
      maxTags: 3
    };
  },
  computed: {
    lang() {
      return f.getLang();
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
}, ct = {
  tagName: "card",
  components: {
    "card-footer": ot
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
      return f.isTrue(this.hasAnimation) === !0;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? "1" : null;
    },
    rowValue() {
      return f.isTrue(this.row) === !0;
    },
    variant() {
      return f.isTrue(this.long) === !0 ? "card--long" : this.productValue ? "card--products" : f.isTrue(this.event) === !0 ? "card--event" : this.rowValue ? "card--row" : "card--default";
    },
    classList() {
      return [
        "card",
        this.hasAnimationValue ? "utility-animation fade-in-bottom" : "",
        `${this.noLink ? "card--no-link" : ""}`,
        `${f.isTrue(this.large) === !0 ? "card--large mb-11" : "h-100"}`,
        this.variant,
        this.spacing,
        "vue-component"
      ];
    },
    productValue() {
      return f.getJSON(this.product);
    },
    truncatedExcerpt() {
      const s = f.isTrue(this.long) === !0 ? this.strippedExcerpt : f.truncateWords(this.strippedExcerpt, this.wordsToTruncate);
      return f.decodeHTML(s);
    },
    strippedExcerpt() {
      return f.stripHtml(this.excerpt);
    },
    cardDate() {
      return this.formatDate(this.date);
    },
    hasExtension() {
      return this.youtubeUrl ? f.getYoutubeThumbnail(this.youtubeUrl) : /^.+\.(jpg|webp|png)/.test(this.blogTitlePic) ? this.blogTitlePic : this.blogTitlePic + ".jpg";
    },
    hasBlogTitlePic() {
      return !this.youtubeUrl;
    },
    hasNoLink() {
      return !!f.isTrue(this.webCast);
    },
    ctaValue() {
      const s = f.getJSON(this.cta);
      return s && s.link === void 0 && (s.link = !0), s;
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
    if (f.isTrue(this.store) !== !0) return;
    const s = this.$root.StoreData.blogView;
    if (!s) return null;
    this.activeView = s(), s.subscribe((e) => {
      this.activeView = e;
    });
  },
  methods: {
    isTags(s) {
      return !!(s.parentElement.classList.contains("tags__btn") || s.parentElement.classList.contains("card__tags"));
    },
    formatDate(s) {
      if (!s) return;
      if (f.isGermanDate(s)) return s;
      const t = s.split(" ")[0].split("-"), r = t[0], n = t[1];
      return `${t[2]}.${n}.${r}`;
    },
    authorList(s) {
      return s && typeof s == "object" && s.length > 0 ? s : s && typeof s == "string" ? [s] : s;
    },
    subPointsList(s) {
      return f.getJSON(s);
    },
    headlineClassValue(s) {
      return s !== 0 ? "mt-5" : "";
    },
    handleClick(s) {
      if (this.noLink) return;
      const e = this.$refs.title, t = s.target;
      if (t.classList.contains("card__title")) return;
      const r = this.isTags(t);
      if (!t.parentElement.classList.contains("authors__link") && !r)
        s.stopImmediatePropagation(), e.click();
      else {
        if (!r) return;
        s.stopImmediatePropagation(), s.preventDefault(), this.$emit(I.CARD_TAG_CLICKED, t.dataset.tag);
      }
    },
    isIncluded(s) {
      return f.isTrue(s) ? "check-mark" : "x-mark";
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
}, dt = {
  tagName: "headline",
  computed: {
    tag() {
      return this.level ? this.level : "h2";
    },
    classList() {
      return `${this.classes && f.hasFontSizeClass(this.classes) ? this.classes : `${this.tag}-font-size ${this.classes ? this.classes : ""}`} headline vue-component`;
    },
    dataUtilityAnimationStep() {
      return this.utilityAnimationStep ? this.utilityAnimationStep : null;
    }
  },
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number }
};
function ht(s, e, t, r, n, i) {
  return t.text ? (a(), S(ge(i.tag), {
    key: 0,
    class: _(i.classList),
    innerHTML: t.text,
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (a(), S(ge(i.tag), {
    key: 1,
    class: _(i.classList),
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, {
    default: q(() => [
      ce(s.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const B = /* @__PURE__ */ C(dt, [["render", ht]]);
class te {
  constructor(e) {
    this.root = e, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(I.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(I.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
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
    var e, t;
    return this.isHeaderSticky() ? ((t = this.headerSpacer) == null ? void 0 : t.offsetHeight) || 0 : ((e = this.header) == null ? void 0 : e.offsetHeight) || 0;
  }
  isHeaderSticky() {
    if (!this.header) return !1;
    const e = window.getComputedStyle(this.header);
    return e.position === "fixed" || e.position === "absolute" || e.position === "sticky";
  }
  updateClipPath(e) {
    const t = "inset(0% 0% " + e + "%)";
    this.root.style.clipPath = t, this.isUpdating = !1;
  }
  isFirstChild(e) {
    return this.firstChild === e;
  }
  isSticky() {
    return this.root.classList.contains(p.STICKY);
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
  getPercentage(e, t) {
    this.calculatedOffsetTop = this.currentTopPosition - t - this.marginTop + this.getMainOffsetTop(), this.calculatedOffsetBottom = this.currentBottomPosition - t + this.getMainOffsetTop(), this.marginTop < 0 && (this.calculatedOffsetBottom -= this.marginTop);
    let r = e, n;
    if (this.calculatedOffsetBottom >= r) {
      let i = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? n = r / i : n = (r - this.calculatedOffsetTop) / i;
    } else
      n = this.maxPercentage;
    return parseFloat(n.toFixed(2));
  }
  isOutOfViewport(e) {
    return e >= this.maxPercentage || e < 0;
  }
  setStickyPosition() {
    const e = this.getHeaderHeight(), t = window.scrollY, r = this.root.offsetHeight - window.innerHeight, n = r > 0 ? this.offsetBottom : this.offsetBottom - e;
    let i = r > 0 ? -r : 0;
    i = i - this.marginTop;
    const c = this.getPercentage(t, i), h = this.isOutOfViewport(c), m = t > n - window.innerHeight;
    !h && m ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = i + "px", this.root.classList.remove(p.OFF_SCREEN), this.root.classList.add(p.STICKY), this.updateClipPath(c)) : c === 0 ? (this.isUpdating = !1, this.root.classList.remove(p.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(p.STICKY), this.root.classList.add(p.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const e = this.root.parentNode;
    this.spacer = document.createElement("div"), e && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), e.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(p.HAS_BACKGROUND) || f.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const e = this.spacer.nextSibling, t = "--color-sticky-scroller";
    if (!e) return;
    const r = f.getElementBgColor(e) || f.getElementBgColor(e.firstChild);
    this.spacer.style.setProperty(t, r), this.spacer.classList.add(p.HAS_BACKGROUND);
  }
  setDimensions() {
    const e = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > e ? e : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(p.STICKY);
  }
  static init(e) {
    this.instances = [], [].forEach.call(e || document.querySelectorAll(this.rootSelector), (t) => {
      this.instances.push(new this(t));
    });
  }
  static getRootClass() {
    return this.rootSelector.substring(1);
  }
}
L(te, "rootSelector", ".is-sticky-scroller"), L(te, "instances", []);
const ut = {
  tagName: "blog-recent",
  computed: {
    classList() {
      return [
        "blog-recent utility-animation utility-animation--percentage-offset",
        `${this.hasBackground}`,
        `${this.skinClass}`,
        `${f.isTrue(this.hideContainer) === !0 ? "" : this.getSpacing}`,
        `${f.isTrue(this.sticky) === !0 ? te.rootSelector.substring(1) : ""}`,
        "vue-component"
      ];
    },
    getSpacing() {
      return this.spacing ? this.spacing : "";
    },
    hasBackground() {
      return this.bgColor ? p.HAS_BACKGROUND : "";
    },
    blogRecentContainerClass() {
      return [
        "blog-recent__container fade-in-bottom",
        `${f.isTrue(this.slider) === !0 ? "js-slick-carousel" : "row mb-3"}`,
        "vue-component"
      ];
    },
    hiddenContainer() {
      return f.isTrue(this.slider) === !1 ? f.isTrue(this.hideContainer) : !1;
    },
    skinClass() {
      return `${f.isTrue(this.slider) === !0 ? "has-slider" : ""}`;
    },
    itemClass() {
      return `${f.isTrue(this.slider) === !0 ? "mb-6 mb-lg-0 blog-recent__slide" : "col-sm-6 col-lg-4 mb-3 mb-sm-8"}`;
    },
    postsArray() {
      return this.posts ? JSON.parse(this.posts) : [];
    },
    ctaParse() {
      return this.cta ? JSON.parse(this.cta) : null;
    },
    caseStudies() {
      return f.isTrue(this.caseStudies) === !0;
    },
    carouselOptions() {
      const s = {
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
      return JSON.stringify(s);
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      const s = "h2-font-size";
      return this.headlineClasses ? f.hasFontSizeClass(this.headlineClasses) ? this.headlineClasses : `${s} ${this.headlineClasses}` : s;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : "font-size-2"}`;
    }
  },
  methods: {
    event(s) {
      return s.layout !== "post";
    },
    isTrue(s) {
      return f.isTrue(s);
    },
    blogTitleUrl(s) {
      return s.layout === "casestudies" ? s.blogtitlepic : this.imgUrl + s.blogtitlepic;
    },
    target(s) {
      return s.external ? "_blank" : "_self";
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
  }
}, mt = {
  key: 0,
  class: "row"
}, gt = {
  class: "col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom",
  "data-utility-animation-step": "1"
}, ft = ["data-hs-slick-carousel-options"], _t = {
  key: 1,
  class: "blog-recent__cta-row row col-lg-12"
};
function pt(s, e, t, r, n, i) {
  const c = B, h = ct, m = G, g = fe;
  return i.postsArray.length > 0 ? (a(), o("div", {
    key: 0,
    class: _(i.classList)
  }, [
    i.skinClass !== "" ? (a(), o("div", {
      key: 0,
      class: "blog-recent__bg",
      style: O({ "background-color": t.bgColor })
    }, null, 4)) : u("", !0),
    v(g, { hideContainer: i.hiddenContainer }, {
      default: q(() => {
        var d, x, k, T, N, X;
        return [
          t.headline ? (a(), o("div", mt, [
            l("div", gt, [
              v(c, {
                level: i.headlineLevelValue,
                text: t.headline,
                classes: i.headlineClassesValue
              }, null, 8, ["level", "text", "classes"]),
              t.subline ? (a(), o("span", {
                key: 0,
                class: _(i.sublineClassesValue)
              }, y(t.subline), 3)) : u("", !0)
            ])
          ])) : u("", !0),
          l("div", {
            class: _(i.blogRecentContainerClass),
            "data-hs-slick-carousel-options": i.carouselOptions,
            "data-utility-animation-step": "1"
          }, [
            (a(!0), o(b, null, E(i.postsArray, (P, w) => (a(), o(b, null, [
              w <= t.limit ? (a(), o("div", {
                key: 0,
                class: _(i.itemClass)
              }, [
                v(h, {
                  url: P.url,
                  title: P.title,
                  "blog-title-pic": i.blogTitleUrl(P),
                  "youtube-url": P.youtubeUrl,
                  excerpt: P.excerpt,
                  date: P.date,
                  author: P.author,
                  target: i.target(P),
                  event: i.event(P),
                  dataAuthors: t.dataAuthors,
                  "external-language": P.externalLanguage
                }, null, 8, ["url", "title", "blog-title-pic", "youtube-url", "excerpt", "date", "author", "target", "event", "dataAuthors", "external-language"])
              ], 2)) : u("", !0)
            ], 64))), 256))
          ], 10, ft),
          i.ctaParse ? (a(), o("div", _t, [
            v(m, {
              text: (d = i.ctaParse) == null ? void 0 : d.text,
              button: (x = i.ctaParse) == null ? void 0 : x.button,
              target: (k = i.ctaParse) == null ? void 0 : k.target,
              width: (T = i.ctaParse) == null ? void 0 : T.width,
              href: (N = i.ctaParse) == null ? void 0 : N.href,
              external: (X = i.ctaParse) == null ? void 0 : X.external
            }, null, 8, ["text", "button", "target", "width", "href", "external"])
          ])) : u("", !0)
        ];
      }),
      _: 1
    }, 8, ["hideContainer"])
  ], 2)) : u("", !0);
}
const yt = /* @__PURE__ */ C(ut, [["render", pt]]), vt = {
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
}, bt = {
  tagName: "carousel",
  components: {
    "carousel-item": vt
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null
    };
  },
  computed: {
    jsonItems() {
      return f.getJSON(this.items);
    },
    classList() {
      return ["carousel vue-component", this.bgColor ? p.HAS_BACKGROUND : ""];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : "",
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : ""
      ];
    }
  },
  mounted() {
    const s = this.$refs["row-section"];
    this.resizeObserver = new ResizeObserver((e) => {
      for (let t of e)
        t.target === s && (this.clientWidth = t.contentRect.width);
    }), s && (this.resizeObserver.observe(s), window.addEventListener("resize", this.updateClientWidth));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      var s;
      this.clientWidth = (s = this.$refs["row-section"]) == null ? void 0 : s.clientWidth;
    }
  },
  props: {
    items: Array,
    bgColor: String
  }
}, xt = { class: "carousel__container" }, St = { class: "carousel__row" }, wt = {
  class: "carousel__row-section",
  ref: "row-section"
}, kt = { class: "carousel__row-section" };
function Ct(s, e, t, r, n, i) {
  const c = he("carousel-item");
  return a(), o("div", {
    class: _(i.classList),
    ref: "carousel",
    style: O(i.style)
  }, [
    l("div", xt, [
      l("div", St, [
        l("section", wt, [
          (a(!0), o(b, null, E(i.jsonItems, (h, m) => (a(), S(c, {
            item: h,
            key: m
          }, null, 8, ["item"]))), 128))
        ], 512),
        l("section", kt, [
          (a(!0), o(b, null, E(i.jsonItems, (h, m) => (a(), S(c, {
            item: h,
            key: m
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const Lt = /* @__PURE__ */ C(bt, [["render", Ct]]), Et = {
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
  }
}, Tt = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, At = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Dt = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ot(s, e, t, r, n, i) {
  return t.icon === "site/mail" && t.noSpan === !0 ? (a(), o("svg", Tt, [
    l("title", null, y(t.icon), 1),
    e[0] || (e[0] = pe('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : t.icon == "site/mail" ? (a(), o("span", {
    key: 1,
    class: _(i.classList)
  }, [
    (a(), o("svg", At, [
      l("title", null, y(t.icon), 1),
      e[1] || (e[1] = pe('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : t.icon == "site/phone" ? (a(), o("span", {
    key: 2,
    class: _(i.classList)
  }, [
    (a(), o("svg", Dt, [
      l("title", null, y(t.icon), 1),
      e[2] || (e[2] = l("g", {
        id: "phone",
        transform: "matrix(0.9848077 0.17364818 -0.17364818 0.9848077 5.730377 0)"
      }, [
        l("path", {
          d: "M25.076 32C23.9878 32 22.9343 31.6841 22.0326 31.0871C13.6133 25.4928 6.50909 18.3887 0.914793 9.97086C-0.531095 7.79022 -0.237464 4.86645 1.61478 3.0184L3.48511 1.14529C4.22405 0.406349 5.20653 0 6.25303 0C7.29952 0 8.282 0.406349 9.02095 1.14529L12.436 4.55612C13.9598 6.08271 13.9598 8.56534 12.4374 10.0919L11.7457 10.785C14.6097 14.2069 17.7937 17.3923 21.2157 20.2576L21.9059 19.5674C22.6532 18.8243 23.6329 18.4207 24.6738 18.4207C25.7203 18.4207 26.7028 18.8284 27.4418 19.5674L30.8568 22.9824C32.382 24.509 32.3806 26.9916 30.8554 28.5168L28.9837 30.3899C27.9441 31.428 26.5567 32 25.076 32ZM6.25303 1.39161C5.5781 1.39161 4.94491 1.65323 4.46898 2.12916L2.59865 4.00226C1.21399 5.38413 0.994115 7.57034 2.0754 9.19991C7.56532 17.4633 14.5387 24.4366 22.8021 29.9265C23.4757 30.3732 24.2619 30.6084 25.0774 30.6084C26.1851 30.6084 27.2247 30.1812 28.0026 29.4047L29.8743 27.5329C30.8582 26.5491 30.8582 24.9501 29.8757 23.9663C29.8757 23.9663 26.4607 20.5513 26.4607 20.5513C25.9847 20.0753 25.3516 19.8123 24.678 19.8123C24.0045 19.8123 23.3713 20.0739 22.8954 20.5499L21.7556 21.6896C21.6248 21.8204 21.4495 21.8928 21.263 21.8928C21.103 21.8928 20.9457 21.8371 20.8218 21.7341C16.981 18.5738 13.4324 15.0238 10.272 11.1816C10.0438 10.9032 10.0633 10.5025 10.3165 10.2478L11.4549 9.10668C12.4374 8.12281 12.4374 6.52107 11.4549 5.5372L8.03847 2.12916C7.56254 1.65323 6.92796 1.39161 6.25303 1.39161Z",
          transform: "translate(0.17733586 0.59690577)",
          class: "a"
        })
      ], -1))
    ]))
  ], 2)) : u("", !0);
}
const be = /* @__PURE__ */ C(Et, [["render", Ot]]), It = {
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
  }
};
function Nt(s, e, t, r, n, i) {
  return a(), o("div", {
    class: _(i.classList)
  }, null, 2);
}
const Ae = /* @__PURE__ */ C(It, [["render", Nt]]), ue = {
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
}, Pt = {
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
}, me = {
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
}, Vt = {
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
}, _e = "https://res.cloudinary.com/c4a8/image/upload/", Mt = {
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
        return typeof this.lottie != "object" ? f.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? f.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return f.isTrue(this.cloudinary);
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
      return this.imgSrcSets;
    },
    pictureWrapperClassList() {
      var s;
      return ["img__picture-wrapper", (s = this.imgSrcSetValue) == null ? void 0 : s.ratioClasses];
    },
    imgSrcSetValue() {
      return typeof this.imgSrcSets == "string" ? Vt[this.imgSrcSets] : this.imgSrcSets;
    },
    imgSrcSetSources() {
      var s, e;
      return (e = (s = this.imgSrcSetValue) == null ? void 0 : s.srcSets) == null ? void 0 : e.filter((t) => t.media || t.src);
    },
    imgSrcSetImg() {
      var e;
      const s = (e = this.imgSrcSetValue) == null ? void 0 : e.srcSets;
      return s ? this.getCloudinaryBasePathLink(s[s.length - 1]) : null;
    }
  },
  watch: {
    animated(s, e) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = ue.sizes);
  },
  methods: {
    getSourceSetMedia(s) {
      return s.width ? `(min-width: ${s.width}px)` : s.media;
    },
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const s = this.getPreset(), e = this.getTransformationString(s);
      return { preset: s, transformationsString: e };
    },
    getPreset() {
      try {
        return this.preset ? me.presets && me.presets[this.preset] ? Object.assign(ue, me.presets[this.preset]) : ue : { ...ue, ...me.presets.default };
      } catch (s) {
        console.error(s);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var s;
      return f.isTestingStorybook() ? this.img : ((s = this.img) == null ? void 0 : s.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(s) {
      return s && s.src ? `${s.src}` : `${_e}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: e } = this.getSetup(), t = /w_\d+/.test(this.img), r = _e + e, n = `/${this.img}`;
      return t ? `${r}${n}` : `${r},w_${s.fallback_max_width}${n}`;
    },
    loadImage(s) {
      if (!this.canGenerateSrcSet()) return;
      const e = document.createElement("img");
      e.onload = () => {
        const t = e == null ? void 0 : e.naturalHeight, r = e == null ? void 0 : e.naturalWidth;
        let n;
        if (this.isSvg())
          n = {
            naturalHeight: t,
            naturalWidth: r
          };
        else {
          const { preset: i, transformationsString: c } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, n = {
            naturalHeight: t || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: r || (i == null ? void 0 : i.fallback_max_width)
          }, t && r && !this.isSvg() && this.buildSrcSet(i, c);
        }
        this.dimensions = n;
      }, e.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const e = [];
      for (const [r, n] of Object.entries(Pt))
        s[r] && e.push(`${n}_${s[r]}`);
      return e.length > 0 ? e.join(",") : "";
    },
    buildSrcSet(s, e) {
      const t = [], r = s.steps, n = s.min_width, c = (s.max_width - n) / (r - 1), { naturalWidth: h } = this.dimensions;
      for (let m = 1; m <= r; m++) {
        const g = n + (m - 1) * c, d = g <= h, x = d ? g : h, T = `${this.hasPictureTag ? this.imgSrcSetImg : `${_e}${e},w_${x}/${this.img}`} ${x}w`;
        if (t.push(T), !d) break;
      }
      this.srcset = h < n ? "" : t.join(`, 
`);
    },
    isGif() {
      if (!this.img) return;
      const s = this.img.split(".")[1];
      return (s == null ? void 0 : s.toLowerCase()) === "gif";
    },
    isSvg() {
      var e;
      const s = f.getExtension(this.getCloudinaryBasePathLink());
      return (s == null ? void 0 : s.toLowerCase()) === "svg" || ((e = this.img) == null ? void 0 : e.indexOf(".svg")) !== -1;
    }
  },
  props: {
    // TODO handle img src set and correct all the places where it is not used correctly
    imgSrcSets: {
      type: [String, Object],
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
}, Rt = ["media", "srcset"], Ft = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], Bt = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function zt(s, e, t, r, n, i) {
  const c = Ae;
  return i.hasPictureTag ? (a(), o("div", {
    key: 0,
    class: _(i.pictureWrapperClassList)
  }, [
    l("picture", null, [
      (a(!0), o(b, null, E(i.imgSrcSetSources, (h) => (a(), o("source", {
        key: h.params,
        media: i.getSourceSetMedia(h),
        srcset: i.getCloudinaryBasePathLink(h)
      }, null, 8, Rt))), 128)),
      l("img", {
        onLoad: e[0] || (e[0] = (h) => i.loadImage(i.imgSrcSetImg)),
        ref: "image",
        src: i.imgSrcSetImg,
        loading: i.loading,
        class: _(i.classList),
        alt: t.alt,
        width: n.dimensions.naturalWidth,
        height: n.dimensions.naturalHeight,
        srcset: n.srcset,
        sizes: n.sizes,
        crossorigin: i.crossOriginValue
      }, null, 42, Ft)
    ])
  ], 2)) : i.isLottie ? (a(), S(c, M({
    key: 1,
    data: i.jsonLottieData,
    class: i.classListComponent
  }, i.jsonLottieSettingsData), null, 16, ["data", "class"])) : (a(), o("img", {
    key: 2,
    onLoad: e[1] || (e[1] = (h) => i.loadImage()),
    ref: "image",
    src: i.source,
    loading: i.loading,
    class: _(i.classList),
    alt: t.alt,
    width: n.dimensions.naturalWidth,
    height: n.dimensions.naturalHeight,
    srcset: n.srcset,
    sizes: n.sizes,
    crossorigin: i.crossOriginValue
  }, null, 42, Bt));
}
const K = /* @__PURE__ */ C(Mt, [["render", zt]]), Ht = {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return f.getJSON(this.list);
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
  }
}, jt = { class: "cta-list__item d-inline-block mr-3 mb-2" };
function qt(s, e, t, r, n, i) {
  const c = G;
  return a(), o("div", {
    class: _(i.classList)
  }, [
    (a(!0), o(b, null, E(i.ctaList, (h) => (a(), o("div", jt, [
      v(c, M({ ref_for: !0 }, h, {
        text: i.text(h),
        href: i.href(h),
        type: i.type(h)
      }), null, 16, ["text", "href", "type"])
    ]))), 256))
  ], 2);
}
const se = /* @__PURE__ */ C(Ht, [["render", qt]]), Ut = {
  tagName: "form-select",
  computed: {
    required() {
      var s;
      return (s = this.field) != null && s.required ? "required" : null;
    }
  },
  props: {
    options: Array,
    field: Object,
    id: String
  }
}, Gt = ["for"], Wt = ["name", "required"], Jt = { value: "" }, Kt = ["value"];
function Xt(s, e, t, r, n, i) {
  return a(), o(b, null, [
    l("label", {
      class: "input-label",
      for: t.id
    }, y(t.field.label), 9, Gt),
    l("select", {
      class: "form-control custom-select text-muted",
      name: t.id,
      required: i.required
    }, [
      l("option", Jt, y(t.field.placeholder), 1),
      (a(!0), o(b, null, E(t.options, (c) => (a(), o("option", {
        value: c.value
      }, y(c.text), 9, Kt))), 256))
    ], 8, Wt)
  ], 64);
}
const De = /* @__PURE__ */ C(Ut, [["render", Xt]]), Zt = {
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
      const s = Array.from(this.files.files);
      return this.filesLength > this.maxFilesValue ? s.slice(0, this.maxFilesValue) : s;
    },
    classList() {
      return [
        "form-attachments",
        this.hasError === !0 ? "has-error" : "",
        this.isDragging ? p.DRAGGING : "",
        "vue-component"
      ];
    },
    interactableClassList() {
      return ["form-attachments__interactable", this.hasErrors ? p.HAS_ERROR : ""];
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
      const s = this.extensions.map((e) => f.capitalize(e));
      return s == null ? void 0 : s.join(", ");
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensions.map((s) => `.${s}`).join(",");
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
    var s, e;
    this.root = this.$refs.root, this.interactable = this.$refs.interactable, this.button = this.$refs.button, this.textElement = this.$refs.text, this.file = this.$refs.file, this.error = this.$refs.error, this.base64 = this.$refs.base64, this.bindEvents(), (e = (s = window.i18n) == null ? void 0 : s.loader) == null || e.then(() => {
      var t, r, n;
      this.wrongTypeText = (t = window.i18n) == null ? void 0 : t.translate("formAttachmentsWrongType"), this.maxFilesText = (r = window.i18n) == null ? void 0 : r.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (n = window.i18n) == null ? void 0 : n.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(I.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
      const s = f.getParent(this.root, "form");
      s && s.addEventListener("reset", this.reset.bind(this));
    },
    handleFormAttachmentError(s) {
      this.showError(this.maxSizeText);
    },
    handleDragStart(s) {
      s.preventDefault(), s.stopPropagation();
    },
    handleDragOver(s) {
      s.preventDefault(), s.stopPropagation(), window.clearTimeout(this.dropTimeout), this.isDragging = !0;
    },
    handleDrop(s) {
      var t;
      s.preventDefault(), s.stopPropagation();
      const e = (t = s == null ? void 0 : s.dataTransfer) == null ? void 0 : t.files;
      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = !1, s.type === "drop" && this.handleDroppedFiles(e);
      }, 50);
    },
    isAllowedFileExtension(s) {
      var n;
      if (!s) return;
      const e = (n = this.file.getAttribute("accept")) == null ? void 0 : n.toLowerCase(), t = (e == null ? void 0 : e.split(",")) || [], r = f.getExtension(s.name);
      return t.includes(`.${r}`);
    },
    isUnderMaxSize(s) {
      if (!(!s || !s.size))
        return s.size <= this.maxSize;
    },
    handleDroppedFiles(s) {
      const e = this.getErrors(s);
      if (e) return this.showError(e);
      this.appendDroppedFiles(s);
    },
    handleAddAttachment() {
      this.file.click();
    },
    restoreDataTransfer() {
      this.file.files = this.files.files;
    },
    showError(s) {
      this.restoreDataTransfer(), this.setErrorText(s), this.hasError = !0;
    },
    setErrorText(s) {
      this.error && (this.error.innerText = s);
    },
    reset() {
      this.file.files = null, this.files = new DataTransfer(), this.resetError();
    },
    resetError() {
      this.setErrorText(this.requiredMsg), this.hasError = !1;
    },
    appendDroppedFiles(s) {
      this.base64 && (this.isRequired && (this.file.required = !1), this.appendFiles(s));
    },
    areFilesAllowed(s) {
      return Array.from(s).every((e) => this.isAllowedFileExtension(e));
    },
    getErrors(s) {
      if (!this.areFilesAllowed(s)) return this.wrongTypeText;
      if (this.files.files.length + s.length > this.maxFilesValue) return this.maxFilesText;
      if (!Array.from(s).every((e) => this.isUnderMaxSize(e))) return this.maxSizeText;
    },
    appendFiles(s) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);
      Array.from(s).forEach((e) => {
        this.files.items.add(e);
      }), this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length, this.file.files = this.files.files, this.resetError();
    },
    handleChange(s) {
      var r;
      const e = (r = s == null ? void 0 : s.target) == null ? void 0 : r.files, t = this.getErrors(e);
      if (t) return this.showError(t);
      this.appendFiles(e);
    },
    handleClick(s) {
      this.files.files[s] && (this.files.items.remove(s), this.syncFiles());
    },
    toSize(s) {
      return f.toSize(s);
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
}, Yt = {
  tagName: "form-radio",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var s;
      return (s = this.radio) != null && s.required ? "required" : null;
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
    changed(s) {
      this.$emit("action-changed", s.changeAction || null);
    }
  }
}, Qt = { class: "form__radio-control mb-1 vue-component" }, $t = ["data-form-group", "required", "name", "id"], es = ["for"], ts = ["name", "id", "placeholder", "data-form-group"], ss = ["name", "id", "data-form-group", "required"], is = ["for", "innerHTML"];
function rs(s, e, t, r, n, i) {
  var c, h, m;
  return a(), o("div", Qt, [
    (c = t.radio) != null && c.placeholder ? (a(), o(b, { key: 0 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        "data-form-group": t.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId
      }, null, 8, $t),
      l("label", {
        class: "form__radio-label",
        for: i.otherId
      }, null, 8, es),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: t.name,
        id: i.idValue,
        placeholder: (h = t.radio) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, ts)
    ], 64)) : (a(), o(b, { key: 1 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        name: t.name,
        id: i.idValue,
        "data-form-group": t.group,
        required: i.required,
        onChange: e[0] || (e[0] = (g) => i.changed(t.radio))
      }, null, 40, ss),
      l("label", {
        class: "form__radio-label",
        for: i.idValue,
        innerHTML: (m = t.radio) == null ? void 0 : m.label
      }, null, 8, is)
    ], 64))
  ]);
}
const xe = /* @__PURE__ */ C(Yt, [["render", rs]]), ns = {
  tagName: "form-radios",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var s;
      return (s = this.radio) != null && s.required ? "required" : null;
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
  }
}, as = ["data-msg"], ls = { class: "d-flex flex-wrap" };
function os(s, e, t, r, n, i) {
  var h, m;
  const c = xe;
  return a(), o(b, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, as),
    l("div", ls, [
      (a(!0), o(b, null, E((m = t.field) == null ? void 0 : m.radios, (g) => (a(), S(c, {
        class: "pr-10",
        radio: g,
        group: t.id,
        name: t.id,
        id: t.field.id + g.id,
        onActionChanged: e[0] || (e[0] = (d) => s.$emit("action-changed", d))
      }, null, 8, ["radio", "group", "name", "id"]))), 256))
    ])
  ], 64);
}
const Oe = /* @__PURE__ */ C(ns, [["render", os]]), cs = {
  tagName: "form-checkbox",
  computed: {
    otherId() {
      return `${this.idValue}_checkbox`;
    },
    required() {
      var s;
      return (s = this.checkbox) != null && s.required ? "required" : null;
    },
    idValue() {
      return this.id ? this.id : this.checkbox.id;
    }
  },
  methods: {
    handleChange(s) {
      const t = s.currentTarget.value;
      this.$emit(I.FORM_FIELD_UPDATED, { value: t, id: this.id });
    }
  },
  props: {
    checkbox: Object,
    group: String,
    id: String
  }
}, ds = { class: "form__checkbox-control custom-control custom-checkbox mb-1 vue-component" }, hs = ["data-form-group", "required", "name", "id"], us = ["for"], ms = ["name", "id", "placeholder", "data-form-group"], gs = ["name", "id", "data-form-group", "required"], fs = ["for", "innerHTML"];
function _s(s, e, t, r, n, i) {
  var c, h, m;
  return a(), o("div", ds, [
    (c = t.checkbox) != null && c.placeholder ? (a(), o(b, { key: 0 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        "data-form-group": t.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId,
        onChange: e[0] || (e[0] = (...g) => i.handleChange && i.handleChange(...g))
      }, null, 40, hs),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.otherId
      }, null, 8, us),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: i.idValue,
        id: i.idValue,
        placeholder: (h = t.checkbox) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, ms)
    ], 64)) : (a(), o(b, { key: 1 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        name: i.idValue,
        id: i.idValue,
        "data-form-group": t.group,
        required: i.required,
        onChange: e[1] || (e[1] = (...g) => i.handleChange && i.handleChange(...g))
      }, null, 40, gs),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.idValue,
        innerHTML: (m = t.checkbox) == null ? void 0 : m.label
      }, null, 8, fs)
    ], 64))
  ]);
}
const Se = /* @__PURE__ */ C(cs, [["render", _s]]), ps = {
  tagName: "form-checkboxes",
  computed: {
    required() {
      var s;
      return (s = this.checkbox) != null && s.required ? "required" : null;
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
  }
}, ys = ["data-msg"];
function vs(s, e, t, r, n, i) {
  var h, m;
  const c = Se;
  return a(), o(b, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, ys),
    (a(!0), o(b, null, E((m = t.field) == null ? void 0 : m.checkboxes, (g) => (a(), S(c, {
      checkbox: g,
      group: i.groupId,
      id: t.field.id + g.id
    }, null, 8, ["checkbox", "group", "id"]))), 256))
  ], 64);
}
const Ie = /* @__PURE__ */ C(ps, [["render", vs]]), V = class V {
  constructor(e) {
    this.root = e, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${p.IS_STARTING}`).forEach((e) => {
      e.classList.remove(p.IS_STARTING);
    });
  }
  mergeNodes(e, t) {
    const r = Array.from(t);
    return r.unshift(e), r;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(e) {
    const t = [];
    this.currentElements.forEach((r) => {
      e.srcElement !== r && t.push(r);
    }), this.currentElements = t;
  }
  handleAnimationEnd(e) {
    const t = V.getGroup(e.srcElement);
    if (t) {
      const r = parseInt(t.style.getPropertyValue(V.groupItemsLoadedProperty), 10) || 0;
      V.setGroupItemsLoaded(t, r + 1);
    }
    this.updateCurrentElement(e), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(e) {
    e.forEach((t) => {
      t.classList.add(p.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(V.endDataset, !0);
  }
  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }
  static getGroup(e) {
    return e.closest(".utility-animation__group");
  }
  initialize() {
    this.root.addEventListener("animationend", (t) => {
      this.handleAnimationEnd(t);
    }), new MutationObserver((t) => {
      t.forEach((r) => {
        var n;
        r.type === "attributes" && r.attributeName.startsWith(V.inViewportDataset) && ((n = r.target) == null ? void 0 : n.getAttribute(V.inViewportDataset)) === "true" && this.startAnimation();
      });
    }).observe(this.root, { attributes: !0 });
  }
  static setGroupItemsLoaded(e, t) {
    e.style.setProperty(this.groupItemsLoadedProperty, t);
  }
  static hasPercentageOffset(e) {
    return e.root.classList.contains("utility-animation--percentage-offset");
  }
  static hasSmallOffset(e) {
    return e.root.classList.contains("utility-animation--small-offset");
  }
  static addObserver(e) {
    const n = (g) => {
      g.forEach((d) => {
        d.isIntersecting ? d.target.setAttribute(this.inViewportDataset, !0) : d.target.classList.contains("utility-animation--enter-exit") && d.target.removeAttribute(this.inViewportDataset);
      });
    }, i = new IntersectionObserver(n, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), c = new IntersectionObserver(n, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), h = new IntersectionObserver(n, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (e ? [e] : this.instances).forEach((g) => {
      V.hasSmallOffset(g) ? h.observe(g.root) : V.hasPercentageOffset(g) ? c.observe(g.root) : i.observe(g.root);
    });
  }
  static resetGroup(e) {
    this.setGroupItemsLoaded(e, 0), this.instances.forEach((t) => {
      if (this.getGroup(t.root) === e) {
        const n = t.root;
        t.currentElements = [n], n.removeAttribute("data-utility-animation-end"), t.startAnimation();
      }
    });
  }
  static initElement(e) {
    const t = e.$el ? e.$el : e, r = new this(t);
    return this.instances.push(r), r;
  }
  static init(e) {
    this.instances = [], [].forEach.call(e || document.querySelectorAll(this.rootSelector), (t) => {
      this.initElement(t);
    }), this.addObserver();
  }
  static isElementObserved(e) {
    return this.instances.some((t) => t.root === e);
  }
  static observeElementIfNotAlready(e) {
    let t;
    this.isElementObserved(e) || (t = this.initElement(e)), this.addObserver(t);
  }
  static getIndexStyle(e) {
    return `--utility-animation-index: ${e}`;
  }
};
L(V, "rootSelector", ".utility-animation"), L(V, "inViewportDataset", "data-utility-animation-in-viewport"), L(V, "endDataset", "data-utility-animation-end"), L(V, "instances", []), L(V, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let W = V;
const bs = {
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
      var s, e;
      return (e = (s = this.field) == null ? void 0 : s.showIn) == null ? void 0 : e.map((t) => "show-in-" + t).join(" ");
    },
    groupClass() {
      return this.field.type === "checkbox" ? "mb-3" : this.field.type === "file" ? "mb-8" : "";
    },
    errorId() {
      return `${this.id}-error`;
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
    this.$refs.root && W.init([this.$refs.root]);
    const s = this.$parent;
    if (!s) return;
    const e = s.$el;
    e && e.addEventListener("reset", this.handleReset);
  },
  methods: {
    getRequiredMsg(s) {
      return s.requiredMsg ? s.requiredMsg : "";
    },
    handleChange(s) {
      const t = s.currentTarget.value;
      this.edited = !0, this.userValue = t, this.$emit(I.FORM_FIELD_UPDATED, { value: t, id: this.id });
    },
    handleChangeTextarea(s) {
      const t = s.currentTarget.value;
      this.$emit(I.FORM_FIELD_UPDATED, { value: t, id: this.id });
    },
    handleReset() {
      this.edited = !1, this.userValue = null;
    },
    handleFormFieldUpdate(s) {
      this.$emit(I.FORM_FIELD_UPDATED, s);
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
    },
    hasError: Boolean
  }
}, xs = ["for"], Ss = ["id", "name", "placeholder", "required", "readonly", "data-msg"], ws = ["name", "value"], ks = ["for"], Cs = ["type", "id", "name", "data-msg", "value", "placeholder", "required", "readonly"], Ls = ["id"];
function Es(s, e, t, r, n, i) {
  var k, T, N, X, P, w;
  const c = Se, h = Ie, m = xe, g = Oe, d = Zt, x = De;
  return t.field.id !== "_gotcha" ? (a(), o("div", {
    key: 0,
    class: _(i.classList),
    "data-utility-animation-step": "1",
    ref: "root"
  }, [
    t.field.type === "textarea" ? (a(), o(b, { key: 0 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, xs),
      l("textarea", {
        class: "form-control form-textarea",
        onChange: e[0] || (e[0] = (...D) => i.handleChangeTextarea && i.handleChangeTextarea(...D)),
        onKeyup: e[1] || (e[1] = (...D) => i.handleChangeTextarea && i.handleChangeTextarea(...D)),
        id: t.id,
        name: t.id,
        rows: "4",
        placeholder: i.placeholder,
        required: i.required,
        readonly: i.readonly,
        "data-msg": i.getRequiredMsg(t.field)
      }, null, 40, Ss)
    ], 64)) : t.field.type === "checkbox" ? (a(), S(c, {
      key: 1,
      checkbox: t.field,
      id: t.id,
      onFormFieldUpdated: e[2] || (e[2] = (D) => i.handleFormFieldUpdate(D))
    }, null, 8, ["checkbox", "id"])) : t.field.type === "hidden" ? (a(), o("input", {
      key: 2,
      type: "hidden",
      name: t.id,
      value: i.value
    }, null, 8, ws)) : t.field.checkboxes ? (a(), S(h, {
      key: 3,
      field: t.field,
      id: t.id
    }, null, 8, ["field", "id"])) : t.field.type === "radio" ? (a(), S(m, {
      key: 4,
      radio: t.field,
      id: t.id
    }, null, 8, ["radio", "id"])) : t.field.radios ? (a(), S(g, {
      key: 5,
      field: t.field,
      id: t.id,
      onActionChanged: e[3] || (e[3] = (D) => s.$emit("action-changed", D))
    }, null, 8, ["field", "id"])) : t.field.type === "file" ? (a(), S(d, {
      key: 6,
      description: (k = t.field.formAttachments) == null ? void 0 : k.description,
      text: (T = t.field.formAttachments) == null ? void 0 : T.text,
      extensions: (N = t.field.formAttachments) == null ? void 0 : N.extensions,
      maxSize: (X = t.field.formAttachments) == null ? void 0 : X.maxSize,
      id: (P = t.field.formAttachments) == null ? void 0 : P.id,
      required: (w = t.field.formAttachments) == null ? void 0 : w.required,
      "required-msg": i.getRequiredMsg(t.field.formAttachments)
    }, null, 8, ["description", "text", "extensions", "maxSize", "id", "required", "required-msg"])) : t.field.type === "select" ? (a(), S(x, {
      key: 7,
      field: t.field,
      options: t.options,
      id: t.id
    }, null, 8, ["field", "options", "id"])) : t.field.type ? (a(), o(b, { key: 8 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, ks),
      l("input", {
        ref: "input",
        onChange: e[4] || (e[4] = (...D) => i.handleChange && i.handleChange(...D)),
        onKeyup: e[5] || (e[5] = (...D) => i.handleChange && i.handleChange(...D)),
        type: t.field.type,
        id: t.id,
        name: t.id,
        class: "form-control",
        "data-msg": i.getRequiredMsg(t.field),
        value: i.value,
        placeholder: i.placeholder,
        required: i.required,
        readonly: i.readonly
      }, null, 40, Cs)
    ], 64)) : u("", !0),
    t.hasError ? (a(), o("div", {
      key: 9,
      id: i.errorId,
      class: "invalid-feedback"
    }, y(i.getRequiredMsg(t.field)), 9, Ls)) : u("", !0)
  ], 2)) : u("", !0);
}
const Ne = /* @__PURE__ */ C(bs, [["render", Es]]), z = class z {
  constructor(e, t) {
    var r;
    e && (this.root = e, this.options = t, (r = this.options) != null && r.noInit || this.root.classList.add(p.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(e) {
    window[z.namespacePrefix] || (window[z.namespacePrefix] = {});
    const t = this.getInstancesKey();
    window[z.namespacePrefix][t] || (window[z.namespacePrefix][t] = []), window[z.namespacePrefix][t].push(e);
  }
  static getInstance(e) {
    const r = window[z.namespacePrefix][this.getInstancesKey()].filter((n) => (n == null ? void 0 : n.root) === e);
    return r ? r[0] : null;
  }
  static initElement(e, t) {
    const r = new this(e, t);
    return this.instances.push(r), this.expose(r), r;
  }
  static init(e) {
    this.instances = [];
    const t = e || document, r = `${this.rootSelector}:not(.${p.INITIALIZED})`;
    [].forEach.call(
      t.querySelectorAll(r),
      (n) => {
        this.initElement(n);
      }
    );
  }
};
L(z, "rootSelector", ""), L(z, "instances", []), L(z, "namespacePrefix", "baseComponents");
let ye = z;
class de {
}
L(de, "rootSelector", ".form-attachments"), L(de, "base64Selector", ".form-attachments__base64");
const H = class H extends ye {
  constructor(e, t) {
    var r;
    super(e, t), e && (this.root = e, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = e.querySelector(this.formSelector), this.subject = e.querySelector(this.subjectSelector), this.company = e.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = t, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (r = this.options) != null && r.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(e, t) {
      return this.optional(t) || H.regularExpression.test(e);
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
    for (const [t, r] of e.entries())
      this.prefillFormValue(t, r);
  }
  prefillFormValue(e, t) {
    const r = this.form;
    if (!r) return;
    const n = r.querySelector(`input[name="${e}"],textarea[name="${e}"]`);
    n && (n.value = t);
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
    H.reset(this.form);
  }
  static reset(e) {
    !e || !e.reset || (e.reset(), [].forEach.call(e.querySelectorAll(`.${p.VALID}`), (t) => {
      t.classList.remove(p.VALID);
    }), [].forEach.call(e.querySelectorAll(`.${p.ERROR}`), (t) => {
      t.classList.remove(p.ERROR);
    }));
  }
  handleDefaultSubmit(e) {
    e.preventDefault(), console.log("default submit");
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
    return f.uuid() + this.delimiter + e;
  }
  static getName(e) {
    if (e.includes(this.delimiter)) {
      const t = e.indexOf(this.delimiter);
      return e.slice(t + this.delimiter.length);
    }
    return e;
  }
  static getFormData(e) {
    const t = new FormData(e), r = [];
    for (let n of t)
      r.push(encodeURIComponent(n[0]) + "=" + encodeURIComponent(n[1]));
    return r.join("&");
  }
  ajaxSubmit() {
    const e = H.getFormData(this.form);
    fetch(this.form.action, {
      method: this.form.method || "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: e
    }).then((t) => {
      (t.status === 200 || t.status === 302) && this.ajaxSubmitCompleted();
    });
  }
  ajaxSubmitCompleted() {
    document.dispatchEvent(
      new CustomEvent(I.FORM_AJAX_SUBMIT, {
        detail: { target: this.root }
      })
    );
  }
  triggerExternalValidation() {
    let e = !1;
    if (window.$) {
      const t = $(this.form);
      if (typeof t.validate != "function")
        return console.error("form.validate is not a function"), !0;
      e = t.validate().form();
    }
    return e;
  }
  validate(e) {
    let t = this.triggerExternalValidation();
    return (!this.isValid(e) || t === !1) && (e.stopImmediatePropagation(), e.preventDefault(), t = !1), t;
  }
  isValid(e) {
    e.stopImmediatePropagation();
    let t = !0, r = !0;
    this.hasAttachments() && (t = this.validateAttachments());
    for (const [n, i] of Object.entries(this.groups))
      this.isValidGroup(i) || (t = !1, this.addGroupError(i, r), r = !1);
    return t;
  }
  validateAttachments() {
    let e = !0;
    return [].forEach.call(this.form.querySelectorAll(de.base64Selector), (t) => {
      t.value || (e = !1);
    }), e || (e = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (t) => {
      t.files.length === 0 && (e = !1, this.addAttachmentError(t));
    }), e);
  }
  addAttachmentError(e) {
    const t = f.getParent(e, de.rootSelector);
    t !== null && t.classList.add(p.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(e, t) {
    for (let r = 0; r < e.length; r++) {
      const n = this.getGroupParent(e[r]);
      e[r].classList.add(p.ERROR), n && (t && f.scrollIntoView(n), this.addErrorMessage(n));
    }
  }
  addErrorMessage(e) {
    if (e && !e.classList.contains(p.ERROR)) {
      e.classList.add(p.ERROR);
      const t = document.createElement("div");
      t.innerHTML = e.dataset.msg, t.classList.add("invalid-feedback"), e.parentNode.insertBefore(t, e.nextSibling);
    }
  }
  delErrorMessage(e) {
    e && e.classList.contains(p.ERROR) && (e.classList.remove(p.ERROR), e.nextSibling.remove());
  }
  delGroupError(e) {
    for (let t = 0; t < e.length; t++) {
      const r = this.getGroupParent(e[t]);
      e[t].classList.remove(p.ERROR), r && this.delErrorMessage(r);
    }
  }
  isValidGroup(e) {
    const t = e.length;
    let r = !1;
    for (let n = 0; n < t; n++) {
      const i = e[n];
      if (i.type === "checkbox" && i.checked)
        r = !0;
      else if (i.type === "radio" && i.checked)
        r = !0;
      else {
        const c = i.closest('input[type="text"]');
        c && !r && c.value.length >= this.minLengthOther && (r = !0);
      }
    }
    return r;
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
  groupFilter(e, t) {
    return e ? e.filter((r) => r.getAttribute("type") === t) : null;
  }
  handleGroupError(e, t) {
    e.checked ? this.delGroupError(t) : this.isValidGroup(t) || this.addGroupError(t);
  }
  handleLiveValidation(e) {
    const t = e.currentTarget;
    if (t) {
      const r = this.getGroupByName(t.dataset.formGroup);
      if (!r) return;
      const n = this.groupFilter(r, "checkbox"), i = this.groupFilter(r, "radio");
      t.getAttribute("type") === "checkbox" ? this.handleGroupError(t, n) : t.getAttribute("type") === "radio" ? this.handleGroupError(t, i) : this.isValidGroup(r) ? this.delGroupError(r) : this.addGroupError(r);
    }
  }
  getGroupParent(e) {
    var t;
    return (t = e.closest(".js-form-message")) == null ? void 0 : t.querySelector("[data-msg]");
  }
  addGroupValidation(e) {
    if (this.getGroupParent(e)) {
      const r = e.dataset.formGroup;
      this.groups[r] || (this.groups[r] = []), this.groups[r].push(e);
    }
  }
  updateGotcha() {
    const e = this.root.querySelector(this.gotchaSelector);
    e == null || e.classList.add(p.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(H.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(e) {
    var t;
    return ((t = e == null ? void 0 : e.parentNode) == null ? void 0 : t.classList.contains("form-field--show-in")) && e.offsetParent === null;
  }
  static getFormData(e) {
    if (e == null) return [];
    const t = e.querySelectorAll('input[type="text"], input[type="email"], textarea'), r = [];
    for (let n = 0; n < t.length; n++) {
      const i = t[n];
      if (this.isOptionalInputInvisible(i)) continue;
      let c;
      (i.type === "text" || i.type === "email" || i.tagName === "TEXTAREA") && (c = i.value), r.push({
        input: i,
        value: c
      });
    }
    return r;
  }
};
L(H, "rootSelector", ".form"), L(H, "instances", []), L(H, "delimiter", "-formHelper-"), L(H, "noCustomSubmitClass", "form--no-custom-submit"), L(H, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let U = H;
const Ts = {
  tagName: "formular",
  data() {
    return {
      originalAction: "",
      formAction: "",
      formInstance: null,
      novalidateValue: null,
      errors: []
    };
  },
  computed: {
    classList() {
      var s;
      return [
        "form",
        `${f.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${f.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${f.isTrue(this.container) === !0 ? "container" : ""}`,
        `${f.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((s = this.form) == null ? void 0 : s.noCustomSubmit) === !0 ? U.noCustomSubmitClass : "",
        "vue-component"
      ];
    },
    novalidate() {
      return this.novalidateValue;
    },
    hasAnimationValue() {
      return f.isTrue(this.hasAnimation);
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
      return this.form.ctaPosition ? this.form.ctaPosition : f.isTrue(this.uncentered) ? "" : "justify-content-end";
    },
    method() {
      return this.form.method ? this.form.method : "post";
    },
    preparedBlocks() {
      const s = [];
      let e = 0, t = [];
      return this.form.fields.forEach((r) => {
        if (r.rowStart || r.rowEnd)
          r.rowStart ? (s[e] = t, t.push(r), r.rowEnd && (t = [], e++)) : r.rowEnd && (t.push(r), t = [], e++);
        else {
          if (t.push(r), s[e]) return;
          s[e] = t, t = [], e++;
        }
      }), s;
    }
  },
  created() {
    this.originalAction = this.formAction = this.form.action;
  },
  mounted() {
    this.formInstance = new U(this.$refs.root), this.novalidateValue = "novalidate", this.$refs.headline && W.init([this.$refs.headline]);
  },
  methods: {
    hasError(s) {
      return this.errors[s.id];
    },
    getOptions(s) {
      return typeof s.options == "string" ? this.options[s.options] : s.options;
    },
    getBlockClassList(s) {
      return ["row mx-n3", `${s != null && s.rowClass ? s.rowClass : ""}`];
    },
    getFieldClassList(s) {
      return ["px-3", `${s.col ? "col-md-" + s.col : "col-md-12"}`];
    },
    getId(s) {
      const e = (s == null ? void 0 : s.radios) || (s == null ? void 0 : s.checkboxes), t = e ? e[0].id : s == null ? void 0 : s.id;
      return f.isTrue(this.hasUuid) ? U.getId(t) : t;
    },
    updateAction(s) {
      s ? this.formAction = s : this.formAction = this.originalAction;
    },
    handleSubmit(s) {
      if (!this.validate()) return s.preventDefault();
    },
    handleFormFieldUpdate(s) {
      if (!s.id) return;
      const e = document.getElementById(s.id);
      e && this.validateField(e);
    },
    validateField(s) {
      const e = s.value, t = s.getAttribute("type"), r = s.hasAttribute("required");
      if (this.removeFieldError(s), t === "checkbox") {
        const n = s.checked;
        if (r && !n)
          return this.addFieldError(s), !1;
      } else {
        if (r && !e)
          return this.addFieldError(s), !1;
        if (t === "email" && !((i) => /\S+@\S+\.\S+/.test(i))(e))
          return this.addFieldError(s), !1;
      }
      return this.addFieldValid(s), !0;
    },
    addFieldValid(s) {
      s.classList.add(p.VALID);
    },
    removeFieldError(s) {
      delete this.errors[s.id], s.classList.remove(p.ERROR);
    },
    addFieldError(s) {
      this.errors[s.id] = !0, s.classList.remove(p.VALID), s.classList.add(p.ERROR);
    },
    validate() {
      const s = this.$refs.root.querySelectorAll(
        `.form-field:not(.${p.HIDDEN}) .form-control[required],
        .form-field:not(.${p.HIDDEN}) .form__checkbox[required]`
      );
      let e = !0;
      for (const t of s)
        this.validateField(t) || (e = !1);
      return e;
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
  }
}, As = { class: "row" }, Ds = { class: "col-sm-12" }, Os = ["innerHTML"], Is = ["method", "action", "novalidate"];
function Ns(s, e, t, r, n, i) {
  const c = B, h = Ne, m = G;
  return a(), o("div", {
    class: _(i.classList),
    ref: "root"
  }, [
    l("div", {
      class: _(i.rowClassList)
    }, [
      l("div", {
        class: _(i.wrapperClassList)
      }, [
        t.form.headline ? (a(), o("div", {
          key: 0,
          class: _(i.headlineClassList),
          "data-utility-animation-step": "1",
          ref: "headline"
        }, [
          l("div", As, [
            l("div", Ds, [
              v(c, {
                text: t.form.headline,
                level: t.form.level,
                id: t.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              l("p", {
                class: _(i.sublineClassList),
                innerHTML: t.form.subline
              }, null, 10, Os)
            ])
          ])
        ], 2)) : u("", !0),
        l("form", {
          class: "form__form js-validate mt-6",
          method: i.method,
          action: n.formAction,
          novalidate: i.novalidate,
          onSubmit: e[1] || (e[1] = (...g) => i.handleSubmit && i.handleSubmit(...g))
        }, [
          (a(!0), o(b, null, E(i.preparedBlocks, (g) => (a(), o(b, null, [
            g.length > 0 ? (a(), o("div", {
              key: 0,
              class: _(i.getBlockClassList(g[0]))
            }, [
              (a(!0), o(b, null, E(g, (d) => (a(), o("div", {
                class: _(i.getFieldClassList(d))
              }, [
                v(h, {
                  field: d,
                  options: i.getOptions(d),
                  "replace-value": t.replaceValue,
                  id: i.getId(d),
                  "has-animation": i.hasAnimationValue,
                  onActionChanged: i.updateAction,
                  "has-error": i.hasError(d),
                  onFormFieldUpdated: e[0] || (e[0] = (x) => i.handleFormFieldUpdate(x))
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged", "has-error"])
              ], 2))), 256))
            ], 2)) : u("", !0)
          ], 64))), 256)),
          l("div", {
            class: _(i.formClassList)
          }, [
            v(m, {
              text: t.form.ctaText,
              type: "submit",
              button: !0,
              skin: t.form.cta.skin,
              width: t.form.cta.width,
              analytics: t.analytics
            }, null, 8, ["text", "skin", "width", "analytics"])
          ], 2),
          e[2] || (e[2] = l("input", {
            type: "text",
            class: "form__super-field",
            name: "_gotcha"
          }, null, -1))
        ], 40, Is)
      ], 2)
    ], 2)
  ], 2);
}
const Pe = /* @__PURE__ */ C(Ts, [["render", Ns]]), Ps = {
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
  }
}, Vs = ["viewBox"], Ms = ["fill", "points"];
function Rs(s, e, t, r, n, i) {
  return a(), o("figure", {
    class: _("svgshape " + i.svgShapeClasses),
    style: O("pointer-events: all;" + i.translateStyle)
  }, [
    (a(), o("svg", {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 " + i.svgShapeHeight + " " + i.svgShapeObliquity
    }, [
      l("polygon", {
        fill: i.svgShapeColor,
        points: i.points
      }, null, 8, Ms)
    ], 8, Vs))
  ], 6);
}
const we = /* @__PURE__ */ C(Ps, [["render", Rs]]), Fs = {
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
    person: Object,
    noTopSpacing: Boolean,
    light: Boolean,
    hasGreyBackground: Boolean,
    svgShape: Object
  },
  computed: {
    classList() {
      return [
        "contact",
        this.contactVariantClass,
        "vue-component",
        this.collapsed ? "" : "space-bottom-2 utility-animation utility-animation--percentage-offset",
        { "bg-grey": this.hasGreyBackground },
        this.noTopSpacing || this.svgShape || this.collapsed ? "" : this.spacing
      ];
    },
    contactVariantClass() {
      return [
        this.svgShape && !this.quote ? "contact--has-shape" : "",
        this.quote ? "contact--quote" : "",
        this.collapsed ? p.COLLAPSED : ""
      ];
    },
    contactLight() {
      return this.light ? "contact__person--light" : "";
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
      var s, e, t, r;
      return {
        "--color-contact-background": this.bgColor || ((s = this.contact) == null ? void 0 : s.bgColor),
        "--contact-copy-color": this.color || ((e = this.contact) == null ? void 0 : e.color),
        "--color-contact-box-background": this.boxBgColor || ((t = this.contact) == null ? void 0 : t.boxBgColor),
        "--contact-box-copy-color": this.boxColor || ((r = this.contact) == null ? void 0 : r.boxColor)
      };
    }
  }
}, Bs = { class: "contact__subline font-weight-bold font-size-2" }, zs = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, Hs = {
  key: 0,
  class: "contact__person-quote"
}, js = { class: "contact__icon" }, qs = { class: "contact__image-quote" }, Us = { class: "contact__image-spacer" }, Gs = { class: "contact__quote font-size-3 middle font-weight-light" }, Ws = { class: "d-flex flex-column" }, Js = { class: "font-weight-light" }, Ks = { class: "contact__image" }, Xs = { class: "contact__name font-size-4 my-6 mx-5" }, Zs = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, Ys = ["href"], Qs = { class: "streamline-sm mr-4" }, $s = { class: "contact__detail-text" }, ei = {
  key: 0,
  class: "contact__notes"
}, ti = { class: "contact__notes-spacing streamline-sm mr-4" }, si = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, ii = ["href"], ri = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, ni = ["href"], ai = {
  key: 0,
  class: "contact__detail-quote"
}, li = ["href"], oi = { class: "streamline-sm mr-4" }, ci = {
  key: 0,
  class: "contact__notes"
}, di = { class: "contact__notes-spacing streamline-sm mr-4" };
function hi(s, e, t, r, n, i) {
  const c = we, h = B, m = Pe, g = se, d = J, x = K, k = be;
  return a(), o(b, null, [
    t.svgShape ? (a(), S(c, {
      key: 0,
      align: t.svgShape.align,
      peak: t.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : u("", !0),
    t.contact ? (a(), o("div", {
      key: 1,
      class: _(i.classList),
      style: O(i.styleObject)
    }, [
      l("div", {
        class: _(i.contactContainerClass)
      }, [
        l("div", {
          class: _(i.contactRowClass)
        }, [
          t.collapsed ? u("", !0) : (a(), o("div", {
            key: 0,
            class: _(["contact__form", i.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            v(h, {
              text: t.contact.headline,
              classes: t.contact.headlineClasses,
              level: t.level
            }, null, 8, ["text", "classes", "level"]),
            l("span", Bs, y(t.contact.subline), 1),
            t.contact.form ? (a(), S(m, {
              key: 0,
              form: t.contact.form,
              ajax: t.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : u("", !0),
            t.contact.buttons ? (a(), o("div", zs, [
              v(g, {
                list: t.contact.buttons
              }, null, 8, ["list"])
            ])) : u("", !0)
          ], 2)),
          l("div", {
            class: _(["contact__box", i.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            l("div", {
              class: _(["contact__person", i.contactLight])
            }, [
              t.quote ? (a(), o("div", Hs, [
                l("div", js, [
                  v(d, { icon: "quote" })
                ]),
                l("div", qs, [
                  l("div", Us, [
                    v(x, {
                      img: t.contact.person.image,
                      cloudinary: t.contact.person.cloudinary,
                      alt: t.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                l("div", Gs, y(t.contact.person.quote), 1),
                l("div", Ws, [
                  l("span", null, y(t.contact.person.quotee), 1),
                  l("span", Js, y(t.contact.person.quoteeTitle), 1)
                ])
              ])) : (a(), o(b, { key: 1 }, [
                l("div", Ks, [
                  v(x, {
                    img: t.contact.person.image,
                    cloudinary: t.contact.person.cloudinary,
                    alt: t.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                l("div", Xs, y(t.contact.person.name), 1),
                l("div", Zs, [
                  (a(!0), o(b, null, E(t.contact.person.details, (T, N) => (a(), o("div", {
                    key: N,
                    class: _(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !N === t.contact.person.details.length - 1 }])
                  }, [
                    l("a", {
                      href: T.href,
                      class: "d-flex custom"
                    }, [
                      l("span", Qs, [
                        T.icon === "site/mail" ? (a(), S(k, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), S(k, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      l("span", $s, y(T.text), 1)
                    ], 8, Ys),
                    T.notes ? (a(), o("div", ei, [
                      l("span", ti, [
                        T.icon === "site/mail" ? (a(), S(k, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), S(k, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      j(" " + y(T.notes), 1)
                    ])) : u("", !0)
                  ], 2))), 128)),
                  t.contact.person.number ? (a(), o("div", si, [
                    l("a", {
                      href: "tel:" + t.contact.person.number,
                      class: "custom"
                    }, [
                      v(k, { icon: "site/phone" }),
                      j(" " + y(t.contact.person.number), 1)
                    ], 8, ii)
                  ])) : u("", !0),
                  t.contact.person.mail ? (a(), o("div", ri, [
                    l("a", {
                      href: "mailto:" + t.contact.person.mail,
                      class: "custom"
                    }, [
                      v(k, { icon: "site/mail" }),
                      j(" " + y(t.contact.person.mail), 1)
                    ], 8, ni)
                  ])) : u("", !0)
                ])
              ], 64))
            ], 2),
            t.quote ? (a(), o("div", ai, [
              v(h, {
                text: t.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (a(!0), o(b, null, E(t.contact.person.details, (T, N) => (a(), o("div", {
                key: N,
                class: _(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !N === t.contact.person.details.length - 1 }])
              }, [
                l("a", {
                  href: T.href,
                  class: "custom"
                }, [
                  l("span", oi, [
                    T.icon === "site/mail" ? (a(), S(k, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), S(k, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  j(" " + y(T.text), 1)
                ], 8, li),
                T.notes ? (a(), o("div", ci, [
                  l("span", di, [
                    T.icon === "site/mail" ? (a(), S(k, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), S(k, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  j(" " + y(T.notes), 1)
                ])) : u("", !0)
              ], 2))), 128))
            ])) : u("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)) : u("", !0)
  ], 64);
}
const ui = /* @__PURE__ */ C(Fs, [["render", hi]]), mi = {
  tagName: "content",
  props: {}
}, gi = {
  class: "page-content",
  "aria-label": "Content"
};
function fi(s, e, t, r, n, i) {
  return a(), o(b, null, [
    l("main", gi, [
      ce(s.$slots, "default")
    ]),
    ce(s.$slots, "below")
  ], 64);
}
const _i = /* @__PURE__ */ C(mi, [["render", fi]]), pi = {
  tagName: "faq",
  data() {
    return {
      entriesWithState: []
    };
  },
  beforeMount() {
    var s;
    this.entriesWithState = (s = this.entries) == null ? void 0 : s.map((e, t) => (e.isOpen = null, e.isDetailsOpen = null, e.height = null, e.index = t, e.id = `entry-${t}`, e));
  },
  computed: {
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    classList() {
      return ["faq", "utility-animation", "container space-top-2", "vue-component"];
    },
    headlineClasses() {
      var s;
      return `faq__headline fade-in-bottom ${(s = this.headline) != null && s.classes ? this.headline.classes : ""}`;
    },
    headlineLevel() {
      var s;
      return (s = this.headline) != null && s.level ? this.headline.level : "h2";
    }
  },
  methods: {
    getDelay(s) {
      const e = s.index > 0 ? 200 : 0;
      return `--utility-animation-delay: ${`${s.index * e}ms`};`;
    },
    handleClick(s) {
      s.isOpen = s.isOpen === null ? !0 : null, s.isOpen && (s.isDetailsOpen = !0);
    },
    getElementByRef(s) {
      const e = this.$refs[s == null ? void 0 : s.id];
      if (!(!e || e.length === 0))
        return e[0];
    },
    afterLeave(s) {
      const e = this.getElementByRef(s);
      e && (s.isDetailsOpen = null, e.style.removeProperty("display"), e.style.removeProperty("height"), e.classList.remove(p.IS_COLLAPSING));
    },
    enter(s) {
      const e = this.getElementByRef(s);
      if (!e) return;
      const t = e.offsetHeight;
      e.style.removeProperty("height"), e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, setTimeout(() => {
        e.style.height = `${t}px`, e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom");
      });
    },
    leave(s) {
      const e = this.getElementByRef(s);
      if (!e) return;
      const t = e.offsetHeight;
      e.classList.add(p.IS_COLLAPSING), setTimeout(() => {
        e.style.height = `${t}px`;
      });
    }
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number
  }
}, yi = { class: "row" }, vi = { class: "col-lg-8" }, bi = ["open"], xi = ["onClick", "open"], Si = { class: "faq__summary" }, wi = { class: "faq__icon-frame" }, ki = { class: "faq__icon" }, Ci = ["innerHTML"];
function Li(s, e, t, r, n, i) {
  var m;
  const c = B, h = J;
  return a(), o("div", {
    class: _(i.classList),
    style: O(i.style)
  }, [
    l("div", yi, [
      l("div", vi, [
        v(c, {
          text: (m = t.headline) == null ? void 0 : m.text,
          level: i.headlineLevel,
          classes: i.headlineClasses,
          "data-utility-animation-step": "1"
        }, null, 8, ["text", "level", "classes"]),
        (a(!0), o(b, null, E(n.entriesWithState, (g) => (a(), o("details", {
          open: g.isDetailsOpen,
          class: "fade-in-bottom",
          "data-utility-animation-step": "1",
          style: O(i.getDelay(g))
        }, [
          l("summary", {
            onClick: je((d) => i.handleClick(g), ["prevent"]),
            open: g.isDetailsOpen
          }, [
            l("div", Si, y(g.summary), 1),
            l("div", wi, [
              l("div", ki, [
                v(h, {
                  icon: "arrow-narrow",
                  direction: "clockwise",
                  size: "small"
                })
              ])
            ])
          ], 8, xi),
          v(qe, {
            onAfterLeave: (d) => i.afterLeave(g),
            onEnter: (d) => i.enter(g),
            onBeforeLeave: (d) => i.leave(g)
          }, {
            default: q(() => [
              Ue(l("div", {
                class: "faq__content",
                ref_for: !0,
                ref: g.id
              }, [
                l("div", {
                  class: "faq__text",
                  innerHTML: g.text
                }, null, 8, Ci)
              ], 512), [
                [Ge, g.isOpen]
              ])
            ]),
            _: 2
          }, 1032, ["onAfterLeave", "onEnter", "onBeforeLeave"])
        ], 12, bi))), 256))
      ])
    ])
  ], 6);
}
const Ei = /* @__PURE__ */ C(pi, [["render", Li]]), Ti = {
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
      var s;
      return (s = this.item) == null ? void 0 : s.image;
    },
    title() {
      var s;
      return (s = this.item) == null ? void 0 : s.title;
    },
    headlineLevel() {
      var s;
      return (s = this.item) != null && s.level ? this.item.level : "h3";
    },
    headlineClasses() {
      var t;
      const s = "mb-2", e = (t = this.item) != null && t.classes ? this.item.classes : "font-size-2 bold";
      return `${s} ${e}`;
    },
    description() {
      var s;
      return (s = this.item) == null ? void 0 : s.description;
    },
    copy() {
      var s;
      return (s = this.item) == null ? void 0 : s.copy;
    },
    secondCopy() {
      var s;
      return (s = this.item) == null ? void 0 : s.copy_1;
    },
    list() {
      var s;
      return (s = this.item) == null ? void 0 : s.list;
    },
    secondList() {
      var s;
      return (s = this.item) == null ? void 0 : s.list_1;
    },
    ctaClasses() {
      var t;
      if (!this.item.cta) return;
      const s = "mt-5", e = ((t = this.item) == null ? void 0 : t.cta.align) === "right" ? "d-flex justify-content-end" : "";
      return `${s} ${e}`;
    }
  },
  methods: {},
  props: {
    classes: String,
    item: Object,
    index: Number,
    centered: String
  }
}, Ai = { class: "bg-white d-flex flex-column h-100 py-5 px-3" }, Di = {
  key: 0,
  class: "w-100 max-w-10rem mb-5 mx-auto"
}, Oi = ["innerHTML"], Ii = ["innerHTML"], Ni = {
  key: 4,
  class: "dashed m-0 flex-grow-1",
  style: { "margin-bottom": "10px !important" }
}, Pi = ["innerHTML"], Vi = ["innerHTML"], Mi = {
  key: 6,
  class: "dashed m-0 p-0 flex-grow-1"
}, Ri = ["innerHTML"], Fi = {
  key: 7,
  class: "ctaClasses"
};
function Bi(s, e, t, r, n, i) {
  const c = K, h = B, m = G;
  return a(), o("div", {
    class: _(i.classList),
    "data-utility-animation-step": "1",
    style: O(i.style)
  }, [
    l("div", Ai, [
      i.image ? (a(), o("figure", Di, [
        v(c, {
          img: i.image.src,
          alt: i.image.alt,
          cloudinary: i.image.cloudinary
        }, null, 8, ["img", "alt", "cloudinary"])
      ])) : u("", !0),
      i.title ? (a(), S(h, {
        key: 1,
        text: i.title,
        level: i.headlineLevel,
        classes: i.headlineClasses
      }, null, 8, ["text", "level", "classes"])) : u("", !0),
      i.description ? (a(), o("p", {
        key: 2,
        class: "mb-0",
        innerHTML: i.description
      }, null, 8, Oi)) : u("", !0),
      i.copy ? (a(), o("p", {
        key: 3,
        class: "mb-0 font-size-sm d-flex",
        style: { "padding-bottom": "5px" },
        innerHTML: i.copy
      }, null, 8, Ii)) : u("", !0),
      i.list ? (a(), o("ul", Ni, [
        (a(!0), o(b, null, E(i.list, (g) => (a(), o("li", {
          class: "feature-grid-item__text font-size-sm",
          innerHTML: g
        }, null, 8, Pi))), 256))
      ])) : u("", !0),
      i.secondCopy ? (a(), o("p", {
        key: 5,
        class: "mb-0 font-size-sm d-flex",
        style: { "padding-bottom": "5px" },
        innerHTML: i.secondCopy
      }, null, 8, Vi)) : u("", !0),
      i.secondList ? (a(), o("ul", Mi, [
        (a(!0), o(b, null, E(i.secondList, (g) => (a(), o("li", {
          class: "feature-grid-item__text font-size-sm",
          innerHTML: g
        }, null, 8, Ri))), 256))
      ])) : u("", !0),
      t.item.cta ? (a(), o("div", Fi, [
        v(m, We(Je(t.item.cta)), null, 16)
      ])) : u("", !0)
    ])
  ], 6);
}
const Ve = /* @__PURE__ */ C(Ti, [["render", Bi]]), zi = {
  tagName: "headline-row",
  props: {
    centered: Boolean,
    level: {
      type: String,
      default: "h2"
    },
    text: String,
    spacing: {
      type: String,
      default: "space-top-3"
    },
    hasAnimation: Boolean,
    classes: String,
    headlineClasses: String,
    noContainer: Boolean
  },
  computed: {
    headlineRowClassesValue() {
      return this.classes && this.classes.includes("text-") ? this.classes : this.centered ? "text-center" : "";
    },
    containerClass() {
      return this.noContainer ? "" : "container";
    },
    animationClass() {
      return this.hasAnimation ? "utility-animation" : "";
    },
    animationStepClass() {
      return this.hasAnimation ? "fade-in-bottom" : "";
    },
    classList() {
      return [`${this.containerClass} ${this.spacing} headline-row`, this.animationClass];
    }
  }
}, Hi = { class: "row" };
function ji(s, e, t, r, n, i) {
  const c = B;
  return a(), o("div", {
    class: _(i.classList)
  }, [
    l("div", Hi, [
      l("div", {
        class: _(["col-sm-12", i.animationStepClass, i.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        v(c, {
          level: t.level,
          text: t.text,
          classes: t.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const ke = /* @__PURE__ */ C(zi, [["render", ji]]), qi = {
  tagName: "feature-grid",
  props: {
    backgroundColor: {
      type: String,
      default: "var(--color-bg-grey)"
    },
    description: String,
    headline: String,
    gridSize: {
      type: Number,
      default: 4
    },
    image: Object,
    features: Array,
    footer: String,
    centered: Boolean,
    headlineClasses: String,
    spacing: String
  },
  mounted() {
    this.$refs.root && W.init([this.$refs.root]);
  },
  computed: {
    columnClass() {
      return "col-lg-" + 12 / this.gridSize;
    },
    featureGridHeadlineRowClasses() {
      return ["fade-in-bottom", this.headlineClasses];
    },
    containerClasses() {
      return ["container", this.spacing];
    },
    styleObject() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
}, Ui = {
  key: 0,
  class: "feature-grid__description w-lg-50 text-center mt-3 mx-auto"
}, Gi = {
  key: 1,
  class: "d-flex mt-8 justify-content-center fade-in-bottom",
  "data-utility-animation-step": "1"
}, Wi = {
  key: 2,
  class: "my-8"
}, Ji = { class: "d-flex flex-wrap" }, Ki = {
  key: 3,
  class: "container pb-6"
};
function Xi(s, e, t, r, n, i) {
  const c = ke, h = K, m = Ve;
  return a(), o("div", {
    class: "feature-grid utility-animation py-7",
    style: O(i.styleObject),
    ref: "root"
  }, [
    l("div", {
      class: _(i.containerClasses)
    }, [
      v(c, {
        text: t.headline,
        centered: !0,
        classes: i.featureGridHeadlineRowClasses,
        utilityAnimationStep: "1",
        noContainer: !0
      }, null, 8, ["text", "classes"]),
      t.description ? (a(), o("p", Ui, y(t.description), 1)) : u("", !0),
      t.image ? (a(), o("figure", Gi, [
        v(h, M(t.image, {
          img: t.image.src
        }), null, 16, ["img"])
      ])) : u("", !0),
      t.features ? (a(), o("div", Wi, [
        l("div", Ji, [
          (a(!0), o(b, null, E(t.features, (g, d) => (a(), S(m, {
            key: d,
            classes: i.columnClass,
            index: d + 1,
            item: g,
            centered: t.centered
          }, null, 8, ["classes", "index", "item", "centered"]))), 128))
        ])
      ])) : u("", !0),
      t.footer ? (a(), o("div", Ki, y(t.footer), 1)) : u("", !0)
    ], 2)
  ], 4);
}
const Zi = /* @__PURE__ */ C(qi, [["render", Xi]]), Yi = {
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
      return f.getJSON(this.animation);
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
      return f.isTrue(this.fixed);
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
}, Qi = {
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
        `${this.show ? p.SHOW : ""}`,
        `${this.end ? p.END : ""}`,
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
      return f.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = !1;
      const s = this.$refs.animation;
      if (!s) return;
      const e = s.querySelector(".letter-switcher__letter"), t = this.isLower ? e.offsetHeight * 2 : e.offsetHeight;
      s.style.height = t + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (t, r) => {
          const n = r * 0.3, i = 0.07 * t.children.length;
          t.style.animation = `letter-switch ${i}s ${n}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const s = this.$refs["end-text"], e = this.$refs.end;
      if (!s || !e) return this.emitEnded();
      s.style.width = "0px", e.classList.remove(p.COLLAPSED), this.emitEnded();
    },
    switchOverline(s) {
      const e = this.$refs.overline;
      e && (e.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, e.style.opacity = 1, s();
      }), e.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(I.ENDED);
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
}, $i = {
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
}, er = {
  tagName: "hero",
  components: {
    "hero-pattern": $i
  },
  data() {
    return {
      introHeight: null,
      style: null
    };
  },
  mounted() {
    this.setIntroStyle(), this.setStyle();
  },
  methods: {
    setStyle() {
      this.style = [
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${f.hexToRgb(this.bgColor)}` : "",
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : "",
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : ""
      ];
    },
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
        this.hasStickyScroller ? te.getRootClass() : ""
      ];
    },
    contentClassList() {
      return ["hero__content", this.spacing ? this.spacing : this.animation ? "" : "py-10 py-lg-11"];
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
      return this.shape ? this.shape.lottie ? this.shape.lottie : this.lottieData ? f.getJSON(this.lottieData) : null : null;
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
      return f.getJSON(this.hero);
    }
  },
  props: {
    hero: Object,
    lottieData: String
  }
}, tr = { class: "hero__container container" }, sr = {
  key: 0,
  class: "hero__back-row row"
}, ir = { class: "hero__back-col col" }, rr = { class: "hero__back back" }, nr = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, ar = { class: "hero__intro-col col" }, lr = {
  key: 0,
  class: "hero__overline"
}, or = {
  key: 2,
  class: "hero__content-shape"
}, cr = ["innerHTML"], dr = {
  key: 5,
  class: "hero__badges"
}, hr = { class: "hero__badge-container" }, ur = { class: "hero__background-shape" };
function mr(s, e, t, r, n, i) {
  const c = he("hero-pattern"), h = K, m = J, g = Qi, d = B, x = se, k = Yi, T = fe;
  return a(), o("div", {
    class: _(i.classList),
    style: O(n.style)
  }, [
    i.pattern ? (a(), S(c, {
      key: 0,
      class: "hero__pattern"
    })) : u("", !0),
    i.img ? (a(), S(h, {
      key: 1,
      class: "hero__background-img",
      cloudinary: i.background.cloudinary,
      img: i.img
    }, {
      default: q(() => e[0] || (e[0] = [
        j(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : u("", !0),
    l("div", tr, [
      l("main", {
        class: _(i.contentClassList)
      }, [
        i.hasBack ? (a(), o("div", sr, [
          l("div", ir, [
            l("div", rr, [
              v(m, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : u("", !0),
        i.letterSwitcher ? (a(), S(g, M({ key: 1 }, i.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: i.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : u("", !0),
        i.overline || i.headlineText || i.subline ? (a(), o("div", nr, [
          l("div", ar, [
            i.overline ? (a(), o("span", lr, y(i.overline), 1)) : u("", !0),
            i.headlineText ? (a(), S(d, {
              key: 1,
              class: _(i.headlineClassList),
              level: i.level,
              innerHTML: i.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : u("", !0),
            i.shapeInContent ? (a(), o("div", or, [
              i.showShape ? (a(), S(h, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : u("", !0)
            ])) : u("", !0),
            i.subline ? (a(), o("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: i.subline
            }, null, 8, cr)) : u("", !0),
            i.ctaList ? (a(), S(x, {
              key: 4,
              classes: "hero__cta-list",
              list: i.ctaList
            }, null, 8, ["list"])) : u("", !0),
            i.badges ? (a(), o("div", dr, [
              (a(!0), o(b, null, E(i.badges, (N) => (a(), o("div", hr, [
                v(h, M({
                  cloudinary: !0,
                  ref_for: !0
                }, N, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : u("", !0)
          ])
        ], 512)) : u("", !0),
        i.animation ? (a(), S(k, {
          key: 3,
          animation: i.animation,
          cta: i.cta,
          icon: i.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : u("", !0)
      ], 2)
    ]),
    i.shape ? (a(), S(T, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !i.showShapeContainer
    }, {
      default: q(() => [
        v(T, {
          classes: "hero__background-shape-content",
          hideContainer: !i.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: q(() => [
            l("div", ur, [
              i.showShape ? (a(), S(h, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets,
                lazy: !0
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : u("", !0)
            ])
          ]),
          _: 1
        }, 8, ["hideContainer"])
      ]),
      _: 1
    }, 8, ["hideContainer"])) : u("", !0)
  ], 6);
}
const gr = /* @__PURE__ */ C(er, [["render", mr]]), fr = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && W.init([this.$refs.root]);
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
}, _r = { class: "container space-lg-2" }, pr = {
  key: 0,
  class: "row mb-9 mt-9"
}, yr = { class: "row" }, vr = { class: "col" }, br = ["innerHTML"];
function xr(s, e, t, r, n, i) {
  const c = B;
  return a(), o("figure", {
    class: _(i.classList),
    ref: "root"
  }, [
    l("div", _r, [
      t.headline ? (a(), o("div", pr, [
        l("div", {
          class: _(["col", t.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          v(c, { text: t.headline }, null, 8, ["text"])
        ], 2)
      ])) : u("", !0),
      l("div", yr, [
        l("div", vr, [
          l("p", {
            class: _(["intro-text__copy fade-in-bottom", t.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: t.copy
          }, null, 10, br)
        ])
      ])
    ])
  ], 2);
}
const Sr = /* @__PURE__ */ C(fr, [["render", xr]]), wr = {
  tagName: "link-list",
  computed: {
    classList() {
      return [
        "link-list",
        this.hasNoAnimation ? "" : "utility-animation",
        `${this.isExpanded ? p.EXPANDED : ""}`,
        `${this.isExpandable() ? p.EXPANDABLE : ""}`,
        `${this.hasActiveItem ? p.ACTIVE : ""}`,
        `${this.isHidden ? "link-list--hidden" : ""}`,
        `${this.inTransition ? "link-list--in-transition" : ""}`,
        this.classes,
        "vue-component"
      ];
    },
    hasNoAnimation() {
      return f.isTrue(this.noAnimation);
    },
    classListTitle() {
      return ["link-list__title font-size-8 bold", this.hasNoAnimation ? "" : "fade-in-bottom"];
    },
    classListList() {
      return ["link-list__list header__list--expanded", this.hasNoAnimation ? "" : "fade-in-bottom"];
    },
    hasActiveItem() {
      const s = this.list.children;
      if (s)
        return s.filter((e) => {
          var t;
          return ((t = e.languages[this.lang]) == null ? void 0 : t.active) === !0;
        }).length > 0;
    },
    isHidden() {
      return f.isTrue(this.hidden) === !0;
    }
  },
  watch: {
    hidden(s, e) {
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
      this.parentOfParent = this.$refs.root.parentNode.parentNode, this.parentOfParent.addEventListener(I.CHILD_HAS_UPDATE, this.handleUpdate.bind(this));
    },
    handleUpdate(s) {
      const e = s.detail.root;
      this.isExpanded && this.$refs.root !== e && this.handleClick();
    },
    isLowerBreakpoint() {
      return f.isBelowBreakpoint("md");
    },
    isExpandable() {
      var s;
      return !!(this.isLowerBreakpoint() && this.list.languages && ((s = this.list.languages[this.lang]) != null && s.title));
    },
    updateHeight() {
      const s = this.$refs.root;
      if (!s) return;
      const e = this.isHidden ? "" : s.scrollHeight + "px";
      s.style.height = e;
    },
    handleClick(s) {
      if (!this.isExpandable()) return;
      this.isExpanded = !this.isExpanded;
      const e = this.$refs.root;
      if (s) {
        const t = new CustomEvent(I.CHILD_HAS_UPDATE, {
          detail: {
            root: e
          }
        });
        this.parentOfParent.dispatchEvent(t);
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
  }
}, kr = {
  key: 0,
  class: "link-list__item"
};
function Cr(s, e, t, r, n, i) {
  var m, g;
  const c = J, h = G;
  return t.list ? (a(), o("figure", {
    key: 0,
    class: _(i.classList),
    ref: "root"
  }, [
    (m = t.list) != null && m.languages ? (a(), o("figcaption", {
      key: 0,
      class: _(i.classListTitle),
      "data-utility-animation-step": "1",
      onClick: e[0] || (e[0] = (...d) => i.handleClick && i.handleClick(...d))
    }, [
      j(y((g = t.list.languages[t.lang]) == null ? void 0 : g.title) + " ", 1),
      v(c, {
        class: "link-list__icon",
        icon: "expand",
        size: "small"
      })
    ], 2)) : u("", !0),
    l("ul", {
      class: _(i.classListList),
      "data-utility-animation-step": "1"
    }, [
      (a(!0), o(b, null, E(t.list.children, (d) => (a(), o(b, null, [
        d.languages && d.languages[t.lang] ? (a(), o("li", kr, [
          v(h, {
            href: d.languages[t.lang].url,
            text: d.languages[t.lang].title,
            active: d.languages[t.lang].active,
            link: !0,
            reversed: "true",
            monochrome: "true"
          }, null, 8, ["href", "text", "active"])
        ])) : u("", !0)
      ], 64))), 256))
    ], 2)
  ], 2)) : u("", !0);
}
const Me = /* @__PURE__ */ C(wr, [["render", Cr]]), Re = {
  tagName: "slot-items",
  props: {
    items: {
      default: []
    }
  },
  render() {
    const s = this.items(), e = [];
    return s.forEach((t, r) => {
      var n;
      t.props && !((n = t == null ? void 0 : t.props) != null && n.style) && (t.props.style = `--utility-animation-index: ${r + 1}`), e.push(t);
    }), e;
  }
}, Lr = {
  tagName: "list-container",
  computed: {
    classValue() {
      return [
        "list-container vue-component",
        `${this.spacing ? this.spacing : ""}`,
        `${this.classes ? this.classes : ""}`,
        f.isTrue(this.headlineSticky) ? "list-container--headline-sticky has-headline-sticky" : ""
      ];
    },
    colorStyling() {
      const s = this.bgColor ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);` : "", e = this.headlineColor ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}` : "";
      return [s, e];
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
  }
}, Er = {
  class: "list-container__container utility-animation container headline-sticky__target fade-in-bottom",
  "data-utility-animation-step": "1"
}, Tr = { class: "row" }, Ar = { class: "col-sm-12" };
function Dr(s, e, t, r, n, i) {
  const c = B, h = Re;
  return a(), o("div", {
    class: _(i.classValue),
    style: O(i.colorStyling)
  }, [
    l("div", Er, [
      l("div", Tr, [
        l("div", Ar, [
          v(c, {
            text: t.headline,
            level: t.level,
            classes: "list-container__headline"
          }, null, 8, ["text", "level"])
        ])
      ])
    ]),
    v(h, {
      items: s.$slots.default
    }, null, 8, ["items"])
  ], 6);
}
const Fe = /* @__PURE__ */ C(Lr, [["render", Dr]]), Or = {
  tagName: "logo-list-items",
  computed: {},
  methods: {
    getItemComponent(s) {
      return s != null && s.url ? "a" : "span";
    },
    getDelay(s) {
      const e = this.getIndex(s), t = e > 0 ? 100 : 0;
      return `--utility-animation-delay: ${`${e * t}ms`};`;
    },
    getIndex(s) {
      return this.isClone ? this.list.length + s : s;
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
}, Ir = {
  tagName: "logo-list",
  components: {
    "logo-list-items": Or
  },
  mounted() {
    this.$refs.root && (this.sticky && te.init([this.$refs.root]), W.init([this.$refs.root]));
  },
  computed: {
    defaultSpacing() {
    },
    classList() {
      return [
        "logo-list container utility-animation vue-component",
        this.aspectRatio ? "logo-list--aspect-ratio" : "",
        this.sticky ? "is-sticky-scroller" : "",
        this.spacing ? this.spacing : "py-4",
        this.isOverlapping ? "logo-list--is-overlapping" : ""
      ];
    },
    isOverlapping() {
      return f.isTrue(this.overlapping);
    },
    columnsValue() {
      const e = parseInt(this.columns);
      return "--column-width: " + `calc(${100 / (Number.isNaN(e) ? 4 : e)}% - 3px)`;
    },
    aspectRatioValue() {
      if (!this.aspectRatio) return "";
      const s = this.aspectRatio.split("/");
      return s.length != 2 ? "" : `--aspect-ratio-width: ${s[0]}; --aspect-ratio-height: ${s[1]}`;
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
  }
}, Nr = { class: "logo-list__row row" };
function Pr(s, e, t, r, n, i) {
  const c = he("logo-list-items"), h = fe;
  return a(), o("div", {
    class: _(i.classList),
    style: O(i.styles),
    ref: "root"
  }, [
    l("div", Nr, [
      v(h, {
        classes: "logo-list__scroller",
        "hide-container": !i.isOverlapping,
        "hide-container-class": !0
      }, {
        default: q(() => [
          l("div", {
            class: _(["logo-list__col col d-flex", { "flex-wrap": !i.isOverlapping }])
          }, [
            v(c, {
              list: t.list,
              "is-overlapping": i.isOverlapping
            }, null, 8, ["list", "is-overlapping"]),
            i.isOverlapping ? (a(), S(c, {
              key: 0,
              list: t.list,
              "is-clone": "true",
              "is-overlapping": i.isOverlapping
            }, null, 8, ["list", "is-overlapping"])) : u("", !0)
          ], 2)
        ]),
        _: 1
      }, 8, ["hide-container"])
    ])
  ], 6);
}
const Vr = /* @__PURE__ */ C(Ir, [["render", Pr]]), Mr = {
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
    animateLines(s, e) {
      const t = [];
      this.$refs.svg.querySelectorAll("animate").forEach((n) => {
        (!s && !n.classList.contains("closed") || s && n.classList.contains("closed")) && t.push(n);
      });
      const r = e ? "beginElementAt" : "beginElement";
      t.forEach((n) => {
        n[r](1e3);
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
  }
}, Rr = ["x1", "x2", "y1", "y2", "stroke-width"], Fr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Br = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], zr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Hr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], jr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], qr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ur = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Gr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Wr = ["x1", "x2", "y1", "y2", "stroke-width"], Jr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Kr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Xr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Zr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Yr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Qr = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], $r = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], en = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], tn = ["x1", "x2", "y1", "y2", "stroke-width"], sn = ["begin", "from", "keyTimes", "keySplines"], rn = ["begin", "to", "keyTimes", "keySplines"];
function nn(s, e, t, r, n, i) {
  return a(), o("svg", M(t.settings, {
    style: i.style,
    width: "46",
    height: "33",
    viewBox: "0 0 46 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: "svg"
  }), [
    l("line", {
      id: "line1",
      x1: i.lineData.line1.from.x1,
      x2: i.lineData.line1.from.x2,
      y1: i.lineData.line1.from.y1,
      y2: i.lineData.line1.from.y2,
      "stroke-width": i.strokeWidth,
      "stroke-linecap": "round",
      ref: "line1"
    }, [
      l("animate", {
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.from.x1,
        to: i.lineData.line1.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Fr),
      l("animate", {
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.from.x2,
        to: i.lineData.line1.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Br),
      l("animate", {
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.from.y1,
        to: i.lineData.line1.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, zr),
      l("animate", {
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.from.y2,
        to: i.lineData.line1.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Hr),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.to.x1,
        to: i.lineData.line1.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, jr),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.to.x2,
        to: i.lineData.line1.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, qr),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.to.y1,
        to: i.lineData.line1.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Ur),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line1.to.y2,
        to: i.lineData.line1.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Gr)
    ], 8, Rr),
    l("line", {
      style: { transition: "all linear 0.05s" },
      id: "line2",
      x1: i.lineData.line2.from.x1,
      x2: i.lineData.line2.from.x2,
      y1: i.lineData.line2.from.y1,
      y2: i.lineData.line2.from.y2,
      "stroke-width": i.strokeWidth,
      "stroke-linecap": "round",
      ref: "line2"
    }, [
      l("animate", {
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.from.x1,
        to: i.lineData.line2.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Jr),
      l("animate", {
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.from.x2,
        to: i.lineData.line2.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Kr),
      l("animate", {
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.from.y1,
        to: i.lineData.line2.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Xr),
      l("animate", {
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.from.y2,
        to: i.lineData.line2.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Zr),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.to.x1,
        to: i.lineData.line2.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Yr),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.to.x2,
        to: i.lineData.line2.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Qr),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.to.y1,
        to: i.lineData.line2.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, $r),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: i.lineData.line2.to.y2,
        to: i.lineData.line2.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, en)
    ], 8, Wr),
    l("line", {
      style: { transition: "all linear 0.05s" },
      id: "line3",
      x1: i.lineData.line3.from.x1,
      x2: i.lineData.line3.from.x2,
      y1: i.lineData.line3.from.y1,
      y2: i.lineData.line3.from.y2,
      "stroke-width": i.strokeWidth,
      "stroke-linecap": "round",
      ref: "line3"
    }, [
      l("animate", {
        attributeName: "stroke-width",
        begin: n.begin,
        dur: "0.01s",
        from: i.strokeWidth,
        to: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, sn),
      l("animate", {
        class: "closed",
        attributeName: "stroke-width",
        begin: n.begin,
        dur: "0.01s",
        to: i.strokeWidth,
        from: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, rn)
    ], 8, tn)
  ], 16);
}
const an = /* @__PURE__ */ C(Mr, [["render", nn]]), ln = {
  props: {
    productBlocks: Object,
    headline: String
  },
  computed: {
    backgroundColorStyle() {
      return { backgroundColor: this.productBlocks.bgColor };
    }
  },
  methods: {
    animationStyle(s) {
      return { "--utility-animation-index": s };
    }
  },
  mounted() {
    this.$refs.root && W.init([this.$refs.root]);
  }
}, on = { class: "container space-2" }, cn = { class: "row" }, dn = { class: "product-blocks__content" }, hn = { key: 0 }, un = { key: 1 }, mn = {
  key: 2,
  class: "dashed"
}, gn = { class: "product-blocks__buttons" };
function fn(s, e, t, r, n, i) {
  const c = ke, h = K, m = se, g = G;
  return a(), o("div", {
    class: "product-blocks utility-animation container-fluid",
    style: O(i.backgroundColorStyle),
    ref: "root"
  }, [
    l("div", on, [
      t.headline ? (a(), o("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: O(i.animationStyle(1))
      }, [
        v(c, {
          text: t.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : u("", !0),
      l("div", cn, [
        (a(!0), o(b, null, E(t.productBlocks.items, (d, x) => (a(), o("div", {
          key: x,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: O(i.animationStyle(x + 1))
        }, [
          l("div", {
            class: _(["product-blocks__block", { "text-center": d.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            l("div", dn, [
              l("figure", {
                class: _(["product-blocks__img", { "mx-auto": d.copy === "" }, "mb-4"])
              }, [
                d.image ? (a(), S(h, {
                  key: 0,
                  img: d.image,
                  cloudinary: d.cloudinary,
                  alt: d.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : u("", !0)
              ], 2),
              d - t.headline ? (a(), o("h3", hn, y(d.headline), 1)) : u("", !0),
              d.copy ? (a(), o("p", un, y(d.copy), 1)) : u("", !0),
              d.bulletList ? (a(), o("ul", mn, [
                (a(!0), o(b, null, E(d.bulletList, (k, T) => (a(), o("li", { key: T }, y(k), 1))), 128))
              ])) : u("", !0)
            ]),
            l("div", gn, [
              d.list ? (a(), S(m, {
                key: 0,
                list: d.list
              }, null, 8, ["list"])) : d.ctaText ? (a(), S(g, {
                key: 1,
                text: d.ctaText,
                href: d.ctaHref,
                link: d.link,
                target: d.target,
                type: d.type
              }, null, 8, ["text", "href", "link", "target", "type"])) : u("", !0)
            ])
          ], 2)
        ], 4))), 128))
      ])
    ])
  ], 4);
}
const _n = /* @__PURE__ */ C(ln, [["render", fn]]), pn = {
  tagName: "product-stage",
  props: {
    stage: Object,
    products: Object,
    light: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    shapeClasses() {
      return this.overlapping ? "position-absolute bottom-0 left-0 z-index-1 w-100" : "position-relative z-index-1";
    },
    bgColor() {
      return this.stage.bgColor || "var(--color-primary)";
    },
    shape() {
      return this.stage.shape || null;
    },
    cards() {
      return this.stage.cards || null;
    },
    overlapping() {
      return this.cards && this.stage.headline || this.stage.description;
    }
  }
}, yn = { class: "product-stage__content container position-relative" }, vn = ["innerHTML"], bn = {
  key: 1,
  class: "row justify-content-center py-6"
}, xn = ["innerHTML"], Sn = {
  key: 2,
  class: "row justify-content-center py-6"
}, wn = {
  key: 3,
  class: "space-bottom-2 space-bottom-lg-3"
}, kn = ["href", "target", "id", "aria-controls", "aria-selected"], Cn = { class: "d-flex flex-column align-items-center position-relative z-index-2" }, Ln = {
  key: 1,
  class: "mb-6 flex-grow-1"
};
function En(s, e, t, r, n, i) {
  const c = B, h = he("pricing-slider"), m = se, g = G, d = we;
  return a(), o("section", {
    class: "product-stage position-relative overflow-hidden",
    style: O({ backgroundColor: i.bgColor })
  }, [
    e[0] || (e[0] = pe('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>', 1)),
    l("div", yn, [
      l("div", {
        class: _(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2", { "text-white": t.light }])
      }, [
        v(c, {
          classes: t.stage.headlineClasses,
          level: t.stage.headlineLevel || "h1"
        }, {
          default: q(() => [
            j(y(t.stage.headline), 1)
          ]),
          _: 1
        }, 8, ["classes", "level"]),
        t.stage.description ? (a(), o("p", {
          key: 0,
          class: "col-lg-8 lead mt-5 px-0",
          innerHTML: t.stage.description
        }, null, 8, vn)) : u("", !0)
      ], 2),
      t.stage.slider && t.products ? (a(), S(h, {
        key: 0,
        slider: t.stage.slider,
        tooltip: t.stage.tooltip,
        "modal-id": t.stage.modalId
      }, null, 8, ["slider", "tooltip", "modal-id"])) : u("", !0),
      t.stage.additionalCopy ? (a(), o("div", bn, [
        l("div", {
          class: "text-center",
          innerHTML: t.stage.additionalCopy
        }, null, 8, xn)
      ])) : u("", !0),
      t.stage.buttons ? (a(), o("div", Sn, [
        v(m, {
          list: t.stage.buttons
        }, null, 8, ["list"])
      ])) : (a(), o("div", wn)),
      i.cards ? (a(), o("ul", {
        key: 4,
        class: _(["row nav nav-pills", { "px-1 px-lg-0": i.cards.tabs }]),
        role: "tablist"
      }, [
        (a(!0), o(b, null, E(i.cards.list, (x, k) => (a(), o("li", {
          key: k,
          class: _([
            "col-lg-" + 12 / i.cards.list.length,
            { "px-1 px-lg-3 nav-item": i.cards.tabs, "mb-6 mb-md-8 mb-lg-0": !i.cards.tabs }
          ])
        }, [
          x.link ? (a(), o("a", {
            key: 0,
            href: x.link.href,
            target: x.link.target,
            class: _(["product-stage__tab h-100 rounded position-relative d-block", { active: i.cards.tabs && k === 0 }]),
            id: x.id ? x.id + "-tab" : "",
            "data-toggle": "pill",
            role: "tab",
            "aria-controls": x.id,
            "aria-selected": i.cards.tabs && k === 0
          }, [
            l("div", {
              class: _(["product-stage__tab-content position-relative h-100", { "product-stage__tab-content--alternative-border": i.cards.tabs }])
            }, [
              l("div", {
                class: _(["rounded", { "p-2 p-lg-8": x.link, "p-8 bg-white shadow-lg": !x.link }])
              }, [
                l("div", Cn, [
                  x.title ? (a(), o("h2", {
                    key: 0,
                    class: _(["font-size-3 mb-2 mb-md-6 text-center", { "text-primary": x.link }])
                  }, y(x.title), 3)) : u("", !0),
                  x.description ? (a(), o("p", Ln, y(x.description), 1)) : u("", !0),
                  x.cta !== x.href ? (a(), S(g, {
                    key: 2,
                    text: x.cta.text,
                    href: x.cta.href,
                    target: x.cta.target,
                    skin: x.cta.skin,
                    classes: "align-self-center z-index-2"
                  }, null, 8, ["text", "href", "target", "skin"])) : u("", !0)
                ])
              ], 2)
            ], 2)
          ], 10, kn)) : u("", !0)
        ], 2))), 128))
      ], 2)) : u("", !0)
    ]),
    i.shape ? (a(), o(b, { key: 0 }, [
      i.shape.isActive !== !1 ? (a(), S(d, {
        key: 0,
        align: "bottom",
        peak: "left",
        obliquity: 4,
        classes: i.shapeClasses,
        color: i.shape.color
      }, null, 8, ["classes", "color"])) : u("", !0)
    ], 64)) : u("", !0)
  ], 4);
}
const Tn = /* @__PURE__ */ C(pn, [["render", En]]), An = {
  tagName: "quote",
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    }
  },
  props: {
    settings: Object,
    color: String
  }
};
function Dn(s, e, t, r, n, i) {
  return a(), o("svg", M(t.settings, {
    style: i.style,
    viewBox: "0 0 40 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), e[0] || (e[0] = [
    l("path", {
      d: "M14.3178 0C15.8159 2.397 16.9074 4.79401 17.5923 7.19101C18.32 9.58801 18.6838 11.985 18.6838 14.382C18.6838 18.6624 17.5923 22.7501 15.4093 26.6453C13.2691 30.5404 10.1659 34.1359 6.09952 37.4318L1.1557 34.4141C0.727662 34.1573 0.428037 33.8363 0.256822 33.451C0.0856075 33.1086 0 32.7662 0 32.4238C0 31.6105 0.278224 30.9256 0.834671 30.3692C1.39112 29.7271 1.96897 28.9995 2.56822 28.1862C3.21027 27.3729 3.78812 26.4527 4.30177 25.4254C4.81541 24.3981 5.22204 23.2852 5.52167 22.0867C5.8641 20.8882 6.03531 19.6041 6.03531 18.2344C6.03531 16.779 5.79989 15.2381 5.32905 13.6116C4.85821 11.9422 4.06635 10.1873 2.95345 8.34671C2.56822 7.79026 2.3756 7.21241 2.3756 6.61316C2.3756 5.24344 3.16747 4.28036 4.7512 3.72392L14.3178 0ZM35.634 0C37.1322 2.397 38.2236 4.79401 38.9085 7.19101C39.6362 9.58801 40 11.985 40 14.382C40 18.6624 38.9085 22.7501 36.7255 26.6453C34.5853 30.5404 31.4821 34.1359 27.4157 37.4318L22.4719 34.4141C22.0439 34.1573 21.7442 33.8363 21.573 33.451C21.4018 33.1086 21.3162 32.7662 21.3162 32.4238C21.3162 31.6105 21.5944 30.9256 22.1509 30.3692C22.7073 29.7271 23.2852 28.9995 23.8844 28.1862C24.5265 27.3729 25.1043 26.4527 25.618 25.4254C26.1316 24.3981 26.5383 23.2852 26.8379 22.0867C27.1803 20.8882 27.3515 19.6041 27.3515 18.2344C27.3515 16.779 27.1161 15.2381 26.6453 13.6116C26.1744 11.9422 25.3826 10.1873 24.2697 8.34671C23.8844 7.79026 23.6918 7.21241 23.6918 6.61316C23.6918 5.24344 24.4837 4.28036 26.0674 3.72392L35.634 0Z",
      fill: "#FCD116"
    }, null, -1)
  ]), 16);
}
const On = /* @__PURE__ */ C(An, [["render", Dn]]);
class In {
  constructor(e) {
    var r;
    this.position = e;
    const t = (r = window.i18n) == null ? void 0 : r.loader;
    t && t.then(() => {
      var n;
      this.translationData = (n = window.i18n) == null ? void 0 : n.getTranslationData([
        "positionTypePermanently",
        "positionTypeInternship",
        "positionTypeTraining",
        "positionTypeStudent"
      ]);
    });
  }
  get description() {
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((e, t) => this.getEnhanchedDescription(t, e.name, e.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(e) {
    return /^\s*<[^>]+>/.test(e);
  }
  getEnhanchedDescription(e, t, r) {
    const n = e > 0 && t && t["#text"] ? `<h4>${this.trimNewlines(t["#text"])}</h4>` : "";
    let i = r.replace(/<\/?span[^>]*>/g, ""), c = 0;
    const h = 5, m = 2;
    return e === 0 ? i = i.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (g, d) => d.length > h && /^\s*$/.test(d) ? d : c < m && d.length > h && d[0] !== "," ? (c++, "<p>" + d.trim() + "</p>") : d).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(i) && i.length > h && (i = "<p>" + i + "</p>"), `${n}${i}`.replace(/<\/p><br><p>/g, "</p><p>");
  }
  get id() {
    return this.getValue("id").replace(/\s/g, "");
  }
  get title() {
    return this.removeGenderNotations(this.getValue("name"));
  }
  removeGenderNotations(e) {
    const t = /\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;
    return e.replace(t, "").trim();
  }
  get tags() {
    const e = this.getValue("keywords");
    return e ? e.split(",") : [];
  }
  getTeamText(e) {
    if (!e) return;
    let t = e;
    if (t.includes("/")) {
      const r = t.split(" / "), n = r[0], i = r[1], c = "CSOC", h = "Managed Services", m = "Products";
      if (n === h && i !== c)
        t = h;
      else if (n === m)
        t = `${m} ${i}`;
      else
        switch (i) {
          case "Azure Architecture":
            t = "Azure";
            break;
          case "M365 Architecture":
            t = "Workplace";
            break;
          case c:
            t = "Security";
            break;
          default:
            t = i;
            break;
        }
    }
    return t + " Team";
  }
  get team() {
    const e = this.getTeamText(this.getValue("department")), t = e ? " / " : "";
    return `${e || ""}${this.positionType ? t + this.positionType : ""}`;
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
    var t, r, n, i;
    let e = this.getValue("employmentType");
    switch (e) {
      case "permanent":
        e = (t = window.i18n) == null ? void 0 : t.translate("positionTypePermanently");
        break;
      case "intern":
        e = (r = window.i18n) == null ? void 0 : r.translate("positionTypeInternship");
        break;
      case "trainee":
        e = (n = window.i18n) == null ? void 0 : n.translate("positionTypeTraining");
        break;
      case "working_student":
        e = (i = window.i18n) == null ? void 0 : i.translate("positionTypeStudent");
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
    const e = this.tags.find((n) => n.includes("ORDER_"));
    if (!e) return null;
    const t = e.split("_")[1];
    return parseInt(t, 10);
  }
  trimNewlines(e) {
    return e.replace(/\n|\t|    /g, "");
  }
  getValue(e, t = "text") {
    return this.position && this.position[e] ? this.trimNewlines(this.position[e][`#${t}`]) : null;
  }
}
const ee = {
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
class Nn {
  constructor(e) {
    L(this, "defaultLang", "de");
    L(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    L(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    L(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    L(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    L(this, "defaultClientName", "c4a8");
    L(this, "mockApplyUrl", "mock/jobApply.json");
    L(this, "mockDocumentsUrl", "mock/jobDocuments.json");
    this.options = e, (!this.options.client_name || this.options.client_name === "glueckkanja") && (this.options.client_name = this.defaultClientName), this.lang = this.defaultLang, this.jobId = null, this.apiUrl = "https://api.personio.de/v1", this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`, this.applicationsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications", this.documentsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents";
  }
  getUrl(e) {
    var n;
    let t;
    e !== this.types.OPENINGS && ((n = this.options.apiUrl) != null && n.match(/.xml$/)) ? e === this.types.APPLICATIONS ? t = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : t = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : t = this.options.apiUrl ? this.options.apiUrl : this[`${e}Url`];
    const r = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${t}${r}`;
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
    var i;
    const t = new In(e), r = (i = this.options) == null ? void 0 : i.jobId;
    return t.description === null || r && t.id !== r || !this.filterPosition(t) ? null : {
      ...t.data,
      lang: this.lang
    };
  }
  filterPosition(e) {
    var t, r;
    return !((r = (t = this.filter) == null ? void 0 : t.tags) != null && r.length) || this.filter.tags.some((n) => e.tags.map((i) => i.toLowerCase()).includes(n.toLowerCase())) ? e : null;
  }
  convertData(e) {
    var i, c;
    const t = e, r = "workzag-jobs", n = (i = e[r]) == null ? void 0 : i.position;
    return t.objects = n.length ? (c = e[r]) == null ? void 0 : c.position.map((h) => this.convertPosition(h)).filter(Boolean) : [this.convertPosition(n)].filter(Boolean), t.meta = { offset: 0, limit: 20, total: 10 }, t;
  }
  getConvertedJson(e) {
    const r = new DOMParser().parseFromString(e, "application/xml"), n = f.XMLtoJSON(r);
    return this.convertData(n);
  }
  fetchXML(e) {
    return new Promise((t, r) => {
      e.then((n) => n.text()).then((n) => {
        t({
          json: () => this.getConvertedJson(n)
        });
      }).catch((n) => {
        console.error("Personio fetchXML Error:", n), r("Personio fetchXML Error");
      });
    });
  }
  fetch(e, t, r) {
    return new Promise((n, i) => {
      var c;
      if ((c = this.options) != null && c.client_name) {
        const h = fetch(e, t), m = r === this.responseTypes.XML ? this.fetchXML(h) : h;
        n(m);
      } else
        i("no client_name specified");
    });
  }
  async uploadDocuments(e) {
    const t = e.length > 0 ? e : [e], r = [];
    return Array.from(t).forEach((n) => {
      r.push(this.uploadDocument(n));
    }), Promise.all(r);
  }
  async uploadDocument(e) {
    const t = this.getUrl(this.types.DOCUMENTS), r = new FormData();
    return r.append(
      "file",
      new File([e], e.name, {
        type: e.type
      })
    ), this.fetch(t, {
      method: "POST",
      body: r,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(e, t, r) {
    return new Promise((n, i) => {
      this.uploadDocuments(e).then((c) => {
        if (this.hasValidResponseCodes(c)) return this.addFilesToFields(c, r, n, i);
        const h = c[0];
        h.json().then((m) => {
          if (m.errors) return i({ statusCode: h.status, errors: m.errors });
        }).catch((m) => i(m));
      }).catch((c) => i(c));
    });
  }
  addFilesToFields(e, t, r, n) {
    const i = t;
    i.files = [];
    const c = e.map((h) => h.json().then((m) => {
      i.files.push({
        uuid: m.uuid,
        original_filename: m.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(c).then(() => r(i)).catch((h) => n(h));
  }
  getMappedFieldName(e) {
    let t;
    switch (e) {
      case "salary":
        t = "salary_expectations";
        break;
      case "cancellation":
        t = "available_from";
        break;
      case "gender":
      case "birthday":
      case "location":
      case "phone":
        t = e;
        break;
      default:
        t = "custom_attribute_" + e;
        break;
    }
    return t;
  }
  isValidResponseCode(e) {
    return this.options.apiUrl ? e.status === ee.VALID : e.status === ee.VALID || e.status === ee.CREATED || e.status === ee.NO_CONTENT;
  }
  hasValidResponseCodes(e) {
    return e.every((t) => this.isValidResponseCode(t));
  }
  handleApply(e) {
    return new Promise((t, r) => {
      this.apply({ fields: e }).then((n) => {
        if (this.isValidResponseCode(n)) return t();
        n.json().then((i) => {
          if (i.errors) return r({ statusCode: n.status, errors: i.errors });
        }).catch((i) => r(i));
      }).catch((n) => r(n));
    });
  }
  getFormPayload(e, t) {
    const r = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, n = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let i = 0; i < e.length; i++) {
      const h = e[i].input, m = t.getName(h.name), g = f.camalCaseToSnakeCase(m);
      n.hasOwnProperty(g) ? r[g] = h.value : g !== "_gotcha" && r.attributes.push({
        id: this.getMappedFieldName(g),
        value: h.value
      });
    }
    return r;
  }
  getHeaders() {
    return {
      "Ocp-Apim-Subscription-Key": this.options.apiKey
    };
  }
  async apply(e) {
    const t = this.getUrl(this.types.APPLICATIONS);
    return this.fetch(t, {
      method: "POST",
      body: JSON.stringify(e.fields),
      headers: {
        ...this.getHeaders(),
        "Content-Type": "application/json"
      }
    });
  }
}
class Pn {
  constructor(e) {
    L(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = e, this.api = new Nn(this.options), this.jobDataUrl = f.getSiteAssetPath(this.jobDataUrl);
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
  getUrl(e, t, r) {
    return this.api.getUrl(e, t, r);
  }
  fetch(e, t) {
    return this.api.fetch(e, t);
  }
  getLangFromEntry(e) {
    return e.lang || null;
  }
  getJobId() {
    let e = "";
    const t = window.location.hash;
    if (t)
      if (t.indexOf("-") !== -1) {
        const r = t.split("-");
        e = r[r.length - 1];
      } else
        e = t.substring(1);
    else this.options.jobId && (e = this.options.jobId);
    return e;
  }
  getOrderedList(e) {
    const t = e.filter((n) => n.order !== void 0).sort((n, i) => i.order - n.order), r = e.filter((n) => n.order === void 0);
    return [...t, ...r];
  }
  getFormData(e) {
    const t = U.getFormData(e);
    return this.api.getFormPayload(t, U);
  }
  applyFileData(e, t, r) {
    return this.api.applyFileData(e, t, r);
  }
  handleApply(e) {
    return this.api.handleApply(e);
  }
}
const Y = class Y {
  constructor(e, t) {
    this.root = e, this.options = t, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(p.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new Pn({
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
    var e, t, r;
    if ((e = this.close) == null || e.addEventListener("click", this.handleClose.bind(this)), (t = this.successClose) == null || t.addEventListener("click", this.handleClose.bind(this)), (r = this.errorClose) == null || r.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const n = this.root.parentNode, i = U.getInstance(this.form);
      if (n && this.isNotVueApp(n)) {
        const c = n.querySelector(this.buttonSelector);
        c == null || c.addEventListener("click", this.handleOpen.bind(this));
      } else n && this.addTriggerListeners();
      i && i.canHaveCustomSubmit() && (i.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(I.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((t) => t.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(e) {
    var r;
    e.stopImmediatePropagation();
    const t = (r = e == null ? void 0 : e.detail) == null ? void 0 : r.id;
    !t || t !== this.modalId || this.handleOpen(e);
  }
  handleApplicationSubmit(e) {
    e.preventDefault(), e.stopImmediatePropagation(), this.setLoading(!0);
    const t = this.form.querySelector(de.base64Selector), r = t == null ? void 0 : t.value;
    let n = this.api.getFormData(this.form), i;
    if (r)
      i = {
        name: t.dataset.fileName
      };
    else {
      const c = this.form.querySelector('input[type="file"]');
      i = c == null ? void 0 : c.files;
    }
    i ? this.handleApplicationRequest(n, i, r) : this.handleError();
  }
  setLoading(e) {
    document.dispatchEvent(new CustomEvent(I.LOAD_MODAL, { detail: e }));
  }
  handleApplicationRequest(e, t, r) {
    this.api.applyFileData(t, r, e).then((n) => {
      this.api.handleApply(n).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(n);
      }).catch((i) => {
        this.setLoading(!1), this.handleError(i);
      });
    }).catch((n) => {
      this.setLoading(!1), this.handleError(n);
    });
  }
  handleApplicationSuccess(e) {
    this.root.classList.add(p.SUCCESS);
    const t = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (t) {
      t.dataset.text || (t.dataset.text = t.innerText);
      const r = e.first_name;
      t.innerText = `${t.dataset.text} ${r}`;
    }
  }
  handleError(e) {
    if (!e) return console.error("handle generic error");
    const t = typeof e == "string" ? e : e.message ? e.message : e, r = typeof e == "object" && e.statusCode ? e.statusCode : ee.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", t), r === ee.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(e) : this.root.classList.add(p.ERROR);
  }
  handlePayloadTooLarge(e) {
    document.dispatchEvent(new CustomEvent(I.FORM_ATTACHMENT_ERROR, { detail: e }));
  }
  handleClose(e) {
    e.preventDefault(), Y.close(this.root);
  }
  handleOpen(e) {
    e.preventDefault(), Y.open(this.root);
  }
  static initElement(e, t) {
    const r = new this(e, t);
    return this.instances.push(r), r;
  }
  static open(e) {
    e && window.$ && $(e).modal("show");
  }
  static close(e) {
    e && window.$ && ($(e).modal("hide"), Y.resetModal(e));
  }
  static resetModal(e) {
    setTimeout(function() {
      const t = e.querySelector("form");
      t == null || t.reset(), e.classList.remove(p.SUCCESS), e.classList.remove(p.ERROR);
    }, 200);
  }
  static init(e) {
    this.instances = [];
    const t = e || document, r = `${this.rootSelector}:not(.${p.READY})`;
    [].forEach.call(t.querySelectorAll(r), (n) => {
      this.initElement(n);
    });
  }
};
L(Y, "rootSelector", ".modal"), L(Y, "instances", []);
let ve = Y;
const Vn = {
  tagName: "modal",
  computed: {
    modalErrorValue() {
      return f.getJSON(this.modalError);
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
      return f.isTrue(this.center);
    },
    slimValue() {
      return f.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? !0 : null;
    },
    notificationValue() {
      return f.isTrue(this.notification);
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
      return ["modal__body", this.loading ? p.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(I.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(s) {
      const e = document.querySelector("html");
      s ? e.classList.add(p.MODAL_OPEN) : (e.classList.remove(p.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const e = this.$refs.modal.querySelector(U.rootSelector);
      if (!e) return;
      const t = U.getInstance(e);
      t || U.reset(t.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(I.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(s) {
      const e = s == null ? void 0 : s.detail;
      this.loading = e;
    },
    openModal() {
      setTimeout(() => {
        ve.open(this.$refs.modal);
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
}, Mn = {
  tagName: "text-image",
  props: {
    spacing: { type: String, default: "space-top-2" },
    image: String,
    imageClasses: String,
    imagePreset: String,
    lottie: Object,
    float: Boolean,
    overline: String,
    headlineText: String,
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
    this.$refs.root && (this.sticky && te.init([this.$refs.root]), W.init([this.$refs.root]));
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, Rn = { class: "container" }, Fn = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, Bn = {
  key: 3,
  class: "richtext"
}, zn = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, Hn = ["innerHTML"], jn = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, qn = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function Un(s, e, t, r, n, i) {
  const c = K, h = Te, m = B, g = se, d = G, x = Vn;
  return a(), o("div", {
    class: _(i.textImageClass),
    style: O(i.textImageStyle),
    ref: "root"
  }, [
    l("div", Rn, [
      l("div", {
        class: _(["row", { "flex-row-reverse": t.left }])
      }, [
        t.float ? (a(), o("div", {
          key: 0,
          class: _([
            "text-image__floating-col",
            "justify-content-end",
            "text-image__floating-img",
            "position-absolute",
            "top-0",
            "right-0",
            "col-lg-" + i.textImageFirstColWidthComputed,
            "col-xl-" + i.textImageFirstColWidthXl
          ]),
          onClick: e[0] || (e[0] = (...k) => i.handleClick && i.handleClick(...k)),
          style: O({ cursor: t.href ? "pointer" : void 0 })
        }, [
          v(c, {
            img: t.image,
            cloudinary: t.cloudinary,
            alt: t.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: t.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : u("", !0),
        l("div", {
          class: _(i.textImageFirstColClasses),
          onClick: e[1] || (e[1] = (...k) => i.handleClick && i.handleClick(...k)),
          style: O({ cursor: t.href ? "pointer" : void 0 })
        }, [
          l("div", {
            class: _(["text-image__first-col-wrapper", { "fade-in-bottom": !t.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            v(c, {
              img: t.image,
              cloudinary: t.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: t.alt,
              lottie: t.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ], 2)
        ], 6),
        l("div", {
          class: _(i.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          t.badge ? (a(), S(h, {
            key: 0,
            text: t.badge.text,
            icon: t.badge.icon,
            uppercase: !t.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : u("", !0),
          t.overline ? (a(), o("span", Fn, y(t.overline), 1)) : u("", !0),
          t.headlineText ? (a(), S(m, {
            key: 2,
            level: t.level,
            classes: i.textImageHeadlineClassesComputed
          }, {
            default: q(() => [
              j(y(t.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : u("", !0),
          t.subline ? (a(), o("span", Bn, y(t.subline), 1)) : u("", !0),
          t.subline ? (a(), o("div", zn, [
            v(c, {
              img: t.image,
              cloudinary: t.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: t.alt,
              lottie: t.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : u("", !0),
          l("div", {
            class: _(i.textImageLightTextClass),
            innerHTML: t.copy
          }, null, 10, Hn),
          t.list ? (a(), o("div", jn, [
            v(g, { list: t.list }, null, 8, ["list"])
          ])) : u("", !0)
        ], 2),
        t.cta ? (a(), o("div", qn, [
          v(d, {
            text: t.cta.text,
            button: "",
            href: t.cta.href,
            trigger: t.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : u("", !0)
      ], 2)
    ]),
    t.modal ? (a(), S(x, {
      key: 0,
      form: t.modal.form,
      success: t.modal.success,
      error: t.modal.error,
      application: !0,
      clientName: t.modal.clientName,
      jobId: t.modal.jobId,
      apiUrl: t.modal.apiUrl,
      apiKey: t.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : u("", !0)
  ], 6);
}
const Be = /* @__PURE__ */ C(Mn, [["render", Un]]), Gn = {
  tagName: "text-image-list",
  props: {
    textImages: Array,
    classes: String,
    headline: String,
    level: {
      type: String,
      default: "h2"
    },
    headlineColor: String,
    headlineSticky: Boolean,
    bgColor: {
      type: String
    },
    spacing: String
  },
  methods: {
    isLeft(s) {
      return s % 2 === 1;
    }
  },
  computed: {
    textImageListSize() {
      return this.textImages.length;
    }
  }
};
function Wn(s, e, t, r, n, i) {
  const c = Be, h = Fe;
  return a(), S(h, {
    classes: t.classes,
    headline: t.headline,
    level: t.level,
    "bg-color": t.bgColor,
    "headline-color": t.headlineColor,
    "headline-sticky": t.headlineSticky,
    spacing: t.spacing
  }, {
    default: q(() => [
      (a(!0), o(b, null, E(t.textImages, (m, g) => (a(), S(c, {
        key: g,
        image: m.image,
        alt: m.alt,
        "headline-text": m.headline,
        copy: m.copy,
        offset: !0,
        left: i.isLeft(g),
        spacing: m.spacing || "space-top-lg-2",
        index: g + 1,
        list: m.list
      }, null, 8, ["image", "alt", "headline-text", "copy", "left", "spacing", "index", "list"]))), 128))
    ]),
    _: 1
  }, 8, ["classes", "headline", "level", "bg-color", "headline-color", "headline-sticky", "spacing"]);
}
const Jn = /* @__PURE__ */ C(Gn, [["render", Wn]]), Le = {
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
}, Kn = {
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
}, Xn = {
  tagName: "v-footer",
  components: {
    "footer-slider": Kn
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
        f.isTrue(this.noMargin) ? "" : "mt-8 mt-lg-11",
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
      return this.data ? { ...Le, ...f.getJSON(this.data) } : { ...Le };
    },
    links() {
      const s = this.lang.toLowerCase();
      if (s === "de" || s === "")
        return this.dataValue.links;
      {
        const e = f.capitalize(this.lang), t = this.dataValue[`links${e}`];
        return t || this.dataValue.links;
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
      const t = window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g, "").split(",");
      return `rgba(${t[0]}, ${t[1]}, ${t[2]}, 1)`;
    }
  },
  props: {
    data: Object,
    noMargin: {
      default: null
    },
    lang: String
  }
}, Zn = { class: "container" }, Yn = { class: "footer__content-row row" }, Qn = { class: "footer__content col-lg-12" }, $n = { class: "footer__address" }, ea = ["href", "target"], ta = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, sa = {
  key: 0,
  class: "nav-item"
}, ia = {
  key: 1,
  class: "nav-item"
}, ra = {
  key: 2,
  class: "nav-item"
}, na = { class: "footer__postal-code" }, aa = { class: "footer__city" }, la = { class: "footer__country" }, oa = {
  key: 4,
  class: "nav-item"
}, ca = ["href"], da = { class: "media" }, ha = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, ua = { class: "media-body" }, ma = {
  key: 5,
  class: "footer__nav-item nav-item"
}, ga = { class: "footer__nav-link nav-link" }, fa = { class: "footer__offices" }, _a = { class: "footer__office" }, pa = { key: 0 }, ya = ["href"], va = { class: "d-flex" }, ba = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, xa = { class: "footer__mail media-body" }, Sa = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, wa = ["href", "target"], ka = { class: "footer__highlights" }, Ca = { class: "footer__partners" }, La = ["href", "target"], Ea = {
  key: 0,
  class: "footer__vertical-line"
}, Ta = {
  key: 0,
  class: "footer__content-row row"
}, Aa = { class: "footer__content col-lg-12" }, Da = { class: "mt-3" }, Oa = { class: "row align-items-md-center mb-3" }, Ia = { class: "col-md-8 mb-4 mb-md-0" }, Na = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, Pa = { class: "nav-item mr-6 footer__links" }, Va = ["href"], Ma = { class: "col-md-4 text-md-right" }, Ra = { class: "list-inline mb-0 footer__socials" }, Fa = { class: "list-inline-item" }, Ba = ["title", "href"], za = { class: "row pb-2" }, Ha = { class: "col" }, ja = { class: "text-white small" };
function qa(s, e, t, r, n, i) {
  const c = K, h = be, m = J, g = he("footer-slider");
  return a(), o("footer", {
    class: _(i.classList),
    style: O(i.style),
    ref: "root"
  }, [
    l("div", Zn, [
      l("div", Yn, [
        l("div", Qn, [
          l("div", $n, [
            (a(!0), o(b, null, E(i.dataValue.logos, (d) => (a(), o("div", {
              class: _(["mb-3", d == null ? void 0 : d.classes])
            }, [
              l("a", {
                href: d.url,
                target: d.target,
                "aria-label": "Front",
                class: _([
                  "footer__logos-link d-block pr-6",
                  d.linkClasses ? d.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                v(c, M({
                  cloudinary: !0,
                  ref_for: !0
                }, d), null, 16)
              ], 10, ea)
            ], 2))), 256)),
            (a(!0), o(b, null, E(i.locations, (d) => (a(), o("ul", ta, [
              d.name ? (a(), o("li", sa, y(d.name), 1)) : u("", !0),
              d.over ? (a(), o("li", ia, y(d.over), 1)) : u("", !0),
              d.street ? (a(), o("li", ra, y(d.street), 1)) : u("", !0),
              d.city ? (a(), o("li", {
                key: 3,
                class: _(["nav-item footer__address-block", d.postalReversed ? "is-reversed" : ""])
              }, [
                l("span", na, y(d.postalCode), 1),
                l("span", aa, y(d.city), 1),
                l("span", la, y(d.country), 1)
              ], 2)) : u("", !0),
              d.number ? (a(), o("li", oa, [
                l("a", {
                  class: "nav-link media",
                  href: "tel:" + d.number
                }, [
                  l("span", da, [
                    l("span", ha, [
                      v(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", ua, y(d.number), 1)
                  ])
                ], 8, ca)
              ])) : u("", !0),
              i.dataValue.offices ? (a(), o("li", ma, [
                l("a", ga, [
                  v(m, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  l("div", fa, [
                    (a(!0), o(b, null, E(i.dataValue.offices, (x, k) => (a(), o("span", _a, [
                      j(y(x), 1),
                      k < i.dataValue.offices.length - 1 ? (a(), o("span", pa, ", ")) : u("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : u("", !0),
              d.mail ? (a(), o("li", {
                key: 6,
                class: _(["nav-item", i.locations.length > 1 ? "pt-4" : ""])
              }, [
                l("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + d.mail
                }, [
                  l("span", va, [
                    l("span", ba, [
                      v(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", xa, y(d.mail), 1)
                  ])
                ], 8, ya)
              ], 2)) : u("", !0)
            ]))), 256)),
            i.isCorporate ? u("", !0) : (a(!0), o(b, { key: 0 }, E(i.dataValue.brandLogos, (d, x) => (a(), o(b, null, [
              d.title ? (a(), o("span", Sa, y(d.title), 1)) : u("", !0),
              l("a", {
                href: d.url,
                target: d.target,
                class: _([
                  "footer__brand-logo-link d-block space-top-1",
                  x === 0 ? "mt-3" : "",
                  d.classes ? d.classes : "w-90"
                ])
              }, [
                v(c, M({
                  cloudinary: !0,
                  ref_for: !0
                }, d), null, 16)
              ], 10, wa)
            ], 64))), 256))
          ]),
          l("div", ka, [
            l("div", Ca, [
              (a(!0), o(b, null, E(i.dataValue.partners, (d, x) => (a(), o(b, null, [
                l("a", {
                  href: d.url,
                  target: d.target,
                  class: "footer__partner-images"
                }, [
                  v(c, M({
                    cloudinary: !0,
                    ref_for: !0
                  }, d, { class: "footer__partner-image" }), null, 16)
                ], 8, La),
                x < i.dataValue.partners.length - 1 ? (a(), o("div", Ea)) : u("", !0)
              ], 64))), 256))
            ]),
            i.isCorporate ? u("", !0) : (a(), S(g, {
              key: 0,
              items: i.dataValue.highlights,
              "bg-color": n.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      i.isCorporate ? (a(), o("div", Ta, [
        l("div", Aa, [
          v(g, {
            items: i.dataValue.highlights,
            "bg-color": n.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : u("", !0),
      e[0] || (e[0] = l("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      l("div", Da, [
        l("div", Oa, [
          l("div", Ia, [
            l("ul", Na, [
              (a(!0), o(b, null, E(i.links, (d) => (a(), o("li", Pa, [
                l("a", M({
                  class: "nav-link",
                  href: d.url,
                  ref_for: !0
                }, d), y(d.title), 17, Va)
              ]))), 256))
            ])
          ]),
          l("div", Ma, [
            l("ul", Ra, [
              (a(!0), o(b, null, E(i.dataValue.socials, (d) => (a(), o("li", Fa, [
                l("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: d.title,
                  href: d.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  l("i", {
                    class: _(["fab", d.icon])
                  }, null, 2)
                ], 8, Ba)
              ]))), 256))
            ])
          ])
        ]),
        l("div", za, [
          l("div", Ha, [
            l("p", ja, "Copyright © " + y(i.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const Ua = /* @__PURE__ */ C(Xn, [["render", qa]]), Ee = {}, Ga = {
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
        }).then((e) => e.json()).then((e) => {
          this.store = e, this.handleSearch();
        }).catch((e) => {
          console.log("handleEnter ~ error", e);
        });
    },
    handleSearch() {
      this.searchEngine || this.initSearchEngine();
      const s = `${this.$refs.search.value}`;
      s && (this.results = this.searchEngine.search(s), console.log("handleSearch ~ this.results", this.results));
    },
    initSearchEngine() {
      const s = this.store, { results: e, weights: t } = s;
      if (!Ee) return;
      const r = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: t
      };
      this.searchEngine = new Ee(e, r);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(s) {
      this.searchExpanded = f.isOutsideOf("search", s) ? !1 : this.searchExpanded;
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
}, Wa = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? p.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        f.isTrue(this.hover) ? p.HOVERING : "",
        f.isTrue(this.product) ? "header--product" : "",
        f.isTrue(this.closed) ? "" : p.EXPANDED,
        f.isTrue(this.blendMode) ? "header--blending" : "",
        // this.activeNavigation.length > 0 ? '' : State.LOADING,
        "vue-component"
      ];
    },
    headerContainerClassList() {
      return ["header__container", this.containerClass];
    },
    containerClass() {
      return f.isTrue(this.product) ? "container" : "container-xxl";
    },
    homeObj() {
      var s;
      return (s = this.home) == null ? void 0 : s.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return f.isTrue(this.search);
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
    clonedNavigation() {
      return JSON.parse(JSON.stringify(this.navigation));
    },
    isLight() {
      return f.isTrue(this.light) === !0;
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
  created() {
    this.setActiveNavigation();
  },
  mounted() {
    this.bindEvents(), this.setCtaClasses(), this.setLinkWidth(), this.handleScroll();
  },
  updated() {
    this.inUpdate && (this.updateProductListHeight(), this.inUpdate = !1, this.inTransition = !1);
  },
  methods: {
    setActiveNavigation() {
      this.setActiveLinks(), this.activeNavigation = this.clonedNavigation;
    },
    setLinkWidth() {
      var e;
      const s = this.$refs.link;
      if (s)
        for (let t = 0; t < s.length; t++) {
          const r = s[t], n = (e = r == null ? void 0 : r.querySelector(".header__link-text-spacer")) == null ? void 0 : e.clientWidth;
          r.style.setProperty("--header-link-text-width", n + "px");
        }
    },
    showFlyoutBlock(s) {
      return !(s.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return f.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(I.WINDOW_RESIZE, this.handleResize.bind(this));
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
    handleClick(s, e) {
      if (!this.isLowerBreakpoint()) return;
      const t = this.getId(s, e);
      this.linkLists[t] = !this.linkLists[t], this.linkLists[t] && (this.inTransition = !0), this.inUpdate = !0, this.closeAllSiblings(t), this.closeAllChildren();
    },
    closeAllSiblings(s) {
      Object.keys(this.linkLists).forEach((t) => {
        t !== s && (this.linkLists[t] = !1);
      });
    },
    closeAllChildren() {
      const s = new CustomEvent(I.CHILD_HAS_UPDATE, {
        detail: {}
      });
      this.$refs.list.dispatchEvent(s);
    },
    getId(s, e) {
      return `${s.name}_${e}`;
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
    handleMouseOver(s, e) {
      if (!s.children) return;
      this.resetAllFlyouts(), this.hover = !0;
      const t = this.getLinkRef(e);
      if (!t) return;
      t.classList.add(p.EXPANDED);
      const r = this.getFlyoutRef(e);
      r && (this.flyoutIndex = e, r.classList.add(p.EXPANDED));
    },
    handleMouseOut(s) {
      var r;
      if ((r = s.relatedTarget) != null && r.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.getLinkRef(this.flyoutIndex);
      if (!e) return;
      e.classList.remove(p.EXPANDED);
      const t = this.getFlyoutRef(this.flyoutIndex);
      t && t.classList.remove(p.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const s = this.$refs.languageSwitch;
      s && s.classList.add(p.EXPANDED);
    },
    handleLanguageOut(s) {
      var t;
      if ((t = s.relatedTarget) != null && t.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.$refs.languageSwitch;
      e && e.classList.remove(p.EXPANDED);
    },
    resetAllFlyouts() {
      var s, e;
      (s = this.$refs.link) == null || s.forEach((t) => {
        t.classList.remove(p.EXPANDED);
      }), (e = this.$refs.flyout) == null || e.forEach((t) => {
        t.classList.remove(p.EXPANDED);
      });
    },
    getFlyoutRef(s) {
      return this.getRef("flyout", s);
    },
    getLinkRef(s) {
      return this.getRef("link", s);
    },
    getRef(s, e) {
      const t = this.$refs[s][e];
      if (t)
        return t;
    },
    getHref(s) {
      var e;
      return s.children ? "javascript:void(0);" : (e = s.languages[this.lowerLang]) == null ? void 0 : e.url;
    },
    getTarget(s) {
      var t;
      const e = (t = s.languages[this.lowerLang]) == null ? void 0 : t.target;
      return e || null;
    },
    getNextLanguage() {
      const s = this.home.languages;
      if (!s) return;
      const e = Object.keys(s);
      if (!e.length) return;
      const t = e.filter((r) => r !== this.lowerLang);
      if (t.length)
        return t[0];
    },
    handleLanguageSwitch(s) {
      var r;
      const e = this.getActiveUrlByLang(s), t = e || ((r = this.home.languages[s]) == null ? void 0 : r.url);
      f.storageSave("preferedLanguage", s, !1), document.location.href = t;
    },
    getCurrentPath() {
      let s = "/";
      return typeof process < "u" && process.server ? s = this.$route.fullPath : s = window.location.pathname, s[s.length - 1] !== "/" && (s += "/"), s;
    },
    getActiveUrlByLang(s, e) {
      var h;
      const t = this.getCurrentPath(), r = "/", n = (m, g) => {
        if (!(m != null && m.title)) return;
        let d = m == null ? void 0 : m.url;
        t[(t == null ? void 0 : t.length) - 1] === r && d && d[(d == null ? void 0 : d.length) - 1] !== r && (d = d + r);
        const x = d === t, k = this.getParentLink(g);
        return e && x ? (m.active = !0, k && (k.active = !0)) : (m.active = !1, k && (k.active = !1)), x;
      }, i = (m, g) => g;
      let c = f.findRecursive(this.clonedNavigation, n, i);
      if (c || (c = f.findRecursive(this.meta, n, i)), c || (c = f.findRecursive(this.contact, n, i)), !c) {
        const m = this.getHrefLang(s);
        return m || this.getTranslatedUrl(t, s);
      }
      return (h = c[s]) == null ? void 0 : h.url;
    },
    getTranslatedUrl(s, e) {
      if (this.isBlogTagsUrl(s)) return this.getBlogTagsUrl(e, s);
      const t = this.getFolderSwitchSegment(s);
      return t ? this.getFolderSwitchUrl(e, s, t) : null;
    },
    getFolderSwitchSegment(s) {
      const e = this.home.folderSwitch;
      return e && e.find((r) => s.includes(r)) || null;
    },
    getFolderSwitchUrl(s, e, t) {
      if (!t) return e;
      let r;
      if (s === this.defaultLang) {
        const n = new RegExp(`/${this.lowerLang}/`);
        r = e.replace(n, "/");
      } else
        r = e.replace(t, `${s}/${t}`);
      return r;
    },
    isBlogTagsUrl(s) {
      return /\/blog\/tags/.test(s);
    },
    getBlogTagsUrl(s, e) {
      let t;
      const r = "tags";
      switch (s) {
        case "en":
          t = e.replace(r, `${r}-${s}`);
          break;
        default:
        case this.defaultLang:
          const n = new RegExp(`${r}-..`);
          t = e.replace(n, r);
          break;
      }
      return t + document.location.search;
    },
    getHrefLang(s) {
      const e = document == null ? void 0 : document.querySelector(`link[hreflang=${s}]`);
      if (e)
        return e.getAttribute("href");
    },
    getParentLink(s) {
      return this.clonedNavigation[s].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(s) {
      var e;
      return ["header__item", (e = s.languages[this.lowerLang]) != null && e.active ? p.ACTIVE : ""];
    },
    isLinkListHidden(s, e) {
      const t = this.getId(s, e);
      return !this.linkLists[t];
    },
    headerLinkClasses(s, e) {
      return this.getListClasses(s, e, ["header__link custom"]);
    },
    headerProductListClasses(s, e) {
      return this.getListClasses(s, e, ["header__product-list", this.inTransition ? p.IN_TRANSITION : ""]);
    },
    getListClasses(s, e, t) {
      const r = this.isLinkListHidden(s, e);
      return [...t, r ? "" : p.EXPANDED];
    },
    updateProductListHeight() {
      const s = this.$refs["product-list"];
      if (s)
        for (let e = 0; e < s.length; e++) {
          const t = s[e], n = !t.classList.contains(p.EXPANDED) || t.style.height !== "" ? "" : t.scrollHeight + "px";
          t.style.height = n;
        }
    },
    navHighlightClasses(s, e) {
      return ["header__nav-highlight custom", this.isLinkListHidden(s, e) ? "is-hidden" : ""];
    },
    hasContactLink(s) {
      var e, t;
      return ((e = this.contact) == null ? void 0 : e.languages) && !((t = s.languages[this.lowerLang]) != null && t.emergency);
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
      maxLinkListsInFlyout: 3,
      activeNavigation: {}
    };
  }
}, Ja = { class: "header__row row" }, Ka = { class: "header__col col" }, Xa = { class: "header__logo" }, Za = ["href"], Ya = {
  class: "header__list",
  ref: "list"
}, Qa = ["href", "target", "onClick"], $a = ["onMouseover"], el = { class: "header__link-text" }, tl = { class: "header__link-text-spacer" }, sl = ["href", "target"], il = { class: "header__product-list-data" }, rl = { class: "header__product-list-title font-size-8 bold" }, nl = { class: "header__product-list-subtitle" }, al = ["href"], ll = { class: "header__footer" }, ol = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, cl = ["href"], dl = { class: "header__contact-text" }, hl = { class: "header__contact-title" }, ul = {
  key: 2,
  class: "header__button"
}, ml = {
  key: 3,
  class: "header__language-switch"
}, gl = ["onClick"], fl = {
  key: 0,
  class: "header__button"
}, _l = { class: "header__link-text" }, pl = { class: "header__link-text-spacer" }, yl = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, vl = ["onClick"], bl = { class: "row" }, xl = { class: "col" }, Sl = {
  key: 0,
  class: "header__flyout-items"
}, wl = {
  key: 0,
  class: "header__flyout-block"
}, kl = { class: "header__flyout-caption" }, Cl = ["innerHTML"], Ll = ["href"], El = { class: "header__contact-title" }, Tl = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, Al = {
  key: 1,
  class: "header__product-list is-expanded"
}, Dl = ["href", "target"], Ol = { class: "header__product-list-data" }, Il = { class: "header__product-list-title font-size-8 bold" }, Nl = { class: "header__product-list-subtitle" };
function Pl(s, e, t, r, n, i) {
  var x, k, T, N, X, P;
  const c = K, h = J, m = Me, g = G, d = Ga;
  return a(), o(b, null, [
    l("div", {
      class: "header__spacer",
      style: O(i.spacerBgColor)
    }, null, 4),
    l("header", {
      class: _(i.classList),
      onMouseover: e[5] || (e[5] = (...w) => i.handleHeaderMouseOver && i.handleHeaderMouseOver(...w)),
      onMouseout: e[6] || (e[6] = (...w) => i.handleHeaderMouseOut && i.handleHeaderMouseOut(...w))
    }, [
      l("div", {
        class: _(i.headerContainerClassList)
      }, [
        l("div", Ja, [
          l("div", Ka, [
            l("div", Xa, [
              l("a", {
                href: (x = i.homeObj) == null ? void 0 : x.url
              }, [
                v(c, {
                  img: (k = t.home) == null ? void 0 : k.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"]),
                v(c, {
                  img: (T = t.home) == null ? void 0 : T.img,
                  class: "header__logo-default",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"])
              ], 8, Za)
            ]),
            l("div", {
              class: "header__menu",
              onClick: e[0] || (e[0] = (...w) => i.handleCloseClick && i.handleCloseClick(...w))
            }, [
              v(h, {
                icon: "menu",
                class: "header__menu-icon",
                closed: n.closed
              }, null, 8, ["closed"])
            ]),
            l("nav", {
              class: "header__nav",
              onMouseout: e[1] || (e[1] = (...w) => i.handleMouseOut && i.handleMouseOut(...w))
            }, [
              l("ul", Ya, [
                (a(!0), o(b, null, E(n.activeNavigation, (w, D) => {
                  var Z, ie, re, ne, ae, Q;
                  return a(), o("li", {
                    class: _(i.headerItemClasses(w))
                  }, [
                    w != null && w.languages ? (a(), o("a", {
                      key: 0,
                      class: _(i.headerLinkClasses(w, D)),
                      href: i.getHref(w),
                      target: i.getTarget(w),
                      onClick: (F) => i.handleClick(w, D),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      l("div", {
                        class: "header__link-content",
                        onMouseover: (F) => i.handleMouseOver(w, D, F)
                      }, [
                        l("span", el, y((Z = w.languages[i.lowerLang]) == null ? void 0 : Z.title), 1),
                        l("span", tl, y((ie = w.languages[i.lowerLang]) == null ? void 0 : ie.title), 1),
                        w.children ? (a(), S(h, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : u("", !0)
                      ], 40, $a)
                    ], 10, Qa)) : u("", !0),
                    (a(!0), o(b, null, E(w.children, (F) => (a(), o(b, null, [
                      w.children && !F.products ? (a(), S(m, {
                        key: 0,
                        list: F,
                        lang: i.lowerLang,
                        hidden: i.isLinkListHidden(w, D),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (a(), o("div", {
                        key: 1,
                        class: _(i.headerProductListClasses(w, D)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (a(!0), o(b, null, E(F.children, (R) => {
                          var le, oe, Ce;
                          return a(), o("a", {
                            href: (le = R == null ? void 0 : R.languages[i.lowerLang]) == null ? void 0 : le.url,
                            target: R.target,
                            class: "header__product-list-item custom"
                          }, [
                            v(c, {
                              img: R.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", il, [
                              l("div", rl, y((oe = R == null ? void 0 : R.languages[i.lowerLang]) == null ? void 0 : oe.title), 1),
                              l("div", nl, y((Ce = R == null ? void 0 : R.languages[i.lowerLang]) == null ? void 0 : Ce.subtitle), 1)
                            ])
                          ], 8, sl);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (re = w.languages[i.lowerLang]) != null && re.emergency ? (a(), o("a", {
                      key: 1,
                      href: (ne = w.languages[i.lowerLang]) == null ? void 0 : ne.emergency.href,
                      class: _(i.navHighlightClasses(w, D))
                    }, [
                      v(h, {
                        icon: (ae = w.languages[i.lowerLang]) == null ? void 0 : ae.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      j(" " + y((Q = w.languages[i.lowerLang]) == null ? void 0 : Q.emergency.text), 1)
                    ], 10, al)) : u("", !0)
                  ], 2);
                }), 256))
              ], 512),
              l("div", ll, [
                i.hasMeta ? (a(), S(m, {
                  key: 0,
                  list: i.metaList,
                  lang: i.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : u("", !0),
                i.hasContact ? (a(), o("div", ol, [
                  (N = t.contact) != null && N.languages ? (a(), o("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (X = t.contact.languages[i.lowerLang]) == null ? void 0 : X.url
                  }, [
                    l("div", dl, [
                      v(h, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      l("span", hl, y((P = t.contact.languages[i.lowerLang]) == null ? void 0 : P.title), 1)
                    ])
                  ], 8, cl)) : u("", !0)
                ])) : u("", !0),
                t.button ? (a(), o("div", ul, [
                  v(g, {
                    text: t.button.text,
                    href: t.button.href,
                    target: t.button.target,
                    skin: t.button.skin,
                    classes: n.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : u("", !0),
                i.hasLangSwitch ? (a(), o("div", ml, [
                  (a(!0), o(b, null, E(t.home.languages, (w, D) => (a(), o("a", {
                    class: _({ "header__language-link custom": !0, active: D === i.lowerLang }),
                    onClick: (Z) => i.handleLanguageSwitch(D)
                  }, y(D), 11, gl))), 256))
                ])) : u("", !0)
              ])
            ], 32),
            t.button ? (a(), o("div", fl, [
              v(g, {
                text: t.button.text,
                href: t.button.href,
                target: t.button.target,
                skin: t.button.skin,
                classes: n.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : u("", !0),
            i.searchValue ? (a(), S(d, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : u("", !0),
            i.hasLangSwitch ? (a(), o("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: e[2] || (e[2] = (...w) => i.handleLanguageOver && i.handleLanguageOver(...w)),
              onMouseout: e[3] || (e[3] = (...w) => i.handleLanguageOut && i.handleLanguageOut(...w)),
              ref: "languageSwitch"
            }, [
              l("span", _l, y(t.lang), 1),
              l("span", pl, y(t.lang), 1),
              v(h, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              l("div", yl, [
                (a(!0), o(b, null, E(t.home.languages, (w, D) => (a(), o("a", {
                  class: _({ "header__language-link custom": !0, "d-none": D === i.lowerLang }),
                  onClick: (Z) => i.handleLanguageSwitch(D)
                }, y(D), 11, vl))), 256))
              ], 512)
            ], 544)) : u("", !0)
          ])
        ])
      ], 2),
      l("div", {
        class: "header__flyout",
        onMouseout: e[4] || (e[4] = (...w) => i.handleMouseOut && i.handleMouseOut(...w))
      }, [
        l("div", {
          class: _(i.containerClass)
        }, [
          l("div", bl, [
            l("div", xl, [
              (a(!0), o(b, null, E(n.activeNavigation, (w, D) => {
                var Z, ie, re, ne, ae;
                return a(), o("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  w.children ? (a(), o("div", Sl, [
                    i.showFlyoutBlock(w.children) ? (a(), o("figure", wl, [
                      l("figcaption", kl, y((Z = w.languages[i.lowerLang]) == null ? void 0 : Z.title), 1),
                      l("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (ie = w.languages[i.lowerLang]) == null ? void 0 : ie.description
                      }, null, 8, Cl),
                      i.hasContactLink(w) ? (a(), o("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (re = t.contact.languages[i.lowerLang]) == null ? void 0 : re.url
                      }, [
                        v(h, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        l("span", El, y((ne = t.contact.languages[i.lowerLang]) == null ? void 0 : ne.title), 1)
                      ], 8, Ll)) : u("", !0),
                      (ae = w.languages[i.lowerLang]) != null && ae.emergency ? (a(), o("div", Tl, [
                        v(g, M({ ref_for: !0 }, w.languages[i.lowerLang].emergency), null, 16)
                      ])) : u("", !0)
                    ])) : u("", !0),
                    (a(!0), o(b, null, E(w.children, (Q) => (a(), o(b, null, [
                      w.children && !Q.products ? (a(), S(m, {
                        key: 0,
                        list: Q,
                        lang: i.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (a(), o("div", Al, [
                        (a(!0), o(b, null, E(Q.children, (F) => {
                          var R, le, oe;
                          return a(), o("a", {
                            href: (R = F.languages[i.lowerLang]) == null ? void 0 : R.url,
                            target: F.target,
                            class: "header__product-list-item custom"
                          }, [
                            v(c, {
                              img: F.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", Ol, [
                              l("div", Il, y((le = F.languages[i.lowerLang]) == null ? void 0 : le.title), 1),
                              l("div", Nl, y((oe = F.languages[i.lowerLang]) == null ? void 0 : oe.subtitle), 1)
                            ])
                          ], 8, Dl);
                        }), 256))
                      ]))
                    ], 64))), 256))
                  ])) : u("", !0)
                ], 512);
              }), 256))
            ])
          ])
        ], 2)
      ], 32)
    ], 34)
  ], 64);
}
const Vl = /* @__PURE__ */ C(Wa, [["render", Pl]]), Ml = {
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
  }
}, Rl = { "clip-path": "url(#icon-world-mask)" }, Fl = ["stroke"], Bl = ["stroke"], zl = ["stroke"], Hl = ["stroke"], jl = { id: "icon-world-mask" }, ql = ["fill"];
function Ul(s, e, t, r, n, i) {
  return a(), o("svg", M(t.settings, {
    style: i.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    l("g", Rl, [
      l("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Fl),
      l("path", {
        d: "M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Bl),
      l("path", {
        d: "M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, zl),
      l("path", {
        d: "M0.418945 9.57001H19.5831",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Hl)
    ]),
    l("defs", null, [
      l("clipPath", jl, [
        l("rect", {
          width: "20",
          height: "20",
          fill: i.stroke
        }, null, 8, ql)
      ])
    ])
  ], 16);
}
const Gl = /* @__PURE__ */ C(Ml, [["render", Ul]]), Kl = {
  install(s) {
    s.component("Arrow", Ze), s.component("Badge", Te), s.component("BlogRecent", yt), s.component("Carousel", Lt), s.component("Contact", ui), s.component("Content", _i), s.component("Cta", G), s.component("CtaList", se), s.component("Faq", Ei), s.component("FeatureGrid", Zi), s.component("FeatureGridItem", Ve), s.component("FormCheckbox", Se), s.component("FormCheckboxes", Ie), s.component("FormFields", Ne), s.component("FormRadio", xe), s.component("FormRadios", Oe), s.component("FormSelect", De), s.component("Formular", Pe), s.component("Headline", B), s.component("HeadlineRow", ke), s.component("Hero", gr), s.component("Icon", J), s.component("IntroText", Sr), s.component("LinkList", Me), s.component("ListContainer", Fe), s.component("LogoList", Vr), s.component("Lottie", Ae), s.component("Menu", an), s.component("ProductBlocks", _n), s.component("ProductStage", Tn), s.component("Quote", On), s.component("SiteIcons", be), s.component("SlotItems", Re), s.component("SvgShape", we), s.component("TextImage", Be), s.component("TextImageList", Jn), s.component("VFooter", Ua), s.component("VHeader", Vl), s.component("VImg", K), s.component("World", Gl), s.component("Wrapper", fe);
  }
};
export {
  Ze as Arrow,
  Te as Badge,
  yt as BlogRecent,
  Lt as Carousel,
  ui as Contact,
  _i as Content,
  G as Cta,
  se as CtaList,
  Ei as Faq,
  Zi as FeatureGrid,
  Ve as FeatureGridItem,
  Se as FormCheckbox,
  Ie as FormCheckboxes,
  Ne as FormFields,
  xe as FormRadio,
  Oe as FormRadios,
  De as FormSelect,
  Pe as Formular,
  B as Headline,
  ke as HeadlineRow,
  gr as Hero,
  J as Icon,
  Sr as IntroText,
  Me as LinkList,
  Fe as ListContainer,
  Vr as LogoList,
  Ae as Lottie,
  an as Menu,
  _n as ProductBlocks,
  Tn as ProductStage,
  On as Quote,
  be as SiteIcons,
  Re as SlotItems,
  we as SvgShape,
  Be as TextImage,
  Jn as TextImageList,
  Ua as VFooter,
  Vl as VHeader,
  K as VImg,
  Gl as World,
  fe as Wrapper,
  Kl as default
};
