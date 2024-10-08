var kt = Object.defineProperty;
var Lt = (s, t, e) => t in s ? kt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var b = (s, t, e) => Lt(s, typeof t != "symbol" ? t + "" : t, e);
import { openBlock as r, createElementBlock as l, mergeProps as R, createElementVNode as o, resolveComponent as pt, normalizeClass as f, normalizeStyle as P, Fragment as x, renderList as A, createBlock as S, resolveDynamicComponent as lt, withCtx as Z, renderSlot as dt, createVNode as w, createCommentVNode as g, toDisplayString as y, createTextVNode as F, createStaticVNode as yt } from "vue";
const O = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [a, n] of t)
    e[a] = n;
  return e;
}, Et = {
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
function At(s, t, e, a, n, i) {
  return r(), l("svg", R(e.settings, {
    style: i.style,
    viewBox: "0 0 28 17"
  }), t[0] || (t[0] = [
    o("g", { transform: "translate(0.75 0.75)" }, [
      o("path", {
        d: "M0.5 0.5L26 0.5",
        transform: "translate(0 7)",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }),
      o("path", {
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
const Ot = /* @__PURE__ */ O(Et, [["render", At]]), k = class k {
  static isInViewportPercent(t, e) {
    const a = t.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, c = { x: a.x, y: a.y, width: a.width, height: a.height }, d = { x: 0, y: 0, width: i, height: n }, m = c.width * c.height, _ = k.intersection(c, d);
    return e <= _ / m * 100;
  }
  static getScrollTop(t) {
    if (!t) return;
    const e = document.querySelector("header"), a = e ? (e == null ? void 0 : e.offsetHeight) + 40 : 0;
    return t.getBoundingClientRect().top - a + window.scrollY;
  }
  static scrollIntoView(t, e) {
    t && window.scrollTo({
      top: k.getScrollTop(t),
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
    k.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(t) {
    return k.getParent(t, ".is-component");
  }
  static getParent(t, e) {
    var n;
    const a = t.parentNode;
    return a === null || a.tagName === "body" ? null : (n = a.parentNode) != null && n.querySelector(e) ? a : k.getParent(a, e);
  }
  static append(t, e) {
    if (t) {
      const a = document.createElement("div");
      a.innerHTML = e != null && e.nodeType ? e.outerHTML : e;
      const n = a == null ? void 0 : a.children[0];
      if (n)
        return t.appendChild(n);
    }
    return null;
  }
  static replace(t, e) {
    t && e && (t.innerHTML = e.innerHTML);
  }
  static generateUrl(t, e, a) {
    let n;
    return t && e && (n = t.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), n = e + k.urlSeperator + n.replace(/-+$/, "") + "-" + a), n;
  }
  static toBase64(t) {
    return new Promise((e, a) => {
      const n = new FileReader();
      n.readAsDataURL(t), n.onload = () => {
        const i = n.result.split(",")[1];
        e(i);
      }, n.onerror = (i) => a(i);
    });
  }
  static toSize(t) {
    const e = ["Bytes", "KB", "MB", "GB", "TB"];
    if (t == 0) return "0 Byte";
    const a = parseInt(Math.floor(Math.log(t) / Math.log(1024)));
    return (t / Math.pow(1024, a)).toFixed(1) + " " + e[a];
  }
  static camalCaseToSnakeCase(t) {
    return t.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
  }
  static animateValue(t, e, a, n, i = k.priceFormatter) {
    let c = null;
    const d = (m) => {
      c || (c = m);
      const _ = Math.min((m - c) / n, 1), h = _ * (a - e) + e, L = i.format(h);
      t.innerHTML = L, _ < 1 && window.requestAnimationFrame(d);
    };
    window.requestAnimationFrame(d);
  }
  static isOutsideOf(t, e) {
    const a = e.composedPath ? e.composedPath() : e.path;
    return a ? !a.some((n) => n.className && n.className.includes && n.className.includes(t)) : !1;
  }
  static getExtension(t) {
    return t.split(".").pop();
  }
  static validateVueProps(t) {
    var i;
    const e = (i = t == null ? void 0 : t.$) == null ? void 0 : i.propsOptions[0], a = t == null ? void 0 : t.$props, n = { props: {} };
    return Object.keys(a).map((c) => {
      let d = a[c];
      d === "" && (d = e[c].default), n.props[c] = d;
    }), n;
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
    const t = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), e = k.randomRange(0, 8), a = k.randomRange(0, 16);
    return "u" + [t.substring(e, e + 8), t.substring(a, a + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(t) {
    let e = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const a = k.getBreakpoint();
    return e.indexOf(t) >= e.indexOf(a);
  }
  static isUpperBreakpoint() {
    return !k.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(t) {
    let e;
    const a = t.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), n = t.match(/youtu\.be\/(.{11})/);
    return a ? e = a[2] : n && (e = n[1]), `https://i1.ytimg.com/vi/${e}/maxresdefault.jpg`;
  }
  static truncateWords(t, e) {
    if (!t) return;
    const a = t.split(" "), n = a.slice(0, e).join(" ");
    return a.length > e ? n + " ..." : n;
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
    return typeof document > "u" ? !1 : document.location.pathname.indexOf(k.storybookPath) !== -1;
  }
  static getSiteAssetPath(t) {
    return k.isTestingStorybook() ? `${k.storybookPath}${t}` : t;
  }
  static getAssetPath(t) {
    return k.isStorybook() ? `../assets/${t}` : `/_includes/shared-components/assets/${t}`;
  }
  static findRecursive(t, e, a) {
    let n = !1, i, c, d;
    function m(_, h, L, C) {
      if (!n) {
        if (h(_, c)) {
          n = !0, i = C(_, L);
          return;
        }
        for (let E in _)
          typeof _[E] == "object" && (_ === d && (c = E), m(_[E], h, _, C));
      }
    }
    return d = t, m(t, e, t, a), i;
  }
  static storageSave(t, e, a = !0) {
    localStorage.setItem(k.storagePrefix + t, a ? JSON.stringify(e) : e);
  }
  static storageGet(t) {
    return localStorage.getItem(k.storagePrefix + t);
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
    if (typeof getComputedStyle != "function") return "";
    if (!t || t.nodeType !== Node.ELEMENT_NODE) return;
    const e = getComputedStyle(t).backgroundColor;
    return e === "rgba(0, 0, 0, 0)" ? null : e;
  }
  static isValidTimeFormat(t) {
    return /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(t);
  }
  static standardizeTimeFormat(t) {
    if (!this.isValidTimeFormat(t)) return t;
    const e = "Uhr";
    let a = t.split("-"), n = a[0].trim();
    n.includes(":") || (n += ":00"), n.length === 4 && (n = "0" + n);
    let i = a[1].trim().replace(` ${e}`, "");
    return i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i), `${n} - ${i} ${e}`;
  }
  static convertToDate(t) {
    const e = t.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (e) {
      const n = parseInt(e[1], 10), i = parseInt(e[2], 10) - 1, c = parseInt(e[3], 10);
      return new Date(c, i, n);
    }
    return null;
  }
  static XMLtoJSON(t) {
    let e = {};
    if (t.nodeType === Node.ELEMENT_NODE) {
      if (t.attributes.length > 0) {
        e["@attributes"] = {};
        for (let a = 0; a < t.attributes.length; a++) {
          const n = t.attributes.item(a);
          e["@attributes"][n.nodeName] = n.nodeValue;
        }
      }
    } else (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.CDATA_SECTION_NODE) && (e = t.nodeValue);
    if (t.hasChildNodes())
      for (let a = 0; a < t.childNodes.length; a++) {
        const n = t.childNodes.item(a), i = n.nodeName;
        if (typeof e[i] > "u")
          e[i] = this.XMLtoJSON(n);
        else {
          if (typeof e[i].push > "u") {
            const c = e[i];
            e[i] = [], e[i].push(c);
          }
          e[i].push(this.XMLtoJSON(n));
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
    if (typeof getComputedStyle != "function") return "";
    let e;
    if (t.startsWith("--") || t.startsWith("var(")) {
      const d = t.replace(/--|var\(/, "").replace(/\)$/, ""), m = getComputedStyle(document.documentElement), _ = 4;
      e = m.getPropertyValue(d).trim(), e.length === _ && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);
    }
    const a = e || t, n = k.red(a), i = k.green(a), c = k.blue(a);
    return `${n}, ${i}, ${c}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
b(k, "defaultLang", "de"), b(k, "urlSeperator", "#"), b(k, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), b(k, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
b(k, "storybookPath", "/shared-components"), b(k, "decodeHTML", (t) => new DOMParser().parseFromString(t, "text/html").documentElement.textContent), b(k, "intersection", (t, e) => {
  const a = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), n = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return a * n;
}), b(k, "debounce", function(t, e, a) {
  let n;
  return function() {
    const i = this, c = arguments;
    var d = function() {
      n = null, a || t.apply(i, c);
    }, m = a && !n;
    clearTimeout(n), n = setTimeout(d, e), m && t.apply(i, c);
  };
});
let u = k;
const p = {
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
}, It = {
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
}, Tt = {
  tagName: "carousel",
  components: {
    "carousel-item": It
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null
    };
  },
  computed: {
    jsonItems() {
      return u.getJSON(this.items);
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
    this.resizeObserver = new ResizeObserver((t) => {
      for (let e of t)
        e.target === s && (this.clientWidth = e.contentRect.width);
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
}, Nt = { class: "carousel__container" }, Pt = { class: "carousel__row" }, Dt = {
  class: "carousel__row-section",
  ref: "row-section"
}, Vt = { class: "carousel__row-section" };
function Bt(s, t, e, a, n, i) {
  const c = pt("carousel-item");
  return r(), l("div", {
    class: f(i.classList),
    ref: "carousel",
    style: P(i.style)
  }, [
    o("div", Nt, [
      o("div", Pt, [
        o("section", Dt, [
          (r(!0), l(x, null, A(i.jsonItems, (d, m) => (r(), S(c, {
            item: d,
            key: m
          }, null, 8, ["item"]))), 128))
        ], 512),
        o("section", Vt, [
          (r(!0), l(x, null, A(i.jsonItems, (d, m) => (r(), S(c, {
            item: d,
            key: m
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const Mt = /* @__PURE__ */ O(Tt, [["render", Bt]]), bt = {
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
}, Rt = {
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
}, rt = {
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
}, Ht = {
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
}, ot = {
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
}, jt = {
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
}, ht = "https://res.cloudinary.com/c4a8/image/upload/", Ft = {
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
      return jt[this.imgSrcSets];
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
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = rt.sizes);
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
        return this.preset ? ot.presets && ot.presets[this.preset] ? Object.assign(rt, ot.presets[this.preset]) : rt : { ...rt, ...ot.presets.default };
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
      return `${ht}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: t } = this.getSetup(), e = /w_\d+/.test(this.img), a = ht + t, n = `/${this.img}`;
      return e ? `${a}${n}` : `${a},w_${s.fallback_max_width}${n}`;
    },
    loadImage(s) {
      if (!this.canGenerateSrcSet()) return;
      const t = document.createElement("img");
      t.onload = () => {
        const e = t == null ? void 0 : t.naturalHeight, a = t == null ? void 0 : t.naturalWidth;
        let n;
        if (this.isSvg())
          n = {
            naturalHeight: e,
            naturalWidth: a
          };
        else {
          const { preset: i, transformationsString: c } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, n = {
            naturalHeight: e || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: a || (i == null ? void 0 : i.fallback_max_width)
          }, e && a && !this.isSvg() && this.buildSrcSet(i, c);
        }
        this.dimensions = n;
      }, t.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const t = [];
      for (const [a, n] of Object.entries(Ht))
        s[a] && t.push(`${n}_${s[a]}`);
      return t.length > 0 ? t.join(",") : "";
    },
    buildSrcSet(s, t) {
      const e = [], a = s.steps, n = s.min_width, c = (s.max_width - n) / (a - 1), { naturalWidth: d } = this.dimensions;
      for (let m = 1; m <= a; m++) {
        const _ = n + (m - 1) * c, h = _ <= d, L = h ? _ : d, E = `${this.hasPictureTag ? this.imgSrcSetImg : `${ht}${t},w_${L}/${this.img}`} ${L}w`;
        if (e.push(E), !h) break;
      }
      this.srcset = d < n ? "" : e.join(`, 
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
}, zt = ["media", "srcset"], Ut = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], Gt = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function qt(s, t, e, a, n, i) {
  const c = Rt;
  return i.hasPictureTag ? (r(), l("div", {
    key: 0,
    class: f(i.pictureWrapperClassList)
  }, [
    o("picture", null, [
      (r(!0), l(x, null, A(i.imgSrcSetSources, (d) => (r(), l("source", {
        key: d.params,
        media: d.media,
        srcset: i.getCloudinaryBasePathLink(d)
      }, null, 8, zt))), 128)),
      o("img", {
        onLoad: t[0] || (t[0] = (d) => i.loadImage(i.imgSrcSetImg)),
        ref: "image",
        src: i.imgSrcSetImg,
        loading: i.loading,
        class: f(i.classList),
        alt: e.alt,
        width: n.dimensions.naturalWidth,
        height: n.dimensions.naturalHeight,
        srcset: n.srcset,
        sizes: n.sizes,
        crossorigin: i.crossOriginValue
      }, null, 42, Ut)
    ])
  ], 2)) : i.isLottie ? (r(), S(c, R({
    key: 1,
    data: i.jsonLottieData,
    class: i.classListComponent
  }, i.jsonLottieSettingsData), null, 16, ["data", "class"])) : (r(), l("img", {
    key: 2,
    onLoad: t[1] || (t[1] = (d) => i.loadImage()),
    ref: "image",
    src: i.source,
    loading: i.loading,
    class: f(i.classList),
    alt: e.alt,
    width: n.dimensions.naturalWidth,
    height: n.dimensions.naturalHeight,
    srcset: n.srcset,
    sizes: n.sizes,
    crossorigin: i.crossOriginValue
  }, null, 42, Gt));
}
const G = /* @__PURE__ */ O(Ft, [["render", qt]]), at = {
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
}, nt = {
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
}, ct = {
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
        this.link && u.isTrue(this.active) === !0 ? p.ACTIVE : "",
        u.isTrue(this.loading) ? p.LOADING : "",
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
}, D = {
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
}, $t = {
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
      var s, t;
      return (t = (s = this.field) == null ? void 0 : s.showIn) == null ? void 0 : t.map((e) => "show-in-" + e).join(" ");
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
    const s = this.$parent;
    if (!s) return;
    const t = s.$el;
    t && t.addEventListener("reset", this.handleReset);
  },
  methods: {
    getRequiredMsg(s) {
      return s.requiredMsg ? s.requiredMsg : "";
    },
    handleChange(s) {
      const e = s.currentTarget.value;
      this.edited = !0, this.userValue = e;
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
}, Wt = {
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
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number }
};
function Jt(s, t, e, a, n, i) {
  return e.text ? (r(), S(lt(i.tag), {
    key: 0,
    class: f(i.classList),
    innerHTML: e.text,
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (r(), S(lt(i.tag), {
    key: 1,
    class: f(i.classList),
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, {
    default: Z(() => [
      dt(s.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const q = /* @__PURE__ */ O(Wt, [["render", Jt]]), B = class B {
  constructor(t, e) {
    var a;
    t && (this.root = t, this.options = e, (a = this.options) != null && a.noInit || this.root.classList.add(p.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(t) {
    window[B.namespacePrefix] || (window[B.namespacePrefix] = {});
    const e = this.getInstancesKey();
    window[B.namespacePrefix][e] || (window[B.namespacePrefix][e] = []), window[B.namespacePrefix][e].push(t);
  }
  static getInstance(t) {
    const a = window[B.namespacePrefix][this.getInstancesKey()].filter((n) => (n == null ? void 0 : n.root) === t);
    return a ? a[0] : null;
  }
  static initElement(t, e) {
    const a = new this(t, e);
    return this.instances.push(a), this.expose(a), a;
  }
  static init(t) {
    this.instances = [];
    const e = t || document, a = `${this.rootSelector}:not(.${p.INITIALIZED})`;
    [].forEach.call(
      e.querySelectorAll(a),
      (n) => {
        this.initElement(n);
      }
    );
  }
};
b(B, "rootSelector", ""), b(B, "instances", []), b(B, "namespacePrefix", "baseComponents");
let ut = B;
class st {
}
b(st, "rootSelector", ".form-attachments"), b(st, "base64Selector", ".form-attachments__base64");
const M = class M extends ut {
  constructor(t, e) {
    var a;
    super(t, e), t && (this.root = t, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = t.querySelector(this.formSelector), this.subject = t.querySelector(this.subjectSelector), this.company = t.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = e, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (a = this.options) != null && a.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(t, e) {
      return this.optional(e) || M.regularExpression.test(t);
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
    for (const [e, a] of t.entries())
      this.prefillFormValue(e, a);
  }
  prefillFormValue(t, e) {
    const a = this.form;
    if (!a) return;
    const n = a.querySelector(`input[name="${t}"],textarea[name="${t}"]`);
    n && (n.value = e);
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
    M.reset(this.form);
  }
  static reset(t) {
    !t || !t.reset || (t.reset(), [].forEach.call(t.querySelectorAll(`.${p.VALID}`), (e) => {
      e.classList.remove(p.VALID);
    }), [].forEach.call(t.querySelectorAll(`.${p.ERROR}`), (e) => {
      e.classList.remove(p.ERROR);
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
    const e = new FormData(t), a = [];
    for (let n of e)
      a.push(encodeURIComponent(n[0]) + "=" + encodeURIComponent(n[1]));
    return a.join("&");
  }
  ajaxSubmit() {
    const t = M.getFormData(this.form);
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
      new CustomEvent(D.FORM_AJAX_SUBMIT, {
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
    let e = !0, a = !0;
    this.hasAttachments() && (e = this.validateAttachments());
    for (const [n, i] of Object.entries(this.groups))
      this.isValidGroup(i) || (e = !1, this.addGroupError(i, a), a = !1);
    return e;
  }
  validateAttachments() {
    let t = !0;
    return [].forEach.call(this.form.querySelectorAll(st.base64Selector), (e) => {
      e.value || (t = !1);
    }), t || (t = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (e) => {
      e.files.length === 0 && (t = !1, this.addAttachmentError(e));
    }), t);
  }
  addAttachmentError(t) {
    const e = u.getParent(t, st.rootSelector);
    e !== null && e.classList.add(p.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(t, e) {
    for (let a = 0; a < t.length; a++) {
      const n = this.getGroupParent(t[a]);
      t[a].classList.add(p.ERROR), n && (e && u.scrollIntoView(n), this.addErrorMessage(n));
    }
  }
  addErrorMessage(t) {
    if (t && !t.classList.contains(p.ERROR)) {
      t.classList.add(p.ERROR);
      const e = document.createElement("div");
      e.innerHTML = t.dataset.msg, e.classList.add("invalid-feedback"), t.parentNode.insertBefore(e, t.nextSibling);
    }
  }
  delErrorMessage(t) {
    t && t.classList.contains(p.ERROR) && (t.classList.remove(p.ERROR), t.nextSibling.remove());
  }
  delGroupError(t) {
    for (let e = 0; e < t.length; e++) {
      const a = this.getGroupParent(t[e]);
      t[e].classList.remove(p.ERROR), a && this.delErrorMessage(a);
    }
  }
  isValidGroup(t) {
    const e = t.length;
    let a = !1;
    for (let n = 0; n < e; n++) {
      const i = t[n];
      if (i.type === "checkbox" && i.checked)
        a = !0;
      else if (i.type === "radio" && i.checked)
        a = !0;
      else {
        const c = i.closest('input[type="text"]');
        c && !a && c.value.length >= this.minLengthOther && (a = !0);
      }
    }
    return a;
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
    return t ? t.filter((a) => a.getAttribute("type") === e) : null;
  }
  handleGroupError(t, e) {
    t.checked ? this.delGroupError(e) : this.isValidGroup(e) || this.addGroupError(e);
  }
  handleLiveValidation(t) {
    const e = t.currentTarget;
    if (e) {
      const a = this.getGroupByName(e.dataset.formGroup);
      if (!a) return;
      const n = this.groupFilter(a, "checkbox"), i = this.groupFilter(a, "radio");
      e.getAttribute("type") === "checkbox" ? this.handleGroupError(e, n) : e.getAttribute("type") === "radio" ? this.handleGroupError(e, i) : this.isValidGroup(a) ? this.delGroupError(a) : this.addGroupError(a);
    }
  }
  getGroupParent(t) {
    var e;
    return (e = t.closest(".js-form-message")) == null ? void 0 : e.querySelector("[data-msg]");
  }
  addGroupValidation(t) {
    if (this.getGroupParent(t)) {
      const a = t.dataset.formGroup;
      this.groups[a] || (this.groups[a] = []), this.groups[a].push(t);
    }
  }
  updateGotcha() {
    const t = this.root.querySelector(this.gotchaSelector);
    t == null || t.classList.add(p.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(M.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(t) {
    var e;
    return ((e = t == null ? void 0 : t.parentNode) == null ? void 0 : e.classList.contains("form-field--show-in")) && t.offsetParent === null;
  }
  static getFormData(t) {
    if (t == null) return [];
    const e = t.querySelectorAll('input[type="text"], input[type="email"], textarea'), a = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      if (this.isOptionalInputInvisible(i)) continue;
      let c;
      (i.type === "text" || i.type === "email" || i.tagName === "TEXTAREA") && (c = i.value), a.push({
        input: i,
        value: c
      });
    }
    return a;
  }
};
b(M, "rootSelector", ".form"), b(M, "instances", []), b(M, "delimiter", "-formHelper-"), b(M, "noCustomSubmitClass", "form--no-custom-submit"), b(M, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let j = M;
const Zt = {
  tagName: "formular",
  data() {
    return {
      originalAction: "",
      formAction: ""
    };
  },
  computed: {
    classList() {
      var s;
      return [
        "form",
        `${u.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${u.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${u.isTrue(this.container) === !0 ? "container" : ""}`,
        `${u.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((s = this.form) == null ? void 0 : s.noCustomSubmit) === !0 ? j.noCustomSubmitClass : "",
        "vue-component"
      ];
    },
    hasAnimationValue() {
      return u.isTrue(this.hasAnimation);
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
      return this.form.ctaPosition ? this.form.ctaPosition : u.isTrue(this.uncentered) ? "" : "justify-content-end";
    },
    method() {
      return this.form.method ? this.form.method : "post";
    },
    preparedBlocks() {
      const s = [];
      let t = 0, e = [];
      return this.form.fields.forEach((a) => {
        if (a.rowStart || a.rowEnd)
          a.rowStart ? (s[t] = e, e.push(a), a.rowEnd && (e = [], t++)) : a.rowEnd && (e.push(a), e = [], t++);
        else {
          if (e.push(a), s[t]) return;
          s[t] = e, e = [], t++;
        }
      }), s;
    }
  },
  beforeMount() {
    this.originalAction = this.formAction = this.form.action;
  },
  methods: {
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
      const t = (s == null ? void 0 : s.radios) || (s == null ? void 0 : s.checkboxes), e = t ? t[0].id : s == null ? void 0 : s.id;
      return u.isTrue(this.hasUuid) ? j.getId(e) : e;
    },
    updateAction(s) {
      s ? this.formAction = s : this.formAction = this.originalAction;
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
}, Xt = { class: "row" }, Kt = { class: "col-sm-12" }, Yt = ["innerHTML"], Qt = ["method", "action"];
function te(s, t, e, a, n, i) {
  const c = q, d = $t, m = ct;
  return r(), l("div", {
    class: f(i.classList)
  }, [
    o("div", {
      class: f(i.rowClassList)
    }, [
      o("div", {
        class: f(i.wrapperClassList)
      }, [
        e.form.headline ? (r(), l("div", {
          key: 0,
          class: f(i.headlineClassList),
          "data-utility-animation-step": "1"
        }, [
          o("div", Xt, [
            o("div", Kt, [
              w(c, {
                text: e.form.headline,
                level: e.form.level,
                id: e.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              o("p", {
                class: f(i.sublineClassList),
                innerHTML: e.form.subline
              }, null, 10, Yt)
            ])
          ])
        ], 2)) : g("", !0),
        o("form", {
          class: "form__form js-validate mt-6",
          method: i.method,
          action: n.formAction
        }, [
          (r(!0), l(x, null, A(i.preparedBlocks, (_) => (r(), l(x, null, [
            _.length > 0 ? (r(), l("div", {
              key: 0,
              class: f(i.getBlockClassList(_[0]))
            }, [
              (r(!0), l(x, null, A(_, (h) => (r(), l("div", {
                class: f(i.getFieldClassList(h))
              }, [
                w(d, {
                  field: h,
                  options: i.getOptions(h),
                  "replace-value": e.replaceValue,
                  id: i.getId(h),
                  "has-animation": i.hasAnimationValue,
                  onActionChanged: i.updateAction
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged"])
              ], 2))), 256))
            ], 2)) : g("", !0)
          ], 64))), 256)),
          o("div", {
            class: f(i.formClassList)
          }, [
            w(m, {
              text: e.form.ctaText,
              type: "submit",
              button: !0,
              skin: e.form.cta.skin,
              width: e.form.cta.width,
              analytics: e.analytics
            }, null, 8, ["text", "skin", "width", "analytics"])
          ], 2),
          t[0] || (t[0] = o("input", {
            type: "text",
            class: "form__super-field",
            name: "_gotcha"
          }, null, -1))
        ], 8, Qt)
      ], 2)
    ], 2)
  ], 2);
}
const xt = /* @__PURE__ */ O(Zt, [["render", te]]), ee = {
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
}, se = {
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
      var s;
      return [
        "contact",
        this.contactVariantClass,
        "vue-component",
        this.collapsed ? "" : "space-bottom-2 utility-animation utility-animation--percentage-offset",
        { "bg-grey": this.contact.hasGreyBackground },
        this.noTopSpacing || (s = this.contact) != null && s.svgShape || this.collapsed ? "" : this.spacing
      ];
    },
    contactVariantClass() {
      return [
        this.contact.svgShape && !this.quote ? "contact--has-shape" : "",
        this.quote ? "contact--quote" : "",
        this.collapsed ? p.COLLAPSED : ""
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
  }
}, ie = { class: "contact__subline font-weight-bold font-size-2" }, ae = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, ne = {
  key: 0,
  class: "contact__person-quote"
}, re = { class: "contact__icon" }, oe = { class: "contact__image-quote" }, le = { class: "contact__image-spacer" }, ce = { class: "contact__quote font-size-3 middle font-weight-light" }, he = { class: "d-flex flex-column" }, de = { class: "font-weight-light" }, ue = { class: "contact__image" }, ge = { class: "contact__name font-size-4 my-6 mx-5" }, me = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, pe = ["href"], fe = { class: "streamline-sm mr-4" }, _e = { class: "contact__detail-text" }, ve = {
  key: 0,
  class: "contact__notes"
}, ye = { class: "contact__notes-spacing streamline-sm mr-4" }, we = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, Se = ["href"], be = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, xe = ["href"], Ce = {
  key: 0,
  class: "contact__detail-quote"
}, ke = ["href"], Le = { class: "streamline-sm mr-4" }, Ee = {
  key: 0,
  class: "contact__notes"
}, Ae = { class: "contact__notes-spacing streamline-sm mr-4" };
function Oe(s, t, e, a, n, i) {
  const c = ee, d = q, m = xt, _ = nt, h = at, L = G, C = bt;
  return r(), l(x, null, [
    e.contact.svgShape ? (r(), S(c, {
      key: 0,
      align: e.contact.svgShape.align,
      peak: e.contact.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : g("", !0),
    o("div", {
      class: f(i.classList),
      style: P(i.styleObject)
    }, [
      o("div", {
        class: f(i.contactContainerClass)
      }, [
        o("div", {
          class: f(i.contactRowClass)
        }, [
          e.collapsed ? g("", !0) : (r(), l("div", {
            key: 0,
            class: f(["contact__form", i.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            w(d, {
              text: e.contact.headline,
              classes: e.contact.headlineClasses,
              level: e.level
            }, null, 8, ["text", "classes", "level"]),
            o("span", ie, y(e.contact.subline), 1),
            e.contact.form ? (r(), S(m, {
              key: 0,
              form: e.contact.form,
              ajax: e.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : g("", !0),
            e.contact.buttons ? (r(), l("div", ae, [
              w(_, {
                list: e.contact.buttons
              }, null, 8, ["list"])
            ])) : g("", !0)
          ], 2)),
          o("div", {
            class: f(["contact__box", i.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            o("div", {
              class: f(["contact__person", i.contactLight])
            }, [
              e.quote ? (r(), l("div", ne, [
                o("div", re, [
                  w(h, { icon: "quotes" })
                ]),
                o("div", oe, [
                  o("div", le, [
                    w(L, {
                      img: e.contact.person.image,
                      cloudinary: e.contact.person.cloudinary,
                      alt: e.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                o("div", ce, y(e.contact.person.quote), 1),
                o("div", he, [
                  o("span", null, y(e.contact.person.quotee), 1),
                  o("span", de, y(e.contact.person.quoteeTitle), 1)
                ])
              ])) : (r(), l(x, { key: 1 }, [
                o("div", ue, [
                  w(L, {
                    img: e.contact.person.image,
                    cloudinary: e.contact.person.cloudinary,
                    alt: e.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                o("div", ge, y(e.contact.person.name), 1),
                o("div", me, [
                  (r(!0), l(x, null, A(e.contact.person.details, (E, H) => (r(), l("div", {
                    key: H,
                    class: f(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !H === e.contact.person.details.length - 1 }])
                  }, [
                    o("a", {
                      href: E.href,
                      class: "d-flex custom"
                    }, [
                      o("span", fe, [
                        E.icon === "site/mail" ? (r(), S(C, {
                          key: 0,
                          icon: "site/mail"
                        })) : (r(), S(C, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      o("span", _e, y(E.text), 1)
                    ], 8, pe),
                    E.notes ? (r(), l("div", ve, [
                      o("span", ye, [
                        E.icon === "site/mail" ? (r(), S(C, {
                          key: 0,
                          icon: "site/mail"
                        })) : (r(), S(C, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      F(" " + y(E.notes), 1)
                    ])) : g("", !0)
                  ], 2))), 128)),
                  e.contact.person.number ? (r(), l("div", we, [
                    o("a", {
                      href: "tel:" + e.contact.person.number,
                      class: "custom"
                    }, [
                      w(C, { icon: "site/phone" }),
                      F(" " + y(e.contact.person.number), 1)
                    ], 8, Se)
                  ])) : g("", !0),
                  e.contact.person.mail ? (r(), l("div", be, [
                    o("a", {
                      href: "mailto:" + e.contact.person.mail,
                      class: "custom"
                    }, [
                      w(C, { icon: "site/mail" }),
                      F(" " + y(e.contact.person.mail), 1)
                    ], 8, xe)
                  ])) : g("", !0)
                ])
              ], 64))
            ], 2),
            e.quote ? (r(), l("div", Ce, [
              w(d, {
                text: e.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (r(!0), l(x, null, A(e.contact.person.details, (E, H) => (r(), l("div", {
                key: H,
                class: f(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !H === e.contact.person.details.length - 1 }])
              }, [
                o("a", {
                  href: E.href,
                  class: "custom"
                }, [
                  o("span", Le, [
                    E.icon === "site/mail" ? (r(), S(C, {
                      key: 0,
                      icon: "site/mail"
                    })) : (r(), S(C, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  F(" " + y(E.text), 1)
                ], 8, ke),
                E.notes ? (r(), l("div", Ee, [
                  o("span", Ae, [
                    E.icon === "site/mail" ? (r(), S(C, {
                      key: 0,
                      icon: "site/mail"
                    })) : (r(), S(C, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  F(" " + y(E.notes), 1)
                ])) : g("", !0)
              ], 2))), 128))
            ])) : g("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)
  ], 64);
}
const Ie = /* @__PURE__ */ O(se, [["render", Oe]]), Te = {
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
        this.link && u.isTrue(this.active) === !0 ? p.ACTIVE : "",
        u.isTrue(this.loading) ? p.LOADING : "",
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
}, Ne = { class: "cta__text" };
function Pe(s, t, e, a, n, i) {
  const c = at;
  return r(), S(lt(i.tag), {
    role: "button",
    class: f(i.classList),
    "data-text": e.text,
    href: e.href ? e.href : null,
    "data-analytics": e.analytics ? e.analytics : null,
    type: e.type ? e.type : null,
    target: i.targetValue ? i.targetValue : null,
    "data-alternative-href": e.alternativeHref ? e.alternativeHref : null,
    "data-trigger": e.trigger ? e.trigger : null
  }, {
    default: Z(() => [
      o("span", Ne, y(e.text), 1),
      i.hasIcon ? (r(), S(c, {
        key: 0,
        icon: i.iconName,
        size: i.sizeValue
      }, null, 8, ["icon", "size"])) : g("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const De = /* @__PURE__ */ O(Te, [["render", Pe]]), Ve = {
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
}, Be = { class: "row" };
function Me(s, t, e, a, n, i) {
  const c = q;
  return r(), l("div", {
    class: f(i.classList)
  }, [
    o("div", Be, [
      o("div", {
        class: f(["col-sm-12", i.animationStepClass, i.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        w(c, {
          level: e.level,
          text: e.text,
          classes: e.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const Re = /* @__PURE__ */ O(Ve, [["render", Me]]), He = {
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
function je(s, t, e, a, n, i) {
  return e.hideContainer ? dt(s.$slots, "default", { key: 1 }) : (r(), l("div", {
    key: 0,
    class: f(i.classList)
  }, [
    dt(s.$slots, "default")
  ], 2));
}
const Ct = /* @__PURE__ */ O(He, [["render", je]]), Fe = {
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
}, ze = {
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
        (e, a) => {
          const n = a * 0.3, i = 0.07 * e.children.length;
          e.style.animation = `letter-switch ${i}s ${n}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const s = this.$refs["end-text"], t = this.$refs.end;
      if (!s || !t) return this.emitEnded();
      s.style.width = "0px", t.classList.remove(p.COLLAPSED), this.emitEnded();
    },
    switchOverline(s) {
      const t = this.$refs.overline;
      t && (t.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, t.style.opacity = 1, s();
      }), t.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(D.ENDED);
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
class gt {
  constructor(t) {
    this.root = t, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(D.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(D.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
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
    var t;
    return ((t = this.main) == null ? void 0 : t.offsetTop) || 0;
  }
  getPercentage(t, e) {
    this.calculatedOffsetTop = this.currentTopPosition - e - this.marginTop + this.getMainOffsetTop(), this.calculatedOffsetBottom = this.currentBottomPosition - e + this.getMainOffsetTop(), this.marginTop < 0 && (this.calculatedOffsetBottom -= this.marginTop);
    let a = t, n;
    if (this.calculatedOffsetBottom >= a) {
      let i = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? n = a / i : n = (a - this.calculatedOffsetTop) / i;
    } else
      n = this.maxPercentage;
    return parseFloat(n.toFixed(2));
  }
  isOutOfViewport(t) {
    return t >= this.maxPercentage || t < 0;
  }
  setStickyPosition() {
    const t = this.getHeaderHeight(), e = window.scrollY, a = this.root.offsetHeight - window.innerHeight, n = a > 0 ? this.offsetBottom : this.offsetBottom - t;
    let i = a > 0 ? -a : 0;
    i = i - this.marginTop;
    const c = this.getPercentage(e, i), d = this.isOutOfViewport(c), m = e > n - window.innerHeight;
    !d && m ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = i + "px", this.root.classList.remove(p.OFF_SCREEN), this.root.classList.add(p.STICKY), this.updateClipPath(c)) : c === 0 ? (this.isUpdating = !1, this.root.classList.remove(p.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(p.STICKY), this.root.classList.add(p.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const t = this.root.parentNode;
    this.spacer = document.createElement("div"), t && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), t.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(p.HAS_BACKGROUND) || u.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const t = this.spacer.nextSibling, e = "--color-sticky-scroller";
    if (!t) return;
    const a = u.getElementBgColor(t) || u.getElementBgColor(t.firstChild);
    this.spacer.style.setProperty(e, a), this.spacer.classList.add(p.HAS_BACKGROUND);
  }
  setDimensions() {
    const t = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > t ? t : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(p.STICKY);
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
b(gt, "rootSelector", ".is-sticky-scroller"), b(gt, "instances", []);
const Ue = {
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
}, Ge = {
  tagName: "hero",
  components: {
    "hero-pattern": Ue
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
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${u.hexToRgb(this.bgColor)}` : "",
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
        this.hasStickyScroller ? gt.getRootClass() : ""
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
}, qe = { class: "hero__container container" }, $e = {
  key: 0,
  class: "hero__back-row row"
}, We = { class: "hero__back-col col" }, Je = { class: "hero__back back" }, Ze = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, Xe = { class: "hero__intro-col col" }, Ke = {
  key: 0,
  class: "hero__overline"
}, Ye = {
  key: 2,
  class: "hero__content-shape"
}, Qe = ["innerHTML"], ts = {
  key: 5,
  class: "hero__badges"
}, es = { class: "hero__badge-container" }, ss = { class: "hero__background-shape" };
function is(s, t, e, a, n, i) {
  const c = pt("hero-pattern"), d = G, m = at, _ = ze, h = q, L = nt, C = Fe, E = Ct;
  return r(), l("div", {
    class: f(i.classList),
    style: P(n.style)
  }, [
    i.pattern ? (r(), S(c, {
      key: 0,
      class: "hero__pattern"
    })) : g("", !0),
    i.img ? (r(), S(d, {
      key: 1,
      class: "hero__background-img",
      cloudinary: i.background.cloudinary,
      img: i.img
    }, {
      default: Z(() => t[0] || (t[0] = [
        F(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : g("", !0),
    o("div", qe, [
      o("main", {
        class: f(i.contentClassList)
      }, [
        i.hasBack ? (r(), l("div", $e, [
          o("div", We, [
            o("div", Je, [
              w(m, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : g("", !0),
        i.letterSwitcher ? (r(), S(_, R({ key: 1 }, i.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: i.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : g("", !0),
        i.overline || i.headlineText || i.subline ? (r(), l("div", Ze, [
          o("div", Xe, [
            i.overline ? (r(), l("span", Ke, y(i.overline), 1)) : g("", !0),
            i.headlineText ? (r(), S(h, {
              key: 1,
              class: f(i.headlineClassList),
              level: i.level,
              innerHTML: i.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : g("", !0),
            i.shapeInContent ? (r(), l("div", Ye, [
              i.showShape ? (r(), S(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : g("", !0)
            ])) : g("", !0),
            i.subline ? (r(), l("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: i.subline
            }, null, 8, Qe)) : g("", !0),
            i.ctaList ? (r(), S(L, {
              key: 4,
              classes: "hero__cta-list",
              list: i.ctaList
            }, null, 8, ["list"])) : g("", !0),
            i.badges ? (r(), l("div", ts, [
              (r(!0), l(x, null, A(i.badges, (H) => (r(), l("div", es, [
                w(d, R({
                  cloudinary: !0,
                  ref_for: !0
                }, H, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : g("", !0)
          ])
        ], 512)) : g("", !0),
        i.animation ? (r(), S(C, {
          key: 3,
          animation: i.animation,
          cta: i.cta,
          icon: i.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : g("", !0)
      ], 2)
    ]),
    i.shape ? (r(), S(E, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !i.showShapeContainer
    }, {
      default: Z(() => [
        w(E, {
          classes: "hero__background-shape-content",
          hideContainer: !i.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: Z(() => [
            o("div", ss, [
              i.showShape ? (r(), S(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : g("", !0)
            ])
          ]),
          _: 1
        }, 8, ["hideContainer"])
      ]),
      _: 1
    }, 8, ["hideContainer"])) : g("", !0)
  ], 6);
}
const as = /* @__PURE__ */ O(Ge, [["render", is]]), ns = {
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
  }
};
function rs(s, t, e, a, n, i) {
  return r(), l("span", {
    class: f(i.classList),
    style: P(i.parentStyle)
  }, [
    (r(), S(lt(e.icon), R(i.settings, {
      color: s.props.color,
      closed: e.closed,
      step: e.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const os = /* @__PURE__ */ O(ns, [["render", rs]]), T = class T {
  constructor(t) {
    this.root = t, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${p.IS_STARTING}`).forEach((t) => {
      t.classList.remove(p.IS_STARTING);
    });
  }
  mergeNodes(t, e) {
    const a = Array.from(e);
    return a.unshift(t), a;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(t) {
    const e = [];
    this.currentElements.forEach((a) => {
      t.srcElement !== a && e.push(a);
    }), this.currentElements = e;
  }
  handleAnimationEnd(t) {
    const e = T.getGroup(t.srcElement);
    if (e) {
      const a = parseInt(e.style.getPropertyValue(T.groupItemsLoadedProperty), 10) || 0;
      T.setGroupItemsLoaded(e, a + 1);
    }
    this.updateCurrentElement(t), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(t) {
    t.forEach((e) => {
      e.classList.add(p.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(T.endDataset, !0);
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
      e.forEach((a) => {
        var n;
        a.type === "attributes" && a.attributeName.startsWith(T.inViewportDataset) && ((n = a.target) == null ? void 0 : n.getAttribute(T.inViewportDataset)) === "true" && this.startAnimation();
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
    const n = (_) => {
      _.forEach((h) => {
        h.isIntersecting ? h.target.setAttribute(this.inViewportDataset, !0) : h.target.classList.contains("utility-animation--enter-exit") && h.target.removeAttribute(this.inViewportDataset);
      });
    }, i = new IntersectionObserver(n, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), c = new IntersectionObserver(n, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), d = new IntersectionObserver(n, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (t ? [t] : this.instances).forEach((_) => {
      T.hasSmallOffset(_) ? d.observe(_.root) : T.hasPercentageOffset(_) ? c.observe(_.root) : i.observe(_.root);
    });
  }
  static resetGroup(t) {
    this.setGroupItemsLoaded(t, 0), this.instances.forEach((e) => {
      if (this.getGroup(e.root) === t) {
        const n = e.root;
        e.currentElements = [n], n.removeAttribute("data-utility-animation-end"), e.startAnimation();
      }
    });
  }
  static initElement(t) {
    const e = t.$el ? t.$el : t, a = new this(e);
    return this.instances.push(a), a;
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
b(T, "rootSelector", ".utility-animation"), b(T, "inViewportDataset", "data-utility-animation-in-viewport"), b(T, "endDataset", "data-utility-animation-end"), b(T, "instances", []), b(T, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let it = T;
const ls = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && it.init([this.$refs.root]);
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
}, cs = { class: "container space-lg-2" }, hs = {
  key: 0,
  class: "row mb-9 mt-9"
}, ds = { class: "row" }, us = { class: "col" }, gs = ["innerHTML"];
function ms(s, t, e, a, n, i) {
  const c = q;
  return r(), l("figure", {
    class: f(i.classList),
    ref: "root"
  }, [
    o("div", cs, [
      e.headline ? (r(), l("div", hs, [
        o("div", {
          class: f(["col", e.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          w(c, { text: e.headline }, null, 8, ["text"])
        ], 2)
      ])) : g("", !0),
      o("div", ds, [
        o("div", us, [
          o("p", {
            class: f(["intro-text__copy fade-in-bottom", e.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: e.copy
          }, null, 10, gs)
        ])
      ])
    ])
  ], 2);
}
const ps = /* @__PURE__ */ O(ls, [["render", ms]]), fs = {
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
function _s(s, t, e, a, n, i) {
  return r(), l("div", {
    class: f(i.classList)
  }, null, 2);
}
const vs = /* @__PURE__ */ O(fs, [["render", _s]]), ys = {
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
  },
  template: `
    <div :class="classList">
      <div class="row">
        <div :class="['col-sm-12', animationStepClass, headlineRowClassesValue]" data-utility-animation-step="1">
          <headline :level="level" :text="text" :classes="headlineClasses" />
        </div>
      </div>
    </div>
  `
}, ws = {
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
    this.$refs.root && it.init([this.$refs.root]);
  }
}, Ss = { class: "container space-2" }, bs = { class: "row" }, xs = { class: "product-blocks__content" }, Cs = { key: 0 }, ks = ["innerHTML"], Ls = { class: "product-blocks__buttons" };
function Es(s, t, e, a, n, i) {
  const c = ys, d = G, m = nt, _ = ct;
  return r(), l("div", {
    class: "product-blocks utility-animation container-fluid",
    style: P(i.backgroundColorStyle),
    ref: "root"
  }, [
    o("div", Ss, [
      e.headline ? (r(), l("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: P(i.animationStyle(1))
      }, [
        w(c, {
          text: e.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : g("", !0),
      o("div", bs, [
        (r(!0), l(x, null, A(e.productBlocks.items, (h, L) => (r(), l("div", {
          key: L,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: P(i.animationStyle(L + 1))
        }, [
          o("div", {
            class: f(["product-blocks__block", { "text-center": h.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            o("div", xs, [
              o("figure", {
                class: f(["product-blocks__img", { "mx-auto": h.copy === "" }, "mb-4"])
              }, [
                h.image ? (r(), S(d, {
                  key: 0,
                  img: h.image,
                  cloudinary: h.cloudinary,
                  alt: h.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : g("", !0)
              ], 2),
              h - e.headline ? (r(), l("h3", Cs, y(h.headline), 1)) : g("", !0),
              o("p", {
                innerHTML: h.copy
              }, null, 8, ks)
            ]),
            o("div", Ls, [
              h.list ? (r(), S(m, {
                key: 0,
                list: h.list
              }, null, 8, ["list"])) : h.ctaText ? (r(), S(_, {
                key: 1,
                text: h.ctaText,
                href: h.ctaHref,
                link: h.link,
                target: h.target,
                type: h.type
              }, null, 8, ["text", "href", "link", "target", "type"])) : g("", !0)
            ])
          ], 2)
        ], 4))), 128))
      ])
    ])
  ], 4);
}
const As = /* @__PURE__ */ O(ws, [["render", Es]]), Os = {
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
}, Is = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Ts = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Ns = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ps(s, t, e, a, n, i) {
  return e.icon === "site/mail" && e.noSpan === !0 ? (r(), l("svg", Is, [
    o("title", null, y(e.icon), 1),
    t[0] || (t[0] = yt('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : e.icon == "site/mail" ? (r(), l("span", {
    key: 1,
    class: f(i.classList)
  }, [
    (r(), l("svg", Ts, [
      o("title", null, y(e.icon), 1),
      t[1] || (t[1] = yt('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : e.icon == "site/phone" ? (r(), l("span", {
    key: 2,
    class: f(i.classList)
  }, [
    (r(), l("svg", Ns, [
      o("title", null, y(e.icon), 1),
      t[2] || (t[2] = o("g", {
        id: "phone",
        transform: "matrix(0.9848077 0.17364818 -0.17364818 0.9848077 5.730377 0)"
      }, [
        o("path", {
          d: "M25.076 32C23.9878 32 22.9343 31.6841 22.0326 31.0871C13.6133 25.4928 6.50909 18.3887 0.914793 9.97086C-0.531095 7.79022 -0.237464 4.86645 1.61478 3.0184L3.48511 1.14529C4.22405 0.406349 5.20653 0 6.25303 0C7.29952 0 8.282 0.406349 9.02095 1.14529L12.436 4.55612C13.9598 6.08271 13.9598 8.56534 12.4374 10.0919L11.7457 10.785C14.6097 14.2069 17.7937 17.3923 21.2157 20.2576L21.9059 19.5674C22.6532 18.8243 23.6329 18.4207 24.6738 18.4207C25.7203 18.4207 26.7028 18.8284 27.4418 19.5674L30.8568 22.9824C32.382 24.509 32.3806 26.9916 30.8554 28.5168L28.9837 30.3899C27.9441 31.428 26.5567 32 25.076 32ZM6.25303 1.39161C5.5781 1.39161 4.94491 1.65323 4.46898 2.12916L2.59865 4.00226C1.21399 5.38413 0.994115 7.57034 2.0754 9.19991C7.56532 17.4633 14.5387 24.4366 22.8021 29.9265C23.4757 30.3732 24.2619 30.6084 25.0774 30.6084C26.1851 30.6084 27.2247 30.1812 28.0026 29.4047L29.8743 27.5329C30.8582 26.5491 30.8582 24.9501 29.8757 23.9663C29.8757 23.9663 26.4607 20.5513 26.4607 20.5513C25.9847 20.0753 25.3516 19.8123 24.678 19.8123C24.0045 19.8123 23.3713 20.0739 22.8954 20.5499L21.7556 21.6896C21.6248 21.8204 21.4495 21.8928 21.263 21.8928C21.103 21.8928 20.9457 21.8371 20.8218 21.7341C16.981 18.5738 13.4324 15.0238 10.272 11.1816C10.0438 10.9032 10.0633 10.5025 10.3165 10.2478L11.4549 9.10668C12.4374 8.12281 12.4374 6.52107 11.4549 5.5372L8.03847 2.12916C7.56254 1.65323 6.92796 1.39161 6.25303 1.39161Z",
          transform: "translate(0.17733586 0.59690577)",
          class: "a"
        })
      ], -1))
    ]))
  ], 2)) : g("", !0);
}
const Ds = /* @__PURE__ */ O(Os, [["render", Ps]]), Vs = {
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
}, Bs = ["viewBox"], Ms = ["fill", "points"];
function Rs(s, t, e, a, n, i) {
  return r(), l("figure", {
    class: f("svgshape " + i.svgShapeClasses),
    style: P("pointer-events: all;" + i.translateStyle)
  }, [
    (r(), l("svg", {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 " + i.svgShapeHeight + " " + i.svgShapeObliquity
    }, [
      o("polygon", {
        fill: i.svgShapeColor,
        points: i.points
      }, null, 8, Ms)
    ], 8, Bs))
  ], 6);
}
const Hs = /* @__PURE__ */ O(Vs, [["render", Rs]]);
class js {
  constructor(t) {
    var a;
    this.position = t;
    const e = (a = window.i18n) == null ? void 0 : a.loader;
    e && e.then(() => {
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
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((t, e) => this.getEnhanchedDescription(e, t.name, t.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(t) {
    return /^\s*<[^>]+>/.test(t);
  }
  getEnhanchedDescription(t, e, a) {
    const n = t > 0 && e && e["#text"] ? `<h4>${this.trimNewlines(e["#text"])}</h4>` : "";
    let i = a.replace(/<\/?span[^>]*>/g, ""), c = 0;
    const d = 5, m = 2;
    return t === 0 ? i = i.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (_, h) => h.length > d && /^\s*$/.test(h) ? h : c < m && h.length > d && h[0] !== "," ? (c++, "<p>" + h.trim() + "</p>") : h).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(i) && i.length > d && (i = "<p>" + i + "</p>"), `${n}${i}`.replace(/<\/p><br><p>/g, "</p><p>");
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
      const a = e.split(" / "), n = a[0], i = a[1], c = "CSOC", d = "Managed Services", m = "Products";
      if (n === d && i !== c)
        e = d;
      else if (n === m)
        e = `${m} ${i}`;
      else
        switch (i) {
          case "Azure Architecture":
            e = "Azure";
            break;
          case "M365 Architecture":
            e = "Workplace";
            break;
          case c:
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
    var e, a, n, i;
    let t = this.getValue("employmentType");
    switch (t) {
      case "permanent":
        t = (e = window.i18n) == null ? void 0 : e.translate("positionTypePermanently");
        break;
      case "intern":
        t = (a = window.i18n) == null ? void 0 : a.translate("positionTypeInternship");
        break;
      case "trainee":
        t = (n = window.i18n) == null ? void 0 : n.translate("positionTypeTraining");
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
    const t = this.tags.find((n) => n.includes("ORDER_"));
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
const J = {
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
class Fs {
  constructor(t) {
    b(this, "defaultLang", "de");
    b(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    b(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    b(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    b(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    b(this, "defaultClientName", "c4a8");
    b(this, "mockApplyUrl", "mock/jobApply.json");
    b(this, "mockDocumentsUrl", "mock/jobDocuments.json");
    this.options = t, (!this.options.client_name || this.options.client_name === "glueckkanja") && (this.options.client_name = this.defaultClientName), this.lang = this.defaultLang, this.jobId = null, this.apiUrl = "https://api.personio.de/v1", this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`, this.applicationsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications", this.documentsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents";
  }
  getUrl(t) {
    var n;
    let e;
    t !== this.types.OPENINGS && ((n = this.options.apiUrl) != null && n.match(/.xml$/)) ? t === this.types.APPLICATIONS ? e = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : e = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : e = this.options.apiUrl ? this.options.apiUrl : this[`${t}Url`];
    const a = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${e}${a}`;
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
    const e = new js(t), a = (i = this.options) == null ? void 0 : i.jobId;
    return e.description === null || a && e.id !== a || !this.filterPosition(e) ? null : {
      ...e.data,
      lang: this.lang
    };
  }
  filterPosition(t) {
    var e, a;
    return !((a = (e = this.filter) == null ? void 0 : e.tags) != null && a.length) || this.filter.tags.some((n) => t.tags.map((i) => i.toLowerCase()).includes(n.toLowerCase())) ? t : null;
  }
  convertData(t) {
    var i, c;
    const e = t, a = "workzag-jobs", n = (i = t[a]) == null ? void 0 : i.position;
    return e.objects = n.length ? (c = t[a]) == null ? void 0 : c.position.map((d) => this.convertPosition(d)).filter(Boolean) : [this.convertPosition(n)].filter(Boolean), e.meta = { offset: 0, limit: 20, total: 10 }, e;
  }
  getConvertedJson(t) {
    const a = new DOMParser().parseFromString(t, "application/xml"), n = u.XMLtoJSON(a);
    return this.convertData(n);
  }
  fetchXML(t) {
    return new Promise((e, a) => {
      t.then((n) => n.text()).then((n) => {
        e({
          json: () => this.getConvertedJson(n)
        });
      }).catch((n) => {
        console.error("Personio fetchXML Error:", n), a("Personio fetchXML Error");
      });
    });
  }
  fetch(t, e, a) {
    return new Promise((n, i) => {
      var c;
      if ((c = this.options) != null && c.client_name) {
        const d = fetch(t, e), m = a === this.responseTypes.XML ? this.fetchXML(d) : d;
        n(m);
      } else
        i("no client_name specified");
    });
  }
  async uploadDocuments(t) {
    const e = t.length > 0 ? t : [t], a = [];
    return Array.from(e).forEach((n) => {
      a.push(this.uploadDocument(n));
    }), Promise.all(a);
  }
  async uploadDocument(t) {
    const e = this.getUrl(this.types.DOCUMENTS), a = new FormData();
    return a.append(
      "file",
      new File([t], t.name, {
        type: t.type
      })
    ), this.fetch(e, {
      method: "POST",
      body: a,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(t, e, a) {
    return new Promise((n, i) => {
      this.uploadDocuments(t).then((c) => {
        if (this.hasValidResponseCodes(c)) return this.addFilesToFields(c, a, n, i);
        const d = c[0];
        d.json().then((m) => {
          if (m.errors) return i({ statusCode: d.status, errors: m.errors });
        }).catch((m) => i(m));
      }).catch((c) => i(c));
    });
  }
  addFilesToFields(t, e, a, n) {
    const i = e;
    i.files = [];
    const c = t.map((d) => d.json().then((m) => {
      i.files.push({
        uuid: m.uuid,
        original_filename: m.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(c).then(() => a(i)).catch((d) => n(d));
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
    return this.options.apiUrl ? t.status === J.VALID : t.status === J.VALID || t.status === J.CREATED || t.status === J.NO_CONTENT;
  }
  hasValidResponseCodes(t) {
    return t.every((e) => this.isValidResponseCode(e));
  }
  handleApply(t) {
    return new Promise((e, a) => {
      this.apply({ fields: t }).then((n) => {
        if (this.isValidResponseCode(n)) return e();
        n.json().then((i) => {
          if (i.errors) return a({ statusCode: n.status, errors: i.errors });
        }).catch((i) => a(i));
      }).catch((n) => a(n));
    });
  }
  getFormPayload(t, e) {
    const a = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, n = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let i = 0; i < t.length; i++) {
      const d = t[i].input, m = e.getName(d.name), _ = u.camalCaseToSnakeCase(m);
      n.hasOwnProperty(_) ? a[_] = d.value : _ !== "_gotcha" && a.attributes.push({
        id: this.getMappedFieldName(_),
        value: d.value
      });
    }
    return a;
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
class zs {
  constructor(t) {
    b(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = t, this.api = new Fs(this.options), this.jobDataUrl = u.getSiteAssetPath(this.jobDataUrl);
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
  getUrl(t, e, a) {
    return this.api.getUrl(t, e, a);
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
        const a = e.split("-");
        t = a[a.length - 1];
      } else
        t = e.substring(1);
    else this.options.jobId && (t = this.options.jobId);
    return t;
  }
  getOrderedList(t) {
    const e = t.filter((n) => n.order !== void 0).sort((n, i) => i.order - n.order), a = t.filter((n) => n.order === void 0);
    return [...e, ...a];
  }
  getFormData(t) {
    const e = j.getFormData(t);
    return this.api.getFormPayload(e, j);
  }
  applyFileData(t, e, a) {
    return this.api.applyFileData(t, e, a);
  }
  handleApply(t) {
    return this.api.handleApply(t);
  }
}
const U = class U {
  constructor(t, e) {
    this.root = t, this.options = e, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(p.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new zs({
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
    var t, e, a;
    if ((t = this.close) == null || t.addEventListener("click", this.handleClose.bind(this)), (e = this.successClose) == null || e.addEventListener("click", this.handleClose.bind(this)), (a = this.errorClose) == null || a.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const n = this.root.parentNode, i = j.getInstance(this.form);
      if (n && this.isNotVueApp(n)) {
        const c = n.querySelector(this.buttonSelector);
        c == null || c.addEventListener("click", this.handleOpen.bind(this));
      } else n && this.addTriggerListeners();
      i && i.canHaveCustomSubmit() && (i.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(D.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((e) => e.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(t) {
    var a;
    t.stopImmediatePropagation();
    const e = (a = t == null ? void 0 : t.detail) == null ? void 0 : a.id;
    !e || e !== this.modalId || this.handleOpen(t);
  }
  handleApplicationSubmit(t) {
    t.preventDefault(), t.stopImmediatePropagation(), this.setLoading(!0);
    const e = this.form.querySelector(st.base64Selector), a = e == null ? void 0 : e.value;
    let n = this.api.getFormData(this.form), i;
    if (a)
      i = {
        name: e.dataset.fileName
      };
    else {
      const c = this.form.querySelector('input[type="file"]');
      i = c == null ? void 0 : c.files;
    }
    i ? this.handleApplicationRequest(n, i, a) : this.handleError();
  }
  setLoading(t) {
    document.dispatchEvent(new CustomEvent(D.LOAD_MODAL, { detail: t }));
  }
  handleApplicationRequest(t, e, a) {
    this.api.applyFileData(e, a, t).then((n) => {
      this.api.handleApply(n).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(n);
      }).catch((i) => {
        this.setLoading(!1), this.handleError(i);
      });
    }).catch((n) => {
      this.setLoading(!1), this.handleError(n);
    });
  }
  handleApplicationSuccess(t) {
    this.root.classList.add(p.SUCCESS);
    const e = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (e) {
      e.dataset.text || (e.dataset.text = e.innerText);
      const a = t.first_name;
      e.innerText = `${e.dataset.text} ${a}`;
    }
  }
  handleError(t) {
    if (!t) return console.error("handle generic error");
    const e = typeof t == "string" ? t : t.message ? t.message : t, a = typeof t == "object" && t.statusCode ? t.statusCode : J.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", e), a === J.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(t) : this.root.classList.add(p.ERROR);
  }
  handlePayloadTooLarge(t) {
    document.dispatchEvent(new CustomEvent(D.FORM_ATTACHMENT_ERROR, { detail: t }));
  }
  handleClose(t) {
    t.preventDefault(), U.close(this.root);
  }
  handleOpen(t) {
    t.preventDefault(), U.open(this.root);
  }
  static initElement(t, e) {
    const a = new this(t, e);
    return this.instances.push(a), a;
  }
  static open(t) {
    t && window.$ && $(t).modal("show");
  }
  static close(t) {
    t && window.$ && ($(t).modal("hide"), U.resetModal(t));
  }
  static resetModal(t) {
    setTimeout(function() {
      const e = t.querySelector("form");
      e == null || e.reset(), t.classList.remove(p.SUCCESS), t.classList.remove(p.ERROR);
    }, 200);
  }
  static init(t) {
    this.instances = [];
    const e = t || document, a = `${this.rootSelector}:not(.${p.READY})`;
    [].forEach.call(e.querySelectorAll(a), (n) => {
      this.initElement(n);
    });
  }
};
b(U, "rootSelector", ".modal"), b(U, "instances", []);
let mt = U;
const Us = {
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
      return ["modal__body", this.loading ? p.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(D.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(s) {
      const t = document.querySelector("html");
      s ? t.classList.add(p.MODAL_OPEN) : (t.classList.remove(p.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const t = this.$refs.modal.querySelector(j.rootSelector);
      if (!t) return;
      const e = j.getInstance(t);
      e || j.reset(e.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(D.LOAD_MODAL, this.handleLoading);
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
        mt.open(this.$refs.modal);
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
}, Gs = {
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
}, qs = {
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
    this.$refs.root && it.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, $s = { class: "container" }, Ws = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, Js = {
  key: 3,
  class: "richtext"
}, Zs = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, Xs = ["innerHTML"], Ks = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, Ys = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function Qs(s, t, e, a, n, i) {
  const c = G, d = Gs, m = q, _ = nt, h = ct, L = Us;
  return r(), l("div", {
    class: f(i.textImageClass),
    style: P(i.textImageStyle),
    ref: "root"
  }, [
    o("div", $s, [
      o("div", {
        class: f(["row", { "flex-row-reverse": e.left }])
      }, [
        e.float ? (r(), l("div", {
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
          onClick: t[0] || (t[0] = (...C) => i.handleClick && i.handleClick(...C)),
          style: P({ cursor: e.href ? "pointer" : void 0 })
        }, [
          w(c, {
            img: e.image,
            cloudinary: e.cloudinary,
            alt: e.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: e.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : g("", !0),
        o("div", {
          class: f(i.textImageFirstColClasses),
          onClick: t[1] || (t[1] = (...C) => i.handleClick && i.handleClick(...C)),
          style: P({ cursor: e.href ? "pointer" : void 0 })
        }, [
          o("div", {
            class: f(["text-image__first-col-wrapper", { "fade-in-bottom": !e.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            w(c, {
              img: e.image,
              cloudinary: e.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: e.alt,
              lottie: e.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ], 2)
        ], 6),
        o("div", {
          class: f(i.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          e.badge ? (r(), S(d, {
            key: 0,
            text: e.badge.text,
            icon: e.badge.icon,
            uppercase: !e.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : g("", !0),
          e.overline ? (r(), l("span", Ws, y(e.overline), 1)) : g("", !0),
          e.headlineText ? (r(), S(m, {
            key: 2,
            level: e.level,
            classes: i.textImageHeadlineClassesComputed
          }, {
            default: Z(() => [
              F(y(e.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : g("", !0),
          e.subline ? (r(), l("span", Js, y(e.subline), 1)) : g("", !0),
          e.subline ? (r(), l("div", Zs, [
            w(c, {
              img: e.image,
              cloudinary: e.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: e.alt,
              lottie: e.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : g("", !0),
          o("div", {
            class: f(i.textImageLightTextClass),
            innerHTML: e.copy
          }, null, 10, Xs),
          e.list ? (r(), l("div", Ks, [
            w(_, { list: e.list }, null, 8, ["list"])
          ])) : g("", !0)
        ], 2),
        e.cta ? (r(), l("div", Ys, [
          w(h, {
            text: e.cta.text,
            button: "",
            href: e.cta.href,
            trigger: e.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : g("", !0)
      ], 2)
    ]),
    e.modal ? (r(), S(L, {
      key: 0,
      form: e.modal.form,
      success: e.modal.success,
      error: e.modal.error,
      application: !0,
      clientName: e.modal.clientName,
      jobId: e.modal.jobId,
      apiUrl: e.modal.apiUrl,
      apiKey: e.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : g("", !0)
  ], 6);
}
const ti = /* @__PURE__ */ O(qs, [["render", Qs]]), wt = {
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
}, ei = {
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
}, si = {
  tagName: "v-footer",
  components: {
    "footer-slider": ei
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
      return this.data ? { ...wt, ...u.getJSON(this.data) } : { ...wt };
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
}, ii = { class: "container" }, ai = { class: "footer__content-row row" }, ni = { class: "footer__content col-lg-12" }, ri = { class: "footer__address" }, oi = ["href", "target"], li = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, ci = {
  key: 0,
  class: "nav-item"
}, hi = {
  key: 1,
  class: "nav-item"
}, di = {
  key: 2,
  class: "nav-item"
}, ui = { class: "footer__postal-code" }, gi = { class: "footer__city" }, mi = { class: "footer__country" }, pi = {
  key: 4,
  class: "nav-item"
}, fi = ["href"], _i = { class: "media" }, vi = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, yi = { class: "media-body" }, wi = {
  key: 5,
  class: "footer__nav-item nav-item"
}, Si = { class: "footer__nav-link nav-link" }, bi = { class: "footer__offices" }, xi = { class: "footer__office" }, Ci = { key: 0 }, ki = ["href"], Li = { class: "d-flex" }, Ei = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, Ai = { class: "footer__mail media-body" }, Oi = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, Ii = ["href", "target"], Ti = { class: "footer__highlights" }, Ni = { class: "footer__partners" }, Pi = ["href", "target"], Di = {
  key: 0,
  class: "footer__vertical-line"
}, Vi = {
  key: 0,
  class: "footer__content-row row"
}, Bi = { class: "footer__content col-lg-12" }, Mi = { class: "mt-3" }, Ri = { class: "row align-items-md-center mb-3" }, Hi = { class: "col-md-8 mb-4 mb-md-0" }, ji = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, Fi = { class: "nav-item mr-6 footer__links" }, zi = ["href"], Ui = { class: "col-md-4 text-md-right" }, Gi = { class: "list-inline mb-0 footer__socials" }, qi = { class: "list-inline-item" }, $i = ["title", "href"], Wi = { class: "row pb-2" }, Ji = { class: "col" }, Zi = { class: "text-white small" };
function Xi(s, t, e, a, n, i) {
  const c = G, d = bt, m = at, _ = pt("footer-slider");
  return r(), l("footer", {
    class: f(i.classList),
    style: P(i.style),
    ref: "root"
  }, [
    o("div", ii, [
      o("div", ai, [
        o("div", ni, [
          o("div", ri, [
            (r(!0), l(x, null, A(i.dataValue.logos, (h) => (r(), l("div", {
              class: f(["mb-3", h == null ? void 0 : h.classes])
            }, [
              o("a", {
                href: h.url,
                target: h.target,
                "aria-label": "Front",
                class: f([
                  "footer__logos-link d-block pr-6",
                  h.linkClasses ? h.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                w(c, R({
                  cloudinary: !0,
                  ref_for: !0
                }, h), null, 16)
              ], 10, oi)
            ], 2))), 256)),
            (r(!0), l(x, null, A(i.locations, (h) => (r(), l("ul", li, [
              h.name ? (r(), l("li", ci, y(h.name), 1)) : g("", !0),
              h.over ? (r(), l("li", hi, y(h.over), 1)) : g("", !0),
              h.street ? (r(), l("li", di, y(h.street), 1)) : g("", !0),
              h.city ? (r(), l("li", {
                key: 3,
                class: f(["nav-item footer__address-block", h.postalReversed ? "is-reversed" : ""])
              }, [
                o("span", ui, y(h.postalCode), 1),
                o("span", gi, y(h.city), 1),
                o("span", mi, y(h.country), 1)
              ], 2)) : g("", !0),
              h.number ? (r(), l("li", pi, [
                o("a", {
                  class: "nav-link media",
                  href: "tel:" + h.number
                }, [
                  o("span", _i, [
                    o("span", vi, [
                      w(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    o("span", yi, y(h.number), 1)
                  ])
                ], 8, fi)
              ])) : g("", !0),
              i.dataValue.offices ? (r(), l("li", wi, [
                o("a", Si, [
                  w(m, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  o("div", bi, [
                    (r(!0), l(x, null, A(i.dataValue.offices, (L, C) => (r(), l("span", xi, [
                      F(y(L), 1),
                      C < i.dataValue.offices.length - 1 ? (r(), l("span", Ci, ", ")) : g("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : g("", !0),
              h.mail ? (r(), l("li", {
                key: 6,
                class: f(["nav-item", i.locations.length > 1 ? "pt-4" : ""])
              }, [
                o("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + h.mail
                }, [
                  o("span", Li, [
                    o("span", Ei, [
                      w(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    o("span", Ai, y(h.mail), 1)
                  ])
                ], 8, ki)
              ], 2)) : g("", !0)
            ]))), 256)),
            i.isCorporate ? g("", !0) : (r(!0), l(x, { key: 0 }, A(i.dataValue.brandLogos, (h, L) => (r(), l(x, null, [
              h.title ? (r(), l("span", Oi, y(h.title), 1)) : g("", !0),
              o("a", {
                href: h.url,
                target: h.target,
                class: f([
                  "footer__brand-logo-link d-block space-top-1",
                  L === 0 ? "mt-3" : "",
                  h.classes ? h.classes : "w-90"
                ])
              }, [
                w(c, R({
                  cloudinary: !0,
                  ref_for: !0
                }, h), null, 16)
              ], 10, Ii)
            ], 64))), 256))
          ]),
          o("div", Ti, [
            o("div", Ni, [
              (r(!0), l(x, null, A(i.dataValue.partners, (h, L) => (r(), l(x, null, [
                o("a", {
                  href: h.url,
                  target: h.target,
                  class: "footer__partner-images"
                }, [
                  w(c, R({
                    cloudinary: !0,
                    ref_for: !0
                  }, h, { class: "footer__partner-image" }), null, 16)
                ], 8, Pi),
                L < i.dataValue.partners.length - 1 ? (r(), l("div", Di)) : g("", !0)
              ], 64))), 256))
            ]),
            i.isCorporate ? g("", !0) : (r(), S(_, {
              key: 0,
              items: i.dataValue.highlights,
              "bg-color": n.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      i.isCorporate ? (r(), l("div", Vi, [
        o("div", Bi, [
          w(_, {
            items: i.dataValue.highlights,
            "bg-color": n.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : g("", !0),
      t[0] || (t[0] = o("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      o("div", Mi, [
        o("div", Ri, [
          o("div", Hi, [
            o("ul", ji, [
              (r(!0), l(x, null, A(i.links, (h) => (r(), l("li", Fi, [
                o("a", R({
                  class: "nav-link",
                  href: h.url,
                  ref_for: !0
                }, h), y(h.title), 17, zi)
              ]))), 256))
            ])
          ]),
          o("div", Ui, [
            o("ul", Gi, [
              (r(!0), l(x, null, A(i.dataValue.socials, (h) => (r(), l("li", qi, [
                o("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: h.title,
                  href: h.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  o("i", {
                    class: f(["fab", h.icon])
                  }, null, 2)
                ], 8, $i)
              ]))), 256))
            ])
          ])
        ]),
        o("div", Wi, [
          o("div", Ji, [
            o("p", Zi, "Copyright © " + y(i.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const Ki = /* @__PURE__ */ O(si, [["render", Xi]]), St = {}, Yi = {
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
      if (!St) return;
      const a = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: e
      };
      this.searchEngine = new St(t, a);
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
}, Qi = {
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
        D.CHILD_HAS_UPDATE,
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
        const e = new CustomEvent(D.CHILD_HAS_UPDATE, {
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
}, ta = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? p.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        u.isTrue(this.hover) ? p.HOVERING : "",
        u.isTrue(this.product) ? "header--product" : "",
        u.isTrue(this.closed) ? "" : p.EXPANDED,
        u.isTrue(this.blendMode) ? "header--blending" : "",
        this.activeNavigation.length > 0 ? "" : p.LOADING,
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
    clonedNavigation() {
      return JSON.parse(JSON.stringify(this.navigation));
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
    this.setActiveNavigation(), this.bindEvents(), this.setCtaClasses(), this.setLinkWidth();
  },
  updated() {
    this.inUpdate && (this.updateProductListHeight(), this.inUpdate = !1, this.inTransition = !1);
  },
  methods: {
    setActiveNavigation() {
      this.setActiveLinks(), this.activeNavigation = this.clonedNavigation;
    },
    setLinkWidth() {
      var t;
      const s = this.$refs.link;
      if (s)
        for (let e = 0; e < s.length; e++) {
          const a = s[e], n = (t = a == null ? void 0 : a.querySelector(".header__link-text-spacer")) == null ? void 0 : t.clientWidth;
          a.style.setProperty("--header-link-text-width", n + "px");
        }
    },
    showFlyoutBlock(s) {
      return !(s.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return u.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(D.WINDOW_RESIZE, this.handleResize.bind(this));
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
      const s = new CustomEvent(D.CHILD_HAS_UPDATE, {
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
      e.classList.add(p.EXPANDED);
      const a = this.getFlyoutRef(t);
      a && (this.flyoutIndex = t, a.classList.add(p.EXPANDED));
    },
    handleMouseOut(s) {
      var a;
      if ((a = s.relatedTarget) != null && a.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.getLinkRef(this.flyoutIndex);
      if (!t) return;
      t.classList.remove(p.EXPANDED);
      const e = this.getFlyoutRef(this.flyoutIndex);
      e && e.classList.remove(p.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const s = this.$refs.languageSwitch;
      s && s.classList.add(p.EXPANDED);
    },
    handleLanguageOut(s) {
      var e;
      if ((e = s.relatedTarget) != null && e.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.$refs.languageSwitch;
      t && t.classList.remove(p.EXPANDED);
    },
    resetAllFlyouts() {
      var s, t;
      (s = this.$refs.link) == null || s.forEach((e) => {
        e.classList.remove(p.EXPANDED);
      }), (t = this.$refs.flyout) == null || t.forEach((e) => {
        e.classList.remove(p.EXPANDED);
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
      const e = t.filter((a) => a !== this.lowerLang);
      if (e.length)
        return e[0];
    },
    handleLanguageSwitch(s) {
      var a;
      const t = this.getActiveUrlByLang(s), e = t || ((a = this.home.languages[s]) == null ? void 0 : a.url);
      u.storageSave("preferedLanguage", s, !1), document.location.href = e;
    },
    getCurrentPath() {
      let s = "/";
      return typeof process < "u" && process.server ? s = this.$route.fullPath : s = window.location.pathname, s;
    },
    getActiveUrlByLang(s, t) {
      var d;
      const e = this.getCurrentPath(), a = "/", n = (m, _) => {
        if (!(m != null && m.title)) return;
        let h = m == null ? void 0 : m.url;
        e[(e == null ? void 0 : e.length) - 1] === a && h && h[(h == null ? void 0 : h.length) - 1] !== a && (h = h + a);
        const L = h === e, C = this.getParentLink(_);
        return t && L ? (m.active = !0, C && (C.active = !0)) : (m.active = !1, C && (C.active = !1)), L;
      }, i = (m, _) => _;
      let c = u.findRecursive(this.clonedNavigation, n, i);
      if (c || (c = u.findRecursive(this.meta, n, i)), c || (c = u.findRecursive(this.contact, n, i)), !c) {
        const m = this.getHrefLang(s);
        return m || this.getTranslatedUrl(e, s);
      }
      return (d = c[s]) == null ? void 0 : d.url;
    },
    getTranslatedUrl(s, t) {
      if (this.isBlogTagsUrl(s)) return this.getBlogTagsUrl(t, s);
      const e = this.getFolderSwitchSegment(s);
      return e ? this.getFolderSwitchUrl(t, s, e) : null;
    },
    getFolderSwitchSegment(s) {
      const t = this.home.folderSwitch;
      return t && t.find((a) => s.includes(a)) || null;
    },
    getFolderSwitchUrl(s, t, e) {
      if (!e) return t;
      let a;
      if (s === this.defaultLang) {
        const n = new RegExp(`/${this.lowerLang}/`);
        a = t.replace(n, "/");
      } else
        a = t.replace(e, `${s}/${e}`);
      return a;
    },
    isBlogTagsUrl(s) {
      return /\/blog\/tags/.test(s);
    },
    getBlogTagsUrl(s, t) {
      let e;
      const a = "tags";
      switch (s) {
        case "en":
          e = t.replace(a, `${a}-${s}`);
          break;
        default:
        case this.defaultLang:
          const n = new RegExp(`${a}-..`);
          e = t.replace(n, a);
          break;
      }
      return e + document.location.search;
    },
    getHrefLang(s) {
      const t = document == null ? void 0 : document.querySelector(`link[hreflang=${s}]`);
      if (t)
        return t.getAttribute("href");
    },
    getParentLink(s) {
      return this.clonedNavigation[s].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(s) {
      var t;
      return ["header__item", (t = s.languages[this.lowerLang]) != null && t.active ? p.ACTIVE : ""];
    },
    isLinkListHidden(s, t) {
      const e = this.getId(s, t);
      return !this.linkLists[e];
    },
    headerLinkClasses(s, t) {
      return this.getListClasses(s, t, ["header__link custom"]);
    },
    headerProductListClasses(s, t) {
      return this.getListClasses(s, t, ["header__product-list", this.inTransition ? p.IN_TRANSITION : ""]);
    },
    getListClasses(s, t, e) {
      const a = this.isLinkListHidden(s, t);
      return [...e, a ? "" : p.EXPANDED];
    },
    updateProductListHeight() {
      const s = this.$refs["product-list"];
      if (s)
        for (let t = 0; t < s.length; t++) {
          const e = s[t], n = !e.classList.contains(p.EXPANDED) || e.style.height !== "" ? "" : e.scrollHeight + "px";
          e.style.height = n;
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
      maxLinkListsInFlyout: 3,
      activeNavigation: {}
    };
  }
}, ea = { class: "header__row row" }, sa = { class: "header__col col" }, ia = { class: "header__logo" }, aa = ["href"], na = {
  class: "header__list",
  ref: "list"
}, ra = ["href", "target", "onClick"], oa = ["onMouseover"], la = { class: "header__link-text" }, ca = { class: "header__link-text-spacer" }, ha = ["href", "target"], da = { class: "header__product-list-data" }, ua = { class: "header__product-list-title font-size-8 bold" }, ga = { class: "header__product-list-subtitle" }, ma = ["href"], pa = { class: "header__footer" }, fa = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, _a = ["href"], va = { class: "header__contact-text" }, ya = { class: "header__contact-title" }, wa = {
  key: 2,
  class: "header__button"
}, Sa = {
  key: 3,
  class: "header__language-switch"
}, ba = ["onClick"], xa = {
  key: 0,
  class: "header__button"
}, Ca = { class: "header__link-text" }, ka = { class: "header__link-text-spacer" }, La = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, Ea = ["onClick"], Aa = { class: "row" }, Oa = { class: "col" }, Ia = {
  key: 0,
  class: "header__flyout-items"
}, Ta = {
  key: 0,
  class: "header__flyout-block"
}, Na = { class: "header__flyout-caption" }, Pa = ["innerHTML"], Da = ["href"], Va = { class: "header__contact-title" }, Ba = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, Ma = {
  key: 1,
  class: "header__product-list is-expanded"
}, Ra = ["href", "target"], Ha = { class: "header__product-list-data" }, ja = { class: "header__product-list-title font-size-8 bold" }, Fa = { class: "header__product-list-subtitle" };
function za(s, t, e, a, n, i) {
  var L, C, E, H, ft, _t;
  const c = G, d = at, m = Qi, _ = ct, h = Yi;
  return r(), l(x, null, [
    o("div", {
      class: "header__spacer",
      style: P(i.spacerBgColor)
    }, null, 4),
    o("header", {
      class: f(i.classList),
      onMouseover: t[5] || (t[5] = (...v) => i.handleHeaderMouseOver && i.handleHeaderMouseOver(...v)),
      onMouseout: t[6] || (t[6] = (...v) => i.handleHeaderMouseOut && i.handleHeaderMouseOut(...v))
    }, [
      o("div", {
        class: f(i.headerContainerClassList)
      }, [
        o("div", ea, [
          o("div", sa, [
            o("div", ia, [
              o("a", {
                href: (L = i.homeObj) == null ? void 0 : L.url
              }, [
                w(c, {
                  img: (C = e.home) == null ? void 0 : C.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0
                }, null, 8, ["img"]),
                w(c, {
                  img: (E = e.home) == null ? void 0 : E.img,
                  class: "header__logo-default",
                  cloudinary: !0
                }, null, 8, ["img"])
              ], 8, aa)
            ]),
            o("div", {
              class: "header__menu",
              onClick: t[0] || (t[0] = (...v) => i.handleCloseClick && i.handleCloseClick(...v))
            }, [
              w(d, {
                icon: "menu",
                class: "header__menu-icon",
                closed: n.closed
              }, null, 8, ["closed"])
            ]),
            o("nav", {
              class: "header__nav",
              onMouseout: t[1] || (t[1] = (...v) => i.handleMouseOut && i.handleMouseOut(...v))
            }, [
              o("ul", na, [
                (r(!0), l(x, null, A(n.activeNavigation, (v, I) => {
                  var z, X, K, Y, Q, W;
                  return r(), l("li", {
                    class: f(i.headerItemClasses(v))
                  }, [
                    v != null && v.languages ? (r(), l("a", {
                      key: 0,
                      class: f(i.headerLinkClasses(v, I)),
                      href: i.getHref(v),
                      target: i.getTarget(v),
                      onClick: (V) => i.handleClick(v, I),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      o("div", {
                        class: "header__link-content",
                        onMouseover: (V) => i.handleMouseOver(v, I, V)
                      }, [
                        o("span", la, y((z = v.languages[i.lowerLang]) == null ? void 0 : z.title), 1),
                        o("span", ca, y((X = v.languages[i.lowerLang]) == null ? void 0 : X.title), 1),
                        v.children ? (r(), S(d, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : g("", !0)
                      ], 40, oa)
                    ], 10, ra)) : g("", !0),
                    (r(!0), l(x, null, A(v.children, (V) => (r(), l(x, null, [
                      v.children && !V.products ? (r(), S(m, {
                        key: 0,
                        list: V,
                        lang: i.lowerLang,
                        hidden: i.isLinkListHidden(v, I),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (r(), l("div", {
                        key: 1,
                        class: f(i.headerProductListClasses(v, I)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (r(!0), l(x, null, A(V.children, (N) => {
                          var tt, et, vt;
                          return r(), l("a", {
                            href: (tt = N == null ? void 0 : N.languages[i.lowerLang]) == null ? void 0 : tt.url,
                            target: N.target,
                            class: "header__product-list-item custom"
                          }, [
                            w(c, {
                              img: N.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            o("div", da, [
                              o("div", ua, y((et = N == null ? void 0 : N.languages[i.lowerLang]) == null ? void 0 : et.title), 1),
                              o("div", ga, y((vt = N == null ? void 0 : N.languages[i.lowerLang]) == null ? void 0 : vt.subtitle), 1)
                            ])
                          ], 8, ha);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (K = v.languages[i.lowerLang]) != null && K.emergency ? (r(), l("a", {
                      key: 1,
                      href: (Y = v.languages[i.lowerLang]) == null ? void 0 : Y.emergency.href,
                      class: f(i.navHighlightClasses(v, I))
                    }, [
                      w(d, {
                        icon: (Q = v.languages[i.lowerLang]) == null ? void 0 : Q.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      F(" " + y((W = v.languages[i.lowerLang]) == null ? void 0 : W.emergency.text), 1)
                    ], 10, ma)) : g("", !0)
                  ], 2);
                }), 256))
              ], 512),
              o("div", pa, [
                i.hasMeta ? (r(), S(m, {
                  key: 0,
                  list: i.metaList,
                  lang: i.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : g("", !0),
                i.hasContact ? (r(), l("div", fa, [
                  (H = e.contact) != null && H.languages ? (r(), l("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (ft = e.contact.languages[i.lowerLang]) == null ? void 0 : ft.url
                  }, [
                    o("div", va, [
                      w(d, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      o("span", ya, y((_t = e.contact.languages[i.lowerLang]) == null ? void 0 : _t.title), 1)
                    ])
                  ], 8, _a)) : g("", !0)
                ])) : g("", !0),
                e.button ? (r(), l("div", wa, [
                  w(_, {
                    text: e.button.text,
                    href: e.button.href,
                    target: e.button.target,
                    skin: e.button.skin,
                    classes: n.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : g("", !0),
                i.hasLangSwitch ? (r(), l("div", Sa, [
                  (r(!0), l(x, null, A(e.home.languages, (v, I) => (r(), l("a", {
                    class: f({ "header__language-link custom": !0, active: I === i.lowerLang }),
                    onClick: (z) => i.handleLanguageSwitch(I)
                  }, y(I), 11, ba))), 256))
                ])) : g("", !0)
              ])
            ], 32),
            e.button ? (r(), l("div", xa, [
              w(_, {
                text: e.button.text,
                href: e.button.href,
                target: e.button.target,
                skin: e.button.skin,
                classes: n.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : g("", !0),
            i.searchValue ? (r(), S(h, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : g("", !0),
            i.hasLangSwitch ? (r(), l("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: t[2] || (t[2] = (...v) => i.handleLanguageOver && i.handleLanguageOver(...v)),
              onMouseout: t[3] || (t[3] = (...v) => i.handleLanguageOut && i.handleLanguageOut(...v)),
              ref: "languageSwitch"
            }, [
              o("span", Ca, y(e.lang), 1),
              o("span", ka, y(e.lang), 1),
              w(d, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              o("div", La, [
                (r(!0), l(x, null, A(e.home.languages, (v, I) => (r(), l("a", {
                  class: f({ "header__language-link custom": !0, "d-none": I === i.lowerLang }),
                  onClick: (z) => i.handleLanguageSwitch(I)
                }, y(I), 11, Ea))), 256))
              ], 512)
            ], 544)) : g("", !0)
          ])
        ])
      ], 2),
      o("div", {
        class: "header__flyout",
        onMouseout: t[4] || (t[4] = (...v) => i.handleMouseOut && i.handleMouseOut(...v))
      }, [
        o("div", {
          class: f(i.containerClass)
        }, [
          o("div", Aa, [
            o("div", Oa, [
              (r(!0), l(x, null, A(n.activeNavigation, (v, I) => {
                var z, X, K, Y, Q;
                return r(), l("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  v.children ? (r(), l("div", Ia, [
                    i.showFlyoutBlock(v.children) ? (r(), l("figure", Ta, [
                      o("figcaption", Na, y((z = v.languages[i.lowerLang]) == null ? void 0 : z.title), 1),
                      o("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (X = v.languages[i.lowerLang]) == null ? void 0 : X.description
                      }, null, 8, Pa),
                      i.hasContactLink(v) ? (r(), l("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (K = e.contact.languages[i.lowerLang]) == null ? void 0 : K.url
                      }, [
                        w(d, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        o("span", Va, y((Y = e.contact.languages[i.lowerLang]) == null ? void 0 : Y.title), 1)
                      ], 8, Da)) : g("", !0),
                      (Q = v.languages[i.lowerLang]) != null && Q.emergency ? (r(), l("div", Ba, [
                        w(_, R({ ref_for: !0 }, v.languages[i.lowerLang].emergency), null, 16)
                      ])) : g("", !0)
                    ])) : g("", !0),
                    (r(!0), l(x, null, A(v.children, (W) => (r(), l(x, null, [
                      v.children && !W.products ? (r(), S(m, {
                        key: 0,
                        list: W,
                        lang: i.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (r(), l("div", Ma, [
                        (r(!0), l(x, null, A(W.children, (V) => {
                          var N, tt, et;
                          return r(), l("a", {
                            href: (N = V.languages[i.lowerLang]) == null ? void 0 : N.url,
                            target: V.target,
                            class: "header__product-list-item custom"
                          }, [
                            w(c, {
                              img: V.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            o("div", Ha, [
                              o("div", ja, y((tt = V.languages[i.lowerLang]) == null ? void 0 : tt.title), 1),
                              o("div", Fa, y((et = V.languages[i.lowerLang]) == null ? void 0 : et.subtitle), 1)
                            ])
                          ], 8, Ra);
                        }), 256))
                      ]))
                    ], 64))), 256))
                  ])) : g("", !0)
                ], 512);
              }), 256))
            ])
          ])
        ], 2)
      ], 32)
    ], 34)
  ], 64);
}
const Ua = /* @__PURE__ */ O(ta, [["render", za]]), Ga = {
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
}, qa = { "clip-path": "url(#icon-world-mask)" }, $a = ["stroke"], Wa = ["stroke"], Ja = ["stroke"], Za = ["stroke"], Xa = { id: "icon-world-mask" }, Ka = ["fill"];
function Ya(s, t, e, a, n, i) {
  return r(), l("svg", R(e.settings, {
    style: i.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    o("g", qa, [
      o("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, $a),
      o("path", {
        d: "M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Wa),
      o("path", {
        d: "M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Ja),
      o("path", {
        d: "M0.418945 9.57001H19.5831",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Za)
    ]),
    o("defs", null, [
      o("clipPath", Xa, [
        o("rect", {
          width: "20",
          height: "20",
          fill: i.stroke
        }, null, 8, Ka)
      ])
    ])
  ], 16);
}
const Qa = /* @__PURE__ */ O(Ga, [["render", Ya]]), sn = {
  install(s) {
    s.component("Arrow", Ot), s.component("Carousel", Mt), s.component("Contact", Ie), s.component("Cta", De), s.component("CtaList", nt), s.component("Formular", xt), s.component("Headline", q), s.component("HeadlineRow", Re), s.component("Hero", as), s.component("Icon", os), s.component("IntroText", ps), s.component("Lottie", vs), s.component("ProductBlocks", As), s.component("SiteIcons", Ds), s.component("SvgShape", Hs), s.component("TextImage", ti), s.component("VFooter", Ki), s.component("VHeader", Ua), s.component("VImg", G), s.component("World", Qa), s.component("Wrapper", Ct);
  }
};
export {
  Ot as Arrow,
  Mt as Carousel,
  Ie as Contact,
  De as Cta,
  nt as CtaList,
  xt as Formular,
  q as Headline,
  Re as HeadlineRow,
  as as Hero,
  os as Icon,
  ps as IntroText,
  vs as Lottie,
  As as ProductBlocks,
  Ds as SiteIcons,
  Hs as SvgShape,
  ti as TextImage,
  Ki as VFooter,
  Ua as VHeader,
  G as VImg,
  Qa as World,
  Ct as Wrapper,
  sn as default
};
