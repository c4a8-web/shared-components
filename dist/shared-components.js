var Ve = Object.defineProperty;
var Me = (i, e, t) => e in i ? Ve(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var S = (i, e, t) => Me(i, typeof e != "symbol" ? e + "" : e, t);
import { openBlock as a, createElementBlock as o, mergeProps as V, createElementVNode as l, normalizeClass as f, normalizeStyle as N, createBlock as b, resolveDynamicComponent as ue, toDisplayString as y, createVNode as w, createCommentVNode as u, resolveComponent as me, Fragment as x, renderList as A, createStaticVNode as fe, withCtx as Y, renderSlot as oe, createTextVNode as z } from "vue";
const L = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [r, n] of e)
    t[r] = n;
  return t;
}, Fe = {
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
function Re(i, e, t, r, n, s) {
  return a(), o("svg", V(t.settings, {
    style: s.style,
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
const Be = /* @__PURE__ */ L(Fe, [["render", Re]]), T = class T {
  static isInViewportPercent(e, t) {
    const r = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, s = window.innerWidth || document.documentElement.clientWidth, d = { x: r.x, y: r.y, width: r.width, height: r.height }, h = { x: 0, y: 0, width: s, height: n }, m = d.width * d.height, g = T.intersection(d, h);
    return t <= g / m * 100;
  }
  static getScrollTop(e) {
    if (!e) return;
    const t = document.querySelector("header"), r = t ? (t == null ? void 0 : t.offsetHeight) + 40 : 0;
    return e.getBoundingClientRect().top - r + window.scrollY;
  }
  static scrollIntoView(e, t) {
    e && window.scrollTo({
      top: T.getScrollTop(e),
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
    T.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(e) {
    return T.getParent(e, ".is-component");
  }
  static getParent(e, t) {
    var n;
    const r = e.parentNode;
    return r === null || r.tagName === "body" ? null : (n = r.parentNode) != null && n.querySelector(t) ? r : T.getParent(r, t);
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
    return e && t && (n = e.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), n = t + T.urlSeperator + n.replace(/-+$/, "") + "-" + r), n;
  }
  static toBase64(e) {
    return new Promise((t, r) => {
      const n = new FileReader();
      n.readAsDataURL(e), n.onload = () => {
        const s = n.result.split(",")[1];
        t(s);
      }, n.onerror = (s) => r(s);
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
  static animateValue(e, t, r, n, s = T.priceFormatter) {
    let d = null;
    const h = (m) => {
      d || (d = m);
      const g = Math.min((m - d) / n, 1), c = g * (r - t) + t, k = s.format(c);
      e.innerHTML = k, g < 1 && window.requestAnimationFrame(h);
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
    var s;
    const t = (s = e == null ? void 0 : e.$) == null ? void 0 : s.propsOptions[0], r = e == null ? void 0 : e.$props, n = { props: {} };
    return Object.keys(r).map((d) => {
      let h = r[d];
      h === "" && (h = t[d].default), n.props[d] = h;
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
    const e = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), t = T.randomRange(0, 8), r = T.randomRange(0, 16);
    return "u" + [e.substring(t, t + 8), e.substring(r, r + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(e) {
    let t = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const r = T.getBreakpoint();
    return t.indexOf(e) >= t.indexOf(r);
  }
  static isUpperBreakpoint() {
    return !T.isBelowBreakpoint("md");
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
    return window.STORYBOOK_ENV === "HTML";
  }
  static isTestingStorybook() {
    return typeof document > "u" ? !1 : document.location.pathname.indexOf(T.storybookPath) !== -1;
  }
  static getSiteAssetPath(e) {
    return T.isTestingStorybook() ? `${T.storybookPath}${e}` : e;
  }
  static getAssetPath(e) {
    return T.isStorybook() ? `../assets/${e}` : `/_includes/shared-components/assets/${e}`;
  }
  static findRecursive(e, t, r) {
    let n = !1, s, d, h;
    function m(g, c, k, C) {
      if (!n) {
        if (c(g, d)) {
          n = !0, s = C(g, k);
          return;
        }
        for (let E in g)
          typeof g[E] == "object" && (g === h && (d = E), m(g[E], c, g, C));
      }
    }
    return h = e, m(e, t, e, r), s;
  }
  static storageSave(e, t, r = !0) {
    localStorage.setItem(T.storagePrefix + e, r ? JSON.stringify(t) : t);
  }
  static storageGet(e) {
    return localStorage.getItem(T.storagePrefix + e);
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
    let s = r[1].trim().replace(` ${t}`, "");
    return s.includes(":") || (s += ":00"), s.length === 4 && (s = "0" + s), `${n} - ${s} ${t}`;
  }
  static convertToDate(e) {
    const t = e.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (t) {
      const n = parseInt(t[1], 10), s = parseInt(t[2], 10) - 1, d = parseInt(t[3], 10);
      return new Date(d, s, n);
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
        const n = e.childNodes.item(r), s = n.nodeName;
        if (typeof t[s] > "u")
          t[s] = this.XMLtoJSON(n);
        else {
          if (typeof t[s].push > "u") {
            const d = t[s];
            t[s] = [], t[s].push(d);
          }
          t[s].push(this.XMLtoJSON(n));
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
    const r = t || e, n = T.red(r), s = T.green(r), d = T.blue(r);
    return `${n}, ${s}, ${d}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
S(T, "defaultLang", "de"), S(T, "urlSeperator", "#"), S(T, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), S(T, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
S(T, "storybookPath", "/shared-components"), S(T, "decodeHTML", (e) => new DOMParser().parseFromString(e, "text/html").documentElement.textContent), S(T, "intersection", (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), n = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return r * n;
}), S(T, "debounce", function(e, t, r) {
  let n;
  return function() {
    const s = this, d = arguments;
    var h = function() {
      n = null, r || e.apply(s, d);
    }, m = r && !n;
    clearTimeout(n), n = setTimeout(h, t), m && e.apply(s, d);
  };
});
let p = T;
const He = {
  tagName: "icon",
  data() {
    return p.validateVueProps(this);
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
      var i;
      switch (this.props.size) {
        case "xxl":
          i = "200px";
          break;
        case "xl":
          i = "120px";
          break;
        case "medium":
          i = "28px";
          break;
        case "small":
          i = "18px";
          break;
        case "xs":
          i = "10px";
          break;
        default:
        case "large":
          i = "48px";
          break;
      }
      return i;
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
function ze(i, e, t, r, n, s) {
  return a(), o("span", {
    class: f(s.classList),
    style: N(s.parentStyle)
  }, [
    (a(), b(ue(t.icon), V(s.settings, {
      color: i.props.color,
      closed: t.closed,
      step: t.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const G = /* @__PURE__ */ L(He, [["render", ze]]), je = {
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
}, qe = { class: "badge__text" }, Ue = {
  key: 0,
  class: "badge__icon"
};
function Ge(i, e, t, r, n, s) {
  const d = G;
  return a(), o("div", {
    class: f(s.classList),
    style: N(s.style)
  }, [
    l("div", qe, y(t.text), 1),
    t.icon ? (a(), o("div", Ue, [
      w(d, {
        icon: t.icon,
        color: "var(--color-badge-icon)",
        size: "medium"
      }, null, 8, ["icon"])
    ])) : u("", !0)
  ], 6);
}
const Le = /* @__PURE__ */ L(je, [["render", Ge]]), _ = {
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
}, We = {
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
}, Je = {
  tagName: "carousel",
  components: {
    "carousel-item": We
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null
    };
  },
  computed: {
    jsonItems() {
      return p.getJSON(this.items);
    },
    classList() {
      return ["carousel vue-component", this.bgColor ? _.HAS_BACKGROUND : ""];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : "",
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : ""
      ];
    }
  },
  mounted() {
    const i = this.$refs["row-section"];
    this.resizeObserver = new ResizeObserver((e) => {
      for (let t of e)
        t.target === i && (this.clientWidth = t.contentRect.width);
    }), i && (this.resizeObserver.observe(i), window.addEventListener("resize", this.updateClientWidth));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      var i;
      this.clientWidth = (i = this.$refs["row-section"]) == null ? void 0 : i.clientWidth;
    }
  },
  props: {
    items: Array,
    bgColor: String
  }
}, Ke = { class: "carousel__container" }, Xe = { class: "carousel__row" }, Ze = {
  class: "carousel__row-section",
  ref: "row-section"
}, Ye = { class: "carousel__row-section" };
function Qe(i, e, t, r, n, s) {
  const d = me("carousel-item");
  return a(), o("div", {
    class: f(s.classList),
    ref: "carousel",
    style: N(s.style)
  }, [
    l("div", Ke, [
      l("div", Xe, [
        l("section", Ze, [
          (a(!0), o(x, null, A(s.jsonItems, (h, m) => (a(), b(d, {
            item: h,
            key: m
          }, null, 8, ["item"]))), 128))
        ], 512),
        l("section", Ye, [
          (a(!0), o(x, null, A(s.jsonItems, (h, m) => (a(), b(d, {
            item: h,
            key: m
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const $e = /* @__PURE__ */ L(Je, [["render", Qe]]), et = {
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
}, tt = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, st = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, it = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function rt(i, e, t, r, n, s) {
  return t.icon === "site/mail" && t.noSpan === !0 ? (a(), o("svg", tt, [
    l("title", null, y(t.icon), 1),
    e[0] || (e[0] = fe('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : t.icon == "site/mail" ? (a(), o("span", {
    key: 1,
    class: f(s.classList)
  }, [
    (a(), o("svg", st, [
      l("title", null, y(t.icon), 1),
      e[1] || (e[1] = fe('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : t.icon == "site/phone" ? (a(), o("span", {
    key: 2,
    class: f(s.classList)
  }, [
    (a(), o("svg", it, [
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
const ve = /* @__PURE__ */ L(et, [["render", rt]]), nt = {
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
    getSize(i) {
      return !i.indexOf || i.indexOf("px") === -1 && i.indexOf("%") === -1 ? `${i}px` : i;
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
function at(i, e, t, r, n, s) {
  return a(), o("div", {
    class: f(s.classList)
  }, null, 2);
}
const Ee = /* @__PURE__ */ L(nt, [["render", at]]), de = {
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
}, lt = {
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
}, he = {
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
}, ot = {
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
}, ge = "https://res.cloudinary.com/c4a8/image/upload/", ct = {
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
        return typeof this.lottie != "object" ? p.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? p.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return p.isTrue(this.cloudinary);
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
      var i;
      return ["img__picture-wrapper", (i = this.imgSrcSetValue) == null ? void 0 : i.ratioClasses];
    },
    imgSrcSetValue() {
      return ot[this.imgSrcSets];
    },
    imgSrcSetSources() {
      var i, e;
      return (e = (i = this.imgSrcSetValue) == null ? void 0 : i.srcSets) == null ? void 0 : e.filter((t) => t.media);
    },
    imgSrcSetImg() {
      var e;
      const i = (e = this.imgSrcSetValue) == null ? void 0 : e.srcSets;
      return i ? this.getCloudinaryBasePathLink(i[i.length - 1]) : null;
    }
  },
  watch: {
    animated(i, e) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = de.sizes);
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const i = this.getPreset(), e = this.getTransformationString(i);
      return { preset: i, transformationsString: e };
    },
    getPreset() {
      try {
        return this.preset ? he.presets && he.presets[this.preset] ? Object.assign(de, he.presets[this.preset]) : de : { ...de, ...he.presets.default };
      } catch (i) {
        console.error(i);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var i;
      return p.isTestingStorybook() ? this.img : ((i = this.img) == null ? void 0 : i.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(i) {
      return `${ge}${i ? i.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: i, transformationsString: e } = this.getSetup(), t = /w_\d+/.test(this.img), r = ge + e, n = `/${this.img}`;
      return t ? `${r}${n}` : `${r},w_${i.fallback_max_width}${n}`;
    },
    loadImage(i) {
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
          const { preset: s, transformationsString: d } = this.getSetup();
          this.sizes = s == null ? void 0 : s.sizes, n = {
            naturalHeight: t || (s == null ? void 0 : s.fallback_max_width),
            naturalWidth: r || (s == null ? void 0 : s.fallback_max_width)
          }, t && r && !this.isSvg() && this.buildSrcSet(s, d);
        }
        this.dimensions = n;
      }, e.src = i || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(i) {
      const e = [];
      for (const [r, n] of Object.entries(lt))
        i[r] && e.push(`${n}_${i[r]}`);
      return e.length > 0 ? e.join(",") : "";
    },
    buildSrcSet(i, e) {
      const t = [], r = i.steps, n = i.min_width, d = (i.max_width - n) / (r - 1), { naturalWidth: h } = this.dimensions;
      for (let m = 1; m <= r; m++) {
        const g = n + (m - 1) * d, c = g <= h, k = c ? g : h, E = `${this.hasPictureTag ? this.imgSrcSetImg : `${ge}${e},w_${k}/${this.img}`} ${k}w`;
        if (t.push(E), !c) break;
      }
      this.srcset = h < n ? "" : t.join(`, 
`);
    },
    isGif() {
      if (!this.img) return;
      const i = this.img.split(".")[1];
      return (i == null ? void 0 : i.toLowerCase()) === "gif";
    },
    isSvg() {
      var e;
      const i = p.getExtension(this.getCloudinaryBasePathLink());
      return (i == null ? void 0 : i.toLowerCase()) === "svg" || ((e = this.img) == null ? void 0 : e.indexOf(".svg")) !== -1;
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
}, dt = ["media", "srcset"], ht = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], ut = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function mt(i, e, t, r, n, s) {
  const d = Ee;
  return s.hasPictureTag ? (a(), o("div", {
    key: 0,
    class: f(s.pictureWrapperClassList)
  }, [
    l("picture", null, [
      (a(!0), o(x, null, A(s.imgSrcSetSources, (h) => (a(), o("source", {
        key: h.params,
        media: h.media,
        srcset: s.getCloudinaryBasePathLink(h)
      }, null, 8, dt))), 128)),
      l("img", {
        onLoad: e[0] || (e[0] = (h) => s.loadImage(s.imgSrcSetImg)),
        ref: "image",
        src: s.imgSrcSetImg,
        loading: s.loading,
        class: f(s.classList),
        alt: t.alt,
        width: n.dimensions.naturalWidth,
        height: n.dimensions.naturalHeight,
        srcset: n.srcset,
        sizes: n.sizes,
        crossorigin: s.crossOriginValue
      }, null, 42, ht)
    ])
  ], 2)) : s.isLottie ? (a(), b(d, V({
    key: 1,
    data: s.jsonLottieData,
    class: s.classListComponent
  }, s.jsonLottieSettingsData), null, 16, ["data", "class"])) : (a(), o("img", {
    key: 2,
    onLoad: e[1] || (e[1] = (h) => s.loadImage()),
    ref: "image",
    src: s.source,
    loading: s.loading,
    class: f(s.classList),
    alt: t.alt,
    width: n.dimensions.naturalWidth,
    height: n.dimensions.naturalHeight,
    srcset: n.srcset,
    sizes: n.sizes,
    crossorigin: s.crossOriginValue
  }, null, 42, ut));
}
const W = /* @__PURE__ */ L(ct, [["render", mt]]), gt = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return p.isTrue(this.external);
    },
    downloadValue() {
      return p.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        p.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        p.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && p.isTrue(this.active) === !0 ? _.ACTIVE : "",
        p.isTrue(this.loading) ? _.LOADING : "",
        p.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
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
      let i = this.$.type.tagName;
      return this.link ? i += " link" : i += " btn " + this.innerWidth, i;
    },
    iconName() {
      let i;
      return this.icon ? i = this.icon : this.externalValue || this.downloadValue ? i = "arrow-external" : this.link && (i = "arrow"), i;
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
}, ft = { class: "cta__text" };
function _t(i, e, t, r, n, s) {
  const d = G;
  return a(), b(ue(s.tag), {
    role: "button",
    class: f(s.classList),
    "data-text": t.text,
    href: t.href ? t.href : null,
    "data-analytics": t.analytics ? t.analytics : null,
    type: t.type ? t.type : null,
    target: s.targetValue ? s.targetValue : null,
    "data-alternative-href": t.alternativeHref ? t.alternativeHref : null,
    "data-trigger": t.trigger ? t.trigger : null
  }, {
    default: Y(() => [
      l("span", ft, y(t.text), 1),
      s.hasIcon ? (a(), b(d, {
        key: 0,
        icon: s.iconName,
        size: s.sizeValue
      }, null, 8, ["icon", "size"])) : u("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const J = /* @__PURE__ */ L(gt, [["render", _t]]), pt = {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return p.getJSON(this.list);
    }
  },
  methods: {
    text(i) {
      return i.text || i.ctaText;
    },
    href(i) {
      return i.href || i.ctaHref;
    },
    type(i) {
      return i.type || i.ctaType;
    }
  },
  props: {
    list: Array,
    classes: String
  }
}, yt = { class: "cta-list__item d-inline-block mr-3 mb-2" };
function vt(i, e, t, r, n, s) {
  const d = J;
  return a(), o("div", {
    class: f(s.classList)
  }, [
    (a(!0), o(x, null, A(s.ctaList, (h) => (a(), o("div", yt, [
      w(d, V({ ref_for: !0 }, h, {
        text: s.text(h),
        href: s.href(h),
        type: s.type(h)
      }), null, 16, ["text", "href", "type"])
    ]))), 256))
  ], 2);
}
const Q = /* @__PURE__ */ L(pt, [["render", vt]]), bt = {
  tagName: "form-select",
  computed: {
    required() {
      var i;
      return (i = this.field) != null && i.required ? "required" : null;
    }
  },
  props: {
    options: Array,
    field: Object,
    id: String
  }
}, xt = ["for"], wt = ["name", "required"], St = { value: "" }, kt = ["value"];
function Ct(i, e, t, r, n, s) {
  return a(), o(x, null, [
    l("label", {
      class: "input-label",
      for: t.id
    }, y(t.field.label), 9, xt),
    l("select", {
      class: "form-control custom-select text-muted",
      name: t.id,
      required: s.required
    }, [
      l("option", St, y(t.field.placeholder), 1),
      (a(!0), o(x, null, A(t.options, (d) => (a(), o("option", {
        value: d.value
      }, y(d.text), 9, kt))), 256))
    ], 8, wt)
  ], 64);
}
const Te = /* @__PURE__ */ L(bt, [["render", Ct]]), O = {
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
}, Lt = {
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
      const i = Array.from(this.files.files);
      return this.filesLength > this.maxFilesValue ? i.slice(0, this.maxFilesValue) : i;
    },
    classList() {
      return [
        "form-attachments",
        this.hasError === !0 ? "has-error" : "",
        this.isDragging ? _.DRAGGING : "",
        "vue-component"
      ];
    },
    interactableClassList() {
      return ["form-attachments__interactable", this.hasErrors ? _.HAS_ERROR : ""];
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
      const i = this.extensions.map((e) => p.capitalize(e));
      return i == null ? void 0 : i.join(", ");
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensions.map((i) => `.${i}`).join(",");
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
    var i, e;
    this.root = this.$refs.root, this.interactable = this.$refs.interactable, this.button = this.$refs.button, this.textElement = this.$refs.text, this.file = this.$refs.file, this.error = this.$refs.error, this.base64 = this.$refs.base64, this.bindEvents(), (e = (i = window.i18n) == null ? void 0 : i.loader) == null || e.then(() => {
      var t, r, n;
      this.wrongTypeText = (t = window.i18n) == null ? void 0 : t.translate("formAttachmentsWrongType"), this.maxFilesText = (r = window.i18n) == null ? void 0 : r.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (n = window.i18n) == null ? void 0 : n.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(O.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
      const i = p.getParent(this.root, "form");
      i && i.addEventListener("reset", this.reset.bind(this));
    },
    handleFormAttachmentError(i) {
      this.showError(this.maxSizeText);
    },
    handleDragStart(i) {
      i.preventDefault(), i.stopPropagation();
    },
    handleDragOver(i) {
      i.preventDefault(), i.stopPropagation(), window.clearTimeout(this.dropTimeout), this.isDragging = !0;
    },
    handleDrop(i) {
      var t;
      i.preventDefault(), i.stopPropagation();
      const e = (t = i == null ? void 0 : i.dataTransfer) == null ? void 0 : t.files;
      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = !1, i.type === "drop" && this.handleDroppedFiles(e);
      }, 50);
    },
    isAllowedFileExtension(i) {
      var n;
      if (!i) return;
      const e = (n = this.file.getAttribute("accept")) == null ? void 0 : n.toLowerCase(), t = (e == null ? void 0 : e.split(",")) || [], r = p.getExtension(i.name);
      return t.includes(`.${r}`);
    },
    isUnderMaxSize(i) {
      if (!(!i || !i.size))
        return i.size <= this.maxSize;
    },
    handleDroppedFiles(i) {
      const e = this.getErrors(i);
      if (e) return this.showError(e);
      this.appendDroppedFiles(i);
    },
    handleAddAttachment() {
      this.file.click();
    },
    restoreDataTransfer() {
      this.file.files = this.files.files;
    },
    showError(i) {
      this.restoreDataTransfer(), this.setErrorText(i), this.hasError = !0;
    },
    setErrorText(i) {
      this.error && (this.error.innerText = i);
    },
    reset() {
      this.file.files = null, this.files = new DataTransfer(), this.resetError();
    },
    resetError() {
      this.setErrorText(this.requiredMsg), this.hasError = !1;
    },
    appendDroppedFiles(i) {
      this.base64 && (this.isRequired && (this.file.required = !1), this.appendFiles(i));
    },
    areFilesAllowed(i) {
      return Array.from(i).every((e) => this.isAllowedFileExtension(e));
    },
    getErrors(i) {
      if (!this.areFilesAllowed(i)) return this.wrongTypeText;
      if (this.files.files.length + i.length > this.maxFilesValue) return this.maxFilesText;
      if (!Array.from(i).every((e) => this.isUnderMaxSize(e))) return this.maxSizeText;
    },
    appendFiles(i) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);
      Array.from(i).forEach((e) => {
        this.files.items.add(e);
      }), this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length, this.file.files = this.files.files, this.resetError();
    },
    handleChange(i) {
      var r;
      const e = (r = i == null ? void 0 : i.target) == null ? void 0 : r.files, t = this.getErrors(e);
      if (t) return this.showError(t);
      this.appendFiles(e);
    },
    handleClick(i) {
      this.files.files[i] && (this.files.items.remove(i), this.syncFiles());
    },
    toSize(i) {
      return p.toSize(i);
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
}, Et = {
  tagName: "form-radio",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var i;
      return (i = this.radio) != null && i.required ? "required" : null;
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
    changed(i) {
      this.$emit("action-changed", i.changeAction || null);
    }
  }
}, Tt = { class: "form__radio-control mb-1 vue-component" }, At = ["data-form-group", "required", "name", "id"], Dt = ["for"], Ot = ["name", "id", "placeholder", "data-form-group"], It = ["name", "id", "data-form-group", "required"], Nt = ["for", "innerHTML"];
function Pt(i, e, t, r, n, s) {
  var d, h, m;
  return a(), o("div", Tt, [
    (d = t.radio) != null && d.placeholder ? (a(), o(x, { key: 0 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        "data-form-group": t.group,
        required: s.required,
        name: s.otherId,
        id: s.otherId
      }, null, 8, At),
      l("label", {
        class: "form__radio-label",
        for: s.otherId
      }, null, 8, Dt),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: t.name,
        id: s.idValue,
        placeholder: (h = t.radio) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, Ot)
    ], 64)) : (a(), o(x, { key: 1 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        name: t.name,
        id: s.idValue,
        "data-form-group": t.group,
        required: s.required,
        onChange: e[0] || (e[0] = (g) => s.changed(t.radio))
      }, null, 40, It),
      l("label", {
        class: "form__radio-label",
        for: s.idValue,
        innerHTML: (m = t.radio) == null ? void 0 : m.label
      }, null, 8, Nt)
    ], 64))
  ]);
}
const be = /* @__PURE__ */ L(Et, [["render", Pt]]), Vt = {
  tagName: "form-radios",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var i;
      return (i = this.radio) != null && i.required ? "required" : null;
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
}, Mt = ["data-msg"], Ft = { class: "d-flex flex-wrap" };
function Rt(i, e, t, r, n, s) {
  var h, m;
  const d = be;
  return a(), o(x, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": s.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, Mt),
    l("div", Ft, [
      (a(!0), o(x, null, A((m = t.field) == null ? void 0 : m.radios, (g) => (a(), b(d, {
        class: "pr-10",
        radio: g,
        group: t.id,
        name: t.id,
        id: t.field.id + g.id,
        onActionChanged: e[0] || (e[0] = (c) => i.$emit("action-changed", c))
      }, null, 8, ["radio", "group", "name", "id"]))), 256))
    ])
  ], 64);
}
const Ae = /* @__PURE__ */ L(Vt, [["render", Rt]]), Bt = {
  tagName: "form-checkbox",
  computed: {
    otherId() {
      return `${this.idValue}_checkbox`;
    },
    required() {
      var i;
      return (i = this.checkbox) != null && i.required ? "required" : null;
    },
    idValue() {
      return this.id ? this.id : this.checkbox.id;
    }
  },
  methods: {
    handleChange(i) {
      const t = i.currentTarget.value;
      this.$emit(O.FORM_FIELD_UPDATED, { value: t, id: this.id });
    }
  },
  props: {
    checkbox: Object,
    group: String,
    id: String
  }
}, Ht = { class: "form__checkbox-control custom-control custom-checkbox mb-1 vue-component" }, zt = ["data-form-group", "required", "name", "id"], jt = ["for"], qt = ["name", "id", "placeholder", "data-form-group"], Ut = ["name", "id", "data-form-group", "required"], Gt = ["for", "innerHTML"];
function Wt(i, e, t, r, n, s) {
  var d, h, m;
  return a(), o("div", Ht, [
    (d = t.checkbox) != null && d.placeholder ? (a(), o(x, { key: 0 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        "data-form-group": t.group,
        required: s.required,
        name: s.otherId,
        id: s.otherId,
        onChange: e[0] || (e[0] = (...g) => s.handleChange && s.handleChange(...g))
      }, null, 40, zt),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: s.otherId
      }, null, 8, jt),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: s.idValue,
        id: s.idValue,
        placeholder: (h = t.checkbox) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, qt)
    ], 64)) : (a(), o(x, { key: 1 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        name: s.idValue,
        id: s.idValue,
        "data-form-group": t.group,
        required: s.required,
        onChange: e[1] || (e[1] = (...g) => s.handleChange && s.handleChange(...g))
      }, null, 40, Ut),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: s.idValue,
        innerHTML: (m = t.checkbox) == null ? void 0 : m.label
      }, null, 8, Gt)
    ], 64))
  ]);
}
const xe = /* @__PURE__ */ L(Bt, [["render", Wt]]), Jt = {
  tagName: "form-checkboxes",
  computed: {
    required() {
      var i;
      return (i = this.checkbox) != null && i.required ? "required" : null;
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
}, Kt = ["data-msg"];
function Xt(i, e, t, r, n, s) {
  var h, m;
  const d = xe;
  return a(), o(x, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": s.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, Kt),
    (a(!0), o(x, null, A((m = t.field) == null ? void 0 : m.checkboxes, (g) => (a(), b(d, {
      checkbox: g,
      group: s.groupId,
      id: t.field.id + g.id
    }, null, 8, ["checkbox", "group", "id"]))), 256))
  ], 64);
}
const De = /* @__PURE__ */ L(Jt, [["render", Xt]]), I = class I {
  constructor(e) {
    this.root = e, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${_.IS_STARTING}`).forEach((e) => {
      e.classList.remove(_.IS_STARTING);
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
    const t = I.getGroup(e.srcElement);
    if (t) {
      const r = parseInt(t.style.getPropertyValue(I.groupItemsLoadedProperty), 10) || 0;
      I.setGroupItemsLoaded(t, r + 1);
    }
    this.updateCurrentElement(e), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(e) {
    e.forEach((t) => {
      t.classList.add(_.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(I.endDataset, !0);
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
        r.type === "attributes" && r.attributeName.startsWith(I.inViewportDataset) && ((n = r.target) == null ? void 0 : n.getAttribute(I.inViewportDataset)) === "true" && this.startAnimation();
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
      g.forEach((c) => {
        c.isIntersecting ? c.target.setAttribute(this.inViewportDataset, !0) : c.target.classList.contains("utility-animation--enter-exit") && c.target.removeAttribute(this.inViewportDataset);
      });
    }, s = new IntersectionObserver(n, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), d = new IntersectionObserver(n, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), h = new IntersectionObserver(n, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (e ? [e] : this.instances).forEach((g) => {
      I.hasSmallOffset(g) ? h.observe(g.root) : I.hasPercentageOffset(g) ? d.observe(g.root) : s.observe(g.root);
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
S(I, "rootSelector", ".utility-animation"), S(I, "inViewportDataset", "data-utility-animation-in-viewport"), S(I, "endDataset", "data-utility-animation-end"), S(I, "instances", []), S(I, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let U = I;
const Zt = {
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
      var i, e;
      return (e = (i = this.field) == null ? void 0 : i.showIn) == null ? void 0 : e.map((t) => "show-in-" + t).join(" ");
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
    this.$refs.root && U.init([this.$refs.root]);
    const i = this.$parent;
    if (!i) return;
    const e = i.$el;
    e && e.addEventListener("reset", this.handleReset);
  },
  methods: {
    getRequiredMsg(i) {
      return i.requiredMsg ? i.requiredMsg : "";
    },
    handleChange(i) {
      const t = i.currentTarget.value;
      this.edited = !0, this.userValue = t, this.$emit(O.FORM_FIELD_UPDATED, { value: t, id: this.id });
    },
    handleChangeTextarea(i) {
      const t = i.currentTarget.value;
      this.$emit(O.FORM_FIELD_UPDATED, { value: t, id: this.id });
    },
    handleReset() {
      this.edited = !1, this.userValue = null;
    },
    handleFormFieldUpdate(i) {
      this.$emit(O.FORM_FIELD_UPDATED, i);
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
}, Yt = ["for"], Qt = ["id", "name", "placeholder", "required", "readonly", "data-msg"], $t = ["name", "value"], es = ["for"], ts = ["type", "id", "name", "data-msg", "value", "placeholder", "required", "readonly"], ss = ["id"];
function is(i, e, t, r, n, s) {
  var C, E, M, ee, te, v;
  const d = xe, h = De, m = be, g = Ae, c = Lt, k = Te;
  return t.field.id !== "_gotcha" ? (a(), o("div", {
    key: 0,
    class: f(s.classList),
    "data-utility-animation-step": "1",
    ref: "root"
  }, [
    t.field.type === "textarea" ? (a(), o(x, { key: 0 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, Yt),
      l("textarea", {
        class: "form-control form-textarea",
        onChange: e[0] || (e[0] = (...D) => s.handleChangeTextarea && s.handleChangeTextarea(...D)),
        onKeyup: e[1] || (e[1] = (...D) => s.handleChangeTextarea && s.handleChangeTextarea(...D)),
        id: t.id,
        name: t.id,
        rows: "4",
        placeholder: s.placeholder,
        required: s.required,
        readonly: s.readonly,
        "data-msg": s.getRequiredMsg(t.field)
      }, null, 40, Qt)
    ], 64)) : t.field.type === "checkbox" ? (a(), b(d, {
      key: 1,
      checkbox: t.field,
      id: t.id,
      onFormFieldUpdated: e[2] || (e[2] = (D) => s.handleFormFieldUpdate(D))
    }, null, 8, ["checkbox", "id"])) : t.field.type === "hidden" ? (a(), o("input", {
      key: 2,
      type: "hidden",
      name: t.id,
      value: s.value
    }, null, 8, $t)) : t.field.checkboxes ? (a(), b(h, {
      key: 3,
      field: t.field,
      id: t.id
    }, null, 8, ["field", "id"])) : t.field.type === "radio" ? (a(), b(m, {
      key: 4,
      radio: t.field,
      id: t.id
    }, null, 8, ["radio", "id"])) : t.field.radios ? (a(), b(g, {
      key: 5,
      field: t.field,
      id: t.id,
      onActionChanged: e[3] || (e[3] = (D) => i.$emit("action-changed", D))
    }, null, 8, ["field", "id"])) : t.field.type === "file" ? (a(), b(c, {
      key: 6,
      description: (C = t.field.formAttachments) == null ? void 0 : C.description,
      text: (E = t.field.formAttachments) == null ? void 0 : E.text,
      extensions: (M = t.field.formAttachments) == null ? void 0 : M.extensions,
      maxSize: (ee = t.field.formAttachments) == null ? void 0 : ee.maxSize,
      id: (te = t.field.formAttachments) == null ? void 0 : te.id,
      required: (v = t.field.formAttachments) == null ? void 0 : v.required,
      "required-msg": s.getRequiredMsg(t.field.formAttachments)
    }, null, 8, ["description", "text", "extensions", "maxSize", "id", "required", "required-msg"])) : t.field.type === "select" ? (a(), b(k, {
      key: 7,
      field: t.field,
      options: t.options,
      id: t.id
    }, null, 8, ["field", "options", "id"])) : t.field.type ? (a(), o(x, { key: 8 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, es),
      l("input", {
        ref: "input",
        onChange: e[4] || (e[4] = (...D) => s.handleChange && s.handleChange(...D)),
        onKeyup: e[5] || (e[5] = (...D) => s.handleChange && s.handleChange(...D)),
        type: t.field.type,
        id: t.id,
        name: t.id,
        class: "form-control",
        "data-msg": s.getRequiredMsg(t.field),
        value: s.value,
        placeholder: s.placeholder,
        required: s.required,
        readonly: s.readonly
      }, null, 40, ts)
    ], 64)) : u("", !0),
    t.hasError ? (a(), o("div", {
      key: 9,
      id: s.errorId,
      class: "invalid-feedback"
    }, y(s.getRequiredMsg(t.field)), 9, ss)) : u("", !0)
  ], 2)) : u("", !0);
}
const Oe = /* @__PURE__ */ L(Zt, [["render", is]]), rs = {
  tagName: "headline",
  computed: {
    tag() {
      return this.level ? this.level : "h2";
    },
    classList() {
      return `${this.classes && p.hasFontSizeClass(this.classes) ? this.classes : `${this.tag}-font-size ${this.classes ? this.classes : ""}`} headline vue-component`;
    },
    dataUtilityAnimationStep() {
      return this.utilityAnimationStep ? this.utilityAnimationStep : null;
    }
  },
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number }
};
function ns(i, e, t, r, n, s) {
  return t.text ? (a(), b(ue(s.tag), {
    key: 0,
    class: f(s.classList),
    innerHTML: t.text,
    "data-utility-animation-step": s.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (a(), b(ue(s.tag), {
    key: 1,
    class: f(s.classList),
    "data-utility-animation-step": s.dataUtilityAnimationStep
  }, {
    default: Y(() => [
      oe(i.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const K = /* @__PURE__ */ L(rs, [["render", ns]]), R = class R {
  constructor(e, t) {
    var r;
    e && (this.root = e, this.options = t, (r = this.options) != null && r.noInit || this.root.classList.add(_.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(e) {
    window[R.namespacePrefix] || (window[R.namespacePrefix] = {});
    const t = this.getInstancesKey();
    window[R.namespacePrefix][t] || (window[R.namespacePrefix][t] = []), window[R.namespacePrefix][t].push(e);
  }
  static getInstance(e) {
    const r = window[R.namespacePrefix][this.getInstancesKey()].filter((n) => (n == null ? void 0 : n.root) === e);
    return r ? r[0] : null;
  }
  static initElement(e, t) {
    const r = new this(e, t);
    return this.instances.push(r), this.expose(r), r;
  }
  static init(e) {
    this.instances = [];
    const t = e || document, r = `${this.rootSelector}:not(.${_.INITIALIZED})`;
    [].forEach.call(
      t.querySelectorAll(r),
      (n) => {
        this.initElement(n);
      }
    );
  }
};
S(R, "rootSelector", ""), S(R, "instances", []), S(R, "namespacePrefix", "baseComponents");
let _e = R;
class ce {
}
S(ce, "rootSelector", ".form-attachments"), S(ce, "base64Selector", ".form-attachments__base64");
const B = class B extends _e {
  constructor(e, t) {
    var r;
    super(e, t), e && (this.root = e, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = e.querySelector(this.formSelector), this.subject = e.querySelector(this.subjectSelector), this.company = e.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = t, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (r = this.options) != null && r.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(e, t) {
      return this.optional(t) || B.regularExpression.test(e);
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
    B.reset(this.form);
  }
  static reset(e) {
    !e || !e.reset || (e.reset(), [].forEach.call(e.querySelectorAll(`.${_.VALID}`), (t) => {
      t.classList.remove(_.VALID);
    }), [].forEach.call(e.querySelectorAll(`.${_.ERROR}`), (t) => {
      t.classList.remove(_.ERROR);
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
    return p.uuid() + this.delimiter + e;
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
    const e = B.getFormData(this.form);
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
      new CustomEvent(O.FORM_AJAX_SUBMIT, {
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
    for (const [n, s] of Object.entries(this.groups))
      this.isValidGroup(s) || (t = !1, this.addGroupError(s, r), r = !1);
    return t;
  }
  validateAttachments() {
    let e = !0;
    return [].forEach.call(this.form.querySelectorAll(ce.base64Selector), (t) => {
      t.value || (e = !1);
    }), e || (e = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (t) => {
      t.files.length === 0 && (e = !1, this.addAttachmentError(t));
    }), e);
  }
  addAttachmentError(e) {
    const t = p.getParent(e, ce.rootSelector);
    t !== null && t.classList.add(_.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(e, t) {
    for (let r = 0; r < e.length; r++) {
      const n = this.getGroupParent(e[r]);
      e[r].classList.add(_.ERROR), n && (t && p.scrollIntoView(n), this.addErrorMessage(n));
    }
  }
  addErrorMessage(e) {
    if (e && !e.classList.contains(_.ERROR)) {
      e.classList.add(_.ERROR);
      const t = document.createElement("div");
      t.innerHTML = e.dataset.msg, t.classList.add("invalid-feedback"), e.parentNode.insertBefore(t, e.nextSibling);
    }
  }
  delErrorMessage(e) {
    e && e.classList.contains(_.ERROR) && (e.classList.remove(_.ERROR), e.nextSibling.remove());
  }
  delGroupError(e) {
    for (let t = 0; t < e.length; t++) {
      const r = this.getGroupParent(e[t]);
      e[t].classList.remove(_.ERROR), r && this.delErrorMessage(r);
    }
  }
  isValidGroup(e) {
    const t = e.length;
    let r = !1;
    for (let n = 0; n < t; n++) {
      const s = e[n];
      if (s.type === "checkbox" && s.checked)
        r = !0;
      else if (s.type === "radio" && s.checked)
        r = !0;
      else {
        const d = s.closest('input[type="text"]');
        d && !r && d.value.length >= this.minLengthOther && (r = !0);
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
      const n = this.groupFilter(r, "checkbox"), s = this.groupFilter(r, "radio");
      t.getAttribute("type") === "checkbox" ? this.handleGroupError(t, n) : t.getAttribute("type") === "radio" ? this.handleGroupError(t, s) : this.isValidGroup(r) ? this.delGroupError(r) : this.addGroupError(r);
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
    e == null || e.classList.add(_.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(B.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(e) {
    var t;
    return ((t = e == null ? void 0 : e.parentNode) == null ? void 0 : t.classList.contains("form-field--show-in")) && e.offsetParent === null;
  }
  static getFormData(e) {
    if (e == null) return [];
    const t = e.querySelectorAll('input[type="text"], input[type="email"], textarea'), r = [];
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      if (this.isOptionalInputInvisible(s)) continue;
      let d;
      (s.type === "text" || s.type === "email" || s.tagName === "TEXTAREA") && (d = s.value), r.push({
        input: s,
        value: d
      });
    }
    return r;
  }
};
S(B, "rootSelector", ".form"), S(B, "instances", []), S(B, "delimiter", "-formHelper-"), S(B, "noCustomSubmitClass", "form--no-custom-submit"), S(B, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let H = B;
const as = {
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
      var i;
      return [
        "form",
        `${p.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${p.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${p.isTrue(this.container) === !0 ? "container" : ""}`,
        `${p.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((i = this.form) == null ? void 0 : i.noCustomSubmit) === !0 ? H.noCustomSubmitClass : "",
        "vue-component"
      ];
    },
    novalidate() {
      return this.novalidateValue;
    },
    hasAnimationValue() {
      return p.isTrue(this.hasAnimation);
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
      return this.form.ctaPosition ? this.form.ctaPosition : p.isTrue(this.uncentered) ? "" : "justify-content-end";
    },
    method() {
      return this.form.method ? this.form.method : "post";
    },
    preparedBlocks() {
      const i = [];
      let e = 0, t = [];
      return this.form.fields.forEach((r) => {
        if (r.rowStart || r.rowEnd)
          r.rowStart ? (i[e] = t, t.push(r), r.rowEnd && (t = [], e++)) : r.rowEnd && (t.push(r), t = [], e++);
        else {
          if (t.push(r), i[e]) return;
          i[e] = t, t = [], e++;
        }
      }), i;
    }
  },
  created() {
    this.originalAction = this.formAction = this.form.action;
  },
  mounted() {
    this.formInstance = new H(this.$refs.root), this.novalidateValue = "novalidate", this.$refs.headline && U.init([this.$refs.headline]);
  },
  methods: {
    hasError(i) {
      return this.errors[i.id];
    },
    getOptions(i) {
      return typeof i.options == "string" ? this.options[i.options] : i.options;
    },
    getBlockClassList(i) {
      return ["row mx-n3", `${i != null && i.rowClass ? i.rowClass : ""}`];
    },
    getFieldClassList(i) {
      return ["px-3", `${i.col ? "col-md-" + i.col : "col-md-12"}`];
    },
    getId(i) {
      const e = (i == null ? void 0 : i.radios) || (i == null ? void 0 : i.checkboxes), t = e ? e[0].id : i == null ? void 0 : i.id;
      return p.isTrue(this.hasUuid) ? H.getId(t) : t;
    },
    updateAction(i) {
      i ? this.formAction = i : this.formAction = this.originalAction;
    },
    handleSubmit(i) {
      if (!this.validate()) return i.preventDefault();
    },
    handleFormFieldUpdate(i) {
      if (!i.id) return;
      const e = document.getElementById(i.id);
      e && this.validateField(e);
    },
    validateField(i) {
      const e = i.value, t = i.getAttribute("type"), r = i.hasAttribute("required");
      if (this.removeFieldError(i), t === "checkbox") {
        const n = i.checked;
        if (r && !n)
          return this.addFieldError(i), !1;
      } else {
        if (r && !e)
          return this.addFieldError(i), !1;
        if (t === "email" && !((s) => /\S+@\S+\.\S+/.test(s))(e))
          return this.addFieldError(i), !1;
      }
      return this.addFieldValid(i), !0;
    },
    addFieldValid(i) {
      i.classList.add(_.VALID);
    },
    removeFieldError(i) {
      delete this.errors[i.id], i.classList.remove(_.ERROR);
    },
    addFieldError(i) {
      this.errors[i.id] = !0, i.classList.remove(_.VALID), i.classList.add(_.ERROR);
    },
    validate() {
      const i = this.$refs.root.querySelectorAll(
        `.form-field:not(.${_.HIDDEN}) .form-control[required],
        .form-field:not(.${_.HIDDEN}) .form__checkbox[required]`
      );
      let e = !0;
      for (const t of i)
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
}, ls = { class: "row" }, os = { class: "col-sm-12" }, cs = ["innerHTML"], ds = ["method", "action", "novalidate"];
function hs(i, e, t, r, n, s) {
  const d = K, h = Oe, m = J;
  return a(), o("div", {
    class: f(s.classList),
    ref: "root"
  }, [
    l("div", {
      class: f(s.rowClassList)
    }, [
      l("div", {
        class: f(s.wrapperClassList)
      }, [
        t.form.headline ? (a(), o("div", {
          key: 0,
          class: f(s.headlineClassList),
          "data-utility-animation-step": "1",
          ref: "headline"
        }, [
          l("div", ls, [
            l("div", os, [
              w(d, {
                text: t.form.headline,
                level: t.form.level,
                id: t.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              l("p", {
                class: f(s.sublineClassList),
                innerHTML: t.form.subline
              }, null, 10, cs)
            ])
          ])
        ], 2)) : u("", !0),
        l("form", {
          class: "form__form js-validate mt-6",
          method: s.method,
          action: n.formAction,
          novalidate: s.novalidate,
          onSubmit: e[1] || (e[1] = (...g) => s.handleSubmit && s.handleSubmit(...g))
        }, [
          (a(!0), o(x, null, A(s.preparedBlocks, (g) => (a(), o(x, null, [
            g.length > 0 ? (a(), o("div", {
              key: 0,
              class: f(s.getBlockClassList(g[0]))
            }, [
              (a(!0), o(x, null, A(g, (c) => (a(), o("div", {
                class: f(s.getFieldClassList(c))
              }, [
                w(h, {
                  field: c,
                  options: s.getOptions(c),
                  "replace-value": t.replaceValue,
                  id: s.getId(c),
                  "has-animation": s.hasAnimationValue,
                  onActionChanged: s.updateAction,
                  "has-error": s.hasError(c),
                  onFormFieldUpdated: e[0] || (e[0] = (k) => s.handleFormFieldUpdate(k))
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged", "has-error"])
              ], 2))), 256))
            ], 2)) : u("", !0)
          ], 64))), 256)),
          l("div", {
            class: f(s.formClassList)
          }, [
            w(m, {
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
        ], 40, ds)
      ], 2)
    ], 2)
  ], 2);
}
const Ie = /* @__PURE__ */ L(as, [["render", hs]]), us = {
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
}, ms = ["viewBox"], gs = ["fill", "points"];
function fs(i, e, t, r, n, s) {
  return a(), o("figure", {
    class: f("svgshape " + s.svgShapeClasses),
    style: N("pointer-events: all;" + s.translateStyle)
  }, [
    (a(), o("svg", {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 " + s.svgShapeHeight + " " + s.svgShapeObliquity
    }, [
      l("polygon", {
        fill: s.svgShapeColor,
        points: s.points
      }, null, 8, gs)
    ], 8, ms))
  ], 6);
}
const we = /* @__PURE__ */ L(us, [["render", fs]]), _s = {
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
        this.collapsed ? _.COLLAPSED : ""
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
      var i, e, t, r;
      return {
        "--color-contact-background": this.bgColor || ((i = this.contact) == null ? void 0 : i.bgColor),
        "--contact-copy-color": this.color || ((e = this.contact) == null ? void 0 : e.color),
        "--color-contact-box-background": this.boxBgColor || ((t = this.contact) == null ? void 0 : t.boxBgColor),
        "--contact-box-copy-color": this.boxColor || ((r = this.contact) == null ? void 0 : r.boxColor)
      };
    }
  }
}, ps = { class: "contact__subline font-weight-bold font-size-2" }, ys = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, vs = {
  key: 0,
  class: "contact__person-quote"
}, bs = { class: "contact__icon" }, xs = { class: "contact__image-quote" }, ws = { class: "contact__image-spacer" }, Ss = { class: "contact__quote font-size-3 middle font-weight-light" }, ks = { class: "d-flex flex-column" }, Cs = { class: "font-weight-light" }, Ls = { class: "contact__image" }, Es = { class: "contact__name font-size-4 my-6 mx-5" }, Ts = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, As = ["href"], Ds = { class: "streamline-sm mr-4" }, Os = { class: "contact__detail-text" }, Is = {
  key: 0,
  class: "contact__notes"
}, Ns = { class: "contact__notes-spacing streamline-sm mr-4" }, Ps = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, Vs = ["href"], Ms = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, Fs = ["href"], Rs = {
  key: 0,
  class: "contact__detail-quote"
}, Bs = ["href"], Hs = { class: "streamline-sm mr-4" }, zs = {
  key: 0,
  class: "contact__notes"
}, js = { class: "contact__notes-spacing streamline-sm mr-4" };
function qs(i, e, t, r, n, s) {
  const d = we, h = K, m = Ie, g = Q, c = G, k = W, C = ve;
  return a(), o(x, null, [
    t.svgShape ? (a(), b(d, {
      key: 0,
      align: t.svgShape.align,
      peak: t.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : u("", !0),
    t.contact ? (a(), o("div", {
      key: 1,
      class: f(s.classList),
      style: N(s.styleObject)
    }, [
      l("div", {
        class: f(s.contactContainerClass)
      }, [
        l("div", {
          class: f(s.contactRowClass)
        }, [
          t.collapsed ? u("", !0) : (a(), o("div", {
            key: 0,
            class: f(["contact__form", s.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            w(h, {
              text: t.contact.headline,
              classes: t.contact.headlineClasses,
              level: t.level
            }, null, 8, ["text", "classes", "level"]),
            l("span", ps, y(t.contact.subline), 1),
            t.contact.form ? (a(), b(m, {
              key: 0,
              form: t.contact.form,
              ajax: t.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : u("", !0),
            t.contact.buttons ? (a(), o("div", ys, [
              w(g, {
                list: t.contact.buttons
              }, null, 8, ["list"])
            ])) : u("", !0)
          ], 2)),
          l("div", {
            class: f(["contact__box", s.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            l("div", {
              class: f(["contact__person", s.contactLight])
            }, [
              t.quote ? (a(), o("div", vs, [
                l("div", bs, [
                  w(c, { icon: "quote" })
                ]),
                l("div", xs, [
                  l("div", ws, [
                    w(k, {
                      img: t.contact.person.image,
                      cloudinary: t.contact.person.cloudinary,
                      alt: t.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                l("div", Ss, y(t.contact.person.quote), 1),
                l("div", ks, [
                  l("span", null, y(t.contact.person.quotee), 1),
                  l("span", Cs, y(t.contact.person.quoteeTitle), 1)
                ])
              ])) : (a(), o(x, { key: 1 }, [
                l("div", Ls, [
                  w(k, {
                    img: t.contact.person.image,
                    cloudinary: t.contact.person.cloudinary,
                    alt: t.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                l("div", Es, y(t.contact.person.name), 1),
                l("div", Ts, [
                  (a(!0), o(x, null, A(t.contact.person.details, (E, M) => (a(), o("div", {
                    key: M,
                    class: f(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !M === t.contact.person.details.length - 1 }])
                  }, [
                    l("a", {
                      href: E.href,
                      class: "d-flex custom"
                    }, [
                      l("span", Ds, [
                        E.icon === "site/mail" ? (a(), b(C, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), b(C, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      l("span", Os, y(E.text), 1)
                    ], 8, As),
                    E.notes ? (a(), o("div", Is, [
                      l("span", Ns, [
                        E.icon === "site/mail" ? (a(), b(C, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), b(C, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      z(" " + y(E.notes), 1)
                    ])) : u("", !0)
                  ], 2))), 128)),
                  t.contact.person.number ? (a(), o("div", Ps, [
                    l("a", {
                      href: "tel:" + t.contact.person.number,
                      class: "custom"
                    }, [
                      w(C, { icon: "site/phone" }),
                      z(" " + y(t.contact.person.number), 1)
                    ], 8, Vs)
                  ])) : u("", !0),
                  t.contact.person.mail ? (a(), o("div", Ms, [
                    l("a", {
                      href: "mailto:" + t.contact.person.mail,
                      class: "custom"
                    }, [
                      w(C, { icon: "site/mail" }),
                      z(" " + y(t.contact.person.mail), 1)
                    ], 8, Fs)
                  ])) : u("", !0)
                ])
              ], 64))
            ], 2),
            t.quote ? (a(), o("div", Rs, [
              w(h, {
                text: t.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (a(!0), o(x, null, A(t.contact.person.details, (E, M) => (a(), o("div", {
                key: M,
                class: f(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !M === t.contact.person.details.length - 1 }])
              }, [
                l("a", {
                  href: E.href,
                  class: "custom"
                }, [
                  l("span", Hs, [
                    E.icon === "site/mail" ? (a(), b(C, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), b(C, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  z(" " + y(E.text), 1)
                ], 8, Bs),
                E.notes ? (a(), o("div", zs, [
                  l("span", js, [
                    E.icon === "site/mail" ? (a(), b(C, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), b(C, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  z(" " + y(E.notes), 1)
                ])) : u("", !0)
              ], 2))), 128))
            ])) : u("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)) : u("", !0)
  ], 64);
}
const Us = /* @__PURE__ */ L(_s, [["render", qs]]), Gs = {
  tagName: "content",
  props: {}
}, Ws = {
  class: "page-content",
  "aria-label": "Content"
};
function Js(i, e, t, r, n, s) {
  return a(), o(x, null, [
    l("main", Ws, [
      oe(i.$slots, "default")
    ]),
    oe(i.$slots, "below")
  ], 64);
}
const Ks = /* @__PURE__ */ L(Gs, [["render", Js]]), Xs = {
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
}, Zs = { class: "row" };
function Ys(i, e, t, r, n, s) {
  const d = K;
  return a(), o("div", {
    class: f(s.classList)
  }, [
    l("div", Zs, [
      l("div", {
        class: f(["col-sm-12", s.animationStepClass, s.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        w(d, {
          level: t.level,
          text: t.text,
          classes: t.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const Ne = /* @__PURE__ */ L(Xs, [["render", Ys]]), Qs = {
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
function $s(i, e, t, r, n, s) {
  return t.hideContainer ? oe(i.$slots, "default", { key: 1 }) : (a(), o("div", {
    key: 0,
    class: f(s.classList)
  }, [
    oe(i.$slots, "default")
  ], 2));
}
const Pe = /* @__PURE__ */ L(Qs, [["render", $s]]), ei = {
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
      return p.getJSON(this.animation);
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
      return p.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    }
  },
  methods: {
    handleTextAnimationState(i) {
      this.textAnimationStep = i == null ? void 0 : i.step, this.isSecondLast = i == null ? void 0 : i.isSecondLast;
    },
    handleTextAnimationEnded(i) {
      this.isEnded = i;
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
}, ti = {
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
        `${this.show ? _.SHOW : ""}`,
        `${this.end ? _.END : ""}`,
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
      return p.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = !1;
      const i = this.$refs.animation;
      if (!i) return;
      const e = i.querySelector(".letter-switcher__letter"), t = this.isLower ? e.offsetHeight * 2 : e.offsetHeight;
      i.style.height = t + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (t, r) => {
          const n = r * 0.3, s = 0.07 * t.children.length;
          t.style.animation = `letter-switch ${s}s ${n}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const i = this.$refs["end-text"], e = this.$refs.end;
      if (!i || !e) return this.emitEnded();
      i.style.width = "0px", e.classList.remove(_.COLLAPSED), this.emitEnded();
    },
    switchOverline(i) {
      const e = this.$refs.overline;
      e && (e.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, e.style.opacity = 1, i();
      }), e.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(O.ENDED);
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
};
class pe {
  constructor(e) {
    this.root = e, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(O.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(O.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
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
    return this.root.classList.contains(_.STICKY);
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
      let s = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? n = r / s : n = (r - this.calculatedOffsetTop) / s;
    } else
      n = this.maxPercentage;
    return parseFloat(n.toFixed(2));
  }
  isOutOfViewport(e) {
    return e >= this.maxPercentage || e < 0;
  }
  setStickyPosition() {
    const e = this.getHeaderHeight(), t = window.scrollY, r = this.root.offsetHeight - window.innerHeight, n = r > 0 ? this.offsetBottom : this.offsetBottom - e;
    let s = r > 0 ? -r : 0;
    s = s - this.marginTop;
    const d = this.getPercentage(t, s), h = this.isOutOfViewport(d), m = t > n - window.innerHeight;
    !h && m ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = s + "px", this.root.classList.remove(_.OFF_SCREEN), this.root.classList.add(_.STICKY), this.updateClipPath(d)) : d === 0 ? (this.isUpdating = !1, this.root.classList.remove(_.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(_.STICKY), this.root.classList.add(_.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const e = this.root.parentNode;
    this.spacer = document.createElement("div"), e && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), e.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(_.HAS_BACKGROUND) || p.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const e = this.spacer.nextSibling, t = "--color-sticky-scroller";
    if (!e) return;
    const r = p.getElementBgColor(e) || p.getElementBgColor(e.firstChild);
    this.spacer.style.setProperty(t, r), this.spacer.classList.add(_.HAS_BACKGROUND);
  }
  setDimensions() {
    const e = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > e ? e : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(_.STICKY);
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
S(pe, "rootSelector", ".is-sticky-scroller"), S(pe, "instances", []);
const si = {
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
}, ii = {
  tagName: "hero",
  components: {
    "hero-pattern": si
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
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${p.hexToRgb(this.bgColor)}` : "",
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : "",
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : ""
      ];
    },
    setIntroStyle() {
      if (!this.isCentered) return;
      const i = this.$refs.intro;
      i && (this.introHeight = i.offsetHeight, i.style.height = "0");
    },
    handleLetterSwitcherEnded() {
      const i = this.$refs.intro;
      i && (i.style.height = `${this.introHeight}px`, i.style.opacity = 1);
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
        this.hasStickyScroller ? pe.getRootClass() : ""
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
      const i = this.shapeFullscreen ? "100%" : "auto";
      return {
        ...this.shape.lottieSettings,
        width: "auto",
        height: i
      };
    },
    lottieFileData() {
      return this.shape ? this.shape.lottie ? this.shape.lottie : this.lottieData ? p.getJSON(this.lottieData) : null : null;
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
      return p.getJSON(this.hero);
    }
  },
  props: {
    hero: Object,
    lottieData: String
  }
}, ri = { class: "hero__container container" }, ni = {
  key: 0,
  class: "hero__back-row row"
}, ai = { class: "hero__back-col col" }, li = { class: "hero__back back" }, oi = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, ci = { class: "hero__intro-col col" }, di = {
  key: 0,
  class: "hero__overline"
}, hi = {
  key: 2,
  class: "hero__content-shape"
}, ui = ["innerHTML"], mi = {
  key: 5,
  class: "hero__badges"
}, gi = { class: "hero__badge-container" }, fi = { class: "hero__background-shape" };
function _i(i, e, t, r, n, s) {
  const d = me("hero-pattern"), h = W, m = G, g = ti, c = K, k = Q, C = ei, E = Pe;
  return a(), o("div", {
    class: f(s.classList),
    style: N(n.style)
  }, [
    s.pattern ? (a(), b(d, {
      key: 0,
      class: "hero__pattern"
    })) : u("", !0),
    s.img ? (a(), b(h, {
      key: 1,
      class: "hero__background-img",
      cloudinary: s.background.cloudinary,
      img: s.img
    }, {
      default: Y(() => e[0] || (e[0] = [
        z(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : u("", !0),
    l("div", ri, [
      l("main", {
        class: f(s.contentClassList)
      }, [
        s.hasBack ? (a(), o("div", ni, [
          l("div", ai, [
            l("div", li, [
              w(m, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : u("", !0),
        s.letterSwitcher ? (a(), b(g, V({ key: 1 }, s.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: s.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : u("", !0),
        s.overline || s.headlineText || s.subline ? (a(), o("div", oi, [
          l("div", ci, [
            s.overline ? (a(), o("span", di, y(s.overline), 1)) : u("", !0),
            s.headlineText ? (a(), b(c, {
              key: 1,
              class: f(s.headlineClassList),
              level: s.level,
              innerHTML: s.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : u("", !0),
            s.shapeInContent ? (a(), o("div", hi, [
              s.showShape ? (a(), b(h, {
                key: 0,
                cloudinary: s.shape.cloudinary,
                img: s.shape.img,
                alt: s.shape.alt,
                lottie: s.lottieFileData,
                "lottie-settings": s.lottieSettings,
                "img-src-sets": s.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : u("", !0)
            ])) : u("", !0),
            s.subline ? (a(), o("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: s.subline
            }, null, 8, ui)) : u("", !0),
            s.ctaList ? (a(), b(k, {
              key: 4,
              classes: "hero__cta-list",
              list: s.ctaList
            }, null, 8, ["list"])) : u("", !0),
            s.badges ? (a(), o("div", mi, [
              (a(!0), o(x, null, A(s.badges, (M) => (a(), o("div", gi, [
                w(h, V({
                  cloudinary: !0,
                  ref_for: !0
                }, M, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : u("", !0)
          ])
        ], 512)) : u("", !0),
        s.animation ? (a(), b(C, {
          key: 3,
          animation: s.animation,
          cta: s.cta,
          icon: s.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : u("", !0)
      ], 2)
    ]),
    s.shape ? (a(), b(E, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !s.showShapeContainer
    }, {
      default: Y(() => [
        w(E, {
          classes: "hero__background-shape-content",
          hideContainer: !s.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: Y(() => [
            l("div", fi, [
              s.showShape ? (a(), b(h, {
                key: 0,
                cloudinary: s.shape.cloudinary,
                img: s.shape.img,
                alt: s.shape.alt,
                lottie: s.lottieFileData,
                "lottie-settings": s.lottieSettings,
                "img-src-sets": s.imgSrcSets
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
const pi = /* @__PURE__ */ L(ii, [["render", _i]]), yi = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && U.init([this.$refs.root]);
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
}, vi = { class: "container space-lg-2" }, bi = {
  key: 0,
  class: "row mb-9 mt-9"
}, xi = { class: "row" }, wi = { class: "col" }, Si = ["innerHTML"];
function ki(i, e, t, r, n, s) {
  const d = K;
  return a(), o("figure", {
    class: f(s.classList),
    ref: "root"
  }, [
    l("div", vi, [
      t.headline ? (a(), o("div", bi, [
        l("div", {
          class: f(["col", t.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          w(d, { text: t.headline }, null, 8, ["text"])
        ], 2)
      ])) : u("", !0),
      l("div", xi, [
        l("div", wi, [
          l("p", {
            class: f(["intro-text__copy fade-in-bottom", t.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: t.copy
          }, null, 10, Si)
        ])
      ])
    ])
  ], 2);
}
const Ci = /* @__PURE__ */ L(yi, [["render", ki]]), Li = {
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
    animateLines(i, e) {
      const t = [];
      this.$refs.svg.querySelectorAll("animate").forEach((n) => {
        (!i && !n.classList.contains("closed") || i && n.classList.contains("closed")) && t.push(n);
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
}, Ei = ["x1", "x2", "y1", "y2", "stroke-width"], Ti = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ai = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Di = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Oi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ii = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ni = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Pi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Vi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Mi = ["x1", "x2", "y1", "y2", "stroke-width"], Fi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ri = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Bi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Hi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], zi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], ji = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], qi = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Ui = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Gi = ["x1", "x2", "y1", "y2", "stroke-width"], Wi = ["begin", "from", "keyTimes", "keySplines"], Ji = ["begin", "to", "keyTimes", "keySplines"];
function Ki(i, e, t, r, n, s) {
  return a(), o("svg", V(t.settings, {
    style: s.style,
    width: "46",
    height: "33",
    viewBox: "0 0 46 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: "svg"
  }), [
    l("line", {
      id: "line1",
      x1: s.lineData.line1.from.x1,
      x2: s.lineData.line1.from.x2,
      y1: s.lineData.line1.from.y1,
      y2: s.lineData.line1.from.y2,
      "stroke-width": s.strokeWidth,
      "stroke-linecap": "round",
      ref: "line1"
    }, [
      l("animate", {
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.from.x1,
        to: s.lineData.line1.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ti),
      l("animate", {
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.from.x2,
        to: s.lineData.line1.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ai),
      l("animate", {
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.from.y1,
        to: s.lineData.line1.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Di),
      l("animate", {
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.from.y2,
        to: s.lineData.line1.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Oi),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.to.x1,
        to: s.lineData.line1.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ii),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.to.x2,
        to: s.lineData.line1.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ni),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.to.y1,
        to: s.lineData.line1.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Pi),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line1.to.y2,
        to: s.lineData.line1.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Vi)
    ], 8, Ei),
    l("line", {
      style: { transition: "all linear 0.05s" },
      id: "line2",
      x1: s.lineData.line2.from.x1,
      x2: s.lineData.line2.from.x2,
      y1: s.lineData.line2.from.y1,
      y2: s.lineData.line2.from.y2,
      "stroke-width": s.strokeWidth,
      "stroke-linecap": "round",
      ref: "line2"
    }, [
      l("animate", {
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.from.x1,
        to: s.lineData.line2.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Fi),
      l("animate", {
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.from.x2,
        to: s.lineData.line2.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ri),
      l("animate", {
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.from.y1,
        to: s.lineData.line2.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Bi),
      l("animate", {
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.from.y2,
        to: s.lineData.line2.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Hi),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.to.x1,
        to: s.lineData.line2.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, zi),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.to.x2,
        to: s.lineData.line2.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, ji),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.to.y1,
        to: s.lineData.line2.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, qi),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: n.begin,
        dur: n.duration,
        from: s.lineData.line2.to.y2,
        to: s.lineData.line2.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ui)
    ], 8, Mi),
    l("line", {
      style: { transition: "all linear 0.05s" },
      id: "line3",
      x1: s.lineData.line3.from.x1,
      x2: s.lineData.line3.from.x2,
      y1: s.lineData.line3.from.y1,
      y2: s.lineData.line3.from.y2,
      "stroke-width": s.strokeWidth,
      "stroke-linecap": "round",
      ref: "line3"
    }, [
      l("animate", {
        attributeName: "stroke-width",
        begin: n.begin,
        dur: "0.01s",
        from: s.strokeWidth,
        to: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Wi),
      l("animate", {
        class: "closed",
        attributeName: "stroke-width",
        begin: n.begin,
        dur: "0.01s",
        to: s.strokeWidth,
        from: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: n.keyTimes,
        keySplines: s.effectiveKeySplines
      }, null, 8, Ji)
    ], 8, Gi)
  ], 16);
}
const Xi = /* @__PURE__ */ L(Li, [["render", Ki]]), Zi = {
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
    animationStyle(i) {
      return { "--utility-animation-index": i };
    }
  },
  mounted() {
    this.$refs.root && U.init([this.$refs.root]);
  }
}, Yi = { class: "container space-2" }, Qi = { class: "row" }, $i = { class: "product-blocks__content" }, er = { key: 0 }, tr = { key: 1 }, sr = {
  key: 2,
  class: "dashed"
}, ir = { class: "product-blocks__buttons" };
function rr(i, e, t, r, n, s) {
  const d = Ne, h = W, m = Q, g = J;
  return a(), o("div", {
    class: "product-blocks utility-animation container-fluid",
    style: N(s.backgroundColorStyle),
    ref: "root"
  }, [
    l("div", Yi, [
      t.headline ? (a(), o("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: N(s.animationStyle(1))
      }, [
        w(d, {
          text: t.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : u("", !0),
      l("div", Qi, [
        (a(!0), o(x, null, A(t.productBlocks.items, (c, k) => (a(), o("div", {
          key: k,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: N(s.animationStyle(k + 1))
        }, [
          l("div", {
            class: f(["product-blocks__block", { "text-center": c.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            l("div", $i, [
              l("figure", {
                class: f(["product-blocks__img", { "mx-auto": c.copy === "" }, "mb-4"])
              }, [
                c.image ? (a(), b(h, {
                  key: 0,
                  img: c.image,
                  cloudinary: c.cloudinary,
                  alt: c.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : u("", !0)
              ], 2),
              c - t.headline ? (a(), o("h3", er, y(c.headline), 1)) : u("", !0),
              c.copy ? (a(), o("p", tr, y(c.copy), 1)) : u("", !0),
              c.bulletList ? (a(), o("ul", sr, [
                (a(!0), o(x, null, A(c.bulletList, (C, E) => (a(), o("li", { key: E }, y(C), 1))), 128))
              ])) : u("", !0)
            ]),
            l("div", ir, [
              c.list ? (a(), b(m, {
                key: 0,
                list: c.list
              }, null, 8, ["list"])) : c.ctaText ? (a(), b(g, {
                key: 1,
                text: c.ctaText,
                href: c.ctaHref,
                link: c.link,
                target: c.target,
                type: c.type
              }, null, 8, ["text", "href", "link", "target", "type"])) : u("", !0)
            ])
          ], 2)
        ], 4))), 128))
      ])
    ])
  ], 4);
}
const nr = /* @__PURE__ */ L(Zi, [["render", rr]]), ar = {
  tagName: "product-stage",
  props: {
    stage: Object,
    products: Object
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
}, lr = { class: "product-stage__content container position-relative" }, or = { class: "space-top-2 space-top-lg-4 space-top-xl-5 text-white space-bottom-1 space-bottom-lg-2" }, cr = ["innerHTML"], dr = {
  key: 1,
  class: "row justify-content-center py-6"
}, hr = ["innerHTML"], ur = {
  key: 2,
  class: "row justify-content-center py-6"
}, mr = {
  key: 3,
  class: "space-bottom-2 space-bottom-lg-3"
}, gr = ["href", "target", "id", "aria-controls", "aria-selected"], fr = { class: "d-flex flex-column align-items-center position-relative z-index-2" }, _r = {
  key: 1,
  class: "mb-6 flex-grow-1"
};
function pr(i, e, t, r, n, s) {
  const d = me("pricing-slider"), h = Q, m = J, g = we;
  return a(), o("section", {
    class: "product-stage position-relative overflow-hidden",
    style: N({ backgroundColor: s.bgColor })
  }, [
    e[0] || (e[0] = fe('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>', 1)),
    l("div", lr, [
      l("div", or, [
        l("h1", null, y(t.stage.headline), 1),
        t.stage.description ? (a(), o("p", {
          key: 0,
          class: "col-lg-8 lead mt-5 px-0",
          innerHTML: t.stage.description
        }, null, 8, cr)) : u("", !0)
      ]),
      t.stage.slider && t.products ? (a(), b(d, {
        key: 0,
        slider: t.stage.slider,
        tooltip: t.stage.tooltip,
        "modal-id": t.stage.modalId
      }, null, 8, ["slider", "tooltip", "modal-id"])) : u("", !0),
      t.stage.additionalCopy ? (a(), o("div", dr, [
        l("div", {
          class: "text-center",
          innerHTML: t.stage.additionalCopy
        }, null, 8, hr)
      ])) : u("", !0),
      t.stage.buttons ? (a(), o("div", ur, [
        w(h, {
          list: t.stage.buttons
        }, null, 8, ["list"])
      ])) : (a(), o("div", mr)),
      s.cards ? (a(), o("ul", {
        key: 4,
        class: f(["row nav nav-pills", { "px-1 px-lg-0": s.cards.tabs }]),
        role: "tablist"
      }, [
        (a(!0), o(x, null, A(s.cards.list, (c, k) => (a(), o("li", {
          key: k,
          class: f([
            "col-lg-" + 12 / s.cards.list.length,
            { "px-1 px-lg-3 nav-item": s.cards.tabs, "mb-6 mb-md-8 mb-lg-0": !s.cards.tabs }
          ])
        }, [
          c.link ? (a(), o("a", {
            key: 0,
            href: c.link.href,
            target: c.link.target,
            class: f(["product-stage__tab h-100 rounded position-relative d-block", { active: s.cards.tabs && k === 0 }]),
            id: c.id ? c.id + "-tab" : "",
            "data-toggle": "pill",
            role: "tab",
            "aria-controls": c.id,
            "aria-selected": s.cards.tabs && k === 0
          }, [
            l("div", {
              class: f(["product-stage__tab-content position-relative h-100", { "product-stage__tab-content--alternative-border": s.cards.tabs }])
            }, [
              l("div", {
                class: f(["rounded", { "p-2 p-lg-8": c.link, "p-8 bg-white shadow-lg": !c.link }])
              }, [
                l("div", fr, [
                  c.title ? (a(), o("h2", {
                    key: 0,
                    class: f(["font-size-3 mb-2 mb-md-6 text-center", { "text-primary": c.link }])
                  }, y(c.title), 3)) : u("", !0),
                  c.description ? (a(), o("p", _r, y(c.description), 1)) : u("", !0),
                  c.cta !== c.href ? (a(), b(m, {
                    key: 2,
                    text: c.cta.text,
                    href: c.cta.href,
                    target: c.cta.target,
                    skin: c.cta.skin,
                    classes: "align-self-center z-index-2"
                  }, null, 8, ["text", "href", "target", "skin"])) : u("", !0)
                ])
              ], 2)
            ], 2)
          ], 10, gr)) : u("", !0)
        ], 2))), 128))
      ], 2)) : u("", !0)
    ]),
    s.shape ? (a(), o(x, { key: 0 }, [
      s.shape.isActive !== !1 ? (a(), b(g, {
        key: 0,
        align: "bottom",
        peak: "left",
        obliquity: 4,
        classes: s.shapeClasses,
        color: s.shape.color
      }, null, 8, ["classes", "color"])) : u("", !0)
    ], 64)) : u("", !0)
  ], 4);
}
const yr = /* @__PURE__ */ L(ar, [["render", pr]]), vr = {
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
function br(i, e, t, r, n, s) {
  return a(), o("svg", V(t.settings, {
    style: s.style,
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
const xr = /* @__PURE__ */ L(vr, [["render", br]]);
class wr {
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
    let s = r.replace(/<\/?span[^>]*>/g, ""), d = 0;
    const h = 5, m = 2;
    return e === 0 ? s = s.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (g, c) => c.length > h && /^\s*$/.test(c) ? c : d < m && c.length > h && c[0] !== "," ? (d++, "<p>" + c.trim() + "</p>") : c).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(s) && s.length > h && (s = "<p>" + s + "</p>"), `${n}${s}`.replace(/<\/p><br><p>/g, "</p><p>");
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
      const r = t.split(" / "), n = r[0], s = r[1], d = "CSOC", h = "Managed Services", m = "Products";
      if (n === h && s !== d)
        t = h;
      else if (n === m)
        t = `${m} ${s}`;
      else
        switch (s) {
          case "Azure Architecture":
            t = "Azure";
            break;
          case "M365 Architecture":
            t = "Workplace";
            break;
          case d:
            t = "Security";
            break;
          default:
            t = s;
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
    var t, r, n, s;
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
        e = (s = window.i18n) == null ? void 0 : s.translate("positionTypeStudent");
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
const Z = {
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
class Sr {
  constructor(e) {
    S(this, "defaultLang", "de");
    S(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    S(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    S(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    S(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    S(this, "defaultClientName", "c4a8");
    S(this, "mockApplyUrl", "mock/jobApply.json");
    S(this, "mockDocumentsUrl", "mock/jobDocuments.json");
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
    var s;
    const t = new wr(e), r = (s = this.options) == null ? void 0 : s.jobId;
    return t.description === null || r && t.id !== r || !this.filterPosition(t) ? null : {
      ...t.data,
      lang: this.lang
    };
  }
  filterPosition(e) {
    var t, r;
    return !((r = (t = this.filter) == null ? void 0 : t.tags) != null && r.length) || this.filter.tags.some((n) => e.tags.map((s) => s.toLowerCase()).includes(n.toLowerCase())) ? e : null;
  }
  convertData(e) {
    var s, d;
    const t = e, r = "workzag-jobs", n = (s = e[r]) == null ? void 0 : s.position;
    return t.objects = n.length ? (d = e[r]) == null ? void 0 : d.position.map((h) => this.convertPosition(h)).filter(Boolean) : [this.convertPosition(n)].filter(Boolean), t.meta = { offset: 0, limit: 20, total: 10 }, t;
  }
  getConvertedJson(e) {
    const r = new DOMParser().parseFromString(e, "application/xml"), n = p.XMLtoJSON(r);
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
    return new Promise((n, s) => {
      var d;
      if ((d = this.options) != null && d.client_name) {
        const h = fetch(e, t), m = r === this.responseTypes.XML ? this.fetchXML(h) : h;
        n(m);
      } else
        s("no client_name specified");
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
    return new Promise((n, s) => {
      this.uploadDocuments(e).then((d) => {
        if (this.hasValidResponseCodes(d)) return this.addFilesToFields(d, r, n, s);
        const h = d[0];
        h.json().then((m) => {
          if (m.errors) return s({ statusCode: h.status, errors: m.errors });
        }).catch((m) => s(m));
      }).catch((d) => s(d));
    });
  }
  addFilesToFields(e, t, r, n) {
    const s = t;
    s.files = [];
    const d = e.map((h) => h.json().then((m) => {
      s.files.push({
        uuid: m.uuid,
        original_filename: m.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(d).then(() => r(s)).catch((h) => n(h));
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
    return this.options.apiUrl ? e.status === Z.VALID : e.status === Z.VALID || e.status === Z.CREATED || e.status === Z.NO_CONTENT;
  }
  hasValidResponseCodes(e) {
    return e.every((t) => this.isValidResponseCode(t));
  }
  handleApply(e) {
    return new Promise((t, r) => {
      this.apply({ fields: e }).then((n) => {
        if (this.isValidResponseCode(n)) return t();
        n.json().then((s) => {
          if (s.errors) return r({ statusCode: n.status, errors: s.errors });
        }).catch((s) => r(s));
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
    for (let s = 0; s < e.length; s++) {
      const h = e[s].input, m = t.getName(h.name), g = p.camalCaseToSnakeCase(m);
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
class kr {
  constructor(e) {
    S(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = e, this.api = new Sr(this.options), this.jobDataUrl = p.getSiteAssetPath(this.jobDataUrl);
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
    const t = e.filter((n) => n.order !== void 0).sort((n, s) => s.order - n.order), r = e.filter((n) => n.order === void 0);
    return [...t, ...r];
  }
  getFormData(e) {
    const t = H.getFormData(e);
    return this.api.getFormPayload(t, H);
  }
  applyFileData(e, t, r) {
    return this.api.applyFileData(e, t, r);
  }
  handleApply(e) {
    return this.api.handleApply(e);
  }
}
const q = class q {
  constructor(e, t) {
    this.root = e, this.options = t, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(_.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new kr({
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
      const n = this.root.parentNode, s = H.getInstance(this.form);
      if (n && this.isNotVueApp(n)) {
        const d = n.querySelector(this.buttonSelector);
        d == null || d.addEventListener("click", this.handleOpen.bind(this));
      } else n && this.addTriggerListeners();
      s && s.canHaveCustomSubmit() && (s.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(O.OPEN_MODAL, this.handleModalOpen.bind(this));
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
    const t = this.form.querySelector(ce.base64Selector), r = t == null ? void 0 : t.value;
    let n = this.api.getFormData(this.form), s;
    if (r)
      s = {
        name: t.dataset.fileName
      };
    else {
      const d = this.form.querySelector('input[type="file"]');
      s = d == null ? void 0 : d.files;
    }
    s ? this.handleApplicationRequest(n, s, r) : this.handleError();
  }
  setLoading(e) {
    document.dispatchEvent(new CustomEvent(O.LOAD_MODAL, { detail: e }));
  }
  handleApplicationRequest(e, t, r) {
    this.api.applyFileData(t, r, e).then((n) => {
      this.api.handleApply(n).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(n);
      }).catch((s) => {
        this.setLoading(!1), this.handleError(s);
      });
    }).catch((n) => {
      this.setLoading(!1), this.handleError(n);
    });
  }
  handleApplicationSuccess(e) {
    this.root.classList.add(_.SUCCESS);
    const t = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (t) {
      t.dataset.text || (t.dataset.text = t.innerText);
      const r = e.first_name;
      t.innerText = `${t.dataset.text} ${r}`;
    }
  }
  handleError(e) {
    if (!e) return console.error("handle generic error");
    const t = typeof e == "string" ? e : e.message ? e.message : e, r = typeof e == "object" && e.statusCode ? e.statusCode : Z.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", t), r === Z.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(e) : this.root.classList.add(_.ERROR);
  }
  handlePayloadTooLarge(e) {
    document.dispatchEvent(new CustomEvent(O.FORM_ATTACHMENT_ERROR, { detail: e }));
  }
  handleClose(e) {
    e.preventDefault(), q.close(this.root);
  }
  handleOpen(e) {
    e.preventDefault(), q.open(this.root);
  }
  static initElement(e, t) {
    const r = new this(e, t);
    return this.instances.push(r), r;
  }
  static open(e) {
    e && window.$ && $(e).modal("show");
  }
  static close(e) {
    e && window.$ && ($(e).modal("hide"), q.resetModal(e));
  }
  static resetModal(e) {
    setTimeout(function() {
      const t = e.querySelector("form");
      t == null || t.reset(), e.classList.remove(_.SUCCESS), e.classList.remove(_.ERROR);
    }, 200);
  }
  static init(e) {
    this.instances = [];
    const t = e || document, r = `${this.rootSelector}:not(.${_.READY})`;
    [].forEach.call(t.querySelectorAll(r), (n) => {
      this.initElement(n);
    });
  }
};
S(q, "rootSelector", ".modal"), S(q, "instances", []);
let ye = q;
const Cr = {
  tagName: "modal",
  computed: {
    modalErrorValue() {
      return p.getJSON(this.modalError);
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
      return p.isTrue(this.center);
    },
    slimValue() {
      return p.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? !0 : null;
    },
    notificationValue() {
      return p.isTrue(this.notification);
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
      return ["modal__body", this.loading ? _.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(O.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(i) {
      const e = document.querySelector("html");
      i ? e.classList.add(_.MODAL_OPEN) : (e.classList.remove(_.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const e = this.$refs.modal.querySelector(H.rootSelector);
      if (!e) return;
      const t = H.getInstance(e);
      t || H.reset(t.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(O.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(i) {
      const e = i == null ? void 0 : i.detail;
      this.loading = e;
    },
    openModal() {
      setTimeout(() => {
        ye.open(this.$refs.modal);
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
}, Lr = {
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
      let i = `${this.headlineClasses || ""} ${this.textImageLightText} mb-2 mb-lg-4`;
      return this.headlineClasses || (i += this.float ? " h3-font-size" : " h4-font-size font-weight-normal"), i.trim();
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
      const i = [
        "text-image__first-col",
        "d-flex",
        "text-image__img",
        "justify-content-center",
        this.imageClasses,
        `col-lg-${this.float ? this.textImageFirstColWidthComputed : this.offset ? this.textImageFirstColWidthComputed - 1 : this.textImageFirstColWidthComputed}`
      ];
      return this.float ? i.push(`col-xl-${this.textImageFirstColWidthXl}`, "text-image__img--floating") : this.offset && !this.left && i.push("offset-lg-1"), i;
    },
    textImageSecondColClasses() {
      const i = [
        "text-image__second-col",
        { "no-gutters": this.noGutters },
        { "pt-2 pt-lg-4": !this.noGutters },
        `col-lg-${this.textImageSecondColWidthComputed}`,
        { "fade-in-bottom": !this.noAnimation },
        { "text-white": this.white },
        { [this.reduceSpacing]: this.reduceSpacing }
      ];
      return this.reduceSpacing || i.push(`${this.left ? "pr-lg-" : "pl-lg-"}${this.textImageSecondColWidthComputed}`), this.float ? i.push(`col-xl-${this.textImageSecondColWidthXl}`) : this.left && this.offset && i.push("offset-lg-1"), i;
    },
    textImageLightTextClass() {
      return [this.copyClasses || "", this.textImageLightText];
    }
  },
  mounted() {
    this.$refs.root && U.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, Er = { class: "container" }, Tr = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, Ar = {
  key: 3,
  class: "richtext"
}, Dr = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, Or = ["innerHTML"], Ir = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, Nr = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function Pr(i, e, t, r, n, s) {
  const d = W, h = Le, m = K, g = Q, c = J, k = Cr;
  return a(), o("div", {
    class: f(s.textImageClass),
    style: N(s.textImageStyle),
    ref: "root"
  }, [
    l("div", Er, [
      l("div", {
        class: f(["row", { "flex-row-reverse": t.left }])
      }, [
        t.float ? (a(), o("div", {
          key: 0,
          class: f([
            "text-image__floating-col",
            "justify-content-end",
            "text-image__floating-img",
            "position-absolute",
            "top-0",
            "right-0",
            "col-lg-" + s.textImageFirstColWidthComputed,
            "col-xl-" + s.textImageFirstColWidthXl
          ]),
          onClick: e[0] || (e[0] = (...C) => s.handleClick && s.handleClick(...C)),
          style: N({ cursor: t.href ? "pointer" : void 0 })
        }, [
          w(d, {
            img: t.image,
            cloudinary: t.cloudinary,
            alt: t.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: t.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : u("", !0),
        l("div", {
          class: f(s.textImageFirstColClasses),
          onClick: e[1] || (e[1] = (...C) => s.handleClick && s.handleClick(...C)),
          style: N({ cursor: t.href ? "pointer" : void 0 })
        }, [
          l("div", {
            class: f(["text-image__first-col-wrapper", { "fade-in-bottom": !t.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            w(d, {
              img: t.image,
              cloudinary: t.cloudinary,
              imgSrcSets: s.textImageImgSrcSets,
              preset: s.textImagePreset,
              alt: t.alt,
              lottie: t.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ], 2)
        ], 6),
        l("div", {
          class: f(s.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          t.badge ? (a(), b(h, {
            key: 0,
            text: t.badge.text,
            icon: t.badge.icon,
            uppercase: !t.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : u("", !0),
          t.overline ? (a(), o("span", Tr, y(t.overline), 1)) : u("", !0),
          t.headlineText ? (a(), b(m, {
            key: 2,
            level: t.level,
            classes: s.textImageHeadlineClassesComputed
          }, {
            default: Y(() => [
              z(y(t.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : u("", !0),
          t.subline ? (a(), o("span", Ar, y(t.subline), 1)) : u("", !0),
          t.subline ? (a(), o("div", Dr, [
            w(d, {
              img: t.image,
              cloudinary: t.cloudinary,
              imgSrcSets: s.textImageImgSrcSets,
              preset: s.textImagePreset,
              alt: t.alt,
              lottie: t.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : u("", !0),
          l("div", {
            class: f(s.textImageLightTextClass),
            innerHTML: t.copy
          }, null, 10, Or),
          t.list ? (a(), o("div", Ir, [
            w(g, { list: t.list }, null, 8, ["list"])
          ])) : u("", !0)
        ], 2),
        t.cta ? (a(), o("div", Nr, [
          w(c, {
            text: t.cta.text,
            button: "",
            href: t.cta.href,
            trigger: t.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : u("", !0)
      ], 2)
    ]),
    t.modal ? (a(), b(k, {
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
const Vr = /* @__PURE__ */ L(Lr, [["render", Pr]]), ke = {
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
}, Mr = {
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
}, Fr = {
  tagName: "v-footer",
  components: {
    "footer-slider": Mr
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
        p.isTrue(this.noMargin) ? "" : "mt-8 mt-lg-11",
        this.isCorporate ? "footer--corporate" : "",
        "vue-component"
      ];
    },
    isCorporate() {
      var i;
      return !((i = this.dataValue) != null && i.brandLogos);
    },
    style() {
      var i;
      return [(i = this.dataValue) != null && i.bgColor ? `background-color: ${this.dataValue.bgColor};` : ""];
    },
    dataValue() {
      return this.data ? { ...ke, ...p.getJSON(this.data) } : { ...ke };
    },
    links() {
      const i = this.lang.toLowerCase();
      if (i === "de" || i === "")
        return this.dataValue.links;
      {
        const e = p.capitalize(this.lang), t = this.dataValue[`links${e}`];
        return t || this.dataValue.links;
      }
    },
    locations() {
      const i = [];
      return i.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail
      }), this.dataValue.additionalLocations && this.dataValue.additionalLocations.length && i.push(...this.dataValue.additionalLocations), i;
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
}, Rr = { class: "container" }, Br = { class: "footer__content-row row" }, Hr = { class: "footer__content col-lg-12" }, zr = { class: "footer__address" }, jr = ["href", "target"], qr = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, Ur = {
  key: 0,
  class: "nav-item"
}, Gr = {
  key: 1,
  class: "nav-item"
}, Wr = {
  key: 2,
  class: "nav-item"
}, Jr = { class: "footer__postal-code" }, Kr = { class: "footer__city" }, Xr = { class: "footer__country" }, Zr = {
  key: 4,
  class: "nav-item"
}, Yr = ["href"], Qr = { class: "media" }, $r = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, en = { class: "media-body" }, tn = {
  key: 5,
  class: "footer__nav-item nav-item"
}, sn = { class: "footer__nav-link nav-link" }, rn = { class: "footer__offices" }, nn = { class: "footer__office" }, an = { key: 0 }, ln = ["href"], on = { class: "d-flex" }, cn = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, dn = { class: "footer__mail media-body" }, hn = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, un = ["href", "target"], mn = { class: "footer__highlights" }, gn = { class: "footer__partners" }, fn = ["href", "target"], _n = {
  key: 0,
  class: "footer__vertical-line"
}, pn = {
  key: 0,
  class: "footer__content-row row"
}, yn = { class: "footer__content col-lg-12" }, vn = { class: "mt-3" }, bn = { class: "row align-items-md-center mb-3" }, xn = { class: "col-md-8 mb-4 mb-md-0" }, wn = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, Sn = { class: "nav-item mr-6 footer__links" }, kn = ["href"], Cn = { class: "col-md-4 text-md-right" }, Ln = { class: "list-inline mb-0 footer__socials" }, En = { class: "list-inline-item" }, Tn = ["title", "href"], An = { class: "row pb-2" }, Dn = { class: "col" }, On = { class: "text-white small" };
function In(i, e, t, r, n, s) {
  const d = W, h = ve, m = G, g = me("footer-slider");
  return a(), o("footer", {
    class: f(s.classList),
    style: N(s.style),
    ref: "root"
  }, [
    l("div", Rr, [
      l("div", Br, [
        l("div", Hr, [
          l("div", zr, [
            (a(!0), o(x, null, A(s.dataValue.logos, (c) => (a(), o("div", {
              class: f(["mb-3", c == null ? void 0 : c.classes])
            }, [
              l("a", {
                href: c.url,
                target: c.target,
                "aria-label": "Front",
                class: f([
                  "footer__logos-link d-block pr-6",
                  c.linkClasses ? c.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                w(d, V({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, jr)
            ], 2))), 256)),
            (a(!0), o(x, null, A(s.locations, (c) => (a(), o("ul", qr, [
              c.name ? (a(), o("li", Ur, y(c.name), 1)) : u("", !0),
              c.over ? (a(), o("li", Gr, y(c.over), 1)) : u("", !0),
              c.street ? (a(), o("li", Wr, y(c.street), 1)) : u("", !0),
              c.city ? (a(), o("li", {
                key: 3,
                class: f(["nav-item footer__address-block", c.postalReversed ? "is-reversed" : ""])
              }, [
                l("span", Jr, y(c.postalCode), 1),
                l("span", Kr, y(c.city), 1),
                l("span", Xr, y(c.country), 1)
              ], 2)) : u("", !0),
              c.number ? (a(), o("li", Zr, [
                l("a", {
                  class: "nav-link media",
                  href: "tel:" + c.number
                }, [
                  l("span", Qr, [
                    l("span", $r, [
                      w(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", en, y(c.number), 1)
                  ])
                ], 8, Yr)
              ])) : u("", !0),
              s.dataValue.offices ? (a(), o("li", tn, [
                l("a", sn, [
                  w(m, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  l("div", rn, [
                    (a(!0), o(x, null, A(s.dataValue.offices, (k, C) => (a(), o("span", nn, [
                      z(y(k), 1),
                      C < s.dataValue.offices.length - 1 ? (a(), o("span", an, ", ")) : u("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : u("", !0),
              c.mail ? (a(), o("li", {
                key: 6,
                class: f(["nav-item", s.locations.length > 1 ? "pt-4" : ""])
              }, [
                l("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + c.mail
                }, [
                  l("span", on, [
                    l("span", cn, [
                      w(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", dn, y(c.mail), 1)
                  ])
                ], 8, ln)
              ], 2)) : u("", !0)
            ]))), 256)),
            s.isCorporate ? u("", !0) : (a(!0), o(x, { key: 0 }, A(s.dataValue.brandLogos, (c, k) => (a(), o(x, null, [
              c.title ? (a(), o("span", hn, y(c.title), 1)) : u("", !0),
              l("a", {
                href: c.url,
                target: c.target,
                class: f([
                  "footer__brand-logo-link d-block space-top-1",
                  k === 0 ? "mt-3" : "",
                  c.classes ? c.classes : "w-90"
                ])
              }, [
                w(d, V({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, un)
            ], 64))), 256))
          ]),
          l("div", mn, [
            l("div", gn, [
              (a(!0), o(x, null, A(s.dataValue.partners, (c, k) => (a(), o(x, null, [
                l("a", {
                  href: c.url,
                  target: c.target,
                  class: "footer__partner-images"
                }, [
                  w(d, V({
                    cloudinary: !0,
                    ref_for: !0
                  }, c, { class: "footer__partner-image" }), null, 16)
                ], 8, fn),
                k < s.dataValue.partners.length - 1 ? (a(), o("div", _n)) : u("", !0)
              ], 64))), 256))
            ]),
            s.isCorporate ? u("", !0) : (a(), b(g, {
              key: 0,
              items: s.dataValue.highlights,
              "bg-color": n.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      s.isCorporate ? (a(), o("div", pn, [
        l("div", yn, [
          w(g, {
            items: s.dataValue.highlights,
            "bg-color": n.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : u("", !0),
      e[0] || (e[0] = l("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      l("div", vn, [
        l("div", bn, [
          l("div", xn, [
            l("ul", wn, [
              (a(!0), o(x, null, A(s.links, (c) => (a(), o("li", Sn, [
                l("a", V({
                  class: "nav-link",
                  href: c.url,
                  ref_for: !0
                }, c), y(c.title), 17, kn)
              ]))), 256))
            ])
          ]),
          l("div", Cn, [
            l("ul", Ln, [
              (a(!0), o(x, null, A(s.dataValue.socials, (c) => (a(), o("li", En, [
                l("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: c.title,
                  href: c.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  l("i", {
                    class: f(["fab", c.icon])
                  }, null, 2)
                ], 8, Tn)
              ]))), 256))
            ])
          ])
        ]),
        l("div", An, [
          l("div", Dn, [
            l("p", On, "Copyright © " + y(s.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const Nn = /* @__PURE__ */ L(Fr, [["render", In]]), Ce = {}, Pn = {
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
      var i;
      return (i = this.results) == null ? void 0 : i.slice(0, this.maxResults);
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
      const i = `${this.endpoint}`;
      if (i)
        return this.store ? this.handleSearch() : fetch(i, {
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
      const i = `${this.$refs.search.value}`;
      i && (this.results = this.searchEngine.search(i), console.log("handleSearch ~ this.results", this.results));
    },
    initSearchEngine() {
      const i = this.store, { results: e, weights: t } = i;
      if (!Ce) return;
      const r = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: t
      };
      this.searchEngine = new Ce(e, r);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(i) {
      this.searchExpanded = p.isOutsideOf("search", i) ? !1 : this.searchExpanded;
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
}, Vn = {
  tagName: "link-list",
  computed: {
    classList() {
      return [
        "link-list",
        this.hasNoAnimation ? "" : "utility-animation",
        `${this.isExpanded ? _.EXPANDED : ""}`,
        `${this.isExpandable() ? _.EXPANDABLE : ""}`,
        `${this.hasActiveItem ? _.ACTIVE : ""}`,
        `${this.isHidden ? "link-list--hidden" : ""}`,
        `${this.inTransition ? "link-list--in-transition" : ""}`,
        this.classes,
        "vue-component"
      ];
    },
    hasNoAnimation() {
      return p.isTrue(this.noAnimation);
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
      const i = this.list.children;
      if (i)
        return i.filter((e) => {
          var t;
          return ((t = e.languages[this.lang]) == null ? void 0 : t.active) === !0;
        }).length > 0;
    },
    isHidden() {
      return p.isTrue(this.hidden) === !0;
    }
  },
  watch: {
    hidden(i, e) {
      i || (this.inTransition = !0);
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
        O.CHILD_HAS_UPDATE,
        this.handleUpdate.bind(this)
      );
    },
    handleUpdate(i) {
      const e = i.detail.root;
      this.isExpanded && this.$refs.root !== e && this.handleClick();
    },
    isLowerBreakpoint() {
      return p.isBelowBreakpoint("md");
    },
    isExpandable() {
      var i;
      return !!(this.isLowerBreakpoint() && this.list.languages && ((i = this.list.languages[this.lang]) != null && i.title));
    },
    updateHeight() {
      const i = this.$refs.root;
      if (!i) return;
      const e = this.isHidden ? "" : i.scrollHeight + "px";
      i.style.height = e;
    },
    handleClick(i) {
      if (!this.isExpandable()) return;
      this.isExpanded = !this.isExpanded;
      const e = this.$refs.root;
      if (i) {
        const t = new CustomEvent(O.CHILD_HAS_UPDATE, {
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
}, Mn = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? _.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        p.isTrue(this.hover) ? _.HOVERING : "",
        p.isTrue(this.product) ? "header--product" : "",
        p.isTrue(this.closed) ? "" : _.EXPANDED,
        p.isTrue(this.blendMode) ? "header--blending" : "",
        // this.activeNavigation.length > 0 ? '' : State.LOADING,
        "vue-component"
      ];
    },
    headerContainerClassList() {
      return ["header__container", this.containerClass];
    },
    containerClass() {
      return p.isTrue(this.product) ? "container" : "container-xxl";
    },
    homeObj() {
      var i;
      return (i = this.home) == null ? void 0 : i.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return p.isTrue(this.search);
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
      return p.isTrue(this.light) === !0;
    },
    hasLangSwitch() {
      var i;
      return Object.keys((i = this.home) == null ? void 0 : i.languages).length > 1;
    },
    hasContact() {
      return this.contact;
    },
    hasMeta() {
      return this.meta && this.meta.length > 0;
    }
  },
  mounted() {
    this.setActiveNavigation(), this.bindEvents(), this.setCtaClasses(), this.setLinkWidth(), this.handleScroll();
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
      const i = this.$refs.link;
      if (i)
        for (let t = 0; t < i.length; t++) {
          const r = i[t], n = (e = r == null ? void 0 : r.querySelector(".header__link-text-spacer")) == null ? void 0 : e.clientWidth;
          r.style.setProperty("--header-link-text-width", n + "px");
        }
    },
    showFlyoutBlock(i) {
      return !(i.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return p.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(O.WINDOW_RESIZE, this.handleResize.bind(this));
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
      Object.keys(this.linkLists).forEach((i) => {
        this.linkLists[i] = !1;
      });
    },
    handleClick(i, e) {
      if (!this.isLowerBreakpoint()) return;
      const t = this.getId(i, e);
      this.linkLists[t] = !this.linkLists[t], this.linkLists[t] && (this.inTransition = !0), this.inUpdate = !0, this.closeAllSiblings(t), this.closeAllChildren();
    },
    closeAllSiblings(i) {
      Object.keys(this.linkLists).forEach((t) => {
        t !== i && (this.linkLists[t] = !1);
      });
    },
    closeAllChildren() {
      const i = new CustomEvent(O.CHILD_HAS_UPDATE, {
        detail: {}
      });
      this.$refs.list.dispatchEvent(i);
    },
    getId(i, e) {
      return `${i.name}_${e}`;
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
    handleMouseOver(i, e) {
      if (!i.children) return;
      this.resetAllFlyouts(), this.hover = !0;
      const t = this.getLinkRef(e);
      if (!t) return;
      t.classList.add(_.EXPANDED);
      const r = this.getFlyoutRef(e);
      r && (this.flyoutIndex = e, r.classList.add(_.EXPANDED));
    },
    handleMouseOut(i) {
      var r;
      if ((r = i.relatedTarget) != null && r.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.getLinkRef(this.flyoutIndex);
      if (!e) return;
      e.classList.remove(_.EXPANDED);
      const t = this.getFlyoutRef(this.flyoutIndex);
      t && t.classList.remove(_.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const i = this.$refs.languageSwitch;
      i && i.classList.add(_.EXPANDED);
    },
    handleLanguageOut(i) {
      var t;
      if ((t = i.relatedTarget) != null && t.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.$refs.languageSwitch;
      e && e.classList.remove(_.EXPANDED);
    },
    resetAllFlyouts() {
      var i, e;
      (i = this.$refs.link) == null || i.forEach((t) => {
        t.classList.remove(_.EXPANDED);
      }), (e = this.$refs.flyout) == null || e.forEach((t) => {
        t.classList.remove(_.EXPANDED);
      });
    },
    getFlyoutRef(i) {
      return this.getRef("flyout", i);
    },
    getLinkRef(i) {
      return this.getRef("link", i);
    },
    getRef(i, e) {
      const t = this.$refs[i][e];
      if (t)
        return t;
    },
    getHref(i) {
      var e;
      return i.children ? "javascript:void(0);" : (e = i.languages[this.lowerLang]) == null ? void 0 : e.url;
    },
    getTarget(i) {
      var t;
      const e = (t = i.languages[this.lowerLang]) == null ? void 0 : t.target;
      return e || null;
    },
    getNextLanguage() {
      const i = this.home.languages;
      if (!i) return;
      const e = Object.keys(i);
      if (!e.length) return;
      const t = e.filter((r) => r !== this.lowerLang);
      if (t.length)
        return t[0];
    },
    handleLanguageSwitch(i) {
      var r;
      const e = this.getActiveUrlByLang(i), t = e || ((r = this.home.languages[i]) == null ? void 0 : r.url);
      p.storageSave("preferedLanguage", i, !1), document.location.href = t;
    },
    getCurrentPath() {
      let i = "/";
      return typeof process < "u" && process.server ? i = this.$route.fullPath : i = window.location.pathname, i[i.length - 1] !== "/" && (i += "/"), i;
    },
    getActiveUrlByLang(i, e) {
      var h;
      const t = this.getCurrentPath(), r = "/", n = (m, g) => {
        if (!(m != null && m.title)) return;
        let c = m == null ? void 0 : m.url;
        t[(t == null ? void 0 : t.length) - 1] === r && c && c[(c == null ? void 0 : c.length) - 1] !== r && (c = c + r);
        const k = c === t, C = this.getParentLink(g);
        return e && k ? (m.active = !0, C && (C.active = !0)) : (m.active = !1, C && (C.active = !1)), k;
      }, s = (m, g) => g;
      let d = p.findRecursive(this.clonedNavigation, n, s);
      if (d || (d = p.findRecursive(this.meta, n, s)), d || (d = p.findRecursive(this.contact, n, s)), !d) {
        const m = this.getHrefLang(i);
        return m || this.getTranslatedUrl(t, i);
      }
      return (h = d[i]) == null ? void 0 : h.url;
    },
    getTranslatedUrl(i, e) {
      if (this.isBlogTagsUrl(i)) return this.getBlogTagsUrl(e, i);
      const t = this.getFolderSwitchSegment(i);
      return t ? this.getFolderSwitchUrl(e, i, t) : null;
    },
    getFolderSwitchSegment(i) {
      const e = this.home.folderSwitch;
      return e && e.find((r) => i.includes(r)) || null;
    },
    getFolderSwitchUrl(i, e, t) {
      if (!t) return e;
      let r;
      if (i === this.defaultLang) {
        const n = new RegExp(`/${this.lowerLang}/`);
        r = e.replace(n, "/");
      } else
        r = e.replace(t, `${i}/${t}`);
      return r;
    },
    isBlogTagsUrl(i) {
      return /\/blog\/tags/.test(i);
    },
    getBlogTagsUrl(i, e) {
      let t;
      const r = "tags";
      switch (i) {
        case "en":
          t = e.replace(r, `${r}-${i}`);
          break;
        default:
        case this.defaultLang:
          const n = new RegExp(`${r}-..`);
          t = e.replace(n, r);
          break;
      }
      return t + document.location.search;
    },
    getHrefLang(i) {
      const e = document == null ? void 0 : document.querySelector(`link[hreflang=${i}]`);
      if (e)
        return e.getAttribute("href");
    },
    getParentLink(i) {
      return this.clonedNavigation[i].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(i) {
      var e;
      return ["header__item", (e = i.languages[this.lowerLang]) != null && e.active ? _.ACTIVE : ""];
    },
    isLinkListHidden(i, e) {
      const t = this.getId(i, e);
      return !this.linkLists[t];
    },
    headerLinkClasses(i, e) {
      return this.getListClasses(i, e, ["header__link custom"]);
    },
    headerProductListClasses(i, e) {
      return this.getListClasses(i, e, ["header__product-list", this.inTransition ? _.IN_TRANSITION : ""]);
    },
    getListClasses(i, e, t) {
      const r = this.isLinkListHidden(i, e);
      return [...t, r ? "" : _.EXPANDED];
    },
    updateProductListHeight() {
      const i = this.$refs["product-list"];
      if (i)
        for (let e = 0; e < i.length; e++) {
          const t = i[e], n = !t.classList.contains(_.EXPANDED) || t.style.height !== "" ? "" : t.scrollHeight + "px";
          t.style.height = n;
        }
    },
    navHighlightClasses(i, e) {
      return ["header__nav-highlight custom", this.isLinkListHidden(i, e) ? "is-hidden" : ""];
    },
    hasContactLink(i) {
      var e, t;
      return ((e = this.contact) == null ? void 0 : e.languages) && !((t = i.languages[this.lowerLang]) != null && t.emergency);
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
}, Fn = { class: "header__row row" }, Rn = { class: "header__col col" }, Bn = { class: "header__logo" }, Hn = ["href"], zn = {
  class: "header__list",
  ref: "list"
}, jn = ["href", "target", "onClick"], qn = ["onMouseover"], Un = { class: "header__link-text" }, Gn = { class: "header__link-text-spacer" }, Wn = ["href", "target"], Jn = { class: "header__product-list-data" }, Kn = { class: "header__product-list-title font-size-8 bold" }, Xn = { class: "header__product-list-subtitle" }, Zn = ["href"], Yn = { class: "header__footer" }, Qn = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, $n = ["href"], ea = { class: "header__contact-text" }, ta = { class: "header__contact-title" }, sa = {
  key: 2,
  class: "header__button"
}, ia = {
  key: 3,
  class: "header__language-switch"
}, ra = ["onClick"], na = {
  key: 0,
  class: "header__button"
}, aa = { class: "header__link-text" }, la = { class: "header__link-text-spacer" }, oa = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, ca = ["onClick"], da = { class: "row" }, ha = { class: "col" }, ua = {
  key: 0,
  class: "header__flyout-items"
}, ma = {
  key: 0,
  class: "header__flyout-block"
}, ga = { class: "header__flyout-caption" }, fa = ["innerHTML"], _a = ["href"], pa = { class: "header__contact-title" }, ya = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, va = {
  key: 1,
  class: "header__product-list is-expanded"
}, ba = ["href", "target"], xa = { class: "header__product-list-data" }, wa = { class: "header__product-list-title font-size-8 bold" }, Sa = { class: "header__product-list-subtitle" };
function ka(i, e, t, r, n, s) {
  var k, C, E, M, ee, te;
  const d = W, h = G, m = Vn, g = J, c = Pn;
  return a(), o(x, null, [
    l("div", {
      class: "header__spacer",
      style: N(s.spacerBgColor)
    }, null, 4),
    l("header", {
      class: f(s.classList),
      onMouseover: e[5] || (e[5] = (...v) => s.handleHeaderMouseOver && s.handleHeaderMouseOver(...v)),
      onMouseout: e[6] || (e[6] = (...v) => s.handleHeaderMouseOut && s.handleHeaderMouseOut(...v))
    }, [
      l("div", {
        class: f(s.headerContainerClassList)
      }, [
        l("div", Fn, [
          l("div", Rn, [
            l("div", Bn, [
              l("a", {
                href: (k = s.homeObj) == null ? void 0 : k.url
              }, [
                w(d, {
                  img: (C = t.home) == null ? void 0 : C.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0
                }, null, 8, ["img"]),
                w(d, {
                  img: (E = t.home) == null ? void 0 : E.img,
                  class: "header__logo-default",
                  cloudinary: !0
                }, null, 8, ["img"])
              ], 8, Hn)
            ]),
            l("div", {
              class: "header__menu",
              onClick: e[0] || (e[0] = (...v) => s.handleCloseClick && s.handleCloseClick(...v))
            }, [
              w(h, {
                icon: "menu",
                class: "header__menu-icon",
                closed: n.closed
              }, null, 8, ["closed"])
            ]),
            l("nav", {
              class: "header__nav",
              onMouseout: e[1] || (e[1] = (...v) => s.handleMouseOut && s.handleMouseOut(...v))
            }, [
              l("ul", zn, [
                (a(!0), o(x, null, A(n.activeNavigation, (v, D) => {
                  var j, se, ie, re, ne, X;
                  return a(), o("li", {
                    class: f(s.headerItemClasses(v))
                  }, [
                    v != null && v.languages ? (a(), o("a", {
                      key: 0,
                      class: f(s.headerLinkClasses(v, D)),
                      href: s.getHref(v),
                      target: s.getTarget(v),
                      onClick: (F) => s.handleClick(v, D),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      l("div", {
                        class: "header__link-content",
                        onMouseover: (F) => s.handleMouseOver(v, D, F)
                      }, [
                        l("span", Un, y((j = v.languages[s.lowerLang]) == null ? void 0 : j.title), 1),
                        l("span", Gn, y((se = v.languages[s.lowerLang]) == null ? void 0 : se.title), 1),
                        v.children ? (a(), b(h, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : u("", !0)
                      ], 40, qn)
                    ], 10, jn)) : u("", !0),
                    (a(!0), o(x, null, A(v.children, (F) => (a(), o(x, null, [
                      v.children && !F.products ? (a(), b(m, {
                        key: 0,
                        list: F,
                        lang: s.lowerLang,
                        hidden: s.isLinkListHidden(v, D),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (a(), o("div", {
                        key: 1,
                        class: f(s.headerProductListClasses(v, D)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (a(!0), o(x, null, A(F.children, (P) => {
                          var ae, le, Se;
                          return a(), o("a", {
                            href: (ae = P == null ? void 0 : P.languages[s.lowerLang]) == null ? void 0 : ae.url,
                            target: P.target,
                            class: "header__product-list-item custom"
                          }, [
                            w(d, {
                              img: P.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", Jn, [
                              l("div", Kn, y((le = P == null ? void 0 : P.languages[s.lowerLang]) == null ? void 0 : le.title), 1),
                              l("div", Xn, y((Se = P == null ? void 0 : P.languages[s.lowerLang]) == null ? void 0 : Se.subtitle), 1)
                            ])
                          ], 8, Wn);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (ie = v.languages[s.lowerLang]) != null && ie.emergency ? (a(), o("a", {
                      key: 1,
                      href: (re = v.languages[s.lowerLang]) == null ? void 0 : re.emergency.href,
                      class: f(s.navHighlightClasses(v, D))
                    }, [
                      w(h, {
                        icon: (ne = v.languages[s.lowerLang]) == null ? void 0 : ne.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      z(" " + y((X = v.languages[s.lowerLang]) == null ? void 0 : X.emergency.text), 1)
                    ], 10, Zn)) : u("", !0)
                  ], 2);
                }), 256))
              ], 512),
              l("div", Yn, [
                s.hasMeta ? (a(), b(m, {
                  key: 0,
                  list: s.metaList,
                  lang: s.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : u("", !0),
                s.hasContact ? (a(), o("div", Qn, [
                  (M = t.contact) != null && M.languages ? (a(), o("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (ee = t.contact.languages[s.lowerLang]) == null ? void 0 : ee.url
                  }, [
                    l("div", ea, [
                      w(h, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      l("span", ta, y((te = t.contact.languages[s.lowerLang]) == null ? void 0 : te.title), 1)
                    ])
                  ], 8, $n)) : u("", !0)
                ])) : u("", !0),
                t.button ? (a(), o("div", sa, [
                  w(g, {
                    text: t.button.text,
                    href: t.button.href,
                    target: t.button.target,
                    skin: t.button.skin,
                    classes: n.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : u("", !0),
                s.hasLangSwitch ? (a(), o("div", ia, [
                  (a(!0), o(x, null, A(t.home.languages, (v, D) => (a(), o("a", {
                    class: f({ "header__language-link custom": !0, active: D === s.lowerLang }),
                    onClick: (j) => s.handleLanguageSwitch(D)
                  }, y(D), 11, ra))), 256))
                ])) : u("", !0)
              ])
            ], 32),
            t.button ? (a(), o("div", na, [
              w(g, {
                text: t.button.text,
                href: t.button.href,
                target: t.button.target,
                skin: t.button.skin,
                classes: n.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : u("", !0),
            s.searchValue ? (a(), b(c, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : u("", !0),
            s.hasLangSwitch ? (a(), o("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: e[2] || (e[2] = (...v) => s.handleLanguageOver && s.handleLanguageOver(...v)),
              onMouseout: e[3] || (e[3] = (...v) => s.handleLanguageOut && s.handleLanguageOut(...v)),
              ref: "languageSwitch"
            }, [
              l("span", aa, y(t.lang), 1),
              l("span", la, y(t.lang), 1),
              w(h, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              l("div", oa, [
                (a(!0), o(x, null, A(t.home.languages, (v, D) => (a(), o("a", {
                  class: f({ "header__language-link custom": !0, "d-none": D === s.lowerLang }),
                  onClick: (j) => s.handleLanguageSwitch(D)
                }, y(D), 11, ca))), 256))
              ], 512)
            ], 544)) : u("", !0)
          ])
        ])
      ], 2),
      l("div", {
        class: "header__flyout",
        onMouseout: e[4] || (e[4] = (...v) => s.handleMouseOut && s.handleMouseOut(...v))
      }, [
        l("div", {
          class: f(s.containerClass)
        }, [
          l("div", da, [
            l("div", ha, [
              (a(!0), o(x, null, A(n.activeNavigation, (v, D) => {
                var j, se, ie, re, ne;
                return a(), o("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  v.children ? (a(), o("div", ua, [
                    s.showFlyoutBlock(v.children) ? (a(), o("figure", ma, [
                      l("figcaption", ga, y((j = v.languages[s.lowerLang]) == null ? void 0 : j.title), 1),
                      l("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (se = v.languages[s.lowerLang]) == null ? void 0 : se.description
                      }, null, 8, fa),
                      s.hasContactLink(v) ? (a(), o("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (ie = t.contact.languages[s.lowerLang]) == null ? void 0 : ie.url
                      }, [
                        w(h, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        l("span", pa, y((re = t.contact.languages[s.lowerLang]) == null ? void 0 : re.title), 1)
                      ], 8, _a)) : u("", !0),
                      (ne = v.languages[s.lowerLang]) != null && ne.emergency ? (a(), o("div", ya, [
                        w(g, V({ ref_for: !0 }, v.languages[s.lowerLang].emergency), null, 16)
                      ])) : u("", !0)
                    ])) : u("", !0),
                    (a(!0), o(x, null, A(v.children, (X) => (a(), o(x, null, [
                      v.children && !X.products ? (a(), b(m, {
                        key: 0,
                        list: X,
                        lang: s.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (a(), o("div", va, [
                        (a(!0), o(x, null, A(X.children, (F) => {
                          var P, ae, le;
                          return a(), o("a", {
                            href: (P = F.languages[s.lowerLang]) == null ? void 0 : P.url,
                            target: F.target,
                            class: "header__product-list-item custom"
                          }, [
                            w(d, {
                              img: F.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", xa, [
                              l("div", wa, y((ae = F.languages[s.lowerLang]) == null ? void 0 : ae.title), 1),
                              l("div", Sa, y((le = F.languages[s.lowerLang]) == null ? void 0 : le.subtitle), 1)
                            ])
                          ], 8, ba);
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
const Ca = /* @__PURE__ */ L(Mn, [["render", ka]]), La = {
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
}, Ea = { "clip-path": "url(#icon-world-mask)" }, Ta = ["stroke"], Aa = ["stroke"], Da = ["stroke"], Oa = ["stroke"], Ia = { id: "icon-world-mask" }, Na = ["fill"];
function Pa(i, e, t, r, n, s) {
  return a(), o("svg", V(t.settings, {
    style: s.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    l("g", Ea, [
      l("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: s.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Ta),
      l("path", {
        d: "M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667",
        stroke: s.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Aa),
      l("path", {
        d: "M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642",
        stroke: s.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Da),
      l("path", {
        d: "M0.418945 9.57001H19.5831",
        stroke: s.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Oa)
    ]),
    l("defs", null, [
      l("clipPath", Ia, [
        l("rect", {
          width: "20",
          height: "20",
          fill: s.stroke
        }, null, 8, Na)
      ])
    ])
  ], 16);
}
const Va = /* @__PURE__ */ L(La, [["render", Pa]]), Ra = {
  install(i) {
    i.component("Arrow", Be), i.component("Badge", Le), i.component("Carousel", $e), i.component("Contact", Us), i.component("Content", Ks), i.component("Cta", J), i.component("CtaList", Q), i.component("FormCheckbox", xe), i.component("FormCheckboxes", De), i.component("FormFields", Oe), i.component("FormRadio", be), i.component("FormRadios", Ae), i.component("FormSelect", Te), i.component("Formular", Ie), i.component("Headline", K), i.component("HeadlineRow", Ne), i.component("Hero", pi), i.component("Icon", G), i.component("IntroText", Ci), i.component("Lottie", Ee), i.component("Menu", Xi), i.component("ProductBlocks", nr), i.component("ProductStage", yr), i.component("Quote", xr), i.component("SiteIcons", ve), i.component("SvgShape", we), i.component("TextImage", Vr), i.component("VFooter", Nn), i.component("VHeader", Ca), i.component("VImg", W), i.component("World", Va), i.component("Wrapper", Pe);
  }
};
export {
  Be as Arrow,
  Le as Badge,
  $e as Carousel,
  Us as Contact,
  Ks as Content,
  J as Cta,
  Q as CtaList,
  xe as FormCheckbox,
  De as FormCheckboxes,
  Oe as FormFields,
  be as FormRadio,
  Ae as FormRadios,
  Te as FormSelect,
  Ie as Formular,
  K as Headline,
  Ne as HeadlineRow,
  pi as Hero,
  G as Icon,
  Ci as IntroText,
  Ee as Lottie,
  Xi as Menu,
  nr as ProductBlocks,
  yr as ProductStage,
  xr as Quote,
  ve as SiteIcons,
  we as SvgShape,
  Vr as TextImage,
  Nn as VFooter,
  Ca as VHeader,
  W as VImg,
  Va as World,
  Pe as Wrapper,
  Ra as default
};
