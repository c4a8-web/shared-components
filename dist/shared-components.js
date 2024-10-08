var Pt = Object.defineProperty;
var Vt = (s, t, e) => t in s ? Pt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var S = (s, t, e) => Vt(s, typeof t != "symbol" ? t + "" : t, e);
import { openBlock as n, createElementBlock as l, mergeProps as R, createElementVNode as o, resolveComponent as ut, normalizeClass as g, normalizeStyle as N, Fragment as w, renderList as A, createBlock as b, toDisplayString as y, createStaticVNode as gt, createCommentVNode as m, resolveDynamicComponent as dt, withCtx as K, createVNode as x, renderSlot as ft, createTextVNode as j } from "vue";
const O = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [r, a] of t)
    e[r] = a;
  return e;
}, Mt = {
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
function Rt(s, t, e, r, a, i) {
  return n(), l("svg", R(e.settings, {
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
const Ft = /* @__PURE__ */ O(Mt, [["render", Rt]]), E = class E {
  static isInViewportPercent(t, e) {
    const r = t.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, h = { x: r.x, y: r.y, width: r.width, height: r.height }, d = { x: 0, y: 0, width: i, height: a }, u = h.width * h.height, _ = E.intersection(h, d);
    return e <= _ / u * 100;
  }
  static getScrollTop(t) {
    if (!t) return;
    const e = document.querySelector("header"), r = e ? (e == null ? void 0 : e.offsetHeight) + 40 : 0;
    return t.getBoundingClientRect().top - r + window.scrollY;
  }
  static scrollIntoView(t, e) {
    t && window.scrollTo({
      top: E.getScrollTop(t),
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
    E.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(t) {
    return E.getParent(t, ".is-component");
  }
  static getParent(t, e) {
    var a;
    const r = t.parentNode;
    return r === null || r.tagName === "body" ? null : (a = r.parentNode) != null && a.querySelector(e) ? r : E.getParent(r, e);
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
    return t && e && (a = t.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), a = e + E.urlSeperator + a.replace(/-+$/, "") + "-" + r), a;
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
  static animateValue(t, e, r, a, i = E.priceFormatter) {
    let h = null;
    const d = (u) => {
      h || (h = u);
      const _ = Math.min((u - h) / a, 1), c = _ * (r - e) + e, C = i.format(c);
      t.innerHTML = C, _ < 1 && window.requestAnimationFrame(d);
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
    return Object.keys(r).map((h) => {
      let d = r[h];
      d === "" && (d = e[h].default), a.props[h] = d;
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
    const t = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), e = E.randomRange(0, 8), r = E.randomRange(0, 16);
    return "u" + [t.substring(e, e + 8), t.substring(r, r + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(t) {
    let e = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const r = E.getBreakpoint();
    return e.indexOf(t) >= e.indexOf(r);
  }
  static isUpperBreakpoint() {
    return !E.isBelowBreakpoint("md");
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
    return typeof document > "u" ? !1 : document.location.pathname.indexOf(E.storybookPath) !== -1;
  }
  static getSiteAssetPath(t) {
    return E.isTestingStorybook() ? `${E.storybookPath}${t}` : t;
  }
  static getAssetPath(t) {
    return E.isStorybook() ? `../assets/${t}` : `/_includes/shared-components/assets/${t}`;
  }
  static findRecursive(t, e, r) {
    let a = !1, i, h, d;
    function u(_, c, C, k) {
      if (!a) {
        if (c(_, h)) {
          a = !0, i = k(_, C);
          return;
        }
        for (let L in _)
          typeof _[L] == "object" && (_ === d && (h = L), u(_[L], c, _, k));
      }
    }
    return d = t, u(t, e, t, r), i;
  }
  static storageSave(t, e, r = !0) {
    localStorage.setItem(E.storagePrefix + t, r ? JSON.stringify(e) : e);
  }
  static storageGet(t) {
    return localStorage.getItem(E.storagePrefix + t);
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
    let r = t.split("-"), a = r[0].trim();
    a.includes(":") || (a += ":00"), a.length === 4 && (a = "0" + a);
    let i = r[1].trim().replace(` ${e}`, "");
    return i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i), `${a} - ${i} ${e}`;
  }
  static convertToDate(t) {
    const e = t.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (e) {
      const a = parseInt(e[1], 10), i = parseInt(e[2], 10) - 1, h = parseInt(e[3], 10);
      return new Date(h, i, a);
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
            const h = e[i];
            e[i] = [], e[i].push(h);
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
    if (typeof getComputedStyle != "function") return "";
    let e;
    if (t.startsWith("--") || t.startsWith("var(")) {
      const d = t.replace(/--|var\(/, "").replace(/\)$/, ""), u = getComputedStyle(document.documentElement), _ = 4;
      e = u.getPropertyValue(d).trim(), e.length === _ && (e = `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);
    }
    const r = e || t, a = E.red(r), i = E.green(r), h = E.blue(r);
    return `${a}, ${i}, ${h}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
S(E, "defaultLang", "de"), S(E, "urlSeperator", "#"), S(E, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), S(E, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
S(E, "storybookPath", "/shared-components"), S(E, "decodeHTML", (t) => new DOMParser().parseFromString(t, "text/html").documentElement.textContent), S(E, "intersection", (t, e) => {
  const r = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), a = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return r * a;
}), S(E, "debounce", function(t, e, r) {
  let a;
  return function() {
    const i = this, h = arguments;
    var d = function() {
      a = null, r || t.apply(i, h);
    }, u = r && !a;
    clearTimeout(a), a = setTimeout(d, e), u && t.apply(i, h);
  };
});
let f = E;
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
}, Bt = {
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
}, Ht = {
  tagName: "carousel",
  components: {
    "carousel-item": Bt
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
}, jt = { class: "carousel__container" }, zt = { class: "carousel__row" }, qt = {
  class: "carousel__row-section",
  ref: "row-section"
}, Ut = { class: "carousel__row-section" };
function Gt(s, t, e, r, a, i) {
  const h = ut("carousel-item");
  return n(), l("div", {
    class: g(i.classList),
    ref: "carousel",
    style: N(i.style)
  }, [
    o("div", jt, [
      o("div", zt, [
        o("section", qt, [
          (n(!0), l(w, null, A(i.jsonItems, (d, u) => (n(), b(h, {
            item: d,
            key: u
          }, null, 8, ["item"]))), 128))
        ], 512),
        o("section", Ut, [
          (n(!0), l(w, null, A(i.jsonItems, (d, u) => (n(), b(h, {
            item: d,
            key: u
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const Wt = /* @__PURE__ */ O(Ht, [["render", Gt]]), Jt = {
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
}, $t = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Xt = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Zt = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function Kt(s, t, e, r, a, i) {
  return e.icon === "site/mail" && e.noSpan === !0 ? (n(), l("svg", $t, [
    o("title", null, y(e.icon), 1),
    t[0] || (t[0] = gt('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : e.icon == "site/mail" ? (n(), l("span", {
    key: 1,
    class: g(i.classList)
  }, [
    (n(), l("svg", Xt, [
      o("title", null, y(e.icon), 1),
      t[1] || (t[1] = gt('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : e.icon == "site/phone" ? (n(), l("span", {
    key: 2,
    class: g(i.classList)
  }, [
    (n(), l("svg", Zt, [
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
  ], 2)) : m("", !0);
}
const vt = /* @__PURE__ */ O(Jt, [["render", Kt]]), Yt = {
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
function Qt(s, t, e, r, a, i) {
  return n(), l("div", {
    class: g(i.classList)
  }, null, 2);
}
const Lt = /* @__PURE__ */ O(Yt, [["render", Qt]]), ct = {
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
}, te = {
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
}, ht = {
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
}, ee = {
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
}, mt = "https://res.cloudinary.com/c4a8/image/upload/", se = {
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
      return this.isCloudinary && this.imgSrcSets;
    },
    pictureWrapperClassList() {
      var s;
      return ["img__picture-wrapper", (s = this.imgSrcSetValue) == null ? void 0 : s.ratioClasses];
    },
    imgSrcSetValue() {
      return ee[this.imgSrcSets];
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
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = ct.sizes);
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
        return this.preset ? ht.presets && ht.presets[this.preset] ? Object.assign(ct, ht.presets[this.preset]) : ct : { ...ct, ...ht.presets.default };
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
      return `${mt}${s ? s.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: s, transformationsString: t } = this.getSetup(), e = /w_\d+/.test(this.img), r = mt + t, a = `/${this.img}`;
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
          const { preset: i, transformationsString: h } = this.getSetup();
          this.sizes = i == null ? void 0 : i.sizes, a = {
            naturalHeight: e || (i == null ? void 0 : i.fallback_max_width),
            naturalWidth: r || (i == null ? void 0 : i.fallback_max_width)
          }, e && r && !this.isSvg() && this.buildSrcSet(i, h);
        }
        this.dimensions = a;
      }, t.src = s || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(s) {
      const t = [];
      for (const [r, a] of Object.entries(te))
        s[r] && t.push(`${a}_${s[r]}`);
      return t.length > 0 ? t.join(",") : "";
    },
    buildSrcSet(s, t) {
      const e = [], r = s.steps, a = s.min_width, h = (s.max_width - a) / (r - 1), { naturalWidth: d } = this.dimensions;
      for (let u = 1; u <= r; u++) {
        const _ = a + (u - 1) * h, c = _ <= d, C = c ? _ : d, L = `${this.hasPictureTag ? this.imgSrcSetImg : `${mt}${t},w_${C}/${this.img}`} ${C}w`;
        if (e.push(L), !c) break;
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
      const s = f.getExtension(this.getCloudinaryBasePathLink());
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
}, ie = ["media", "srcset"], re = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], ae = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function ne(s, t, e, r, a, i) {
  const h = Lt;
  return i.hasPictureTag ? (n(), l("div", {
    key: 0,
    class: g(i.pictureWrapperClassList)
  }, [
    o("picture", null, [
      (n(!0), l(w, null, A(i.imgSrcSetSources, (d) => (n(), l("source", {
        key: d.params,
        media: d.media,
        srcset: i.getCloudinaryBasePathLink(d)
      }, null, 8, ie))), 128)),
      o("img", {
        onLoad: t[0] || (t[0] = (d) => i.loadImage(i.imgSrcSetImg)),
        ref: "image",
        src: i.imgSrcSetImg,
        loading: i.loading,
        class: g(i.classList),
        alt: e.alt,
        width: a.dimensions.naturalWidth,
        height: a.dimensions.naturalHeight,
        srcset: a.srcset,
        sizes: a.sizes,
        crossorigin: i.crossOriginValue
      }, null, 42, re)
    ])
  ], 2)) : i.isLottie ? (n(), b(h, R({
    key: 1,
    data: i.jsonLottieData,
    class: i.classListComponent
  }, i.jsonLottieSettingsData), null, 16, ["data", "class"])) : (n(), l("img", {
    key: 2,
    onLoad: t[1] || (t[1] = (d) => i.loadImage()),
    ref: "image",
    src: i.source,
    loading: i.loading,
    class: g(i.classList),
    alt: e.alt,
    width: a.dimensions.naturalWidth,
    height: a.dimensions.naturalHeight,
    srcset: a.srcset,
    sizes: a.sizes,
    crossorigin: i.crossOriginValue
  }, null, 42, ae));
}
const G = /* @__PURE__ */ O(se, [["render", ne]]), oe = {
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
function le(s, t, e, r, a, i) {
  return n(), l("span", {
    class: g(i.classList),
    style: N(i.parentStyle)
  }, [
    (n(), b(dt(e.icon), R(i.settings, {
      color: s.props.color,
      closed: e.closed,
      step: e.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const Y = /* @__PURE__ */ O(oe, [["render", le]]), ce = {
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
}, he = { class: "cta__text" };
function de(s, t, e, r, a, i) {
  const h = Y;
  return n(), b(dt(i.tag), {
    role: "button",
    class: g(i.classList),
    "data-text": e.text,
    href: e.href ? e.href : null,
    "data-analytics": e.analytics ? e.analytics : null,
    type: e.type ? e.type : null,
    target: i.targetValue ? i.targetValue : null,
    "data-alternative-href": e.alternativeHref ? e.alternativeHref : null,
    "data-trigger": e.trigger ? e.trigger : null
  }, {
    default: K(() => [
      o("span", he, y(e.text), 1),
      i.hasIcon ? (n(), b(h, {
        key: 0,
        icon: i.iconName,
        size: i.sizeValue
      }, null, 8, ["icon", "size"])) : m("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const W = /* @__PURE__ */ O(ce, [["render", de]]), ue = {
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
}, me = { class: "cta-list__item d-inline-block mr-3 mb-2" };
function ge(s, t, e, r, a, i) {
  const h = W;
  return n(), l("div", {
    class: g(i.classList)
  }, [
    (n(!0), l(w, null, A(i.ctaList, (d) => (n(), l("div", me, [
      x(h, R({ ref_for: !0 }, d, {
        text: i.text(d),
        href: i.href(d),
        type: i.type(d)
      }), null, 16, ["text", "href", "type"])
    ]))), 256))
  ], 2);
}
const Q = /* @__PURE__ */ O(ue, [["render", ge]]), fe = {
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
}, _e = ["for"], pe = ["name", "required"], ye = { value: "" }, ve = ["value"];
function be(s, t, e, r, a, i) {
  return n(), l(w, null, [
    o("label", {
      class: "input-label",
      for: e.id
    }, y(e.field.label), 9, _e),
    o("select", {
      class: "form-control custom-select text-muted",
      name: e.id,
      required: i.required
    }, [
      o("option", ye, y(e.field.placeholder), 1),
      (n(!0), l(w, null, A(e.options, (h) => (n(), l("option", {
        value: h.value
      }, y(h.text), 9, ve))), 256))
    ], 8, pe)
  ], 64);
}
const Et = /* @__PURE__ */ O(fe, [["render", be]]), P = {
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
}, we = {
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
      const s = this.extensions.map((t) => f.capitalize(t));
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
    var s, t;
    this.root = this.$refs.root, this.interactable = this.$refs.interactable, this.button = this.$refs.button, this.textElement = this.$refs.text, this.file = this.$refs.file, this.error = this.$refs.error, this.base64 = this.$refs.base64, this.bindEvents(), (t = (s = window.i18n) == null ? void 0 : s.loader) == null || t.then(() => {
      var e, r, a;
      this.wrongTypeText = (e = window.i18n) == null ? void 0 : e.translate("formAttachmentsWrongType"), this.maxFilesText = (r = window.i18n) == null ? void 0 : r.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (a = window.i18n) == null ? void 0 : a.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(P.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
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
      var e;
      s.preventDefault(), s.stopPropagation();
      const t = (e = s == null ? void 0 : s.dataTransfer) == null ? void 0 : e.files;
      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = !1, s.type === "drop" && this.handleDroppedFiles(t);
      }, 50);
    },
    isAllowedFileExtension(s) {
      var a;
      if (!s) return;
      const t = (a = this.file.getAttribute("accept")) == null ? void 0 : a.toLowerCase(), e = (t == null ? void 0 : t.split(",")) || [], r = f.getExtension(s.name);
      return e.includes(`.${r}`);
    },
    isUnderMaxSize(s) {
      if (!(!s || !s.size))
        return s.size <= this.maxSize;
    },
    handleDroppedFiles(s) {
      const t = this.getErrors(s);
      if (t) return this.showError(t);
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
      return Array.from(s).every((t) => this.isAllowedFileExtension(t));
    },
    getErrors(s) {
      if (!this.areFilesAllowed(s)) return this.wrongTypeText;
      if (this.files.files.length + s.length > this.maxFilesValue) return this.maxFilesText;
      if (!Array.from(s).every((t) => this.isUnderMaxSize(t))) return this.maxSizeText;
    },
    appendFiles(s) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);
      Array.from(s).forEach((t) => {
        this.files.items.add(t);
      }), this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length, this.file.files = this.files.files, this.resetError();
    },
    handleChange(s) {
      var r;
      const t = (r = s == null ? void 0 : s.target) == null ? void 0 : r.files, e = this.getErrors(t);
      if (e) return this.showError(e);
      this.appendFiles(t);
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
}, xe = {
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
}, Se = { class: "form__radio-control mb-1 vue-component" }, ke = ["data-form-group", "required", "name", "id"], Ce = ["for"], Le = ["name", "id", "placeholder", "data-form-group"], Ee = ["name", "id", "data-form-group", "required"], Ae = ["for", "innerHTML"];
function Oe(s, t, e, r, a, i) {
  var h, d, u;
  return n(), l("div", Se, [
    (h = e.radio) != null && h.placeholder ? (n(), l(w, { key: 0 }, [
      o("input", {
        class: "form__radio",
        type: "radio",
        "data-form-group": e.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId
      }, null, 8, ke),
      o("label", {
        class: "form__radio-label",
        for: i.otherId
      }, null, 8, Ce),
      o("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: e.name,
        id: i.idValue,
        placeholder: (d = e.radio) == null ? void 0 : d.placeholder,
        "data-form-group": e.group
      }, null, 8, Le)
    ], 64)) : (n(), l(w, { key: 1 }, [
      o("input", {
        class: "form__radio",
        type: "radio",
        name: e.name,
        id: i.idValue,
        "data-form-group": e.group,
        required: i.required,
        onChange: t[0] || (t[0] = (_) => i.changed(e.radio))
      }, null, 40, Ee),
      o("label", {
        class: "form__radio-label",
        for: i.idValue,
        innerHTML: (u = e.radio) == null ? void 0 : u.label
      }, null, 8, Ae)
    ], 64))
  ]);
}
const bt = /* @__PURE__ */ O(xe, [["render", Oe]]), Ie = {
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
}, Te = ["data-msg"], De = { class: "d-flex flex-wrap" };
function Ne(s, t, e, r, a, i) {
  var d, u;
  const h = bt;
  return n(), l(w, null, [
    o("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((d = e.field) == null ? void 0 : d.label), 9, Te),
    o("div", De, [
      (n(!0), l(w, null, A((u = e.field) == null ? void 0 : u.radios, (_) => (n(), b(h, {
        class: "pr-10",
        radio: _,
        group: e.id,
        name: e.id,
        id: e.field.id + _.id,
        onActionChanged: t[0] || (t[0] = (c) => s.$emit("action-changed", c))
      }, null, 8, ["radio", "group", "name", "id"]))), 256))
    ])
  ], 64);
}
const At = /* @__PURE__ */ O(Ie, [["render", Ne]]), Pe = {
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
  props: {
    checkbox: Object,
    group: String,
    id: String
  }
}, Ve = { class: "form__checkbox-control custom-control custom-checkbox mb-1 vue-component" }, Me = ["data-form-group", "required", "name", "id"], Re = ["for"], Fe = ["name", "id", "placeholder", "data-form-group"], Be = ["name", "id", "data-form-group", "required"], He = ["for", "innerHTML"];
function je(s, t, e, r, a, i) {
  var h, d, u;
  return n(), l("div", Ve, [
    (h = e.checkbox) != null && h.placeholder ? (n(), l(w, { key: 0 }, [
      o("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        "data-form-group": e.group,
        required: i.required,
        name: i.otherId,
        id: i.otherId
      }, null, 8, Me),
      o("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.otherId
      }, null, 8, Re),
      o("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: i.idValue,
        id: i.idValue,
        placeholder: (d = e.checkbox) == null ? void 0 : d.placeholder,
        "data-form-group": e.group
      }, null, 8, Fe)
    ], 64)) : (n(), l(w, { key: 1 }, [
      o("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        name: i.idValue,
        id: i.idValue,
        "data-form-group": e.group,
        required: i.required
      }, null, 8, Be),
      o("label", {
        class: "form__checkbox-label custom-control-label",
        for: i.idValue,
        innerHTML: (u = e.checkbox) == null ? void 0 : u.label
      }, null, 8, He)
    ], 64))
  ]);
}
const wt = /* @__PURE__ */ O(Pe, [["render", je]]), ze = {
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
}, qe = ["data-msg"];
function Ue(s, t, e, r, a, i) {
  var d, u;
  const h = wt;
  return n(), l(w, null, [
    o("label", {
      class: "form__label input-label",
      "data-msg": i.message
    }, y((d = e.field) == null ? void 0 : d.label), 9, qe),
    (n(!0), l(w, null, A((u = e.field) == null ? void 0 : u.checkboxes, (_) => (n(), b(h, {
      checkbox: _,
      group: i.groupId,
      id: e.field.id + _.id
    }, null, 8, ["checkbox", "group", "id"]))), 256))
  ], 64);
}
const Ot = /* @__PURE__ */ O(ze, [["render", Ue]]), T = class T {
  constructor(t) {
    this.root = t, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${p.IS_STARTING}`).forEach((t) => {
      t.classList.remove(p.IS_STARTING);
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
    const e = T.getGroup(t.srcElement);
    if (e) {
      const r = parseInt(e.style.getPropertyValue(T.groupItemsLoadedProperty), 10) || 0;
      T.setGroupItemsLoaded(e, r + 1);
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
      e.forEach((r) => {
        var a;
        r.type === "attributes" && r.attributeName.startsWith(T.inViewportDataset) && ((a = r.target) == null ? void 0 : a.getAttribute(T.inViewportDataset)) === "true" && this.startAnimation();
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
    const a = (_) => {
      _.forEach((c) => {
        c.isIntersecting ? c.target.setAttribute(this.inViewportDataset, !0) : c.target.classList.contains("utility-animation--enter-exit") && c.target.removeAttribute(this.inViewportDataset);
      });
    }, i = new IntersectionObserver(a, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), h = new IntersectionObserver(a, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), d = new IntersectionObserver(a, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (t ? [t] : this.instances).forEach((_) => {
      T.hasSmallOffset(_) ? d.observe(_.root) : T.hasPercentageOffset(_) ? h.observe(_.root) : i.observe(_.root);
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
S(T, "rootSelector", ".utility-animation"), S(T, "inViewportDataset", "data-utility-animation-in-viewport"), S(T, "endDataset", "data-utility-animation-end"), S(T, "instances", []), S(T, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let U = T;
const Ge = {
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
    this.$refs.root && U.init([this.$refs.root]);
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
  }
}, We = ["for"], Je = ["id", "name", "placeholder", "required", "readonly", "data-msg"], $e = ["name", "value"], Xe = ["for"], Ze = ["type", "id", "name", "data-msg", "value", "placeholder", "required", "readonly"];
function Ke(s, t, e, r, a, i) {
  var k, L, V, tt, et, v;
  const h = wt, d = Ot, u = bt, _ = At, c = we, C = Et;
  return e.field.id !== "_gotcha" ? (n(), l("div", {
    key: 0,
    class: g(i.classList),
    "data-utility-animation-step": "1",
    ref: "root"
  }, [
    e.field.type === "textarea" ? (n(), l(w, { key: 0 }, [
      o("label", {
        class: "input-label",
        for: e.id
      }, y(e.field.label), 9, We),
      o("textarea", {
        class: "form-control form-textarea",
        id: e.id,
        name: e.id,
        rows: "4",
        placeholder: i.placeholder,
        required: i.required,
        readonly: i.readonly,
        "data-msg": i.getRequiredMsg(e.field)
      }, null, 8, Je)
    ], 64)) : e.field.type === "checkbox" ? (n(), b(h, {
      key: 1,
      checkbox: e.field,
      id: e.id
    }, null, 8, ["checkbox", "id"])) : e.field.type === "hidden" ? (n(), l("input", {
      key: 2,
      type: "hidden",
      name: e.id,
      value: i.value
    }, null, 8, $e)) : e.field.checkboxes ? (n(), b(d, {
      key: 3,
      field: e.field,
      id: e.id
    }, null, 8, ["field", "id"])) : e.field.type === "radio" ? (n(), b(u, {
      key: 4,
      radio: e.field,
      id: e.id
    }, null, 8, ["radio", "id"])) : e.field.radios ? (n(), b(_, {
      key: 5,
      field: e.field,
      id: e.id,
      onActionChanged: t[0] || (t[0] = (I) => s.$emit("action-changed", I))
    }, null, 8, ["field", "id"])) : e.field.type === "file" ? (n(), b(c, {
      key: 6,
      description: (k = e.field.formAttachments) == null ? void 0 : k.description,
      text: (L = e.field.formAttachments) == null ? void 0 : L.text,
      extensions: (V = e.field.formAttachments) == null ? void 0 : V.extensions,
      maxSize: (tt = e.field.formAttachments) == null ? void 0 : tt.maxSize,
      id: (et = e.field.formAttachments) == null ? void 0 : et.id,
      required: (v = e.field.formAttachments) == null ? void 0 : v.required,
      "required-msg": i.getRequiredMsg(e.field.formAttachments)
    }, null, 8, ["description", "text", "extensions", "maxSize", "id", "required", "required-msg"])) : e.field.type === "select" ? (n(), b(C, {
      key: 7,
      field: e.field,
      options: e.options,
      id: e.id
    }, null, 8, ["field", "options", "id"])) : e.field.type ? (n(), l(w, { key: 8 }, [
      o("label", {
        class: "input-label",
        for: e.id
      }, y(e.field.label), 9, Xe),
      o("input", {
        ref: "input",
        onChange: t[1] || (t[1] = (...I) => i.handleChange && i.handleChange(...I)),
        onKeyup: t[2] || (t[2] = (...I) => i.handleChange && i.handleChange(...I)),
        type: e.field.type,
        id: e.id,
        name: e.id,
        class: "form-control",
        "data-msg": i.getRequiredMsg(e.field),
        value: i.value,
        placeholder: i.placeholder,
        required: i.required,
        readonly: i.readonly
      }, null, 40, Ze)
    ], 64)) : m("", !0)
  ], 2)) : m("", !0);
}
const It = /* @__PURE__ */ O(Ge, [["render", Ke]]), Ye = {
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
function Qe(s, t, e, r, a, i) {
  return e.text ? (n(), b(dt(i.tag), {
    key: 0,
    class: g(i.classList),
    innerHTML: e.text,
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (n(), b(dt(i.tag), {
    key: 1,
    class: g(i.classList),
    "data-utility-animation-step": i.dataUtilityAnimationStep
  }, {
    default: K(() => [
      ft(s.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const J = /* @__PURE__ */ O(Ye, [["render", Qe]]), F = class F {
  constructor(t, e) {
    var r;
    t && (this.root = t, this.options = e, (r = this.options) != null && r.noInit || this.root.classList.add(p.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(t) {
    window[F.namespacePrefix] || (window[F.namespacePrefix] = {});
    const e = this.getInstancesKey();
    window[F.namespacePrefix][e] || (window[F.namespacePrefix][e] = []), window[F.namespacePrefix][e].push(t);
  }
  static getInstance(t) {
    const r = window[F.namespacePrefix][this.getInstancesKey()].filter((a) => (a == null ? void 0 : a.root) === t);
    return r ? r[0] : null;
  }
  static initElement(t, e) {
    const r = new this(t, e);
    return this.instances.push(r), this.expose(r), r;
  }
  static init(t) {
    this.instances = [];
    const e = t || document, r = `${this.rootSelector}:not(.${p.INITIALIZED})`;
    [].forEach.call(
      e.querySelectorAll(r),
      (a) => {
        this.initElement(a);
      }
    );
  }
};
S(F, "rootSelector", ""), S(F, "instances", []), S(F, "namespacePrefix", "baseComponents");
let _t = F;
class lt {
}
S(lt, "rootSelector", ".form-attachments"), S(lt, "base64Selector", ".form-attachments__base64");
const B = class B extends _t {
  constructor(t, e) {
    var r;
    super(t, e), console.log("🚀 ~ Form ~ constructor ~ root:", t), t && (this.root = t, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = t.querySelector(this.formSelector), this.subject = t.querySelector(this.subjectSelector), this.company = t.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = e, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), console.log("form", this.form), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (r = this.options) != null && r.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(t, e) {
      return this.optional(e) || B.regularExpression.test(t);
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
    B.reset(this.form);
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
    return f.uuid() + this.delimiter + t;
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
    const t = B.getFormData(this.form);
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
    return [].forEach.call(this.form.querySelectorAll(lt.base64Selector), (e) => {
      e.value || (t = !1);
    }), t || (t = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (e) => {
      e.files.length === 0 && (t = !1, this.addAttachmentError(e));
    }), t);
  }
  addAttachmentError(t) {
    const e = f.getParent(t, lt.rootSelector);
    e !== null && e.classList.add(p.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(t, e) {
    for (let r = 0; r < t.length; r++) {
      const a = this.getGroupParent(t[r]);
      t[r].classList.add(p.ERROR), a && (e && f.scrollIntoView(a), this.addErrorMessage(a));
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
      const r = this.getGroupParent(t[e]);
      t[e].classList.remove(p.ERROR), r && this.delErrorMessage(r);
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
        const h = i.closest('input[type="text"]');
        h && !r && h.value.length >= this.minLengthOther && (r = !0);
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
    t == null || t.classList.add(p.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(B.noCustomSubmitClass);
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
      let h;
      (i.type === "text" || i.type === "email" || i.tagName === "TEXTAREA") && (h = i.value), r.push({
        input: i,
        value: h
      });
    }
    return r;
  }
};
S(B, "rootSelector", ".form"), S(B, "instances", []), S(B, "delimiter", "-formHelper-"), S(B, "noCustomSubmitClass", "form--no-custom-submit"), S(B, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let H = B;
const ts = {
  tagName: "formular",
  data() {
    return {
      originalAction: "",
      formAction: "",
      formInstance: null
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
        ((s = this.form) == null ? void 0 : s.noCustomSubmit) === !0 ? H.noCustomSubmitClass : "",
        "vue-component"
      ];
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
      let t = 0, e = [];
      return this.form.fields.forEach((r) => {
        if (r.rowStart || r.rowEnd)
          r.rowStart ? (s[t] = e, e.push(r), r.rowEnd && (e = [], t++)) : r.rowEnd && (e.push(r), e = [], t++);
        else {
          if (e.push(r), s[t]) return;
          s[t] = e, e = [], t++;
        }
      }), s;
    }
  },
  beforeMount() {
    this.originalAction = this.formAction = this.form.action;
  },
  mounted() {
    this.formInstance = new H(this.$refs.root), this.$refs.headline && U.init([this.$refs.headline]);
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
      return f.isTrue(this.hasUuid) ? H.getId(e) : e;
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
}, es = { class: "row" }, ss = { class: "col-sm-12" }, is = ["innerHTML"], rs = ["method", "action"];
function as(s, t, e, r, a, i) {
  const h = J, d = It, u = W;
  return n(), l("div", {
    class: g(i.classList),
    ref: "root"
  }, [
    o("div", {
      class: g(i.rowClassList)
    }, [
      o("div", {
        class: g(i.wrapperClassList)
      }, [
        e.form.headline ? (n(), l("div", {
          key: 0,
          class: g(i.headlineClassList),
          "data-utility-animation-step": "1",
          ref: "headline"
        }, [
          o("div", es, [
            o("div", ss, [
              x(h, {
                text: e.form.headline,
                level: e.form.level,
                id: e.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              o("p", {
                class: g(i.sublineClassList),
                innerHTML: e.form.subline
              }, null, 10, is)
            ])
          ])
        ], 2)) : m("", !0),
        o("form", {
          class: "form__form js-validate mt-6",
          method: i.method,
          action: a.formAction
        }, [
          (n(!0), l(w, null, A(i.preparedBlocks, (_) => (n(), l(w, null, [
            _.length > 0 ? (n(), l("div", {
              key: 0,
              class: g(i.getBlockClassList(_[0]))
            }, [
              (n(!0), l(w, null, A(_, (c) => (n(), l("div", {
                class: g(i.getFieldClassList(c))
              }, [
                x(d, {
                  field: c,
                  options: i.getOptions(c),
                  "replace-value": e.replaceValue,
                  id: i.getId(c),
                  "has-animation": i.hasAnimationValue,
                  onActionChanged: i.updateAction
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged"])
              ], 2))), 256))
            ], 2)) : m("", !0)
          ], 64))), 256)),
          o("div", {
            class: g(i.formClassList)
          }, [
            x(u, {
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
        ], 8, rs)
      ], 2)
    ], 2)
  ], 2);
}
const Tt = /* @__PURE__ */ O(ts, [["render", as]]), ns = {
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
}, os = ["viewBox"], ls = ["fill", "points"];
function cs(s, t, e, r, a, i) {
  return n(), l("figure", {
    class: g("svgshape " + i.svgShapeClasses),
    style: N("pointer-events: all;" + i.translateStyle)
  }, [
    (n(), l("svg", {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 " + i.svgShapeHeight + " " + i.svgShapeObliquity
    }, [
      o("polygon", {
        fill: i.svgShapeColor,
        points: i.points
      }, null, 8, ls)
    ], 8, os))
  ], 6);
}
const xt = /* @__PURE__ */ O(ns, [["render", cs]]), hs = {
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
}, ds = { class: "contact__subline font-weight-bold font-size-2" }, us = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, ms = {
  key: 0,
  class: "contact__person-quote"
}, gs = { class: "contact__icon" }, fs = { class: "contact__image-quote" }, _s = { class: "contact__image-spacer" }, ps = { class: "contact__quote font-size-3 middle font-weight-light" }, ys = { class: "d-flex flex-column" }, vs = { class: "font-weight-light" }, bs = { class: "contact__image" }, ws = { class: "contact__name font-size-4 my-6 mx-5" }, xs = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, Ss = ["href"], ks = { class: "streamline-sm mr-4" }, Cs = { class: "contact__detail-text" }, Ls = {
  key: 0,
  class: "contact__notes"
}, Es = { class: "contact__notes-spacing streamline-sm mr-4" }, As = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, Os = ["href"], Is = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, Ts = ["href"], Ds = {
  key: 0,
  class: "contact__detail-quote"
}, Ns = ["href"], Ps = { class: "streamline-sm mr-4" }, Vs = {
  key: 0,
  class: "contact__notes"
}, Ms = { class: "contact__notes-spacing streamline-sm mr-4" };
function Rs(s, t, e, r, a, i) {
  const h = xt, d = J, u = Tt, _ = Q, c = Y, C = G, k = vt;
  return n(), l(w, null, [
    e.contact.svgShape ? (n(), b(h, {
      key: 0,
      align: e.contact.svgShape.align,
      peak: e.contact.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : m("", !0),
    o("div", {
      class: g(i.classList),
      style: N(i.styleObject)
    }, [
      o("div", {
        class: g(i.contactContainerClass)
      }, [
        o("div", {
          class: g(i.contactRowClass)
        }, [
          e.collapsed ? m("", !0) : (n(), l("div", {
            key: 0,
            class: g(["contact__form", i.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            x(d, {
              text: e.contact.headline,
              classes: e.contact.headlineClasses,
              level: e.level
            }, null, 8, ["text", "classes", "level"]),
            o("span", ds, y(e.contact.subline), 1),
            e.contact.form ? (n(), b(u, {
              key: 0,
              form: e.contact.form,
              ajax: e.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : m("", !0),
            e.contact.buttons ? (n(), l("div", us, [
              x(_, {
                list: e.contact.buttons
              }, null, 8, ["list"])
            ])) : m("", !0)
          ], 2)),
          o("div", {
            class: g(["contact__box", i.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            o("div", {
              class: g(["contact__person", i.contactLight])
            }, [
              e.quote ? (n(), l("div", ms, [
                o("div", gs, [
                  x(c, { icon: "quotes" })
                ]),
                o("div", fs, [
                  o("div", _s, [
                    x(C, {
                      img: e.contact.person.image,
                      cloudinary: e.contact.person.cloudinary,
                      alt: e.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                o("div", ps, y(e.contact.person.quote), 1),
                o("div", ys, [
                  o("span", null, y(e.contact.person.quotee), 1),
                  o("span", vs, y(e.contact.person.quoteeTitle), 1)
                ])
              ])) : (n(), l(w, { key: 1 }, [
                o("div", bs, [
                  x(C, {
                    img: e.contact.person.image,
                    cloudinary: e.contact.person.cloudinary,
                    alt: e.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                o("div", ws, y(e.contact.person.name), 1),
                o("div", xs, [
                  (n(!0), l(w, null, A(e.contact.person.details, (L, V) => (n(), l("div", {
                    key: V,
                    class: g(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !V === e.contact.person.details.length - 1 }])
                  }, [
                    o("a", {
                      href: L.href,
                      class: "d-flex custom"
                    }, [
                      o("span", ks, [
                        L.icon === "site/mail" ? (n(), b(k, {
                          key: 0,
                          icon: "site/mail"
                        })) : (n(), b(k, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      o("span", Cs, y(L.text), 1)
                    ], 8, Ss),
                    L.notes ? (n(), l("div", Ls, [
                      o("span", Es, [
                        L.icon === "site/mail" ? (n(), b(k, {
                          key: 0,
                          icon: "site/mail"
                        })) : (n(), b(k, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      j(" " + y(L.notes), 1)
                    ])) : m("", !0)
                  ], 2))), 128)),
                  e.contact.person.number ? (n(), l("div", As, [
                    o("a", {
                      href: "tel:" + e.contact.person.number,
                      class: "custom"
                    }, [
                      x(k, { icon: "site/phone" }),
                      j(" " + y(e.contact.person.number), 1)
                    ], 8, Os)
                  ])) : m("", !0),
                  e.contact.person.mail ? (n(), l("div", Is, [
                    o("a", {
                      href: "mailto:" + e.contact.person.mail,
                      class: "custom"
                    }, [
                      x(k, { icon: "site/mail" }),
                      j(" " + y(e.contact.person.mail), 1)
                    ], 8, Ts)
                  ])) : m("", !0)
                ])
              ], 64))
            ], 2),
            e.quote ? (n(), l("div", Ds, [
              x(d, {
                text: e.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (n(!0), l(w, null, A(e.contact.person.details, (L, V) => (n(), l("div", {
                key: V,
                class: g(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !V === e.contact.person.details.length - 1 }])
              }, [
                o("a", {
                  href: L.href,
                  class: "custom"
                }, [
                  o("span", Ps, [
                    L.icon === "site/mail" ? (n(), b(k, {
                      key: 0,
                      icon: "site/mail"
                    })) : (n(), b(k, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  j(" " + y(L.text), 1)
                ], 8, Ns),
                L.notes ? (n(), l("div", Vs, [
                  o("span", Ms, [
                    L.icon === "site/mail" ? (n(), b(k, {
                      key: 0,
                      icon: "site/mail"
                    })) : (n(), b(k, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  j(" " + y(L.notes), 1)
                ])) : m("", !0)
              ], 2))), 128))
            ])) : m("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)
  ], 64);
}
const Fs = /* @__PURE__ */ O(hs, [["render", Rs]]), Bs = {
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
}, Hs = { class: "row" };
function js(s, t, e, r, a, i) {
  const h = J;
  return n(), l("div", {
    class: g(i.classList)
  }, [
    o("div", Hs, [
      o("div", {
        class: g(["col-sm-12", i.animationStepClass, i.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        x(h, {
          level: e.level,
          text: e.text,
          classes: e.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const Dt = /* @__PURE__ */ O(Bs, [["render", js]]), zs = {
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
function qs(s, t, e, r, a, i) {
  return e.hideContainer ? ft(s.$slots, "default", { key: 1 }) : (n(), l("div", {
    key: 0,
    class: g(i.classList)
  }, [
    ft(s.$slots, "default")
  ], 2));
}
const Nt = /* @__PURE__ */ O(zs, [["render", qs]]), Us = {
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
}, Gs = {
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
      s.style.width = "0px", t.classList.remove(p.COLLAPSED), this.emitEnded();
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
};
class pt {
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
    const h = this.getPercentage(e, i), d = this.isOutOfViewport(h), u = e > a - window.innerHeight;
    !d && u ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = i + "px", this.root.classList.remove(p.OFF_SCREEN), this.root.classList.add(p.STICKY), this.updateClipPath(h)) : h === 0 ? (this.isUpdating = !1, this.root.classList.remove(p.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(p.STICKY), this.root.classList.add(p.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const t = this.root.parentNode;
    this.spacer = document.createElement("div"), t && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), t.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(p.HAS_BACKGROUND) || f.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const t = this.spacer.nextSibling, e = "--color-sticky-scroller";
    if (!t) return;
    const r = f.getElementBgColor(t) || f.getElementBgColor(t.firstChild);
    this.spacer.style.setProperty(e, r), this.spacer.classList.add(p.HAS_BACKGROUND);
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
S(pt, "rootSelector", ".is-sticky-scroller"), S(pt, "instances", []);
const Ws = {
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
}, Js = {
  tagName: "hero",
  components: {
    "hero-pattern": Ws
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
        this.hasStickyScroller ? pt.getRootClass() : ""
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
}, $s = { class: "hero__container container" }, Xs = {
  key: 0,
  class: "hero__back-row row"
}, Zs = { class: "hero__back-col col" }, Ks = { class: "hero__back back" }, Ys = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, Qs = { class: "hero__intro-col col" }, ti = {
  key: 0,
  class: "hero__overline"
}, ei = {
  key: 2,
  class: "hero__content-shape"
}, si = ["innerHTML"], ii = {
  key: 5,
  class: "hero__badges"
}, ri = { class: "hero__badge-container" }, ai = { class: "hero__background-shape" };
function ni(s, t, e, r, a, i) {
  const h = ut("hero-pattern"), d = G, u = Y, _ = Gs, c = J, C = Q, k = Us, L = Nt;
  return n(), l("div", {
    class: g(i.classList),
    style: N(a.style)
  }, [
    i.pattern ? (n(), b(h, {
      key: 0,
      class: "hero__pattern"
    })) : m("", !0),
    i.img ? (n(), b(d, {
      key: 1,
      class: "hero__background-img",
      cloudinary: i.background.cloudinary,
      img: i.img
    }, {
      default: K(() => t[0] || (t[0] = [
        j(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : m("", !0),
    o("div", $s, [
      o("main", {
        class: g(i.contentClassList)
      }, [
        i.hasBack ? (n(), l("div", Xs, [
          o("div", Zs, [
            o("div", Ks, [
              x(u, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : m("", !0),
        i.letterSwitcher ? (n(), b(_, R({ key: 1 }, i.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: i.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : m("", !0),
        i.overline || i.headlineText || i.subline ? (n(), l("div", Ys, [
          o("div", Qs, [
            i.overline ? (n(), l("span", ti, y(i.overline), 1)) : m("", !0),
            i.headlineText ? (n(), b(c, {
              key: 1,
              class: g(i.headlineClassList),
              level: i.level,
              innerHTML: i.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : m("", !0),
            i.shapeInContent ? (n(), l("div", ei, [
              i.showShape ? (n(), b(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : m("", !0)
            ])) : m("", !0),
            i.subline ? (n(), l("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: i.subline
            }, null, 8, si)) : m("", !0),
            i.ctaList ? (n(), b(C, {
              key: 4,
              classes: "hero__cta-list",
              list: i.ctaList
            }, null, 8, ["list"])) : m("", !0),
            i.badges ? (n(), l("div", ii, [
              (n(!0), l(w, null, A(i.badges, (V) => (n(), l("div", ri, [
                x(d, R({
                  cloudinary: !0,
                  ref_for: !0
                }, V, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : m("", !0)
          ])
        ], 512)) : m("", !0),
        i.animation ? (n(), b(k, {
          key: 3,
          animation: i.animation,
          cta: i.cta,
          icon: i.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : m("", !0)
      ], 2)
    ]),
    i.shape ? (n(), b(L, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !i.showShapeContainer
    }, {
      default: K(() => [
        x(L, {
          classes: "hero__background-shape-content",
          hideContainer: !i.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: K(() => [
            o("div", ai, [
              i.showShape ? (n(), b(d, {
                key: 0,
                cloudinary: i.shape.cloudinary,
                img: i.shape.img,
                alt: i.shape.alt,
                lottie: i.lottieFileData,
                "lottie-settings": i.lottieSettings,
                "img-src-sets": i.imgSrcSets
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
const oi = /* @__PURE__ */ O(Js, [["render", ni]]), li = {
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
}, ci = { class: "container space-lg-2" }, hi = {
  key: 0,
  class: "row mb-9 mt-9"
}, di = { class: "row" }, ui = { class: "col" }, mi = ["innerHTML"];
function gi(s, t, e, r, a, i) {
  const h = J;
  return n(), l("figure", {
    class: g(i.classList),
    ref: "root"
  }, [
    o("div", ci, [
      e.headline ? (n(), l("div", hi, [
        o("div", {
          class: g(["col", e.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          x(h, { text: e.headline }, null, 8, ["text"])
        ], 2)
      ])) : m("", !0),
      o("div", di, [
        o("div", ui, [
          o("p", {
            class: g(["intro-text__copy fade-in-bottom", e.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: e.copy
          }, null, 10, mi)
        ])
      ])
    ])
  ], 2);
}
const fi = /* @__PURE__ */ O(li, [["render", gi]]), _i = {
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
    this.$refs.root && U.init([this.$refs.root]);
  }
}, pi = { class: "container space-2" }, yi = { class: "row" }, vi = { class: "product-blocks__content" }, bi = { key: 0 }, wi = { key: 1 }, xi = {
  key: 2,
  class: "dashed"
}, Si = { class: "product-blocks__buttons" };
function ki(s, t, e, r, a, i) {
  const h = Dt, d = G, u = Q, _ = W;
  return n(), l("div", {
    class: "product-blocks utility-animation container-fluid",
    style: N(i.backgroundColorStyle),
    ref: "root"
  }, [
    o("div", pi, [
      e.headline ? (n(), l("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: N(i.animationStyle(1))
      }, [
        x(h, {
          text: e.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : m("", !0),
      o("div", yi, [
        (n(!0), l(w, null, A(e.productBlocks.items, (c, C) => (n(), l("div", {
          key: C,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: N(i.animationStyle(C + 1))
        }, [
          o("div", {
            class: g(["product-blocks__block", { "text-center": c.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            o("div", vi, [
              o("figure", {
                class: g(["product-blocks__img", { "mx-auto": c.copy === "" }, "mb-4"])
              }, [
                c.image ? (n(), b(d, {
                  key: 0,
                  img: c.image,
                  cloudinary: c.cloudinary,
                  alt: c.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : m("", !0)
              ], 2),
              c - e.headline ? (n(), l("h3", bi, y(c.headline), 1)) : m("", !0),
              c.copy ? (n(), l("p", wi, y(c.copy), 1)) : m("", !0),
              c.bulletList ? (n(), l("ul", xi, [
                (n(!0), l(w, null, A(c.bulletList, (k, L) => (n(), l("li", { key: L }, y(k), 1))), 128))
              ])) : m("", !0)
            ]),
            o("div", Si, [
              c.list ? (n(), b(u, {
                key: 0,
                list: c.list
              }, null, 8, ["list"])) : c.ctaText ? (n(), b(_, {
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
const Ci = /* @__PURE__ */ O(_i, [["render", ki]]), Li = {
  tagName: "product-stage",
  props: {
    stage: Object,
    products: Object,
    background: String,
    bgColor: {
      type: String,
      default: "var(--color-primary)"
    },
    slider: Object,
    buttons: Array,
    cards: Object,
    shape: Object,
    overlapping: Boolean
  },
  computed: {
    shapeClasses() {
      return this.overlapping ? "position-absolute bottom-0 left-0 z-index-1 w-100" : "position-relative z-index-1";
    }
  }
}, Ei = { class: "product-stage__content container position-relative" }, Ai = { class: "space-top-2 space-top-lg-4 space-top-xl-5 text-white space-bottom-1 space-bottom-lg-2" }, Oi = ["innerHTML"], Ii = {
  key: 1,
  class: "row justify-content-center py-6"
}, Ti = { class: "text-center" }, Di = {
  key: 2,
  class: "row justify-content-center py-6"
}, Ni = {
  key: 3,
  class: "space-bottom-2 space-bottom-lg-3"
}, Pi = ["href", "target", "id", "aria-controls", "aria-selected"], Vi = { class: "d-flex flex-column align-items-center position-relative z-index-2" }, Mi = {
  key: 1,
  class: "mb-6 flex-grow-1"
};
function Ri(s, t, e, r, a, i) {
  const h = ut("pricing-slider"), d = Q, u = W, _ = xt;
  return n(), l("section", {
    class: "product-stage position-relative overflow-hidden",
    style: N({ backgroundColor: e.bgColor })
  }, [
    t[0] || (t[0] = gt('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>', 1)),
    o("div", Ei, [
      o("div", Ai, [
        o("h1", null, y(e.stage.headline), 1),
        e.stage.description ? (n(), l("p", {
          key: 0,
          class: "col-lg-8 lead mt-5 px-0",
          innerHTML: e.stage.description
        }, null, 8, Oi)) : m("", !0)
      ]),
      e.slider && e.products ? (n(), b(h, {
        key: 0,
        slider: e.slider,
        tooltip: e.stage.tooltip,
        "modal-id": e.stage.modalId
      }, null, 8, ["slider", "tooltip", "modal-id"])) : m("", !0),
      e.stage.additionalCopy ? (n(), l("div", Ii, [
        o("div", Ti, y(e.stage.additionalCopy), 1)
      ])) : m("", !0),
      e.buttons ? (n(), l("div", Di, [
        x(d, { list: e.buttons }, null, 8, ["list"])
      ])) : (n(), l("div", Ni)),
      e.cards ? (n(), l("ul", {
        key: 4,
        class: g(["row nav nav-pills", { "px-1 px-lg-0": e.cards.tabs }]),
        role: "tablist"
      }, [
        (n(!0), l(w, null, A(e.cards.list, (c, C) => (n(), l("li", {
          key: C,
          class: g([
            "col-lg-" + 12 / e.cards.list.length,
            { "px-1 px-lg-3 nav-item": e.cards.tabs, "mb-6 mb-md-8 mb-lg-0": !e.cards.tabs }
          ])
        }, [
          c.link ? (n(), l("a", {
            key: 0,
            href: c.link.href,
            target: c.link.target,
            class: g(["product-stage__tab h-100 rounded position-relative d-block", { active: e.cards.tabs && C === 0 }]),
            id: c.id ? c.id + "-tab" : "",
            "data-toggle": "pill",
            role: "tab",
            "aria-controls": c.id,
            "aria-selected": e.cards.tabs && C === 0
          }, [
            o("div", {
              class: g(["product-stage__tab-content position-relative h-100", { "product-stage__tab-content--alternative-border": e.cards.tabs }])
            }, [
              o("div", {
                class: g(["rounded", { "p-2 p-lg-8": c.link, "p-8 bg-white shadow-lg": !c.link }])
              }, [
                o("div", Vi, [
                  c.title ? (n(), l("h2", {
                    key: 0,
                    class: g(["font-size-3 mb-2 mb-md-6 text-center", { "text-primary": c.link }])
                  }, y(c.title), 3)) : m("", !0),
                  c.description ? (n(), l("p", Mi, y(c.description), 1)) : m("", !0),
                  c.cta !== c.href ? (n(), b(u, {
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
          ], 10, Pi)) : m("", !0)
        ], 2))), 128))
      ], 2)) : m("", !0)
    ]),
    e.shape ? (n(), l(w, { key: 0 }, [
      e.shape.isActive !== !1 ? (n(), b(_, {
        key: 0,
        align: "bottom",
        peak: "left",
        obliquity: 4,
        classes: i.shapeClasses,
        color: e.shape.color
      }, null, 8, ["classes", "color"])) : m("", !0)
    ], 64)) : m("", !0)
  ], 4);
}
const Fi = /* @__PURE__ */ O(Li, [["render", Ri]]);
class Bi {
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
    let i = r.replace(/<\/?span[^>]*>/g, ""), h = 0;
    const d = 5, u = 2;
    return t === 0 ? i = i.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (_, c) => c.length > d && /^\s*$/.test(c) ? c : h < u && c.length > d && c[0] !== "," ? (h++, "<p>" + c.trim() + "</p>") : c).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(i) && i.length > d && (i = "<p>" + i + "</p>"), `${a}${i}`.replace(/<\/p><br><p>/g, "</p><p>");
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
      const r = e.split(" / "), a = r[0], i = r[1], h = "CSOC", d = "Managed Services", u = "Products";
      if (a === d && i !== h)
        e = d;
      else if (a === u)
        e = `${u} ${i}`;
      else
        switch (i) {
          case "Azure Architecture":
            e = "Azure";
            break;
          case "M365 Architecture":
            e = "Workplace";
            break;
          case h:
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
class Hi {
  constructor(t) {
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
    const e = new Bi(t), r = (i = this.options) == null ? void 0 : i.jobId;
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
    var i, h;
    const e = t, r = "workzag-jobs", a = (i = t[r]) == null ? void 0 : i.position;
    return e.objects = a.length ? (h = t[r]) == null ? void 0 : h.position.map((d) => this.convertPosition(d)).filter(Boolean) : [this.convertPosition(a)].filter(Boolean), e.meta = { offset: 0, limit: 20, total: 10 }, e;
  }
  getConvertedJson(t) {
    const r = new DOMParser().parseFromString(t, "application/xml"), a = f.XMLtoJSON(r);
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
      var h;
      if ((h = this.options) != null && h.client_name) {
        const d = fetch(t, e), u = r === this.responseTypes.XML ? this.fetchXML(d) : d;
        a(u);
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
      this.uploadDocuments(t).then((h) => {
        if (this.hasValidResponseCodes(h)) return this.addFilesToFields(h, r, a, i);
        const d = h[0];
        d.json().then((u) => {
          if (u.errors) return i({ statusCode: d.status, errors: u.errors });
        }).catch((u) => i(u));
      }).catch((h) => i(h));
    });
  }
  addFilesToFields(t, e, r, a) {
    const i = e;
    i.files = [];
    const h = t.map((d) => d.json().then((u) => {
      i.files.push({
        uuid: u.uuid,
        original_filename: u.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(h).then(() => r(i)).catch((d) => a(d));
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
    return this.options.apiUrl ? t.status === Z.VALID : t.status === Z.VALID || t.status === Z.CREATED || t.status === Z.NO_CONTENT;
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
      const d = t[i].input, u = e.getName(d.name), _ = f.camalCaseToSnakeCase(u);
      a.hasOwnProperty(_) ? r[_] = d.value : _ !== "_gotcha" && r.attributes.push({
        id: this.getMappedFieldName(_),
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
class ji {
  constructor(t) {
    S(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = t, this.api = new Hi(this.options), this.jobDataUrl = f.getSiteAssetPath(this.jobDataUrl);
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
const q = class q {
  constructor(t, e) {
    this.root = t, this.options = e, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(p.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new ji({
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
        const h = a.querySelector(this.buttonSelector);
        h == null || h.addEventListener("click", this.handleOpen.bind(this));
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
    const e = this.form.querySelector(lt.base64Selector), r = e == null ? void 0 : e.value;
    let a = this.api.getFormData(this.form), i;
    if (r)
      i = {
        name: e.dataset.fileName
      };
    else {
      const h = this.form.querySelector('input[type="file"]');
      i = h == null ? void 0 : h.files;
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
    this.root.classList.add(p.SUCCESS);
    const e = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (e) {
      e.dataset.text || (e.dataset.text = e.innerText);
      const r = t.first_name;
      e.innerText = `${e.dataset.text} ${r}`;
    }
  }
  handleError(t) {
    if (!t) return console.error("handle generic error");
    const e = typeof t == "string" ? t : t.message ? t.message : t, r = typeof t == "object" && t.statusCode ? t.statusCode : Z.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", e), r === Z.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(t) : this.root.classList.add(p.ERROR);
  }
  handlePayloadTooLarge(t) {
    document.dispatchEvent(new CustomEvent(P.FORM_ATTACHMENT_ERROR, { detail: t }));
  }
  handleClose(t) {
    t.preventDefault(), q.close(this.root);
  }
  handleOpen(t) {
    t.preventDefault(), q.open(this.root);
  }
  static initElement(t, e) {
    const r = new this(t, e);
    return this.instances.push(r), r;
  }
  static open(t) {
    t && window.$ && $(t).modal("show");
  }
  static close(t) {
    t && window.$ && ($(t).modal("hide"), q.resetModal(t));
  }
  static resetModal(t) {
    setTimeout(function() {
      const e = t.querySelector("form");
      e == null || e.reset(), t.classList.remove(p.SUCCESS), t.classList.remove(p.ERROR);
    }, 200);
  }
  static init(t) {
    this.instances = [];
    const e = t || document, r = `${this.rootSelector}:not(.${p.READY})`;
    [].forEach.call(e.querySelectorAll(r), (a) => {
      this.initElement(a);
    });
  }
};
S(q, "rootSelector", ".modal"), S(q, "instances", []);
let yt = q;
const zi = {
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
    this.observer.disconnect(), document.removeEventListener(P.LOAD_MODAL, this.handleLoading);
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
        yt.open(this.$refs.modal);
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
}, qi = {
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
}, Ui = {
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
    this.$refs.root && U.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, Gi = { class: "container" }, Wi = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, Ji = {
  key: 3,
  class: "richtext"
}, $i = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, Xi = ["innerHTML"], Zi = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, Ki = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function Yi(s, t, e, r, a, i) {
  const h = G, d = qi, u = J, _ = Q, c = W, C = zi;
  return n(), l("div", {
    class: g(i.textImageClass),
    style: N(i.textImageStyle),
    ref: "root"
  }, [
    o("div", Gi, [
      o("div", {
        class: g(["row", { "flex-row-reverse": e.left }])
      }, [
        e.float ? (n(), l("div", {
          key: 0,
          class: g([
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
          style: N({ cursor: e.href ? "pointer" : void 0 })
        }, [
          x(h, {
            img: e.image,
            cloudinary: e.cloudinary,
            alt: e.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: e.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : m("", !0),
        o("div", {
          class: g(i.textImageFirstColClasses),
          onClick: t[1] || (t[1] = (...k) => i.handleClick && i.handleClick(...k)),
          style: N({ cursor: e.href ? "pointer" : void 0 })
        }, [
          o("div", {
            class: g(["text-image__first-col-wrapper", { "fade-in-bottom": !e.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            x(h, {
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
          class: g(i.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          e.badge ? (n(), b(d, {
            key: 0,
            text: e.badge.text,
            icon: e.badge.icon,
            uppercase: !e.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : m("", !0),
          e.overline ? (n(), l("span", Wi, y(e.overline), 1)) : m("", !0),
          e.headlineText ? (n(), b(u, {
            key: 2,
            level: e.level,
            classes: i.textImageHeadlineClassesComputed
          }, {
            default: K(() => [
              j(y(e.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : m("", !0),
          e.subline ? (n(), l("span", Ji, y(e.subline), 1)) : m("", !0),
          e.subline ? (n(), l("div", $i, [
            x(h, {
              img: e.image,
              cloudinary: e.cloudinary,
              imgSrcSets: i.textImageImgSrcSets,
              preset: i.textImagePreset,
              alt: e.alt,
              lottie: e.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : m("", !0),
          o("div", {
            class: g(i.textImageLightTextClass),
            innerHTML: e.copy
          }, null, 10, Xi),
          e.list ? (n(), l("div", Zi, [
            x(_, { list: e.list }, null, 8, ["list"])
          ])) : m("", !0)
        ], 2),
        e.cta ? (n(), l("div", Ki, [
          x(c, {
            text: e.cta.text,
            button: "",
            href: e.cta.href,
            trigger: e.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : m("", !0)
      ], 2)
    ]),
    e.modal ? (n(), b(C, {
      key: 0,
      form: e.modal.form,
      success: e.modal.success,
      error: e.modal.error,
      application: !0,
      clientName: e.modal.clientName,
      jobId: e.modal.jobId,
      apiUrl: e.modal.apiUrl,
      apiKey: e.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : m("", !0)
  ], 6);
}
const Qi = /* @__PURE__ */ O(Ui, [["render", Yi]]), kt = {
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
}, tr = {
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
}, er = {
  tagName: "v-footer",
  components: {
    "footer-slider": tr
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
      return this.data ? { ...kt, ...f.getJSON(this.data) } : { ...kt };
    },
    links() {
      const s = this.lang.toLowerCase();
      if (s === "de" || s === "")
        return this.dataValue.links;
      {
        const t = f.capitalize(this.lang), e = this.dataValue[`links${t}`];
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
}, sr = { class: "container" }, ir = { class: "footer__content-row row" }, rr = { class: "footer__content col-lg-12" }, ar = { class: "footer__address" }, nr = ["href", "target"], or = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, lr = {
  key: 0,
  class: "nav-item"
}, cr = {
  key: 1,
  class: "nav-item"
}, hr = {
  key: 2,
  class: "nav-item"
}, dr = { class: "footer__postal-code" }, ur = { class: "footer__city" }, mr = { class: "footer__country" }, gr = {
  key: 4,
  class: "nav-item"
}, fr = ["href"], _r = { class: "media" }, pr = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, yr = { class: "media-body" }, vr = {
  key: 5,
  class: "footer__nav-item nav-item"
}, br = { class: "footer__nav-link nav-link" }, wr = { class: "footer__offices" }, xr = { class: "footer__office" }, Sr = { key: 0 }, kr = ["href"], Cr = { class: "d-flex" }, Lr = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, Er = { class: "footer__mail media-body" }, Ar = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, Or = ["href", "target"], Ir = { class: "footer__highlights" }, Tr = { class: "footer__partners" }, Dr = ["href", "target"], Nr = {
  key: 0,
  class: "footer__vertical-line"
}, Pr = {
  key: 0,
  class: "footer__content-row row"
}, Vr = { class: "footer__content col-lg-12" }, Mr = { class: "mt-3" }, Rr = { class: "row align-items-md-center mb-3" }, Fr = { class: "col-md-8 mb-4 mb-md-0" }, Br = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, Hr = { class: "nav-item mr-6 footer__links" }, jr = ["href"], zr = { class: "col-md-4 text-md-right" }, qr = { class: "list-inline mb-0 footer__socials" }, Ur = { class: "list-inline-item" }, Gr = ["title", "href"], Wr = { class: "row pb-2" }, Jr = { class: "col" }, $r = { class: "text-white small" };
function Xr(s, t, e, r, a, i) {
  const h = G, d = vt, u = Y, _ = ut("footer-slider");
  return n(), l("footer", {
    class: g(i.classList),
    style: N(i.style),
    ref: "root"
  }, [
    o("div", sr, [
      o("div", ir, [
        o("div", rr, [
          o("div", ar, [
            (n(!0), l(w, null, A(i.dataValue.logos, (c) => (n(), l("div", {
              class: g(["mb-3", c == null ? void 0 : c.classes])
            }, [
              o("a", {
                href: c.url,
                target: c.target,
                "aria-label": "Front",
                class: g([
                  "footer__logos-link d-block pr-6",
                  c.linkClasses ? c.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                x(h, R({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, nr)
            ], 2))), 256)),
            (n(!0), l(w, null, A(i.locations, (c) => (n(), l("ul", or, [
              c.name ? (n(), l("li", lr, y(c.name), 1)) : m("", !0),
              c.over ? (n(), l("li", cr, y(c.over), 1)) : m("", !0),
              c.street ? (n(), l("li", hr, y(c.street), 1)) : m("", !0),
              c.city ? (n(), l("li", {
                key: 3,
                class: g(["nav-item footer__address-block", c.postalReversed ? "is-reversed" : ""])
              }, [
                o("span", dr, y(c.postalCode), 1),
                o("span", ur, y(c.city), 1),
                o("span", mr, y(c.country), 1)
              ], 2)) : m("", !0),
              c.number ? (n(), l("li", gr, [
                o("a", {
                  class: "nav-link media",
                  href: "tel:" + c.number
                }, [
                  o("span", _r, [
                    o("span", pr, [
                      x(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    o("span", yr, y(c.number), 1)
                  ])
                ], 8, fr)
              ])) : m("", !0),
              i.dataValue.offices ? (n(), l("li", vr, [
                o("a", br, [
                  x(u, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  o("div", wr, [
                    (n(!0), l(w, null, A(i.dataValue.offices, (C, k) => (n(), l("span", xr, [
                      j(y(C), 1),
                      k < i.dataValue.offices.length - 1 ? (n(), l("span", Sr, ", ")) : m("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : m("", !0),
              c.mail ? (n(), l("li", {
                key: 6,
                class: g(["nav-item", i.locations.length > 1 ? "pt-4" : ""])
              }, [
                o("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + c.mail
                }, [
                  o("span", Cr, [
                    o("span", Lr, [
                      x(d, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    o("span", Er, y(c.mail), 1)
                  ])
                ], 8, kr)
              ], 2)) : m("", !0)
            ]))), 256)),
            i.isCorporate ? m("", !0) : (n(!0), l(w, { key: 0 }, A(i.dataValue.brandLogos, (c, C) => (n(), l(w, null, [
              c.title ? (n(), l("span", Ar, y(c.title), 1)) : m("", !0),
              o("a", {
                href: c.url,
                target: c.target,
                class: g([
                  "footer__brand-logo-link d-block space-top-1",
                  C === 0 ? "mt-3" : "",
                  c.classes ? c.classes : "w-90"
                ])
              }, [
                x(h, R({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, Or)
            ], 64))), 256))
          ]),
          o("div", Ir, [
            o("div", Tr, [
              (n(!0), l(w, null, A(i.dataValue.partners, (c, C) => (n(), l(w, null, [
                o("a", {
                  href: c.url,
                  target: c.target,
                  class: "footer__partner-images"
                }, [
                  x(h, R({
                    cloudinary: !0,
                    ref_for: !0
                  }, c, { class: "footer__partner-image" }), null, 16)
                ], 8, Dr),
                C < i.dataValue.partners.length - 1 ? (n(), l("div", Nr)) : m("", !0)
              ], 64))), 256))
            ]),
            i.isCorporate ? m("", !0) : (n(), b(_, {
              key: 0,
              items: i.dataValue.highlights,
              "bg-color": a.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      i.isCorporate ? (n(), l("div", Pr, [
        o("div", Vr, [
          x(_, {
            items: i.dataValue.highlights,
            "bg-color": a.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : m("", !0),
      t[0] || (t[0] = o("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      o("div", Mr, [
        o("div", Rr, [
          o("div", Fr, [
            o("ul", Br, [
              (n(!0), l(w, null, A(i.links, (c) => (n(), l("li", Hr, [
                o("a", R({
                  class: "nav-link",
                  href: c.url,
                  ref_for: !0
                }, c), y(c.title), 17, jr)
              ]))), 256))
            ])
          ]),
          o("div", zr, [
            o("ul", qr, [
              (n(!0), l(w, null, A(i.dataValue.socials, (c) => (n(), l("li", Ur, [
                o("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: c.title,
                  href: c.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  o("i", {
                    class: g(["fab", c.icon])
                  }, null, 2)
                ], 8, Gr)
              ]))), 256))
            ])
          ])
        ]),
        o("div", Wr, [
          o("div", Jr, [
            o("p", $r, "Copyright © " + y(i.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const Zr = /* @__PURE__ */ O(er, [["render", Xr]]), Ct = {}, Kr = {
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
      if (!Ct) return;
      const r = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: e
      };
      this.searchEngine = new Ct(t, r);
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
}, Yr = {
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
      return f.isTrue(this.hidden) === !0;
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
      return f.isBelowBreakpoint("md");
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
}, Qr = {
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
        this.activeNavigation.length > 0 ? "" : p.LOADING,
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
      var t;
      const s = this.$refs.link;
      if (s)
        for (let e = 0; e < s.length; e++) {
          const r = s[e], a = (t = r == null ? void 0 : r.querySelector(".header__link-text-spacer")) == null ? void 0 : t.clientWidth;
          r.style.setProperty("--header-link-text-width", a + "px");
        }
    },
    showFlyoutBlock(s) {
      return !(s.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return f.isBelowBreakpoint("md");
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
      e.classList.add(p.EXPANDED);
      const r = this.getFlyoutRef(t);
      r && (this.flyoutIndex = t, r.classList.add(p.EXPANDED));
    },
    handleMouseOut(s) {
      var r;
      if ((r = s.relatedTarget) != null && r.closest(".header__flyout")) return;
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
      const e = t.filter((r) => r !== this.lowerLang);
      if (e.length)
        return e[0];
    },
    handleLanguageSwitch(s) {
      var r;
      const t = this.getActiveUrlByLang(s), e = t || ((r = this.home.languages[s]) == null ? void 0 : r.url);
      f.storageSave("preferedLanguage", s, !1), document.location.href = e;
    },
    getCurrentPath() {
      let s = "/";
      return typeof process < "u" && process.server ? s = this.$route.fullPath : s = window.location.pathname, s;
    },
    getActiveUrlByLang(s, t) {
      var d;
      const e = this.getCurrentPath(), r = "/", a = (u, _) => {
        if (!(u != null && u.title)) return;
        let c = u == null ? void 0 : u.url;
        e[(e == null ? void 0 : e.length) - 1] === r && c && c[(c == null ? void 0 : c.length) - 1] !== r && (c = c + r);
        const C = c === e, k = this.getParentLink(_);
        return t && C ? (u.active = !0, k && (k.active = !0)) : (u.active = !1, k && (k.active = !1)), C;
      }, i = (u, _) => _;
      let h = f.findRecursive(this.clonedNavigation, a, i);
      if (h || (h = f.findRecursive(this.meta, a, i)), h || (h = f.findRecursive(this.contact, a, i)), !h) {
        const u = this.getHrefLang(s);
        return u || this.getTranslatedUrl(e, s);
      }
      return (d = h[s]) == null ? void 0 : d.url;
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
      const r = this.isLinkListHidden(s, t);
      return [...e, r ? "" : p.EXPANDED];
    },
    updateProductListHeight() {
      const s = this.$refs["product-list"];
      if (s)
        for (let t = 0; t < s.length; t++) {
          const e = s[t], a = !e.classList.contains(p.EXPANDED) || e.style.height !== "" ? "" : e.scrollHeight + "px";
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
      maxLinkListsInFlyout: 3,
      activeNavigation: {}
    };
  }
}, ta = { class: "header__row row" }, ea = { class: "header__col col" }, sa = { class: "header__logo" }, ia = ["href"], ra = {
  class: "header__list",
  ref: "list"
}, aa = ["href", "target", "onClick"], na = ["onMouseover"], oa = { class: "header__link-text" }, la = { class: "header__link-text-spacer" }, ca = ["href", "target"], ha = { class: "header__product-list-data" }, da = { class: "header__product-list-title font-size-8 bold" }, ua = { class: "header__product-list-subtitle" }, ma = ["href"], ga = { class: "header__footer" }, fa = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, _a = ["href"], pa = { class: "header__contact-text" }, ya = { class: "header__contact-title" }, va = {
  key: 2,
  class: "header__button"
}, ba = {
  key: 3,
  class: "header__language-switch"
}, wa = ["onClick"], xa = {
  key: 0,
  class: "header__button"
}, Sa = { class: "header__link-text" }, ka = { class: "header__link-text-spacer" }, Ca = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, La = ["onClick"], Ea = { class: "row" }, Aa = { class: "col" }, Oa = {
  key: 0,
  class: "header__flyout-items"
}, Ia = {
  key: 0,
  class: "header__flyout-block"
}, Ta = { class: "header__flyout-caption" }, Da = ["innerHTML"], Na = ["href"], Pa = { class: "header__contact-title" }, Va = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, Ma = {
  key: 1,
  class: "header__product-list is-expanded"
}, Ra = ["href", "target"], Fa = { class: "header__product-list-data" }, Ba = { class: "header__product-list-title font-size-8 bold" }, Ha = { class: "header__product-list-subtitle" };
function ja(s, t, e, r, a, i) {
  var C, k, L, V, tt, et;
  const h = G, d = Y, u = Yr, _ = W, c = Kr;
  return n(), l(w, null, [
    o("div", {
      class: "header__spacer",
      style: N(i.spacerBgColor)
    }, null, 4),
    o("header", {
      class: g(i.classList),
      onMouseover: t[5] || (t[5] = (...v) => i.handleHeaderMouseOver && i.handleHeaderMouseOver(...v)),
      onMouseout: t[6] || (t[6] = (...v) => i.handleHeaderMouseOut && i.handleHeaderMouseOut(...v))
    }, [
      o("div", {
        class: g(i.headerContainerClassList)
      }, [
        o("div", ta, [
          o("div", ea, [
            o("div", sa, [
              o("a", {
                href: (C = i.homeObj) == null ? void 0 : C.url
              }, [
                x(h, {
                  img: (k = e.home) == null ? void 0 : k.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0
                }, null, 8, ["img"]),
                x(h, {
                  img: (L = e.home) == null ? void 0 : L.img,
                  class: "header__logo-default",
                  cloudinary: !0
                }, null, 8, ["img"])
              ], 8, ia)
            ]),
            o("div", {
              class: "header__menu",
              onClick: t[0] || (t[0] = (...v) => i.handleCloseClick && i.handleCloseClick(...v))
            }, [
              x(d, {
                icon: "menu",
                class: "header__menu-icon",
                closed: a.closed
              }, null, 8, ["closed"])
            ]),
            o("nav", {
              class: "header__nav",
              onMouseout: t[1] || (t[1] = (...v) => i.handleMouseOut && i.handleMouseOut(...v))
            }, [
              o("ul", ra, [
                (n(!0), l(w, null, A(a.activeNavigation, (v, I) => {
                  var z, st, it, rt, at, X;
                  return n(), l("li", {
                    class: g(i.headerItemClasses(v))
                  }, [
                    v != null && v.languages ? (n(), l("a", {
                      key: 0,
                      class: g(i.headerLinkClasses(v, I)),
                      href: i.getHref(v),
                      target: i.getTarget(v),
                      onClick: (M) => i.handleClick(v, I),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      o("div", {
                        class: "header__link-content",
                        onMouseover: (M) => i.handleMouseOver(v, I, M)
                      }, [
                        o("span", oa, y((z = v.languages[i.lowerLang]) == null ? void 0 : z.title), 1),
                        o("span", la, y((st = v.languages[i.lowerLang]) == null ? void 0 : st.title), 1),
                        v.children ? (n(), b(d, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : m("", !0)
                      ], 40, na)
                    ], 10, aa)) : m("", !0),
                    (n(!0), l(w, null, A(v.children, (M) => (n(), l(w, null, [
                      v.children && !M.products ? (n(), b(u, {
                        key: 0,
                        list: M,
                        lang: i.lowerLang,
                        hidden: i.isLinkListHidden(v, I),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (n(), l("div", {
                        key: 1,
                        class: g(i.headerProductListClasses(v, I)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (n(!0), l(w, null, A(M.children, (D) => {
                          var nt, ot, St;
                          return n(), l("a", {
                            href: (nt = D == null ? void 0 : D.languages[i.lowerLang]) == null ? void 0 : nt.url,
                            target: D.target,
                            class: "header__product-list-item custom"
                          }, [
                            x(h, {
                              img: D.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            o("div", ha, [
                              o("div", da, y((ot = D == null ? void 0 : D.languages[i.lowerLang]) == null ? void 0 : ot.title), 1),
                              o("div", ua, y((St = D == null ? void 0 : D.languages[i.lowerLang]) == null ? void 0 : St.subtitle), 1)
                            ])
                          ], 8, ca);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (it = v.languages[i.lowerLang]) != null && it.emergency ? (n(), l("a", {
                      key: 1,
                      href: (rt = v.languages[i.lowerLang]) == null ? void 0 : rt.emergency.href,
                      class: g(i.navHighlightClasses(v, I))
                    }, [
                      x(d, {
                        icon: (at = v.languages[i.lowerLang]) == null ? void 0 : at.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      j(" " + y((X = v.languages[i.lowerLang]) == null ? void 0 : X.emergency.text), 1)
                    ], 10, ma)) : m("", !0)
                  ], 2);
                }), 256))
              ], 512),
              o("div", ga, [
                i.hasMeta ? (n(), b(u, {
                  key: 0,
                  list: i.metaList,
                  lang: i.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : m("", !0),
                i.hasContact ? (n(), l("div", fa, [
                  (V = e.contact) != null && V.languages ? (n(), l("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (tt = e.contact.languages[i.lowerLang]) == null ? void 0 : tt.url
                  }, [
                    o("div", pa, [
                      x(d, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      o("span", ya, y((et = e.contact.languages[i.lowerLang]) == null ? void 0 : et.title), 1)
                    ])
                  ], 8, _a)) : m("", !0)
                ])) : m("", !0),
                e.button ? (n(), l("div", va, [
                  x(_, {
                    text: e.button.text,
                    href: e.button.href,
                    target: e.button.target,
                    skin: e.button.skin,
                    classes: a.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : m("", !0),
                i.hasLangSwitch ? (n(), l("div", ba, [
                  (n(!0), l(w, null, A(e.home.languages, (v, I) => (n(), l("a", {
                    class: g({ "header__language-link custom": !0, active: I === i.lowerLang }),
                    onClick: (z) => i.handleLanguageSwitch(I)
                  }, y(I), 11, wa))), 256))
                ])) : m("", !0)
              ])
            ], 32),
            e.button ? (n(), l("div", xa, [
              x(_, {
                text: e.button.text,
                href: e.button.href,
                target: e.button.target,
                skin: e.button.skin,
                classes: a.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : m("", !0),
            i.searchValue ? (n(), b(c, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : m("", !0),
            i.hasLangSwitch ? (n(), l("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: t[2] || (t[2] = (...v) => i.handleLanguageOver && i.handleLanguageOver(...v)),
              onMouseout: t[3] || (t[3] = (...v) => i.handleLanguageOut && i.handleLanguageOut(...v)),
              ref: "languageSwitch"
            }, [
              o("span", Sa, y(e.lang), 1),
              o("span", ka, y(e.lang), 1),
              x(d, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              o("div", Ca, [
                (n(!0), l(w, null, A(e.home.languages, (v, I) => (n(), l("a", {
                  class: g({ "header__language-link custom": !0, "d-none": I === i.lowerLang }),
                  onClick: (z) => i.handleLanguageSwitch(I)
                }, y(I), 11, La))), 256))
              ], 512)
            ], 544)) : m("", !0)
          ])
        ])
      ], 2),
      o("div", {
        class: "header__flyout",
        onMouseout: t[4] || (t[4] = (...v) => i.handleMouseOut && i.handleMouseOut(...v))
      }, [
        o("div", {
          class: g(i.containerClass)
        }, [
          o("div", Ea, [
            o("div", Aa, [
              (n(!0), l(w, null, A(a.activeNavigation, (v, I) => {
                var z, st, it, rt, at;
                return n(), l("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  v.children ? (n(), l("div", Oa, [
                    i.showFlyoutBlock(v.children) ? (n(), l("figure", Ia, [
                      o("figcaption", Ta, y((z = v.languages[i.lowerLang]) == null ? void 0 : z.title), 1),
                      o("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (st = v.languages[i.lowerLang]) == null ? void 0 : st.description
                      }, null, 8, Da),
                      i.hasContactLink(v) ? (n(), l("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (it = e.contact.languages[i.lowerLang]) == null ? void 0 : it.url
                      }, [
                        x(d, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        o("span", Pa, y((rt = e.contact.languages[i.lowerLang]) == null ? void 0 : rt.title), 1)
                      ], 8, Na)) : m("", !0),
                      (at = v.languages[i.lowerLang]) != null && at.emergency ? (n(), l("div", Va, [
                        x(_, R({ ref_for: !0 }, v.languages[i.lowerLang].emergency), null, 16)
                      ])) : m("", !0)
                    ])) : m("", !0),
                    (n(!0), l(w, null, A(v.children, (X) => (n(), l(w, null, [
                      v.children && !X.products ? (n(), b(u, {
                        key: 0,
                        list: X,
                        lang: i.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (n(), l("div", Ma, [
                        (n(!0), l(w, null, A(X.children, (M) => {
                          var D, nt, ot;
                          return n(), l("a", {
                            href: (D = M.languages[i.lowerLang]) == null ? void 0 : D.url,
                            target: M.target,
                            class: "header__product-list-item custom"
                          }, [
                            x(h, {
                              img: M.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            o("div", Fa, [
                              o("div", Ba, y((nt = M.languages[i.lowerLang]) == null ? void 0 : nt.title), 1),
                              o("div", Ha, y((ot = M.languages[i.lowerLang]) == null ? void 0 : ot.subtitle), 1)
                            ])
                          ], 8, Ra);
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
const za = /* @__PURE__ */ O(Qr, [["render", ja]]), qa = {
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
}, Ua = { "clip-path": "url(#icon-world-mask)" }, Ga = ["stroke"], Wa = ["stroke"], Ja = ["stroke"], $a = ["stroke"], Xa = { id: "icon-world-mask" }, Za = ["fill"];
function Ka(s, t, e, r, a, i) {
  return n(), l("svg", R(e.settings, {
    style: i.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    o("g", Ua, [
      o("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: i.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Ga),
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
      }, null, 8, $a)
    ]),
    o("defs", null, [
      o("clipPath", Xa, [
        o("rect", {
          width: "20",
          height: "20",
          fill: i.stroke
        }, null, 8, Za)
      ])
    ])
  ], 16);
}
const Ya = /* @__PURE__ */ O(qa, [["render", Ka]]), en = {
  install(s) {
    s.component("Arrow", Ft), s.component("Carousel", Wt), s.component("Contact", Fs), s.component("Cta", W), s.component("CtaList", Q), s.component("FormCheckbox", wt), s.component("FormCheckboxes", Ot), s.component("FormFields", It), s.component("FormRadio", bt), s.component("FormRadios", At), s.component("FormSelect", Et), s.component("Formular", Tt), s.component("Headline", J), s.component("HeadlineRow", Dt), s.component("Hero", oi), s.component("Icon", Y), s.component("IntroText", fi), s.component("Lottie", Lt), s.component("ProductBlocks", Ci), s.component("ProductStage", Fi), s.component("SiteIcons", vt), s.component("SvgShape", xt), s.component("TextImage", Qi), s.component("VFooter", Zr), s.component("VHeader", za), s.component("VImg", G), s.component("World", Ya), s.component("Wrapper", Nt);
  }
};
export {
  Ft as Arrow,
  Wt as Carousel,
  Fs as Contact,
  W as Cta,
  Q as CtaList,
  wt as FormCheckbox,
  Ot as FormCheckboxes,
  It as FormFields,
  bt as FormRadio,
  At as FormRadios,
  Et as FormSelect,
  Tt as Formular,
  J as Headline,
  Dt as HeadlineRow,
  oi as Hero,
  Y as Icon,
  fi as IntroText,
  Lt as Lottie,
  Ci as ProductBlocks,
  Fi as ProductStage,
  vt as SiteIcons,
  xt as SvgShape,
  Qi as TextImage,
  Zr as VFooter,
  za as VHeader,
  G as VImg,
  Ya as World,
  Nt as Wrapper,
  en as default
};
