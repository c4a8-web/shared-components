var Be = Object.defineProperty;
var ze = (s, e, t) => e in s ? Be(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var S = (s, e, t) => ze(s, typeof e != "symbol" ? e + "" : e, t);
import { openBlock as a, createElementBlock as o, mergeProps as V, createElementVNode as l, normalizeClass as f, normalizeStyle as O, createBlock as x, resolveDynamicComponent as me, toDisplayString as y, createVNode as v, createCommentVNode as m, resolveComponent as de, Fragment as b, renderList as E, createStaticVNode as _e, withCtx as j, renderSlot as oe, createTextVNode as H, withModifiers as He, Transition as je, withDirectives as qe, vShow as Ue } from "vue";
const k = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, Ge = {
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
function We(s, e, t, n, r, i) {
  return a(), o("svg", V(t.settings, {
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
const Je = /* @__PURE__ */ k(Ge, [["render", We]]), A = class A {
  static isInViewportPercent(e, t) {
    const n = e.getBoundingClientRect(), r = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, d = { x: n.x, y: n.y, width: n.width, height: n.height }, h = { x: 0, y: 0, width: i, height: r }, u = d.width * d.height, g = A.intersection(d, h);
    return t <= g / u * 100;
  }
  static getScrollTop(e) {
    if (!e) return;
    const t = document.querySelector("header"), n = t ? (t == null ? void 0 : t.offsetHeight) + 40 : 0;
    return e.getBoundingClientRect().top - n + window.scrollY;
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
    var r;
    const n = e.parentNode;
    return n === null || n.tagName === "body" ? null : (r = n.parentNode) != null && r.querySelector(t) ? n : A.getParent(n, t);
  }
  static append(e, t) {
    if (e) {
      const n = document.createElement("div");
      n.innerHTML = t != null && t.nodeType ? t.outerHTML : t;
      const r = n == null ? void 0 : n.children[0];
      if (r)
        return e.appendChild(r);
    }
    return null;
  }
  static replace(e, t) {
    e && t && (e.innerHTML = t.innerHTML);
  }
  static generateUrl(e, t, n) {
    let r;
    return e && t && (r = e.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), r = t + A.urlSeperator + r.replace(/-+$/, "") + "-" + n), r;
  }
  static toBase64(e) {
    return new Promise((t, n) => {
      const r = new FileReader();
      r.readAsDataURL(e), r.onload = () => {
        const i = r.result.split(",")[1];
        t(i);
      }, r.onerror = (i) => n(i);
    });
  }
  static toSize(e) {
    const t = ["Bytes", "KB", "MB", "GB", "TB"];
    if (e == 0) return "0 Byte";
    const n = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
    return (e / Math.pow(1024, n)).toFixed(1) + " " + t[n];
  }
  static camalCaseToSnakeCase(e) {
    return e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
  }
  static animateValue(e, t, n, r, i = A.priceFormatter) {
    let d = null;
    const h = (u) => {
      d || (d = u);
      const g = Math.min((u - d) / r, 1), c = g * (n - t) + t, C = i.format(c);
      e.innerHTML = C, g < 1 && window.requestAnimationFrame(h);
    };
    window.requestAnimationFrame(h);
  }
  static isOutsideOf(e, t) {
    const n = t.composedPath ? t.composedPath() : t.path;
    return n ? !n.some((r) => r.className && r.className.includes && r.className.includes(e)) : !1;
  }
  static getExtension(e) {
    return e.split(".").pop();
  }
  static validateVueProps(e) {
    var i;
    const t = (i = e == null ? void 0 : e.$) == null ? void 0 : i.propsOptions[0], n = e == null ? void 0 : e.$props, r = { props: {} };
    return Object.keys(n).map((d) => {
      let h = n[d];
      h === "" && (h = t[d].default), r.props[d] = h;
    }), r;
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
    const e = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), t = A.randomRange(0, 8), n = A.randomRange(0, 16);
    return "u" + [e.substring(t, t + 8), e.substring(n, n + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(e) {
    let t = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const n = A.getBreakpoint();
    return t.indexOf(e) >= t.indexOf(n);
  }
  static isUpperBreakpoint() {
    return !A.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(e) {
    let t;
    const n = e.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), r = e.match(/youtu\.be\/(.{11})/);
    return n ? t = n[2] : r && (t = r[1]), `https://i1.ytimg.com/vi/${t}/maxresdefault.jpg`;
  }
  static truncateWords(e, t) {
    if (!e) return;
    const n = e.split(" "), r = n.slice(0, t).join(" ");
    return n.length > t ? r + " ..." : r;
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
  static findRecursive(e, t, n) {
    let r = !1, i, d, h;
    function u(g, c, C, L) {
      if (!r) {
        if (c(g, d)) {
          r = !0, i = L(g, C);
          return;
        }
        for (let T in g)
          typeof g[T] == "object" && (g === h && (d = T), u(g[T], c, g, L));
      }
    }
    return h = e, u(e, t, e, n), i;
  }
  static storageSave(e, t, n = !0) {
    localStorage.setItem(A.storagePrefix + e, n ? JSON.stringify(t) : t);
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
    let n = e.split("-"), r = n[0].trim();
    r.includes(":") || (r += ":00"), r.length === 4 && (r = "0" + r);
    let i = n[1].trim().replace(` ${t}`, "");
    return i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i), `${r} - ${i} ${t}`;
  }
  static convertToDate(e) {
    const t = e.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (t) {
      const r = parseInt(t[1], 10), i = parseInt(t[2], 10) - 1, d = parseInt(t[3], 10);
      return new Date(d, i, r);
    }
    return null;
  }
  static XMLtoJSON(e) {
    let t = {};
    if (e.nodeType === Node.ELEMENT_NODE) {
      if (e.attributes.length > 0) {
        t["@attributes"] = {};
        for (let n = 0; n < e.attributes.length; n++) {
          const r = e.attributes.item(n);
          t["@attributes"][r.nodeName] = r.nodeValue;
        }
      }
    } else (e.nodeType === Node.TEXT_NODE || e.nodeType === Node.CDATA_SECTION_NODE) && (t = e.nodeValue);
    if (e.hasChildNodes())
      for (let n = 0; n < e.childNodes.length; n++) {
        const r = e.childNodes.item(n), i = r.nodeName;
        if (typeof t[i] > "u")
          t[i] = this.XMLtoJSON(r);
        else {
          if (typeof t[i].push > "u") {
            const d = t[i];
            t[i] = [], t[i].push(d);
          }
          t[i].push(this.XMLtoJSON(r));
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
      const h = e.replace(/--|var\(/, "").replace(/\)$/, ""), u = getComputedStyle(document.documentElement), g = 4;
      t = u.getPropertyValue(h).trim(), t.length === g && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);
    }
    const n = t || e, r = A.red(n), i = A.green(n), d = A.blue(n);
    return `${r}, ${i}, ${d}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
S(A, "defaultLang", "de"), S(A, "urlSeperator", "#"), S(A, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), S(A, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
S(A, "storybookPath", "/shared-components"), S(A, "decodeHTML", (e) => new DOMParser().parseFromString(e, "text/html").documentElement.textContent), S(A, "intersection", (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return n * r;
}), S(A, "debounce", function(e, t, n) {
  let r;
  return function() {
    const i = this, d = arguments;
    var h = function() {
      r = null, n || e.apply(i, d);
    }, u = n && !r;
    clearTimeout(r), r = setTimeout(h, t), u && e.apply(i, d);
  };
});
let p = A;
const Ke = {
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
function Xe(s, e, t, n, r, i) {
  return a(), o("span", {
    class: f(i.classList),
    style: O(i.parentStyle)
  }, [
    (a(), x(me(t.icon), V(i.settings, {
      color: s.props.color,
      closed: t.closed,
      step: t.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const q = /* @__PURE__ */ k(Ke, [["render", Xe]]), Ze = {
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
}, Ye = { class: "badge__text" }, Qe = {
  key: 0,
  class: "badge__icon"
};
function $e(s, e, t, n, r, i) {
  const d = q;
  return a(), o("div", {
    class: f(i.classList),
    style: O(i.style)
  }, [
    l("div", Ye, y(t.text), 1),
    t.icon ? (a(), o("div", Qe, [
      v(d, {
        icon: t.icon,
        color: "var(--color-badge-icon)",
        size: "medium"
      }, null, 8, ["icon"])
    ])) : m("", !0)
  ], 6);
}
const Ee = /* @__PURE__ */ k(Ze, [["render", $e]]), _ = {
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
}, et = {
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
}, tt = {
  tagName: "carousel",
  components: {
    "carousel-item": et
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
}, st = { class: "carousel__container" }, it = { class: "carousel__row" }, nt = {
  class: "carousel__row-section",
  ref: "row-section"
}, rt = { class: "carousel__row-section" };
function at(s, e, t, n, r, i) {
  const d = de("carousel-item");
  return a(), o("div", {
    class: f(i.classList),
    ref: "carousel",
    style: O(i.style)
  }, [
    l("div", st, [
      l("div", it, [
        l("section", nt, [
          (a(!0), o(b, null, E(i.jsonItems, (h, u) => (a(), x(d, {
            item: h,
            key: u
          }, null, 8, ["item"]))), 128))
        ], 512),
        l("section", rt, [
          (a(!0), o(b, null, E(i.jsonItems, (h, u) => (a(), x(d, {
            item: h,
            key: u
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const lt = /* @__PURE__ */ k(tt, [["render", at]]), ot = {
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
}, ct = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, dt = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, ht = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function ut(s, e, t, n, r, i) {
  return t.icon === "site/mail" && t.noSpan === !0 ? (a(), o("svg", ct, [
    l("title", null, y(t.icon), 1),
    e[0] || (e[0] = _e('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : t.icon == "site/mail" ? (a(), o("span", {
    key: 1,
    class: f(i.classList)
  }, [
    (a(), o("svg", dt, [
      l("title", null, y(t.icon), 1),
      e[1] || (e[1] = _e('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : t.icon == "site/phone" ? (a(), o("span", {
    key: 2,
    class: f(i.classList)
  }, [
    (a(), o("svg", ht, [
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
  ], 2)) : m("", !0);
}
const ve = /* @__PURE__ */ k(ot, [["render", ut]]), mt = {
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
function gt(s, e, t, n, r, i) {
  return a(), o("div", {
    class: f(i.classList)
  }, null, 2);
}
const Te = /* @__PURE__ */ k(mt, [["render", gt]]), he = {
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
}, ft = {
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
}, ue = {
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
}, _t = {
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
}, fe = "https://res.cloudinary.com/c4a8/image/upload/", pt = {
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
      var s;
      return ["img__picture-wrapper", (s = this.imgSrcSetValue) == null ? void 0 : s.ratioClasses];
    },
    imgSrcSetValue() {
      return _t[this.imgSrcSets];
    },
    imgSrcSetSources() {
      var s, e;
      return (e = (s = this.imgSrcSetValue) == null ? void 0 : s.srcSets) == null ? void 0 : e.filter((t) => t.media);
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
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = he.sizes);
  },
  methods: {
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const s = this.getPreset(), e = this.getTransformationString(s);
      return { preset: s, transformationsString: e };
    },
    getPreset() {
      try {
        return this.preset ? ue.presets && ue.presets[this.preset] ? Object.assign(he, ue.presets[this.preset]) : he : { ...he, ...ue.presets.default };
      } catch (s) {
        console.error(s);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var s;
      return p.isTestingStorybook() ? this.img : ((s = this.img) == null ? void 0 : s.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(s) {
      return `${fe}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: e } = this.getSetup(), t = /w_\d+/.test(this.img), n = fe + e, r = `/${this.img}`;
      return t ? `${n}${r}` : `${n},w_${s.fallback_max_width}${r}`;
    },
    loadImage(s) {
      if (!this.canGenerateSrcSet()) return;
      const e = document.createElement("img");
      e.onload = () => {
        const t = e == null ? void 0 : e.naturalHeight, n = e == null ? void 0 : e.naturalWidth;
        let r;
        if (this.isSvg())
          r = {
            naturalHeight: t,
            naturalWidth: n
          };
        else {
          const { preset: i, transformationsString: d } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, r = {
            naturalHeight: t || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: n || (i == null ? void 0 : i.fallback_max_width)
          }, t && n && !this.isSvg() && this.buildSrcSet(i, d);
        }
        this.dimensions = r;
      }, e.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const e = [];
      for (const [n, r] of Object.entries(ft))
        s[n] && e.push(`${r}_${s[n]}`);
      return e.length > 0 ? e.join(",") : "";
    },
    buildSrcSet(s, e) {
      const t = [], n = s.steps, r = s.min_width, d = (s.max_width - r) / (n - 1), { naturalWidth: h } = this.dimensions;
      for (let u = 1; u <= n; u++) {
        const g = r + (u - 1) * d, c = g <= h, C = c ? g : h, T = `${this.hasPictureTag ? this.imgSrcSetImg : `${fe}${e},w_${C}/${this.img}`} ${C}w`;
        if (t.push(T), !c) break;
      }
      this.srcset = h < r ? "" : t.join(`, 
`);
    },
    isGif() {
      if (!this.img) return;
      const s = this.img.split(".")[1];
      return (s == null ? void 0 : s.toLowerCase()) === "gif";
    },
    isSvg() {
      var e;
      const s = p.getExtension(this.getCloudinaryBasePathLink());
      return (s == null ? void 0 : s.toLowerCase()) === "svg" || ((e = this.img) == null ? void 0 : e.indexOf(".svg")) !== -1;
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
}, yt = ["media", "srcset"], vt = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], bt = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function xt(s, e, t, n, r, i) {
  const d = Te;
  return i.hasPictureTag ? (a(), o("div", {
    key: 0,
    class: f(i.pictureWrapperClassList)
  }, [
    l("picture", null, [
      (a(!0), o(b, null, E(i.imgSrcSetSources, (h) => (a(), o("source", {
        key: h.params,
        media: h.media,
        srcset: i.getCloudinaryBasePathLink(h)
      }, null, 8, yt))), 128)),
      l("img", {
        onLoad: e[0] || (e[0] = (h) => i.loadImage(i.imgSrcSetImg)),
        ref: "image",
        src: i.imgSrcSetImg,
        loading: i.loading,
        class: f(i.classList),
        alt: t.alt,
        width: r.dimensions.naturalWidth,
        height: r.dimensions.naturalHeight,
        srcset: r.srcset,
        sizes: r.sizes,
        crossorigin: i.crossOriginValue
      }, null, 42, vt)
    ])
  ], 2)) : i.isLottie ? (a(), x(d, V({
    key: 1,
    data: i.jsonLottieData,
    class: i.classListComponent
  }, i.jsonLottieSettingsData), null, 16, ["data", "class"])) : (a(), o("img", {
    key: 2,
    onLoad: e[1] || (e[1] = (h) => i.loadImage()),
    ref: "image",
    src: i.source,
    loading: i.loading,
    class: f(i.classList),
    alt: t.alt,
    width: r.dimensions.naturalWidth,
    height: r.dimensions.naturalHeight,
    srcset: r.srcset,
    sizes: r.sizes,
    crossorigin: i.crossOriginValue
  }, null, 42, bt));
}
const X = /* @__PURE__ */ k(pt, [["render", xt]]), wt = {
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
}, St = { class: "cta__text" };
function kt(s, e, t, n, r, i) {
  const d = q;
  return a(), x(me(i.tag), {
    role: "button",
    class: f(i.classList),
    "data-text": t.text,
    href: t.href ? t.href : null,
    "data-analytics": t.analytics ? t.analytics : null,
    type: t.type ? t.type : null,
    target: i.targetValue ? i.targetValue : null,
    "data-alternative-href": t.alternativeHref ? t.alternativeHref : null,
    "data-trigger": t.trigger ? t.trigger : null
  }, {
    default: j(() => [
      l("span", St, y(t.text), 1),
      i.hasIcon ? (a(), x(d, {
        key: 0,
        icon: i.iconName,
        size: i.sizeValue
      }, null, 8, ["icon", "size"])) : m("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const W = /* @__PURE__ */ k(wt, [["render", kt]]), Ct = {
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
}, Lt = { class: "cta-list__item d-inline-block mr-3 mb-2" };
function Et(s, e, t, n, r, i) {
  const d = W;
  return a(), o("div", {
    class: f(i.classList)
  }, [
    (a(!0), o(b, null, E(i.ctaList, (h) => (a(), o("div", Lt, [
      v(d, V({ ref_for: !0 }, h, {
        text: i.text(h),
        href: i.href(h),
        type: i.type(h)
      }), null, 16, ["text", "href", "type"])
    ]))), 256))
  ], 2);
}
const Q = /* @__PURE__ */ k(Ct, [["render", Et]]), Tt = {
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
}, At = ["for"], Dt = ["name", "required"], Ot = { value: "" }, It = ["value"];
function Nt(s, e, t, n, r, i) {
  return a(), o(b, null, [
    l("label", {
      class: "input-label",
      for: t.id
    }, y(t.field.label), 9, At),
    l("select", {
      class: "form-control custom-select text-muted",
      name: t.id,
      required: i.required
    }, [
      l("option", Ot, y(t.field.placeholder), 1),
      (a(!0), o(b, null, E(t.options, (d) => (a(), o("option", {
        value: d.value
      }, y(d.text), 9, It))), 256))
    ], 8, Dt)
  ], 64);
}
const Ae = /* @__PURE__ */ k(Tt, [["render", Nt]]), I = {
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
}, Pt = {
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
      const s = this.extensions.map((e) => p.capitalize(e));
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
      var t, n, r;
      this.wrongTypeText = (t = window.i18n) == null ? void 0 : t.translate("formAttachmentsWrongType"), this.maxFilesText = (n = window.i18n) == null ? void 0 : n.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (r = window.i18n) == null ? void 0 : r.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(I.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
      const s = p.getParent(this.root, "form");
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
      var r;
      if (!s) return;
      const e = (r = this.file.getAttribute("accept")) == null ? void 0 : r.toLowerCase(), t = (e == null ? void 0 : e.split(",")) || [], n = p.getExtension(s.name);
      return t.includes(`.${n}`);
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
      var n;
      const e = (n = s == null ? void 0 : s.target) == null ? void 0 : n.files, t = this.getErrors(e);
      if (t) return this.showError(t);
      this.appendFiles(e);
    },
    handleClick(s) {
      this.files.files[s] && (this.files.items.remove(s), this.syncFiles());
    },
    toSize(s) {
      return p.toSize(s);
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
}, Vt = {
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
}, Mt = { class: "form__radio-control mb-1 vue-component" }, Ft = ["data-form-group", "required", "name", "id"], Rt = ["for"], Bt = ["name", "id", "placeholder", "data-form-group"], zt = ["name", "id", "data-form-group", "required"], Ht = ["for", "innerHTML"];
function jt(s, e, t, n, r, i) {
  var d, h, u;
  return a(), o("div", Mt, [
    (d = t.radio) != null && d.placeholder ? (a(), o(b, { key: 0 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        "data-form-group": t.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId
      }, null, 8, Ft),
      l("label", {
        class: "form__radio-label",
        for: i.otherId
      }, null, 8, Rt),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: t.name,
        id: i.idValue,
        placeholder: (h = t.radio) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, Bt)
    ], 64)) : (a(), o(b, { key: 1 }, [
      l("input", {
        class: "form__radio",
        type: "radio",
        name: t.name,
        id: i.idValue,
        "data-form-group": t.group,
        required: i.required,
        onChange: e[0] || (e[0] = (g) => i.changed(t.radio))
      }, null, 40, zt),
      l("label", {
        class: "form__radio-label",
        for: i.idValue,
        innerHTML: (u = t.radio) == null ? void 0 : u.label
      }, null, 8, Ht)
    ], 64))
  ]);
}
const be = /* @__PURE__ */ k(Vt, [["render", jt]]), qt = {
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
}, Ut = ["data-msg"], Gt = { class: "d-flex flex-wrap" };
function Wt(s, e, t, n, r, i) {
  var h, u;
  const d = be;
  return a(), o(b, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, Ut),
    l("div", Gt, [
      (a(!0), o(b, null, E((u = t.field) == null ? void 0 : u.radios, (g) => (a(), x(d, {
        class: "pr-10",
        radio: g,
        group: t.id,
        name: t.id,
        id: t.field.id + g.id,
        onActionChanged: e[0] || (e[0] = (c) => s.$emit("action-changed", c))
      }, null, 8, ["radio", "group", "name", "id"]))), 256))
    ])
  ], 64);
}
const De = /* @__PURE__ */ k(qt, [["render", Wt]]), Jt = {
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
}, Kt = { class: "form__checkbox-control custom-control custom-checkbox mb-1 vue-component" }, Xt = ["data-form-group", "required", "name", "id"], Zt = ["for"], Yt = ["name", "id", "placeholder", "data-form-group"], Qt = ["name", "id", "data-form-group", "required"], $t = ["for", "innerHTML"];
function es(s, e, t, n, r, i) {
  var d, h, u;
  return a(), o("div", Kt, [
    (d = t.checkbox) != null && d.placeholder ? (a(), o(b, { key: 0 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        "data-form-group": t.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId,
        onChange: e[0] || (e[0] = (...g) => i.handleChange && i.handleChange(...g))
      }, null, 40, Xt),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.otherId
      }, null, 8, Zt),
      l("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: i.idValue,
        id: i.idValue,
        placeholder: (h = t.checkbox) == null ? void 0 : h.placeholder,
        "data-form-group": t.group
      }, null, 8, Yt)
    ], 64)) : (a(), o(b, { key: 1 }, [
      l("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        name: i.idValue,
        id: i.idValue,
        "data-form-group": t.group,
        required: i.required,
        onChange: e[1] || (e[1] = (...g) => i.handleChange && i.handleChange(...g))
      }, null, 40, Qt),
      l("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.idValue,
        innerHTML: (u = t.checkbox) == null ? void 0 : u.label
      }, null, 8, $t)
    ], 64))
  ]);
}
const xe = /* @__PURE__ */ k(Jt, [["render", es]]), ts = {
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
}, ss = ["data-msg"];
function is(s, e, t, n, r, i) {
  var h, u;
  const d = xe;
  return a(), o(b, null, [
    l("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((h = t.field) == null ? void 0 : h.label), 9, ss),
    (a(!0), o(b, null, E((u = t.field) == null ? void 0 : u.checkboxes, (g) => (a(), x(d, {
      checkbox: g,
      group: i.groupId,
      id: t.field.id + g.id
    }, null, 8, ["checkbox", "group", "id"]))), 256))
  ], 64);
}
const Oe = /* @__PURE__ */ k(ts, [["render", is]]), N = class N {
  constructor(e) {
    this.root = e, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${_.IS_STARTING}`).forEach((e) => {
      e.classList.remove(_.IS_STARTING);
    });
  }
  mergeNodes(e, t) {
    const n = Array.from(t);
    return n.unshift(e), n;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(e) {
    const t = [];
    this.currentElements.forEach((n) => {
      e.srcElement !== n && t.push(n);
    }), this.currentElements = t;
  }
  handleAnimationEnd(e) {
    const t = N.getGroup(e.srcElement);
    if (t) {
      const n = parseInt(t.style.getPropertyValue(N.groupItemsLoadedProperty), 10) || 0;
      N.setGroupItemsLoaded(t, n + 1);
    }
    this.updateCurrentElement(e), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(e) {
    e.forEach((t) => {
      t.classList.add(_.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(N.endDataset, !0);
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
      t.forEach((n) => {
        var r;
        n.type === "attributes" && n.attributeName.startsWith(N.inViewportDataset) && ((r = n.target) == null ? void 0 : r.getAttribute(N.inViewportDataset)) === "true" && this.startAnimation();
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
    const r = (g) => {
      g.forEach((c) => {
        c.isIntersecting ? c.target.setAttribute(this.inViewportDataset, !0) : c.target.classList.contains("utility-animation--enter-exit") && c.target.removeAttribute(this.inViewportDataset);
      });
    }, i = new IntersectionObserver(r, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), d = new IntersectionObserver(r, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), h = new IntersectionObserver(r, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (e ? [e] : this.instances).forEach((g) => {
      N.hasSmallOffset(g) ? h.observe(g.root) : N.hasPercentageOffset(g) ? d.observe(g.root) : i.observe(g.root);
    });
  }
  static resetGroup(e) {
    this.setGroupItemsLoaded(e, 0), this.instances.forEach((t) => {
      if (this.getGroup(t.root) === e) {
        const r = t.root;
        t.currentElements = [r], r.removeAttribute("data-utility-animation-end"), t.startAnimation();
      }
    });
  }
  static initElement(e) {
    const t = e.$el ? e.$el : e, n = new this(t);
    return this.instances.push(n), n;
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
S(N, "rootSelector", ".utility-animation"), S(N, "inViewportDataset", "data-utility-animation-in-viewport"), S(N, "endDataset", "data-utility-animation-end"), S(N, "instances", []), S(N, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let G = N;
const ns = {
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
    this.$refs.root && G.init([this.$refs.root]);
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
}, rs = ["for"], as = ["id", "name", "placeholder", "required", "readonly", "data-msg"], ls = ["name", "value"], os = ["for"], cs = ["type", "id", "name", "data-msg", "value", "placeholder", "required", "readonly"], ds = ["id"];
function hs(s, e, t, n, r, i) {
  var L, T, M, ee, te, w;
  const d = xe, h = Oe, u = be, g = De, c = Pt, C = Ae;
  return t.field.id !== "_gotcha" ? (a(), o("div", {
    key: 0,
    class: f(i.classList),
    "data-utility-animation-step": "1",
    ref: "root"
  }, [
    t.field.type === "textarea" ? (a(), o(b, { key: 0 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, rs),
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
      }, null, 40, as)
    ], 64)) : t.field.type === "checkbox" ? (a(), x(d, {
      key: 1,
      checkbox: t.field,
      id: t.id,
      onFormFieldUpdated: e[2] || (e[2] = (D) => i.handleFormFieldUpdate(D))
    }, null, 8, ["checkbox", "id"])) : t.field.type === "hidden" ? (a(), o("input", {
      key: 2,
      type: "hidden",
      name: t.id,
      value: i.value
    }, null, 8, ls)) : t.field.checkboxes ? (a(), x(h, {
      key: 3,
      field: t.field,
      id: t.id
    }, null, 8, ["field", "id"])) : t.field.type === "radio" ? (a(), x(u, {
      key: 4,
      radio: t.field,
      id: t.id
    }, null, 8, ["radio", "id"])) : t.field.radios ? (a(), x(g, {
      key: 5,
      field: t.field,
      id: t.id,
      onActionChanged: e[3] || (e[3] = (D) => s.$emit("action-changed", D))
    }, null, 8, ["field", "id"])) : t.field.type === "file" ? (a(), x(c, {
      key: 6,
      description: (L = t.field.formAttachments) == null ? void 0 : L.description,
      text: (T = t.field.formAttachments) == null ? void 0 : T.text,
      extensions: (M = t.field.formAttachments) == null ? void 0 : M.extensions,
      maxSize: (ee = t.field.formAttachments) == null ? void 0 : ee.maxSize,
      id: (te = t.field.formAttachments) == null ? void 0 : te.id,
      required: (w = t.field.formAttachments) == null ? void 0 : w.required,
      "required-msg": i.getRequiredMsg(t.field.formAttachments)
    }, null, 8, ["description", "text", "extensions", "maxSize", "id", "required", "required-msg"])) : t.field.type === "select" ? (a(), x(C, {
      key: 7,
      field: t.field,
      options: t.options,
      id: t.id
    }, null, 8, ["field", "options", "id"])) : t.field.type ? (a(), o(b, { key: 8 }, [
      l("label", {
        class: "input-label",
        for: t.id
      }, y(t.field.label), 9, os),
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
      }, null, 40, cs)
    ], 64)) : m("", !0),
    t.hasError ? (a(), o("div", {
      key: 9,
      id: i.errorId,
      class: "invalid-feedback"
    }, y(i.getRequiredMsg(t.field)), 9, ds)) : m("", !0)
  ], 2)) : m("", !0);
}
const Ie = /* @__PURE__ */ k(ns, [["render", hs]]), us = {
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
function ms(s, e, t, n, r, i) {
  return t.text ? (a(), x(me(i.tag), {
    key: 0,
    class: f(i.classList),
    innerHTML: t.text,
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (a(), x(me(i.tag), {
    key: 1,
    class: f(i.classList),
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, {
    default: j(() => [
      oe(s.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const U = /* @__PURE__ */ k(us, [["render", ms]]), R = class R {
  constructor(e, t) {
    var n;
    e && (this.root = e, this.options = t, (n = this.options) != null && n.noInit || this.root.classList.add(_.INITIALIZED));
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
    const n = window[R.namespacePrefix][this.getInstancesKey()].filter((r) => (r == null ? void 0 : r.root) === e);
    return n ? n[0] : null;
  }
  static initElement(e, t) {
    const n = new this(e, t);
    return this.instances.push(n), this.expose(n), n;
  }
  static init(e) {
    this.instances = [];
    const t = e || document, n = `${this.rootSelector}:not(.${_.INITIALIZED})`;
    [].forEach.call(
      t.querySelectorAll(n),
      (r) => {
        this.initElement(r);
      }
    );
  }
};
S(R, "rootSelector", ""), S(R, "instances", []), S(R, "namespacePrefix", "baseComponents");
let pe = R;
class ce {
}
S(ce, "rootSelector", ".form-attachments"), S(ce, "base64Selector", ".form-attachments__base64");
const B = class B extends pe {
  constructor(e, t) {
    var n;
    super(e, t), e && (this.root = e, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = e.querySelector(this.formSelector), this.subject = e.querySelector(this.subjectSelector), this.company = e.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = t, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (n = this.options) != null && n.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
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
    for (const [t, n] of e.entries())
      this.prefillFormValue(t, n);
  }
  prefillFormValue(e, t) {
    const n = this.form;
    if (!n) return;
    const r = n.querySelector(`input[name="${e}"],textarea[name="${e}"]`);
    r && (r.value = t);
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
    const t = new FormData(e), n = [];
    for (let r of t)
      n.push(encodeURIComponent(r[0]) + "=" + encodeURIComponent(r[1]));
    return n.join("&");
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
    let t = !0, n = !0;
    this.hasAttachments() && (t = this.validateAttachments());
    for (const [r, i] of Object.entries(this.groups))
      this.isValidGroup(i) || (t = !1, this.addGroupError(i, n), n = !1);
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
    for (let n = 0; n < e.length; n++) {
      const r = this.getGroupParent(e[n]);
      e[n].classList.add(_.ERROR), r && (t && p.scrollIntoView(r), this.addErrorMessage(r));
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
      const n = this.getGroupParent(e[t]);
      e[t].classList.remove(_.ERROR), n && this.delErrorMessage(n);
    }
  }
  isValidGroup(e) {
    const t = e.length;
    let n = !1;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      if (i.type === "checkbox" && i.checked)
        n = !0;
      else if (i.type === "radio" && i.checked)
        n = !0;
      else {
        const d = i.closest('input[type="text"]');
        d && !n && d.value.length >= this.minLengthOther && (n = !0);
      }
    }
    return n;
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
    return e ? e.filter((n) => n.getAttribute("type") === t) : null;
  }
  handleGroupError(e, t) {
    e.checked ? this.delGroupError(t) : this.isValidGroup(t) || this.addGroupError(t);
  }
  handleLiveValidation(e) {
    const t = e.currentTarget;
    if (t) {
      const n = this.getGroupByName(t.dataset.formGroup);
      if (!n) return;
      const r = this.groupFilter(n, "checkbox"), i = this.groupFilter(n, "radio");
      t.getAttribute("type") === "checkbox" ? this.handleGroupError(t, r) : t.getAttribute("type") === "radio" ? this.handleGroupError(t, i) : this.isValidGroup(n) ? this.delGroupError(n) : this.addGroupError(n);
    }
  }
  getGroupParent(e) {
    var t;
    return (t = e.closest(".js-form-message")) == null ? void 0 : t.querySelector("[data-msg]");
  }
  addGroupValidation(e) {
    if (this.getGroupParent(e)) {
      const n = e.dataset.formGroup;
      this.groups[n] || (this.groups[n] = []), this.groups[n].push(e);
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
    const t = e.querySelectorAll('input[type="text"], input[type="email"], textarea'), n = [];
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (this.isOptionalInputInvisible(i)) continue;
      let d;
      (i.type === "text" || i.type === "email" || i.tagName === "TEXTAREA") && (d = i.value), n.push({
        input: i,
        value: d
      });
    }
    return n;
  }
};
S(B, "rootSelector", ".form"), S(B, "instances", []), S(B, "delimiter", "-formHelper-"), S(B, "noCustomSubmitClass", "form--no-custom-submit"), S(B, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let z = B;
const gs = {
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
        `${p.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${p.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${p.isTrue(this.container) === !0 ? "container" : ""}`,
        `${p.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((s = this.form) == null ? void 0 : s.noCustomSubmit) === !0 ? z.noCustomSubmitClass : "",
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
      const s = [];
      let e = 0, t = [];
      return this.form.fields.forEach((n) => {
        if (n.rowStart || n.rowEnd)
          n.rowStart ? (s[e] = t, t.push(n), n.rowEnd && (t = [], e++)) : n.rowEnd && (t.push(n), t = [], e++);
        else {
          if (t.push(n), s[e]) return;
          s[e] = t, t = [], e++;
        }
      }), s;
    }
  },
  created() {
    this.originalAction = this.formAction = this.form.action;
  },
  mounted() {
    this.formInstance = new z(this.$refs.root), this.novalidateValue = "novalidate", this.$refs.headline && G.init([this.$refs.headline]);
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
      return p.isTrue(this.hasUuid) ? z.getId(t) : t;
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
      const e = s.value, t = s.getAttribute("type"), n = s.hasAttribute("required");
      if (this.removeFieldError(s), t === "checkbox") {
        const r = s.checked;
        if (n && !r)
          return this.addFieldError(s), !1;
      } else {
        if (n && !e)
          return this.addFieldError(s), !1;
        if (t === "email" && !((i) => /\S+@\S+\.\S+/.test(i))(e))
          return this.addFieldError(s), !1;
      }
      return this.addFieldValid(s), !0;
    },
    addFieldValid(s) {
      s.classList.add(_.VALID);
    },
    removeFieldError(s) {
      delete this.errors[s.id], s.classList.remove(_.ERROR);
    },
    addFieldError(s) {
      this.errors[s.id] = !0, s.classList.remove(_.VALID), s.classList.add(_.ERROR);
    },
    validate() {
      const s = this.$refs.root.querySelectorAll(
        `.form-field:not(.${_.HIDDEN}) .form-control[required],
        .form-field:not(.${_.HIDDEN}) .form__checkbox[required]`
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
}, fs = { class: "row" }, _s = { class: "col-sm-12" }, ps = ["innerHTML"], ys = ["method", "action", "novalidate"];
function vs(s, e, t, n, r, i) {
  const d = U, h = Ie, u = W;
  return a(), o("div", {
    class: f(i.classList),
    ref: "root"
  }, [
    l("div", {
      class: f(i.rowClassList)
    }, [
      l("div", {
        class: f(i.wrapperClassList)
      }, [
        t.form.headline ? (a(), o("div", {
          key: 0,
          class: f(i.headlineClassList),
          "data-utility-animation-step": "1",
          ref: "headline"
        }, [
          l("div", fs, [
            l("div", _s, [
              v(d, {
                text: t.form.headline,
                level: t.form.level,
                id: t.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              l("p", {
                class: f(i.sublineClassList),
                innerHTML: t.form.subline
              }, null, 10, ps)
            ])
          ])
        ], 2)) : m("", !0),
        l("form", {
          class: "form__form js-validate mt-6",
          method: i.method,
          action: r.formAction,
          novalidate: i.novalidate,
          onSubmit: e[1] || (e[1] = (...g) => i.handleSubmit && i.handleSubmit(...g))
        }, [
          (a(!0), o(b, null, E(i.preparedBlocks, (g) => (a(), o(b, null, [
            g.length > 0 ? (a(), o("div", {
              key: 0,
              class: f(i.getBlockClassList(g[0]))
            }, [
              (a(!0), o(b, null, E(g, (c) => (a(), o("div", {
                class: f(i.getFieldClassList(c))
              }, [
                v(h, {
                  field: c,
                  options: i.getOptions(c),
                  "replace-value": t.replaceValue,
                  id: i.getId(c),
                  "has-animation": i.hasAnimationValue,
                  onActionChanged: i.updateAction,
                  "has-error": i.hasError(c),
                  onFormFieldUpdated: e[0] || (e[0] = (C) => i.handleFormFieldUpdate(C))
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged", "has-error"])
              ], 2))), 256))
            ], 2)) : m("", !0)
          ], 64))), 256)),
          l("div", {
            class: f(i.formClassList)
          }, [
            v(u, {
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
        ], 40, ys)
      ], 2)
    ], 2)
  ], 2);
}
const Ne = /* @__PURE__ */ k(gs, [["render", vs]]), bs = {
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
}, xs = ["viewBox"], ws = ["fill", "points"];
function Ss(s, e, t, n, r, i) {
  return a(), o("figure", {
    class: f("svgshape " + i.svgShapeClasses),
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
      }, null, 8, ws)
    ], 8, xs))
  ], 6);
}
const we = /* @__PURE__ */ k(bs, [["render", Ss]]), ks = {
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
      var s, e, t, n;
      return {
        "--color-contact-background": this.bgColor || ((s = this.contact) == null ? void 0 : s.bgColor),
        "--contact-copy-color": this.color || ((e = this.contact) == null ? void 0 : e.color),
        "--color-contact-box-background": this.boxBgColor || ((t = this.contact) == null ? void 0 : t.boxBgColor),
        "--contact-box-copy-color": this.boxColor || ((n = this.contact) == null ? void 0 : n.boxColor)
      };
    }
  }
}, Cs = { class: "contact__subline font-weight-bold font-size-2" }, Ls = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, Es = {
  key: 0,
  class: "contact__person-quote"
}, Ts = { class: "contact__icon" }, As = { class: "contact__image-quote" }, Ds = { class: "contact__image-spacer" }, Os = { class: "contact__quote font-size-3 middle font-weight-light" }, Is = { class: "d-flex flex-column" }, Ns = { class: "font-weight-light" }, Ps = { class: "contact__image" }, Vs = { class: "contact__name font-size-4 my-6 mx-5" }, Ms = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, Fs = ["href"], Rs = { class: "streamline-sm mr-4" }, Bs = { class: "contact__detail-text" }, zs = {
  key: 0,
  class: "contact__notes"
}, Hs = { class: "contact__notes-spacing streamline-sm mr-4" }, js = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, qs = ["href"], Us = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, Gs = ["href"], Ws = {
  key: 0,
  class: "contact__detail-quote"
}, Js = ["href"], Ks = { class: "streamline-sm mr-4" }, Xs = {
  key: 0,
  class: "contact__notes"
}, Zs = { class: "contact__notes-spacing streamline-sm mr-4" };
function Ys(s, e, t, n, r, i) {
  const d = we, h = U, u = Ne, g = Q, c = q, C = X, L = ve;
  return a(), o(b, null, [
    t.svgShape ? (a(), x(d, {
      key: 0,
      align: t.svgShape.align,
      peak: t.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : m("", !0),
    t.contact ? (a(), o("div", {
      key: 1,
      class: f(i.classList),
      style: O(i.styleObject)
    }, [
      l("div", {
        class: f(i.contactContainerClass)
      }, [
        l("div", {
          class: f(i.contactRowClass)
        }, [
          t.collapsed ? m("", !0) : (a(), o("div", {
            key: 0,
            class: f(["contact__form", i.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            v(h, {
              text: t.contact.headline,
              classes: t.contact.headlineClasses,
              level: t.level
            }, null, 8, ["text", "classes", "level"]),
            l("span", Cs, y(t.contact.subline), 1),
            t.contact.form ? (a(), x(u, {
              key: 0,
              form: t.contact.form,
              ajax: t.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : m("", !0),
            t.contact.buttons ? (a(), o("div", Ls, [
              v(g, {
                list: t.contact.buttons
              }, null, 8, ["list"])
            ])) : m("", !0)
          ], 2)),
          l("div", {
            class: f(["contact__box", i.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            l("div", {
              class: f(["contact__person", i.contactLight])
            }, [
              t.quote ? (a(), o("div", Es, [
                l("div", Ts, [
                  v(c, { icon: "quote" })
                ]),
                l("div", As, [
                  l("div", Ds, [
                    v(C, {
                      img: t.contact.person.image,
                      cloudinary: t.contact.person.cloudinary,
                      alt: t.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                l("div", Os, y(t.contact.person.quote), 1),
                l("div", Is, [
                  l("span", null, y(t.contact.person.quotee), 1),
                  l("span", Ns, y(t.contact.person.quoteeTitle), 1)
                ])
              ])) : (a(), o(b, { key: 1 }, [
                l("div", Ps, [
                  v(C, {
                    img: t.contact.person.image,
                    cloudinary: t.contact.person.cloudinary,
                    alt: t.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                l("div", Vs, y(t.contact.person.name), 1),
                l("div", Ms, [
                  (a(!0), o(b, null, E(t.contact.person.details, (T, M) => (a(), o("div", {
                    key: M,
                    class: f(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !M === t.contact.person.details.length - 1 }])
                  }, [
                    l("a", {
                      href: T.href,
                      class: "d-flex custom"
                    }, [
                      l("span", Rs, [
                        T.icon === "site/mail" ? (a(), x(L, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), x(L, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      l("span", Bs, y(T.text), 1)
                    ], 8, Fs),
                    T.notes ? (a(), o("div", zs, [
                      l("span", Hs, [
                        T.icon === "site/mail" ? (a(), x(L, {
                          key: 0,
                          icon: "site/mail"
                        })) : (a(), x(L, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      H(" " + y(T.notes), 1)
                    ])) : m("", !0)
                  ], 2))), 128)),
                  t.contact.person.number ? (a(), o("div", js, [
                    l("a", {
                      href: "tel:" + t.contact.person.number,
                      class: "custom"
                    }, [
                      v(L, { icon: "site/phone" }),
                      H(" " + y(t.contact.person.number), 1)
                    ], 8, qs)
                  ])) : m("", !0),
                  t.contact.person.mail ? (a(), o("div", Us, [
                    l("a", {
                      href: "mailto:" + t.contact.person.mail,
                      class: "custom"
                    }, [
                      v(L, { icon: "site/mail" }),
                      H(" " + y(t.contact.person.mail), 1)
                    ], 8, Gs)
                  ])) : m("", !0)
                ])
              ], 64))
            ], 2),
            t.quote ? (a(), o("div", Ws, [
              v(h, {
                text: t.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (a(!0), o(b, null, E(t.contact.person.details, (T, M) => (a(), o("div", {
                key: M,
                class: f(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !M === t.contact.person.details.length - 1 }])
              }, [
                l("a", {
                  href: T.href,
                  class: "custom"
                }, [
                  l("span", Ks, [
                    T.icon === "site/mail" ? (a(), x(L, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), x(L, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  H(" " + y(T.text), 1)
                ], 8, Js),
                T.notes ? (a(), o("div", Xs, [
                  l("span", Zs, [
                    T.icon === "site/mail" ? (a(), x(L, {
                      key: 0,
                      icon: "site/mail"
                    })) : (a(), x(L, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  H(" " + y(T.notes), 1)
                ])) : m("", !0)
              ], 2))), 128))
            ])) : m("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)) : m("", !0)
  ], 64);
}
const Qs = /* @__PURE__ */ k(ks, [["render", Ys]]), $s = {
  tagName: "content",
  props: {}
}, ei = {
  class: "page-content",
  "aria-label": "Content"
};
function ti(s, e, t, n, r, i) {
  return a(), o(b, null, [
    l("main", ei, [
      oe(s.$slots, "default")
    ]),
    oe(s.$slots, "below")
  ], 64);
}
const si = /* @__PURE__ */ k($s, [["render", ti]]), ii = {
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
      e && (s.isDetailsOpen = null, e.style.removeProperty("display"), e.style.removeProperty("height"), e.classList.remove(_.IS_COLLAPSING));
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
      e.classList.add(_.IS_COLLAPSING), setTimeout(() => {
        e.style.height = `${t}px`;
      });
    }
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number
  }
}, ni = { class: "row" }, ri = { class: "col-lg-8" }, ai = ["open"], li = ["onClick", "open"], oi = { class: "faq__summary" }, ci = { class: "faq__icon-frame" }, di = { class: "faq__icon" }, hi = ["innerHTML"];
function ui(s, e, t, n, r, i) {
  var u;
  const d = U, h = q;
  return a(), o("div", {
    class: f(i.classList),
    style: O(i.style)
  }, [
    l("div", ni, [
      l("div", ri, [
        v(d, {
          text: (u = t.headline) == null ? void 0 : u.text,
          level: i.headlineLevel,
          classes: i.headlineClasses,
          "data-utility-animation-step": "1"
        }, null, 8, ["text", "level", "classes"]),
        (a(!0), o(b, null, E(r.entriesWithState, (g) => (a(), o("details", {
          open: g.isDetailsOpen,
          class: "fade-in-bottom",
          "data-utility-animation-step": "1",
          style: O(i.getDelay(g))
        }, [
          l("summary", {
            onClick: He((c) => i.handleClick(g), ["prevent"]),
            open: g.isDetailsOpen
          }, [
            l("div", oi, y(g.summary), 1),
            l("div", ci, [
              l("div", di, [
                v(h, {
                  icon: "arrow-narrow",
                  direction: "clockwise",
                  size: "small"
                })
              ])
            ])
          ], 8, li),
          v(je, {
            onAfterLeave: (c) => i.afterLeave(g),
            onEnter: (c) => i.enter(g),
            onBeforeLeave: (c) => i.leave(g)
          }, {
            default: j(() => [
              qe(l("div", {
                class: "faq__content",
                ref_for: !0,
                ref: g.id
              }, [
                l("div", {
                  class: "faq__text",
                  innerHTML: g.text
                }, null, 8, hi)
              ], 512), [
                [Ue, g.isOpen]
              ])
            ]),
            _: 2
          }, 1032, ["onAfterLeave", "onEnter", "onBeforeLeave"])
        ], 12, ai))), 256))
      ])
    ])
  ], 6);
}
const mi = /* @__PURE__ */ k(ii, [["render", ui]]), gi = {
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
}, fi = { class: "row" };
function _i(s, e, t, n, r, i) {
  const d = U;
  return a(), o("div", {
    class: f(i.classList)
  }, [
    l("div", fi, [
      l("div", {
        class: f(["col-sm-12", i.animationStepClass, i.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        v(d, {
          level: t.level,
          text: t.text,
          classes: t.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const Pe = /* @__PURE__ */ k(gi, [["render", _i]]), pi = {
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
function yi(s, e, t, n, r, i) {
  return t.hideContainer ? oe(s.$slots, "default", { key: 1 }) : (a(), o("div", {
    key: 0,
    class: f(i.classList)
  }, [
    oe(s.$slots, "default")
  ], 2));
}
const Se = /* @__PURE__ */ k(pi, [["render", yi]]), vi = {
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
}, bi = {
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
      const s = this.$refs.animation;
      if (!s) return;
      const e = s.querySelector(".letter-switcher__letter"), t = this.isLower ? e.offsetHeight * 2 : e.offsetHeight;
      s.style.height = t + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (t, n) => {
          const r = n * 0.3, i = 0.07 * t.children.length;
          t.style.animation = `letter-switch ${i}s ${r}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const s = this.$refs["end-text"], e = this.$refs.end;
      if (!s || !e) return this.emitEnded();
      s.style.width = "0px", e.classList.remove(_.COLLAPSED), this.emitEnded();
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
};
class ge {
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
    let n = e, r;
    if (this.calculatedOffsetBottom >= n) {
      let i = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? r = n / i : r = (n - this.calculatedOffsetTop) / i;
    } else
      r = this.maxPercentage;
    return parseFloat(r.toFixed(2));
  }
  isOutOfViewport(e) {
    return e >= this.maxPercentage || e < 0;
  }
  setStickyPosition() {
    const e = this.getHeaderHeight(), t = window.scrollY, n = this.root.offsetHeight - window.innerHeight, r = n > 0 ? this.offsetBottom : this.offsetBottom - e;
    let i = n > 0 ? -n : 0;
    i = i - this.marginTop;
    const d = this.getPercentage(t, i), h = this.isOutOfViewport(d), u = t > r - window.innerHeight;
    !h && u ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = i + "px", this.root.classList.remove(_.OFF_SCREEN), this.root.classList.add(_.STICKY), this.updateClipPath(d)) : d === 0 ? (this.isUpdating = !1, this.root.classList.remove(_.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
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
    const n = p.getElementBgColor(e) || p.getElementBgColor(e.firstChild);
    this.spacer.style.setProperty(t, n), this.spacer.classList.add(_.HAS_BACKGROUND);
  }
  setDimensions() {
    const e = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > e ? e : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(_.STICKY);
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
S(ge, "rootSelector", ".is-sticky-scroller"), S(ge, "instances", []);
const xi = {
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
}, wi = {
  tagName: "hero",
  components: {
    "hero-pattern": xi
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
        this.hasStickyScroller ? ge.getRootClass() : ""
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
}, Si = { class: "hero__container container" }, ki = {
  key: 0,
  class: "hero__back-row row"
}, Ci = { class: "hero__back-col col" }, Li = { class: "hero__back back" }, Ei = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, Ti = { class: "hero__intro-col col" }, Ai = {
  key: 0,
  class: "hero__overline"
}, Di = {
  key: 2,
  class: "hero__content-shape"
}, Oi = ["innerHTML"], Ii = {
  key: 5,
  class: "hero__badges"
}, Ni = { class: "hero__badge-container" }, Pi = { class: "hero__background-shape" };
function Vi(s, e, t, n, r, i) {
  const d = de("hero-pattern"), h = X, u = q, g = bi, c = U, C = Q, L = vi, T = Se;
  return a(), o("div", {
    class: f(i.classList),
    style: O(r.style)
  }, [
    i.pattern ? (a(), x(d, {
      key: 0,
      class: "hero__pattern"
    })) : m("", !0),
    i.img ? (a(), x(h, {
      key: 1,
      class: "hero__background-img",
      cloudinary: i.background.cloudinary,
      img: i.img
    }, {
      default: j(() => e[0] || (e[0] = [
        H(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : m("", !0),
    l("div", Si, [
      l("main", {
        class: f(i.contentClassList)
      }, [
        i.hasBack ? (a(), o("div", ki, [
          l("div", Ci, [
            l("div", Li, [
              v(u, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : m("", !0),
        i.letterSwitcher ? (a(), x(g, V({ key: 1 }, i.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: i.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : m("", !0),
        i.overline || i.headlineText || i.subline ? (a(), o("div", Ei, [
          l("div", Ti, [
            i.overline ? (a(), o("span", Ai, y(i.overline), 1)) : m("", !0),
            i.headlineText ? (a(), x(c, {
              key: 1,
              class: f(i.headlineClassList),
              level: i.level,
              innerHTML: i.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : m("", !0),
            i.shapeInContent ? (a(), o("div", Di, [
              i.showShape ? (a(), x(h, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : m("", !0)
            ])) : m("", !0),
            i.subline ? (a(), o("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: i.subline
            }, null, 8, Oi)) : m("", !0),
            i.ctaList ? (a(), x(C, {
              key: 4,
              classes: "hero__cta-list",
              list: i.ctaList
            }, null, 8, ["list"])) : m("", !0),
            i.badges ? (a(), o("div", Ii, [
              (a(!0), o(b, null, E(i.badges, (M) => (a(), o("div", Ni, [
                v(h, V({
                  cloudinary: !0,
                  ref_for: !0
                }, M, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : m("", !0)
          ])
        ], 512)) : m("", !0),
        i.animation ? (a(), x(L, {
          key: 3,
          animation: i.animation,
          cta: i.cta,
          icon: i.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : m("", !0)
      ], 2)
    ]),
    i.shape ? (a(), x(T, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !i.showShapeContainer
    }, {
      default: j(() => [
        v(T, {
          classes: "hero__background-shape-content",
          hideContainer: !i.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: j(() => [
            l("div", Pi, [
              i.showShape ? (a(), x(h, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets,
                lazy: !0
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : m("", !0)
            ])
          ]),
          _: 1
        }, 8, ["hideContainer"])
      ]),
      _: 1
    }, 8, ["hideContainer"])) : m("", !0)
  ], 6);
}
const Mi = /* @__PURE__ */ k(wi, [["render", Vi]]), Fi = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && G.init([this.$refs.root]);
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
}, Ri = { class: "container space-lg-2" }, Bi = {
  key: 0,
  class: "row mb-9 mt-9"
}, zi = { class: "row" }, Hi = { class: "col" }, ji = ["innerHTML"];
function qi(s, e, t, n, r, i) {
  const d = U;
  return a(), o("figure", {
    class: f(i.classList),
    ref: "root"
  }, [
    l("div", Ri, [
      t.headline ? (a(), o("div", Bi, [
        l("div", {
          class: f(["col", t.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          v(d, { text: t.headline }, null, 8, ["text"])
        ], 2)
      ])) : m("", !0),
      l("div", zi, [
        l("div", Hi, [
          l("p", {
            class: f(["intro-text__copy fade-in-bottom", t.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: t.copy
          }, null, 10, ji)
        ])
      ])
    ])
  ], 2);
}
const Ui = /* @__PURE__ */ k(Fi, [["render", qi]]), Gi = {
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
      return p.isTrue(this.hidden) === !0;
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
      return p.isBelowBreakpoint("md");
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
}, Wi = {
  key: 0,
  class: "link-list__item"
};
function Ji(s, e, t, n, r, i) {
  var u, g;
  const d = q, h = W;
  return t.list ? (a(), o("figure", {
    key: 0,
    class: f(i.classList),
    ref: "root"
  }, [
    (u = t.list) != null && u.languages ? (a(), o("figcaption", {
      key: 0,
      class: f(i.classListTitle),
      "data-utility-animation-step": "1",
      onClick: e[0] || (e[0] = (...c) => i.handleClick && i.handleClick(...c))
    }, [
      H(y((g = t.list.languages[t.lang]) == null ? void 0 : g.title) + " ", 1),
      v(d, {
        class: "link-list__icon",
        icon: "expand",
        size: "small"
      })
    ], 2)) : m("", !0),
    l("ul", {
      class: f(i.classListList),
      "data-utility-animation-step": "1"
    }, [
      (a(!0), o(b, null, E(t.list.children, (c) => (a(), o(b, null, [
        c.languages && c.languages[t.lang] ? (a(), o("li", Wi, [
          v(h, {
            href: c.languages[t.lang].url,
            text: c.languages[t.lang].title,
            active: c.languages[t.lang].active,
            link: !0,
            reversed: "true",
            monochrome: "true"
          }, null, 8, ["href", "text", "active"])
        ])) : m("", !0)
      ], 64))), 256))
    ], 2)
  ], 2)) : m("", !0);
}
const Ve = /* @__PURE__ */ k(Gi, [["render", Ji]]), Me = {
  tagName: "slot-items",
  props: {
    items: {
      default: []
    }
  },
  render() {
    const s = this.items(), e = [];
    return s.forEach((t, n) => {
      var r;
      t.props && !((r = t == null ? void 0 : t.props) != null && r.style) && (t.props.style = `--utility-animation-index: ${n + 1}`), e.push(t);
    }), e;
  }
}, Ki = {
  tagName: "list-container",
  computed: {
    classValue() {
      return [
        "list-container vue-component",
        `${this.spacing ? this.spacing : ""}`,
        `${this.classes ? this.classes : ""}`,
        p.isTrue(this.headlineSticky) ? "list-container--headline-sticky has-headline-sticky" : ""
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
}, Xi = {
  class: "list-container__container utility-animation container headline-sticky__target fade-in-bottom",
  "data-utility-animation-step": "1"
}, Zi = { class: "row" }, Yi = { class: "col-sm-12" };
function Qi(s, e, t, n, r, i) {
  const d = U, h = Me;
  return a(), o("div", {
    class: f(i.classValue),
    style: O(i.colorStyling)
  }, [
    l("div", Xi, [
      l("div", Zi, [
        l("div", Yi, [
          v(d, {
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
const Fe = /* @__PURE__ */ k(Ki, [["render", Qi]]), $i = {
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
}, en = {
  tagName: "logo-list",
  components: {
    "logo-list-items": $i
  },
  mounted() {
    this.$refs.root && (this.sticky && ge.init([this.$refs.root]), G.init([this.$refs.root]));
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
      return p.isTrue(this.overlapping);
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
}, tn = { class: "logo-list__row row" };
function sn(s, e, t, n, r, i) {
  const d = de("logo-list-items"), h = Se;
  return a(), o("div", {
    class: f(i.classList),
    style: O(i.styles),
    ref: "root"
  }, [
    l("div", tn, [
      v(h, {
        classes: "logo-list__scroller",
        "hide-container": !i.isOverlapping,
        "hide-container-class": !0
      }, {
        default: j(() => [
          l("div", {
            class: f(["logo-list__col col d-flex", { "flex-wrap": !i.isOverlapping }])
          }, [
            v(d, {
              list: t.list,
              "is-overlapping": i.isOverlapping
            }, null, 8, ["list", "is-overlapping"]),
            i.isOverlapping ? (a(), x(d, {
              key: 0,
              list: t.list,
              "is-clone": "true",
              "is-overlapping": i.isOverlapping
            }, null, 8, ["list", "is-overlapping"])) : m("", !0)
          ], 2)
        ]),
        _: 1
      }, 8, ["hide-container"])
    ])
  ], 6);
}
const nn = /* @__PURE__ */ k(en, [["render", sn]]), rn = {
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
      this.$refs.svg.querySelectorAll("animate").forEach((r) => {
        (!s && !r.classList.contains("closed") || s && r.classList.contains("closed")) && t.push(r);
      });
      const n = e ? "beginElementAt" : "beginElement";
      t.forEach((r) => {
        r[n](1e3);
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
}, an = ["x1", "x2", "y1", "y2", "stroke-width"], ln = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], on = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], cn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], dn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], hn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], un = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], mn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], gn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], fn = ["x1", "x2", "y1", "y2", "stroke-width"], _n = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], pn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], yn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], vn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], bn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], xn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], wn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], Sn = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], kn = ["x1", "x2", "y1", "y2", "stroke-width"], Cn = ["begin", "from", "keyTimes", "keySplines"], Ln = ["begin", "to", "keyTimes", "keySplines"];
function En(s, e, t, n, r, i) {
  return a(), o("svg", V(t.settings, {
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
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.from.x1,
        to: i.lineData.line1.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, ln),
      l("animate", {
        attributeName: "x2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.from.x2,
        to: i.lineData.line1.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, on),
      l("animate", {
        attributeName: "y1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.from.y1,
        to: i.lineData.line1.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, cn),
      l("animate", {
        attributeName: "y2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.from.y2,
        to: i.lineData.line1.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, dn),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.to.x1,
        to: i.lineData.line1.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, hn),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.to.x2,
        to: i.lineData.line1.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, un),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.to.y1,
        to: i.lineData.line1.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, mn),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line1.to.y2,
        to: i.lineData.line1.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, gn)
    ], 8, an),
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
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.from.x1,
        to: i.lineData.line2.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, _n),
      l("animate", {
        attributeName: "x2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.from.x2,
        to: i.lineData.line2.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, pn),
      l("animate", {
        attributeName: "y1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.from.y1,
        to: i.lineData.line2.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, yn),
      l("animate", {
        attributeName: "y2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.from.y2,
        to: i.lineData.line2.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, vn),
      l("animate", {
        class: "closed",
        attributeName: "x1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.to.x1,
        to: i.lineData.line2.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, bn),
      l("animate", {
        class: "closed",
        attributeName: "x2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.to.x2,
        to: i.lineData.line2.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, xn),
      l("animate", {
        class: "closed",
        attributeName: "y1",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.to.y1,
        to: i.lineData.line2.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, wn),
      l("animate", {
        class: "closed",
        attributeName: "y2",
        begin: r.begin,
        dur: r.duration,
        from: i.lineData.line2.to.y2,
        to: i.lineData.line2.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Sn)
    ], 8, fn),
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
        begin: r.begin,
        dur: "0.01s",
        from: i.strokeWidth,
        to: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Cn),
      l("animate", {
        class: "closed",
        attributeName: "stroke-width",
        begin: r.begin,
        dur: "0.01s",
        to: i.strokeWidth,
        from: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: r.keyTimes,
        keySplines: i.effectiveKeySplines
      }, null, 8, Ln)
    ], 8, kn)
  ], 16);
}
const Tn = /* @__PURE__ */ k(rn, [["render", En]]), An = {
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
    this.$refs.root && G.init([this.$refs.root]);
  }
}, Dn = { class: "container space-2" }, On = { class: "row" }, In = { class: "product-blocks__content" }, Nn = { key: 0 }, Pn = { key: 1 }, Vn = {
  key: 2,
  class: "dashed"
}, Mn = { class: "product-blocks__buttons" };
function Fn(s, e, t, n, r, i) {
  const d = Pe, h = X, u = Q, g = W;
  return a(), o("div", {
    class: "product-blocks utility-animation container-fluid",
    style: O(i.backgroundColorStyle),
    ref: "root"
  }, [
    l("div", Dn, [
      t.headline ? (a(), o("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: O(i.animationStyle(1))
      }, [
        v(d, {
          text: t.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : m("", !0),
      l("div", On, [
        (a(!0), o(b, null, E(t.productBlocks.items, (c, C) => (a(), o("div", {
          key: C,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: O(i.animationStyle(C + 1))
        }, [
          l("div", {
            class: f(["product-blocks__block", { "text-center": c.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            l("div", In, [
              l("figure", {
                class: f(["product-blocks__img", { "mx-auto": c.copy === "" }, "mb-4"])
              }, [
                c.image ? (a(), x(h, {
                  key: 0,
                  img: c.image,
                  cloudinary: c.cloudinary,
                  alt: c.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : m("", !0)
              ], 2),
              c - t.headline ? (a(), o("h3", Nn, y(c.headline), 1)) : m("", !0),
              c.copy ? (a(), o("p", Pn, y(c.copy), 1)) : m("", !0),
              c.bulletList ? (a(), o("ul", Vn, [
                (a(!0), o(b, null, E(c.bulletList, (L, T) => (a(), o("li", { key: T }, y(L), 1))), 128))
              ])) : m("", !0)
            ]),
            l("div", Mn, [
              c.list ? (a(), x(u, {
                key: 0,
                list: c.list
              }, null, 8, ["list"])) : c.ctaText ? (a(), x(g, {
                key: 1,
                text: c.ctaText,
                href: c.ctaHref,
                link: c.link,
                target: c.target,
                type: c.type
              }, null, 8, ["text", "href", "link", "target", "type"])) : m("", !0)
            ])
          ], 2)
        ], 4))), 128))
      ])
    ])
  ], 4);
}
const Rn = /* @__PURE__ */ k(An, [["render", Fn]]), Bn = {
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
}, zn = { class: "product-stage__content container position-relative" }, Hn = { class: "space-top-2 space-top-lg-4 space-top-xl-5 text-white space-bottom-1 space-bottom-lg-2" }, jn = ["innerHTML"], qn = {
  key: 1,
  class: "row justify-content-center py-6"
}, Un = ["innerHTML"], Gn = {
  key: 2,
  class: "row justify-content-center py-6"
}, Wn = {
  key: 3,
  class: "space-bottom-2 space-bottom-lg-3"
}, Jn = ["href", "target", "id", "aria-controls", "aria-selected"], Kn = { class: "d-flex flex-column align-items-center position-relative z-index-2" }, Xn = {
  key: 1,
  class: "mb-6 flex-grow-1"
};
function Zn(s, e, t, n, r, i) {
  const d = de("pricing-slider"), h = Q, u = W, g = we;
  return a(), o("section", {
    class: "product-stage position-relative overflow-hidden",
    style: O({ backgroundColor: i.bgColor })
  }, [
    e[0] || (e[0] = _e('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>', 1)),
    l("div", zn, [
      l("div", Hn, [
        l("h1", null, y(t.stage.headline), 1),
        t.stage.description ? (a(), o("p", {
          key: 0,
          class: "col-lg-8 lead mt-5 px-0",
          innerHTML: t.stage.description
        }, null, 8, jn)) : m("", !0)
      ]),
      t.stage.slider && t.products ? (a(), x(d, {
        key: 0,
        slider: t.stage.slider,
        tooltip: t.stage.tooltip,
        "modal-id": t.stage.modalId
      }, null, 8, ["slider", "tooltip", "modal-id"])) : m("", !0),
      t.stage.additionalCopy ? (a(), o("div", qn, [
        l("div", {
          class: "text-center",
          innerHTML: t.stage.additionalCopy
        }, null, 8, Un)
      ])) : m("", !0),
      t.stage.buttons ? (a(), o("div", Gn, [
        v(h, {
          list: t.stage.buttons
        }, null, 8, ["list"])
      ])) : (a(), o("div", Wn)),
      i.cards ? (a(), o("ul", {
        key: 4,
        class: f(["row nav nav-pills", { "px-1 px-lg-0": i.cards.tabs }]),
        role: "tablist"
      }, [
        (a(!0), o(b, null, E(i.cards.list, (c, C) => (a(), o("li", {
          key: C,
          class: f([
            "col-lg-" + 12 / i.cards.list.length,
            { "px-1 px-lg-3 nav-item": i.cards.tabs, "mb-6 mb-md-8 mb-lg-0": !i.cards.tabs }
          ])
        }, [
          c.link ? (a(), o("a", {
            key: 0,
            href: c.link.href,
            target: c.link.target,
            class: f(["product-stage__tab h-100 rounded position-relative d-block", { active: i.cards.tabs && C === 0 }]),
            id: c.id ? c.id + "-tab" : "",
            "data-toggle": "pill",
            role: "tab",
            "aria-controls": c.id,
            "aria-selected": i.cards.tabs && C === 0
          }, [
            l("div", {
              class: f(["product-stage__tab-content position-relative h-100", { "product-stage__tab-content--alternative-border": i.cards.tabs }])
            }, [
              l("div", {
                class: f(["rounded", { "p-2 p-lg-8": c.link, "p-8 bg-white shadow-lg": !c.link }])
              }, [
                l("div", Kn, [
                  c.title ? (a(), o("h2", {
                    key: 0,
                    class: f(["font-size-3 mb-2 mb-md-6 text-center", { "text-primary": c.link }])
                  }, y(c.title), 3)) : m("", !0),
                  c.description ? (a(), o("p", Xn, y(c.description), 1)) : m("", !0),
                  c.cta !== c.href ? (a(), x(u, {
                    key: 2,
                    text: c.cta.text,
                    href: c.cta.href,
                    target: c.cta.target,
                    skin: c.cta.skin,
                    classes: "align-self-center z-index-2"
                  }, null, 8, ["text", "href", "target", "skin"])) : m("", !0)
                ])
              ], 2)
            ], 2)
          ], 10, Jn)) : m("", !0)
        ], 2))), 128))
      ], 2)) : m("", !0)
    ]),
    i.shape ? (a(), o(b, { key: 0 }, [
      i.shape.isActive !== !1 ? (a(), x(g, {
        key: 0,
        align: "bottom",
        peak: "left",
        obliquity: 4,
        classes: i.shapeClasses,
        color: i.shape.color
      }, null, 8, ["classes", "color"])) : m("", !0)
    ], 64)) : m("", !0)
  ], 4);
}
const Yn = /* @__PURE__ */ k(Bn, [["render", Zn]]), Qn = {
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
function $n(s, e, t, n, r, i) {
  return a(), o("svg", V(t.settings, {
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
const er = /* @__PURE__ */ k(Qn, [["render", $n]]);
class tr {
  constructor(e) {
    var n;
    this.position = e;
    const t = (n = window.i18n) == null ? void 0 : n.loader;
    t && t.then(() => {
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
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((e, t) => this.getEnhanchedDescription(t, e.name, e.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(e) {
    return /^\s*<[^>]+>/.test(e);
  }
  getEnhanchedDescription(e, t, n) {
    const r = e > 0 && t && t["#text"] ? `<h4>${this.trimNewlines(t["#text"])}</h4>` : "";
    let i = n.replace(/<\/?span[^>]*>/g, ""), d = 0;
    const h = 5, u = 2;
    return e === 0 ? i = i.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (g, c) => c.length > h && /^\s*$/.test(c) ? c : d < u && c.length > h && c[0] !== "," ? (d++, "<p>" + c.trim() + "</p>") : c).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(i) && i.length > h && (i = "<p>" + i + "</p>"), `${r}${i}`.replace(/<\/p><br><p>/g, "</p><p>");
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
      const n = t.split(" / "), r = n[0], i = n[1], d = "CSOC", h = "Managed Services", u = "Products";
      if (r === h && i !== d)
        t = h;
      else if (r === u)
        t = `${u} ${i}`;
      else
        switch (i) {
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
    var t, n, r, i;
    let e = this.getValue("employmentType");
    switch (e) {
      case "permanent":
        e = (t = window.i18n) == null ? void 0 : t.translate("positionTypePermanently");
        break;
      case "intern":
        e = (n = window.i18n) == null ? void 0 : n.translate("positionTypeInternship");
        break;
      case "trainee":
        e = (r = window.i18n) == null ? void 0 : r.translate("positionTypeTraining");
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
    const e = this.tags.find((r) => r.includes("ORDER_"));
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
const Y = {
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
class sr {
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
    var r;
    let t;
    e !== this.types.OPENINGS && ((r = this.options.apiUrl) != null && r.match(/.xml$/)) ? e === this.types.APPLICATIONS ? t = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : t = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : t = this.options.apiUrl ? this.options.apiUrl : this[`${e}Url`];
    const n = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${t}${n}`;
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
    const t = new tr(e), n = (i = this.options) == null ? void 0 : i.jobId;
    return t.description === null || n && t.id !== n || !this.filterPosition(t) ? null : {
      ...t.data,
      lang: this.lang
    };
  }
  filterPosition(e) {
    var t, n;
    return !((n = (t = this.filter) == null ? void 0 : t.tags) != null && n.length) || this.filter.tags.some((r) => e.tags.map((i) => i.toLowerCase()).includes(r.toLowerCase())) ? e : null;
  }
  convertData(e) {
    var i, d;
    const t = e, n = "workzag-jobs", r = (i = e[n]) == null ? void 0 : i.position;
    return t.objects = r.length ? (d = e[n]) == null ? void 0 : d.position.map((h) => this.convertPosition(h)).filter(Boolean) : [this.convertPosition(r)].filter(Boolean), t.meta = { offset: 0, limit: 20, total: 10 }, t;
  }
  getConvertedJson(e) {
    const n = new DOMParser().parseFromString(e, "application/xml"), r = p.XMLtoJSON(n);
    return this.convertData(r);
  }
  fetchXML(e) {
    return new Promise((t, n) => {
      e.then((r) => r.text()).then((r) => {
        t({
          json: () => this.getConvertedJson(r)
        });
      }).catch((r) => {
        console.error("Personio fetchXML Error:", r), n("Personio fetchXML Error");
      });
    });
  }
  fetch(e, t, n) {
    return new Promise((r, i) => {
      var d;
      if ((d = this.options) != null && d.client_name) {
        const h = fetch(e, t), u = n === this.responseTypes.XML ? this.fetchXML(h) : h;
        r(u);
      } else
        i("no client_name specified");
    });
  }
  async uploadDocuments(e) {
    const t = e.length > 0 ? e : [e], n = [];
    return Array.from(t).forEach((r) => {
      n.push(this.uploadDocument(r));
    }), Promise.all(n);
  }
  async uploadDocument(e) {
    const t = this.getUrl(this.types.DOCUMENTS), n = new FormData();
    return n.append(
      "file",
      new File([e], e.name, {
        type: e.type
      })
    ), this.fetch(t, {
      method: "POST",
      body: n,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(e, t, n) {
    return new Promise((r, i) => {
      this.uploadDocuments(e).then((d) => {
        if (this.hasValidResponseCodes(d)) return this.addFilesToFields(d, n, r, i);
        const h = d[0];
        h.json().then((u) => {
          if (u.errors) return i({ statusCode: h.status, errors: u.errors });
        }).catch((u) => i(u));
      }).catch((d) => i(d));
    });
  }
  addFilesToFields(e, t, n, r) {
    const i = t;
    i.files = [];
    const d = e.map((h) => h.json().then((u) => {
      i.files.push({
        uuid: u.uuid,
        original_filename: u.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(d).then(() => n(i)).catch((h) => r(h));
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
    return this.options.apiUrl ? e.status === Y.VALID : e.status === Y.VALID || e.status === Y.CREATED || e.status === Y.NO_CONTENT;
  }
  hasValidResponseCodes(e) {
    return e.every((t) => this.isValidResponseCode(t));
  }
  handleApply(e) {
    return new Promise((t, n) => {
      this.apply({ fields: e }).then((r) => {
        if (this.isValidResponseCode(r)) return t();
        r.json().then((i) => {
          if (i.errors) return n({ statusCode: r.status, errors: i.errors });
        }).catch((i) => n(i));
      }).catch((r) => n(r));
    });
  }
  getFormPayload(e, t) {
    const n = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, r = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let i = 0; i < e.length; i++) {
      const h = e[i].input, u = t.getName(h.name), g = p.camalCaseToSnakeCase(u);
      r.hasOwnProperty(g) ? n[g] = h.value : g !== "_gotcha" && n.attributes.push({
        id: this.getMappedFieldName(g),
        value: h.value
      });
    }
    return n;
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
class ir {
  constructor(e) {
    S(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = e, this.api = new sr(this.options), this.jobDataUrl = p.getSiteAssetPath(this.jobDataUrl);
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
  getUrl(e, t, n) {
    return this.api.getUrl(e, t, n);
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
        const n = t.split("-");
        e = n[n.length - 1];
      } else
        e = t.substring(1);
    else this.options.jobId && (e = this.options.jobId);
    return e;
  }
  getOrderedList(e) {
    const t = e.filter((r) => r.order !== void 0).sort((r, i) => i.order - r.order), n = e.filter((r) => r.order === void 0);
    return [...t, ...n];
  }
  getFormData(e) {
    const t = z.getFormData(e);
    return this.api.getFormPayload(t, z);
  }
  applyFileData(e, t, n) {
    return this.api.applyFileData(e, t, n);
  }
  handleApply(e) {
    return this.api.handleApply(e);
  }
}
const K = class K {
  constructor(e, t) {
    this.root = e, this.options = t, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(_.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new ir({
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
    var e, t, n;
    if ((e = this.close) == null || e.addEventListener("click", this.handleClose.bind(this)), (t = this.successClose) == null || t.addEventListener("click", this.handleClose.bind(this)), (n = this.errorClose) == null || n.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const r = this.root.parentNode, i = z.getInstance(this.form);
      if (r && this.isNotVueApp(r)) {
        const d = r.querySelector(this.buttonSelector);
        d == null || d.addEventListener("click", this.handleOpen.bind(this));
      } else r && this.addTriggerListeners();
      i && i.canHaveCustomSubmit() && (i.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(I.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((t) => t.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(e) {
    var n;
    e.stopImmediatePropagation();
    const t = (n = e == null ? void 0 : e.detail) == null ? void 0 : n.id;
    !t || t !== this.modalId || this.handleOpen(e);
  }
  handleApplicationSubmit(e) {
    e.preventDefault(), e.stopImmediatePropagation(), this.setLoading(!0);
    const t = this.form.querySelector(ce.base64Selector), n = t == null ? void 0 : t.value;
    let r = this.api.getFormData(this.form), i;
    if (n)
      i = {
        name: t.dataset.fileName
      };
    else {
      const d = this.form.querySelector('input[type="file"]');
      i = d == null ? void 0 : d.files;
    }
    i ? this.handleApplicationRequest(r, i, n) : this.handleError();
  }
  setLoading(e) {
    document.dispatchEvent(new CustomEvent(I.LOAD_MODAL, { detail: e }));
  }
  handleApplicationRequest(e, t, n) {
    this.api.applyFileData(t, n, e).then((r) => {
      this.api.handleApply(r).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(r);
      }).catch((i) => {
        this.setLoading(!1), this.handleError(i);
      });
    }).catch((r) => {
      this.setLoading(!1), this.handleError(r);
    });
  }
  handleApplicationSuccess(e) {
    this.root.classList.add(_.SUCCESS);
    const t = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (t) {
      t.dataset.text || (t.dataset.text = t.innerText);
      const n = e.first_name;
      t.innerText = `${t.dataset.text} ${n}`;
    }
  }
  handleError(e) {
    if (!e) return console.error("handle generic error");
    const t = typeof e == "string" ? e : e.message ? e.message : e, n = typeof e == "object" && e.statusCode ? e.statusCode : Y.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", t), n === Y.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(e) : this.root.classList.add(_.ERROR);
  }
  handlePayloadTooLarge(e) {
    document.dispatchEvent(new CustomEvent(I.FORM_ATTACHMENT_ERROR, { detail: e }));
  }
  handleClose(e) {
    e.preventDefault(), K.close(this.root);
  }
  handleOpen(e) {
    e.preventDefault(), K.open(this.root);
  }
  static initElement(e, t) {
    const n = new this(e, t);
    return this.instances.push(n), n;
  }
  static open(e) {
    e && window.$ && $(e).modal("show");
  }
  static close(e) {
    e && window.$ && ($(e).modal("hide"), K.resetModal(e));
  }
  static resetModal(e) {
    setTimeout(function() {
      const t = e.querySelector("form");
      t == null || t.reset(), e.classList.remove(_.SUCCESS), e.classList.remove(_.ERROR);
    }, 200);
  }
  static init(e) {
    this.instances = [];
    const t = e || document, n = `${this.rootSelector}:not(.${_.READY})`;
    [].forEach.call(t.querySelectorAll(n), (r) => {
      this.initElement(r);
    });
  }
};
S(K, "rootSelector", ".modal"), S(K, "instances", []);
let ye = K;
const nr = {
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
    this.observer.disconnect(), document.removeEventListener(I.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(s) {
      const e = document.querySelector("html");
      s ? e.classList.add(_.MODAL_OPEN) : (e.classList.remove(_.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const e = this.$refs.modal.querySelector(z.rootSelector);
      if (!e) return;
      const t = z.getInstance(e);
      t || z.reset(t.form);
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
}, rr = {
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
    this.$refs.root && G.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, ar = { class: "container" }, lr = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, or = {
  key: 3,
  class: "richtext"
}, cr = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, dr = ["innerHTML"], hr = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, ur = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function mr(s, e, t, n, r, i) {
  const d = X, h = Ee, u = U, g = Q, c = W, C = nr;
  return a(), o("div", {
    class: f(i.textImageClass),
    style: O(i.textImageStyle),
    ref: "root"
  }, [
    l("div", ar, [
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
            "col-lg-" + i.textImageFirstColWidthComputed,
            "col-xl-" + i.textImageFirstColWidthXl
          ]),
          onClick: e[0] || (e[0] = (...L) => i.handleClick && i.handleClick(...L)),
          style: O({ cursor: t.href ? "pointer" : void 0 })
        }, [
          v(d, {
            img: t.image,
            cloudinary: t.cloudinary,
            alt: t.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: t.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : m("", !0),
        l("div", {
          class: f(i.textImageFirstColClasses),
          onClick: e[1] || (e[1] = (...L) => i.handleClick && i.handleClick(...L)),
          style: O({ cursor: t.href ? "pointer" : void 0 })
        }, [
          l("div", {
            class: f(["text-image__first-col-wrapper", { "fade-in-bottom": !t.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            v(d, {
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
          class: f(i.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          t.badge ? (a(), x(h, {
            key: 0,
            text: t.badge.text,
            icon: t.badge.icon,
            uppercase: !t.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : m("", !0),
          t.overline ? (a(), o("span", lr, y(t.overline), 1)) : m("", !0),
          t.headlineText ? (a(), x(u, {
            key: 2,
            level: t.level,
            classes: i.textImageHeadlineClassesComputed
          }, {
            default: j(() => [
              H(y(t.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : m("", !0),
          t.subline ? (a(), o("span", or, y(t.subline), 1)) : m("", !0),
          t.subline ? (a(), o("div", cr, [
            v(d, {
              img: t.image,
              cloudinary: t.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: t.alt,
              lottie: t.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : m("", !0),
          l("div", {
            class: f(i.textImageLightTextClass),
            innerHTML: t.copy
          }, null, 10, dr),
          t.list ? (a(), o("div", hr, [
            v(g, { list: t.list }, null, 8, ["list"])
          ])) : m("", !0)
        ], 2),
        t.cta ? (a(), o("div", ur, [
          v(c, {
            text: t.cta.text,
            button: "",
            href: t.cta.href,
            trigger: t.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : m("", !0)
      ], 2)
    ]),
    t.modal ? (a(), x(C, {
      key: 0,
      form: t.modal.form,
      success: t.modal.success,
      error: t.modal.error,
      application: !0,
      clientName: t.modal.clientName,
      jobId: t.modal.jobId,
      apiUrl: t.modal.apiUrl,
      apiKey: t.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : m("", !0)
  ], 6);
}
const Re = /* @__PURE__ */ k(rr, [["render", mr]]), gr = {
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
function fr(s, e, t, n, r, i) {
  const d = Re, h = Fe;
  return a(), x(h, {
    classes: t.classes,
    headline: t.headline,
    level: t.level,
    "bg-color": t.bgColor,
    "headline-color": t.headlineColor,
    "headline-sticky": t.headlineSticky,
    spacing: t.spacing
  }, {
    default: j(() => [
      (a(!0), o(b, null, E(t.textImages, (u, g) => (a(), x(d, {
        key: g,
        image: u.image,
        alt: u.alt,
        "headline-text": u.headline,
        copy: u.copy,
        offset: !0,
        left: i.isLeft(g),
        spacing: u.spacing || "space-top-lg-2",
        index: g + 1,
        list: u.list
      }, null, 8, ["image", "alt", "headline-text", "copy", "left", "spacing", "index", "list"]))), 128))
    ]),
    _: 1
  }, 8, ["classes", "headline", "level", "bg-color", "headline-color", "headline-sticky", "spacing"]);
}
const _r = /* @__PURE__ */ k(gr, [["render", fr]]), Ce = {
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
}, pr = {
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
}, yr = {
  tagName: "v-footer",
  components: {
    "footer-slider": pr
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
      var s;
      return !((s = this.dataValue) != null && s.brandLogos);
    },
    style() {
      var s;
      return [(s = this.dataValue) != null && s.bgColor ? `background-color: ${this.dataValue.bgColor};` : ""];
    },
    dataValue() {
      return this.data ? { ...Ce, ...p.getJSON(this.data) } : { ...Ce };
    },
    links() {
      const s = this.lang.toLowerCase();
      if (s === "de" || s === "")
        return this.dataValue.links;
      {
        const e = p.capitalize(this.lang), t = this.dataValue[`links${e}`];
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
}, vr = { class: "container" }, br = { class: "footer__content-row row" }, xr = { class: "footer__content col-lg-12" }, wr = { class: "footer__address" }, Sr = ["href", "target"], kr = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, Cr = {
  key: 0,
  class: "nav-item"
}, Lr = {
  key: 1,
  class: "nav-item"
}, Er = {
  key: 2,
  class: "nav-item"
}, Tr = { class: "footer__postal-code" }, Ar = { class: "footer__city" }, Dr = { class: "footer__country" }, Or = {
  key: 4,
  class: "nav-item"
}, Ir = ["href"], Nr = { class: "media" }, Pr = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, Vr = { class: "media-body" }, Mr = {
  key: 5,
  class: "footer__nav-item nav-item"
}, Fr = { class: "footer__nav-link nav-link" }, Rr = { class: "footer__offices" }, Br = { class: "footer__office" }, zr = { key: 0 }, Hr = ["href"], jr = { class: "d-flex" }, qr = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, Ur = { class: "footer__mail media-body" }, Gr = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, Wr = ["href", "target"], Jr = { class: "footer__highlights" }, Kr = { class: "footer__partners" }, Xr = ["href", "target"], Zr = {
  key: 0,
  class: "footer__vertical-line"
}, Yr = {
  key: 0,
  class: "footer__content-row row"
}, Qr = { class: "footer__content col-lg-12" }, $r = { class: "mt-3" }, ea = { class: "row align-items-md-center mb-3" }, ta = { class: "col-md-8 mb-4 mb-md-0" }, sa = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, ia = { class: "nav-item mr-6 footer__links" }, na = ["href"], ra = { class: "col-md-4 text-md-right" }, aa = { class: "list-inline mb-0 footer__socials" }, la = { class: "list-inline-item" }, oa = ["title", "href"], ca = { class: "row pb-2" }, da = { class: "col" }, ha = { class: "text-white small" };
function ua(s, e, t, n, r, i) {
  const d = X, h = ve, u = q, g = de("footer-slider");
  return a(), o("footer", {
    class: f(i.classList),
    style: O(i.style),
    ref: "root"
  }, [
    l("div", vr, [
      l("div", br, [
        l("div", xr, [
          l("div", wr, [
            (a(!0), o(b, null, E(i.dataValue.logos, (c) => (a(), o("div", {
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
                v(d, V({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, Sr)
            ], 2))), 256)),
            (a(!0), o(b, null, E(i.locations, (c) => (a(), o("ul", kr, [
              c.name ? (a(), o("li", Cr, y(c.name), 1)) : m("", !0),
              c.over ? (a(), o("li", Lr, y(c.over), 1)) : m("", !0),
              c.street ? (a(), o("li", Er, y(c.street), 1)) : m("", !0),
              c.city ? (a(), o("li", {
                key: 3,
                class: f(["nav-item footer__address-block", c.postalReversed ? "is-reversed" : ""])
              }, [
                l("span", Tr, y(c.postalCode), 1),
                l("span", Ar, y(c.city), 1),
                l("span", Dr, y(c.country), 1)
              ], 2)) : m("", !0),
              c.number ? (a(), o("li", Or, [
                l("a", {
                  class: "nav-link media",
                  href: "tel:" + c.number
                }, [
                  l("span", Nr, [
                    l("span", Pr, [
                      v(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", Vr, y(c.number), 1)
                  ])
                ], 8, Ir)
              ])) : m("", !0),
              i.dataValue.offices ? (a(), o("li", Mr, [
                l("a", Fr, [
                  v(u, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  l("div", Rr, [
                    (a(!0), o(b, null, E(i.dataValue.offices, (C, L) => (a(), o("span", Br, [
                      H(y(C), 1),
                      L < i.dataValue.offices.length - 1 ? (a(), o("span", zr, ", ")) : m("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : m("", !0),
              c.mail ? (a(), o("li", {
                key: 6,
                class: f(["nav-item", i.locations.length > 1 ? "pt-4" : ""])
              }, [
                l("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + c.mail
                }, [
                  l("span", jr, [
                    l("span", qr, [
                      v(h, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    l("span", Ur, y(c.mail), 1)
                  ])
                ], 8, Hr)
              ], 2)) : m("", !0)
            ]))), 256)),
            i.isCorporate ? m("", !0) : (a(!0), o(b, { key: 0 }, E(i.dataValue.brandLogos, (c, C) => (a(), o(b, null, [
              c.title ? (a(), o("span", Gr, y(c.title), 1)) : m("", !0),
              l("a", {
                href: c.url,
                target: c.target,
                class: f([
                  "footer__brand-logo-link d-block space-top-1",
                  C === 0 ? "mt-3" : "",
                  c.classes ? c.classes : "w-90"
                ])
              }, [
                v(d, V({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, Wr)
            ], 64))), 256))
          ]),
          l("div", Jr, [
            l("div", Kr, [
              (a(!0), o(b, null, E(i.dataValue.partners, (c, C) => (a(), o(b, null, [
                l("a", {
                  href: c.url,
                  target: c.target,
                  class: "footer__partner-images"
                }, [
                  v(d, V({
                    cloudinary: !0,
                    ref_for: !0
                  }, c, { class: "footer__partner-image" }), null, 16)
                ], 8, Xr),
                C < i.dataValue.partners.length - 1 ? (a(), o("div", Zr)) : m("", !0)
              ], 64))), 256))
            ]),
            i.isCorporate ? m("", !0) : (a(), x(g, {
              key: 0,
              items: i.dataValue.highlights,
              "bg-color": r.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      i.isCorporate ? (a(), o("div", Yr, [
        l("div", Qr, [
          v(g, {
            items: i.dataValue.highlights,
            "bg-color": r.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : m("", !0),
      e[0] || (e[0] = l("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      l("div", $r, [
        l("div", ea, [
          l("div", ta, [
            l("ul", sa, [
              (a(!0), o(b, null, E(i.links, (c) => (a(), o("li", ia, [
                l("a", V({
                  class: "nav-link",
                  href: c.url,
                  ref_for: !0
                }, c), y(c.title), 17, na)
              ]))), 256))
            ])
          ]),
          l("div", ra, [
            l("ul", aa, [
              (a(!0), o(b, null, E(i.dataValue.socials, (c) => (a(), o("li", la, [
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
                ], 8, oa)
              ]))), 256))
            ])
          ])
        ]),
        l("div", ca, [
          l("div", da, [
            l("p", ha, "Copyright © " + y(i.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const ma = /* @__PURE__ */ k(yr, [["render", ua]]), Le = {}, ga = {
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
      if (!Le) return;
      const n = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: t
      };
      this.searchEngine = new Le(e, n);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(s) {
      this.searchExpanded = p.isOutsideOf("search", s) ? !1 : this.searchExpanded;
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
}, fa = {
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
      var s;
      return (s = this.home) == null ? void 0 : s.languages[this.lowerLang];
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
          const n = s[t], r = (e = n == null ? void 0 : n.querySelector(".header__link-text-spacer")) == null ? void 0 : e.clientWidth;
          n.style.setProperty("--header-link-text-width", r + "px");
        }
    },
    showFlyoutBlock(s) {
      return !(s.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return p.isBelowBreakpoint("md");
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
      t.classList.add(_.EXPANDED);
      const n = this.getFlyoutRef(e);
      n && (this.flyoutIndex = e, n.classList.add(_.EXPANDED));
    },
    handleMouseOut(s) {
      var n;
      if ((n = s.relatedTarget) != null && n.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.getLinkRef(this.flyoutIndex);
      if (!e) return;
      e.classList.remove(_.EXPANDED);
      const t = this.getFlyoutRef(this.flyoutIndex);
      t && t.classList.remove(_.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const s = this.$refs.languageSwitch;
      s && s.classList.add(_.EXPANDED);
    },
    handleLanguageOut(s) {
      var t;
      if ((t = s.relatedTarget) != null && t.closest(".header__flyout")) return;
      this.hover = !1;
      const e = this.$refs.languageSwitch;
      e && e.classList.remove(_.EXPANDED);
    },
    resetAllFlyouts() {
      var s, e;
      (s = this.$refs.link) == null || s.forEach((t) => {
        t.classList.remove(_.EXPANDED);
      }), (e = this.$refs.flyout) == null || e.forEach((t) => {
        t.classList.remove(_.EXPANDED);
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
      const t = e.filter((n) => n !== this.lowerLang);
      if (t.length)
        return t[0];
    },
    handleLanguageSwitch(s) {
      var n;
      const e = this.getActiveUrlByLang(s), t = e || ((n = this.home.languages[s]) == null ? void 0 : n.url);
      p.storageSave("preferedLanguage", s, !1), document.location.href = t;
    },
    getCurrentPath() {
      let s = "/";
      return typeof process < "u" && process.server ? s = this.$route.fullPath : s = window.location.pathname, s[s.length - 1] !== "/" && (s += "/"), s;
    },
    getActiveUrlByLang(s, e) {
      var h;
      const t = this.getCurrentPath(), n = "/", r = (u, g) => {
        if (!(u != null && u.title)) return;
        let c = u == null ? void 0 : u.url;
        t[(t == null ? void 0 : t.length) - 1] === n && c && c[(c == null ? void 0 : c.length) - 1] !== n && (c = c + n);
        const C = c === t, L = this.getParentLink(g);
        return e && C ? (u.active = !0, L && (L.active = !0)) : (u.active = !1, L && (L.active = !1)), C;
      }, i = (u, g) => g;
      let d = p.findRecursive(this.clonedNavigation, r, i);
      if (d || (d = p.findRecursive(this.meta, r, i)), d || (d = p.findRecursive(this.contact, r, i)), !d) {
        const u = this.getHrefLang(s);
        return u || this.getTranslatedUrl(t, s);
      }
      return (h = d[s]) == null ? void 0 : h.url;
    },
    getTranslatedUrl(s, e) {
      if (this.isBlogTagsUrl(s)) return this.getBlogTagsUrl(e, s);
      const t = this.getFolderSwitchSegment(s);
      return t ? this.getFolderSwitchUrl(e, s, t) : null;
    },
    getFolderSwitchSegment(s) {
      const e = this.home.folderSwitch;
      return e && e.find((n) => s.includes(n)) || null;
    },
    getFolderSwitchUrl(s, e, t) {
      if (!t) return e;
      let n;
      if (s === this.defaultLang) {
        const r = new RegExp(`/${this.lowerLang}/`);
        n = e.replace(r, "/");
      } else
        n = e.replace(t, `${s}/${t}`);
      return n;
    },
    isBlogTagsUrl(s) {
      return /\/blog\/tags/.test(s);
    },
    getBlogTagsUrl(s, e) {
      let t;
      const n = "tags";
      switch (s) {
        case "en":
          t = e.replace(n, `${n}-${s}`);
          break;
        default:
        case this.defaultLang:
          const r = new RegExp(`${n}-..`);
          t = e.replace(r, n);
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
      return ["header__item", (e = s.languages[this.lowerLang]) != null && e.active ? _.ACTIVE : ""];
    },
    isLinkListHidden(s, e) {
      const t = this.getId(s, e);
      return !this.linkLists[t];
    },
    headerLinkClasses(s, e) {
      return this.getListClasses(s, e, ["header__link custom"]);
    },
    headerProductListClasses(s, e) {
      return this.getListClasses(s, e, ["header__product-list", this.inTransition ? _.IN_TRANSITION : ""]);
    },
    getListClasses(s, e, t) {
      const n = this.isLinkListHidden(s, e);
      return [...t, n ? "" : _.EXPANDED];
    },
    updateProductListHeight() {
      const s = this.$refs["product-list"];
      if (s)
        for (let e = 0; e < s.length; e++) {
          const t = s[e], r = !t.classList.contains(_.EXPANDED) || t.style.height !== "" ? "" : t.scrollHeight + "px";
          t.style.height = r;
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
}, _a = { class: "header__row row" }, pa = { class: "header__col col" }, ya = { class: "header__logo" }, va = ["href"], ba = {
  class: "header__list",
  ref: "list"
}, xa = ["href", "target", "onClick"], wa = ["onMouseover"], Sa = { class: "header__link-text" }, ka = { class: "header__link-text-spacer" }, Ca = ["href", "target"], La = { class: "header__product-list-data" }, Ea = { class: "header__product-list-title font-size-8 bold" }, Ta = { class: "header__product-list-subtitle" }, Aa = ["href"], Da = { class: "header__footer" }, Oa = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, Ia = ["href"], Na = { class: "header__contact-text" }, Pa = { class: "header__contact-title" }, Va = {
  key: 2,
  class: "header__button"
}, Ma = {
  key: 3,
  class: "header__language-switch"
}, Fa = ["onClick"], Ra = {
  key: 0,
  class: "header__button"
}, Ba = { class: "header__link-text" }, za = { class: "header__link-text-spacer" }, Ha = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, ja = ["onClick"], qa = { class: "row" }, Ua = { class: "col" }, Ga = {
  key: 0,
  class: "header__flyout-items"
}, Wa = {
  key: 0,
  class: "header__flyout-block"
}, Ja = { class: "header__flyout-caption" }, Ka = ["innerHTML"], Xa = ["href"], Za = { class: "header__contact-title" }, Ya = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, Qa = {
  key: 1,
  class: "header__product-list is-expanded"
}, $a = ["href", "target"], el = { class: "header__product-list-data" }, tl = { class: "header__product-list-title font-size-8 bold" }, sl = { class: "header__product-list-subtitle" };
function il(s, e, t, n, r, i) {
  var C, L, T, M, ee, te;
  const d = X, h = q, u = Ve, g = W, c = ga;
  return a(), o(b, null, [
    l("div", {
      class: "header__spacer",
      style: O(i.spacerBgColor)
    }, null, 4),
    l("header", {
      class: f(i.classList),
      onMouseover: e[5] || (e[5] = (...w) => i.handleHeaderMouseOver && i.handleHeaderMouseOver(...w)),
      onMouseout: e[6] || (e[6] = (...w) => i.handleHeaderMouseOut && i.handleHeaderMouseOut(...w))
    }, [
      l("div", {
        class: f(i.headerContainerClassList)
      }, [
        l("div", _a, [
          l("div", pa, [
            l("div", ya, [
              l("a", {
                href: (C = i.homeObj) == null ? void 0 : C.url
              }, [
                v(d, {
                  img: (L = t.home) == null ? void 0 : L.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"]),
                v(d, {
                  img: (T = t.home) == null ? void 0 : T.img,
                  class: "header__logo-default",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"])
              ], 8, va)
            ]),
            l("div", {
              class: "header__menu",
              onClick: e[0] || (e[0] = (...w) => i.handleCloseClick && i.handleCloseClick(...w))
            }, [
              v(h, {
                icon: "menu",
                class: "header__menu-icon",
                closed: r.closed
              }, null, 8, ["closed"])
            ]),
            l("nav", {
              class: "header__nav",
              onMouseout: e[1] || (e[1] = (...w) => i.handleMouseOut && i.handleMouseOut(...w))
            }, [
              l("ul", ba, [
                (a(!0), o(b, null, E(r.activeNavigation, (w, D) => {
                  var J, se, ie, ne, re, Z;
                  return a(), o("li", {
                    class: f(i.headerItemClasses(w))
                  }, [
                    w != null && w.languages ? (a(), o("a", {
                      key: 0,
                      class: f(i.headerLinkClasses(w, D)),
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
                        l("span", Sa, y((J = w.languages[i.lowerLang]) == null ? void 0 : J.title), 1),
                        l("span", ka, y((se = w.languages[i.lowerLang]) == null ? void 0 : se.title), 1),
                        w.children ? (a(), x(h, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : m("", !0)
                      ], 40, wa)
                    ], 10, xa)) : m("", !0),
                    (a(!0), o(b, null, E(w.children, (F) => (a(), o(b, null, [
                      w.children && !F.products ? (a(), x(u, {
                        key: 0,
                        list: F,
                        lang: i.lowerLang,
                        hidden: i.isLinkListHidden(w, D),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (a(), o("div", {
                        key: 1,
                        class: f(i.headerProductListClasses(w, D)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (a(!0), o(b, null, E(F.children, (P) => {
                          var ae, le, ke;
                          return a(), o("a", {
                            href: (ae = P == null ? void 0 : P.languages[i.lowerLang]) == null ? void 0 : ae.url,
                            target: P.target,
                            class: "header__product-list-item custom"
                          }, [
                            v(d, {
                              img: P.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", La, [
                              l("div", Ea, y((le = P == null ? void 0 : P.languages[i.lowerLang]) == null ? void 0 : le.title), 1),
                              l("div", Ta, y((ke = P == null ? void 0 : P.languages[i.lowerLang]) == null ? void 0 : ke.subtitle), 1)
                            ])
                          ], 8, Ca);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (ie = w.languages[i.lowerLang]) != null && ie.emergency ? (a(), o("a", {
                      key: 1,
                      href: (ne = w.languages[i.lowerLang]) == null ? void 0 : ne.emergency.href,
                      class: f(i.navHighlightClasses(w, D))
                    }, [
                      v(h, {
                        icon: (re = w.languages[i.lowerLang]) == null ? void 0 : re.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      H(" " + y((Z = w.languages[i.lowerLang]) == null ? void 0 : Z.emergency.text), 1)
                    ], 10, Aa)) : m("", !0)
                  ], 2);
                }), 256))
              ], 512),
              l("div", Da, [
                i.hasMeta ? (a(), x(u, {
                  key: 0,
                  list: i.metaList,
                  lang: i.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : m("", !0),
                i.hasContact ? (a(), o("div", Oa, [
                  (M = t.contact) != null && M.languages ? (a(), o("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (ee = t.contact.languages[i.lowerLang]) == null ? void 0 : ee.url
                  }, [
                    l("div", Na, [
                      v(h, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      l("span", Pa, y((te = t.contact.languages[i.lowerLang]) == null ? void 0 : te.title), 1)
                    ])
                  ], 8, Ia)) : m("", !0)
                ])) : m("", !0),
                t.button ? (a(), o("div", Va, [
                  v(g, {
                    text: t.button.text,
                    href: t.button.href,
                    target: t.button.target,
                    skin: t.button.skin,
                    classes: r.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : m("", !0),
                i.hasLangSwitch ? (a(), o("div", Ma, [
                  (a(!0), o(b, null, E(t.home.languages, (w, D) => (a(), o("a", {
                    class: f({ "header__language-link custom": !0, active: D === i.lowerLang }),
                    onClick: (J) => i.handleLanguageSwitch(D)
                  }, y(D), 11, Fa))), 256))
                ])) : m("", !0)
              ])
            ], 32),
            t.button ? (a(), o("div", Ra, [
              v(g, {
                text: t.button.text,
                href: t.button.href,
                target: t.button.target,
                skin: t.button.skin,
                classes: r.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : m("", !0),
            i.searchValue ? (a(), x(c, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : m("", !0),
            i.hasLangSwitch ? (a(), o("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: e[2] || (e[2] = (...w) => i.handleLanguageOver && i.handleLanguageOver(...w)),
              onMouseout: e[3] || (e[3] = (...w) => i.handleLanguageOut && i.handleLanguageOut(...w)),
              ref: "languageSwitch"
            }, [
              l("span", Ba, y(t.lang), 1),
              l("span", za, y(t.lang), 1),
              v(h, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              l("div", Ha, [
                (a(!0), o(b, null, E(t.home.languages, (w, D) => (a(), o("a", {
                  class: f({ "header__language-link custom": !0, "d-none": D === i.lowerLang }),
                  onClick: (J) => i.handleLanguageSwitch(D)
                }, y(D), 11, ja))), 256))
              ], 512)
            ], 544)) : m("", !0)
          ])
        ])
      ], 2),
      l("div", {
        class: "header__flyout",
        onMouseout: e[4] || (e[4] = (...w) => i.handleMouseOut && i.handleMouseOut(...w))
      }, [
        l("div", {
          class: f(i.containerClass)
        }, [
          l("div", qa, [
            l("div", Ua, [
              (a(!0), o(b, null, E(r.activeNavigation, (w, D) => {
                var J, se, ie, ne, re;
                return a(), o("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  w.children ? (a(), o("div", Ga, [
                    i.showFlyoutBlock(w.children) ? (a(), o("figure", Wa, [
                      l("figcaption", Ja, y((J = w.languages[i.lowerLang]) == null ? void 0 : J.title), 1),
                      l("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (se = w.languages[i.lowerLang]) == null ? void 0 : se.description
                      }, null, 8, Ka),
                      i.hasContactLink(w) ? (a(), o("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (ie = t.contact.languages[i.lowerLang]) == null ? void 0 : ie.url
                      }, [
                        v(h, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        l("span", Za, y((ne = t.contact.languages[i.lowerLang]) == null ? void 0 : ne.title), 1)
                      ], 8, Xa)) : m("", !0),
                      (re = w.languages[i.lowerLang]) != null && re.emergency ? (a(), o("div", Ya, [
                        v(g, V({ ref_for: !0 }, w.languages[i.lowerLang].emergency), null, 16)
                      ])) : m("", !0)
                    ])) : m("", !0),
                    (a(!0), o(b, null, E(w.children, (Z) => (a(), o(b, null, [
                      w.children && !Z.products ? (a(), x(u, {
                        key: 0,
                        list: Z,
                        lang: i.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (a(), o("div", Qa, [
                        (a(!0), o(b, null, E(Z.children, (F) => {
                          var P, ae, le;
                          return a(), o("a", {
                            href: (P = F.languages[i.lowerLang]) == null ? void 0 : P.url,
                            target: F.target,
                            class: "header__product-list-item custom"
                          }, [
                            v(d, {
                              img: F.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            l("div", el, [
                              l("div", tl, y((ae = F.languages[i.lowerLang]) == null ? void 0 : ae.title), 1),
                              l("div", sl, y((le = F.languages[i.lowerLang]) == null ? void 0 : le.subtitle), 1)
                            ])
                          ], 8, $a);
                        }), 256))
                      ]))
                    ], 64))), 256))
                  ])) : m("", !0)
                ], 512);
              }), 256))
            ])
          ])
        ], 2)
      ], 32)
    ], 34)
  ], 64);
}
const nl = /* @__PURE__ */ k(fa, [["render", il]]), rl = {
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
}, al = { "clip-path": "url(#icon-world-mask)" }, ll = ["stroke"], ol = ["stroke"], cl = ["stroke"], dl = ["stroke"], hl = { id: "icon-world-mask" }, ul = ["fill"];
function ml(s, e, t, n, r, i) {
  return a(), o("svg", V(t.settings, {
    style: i.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    l("g", al, [
      l("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, ll),
      l("path", {
        d: "M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, ol),
      l("path", {
        d: "M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, cl),
      l("path", {
        d: "M0.418945 9.57001H19.5831",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, dl)
    ]),
    l("defs", null, [
      l("clipPath", hl, [
        l("rect", {
          width: "20",
          height: "20",
          fill: i.stroke
        }, null, 8, ul)
      ])
    ])
  ], 16);
}
const gl = /* @__PURE__ */ k(rl, [["render", ml]]), pl = {
  install(s) {
    s.component("Arrow", Je), s.component("Badge", Ee), s.component("Carousel", lt), s.component("Contact", Qs), s.component("Content", si), s.component("Cta", W), s.component("CtaList", Q), s.component("Faq", mi), s.component("FormCheckbox", xe), s.component("FormCheckboxes", Oe), s.component("FormFields", Ie), s.component("FormRadio", be), s.component("FormRadios", De), s.component("FormSelect", Ae), s.component("Formular", Ne), s.component("Headline", U), s.component("HeadlineRow", Pe), s.component("Hero", Mi), s.component("Icon", q), s.component("IntroText", Ui), s.component("LinkList", Ve), s.component("ListContainer", Fe), s.component("LogoList", nn), s.component("Lottie", Te), s.component("Menu", Tn), s.component("ProductBlocks", Rn), s.component("ProductStage", Yn), s.component("Quote", er), s.component("SiteIcons", ve), s.component("SlotItems", Me), s.component("SvgShape", we), s.component("TextImage", Re), s.component("TextImageList", _r), s.component("VFooter", ma), s.component("VHeader", nl), s.component("VImg", X), s.component("World", gl), s.component("Wrapper", Se);
  }
};
export {
  Je as Arrow,
  Ee as Badge,
  lt as Carousel,
  Qs as Contact,
  si as Content,
  W as Cta,
  Q as CtaList,
  mi as Faq,
  xe as FormCheckbox,
  Oe as FormCheckboxes,
  Ie as FormFields,
  be as FormRadio,
  De as FormRadios,
  Ae as FormSelect,
  Ne as Formular,
  U as Headline,
  Pe as HeadlineRow,
  Mi as Hero,
  q as Icon,
  Ui as IntroText,
  Ve as LinkList,
  Fe as ListContainer,
  nn as LogoList,
  Te as Lottie,
  Tn as Menu,
  Rn as ProductBlocks,
  Yn as ProductStage,
  er as Quote,
  ve as SiteIcons,
  Me as SlotItems,
  we as SvgShape,
  Re as TextImage,
  _r as TextImageList,
  ma as VFooter,
  nl as VHeader,
  X as VImg,
  gl as World,
  Se as Wrapper,
  pl as default
};
