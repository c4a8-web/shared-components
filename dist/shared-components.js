var Sa = Object.defineProperty;
var La = (e, t, u) => t in e ? Sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u;
var z = (e, t, u) => La(e, typeof t != "symbol" ? t + "" : t, u);
import { renderSlot as lt, openBlock as d, createElementBlock as h, mergeProps as ce, createElementVNode as f, normalizeClass as A, normalizeStyle as ee, createBlock as P, resolveDynamicComponent as jt, toDisplayString as S, createVNode as L, createCommentVNode as _, withCtx as he, Fragment as N, renderList as H, resolveComponent as ht, createStaticVNode as Ht, normalizeProps as Mt, guardReactiveProps as It, createTextVNode as Ee, withModifiers as ka, Transition as Ta, withDirectives as Ba, vShow as Fa } from "vue";
const j = (e, t) => {
  const u = e.__vccOpts || e;
  for (const [a, i] of t)
    u[a] = i;
  return u;
}, Na = {
  tagName: "markdown-files",
  computed: {
    structuredList() {
      const e = this.list.map((t) => {
        const { description: u, _path: a, ...i } = t;
        return { url: a, excerpt: u, ...i };
      });
      return console.log("Structured list:", e), e;
    }
  },
  props: {
    list: Array
  }
};
function qa(e, t, u, a, i, r) {
  return lt(e.$slots, "default", { files: r.structuredList });
}
const Oa = /* @__PURE__ */ j(Na, [["render", qa]]), Pa = {
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
function Ra(e, t, u, a, i, r) {
  return d(), h("svg", ce(u.settings, {
    style: r.style,
    viewBox: "0 0 28 17"
  }), t[0] || (t[0] = [
    f("g", { transform: "translate(0.75 0.75)" }, [
      f("path", {
        d: "M0.5 0.5L26 0.5",
        transform: "translate(0 7)",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }),
      f("path", {
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
const Ma = /* @__PURE__ */ j(Pa, [["render", Ra]]);
var E = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ia(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var u = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    u.prototype = t.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(u, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), u;
}
var le = {}, Xt = {}, gt = {}, Ut = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
Ut.exports;
(function(e, t) {
  (function(u) {
    var a = t, i = e && e.exports == a && e, r = typeof E == "object" && E;
    (r.global === r || r.window === r) && (u = r);
    var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, o = /[\x01-\x7F]/g, l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, s = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, c = { "­": "shy", "‌": "zwnj", "‍": "zwj", "‎": "lrm", "⁣": "ic", "⁢": "it", "⁡": "af", "‏": "rlm", "​": "ZeroWidthSpace", "⁠": "NoBreak", "̑": "DownBreve", "⃛": "tdot", "⃜": "DotDot", "	": "Tab", "\n": "NewLine", " ": "puncsp", " ": "MediumSpace", " ": "thinsp", " ": "hairsp", " ": "emsp13", " ": "ensp", " ": "emsp14", " ": "emsp", " ": "numsp", " ": "nbsp", "  ": "ThickSpace", "‾": "oline", _: "lowbar", "‐": "dash", "–": "ndash", "—": "mdash", "―": "horbar", ",": "comma", ";": "semi", "⁏": "bsemi", ":": "colon", "⩴": "Colone", "!": "excl", "¡": "iexcl", "?": "quest", "¿": "iquest", ".": "period", "‥": "nldr", "…": "mldr", "·": "middot", "'": "apos", "‘": "lsquo", "’": "rsquo", "‚": "sbquo", "‹": "lsaquo", "›": "rsaquo", '"': "quot", "“": "ldquo", "”": "rdquo", "„": "bdquo", "«": "laquo", "»": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "⌈": "lceil", "⌉": "rceil", "⌊": "lfloor", "⌋": "rfloor", "⦅": "lopar", "⦆": "ropar", "⦋": "lbrke", "⦌": "rbrke", "⦍": "lbrkslu", "⦎": "rbrksld", "⦏": "lbrksld", "⦐": "rbrkslu", "⦑": "langd", "⦒": "rangd", "⦓": "lparlt", "⦔": "rpargt", "⦕": "gtlPar", "⦖": "ltrPar", "⟦": "lobrk", "⟧": "robrk", "⟨": "lang", "⟩": "rang", "⟪": "Lang", "⟫": "Rang", "⟬": "loang", "⟭": "roang", "❲": "lbbrk", "❳": "rbbrk", "‖": "Vert", "§": "sect", "¶": "para", "@": "commat", "*": "ast", "/": "sol", undefined: null, "&": "amp", "#": "num", "%": "percnt", "‰": "permil", "‱": "pertenk", "†": "dagger", "‡": "Dagger", "•": "bull", "⁃": "hybull", "′": "prime", "″": "Prime", "‴": "tprime", "⁗": "qprime", "‵": "bprime", "⁁": "caret", "`": "grave", "´": "acute", "˜": "tilde", "^": "Hat", "¯": "macr", "˘": "breve", "˙": "dot", "¨": "die", "˚": "ring", "˝": "dblac", "¸": "cedil", "˛": "ogon", "ˆ": "circ", "ˇ": "caron", "°": "deg", "©": "copy", "®": "reg", "℗": "copysr", "℘": "wp", "℞": "rx", "℧": "mho", "℩": "iiota", "←": "larr", "↚": "nlarr", "→": "rarr", "↛": "nrarr", "↑": "uarr", "↓": "darr", "↔": "harr", "↮": "nharr", "↕": "varr", "↖": "nwarr", "↗": "nearr", "↘": "searr", "↙": "swarr", "↝": "rarrw", "↝̸": "nrarrw", "↞": "Larr", "↟": "Uarr", "↠": "Rarr", "↡": "Darr", "↢": "larrtl", "↣": "rarrtl", "↤": "mapstoleft", "↥": "mapstoup", "↦": "map", "↧": "mapstodown", "↩": "larrhk", "↪": "rarrhk", "↫": "larrlp", "↬": "rarrlp", "↭": "harrw", "↰": "lsh", "↱": "rsh", "↲": "ldsh", "↳": "rdsh", "↵": "crarr", "↶": "cularr", "↷": "curarr", "↺": "olarr", "↻": "orarr", "↼": "lharu", "↽": "lhard", "↾": "uharr", "↿": "uharl", "⇀": "rharu", "⇁": "rhard", "⇂": "dharr", "⇃": "dharl", "⇄": "rlarr", "⇅": "udarr", "⇆": "lrarr", "⇇": "llarr", "⇈": "uuarr", "⇉": "rrarr", "⇊": "ddarr", "⇋": "lrhar", "⇌": "rlhar", "⇐": "lArr", "⇍": "nlArr", "⇑": "uArr", "⇒": "rArr", "⇏": "nrArr", "⇓": "dArr", "⇔": "iff", "⇎": "nhArr", "⇕": "vArr", "⇖": "nwArr", "⇗": "neArr", "⇘": "seArr", "⇙": "swArr", "⇚": "lAarr", "⇛": "rAarr", "⇝": "zigrarr", "⇤": "larrb", "⇥": "rarrb", "⇵": "duarr", "⇽": "loarr", "⇾": "roarr", "⇿": "hoarr", "∀": "forall", "∁": "comp", "∂": "part", "∂̸": "npart", "∃": "exist", "∄": "nexist", "∅": "empty", "∇": "Del", "∈": "in", "∉": "notin", "∋": "ni", "∌": "notni", "϶": "bepsi", "∏": "prod", "∐": "coprod", "∑": "sum", "+": "plus", "±": "pm", "÷": "div", "×": "times", "<": "lt", "≮": "nlt", "<⃒": "nvlt", "=": "equals", "≠": "ne", "=⃥": "bne", "⩵": "Equal", ">": "gt", "≯": "ngt", ">⃒": "nvgt", "¬": "not", "|": "vert", "¦": "brvbar", "−": "minus", "∓": "mp", "∔": "plusdo", "⁄": "frasl", "∖": "setmn", "∗": "lowast", "∘": "compfn", "√": "Sqrt", "∝": "prop", "∞": "infin", "∟": "angrt", "∠": "ang", "∠⃒": "nang", "∡": "angmsd", "∢": "angsph", "∣": "mid", "∤": "nmid", "∥": "par", "∦": "npar", "∧": "and", "∨": "or", "∩": "cap", "∩︀": "caps", "∪": "cup", "∪︀": "cups", "∫": "int", "∬": "Int", "∭": "tint", "⨌": "qint", "∮": "oint", "∯": "Conint", "∰": "Cconint", "∱": "cwint", "∲": "cwconint", "∳": "awconint", "∴": "there4", "∵": "becaus", "∶": "ratio", "∷": "Colon", "∸": "minusd", "∺": "mDDot", "∻": "homtht", "∼": "sim", "≁": "nsim", "∼⃒": "nvsim", "∽": "bsim", "∽̱": "race", "∾": "ac", "∾̳": "acE", "∿": "acd", "≀": "wr", "≂": "esim", "≂̸": "nesim", "≃": "sime", "≄": "nsime", "≅": "cong", "≇": "ncong", "≆": "simne", "≈": "ap", "≉": "nap", "≊": "ape", "≋": "apid", "≋̸": "napid", "≌": "bcong", "≍": "CupCap", "≭": "NotCupCap", "≍⃒": "nvap", "≎": "bump", "≎̸": "nbump", "≏": "bumpe", "≏̸": "nbumpe", "≐": "doteq", "≐̸": "nedot", "≑": "eDot", "≒": "efDot", "≓": "erDot", "≔": "colone", "≕": "ecolon", "≖": "ecir", "≗": "cire", "≙": "wedgeq", "≚": "veeeq", "≜": "trie", "≟": "equest", "≡": "equiv", "≢": "nequiv", "≡⃥": "bnequiv", "≤": "le", "≰": "nle", "≤⃒": "nvle", "≥": "ge", "≱": "nge", "≥⃒": "nvge", "≦": "lE", "≦̸": "nlE", "≧": "gE", "≧̸": "ngE", "≨︀": "lvnE", "≨": "lnE", "≩": "gnE", "≩︀": "gvnE", "≪": "ll", "≪̸": "nLtv", "≪⃒": "nLt", "≫": "gg", "≫̸": "nGtv", "≫⃒": "nGt", "≬": "twixt", "≲": "lsim", "≴": "nlsim", "≳": "gsim", "≵": "ngsim", "≶": "lg", "≸": "ntlg", "≷": "gl", "≹": "ntgl", "≺": "pr", "⊀": "npr", "≻": "sc", "⊁": "nsc", "≼": "prcue", "⋠": "nprcue", "≽": "sccue", "⋡": "nsccue", "≾": "prsim", "≿": "scsim", "≿̸": "NotSucceedsTilde", "⊂": "sub", "⊄": "nsub", "⊂⃒": "vnsub", "⊃": "sup", "⊅": "nsup", "⊃⃒": "vnsup", "⊆": "sube", "⊈": "nsube", "⊇": "supe", "⊉": "nsupe", "⊊︀": "vsubne", "⊊": "subne", "⊋︀": "vsupne", "⊋": "supne", "⊍": "cupdot", "⊎": "uplus", "⊏": "sqsub", "⊏̸": "NotSquareSubset", "⊐": "sqsup", "⊐̸": "NotSquareSuperset", "⊑": "sqsube", "⋢": "nsqsube", "⊒": "sqsupe", "⋣": "nsqsupe", "⊓": "sqcap", "⊓︀": "sqcaps", "⊔": "sqcup", "⊔︀": "sqcups", "⊕": "oplus", "⊖": "ominus", "⊗": "otimes", "⊘": "osol", "⊙": "odot", "⊚": "ocir", "⊛": "oast", "⊝": "odash", "⊞": "plusb", "⊟": "minusb", "⊠": "timesb", "⊡": "sdotb", "⊢": "vdash", "⊬": "nvdash", "⊣": "dashv", "⊤": "top", "⊥": "bot", "⊧": "models", "⊨": "vDash", "⊭": "nvDash", "⊩": "Vdash", "⊮": "nVdash", "⊪": "Vvdash", "⊫": "VDash", "⊯": "nVDash", "⊰": "prurel", "⊲": "vltri", "⋪": "nltri", "⊳": "vrtri", "⋫": "nrtri", "⊴": "ltrie", "⋬": "nltrie", "⊴⃒": "nvltrie", "⊵": "rtrie", "⋭": "nrtrie", "⊵⃒": "nvrtrie", "⊶": "origof", "⊷": "imof", "⊸": "mumap", "⊹": "hercon", "⊺": "intcal", "⊻": "veebar", "⊽": "barvee", "⊾": "angrtvb", "⊿": "lrtri", "⋀": "Wedge", "⋁": "Vee", "⋂": "xcap", "⋃": "xcup", "⋄": "diam", "⋅": "sdot", "⋆": "Star", "⋇": "divonx", "⋈": "bowtie", "⋉": "ltimes", "⋊": "rtimes", "⋋": "lthree", "⋌": "rthree", "⋍": "bsime", "⋎": "cuvee", "⋏": "cuwed", "⋐": "Sub", "⋑": "Sup", "⋒": "Cap", "⋓": "Cup", "⋔": "fork", "⋕": "epar", "⋖": "ltdot", "⋗": "gtdot", "⋘": "Ll", "⋘̸": "nLl", "⋙": "Gg", "⋙̸": "nGg", "⋚︀": "lesg", "⋚": "leg", "⋛": "gel", "⋛︀": "gesl", "⋞": "cuepr", "⋟": "cuesc", "⋦": "lnsim", "⋧": "gnsim", "⋨": "prnsim", "⋩": "scnsim", "⋮": "vellip", "⋯": "ctdot", "⋰": "utdot", "⋱": "dtdot", "⋲": "disin", "⋳": "isinsv", "⋴": "isins", "⋵": "isindot", "⋵̸": "notindot", "⋶": "notinvc", "⋷": "notinvb", "⋹": "isinE", "⋹̸": "notinE", "⋺": "nisd", "⋻": "xnis", "⋼": "nis", "⋽": "notnivc", "⋾": "notnivb", "⌅": "barwed", "⌆": "Barwed", "⌌": "drcrop", "⌍": "dlcrop", "⌎": "urcrop", "⌏": "ulcrop", "⌐": "bnot", "⌒": "profline", "⌓": "profsurf", "⌕": "telrec", "⌖": "target", "⌜": "ulcorn", "⌝": "urcorn", "⌞": "dlcorn", "⌟": "drcorn", "⌢": "frown", "⌣": "smile", "⌭": "cylcty", "⌮": "profalar", "⌶": "topbot", "⌽": "ovbar", "⌿": "solbar", "⍼": "angzarr", "⎰": "lmoust", "⎱": "rmoust", "⎴": "tbrk", "⎵": "bbrk", "⎶": "bbrktbrk", "⏜": "OverParenthesis", "⏝": "UnderParenthesis", "⏞": "OverBrace", "⏟": "UnderBrace", "⏢": "trpezium", "⏧": "elinters", "␣": "blank", "─": "boxh", "│": "boxv", "┌": "boxdr", "┐": "boxdl", "└": "boxur", "┘": "boxul", "├": "boxvr", "┤": "boxvl", "┬": "boxhd", "┴": "boxhu", "┼": "boxvh", "═": "boxH", "║": "boxV", "╒": "boxdR", "╓": "boxDr", "╔": "boxDR", "╕": "boxdL", "╖": "boxDl", "╗": "boxDL", "╘": "boxuR", "╙": "boxUr", "╚": "boxUR", "╛": "boxuL", "╜": "boxUl", "╝": "boxUL", "╞": "boxvR", "╟": "boxVr", "╠": "boxVR", "╡": "boxvL", "╢": "boxVl", "╣": "boxVL", "╤": "boxHd", "╥": "boxhD", "╦": "boxHD", "╧": "boxHu", "╨": "boxhU", "╩": "boxHU", "╪": "boxvH", "╫": "boxVh", "╬": "boxVH", "▀": "uhblk", "▄": "lhblk", "█": "block", "░": "blk14", "▒": "blk12", "▓": "blk34", "□": "squ", "▪": "squf", "▫": "EmptyVerySmallSquare", "▭": "rect", "▮": "marker", "▱": "fltns", "△": "xutri", "▴": "utrif", "▵": "utri", "▸": "rtrif", "▹": "rtri", "▽": "xdtri", "▾": "dtrif", "▿": "dtri", "◂": "ltrif", "◃": "ltri", "◊": "loz", "○": "cir", "◬": "tridot", "◯": "xcirc", "◸": "ultri", "◹": "urtri", "◺": "lltri", "◻": "EmptySmallSquare", "◼": "FilledSmallSquare", "★": "starf", "☆": "star", "☎": "phone", "♀": "female", "♂": "male", "♠": "spades", "♣": "clubs", "♥": "hearts", "♦": "diams", "♪": "sung", "✓": "check", "✗": "cross", "✠": "malt", "✶": "sext", "❘": "VerticalSeparator", "⟈": "bsolhsub", "⟉": "suphsol", "⟵": "xlarr", "⟶": "xrarr", "⟷": "xharr", "⟸": "xlArr", "⟹": "xrArr", "⟺": "xhArr", "⟼": "xmap", "⟿": "dzigrarr", "⤂": "nvlArr", "⤃": "nvrArr", "⤄": "nvHarr", "⤅": "Map", "⤌": "lbarr", "⤍": "rbarr", "⤎": "lBarr", "⤏": "rBarr", "⤐": "RBarr", "⤑": "DDotrahd", "⤒": "UpArrowBar", "⤓": "DownArrowBar", "⤖": "Rarrtl", "⤙": "latail", "⤚": "ratail", "⤛": "lAtail", "⤜": "rAtail", "⤝": "larrfs", "⤞": "rarrfs", "⤟": "larrbfs", "⤠": "rarrbfs", "⤣": "nwarhk", "⤤": "nearhk", "⤥": "searhk", "⤦": "swarhk", "⤧": "nwnear", "⤨": "toea", "⤩": "tosa", "⤪": "swnwar", "⤳": "rarrc", "⤳̸": "nrarrc", "⤵": "cudarrr", "⤶": "ldca", "⤷": "rdca", "⤸": "cudarrl", "⤹": "larrpl", "⤼": "curarrm", "⤽": "cularrp", "⥅": "rarrpl", "⥈": "harrcir", "⥉": "Uarrocir", "⥊": "lurdshar", "⥋": "ldrushar", "⥎": "LeftRightVector", "⥏": "RightUpDownVector", "⥐": "DownLeftRightVector", "⥑": "LeftUpDownVector", "⥒": "LeftVectorBar", "⥓": "RightVectorBar", "⥔": "RightUpVectorBar", "⥕": "RightDownVectorBar", "⥖": "DownLeftVectorBar", "⥗": "DownRightVectorBar", "⥘": "LeftUpVectorBar", "⥙": "LeftDownVectorBar", "⥚": "LeftTeeVector", "⥛": "RightTeeVector", "⥜": "RightUpTeeVector", "⥝": "RightDownTeeVector", "⥞": "DownLeftTeeVector", "⥟": "DownRightTeeVector", "⥠": "LeftUpTeeVector", "⥡": "LeftDownTeeVector", "⥢": "lHar", "⥣": "uHar", "⥤": "rHar", "⥥": "dHar", "⥦": "luruhar", "⥧": "ldrdhar", "⥨": "ruluhar", "⥩": "rdldhar", "⥪": "lharul", "⥫": "llhard", "⥬": "rharul", "⥭": "lrhard", "⥮": "udhar", "⥯": "duhar", "⥰": "RoundImplies", "⥱": "erarr", "⥲": "simrarr", "⥳": "larrsim", "⥴": "rarrsim", "⥵": "rarrap", "⥶": "ltlarr", "⥸": "gtrarr", "⥹": "subrarr", "⥻": "suplarr", "⥼": "lfisht", "⥽": "rfisht", "⥾": "ufisht", "⥿": "dfisht", "⦚": "vzigzag", "⦜": "vangrt", "⦝": "angrtvbd", "⦤": "ange", "⦥": "range", "⦦": "dwangle", "⦧": "uwangle", "⦨": "angmsdaa", "⦩": "angmsdab", "⦪": "angmsdac", "⦫": "angmsdad", "⦬": "angmsdae", "⦭": "angmsdaf", "⦮": "angmsdag", "⦯": "angmsdah", "⦰": "bemptyv", "⦱": "demptyv", "⦲": "cemptyv", "⦳": "raemptyv", "⦴": "laemptyv", "⦵": "ohbar", "⦶": "omid", "⦷": "opar", "⦹": "operp", "⦻": "olcross", "⦼": "odsold", "⦾": "olcir", "⦿": "ofcir", "⧀": "olt", "⧁": "ogt", "⧂": "cirscir", "⧃": "cirE", "⧄": "solb", "⧅": "bsolb", "⧉": "boxbox", "⧍": "trisb", "⧎": "rtriltri", "⧏": "LeftTriangleBar", "⧏̸": "NotLeftTriangleBar", "⧐": "RightTriangleBar", "⧐̸": "NotRightTriangleBar", "⧜": "iinfin", "⧝": "infintie", "⧞": "nvinfin", "⧣": "eparsl", "⧤": "smeparsl", "⧥": "eqvparsl", "⧫": "lozf", "⧴": "RuleDelayed", "⧶": "dsol", "⨀": "xodot", "⨁": "xoplus", "⨂": "xotime", "⨄": "xuplus", "⨆": "xsqcup", "⨍": "fpartint", "⨐": "cirfnint", "⨑": "awint", "⨒": "rppolint", "⨓": "scpolint", "⨔": "npolint", "⨕": "pointint", "⨖": "quatint", "⨗": "intlarhk", "⨢": "pluscir", "⨣": "plusacir", "⨤": "simplus", "⨥": "plusdu", "⨦": "plussim", "⨧": "plustwo", "⨩": "mcomma", "⨪": "minusdu", "⨭": "loplus", "⨮": "roplus", "⨯": "Cross", "⨰": "timesd", "⨱": "timesbar", "⨳": "smashp", "⨴": "lotimes", "⨵": "rotimes", "⨶": "otimesas", "⨷": "Otimes", "⨸": "odiv", "⨹": "triplus", "⨺": "triminus", "⨻": "tritime", "⨼": "iprod", "⨿": "amalg", "⩀": "capdot", "⩂": "ncup", "⩃": "ncap", "⩄": "capand", "⩅": "cupor", "⩆": "cupcap", "⩇": "capcup", "⩈": "cupbrcap", "⩉": "capbrcup", "⩊": "cupcup", "⩋": "capcap", "⩌": "ccups", "⩍": "ccaps", "⩐": "ccupssm", "⩓": "And", "⩔": "Or", "⩕": "andand", "⩖": "oror", "⩗": "orslope", "⩘": "andslope", "⩚": "andv", "⩛": "orv", "⩜": "andd", "⩝": "ord", "⩟": "wedbar", "⩦": "sdote", "⩪": "simdot", "⩭": "congdot", "⩭̸": "ncongdot", "⩮": "easter", "⩯": "apacir", "⩰": "apE", "⩰̸": "napE", "⩱": "eplus", "⩲": "pluse", "⩳": "Esim", "⩷": "eDDot", "⩸": "equivDD", "⩹": "ltcir", "⩺": "gtcir", "⩻": "ltquest", "⩼": "gtquest", "⩽": "les", "⩽̸": "nles", "⩾": "ges", "⩾̸": "nges", "⩿": "lesdot", "⪀": "gesdot", "⪁": "lesdoto", "⪂": "gesdoto", "⪃": "lesdotor", "⪄": "gesdotol", "⪅": "lap", "⪆": "gap", "⪇": "lne", "⪈": "gne", "⪉": "lnap", "⪊": "gnap", "⪋": "lEg", "⪌": "gEl", "⪍": "lsime", "⪎": "gsime", "⪏": "lsimg", "⪐": "gsiml", "⪑": "lgE", "⪒": "glE", "⪓": "lesges", "⪔": "gesles", "⪕": "els", "⪖": "egs", "⪗": "elsdot", "⪘": "egsdot", "⪙": "el", "⪚": "eg", "⪝": "siml", "⪞": "simg", "⪟": "simlE", "⪠": "simgE", "⪡": "LessLess", "⪡̸": "NotNestedLessLess", "⪢": "GreaterGreater", "⪢̸": "NotNestedGreaterGreater", "⪤": "glj", "⪥": "gla", "⪦": "ltcc", "⪧": "gtcc", "⪨": "lescc", "⪩": "gescc", "⪪": "smt", "⪫": "lat", "⪬": "smte", "⪬︀": "smtes", "⪭": "late", "⪭︀": "lates", "⪮": "bumpE", "⪯": "pre", "⪯̸": "npre", "⪰": "sce", "⪰̸": "nsce", "⪳": "prE", "⪴": "scE", "⪵": "prnE", "⪶": "scnE", "⪷": "prap", "⪸": "scap", "⪹": "prnap", "⪺": "scnap", "⪻": "Pr", "⪼": "Sc", "⪽": "subdot", "⪾": "supdot", "⪿": "subplus", "⫀": "supplus", "⫁": "submult", "⫂": "supmult", "⫃": "subedot", "⫄": "supedot", "⫅": "subE", "⫅̸": "nsubE", "⫆": "supE", "⫆̸": "nsupE", "⫇": "subsim", "⫈": "supsim", "⫋︀": "vsubnE", "⫋": "subnE", "⫌︀": "vsupnE", "⫌": "supnE", "⫏": "csub", "⫐": "csup", "⫑": "csube", "⫒": "csupe", "⫓": "subsup", "⫔": "supsub", "⫕": "subsub", "⫖": "supsup", "⫗": "suphsub", "⫘": "supdsub", "⫙": "forkv", "⫚": "topfork", "⫛": "mlcp", "⫤": "Dashv", "⫦": "Vdashl", "⫧": "Barv", "⫨": "vBar", "⫩": "vBarv", "⫫": "Vbar", "⫬": "Not", "⫭": "bNot", "⫮": "rnmid", "⫯": "cirmid", "⫰": "midcir", "⫱": "topcir", "⫲": "nhpar", "⫳": "parsim", "⫽": "parsl", "⫽⃥": "nparsl", "♭": "flat", "♮": "natur", "♯": "sharp", "¤": "curren", "¢": "cent", $: "dollar", "£": "pound", "¥": "yen", "€": "euro", "¹": "sup1", "½": "half", "⅓": "frac13", "¼": "frac14", "⅕": "frac15", "⅙": "frac16", "⅛": "frac18", "²": "sup2", "⅔": "frac23", "⅖": "frac25", "³": "sup3", "¾": "frac34", "⅗": "frac35", "⅜": "frac38", "⅘": "frac45", "⅚": "frac56", "⅝": "frac58", "⅞": "frac78", "𝒶": "ascr", "𝕒": "aopf", "𝔞": "afr", "𝔸": "Aopf", "𝔄": "Afr", "𝒜": "Ascr", ª: "ordf", á: "aacute", Á: "Aacute", à: "agrave", À: "Agrave", ă: "abreve", Ă: "Abreve", â: "acirc", Â: "Acirc", å: "aring", Å: "angst", ä: "auml", Ä: "Auml", ã: "atilde", Ã: "Atilde", ą: "aogon", Ą: "Aogon", ā: "amacr", Ā: "Amacr", æ: "aelig", Æ: "AElig", "𝒷": "bscr", "𝕓": "bopf", "𝔟": "bfr", "𝔹": "Bopf", ℬ: "Bscr", "𝔅": "Bfr", "𝔠": "cfr", "𝒸": "cscr", "𝕔": "copf", ℭ: "Cfr", "𝒞": "Cscr", ℂ: "Copf", ć: "cacute", Ć: "Cacute", ĉ: "ccirc", Ĉ: "Ccirc", č: "ccaron", Č: "Ccaron", ċ: "cdot", Ċ: "Cdot", ç: "ccedil", Ç: "Ccedil", "℅": "incare", "𝔡": "dfr", "ⅆ": "dd", "𝕕": "dopf", "𝒹": "dscr", "𝒟": "Dscr", "𝔇": "Dfr", "ⅅ": "DD", "𝔻": "Dopf", ď: "dcaron", Ď: "Dcaron", đ: "dstrok", Đ: "Dstrok", ð: "eth", Ð: "ETH", "ⅇ": "ee", ℯ: "escr", "𝔢": "efr", "𝕖": "eopf", ℰ: "Escr", "𝔈": "Efr", "𝔼": "Eopf", é: "eacute", É: "Eacute", è: "egrave", È: "Egrave", ê: "ecirc", Ê: "Ecirc", ě: "ecaron", Ě: "Ecaron", ë: "euml", Ë: "Euml", ė: "edot", Ė: "Edot", ę: "eogon", Ę: "Eogon", ē: "emacr", Ē: "Emacr", "𝔣": "ffr", "𝕗": "fopf", "𝒻": "fscr", "𝔉": "Ffr", "𝔽": "Fopf", ℱ: "Fscr", ﬀ: "fflig", ﬃ: "ffilig", ﬄ: "ffllig", ﬁ: "filig", fj: "fjlig", ﬂ: "fllig", ƒ: "fnof", ℊ: "gscr", "𝕘": "gopf", "𝔤": "gfr", "𝒢": "Gscr", "𝔾": "Gopf", "𝔊": "Gfr", ǵ: "gacute", ğ: "gbreve", Ğ: "Gbreve", ĝ: "gcirc", Ĝ: "Gcirc", ġ: "gdot", Ġ: "Gdot", Ģ: "Gcedil", "𝔥": "hfr", ℎ: "planckh", "𝒽": "hscr", "𝕙": "hopf", ℋ: "Hscr", ℌ: "Hfr", ℍ: "Hopf", ĥ: "hcirc", Ĥ: "Hcirc", ℏ: "hbar", ħ: "hstrok", Ħ: "Hstrok", "𝕚": "iopf", "𝔦": "ifr", "𝒾": "iscr", "ⅈ": "ii", "𝕀": "Iopf", ℐ: "Iscr", ℑ: "Im", í: "iacute", Í: "Iacute", ì: "igrave", Ì: "Igrave", î: "icirc", Î: "Icirc", ï: "iuml", Ï: "Iuml", ĩ: "itilde", Ĩ: "Itilde", İ: "Idot", į: "iogon", Į: "Iogon", ī: "imacr", Ī: "Imacr", ĳ: "ijlig", Ĳ: "IJlig", ı: "imath", "𝒿": "jscr", "𝕛": "jopf", "𝔧": "jfr", "𝒥": "Jscr", "𝔍": "Jfr", "𝕁": "Jopf", ĵ: "jcirc", Ĵ: "Jcirc", "ȷ": "jmath", "𝕜": "kopf", "𝓀": "kscr", "𝔨": "kfr", "𝒦": "Kscr", "𝕂": "Kopf", "𝔎": "Kfr", ķ: "kcedil", Ķ: "Kcedil", "𝔩": "lfr", "𝓁": "lscr", ℓ: "ell", "𝕝": "lopf", ℒ: "Lscr", "𝔏": "Lfr", "𝕃": "Lopf", ĺ: "lacute", Ĺ: "Lacute", ľ: "lcaron", Ľ: "Lcaron", ļ: "lcedil", Ļ: "Lcedil", ł: "lstrok", Ł: "Lstrok", ŀ: "lmidot", Ŀ: "Lmidot", "𝔪": "mfr", "𝕞": "mopf", "𝓂": "mscr", "𝔐": "Mfr", "𝕄": "Mopf", ℳ: "Mscr", "𝔫": "nfr", "𝕟": "nopf", "𝓃": "nscr", ℕ: "Nopf", "𝒩": "Nscr", "𝔑": "Nfr", ń: "nacute", Ń: "Nacute", ň: "ncaron", Ň: "Ncaron", ñ: "ntilde", Ñ: "Ntilde", ņ: "ncedil", Ņ: "Ncedil", "№": "numero", ŋ: "eng", Ŋ: "ENG", "𝕠": "oopf", "𝔬": "ofr", ℴ: "oscr", "𝒪": "Oscr", "𝔒": "Ofr", "𝕆": "Oopf", º: "ordm", ó: "oacute", Ó: "Oacute", ò: "ograve", Ò: "Ograve", ô: "ocirc", Ô: "Ocirc", ö: "ouml", Ö: "Ouml", ő: "odblac", Ő: "Odblac", õ: "otilde", Õ: "Otilde", ø: "oslash", Ø: "Oslash", ō: "omacr", Ō: "Omacr", œ: "oelig", Œ: "OElig", "𝔭": "pfr", "𝓅": "pscr", "𝕡": "popf", ℙ: "Popf", "𝔓": "Pfr", "𝒫": "Pscr", "𝕢": "qopf", "𝔮": "qfr", "𝓆": "qscr", "𝒬": "Qscr", "𝔔": "Qfr", ℚ: "Qopf", ĸ: "kgreen", "𝔯": "rfr", "𝕣": "ropf", "𝓇": "rscr", ℛ: "Rscr", ℜ: "Re", ℝ: "Ropf", ŕ: "racute", Ŕ: "Racute", ř: "rcaron", Ř: "Rcaron", ŗ: "rcedil", Ŗ: "Rcedil", "𝕤": "sopf", "𝓈": "sscr", "𝔰": "sfr", "𝕊": "Sopf", "𝔖": "Sfr", "𝒮": "Sscr", "Ⓢ": "oS", ś: "sacute", Ś: "Sacute", ŝ: "scirc", Ŝ: "Scirc", š: "scaron", Š: "Scaron", ş: "scedil", Ş: "Scedil", ß: "szlig", "𝔱": "tfr", "𝓉": "tscr", "𝕥": "topf", "𝒯": "Tscr", "𝔗": "Tfr", "𝕋": "Topf", ť: "tcaron", Ť: "Tcaron", ţ: "tcedil", Ţ: "Tcedil", "™": "trade", ŧ: "tstrok", Ŧ: "Tstrok", "𝓊": "uscr", "𝕦": "uopf", "𝔲": "ufr", "𝕌": "Uopf", "𝔘": "Ufr", "𝒰": "Uscr", ú: "uacute", Ú: "Uacute", ù: "ugrave", Ù: "Ugrave", ŭ: "ubreve", Ŭ: "Ubreve", û: "ucirc", Û: "Ucirc", ů: "uring", Ů: "Uring", ü: "uuml", Ü: "Uuml", ű: "udblac", Ű: "Udblac", ũ: "utilde", Ũ: "Utilde", ų: "uogon", Ų: "Uogon", ū: "umacr", Ū: "Umacr", "𝔳": "vfr", "𝕧": "vopf", "𝓋": "vscr", "𝔙": "Vfr", "𝕍": "Vopf", "𝒱": "Vscr", "𝕨": "wopf", "𝓌": "wscr", "𝔴": "wfr", "𝒲": "Wscr", "𝕎": "Wopf", "𝔚": "Wfr", ŵ: "wcirc", Ŵ: "Wcirc", "𝔵": "xfr", "𝓍": "xscr", "𝕩": "xopf", "𝕏": "Xopf", "𝔛": "Xfr", "𝒳": "Xscr", "𝔶": "yfr", "𝓎": "yscr", "𝕪": "yopf", "𝒴": "Yscr", "𝔜": "Yfr", "𝕐": "Yopf", ý: "yacute", Ý: "Yacute", ŷ: "ycirc", Ŷ: "Ycirc", ÿ: "yuml", Ÿ: "Yuml", "𝓏": "zscr", "𝔷": "zfr", "𝕫": "zopf", ℨ: "Zfr", ℤ: "Zopf", "𝒵": "Zscr", ź: "zacute", Ź: "Zacute", ž: "zcaron", Ž: "Zcaron", ż: "zdot", Ż: "Zdot", Ƶ: "imped", þ: "thorn", Þ: "THORN", ŉ: "napos", α: "alpha", Α: "Alpha", β: "beta", Β: "Beta", γ: "gamma", Γ: "Gamma", δ: "delta", Δ: "Delta", ε: "epsi", "ϵ": "epsiv", Ε: "Epsilon", ϝ: "gammad", Ϝ: "Gammad", ζ: "zeta", Ζ: "Zeta", η: "eta", Η: "Eta", θ: "theta", ϑ: "thetav", Θ: "Theta", ι: "iota", Ι: "Iota", κ: "kappa", ϰ: "kappav", Κ: "Kappa", λ: "lambda", Λ: "Lambda", μ: "mu", µ: "micro", Μ: "Mu", ν: "nu", Ν: "Nu", ξ: "xi", Ξ: "Xi", ο: "omicron", Ο: "Omicron", π: "pi", ϖ: "piv", Π: "Pi", ρ: "rho", ϱ: "rhov", Ρ: "Rho", σ: "sigma", Σ: "Sigma", ς: "sigmaf", τ: "tau", Τ: "Tau", υ: "upsi", Υ: "Upsilon", ϒ: "Upsi", φ: "phi", ϕ: "phiv", Φ: "Phi", χ: "chi", Χ: "Chi", ψ: "psi", Ψ: "Psi", ω: "omega", Ω: "ohm", а: "acy", А: "Acy", б: "bcy", Б: "Bcy", в: "vcy", В: "Vcy", г: "gcy", Г: "Gcy", ѓ: "gjcy", Ѓ: "GJcy", д: "dcy", Д: "Dcy", ђ: "djcy", Ђ: "DJcy", е: "iecy", Е: "IEcy", ё: "iocy", Ё: "IOcy", є: "jukcy", Є: "Jukcy", ж: "zhcy", Ж: "ZHcy", з: "zcy", З: "Zcy", ѕ: "dscy", Ѕ: "DScy", и: "icy", И: "Icy", і: "iukcy", І: "Iukcy", ї: "yicy", Ї: "YIcy", й: "jcy", Й: "Jcy", ј: "jsercy", Ј: "Jsercy", к: "kcy", К: "Kcy", ќ: "kjcy", Ќ: "KJcy", л: "lcy", Л: "Lcy", љ: "ljcy", Љ: "LJcy", м: "mcy", М: "Mcy", н: "ncy", Н: "Ncy", њ: "njcy", Њ: "NJcy", о: "ocy", О: "Ocy", п: "pcy", П: "Pcy", р: "rcy", Р: "Rcy", с: "scy", С: "Scy", т: "tcy", Т: "Tcy", ћ: "tshcy", Ћ: "TSHcy", у: "ucy", У: "Ucy", ў: "ubrcy", Ў: "Ubrcy", ф: "fcy", Ф: "Fcy", х: "khcy", Х: "KHcy", ц: "tscy", Ц: "TScy", ч: "chcy", Ч: "CHcy", џ: "dzcy", Џ: "DZcy", ш: "shcy", Ш: "SHcy", щ: "shchcy", Щ: "SHCHcy", ъ: "hardcy", Ъ: "HARDcy", ы: "ycy", Ы: "Ycy", ь: "softcy", Ь: "SOFTcy", э: "ecy", Э: "Ecy", ю: "yucy", Ю: "YUcy", я: "yacy", Я: "YAcy", ℵ: "aleph", ℶ: "beth", ℷ: "gimel", ℸ: "daleth" }, g = /["&'<>`]/g, m = {
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#x27;",
      "<": "&lt;",
      // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
      // following is not strictly necessary unless it’s part of a tag or an
      // unquoted attribute value. We’re only escaping it to support those
      // situations, and for XML support.
      ">": "&gt;",
      // In Internet Explorer ≤ 8, the backtick character can be used
      // to break out of (un)quoted attribute values or HTML comments.
      // See http://html5sec.org/#102, http://html5sec.org/#108, and
      // http://html5sec.org/#133.
      "`": "&#x60;"
    }, p = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, b = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, B = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g, k = { aacute: "á", Aacute: "Á", abreve: "ă", Abreve: "Ă", ac: "∾", acd: "∿", acE: "∾̳", acirc: "â", Acirc: "Â", acute: "´", acy: "а", Acy: "А", aelig: "æ", AElig: "Æ", af: "⁡", afr: "𝔞", Afr: "𝔄", agrave: "à", Agrave: "À", alefsym: "ℵ", aleph: "ℵ", alpha: "α", Alpha: "Α", amacr: "ā", Amacr: "Ā", amalg: "⨿", amp: "&", AMP: "&", and: "∧", And: "⩓", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", Aogon: "Ą", aopf: "𝕒", Aopf: "𝔸", ap: "≈", apacir: "⩯", ape: "≊", apE: "⩰", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", aring: "å", Aring: "Å", ascr: "𝒶", Ascr: "𝒜", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", Bcy: "Б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", beta: "β", Beta: "Β", beth: "ℶ", between: "≬", bfr: "𝔟", Bfr: "𝔅", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bNot: "⫭", bopf: "𝕓", Bopf: "𝔹", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxhD: "╥", boxHd: "╤", boxHD: "╦", boxhu: "┴", boxhU: "╨", boxHu: "╧", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpe: "≏", bumpE: "⪮", bumpeq: "≏", Bumpeq: "≎", cacute: "ć", Cacute: "Ć", cap: "∩", Cap: "⋒", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", ccaron: "č", Ccaron: "Č", ccedil: "ç", Ccedil: "Ç", ccirc: "ĉ", Ccirc: "Ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", Cdot: "Ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", chcy: "ч", CHcy: "Ч", check: "✓", checkmark: "✓", chi: "χ", Chi: "Χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cire: "≗", cirE: "⧃", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", colone: "≔", Colone: "⩴", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", cscr: "𝒸", Cscr: "𝒞", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", Cup: "⋓", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", dArr: "⇓", Darr: "↡", dash: "‐", dashv: "⊣", Dashv: "⫤", dbkarow: "⤏", dblac: "˝", dcaron: "ď", Dcaron: "Ď", dcy: "д", Dcy: "Д", dd: "ⅆ", DD: "ⅅ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", delta: "δ", Delta: "Δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", Dfr: "𝔇", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", DJcy: "Ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", Dopf: "𝔻", dot: "˙", Dot: "¨", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", downarrow: "↓", Downarrow: "⇓", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", Dscr: "𝒟", dscy: "ѕ", DScy: "Ѕ", dsol: "⧶", dstrok: "đ", Dstrok: "Đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", DZcy: "Џ", dzigrarr: "⟿", eacute: "é", Eacute: "É", easter: "⩮", ecaron: "ě", Ecaron: "Ě", ecir: "≖", ecirc: "ê", Ecirc: "Ê", ecolon: "≕", ecy: "э", Ecy: "Э", eDDot: "⩷", edot: "ė", eDot: "≑", Edot: "Ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", Efr: "𝔈", eg: "⪚", egrave: "è", Egrave: "È", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", Emacr: "Ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", eng: "ŋ", ENG: "Ŋ", ensp: " ", eogon: "ę", Eogon: "Ę", eopf: "𝕖", Eopf: "𝔼", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", Epsilon: "Ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", esim: "≂", Esim: "⩳", eta: "η", Eta: "Η", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", fcy: "ф", Fcy: "Ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", Ffr: "𝔉", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", Fopf: "𝔽", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", gamma: "γ", Gamma: "Γ", gammad: "ϝ", Gammad: "Ϝ", gap: "⪆", gbreve: "ğ", Gbreve: "Ğ", Gcedil: "Ģ", gcirc: "ĝ", Gcirc: "Ĝ", gcy: "г", Gcy: "Г", gdot: "ġ", Gdot: "Ġ", ge: "≥", gE: "≧", gel: "⋛", gEl: "⪌", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", Gfr: "𝔊", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", GJcy: "Ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", Gopf: "𝔾", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", gscr: "ℊ", Gscr: "𝒢", gsim: "≳", gsime: "⪎", gsiml: "⪐", gt: ">", Gt: "≫", GT: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", HARDcy: "Ъ", harr: "↔", hArr: "⇔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", hcirc: "ĥ", Hcirc: "Ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", hstrok: "ħ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", iacute: "í", Iacute: "Í", ic: "⁣", icirc: "î", Icirc: "Î", icy: "и", Icy: "И", Idot: "İ", iecy: "е", IEcy: "Е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", igrave: "ì", Igrave: "Ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", IJlig: "Ĳ", Im: "ℑ", imacr: "ī", Imacr: "Ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", Int: "∬", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", iocy: "ё", IOcy: "Ё", iogon: "į", Iogon: "Į", iopf: "𝕚", Iopf: "𝕀", iota: "ι", Iota: "Ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", Itilde: "Ĩ", iukcy: "і", Iukcy: "І", iuml: "ï", Iuml: "Ï", jcirc: "ĵ", Jcirc: "Ĵ", jcy: "й", Jcy: "Й", jfr: "𝔧", Jfr: "𝔍", jmath: "ȷ", jopf: "𝕛", Jopf: "𝕁", jscr: "𝒿", Jscr: "𝒥", jsercy: "ј", Jsercy: "Ј", jukcy: "є", Jukcy: "Є", kappa: "κ", Kappa: "Κ", kappav: "ϰ", kcedil: "ķ", Kcedil: "Ķ", kcy: "к", Kcy: "К", kfr: "𝔨", Kfr: "𝔎", kgreen: "ĸ", khcy: "х", KHcy: "Х", kjcy: "ќ", KJcy: "Ќ", kopf: "𝕜", Kopf: "𝕂", kscr: "𝓀", Kscr: "𝒦", lAarr: "⇚", lacute: "ĺ", Lacute: "Ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", Lambda: "Λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larr: "←", lArr: "⇐", Larr: "↞", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", lAtail: "⤛", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", Lcaron: "Ľ", lcedil: "ļ", Lcedil: "Ļ", lceil: "⌈", lcub: "{", lcy: "л", Lcy: "Л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", leftarrow: "←", Leftarrow: "⇐", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", Leftrightarrow: "⇔", LeftRightArrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", leg: "⋚", lEg: "⪋", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", Lfr: "𝔏", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", LJcy: "Љ", ll: "≪", Ll: "⋘", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", lmidot: "ŀ", Lmidot: "Ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", Longleftarrow: "⟸", LongLeftArrow: "⟵", longleftrightarrow: "⟷", Longleftrightarrow: "⟺", LongLeftRightArrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", Longrightarrow: "⟹", LongRightArrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", Lopf: "𝕃", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", Lstrok: "Ł", lt: "<", Lt: "≪", LT: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", Map: "⤅", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", Mcy: "М", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", mfr: "𝔪", Mfr: "𝔐", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", Mopf: "𝕄", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", mu: "μ", Mu: "Μ", multimap: "⊸", mumap: "⊸", nabla: "∇", nacute: "ń", Nacute: "Ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", Ncaron: "Ň", ncedil: "ņ", Ncedil: "Ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", Ncy: "Н", ndash: "–", ne: "≠", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", nfr: "𝔫", Nfr: "𝔑", nge: "≱", ngE: "≧̸", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", ngt: "≯", nGt: "≫⃒", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", NJcy: "Њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nle: "≰", nlE: "≦̸", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nlt: "≮", nLt: "≪⃒", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", not: "¬", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrarr: "↛", nrArr: "⇏", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", Nscr: "𝒩", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsube: "⊈", nsubE: "⫅̸", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupe: "⊉", nsupE: "⫆̸", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntilde: "ñ", Ntilde: "Ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", Nu: "Ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", oacute: "ó", Oacute: "Ó", oast: "⊛", ocir: "⊚", ocirc: "ô", Ocirc: "Ô", ocy: "о", Ocy: "О", odash: "⊝", odblac: "ő", Odblac: "Ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", OElig: "Œ", ofcir: "⦿", ofr: "𝔬", Ofr: "𝔒", ogon: "˛", ograve: "ò", Ograve: "Ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", Omacr: "Ō", omega: "ω", Omega: "Ω", omicron: "ο", Omicron: "Ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", Oopf: "𝕆", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", or: "∨", Or: "⩔", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", oscr: "ℴ", Oscr: "𝒪", oslash: "ø", Oslash: "Ø", osol: "⊘", otilde: "õ", Otilde: "Õ", otimes: "⊗", Otimes: "⨷", otimesas: "⨶", ouml: "ö", Ouml: "Ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", pcy: "п", Pcy: "П", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", Pfr: "𝔓", phi: "φ", Phi: "Φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", Pi: "Π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", pr: "≺", Pr: "⪻", prap: "⪷", prcue: "≼", pre: "⪯", prE: "⪳", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", Pscr: "𝒫", psi: "ψ", Psi: "Ψ", puncsp: " ", qfr: "𝔮", Qfr: "𝔔", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", qscr: "𝓆", Qscr: "𝒬", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", racute: "ŕ", Racute: "Ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarr: "→", rArr: "⇒", Rarr: "↠", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", Rarrtl: "⤖", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", Rcaron: "Ř", rcedil: "ŗ", Rcedil: "Ŗ", rceil: "⌉", rcub: "}", rcy: "р", Rcy: "Р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", Rho: "Ρ", rhov: "ϱ", RightAngleBracket: "⟩", rightarrow: "→", Rightarrow: "⇒", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", sacute: "ś", Sacute: "Ś", sbquo: "‚", sc: "≻", Sc: "⪼", scap: "⪸", scaron: "š", Scaron: "Š", sccue: "≽", sce: "⪰", scE: "⪴", scedil: "ş", Scedil: "Ş", scirc: "ŝ", Scirc: "Ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", Scy: "С", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", Sfr: "𝔖", sfrown: "⌢", sharp: "♯", shchcy: "щ", SHCHcy: "Щ", shcy: "ш", SHcy: "Ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", sigma: "σ", Sigma: "Σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", SOFTcy: "Ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", Sopf: "𝕊", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", Sscr: "𝒮", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", Star: "⋆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", sube: "⊆", subE: "⫅", subedot: "⫃", submult: "⫁", subne: "⊊", subnE: "⫋", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup: "⊃", Sup: "⋑", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supe: "⊇", supE: "⫆", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supne: "⊋", supnE: "⫌", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", tau: "τ", Tau: "Τ", tbrk: "⎴", tcaron: "ť", Tcaron: "Ť", tcedil: "ţ", Tcedil: "Ţ", tcy: "т", Tcy: "Т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", Tfr: "𝔗", there4: "∴", therefore: "∴", Therefore: "∴", theta: "θ", Theta: "Θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", thorn: "þ", THORN: "Þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", Topf: "𝕋", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", Tscr: "𝒯", tscy: "ц", TScy: "Ц", tshcy: "ћ", TSHcy: "Ћ", tstrok: "ŧ", Tstrok: "Ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uacute: "ú", Uacute: "Ú", uarr: "↑", uArr: "⇑", Uarr: "↟", Uarrocir: "⥉", ubrcy: "ў", Ubrcy: "Ў", ubreve: "ŭ", Ubreve: "Ŭ", ucirc: "û", Ucirc: "Û", ucy: "у", Ucy: "У", udarr: "⇅", udblac: "ű", Udblac: "Ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", Ufr: "𝔘", ugrave: "ù", Ugrave: "Ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", Umacr: "Ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", uogon: "ų", Uogon: "Ų", uopf: "𝕦", Uopf: "𝕌", uparrow: "↑", Uparrow: "⇑", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", updownarrow: "↕", Updownarrow: "⇕", UpDownArrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", upsilon: "υ", Upsilon: "Υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", Uring: "Ů", urtri: "◹", uscr: "𝓊", Uscr: "𝒰", utdot: "⋰", utilde: "ũ", Utilde: "Ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uuml: "ü", Uuml: "Ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", vcy: "в", Vcy: "В", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", vee: "∨", Vee: "⋁", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", vfr: "𝔳", Vfr: "𝔙", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", Vopf: "𝕍", vprop: "∝", vrtri: "⊳", vscr: "𝓋", Vscr: "𝒱", vsubne: "⊊︀", vsubnE: "⫋︀", vsupne: "⊋︀", vsupnE: "⫌︀", Vvdash: "⊪", vzigzag: "⦚", wcirc: "ŵ", Wcirc: "Ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", wfr: "𝔴", Wfr: "𝔚", wopf: "𝕨", Wopf: "𝕎", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", Wscr: "𝒲", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", Xfr: "𝔛", xharr: "⟷", xhArr: "⟺", xi: "ξ", Xi: "Ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", Xopf: "𝕏", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", xscr: "𝓍", Xscr: "𝒳", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacute: "ý", Yacute: "Ý", yacy: "я", YAcy: "Я", ycirc: "ŷ", Ycirc: "Ŷ", ycy: "ы", Ycy: "Ы", yen: "¥", yfr: "𝔶", Yfr: "𝔜", yicy: "ї", YIcy: "Ї", yopf: "𝕪", Yopf: "𝕐", yscr: "𝓎", Yscr: "𝒴", yucy: "ю", YUcy: "Ю", yuml: "ÿ", Yuml: "Ÿ", zacute: "ź", Zacute: "Ź", zcaron: "ž", Zcaron: "Ž", zcy: "з", Zcy: "З", zdot: "ż", Zdot: "Ż", zeetrf: "ℨ", ZeroWidthSpace: "​", zeta: "ζ", Zeta: "Ζ", zfr: "𝔷", Zfr: "ℨ", zhcy: "ж", ZHcy: "Ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", zscr: "𝓏", Zscr: "𝒵", zwj: "‍", zwnj: "‌" }, D = { aacute: "á", Aacute: "Á", acirc: "â", Acirc: "Â", acute: "´", aelig: "æ", AElig: "Æ", agrave: "à", Agrave: "À", amp: "&", AMP: "&", aring: "å", Aring: "Å", atilde: "ã", Atilde: "Ã", auml: "ä", Auml: "Ä", brvbar: "¦", ccedil: "ç", Ccedil: "Ç", cedil: "¸", cent: "¢", copy: "©", COPY: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", Eacute: "É", ecirc: "ê", Ecirc: "Ê", egrave: "è", Egrave: "È", eth: "ð", ETH: "Ð", euml: "ë", Euml: "Ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", GT: ">", iacute: "í", Iacute: "Í", icirc: "î", Icirc: "Î", iexcl: "¡", igrave: "ì", Igrave: "Ì", iquest: "¿", iuml: "ï", Iuml: "Ï", laquo: "«", lt: "<", LT: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", Ntilde: "Ñ", oacute: "ó", Oacute: "Ó", ocirc: "ô", Ocirc: "Ô", ograve: "ò", Ograve: "Ò", ordf: "ª", ordm: "º", oslash: "ø", Oslash: "Ø", otilde: "õ", Otilde: "Õ", ouml: "ö", Ouml: "Ö", para: "¶", plusmn: "±", pound: "£", quot: '"', QUOT: '"', raquo: "»", reg: "®", REG: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", THORN: "Þ", times: "×", uacute: "ú", Uacute: "Ú", ucirc: "û", Ucirc: "Û", ugrave: "ù", Ugrave: "Ù", uml: "¨", uuml: "ü", Uuml: "Ü", yacute: "ý", Yacute: "Ý", yen: "¥", yuml: "ÿ" }, y = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" }, F = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], O = String.fromCharCode, M = {}, V = M.hasOwnProperty, J = function(q, U) {
      return V.call(q, U);
    }, Z = function(q, U) {
      for (var K = -1, ge = q.length; ++K < ge; )
        if (q[K] == U)
          return !0;
      return !1;
    }, ie = function(q, U) {
      if (!q)
        return U;
      var K = {}, ge;
      for (ge in U)
        K[ge] = J(q, ge) ? q[ge] : U[ge];
      return K;
    }, te = function(q, U) {
      var K = "";
      return q >= 55296 && q <= 57343 || q > 1114111 ? (U && w("character reference outside the permissible Unicode range"), "�") : J(y, q) ? (U && w("disallowed character reference"), y[q]) : (U && Z(F, q) && w("disallowed character reference"), q > 65535 && (q -= 65536, K += O(q >>> 10 & 1023 | 55296), q = 56320 | q & 1023), K += O(q), K);
    }, v = function(q) {
      return "&#x" + q.toString(16).toUpperCase() + ";";
    }, C = function(q) {
      return "&#" + q + ";";
    }, w = function(q) {
      throw Error("Parse error: " + q);
    }, R = function(q, U) {
      U = ie(U, R.options);
      var K = U.strict;
      K && b.test(q) && w("forbidden code point");
      var ge = U.encodeEverything, xe = U.useNamedReferences, ke = U.allowUnsafeSymbols, Je = U.decimal ? C : v, se = function(ae) {
        return Je(ae.charCodeAt(0));
      };
      return ge ? (q = q.replace(o, function(ae) {
        return xe && J(c, ae) ? "&" + c[ae] + ";" : se(ae);
      }), xe && (q = q.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), xe && (q = q.replace(s, function(ae) {
        return "&" + c[ae] + ";";
      }))) : xe ? (ke || (q = q.replace(g, function(ae) {
        return "&" + c[ae] + ";";
      })), q = q.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), q = q.replace(s, function(ae) {
        return "&" + c[ae] + ";";
      })) : ke || (q = q.replace(g, se)), q.replace(n, function(ae) {
        var kt = ae.charCodeAt(0), cu = ae.charCodeAt(1), Ju = (kt - 55296) * 1024 + cu - 56320 + 65536;
        return Je(Ju);
      }).replace(l, se);
    };
    R.options = {
      allowUnsafeSymbols: !1,
      encodeEverything: !1,
      strict: !1,
      useNamedReferences: !1,
      decimal: !1
    };
    var I = function(q, U) {
      U = ie(U, I.options);
      var K = U.strict;
      return K && p.test(q) && w("malformed character reference"), q.replace(B, function(ge, xe, ke, Je, se, ae, kt, cu, Ju) {
        var Tt, Bt, Xu, Zu, Ft, Nt;
        return xe ? (Ft = xe, k[Ft]) : ke ? (Ft = ke, Nt = Je, Nt && U.isAttributeValue ? (K && Nt == "=" && w("`&` did not start a character reference"), ge) : (K && w(
          "named character reference was not terminated by a semicolon"
        ), D[Ft] + (Nt || ""))) : se ? (Xu = se, Bt = ae, K && !Bt && w("character reference was not terminated by a semicolon"), Tt = parseInt(Xu, 10), te(Tt, K)) : kt ? (Zu = kt, Bt = cu, K && !Bt && w("character reference was not terminated by a semicolon"), Tt = parseInt(Zu, 16), te(Tt, K)) : (K && w(
          "named character reference was not terminated by a semicolon"
        ), ge);
      });
    };
    I.options = {
      isAttributeValue: !1,
      strict: !1
    };
    var Y = function(q) {
      return q.replace(g, function(U) {
        return m[U];
      });
    }, ue = {
      version: "1.2.0",
      encode: R,
      decode: I,
      escape: Y,
      unescape: I
    };
    if (a && !a.nodeType)
      if (i)
        i.exports = ue;
      else
        for (var re in ue)
          J(ue, re) && (a[re] = ue[re]);
    else
      u.he = ue;
  })(E);
})(Ut, Ut.exports);
var Lu = Ut.exports;
Object.defineProperty(gt, "__esModule", { value: !0 });
var Ku = Lu, Va = (
  /** @class */
  function() {
    function e(t, u) {
      t === void 0 && (t = null), this.parentNode = t, this.childNodes = [], Object.defineProperty(this, "range", {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: u ?? [-1, -1]
      });
    }
    return e.prototype.remove = function() {
      var t = this;
      if (this.parentNode) {
        var u = this.parentNode.childNodes;
        this.parentNode.childNodes = u.filter(function(a) {
          return t !== a;
        }), this.parentNode = null;
      }
      return this;
    }, Object.defineProperty(e.prototype, "innerText", {
      get: function() {
        return this.rawText;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "textContent", {
      get: function() {
        return (0, Ku.decode)(this.rawText);
      },
      set: function(t) {
        this.rawText = (0, Ku.encode)(t);
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
);
gt.default = Va;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
var vu;
(function(e) {
  e[e.ELEMENT_NODE = 1] = "ELEMENT_NODE", e[e.TEXT_NODE = 3] = "TEXT_NODE", e[e.COMMENT_NODE = 8] = "COMMENT_NODE";
})(vu || (vu = {}));
Qe.default = vu;
var ja = E && E.__extends || /* @__PURE__ */ function() {
  var e = function(t, u) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
      a.__proto__ = i;
    } || function(a, i) {
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (a[r] = i[r]);
    }, e(t, u);
  };
  return function(t, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
    e(t, u);
    function a() {
      this.constructor = t;
    }
    t.prototype = u === null ? Object.create(u) : (a.prototype = u.prototype, new a());
  };
}(), cr = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xt, "__esModule", { value: !0 });
var Ha = cr(gt), Ua = cr(Qe), za = (
  /** @class */
  function(e) {
    ja(t, e);
    function t(u, a, i, r) {
      a === void 0 && (a = null), r === void 0 && (r = "!--");
      var n = e.call(this, a, i) || this;
      return n.rawText = u, n.rawTagName = r, n.nodeType = Ua.default.COMMENT_NODE, n;
    }
    return t.prototype.clone = function() {
      return new t(this.rawText, null, void 0, this.rawTagName);
    }, Object.defineProperty(t.prototype, "text", {
      /**
       * Get unescaped text value of current node and its children.
       * @return {string} text content
       */
      get: function() {
        return this.rawText;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toString = function() {
      return "<!--".concat(this.rawText, "-->");
    }, t;
  }(Ha.default)
);
Xt.default = za;
var Ve = {}, dr = {}, fr = {}, _e = {}, et = {}, Ct = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var t;
  (function(a) {
    a.Root = "root", a.Text = "text", a.Directive = "directive", a.Comment = "comment", a.Script = "script", a.Style = "style", a.Tag = "tag", a.CDATA = "cdata", a.Doctype = "doctype";
  })(t = e.ElementType || (e.ElementType = {}));
  function u(a) {
    return a.type === t.Tag || a.type === t.Script || a.type === t.Style;
  }
  e.isTag = u, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})(Ct);
var G = {}, Ge = E && E.__extends || /* @__PURE__ */ function() {
  var e = function(t, u) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
      a.__proto__ = i;
    } || function(a, i) {
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (a[r] = i[r]);
    }, e(t, u);
  };
  return function(t, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
    e(t, u);
    function a() {
      this.constructor = t;
    }
    t.prototype = u === null ? Object.create(u) : (a.prototype = u.prototype, new a());
  };
}(), xt = E && E.__assign || function() {
  return xt = Object.assign || function(e) {
    for (var t, u = 1, a = arguments.length; u < a; u++) {
      t = arguments[u];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, xt.apply(this, arguments);
};
Object.defineProperty(G, "__esModule", { value: !0 });
G.cloneNode = G.hasChildren = G.isDocument = G.isDirective = G.isComment = G.isText = G.isCDATA = G.isTag = G.Element = G.Document = G.CDATA = G.NodeWithChildren = G.ProcessingInstruction = G.Comment = G.Text = G.DataNode = G.Node = void 0;
var be = Ct, ku = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), Tu(this, t);
    }, e;
  }()
);
G.Node = ku;
var Zt = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t(u) {
      var a = e.call(this) || this;
      return a.data = u, a;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(u) {
        this.data = u;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(ku)
);
G.DataNode = Zt;
var hr = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t() {
      var u = e !== null && e.apply(this, arguments) || this;
      return u.type = be.ElementType.Text, u;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Zt)
);
G.Text = hr;
var gr = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t() {
      var u = e !== null && e.apply(this, arguments) || this;
      return u.type = be.ElementType.Comment, u;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Zt)
);
G.Comment = gr;
var pr = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t(u, a) {
      var i = e.call(this, a) || this;
      return i.name = u, i.type = be.ElementType.Directive, i;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Zt)
);
G.ProcessingInstruction = pr;
var Kt = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t(u) {
      var a = e.call(this) || this;
      return a.children = u, a;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var u;
        return (u = this.children[0]) !== null && u !== void 0 ? u : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(u) {
        this.children = u;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(ku)
);
G.NodeWithChildren = Kt;
var mr = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t() {
      var u = e !== null && e.apply(this, arguments) || this;
      return u.type = be.ElementType.CDATA, u;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Kt)
);
G.CDATA = mr;
var br = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t() {
      var u = e !== null && e.apply(this, arguments) || this;
      return u.type = be.ElementType.Root, u;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Kt)
);
G.Document = br;
var vr = (
  /** @class */
  function(e) {
    Ge(t, e);
    function t(u, a, i, r) {
      i === void 0 && (i = []), r === void 0 && (r = u === "script" ? be.ElementType.Script : u === "style" ? be.ElementType.Style : be.ElementType.Tag);
      var n = e.call(this, i) || this;
      return n.name = u, n.attribs = a, n.type = r, n;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(u) {
        this.name = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var u = this;
        return Object.keys(this.attribs).map(function(a) {
          var i, r;
          return {
            name: a,
            value: u.attribs[a],
            namespace: (i = u["x-attribsNamespace"]) === null || i === void 0 ? void 0 : i[a],
            prefix: (r = u["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[a]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Kt)
);
G.Element = vr;
function _r(e) {
  return (0, be.isTag)(e);
}
G.isTag = _r;
function yr(e) {
  return e.type === be.ElementType.CDATA;
}
G.isCDATA = yr;
function Dr(e) {
  return e.type === be.ElementType.Text;
}
G.isText = Dr;
function xr(e) {
  return e.type === be.ElementType.Comment;
}
G.isComment = xr;
function Ar(e) {
  return e.type === be.ElementType.Directive;
}
G.isDirective = Ar;
function Cr(e) {
  return e.type === be.ElementType.Root;
}
G.isDocument = Cr;
function Ga(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
G.hasChildren = Ga;
function Tu(e, t) {
  t === void 0 && (t = !1);
  var u;
  if (Dr(e))
    u = new hr(e.data);
  else if (xr(e))
    u = new gr(e.data);
  else if (_r(e)) {
    var a = t ? du(e.children) : [], i = new vr(e.name, xt({}, e.attribs), a);
    a.forEach(function(l) {
      return l.parent = i;
    }), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = xt({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = xt({}, e["x-attribsPrefix"])), u = i;
  } else if (yr(e)) {
    var a = t ? du(e.children) : [], r = new mr(a);
    a.forEach(function(s) {
      return s.parent = r;
    }), u = r;
  } else if (Cr(e)) {
    var a = t ? du(e.children) : [], n = new br(a);
    a.forEach(function(s) {
      return s.parent = n;
    }), e["x-mode"] && (n["x-mode"] = e["x-mode"]), u = n;
  } else if (Ar(e)) {
    var o = new pr(e.name, e.data);
    e["x-name"] != null && (o["x-name"] = e["x-name"], o["x-publicId"] = e["x-publicId"], o["x-systemId"] = e["x-systemId"]), u = o;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return u.startIndex = e.startIndex, u.endIndex = e.endIndex, e.sourceCodeLocation != null && (u.sourceCodeLocation = e.sourceCodeLocation), u;
}
G.cloneNode = Tu;
function du(e) {
  for (var t = e.map(function(a) {
    return Tu(a, !0);
  }), u = 1; u < t.length; u++)
    t[u].prev = t[u - 1], t[u - 1].next = t[u];
  return t;
}
(function(e) {
  var t = E && E.__createBinding || (Object.create ? function(o, l, s, c) {
    c === void 0 && (c = s);
    var g = Object.getOwnPropertyDescriptor(l, s);
    (!g || ("get" in g ? !l.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return l[s];
    } }), Object.defineProperty(o, c, g);
  } : function(o, l, s, c) {
    c === void 0 && (c = s), o[c] = l[s];
  }), u = E && E.__exportStar || function(o, l) {
    for (var s in o) s !== "default" && !Object.prototype.hasOwnProperty.call(l, s) && t(l, o, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var a = Ct, i = G;
  u(G, e);
  var r = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, n = (
    /** @class */
    function() {
      function o(l, s, c) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof s == "function" && (c = s, s = r), typeof l == "object" && (s = l, l = void 0), this.callback = l ?? null, this.options = s ?? r, this.elementCB = c ?? null;
      }
      return o.prototype.onparserinit = function(l) {
        this.parser = l;
      }, o.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, o.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, o.prototype.onerror = function(l) {
        this.handleCallback(l);
      }, o.prototype.onclosetag = function() {
        this.lastNode = null;
        var l = this.tagStack.pop();
        this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
      }, o.prototype.onopentag = function(l, s) {
        var c = this.options.xmlMode ? a.ElementType.Tag : void 0, g = new i.Element(l, s, void 0, c);
        this.addNode(g), this.tagStack.push(g);
      }, o.prototype.ontext = function(l) {
        var s = this.lastNode;
        if (s && s.type === a.ElementType.Text)
          s.data += l, this.options.withEndIndices && (s.endIndex = this.parser.endIndex);
        else {
          var c = new i.Text(l);
          this.addNode(c), this.lastNode = c;
        }
      }, o.prototype.oncomment = function(l) {
        if (this.lastNode && this.lastNode.type === a.ElementType.Comment) {
          this.lastNode.data += l;
          return;
        }
        var s = new i.Comment(l);
        this.addNode(s), this.lastNode = s;
      }, o.prototype.oncommentend = function() {
        this.lastNode = null;
      }, o.prototype.oncdatastart = function() {
        var l = new i.Text(""), s = new i.CDATA([l]);
        this.addNode(s), l.parent = s, this.lastNode = l;
      }, o.prototype.oncdataend = function() {
        this.lastNode = null;
      }, o.prototype.onprocessinginstruction = function(l, s) {
        var c = new i.ProcessingInstruction(l, s);
        this.addNode(c);
      }, o.prototype.handleCallback = function(l) {
        if (typeof this.callback == "function")
          this.callback(l, this.dom);
        else if (l)
          throw l;
      }, o.prototype.addNode = function(l) {
        var s = this.tagStack[this.tagStack.length - 1], c = s.children[s.children.length - 1];
        this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), s.children.push(l), c && (l.prev = c, c.next = l), l.parent = s, this.lastNode = null;
      }, o;
    }()
  );
  e.DomHandler = n, e.default = n;
})(et);
var wt = {}, wr = {}, _u = {}, Bu = {};
Object.defineProperty(Bu, "__esModule", { value: !0 });
Bu.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
Fu.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var yu = {};
(function(e) {
  var t;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var u = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (t = String.fromCodePoint) !== null && t !== void 0 ? t : function(r) {
    var n = "";
    return r > 65535 && (r -= 65536, n += String.fromCharCode(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), n += String.fromCharCode(r), n;
  };
  function a(r) {
    var n;
    return r >= 55296 && r <= 57343 || r > 1114111 ? 65533 : (n = u.get(r)) !== null && n !== void 0 ? n : r;
  }
  e.replaceCodePoint = a;
  function i(r) {
    return (0, e.fromCodePoint)(a(r));
  }
  e.default = i;
})(yu);
(function(e) {
  var t = E && E.__createBinding || (Object.create ? function(v, C, w, R) {
    R === void 0 && (R = w);
    var I = Object.getOwnPropertyDescriptor(C, w);
    (!I || ("get" in I ? !C.__esModule : I.writable || I.configurable)) && (I = { enumerable: !0, get: function() {
      return C[w];
    } }), Object.defineProperty(v, R, I);
  } : function(v, C, w, R) {
    R === void 0 && (R = w), v[R] = C[w];
  }), u = E && E.__setModuleDefault || (Object.create ? function(v, C) {
    Object.defineProperty(v, "default", { enumerable: !0, value: C });
  } : function(v, C) {
    v.default = C;
  }), a = E && E.__importStar || function(v) {
    if (v && v.__esModule) return v;
    var C = {};
    if (v != null) for (var w in v) w !== "default" && Object.prototype.hasOwnProperty.call(v, w) && t(C, v, w);
    return u(C, v), C;
  }, i = E && E.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var r = i(Bu);
  e.htmlDecodeTree = r.default;
  var n = i(Fu);
  e.xmlDecodeTree = n.default;
  var o = a(yu);
  e.decodeCodePoint = o.default;
  var l = yu;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return l.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return l.fromCodePoint;
  } });
  var s;
  (function(v) {
    v[v.NUM = 35] = "NUM", v[v.SEMI = 59] = "SEMI", v[v.EQUALS = 61] = "EQUALS", v[v.ZERO = 48] = "ZERO", v[v.NINE = 57] = "NINE", v[v.LOWER_A = 97] = "LOWER_A", v[v.LOWER_F = 102] = "LOWER_F", v[v.LOWER_X = 120] = "LOWER_X", v[v.LOWER_Z = 122] = "LOWER_Z", v[v.UPPER_A = 65] = "UPPER_A", v[v.UPPER_F = 70] = "UPPER_F", v[v.UPPER_Z = 90] = "UPPER_Z";
  })(s || (s = {}));
  var c = 32, g;
  (function(v) {
    v[v.VALUE_LENGTH = 49152] = "VALUE_LENGTH", v[v.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", v[v.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(g = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function m(v) {
    return v >= s.ZERO && v <= s.NINE;
  }
  function p(v) {
    return v >= s.UPPER_A && v <= s.UPPER_F || v >= s.LOWER_A && v <= s.LOWER_F;
  }
  function b(v) {
    return v >= s.UPPER_A && v <= s.UPPER_Z || v >= s.LOWER_A && v <= s.LOWER_Z || m(v);
  }
  function B(v) {
    return v === s.EQUALS || b(v);
  }
  var k;
  (function(v) {
    v[v.EntityStart = 0] = "EntityStart", v[v.NumericStart = 1] = "NumericStart", v[v.NumericDecimal = 2] = "NumericDecimal", v[v.NumericHex = 3] = "NumericHex", v[v.NamedEntity = 4] = "NamedEntity";
  })(k || (k = {}));
  var D;
  (function(v) {
    v[v.Legacy = 0] = "Legacy", v[v.Strict = 1] = "Strict", v[v.Attribute = 2] = "Attribute";
  })(D = e.DecodingMode || (e.DecodingMode = {}));
  var y = (
    /** @class */
    function() {
      function v(C, w, R) {
        this.decodeTree = C, this.emitCodePoint = w, this.errors = R, this.state = k.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = D.Strict;
      }
      return v.prototype.startEntity = function(C) {
        this.decodeMode = C, this.state = k.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, v.prototype.write = function(C, w) {
        switch (this.state) {
          case k.EntityStart:
            return C.charCodeAt(w) === s.NUM ? (this.state = k.NumericStart, this.consumed += 1, this.stateNumericStart(C, w + 1)) : (this.state = k.NamedEntity, this.stateNamedEntity(C, w));
          case k.NumericStart:
            return this.stateNumericStart(C, w);
          case k.NumericDecimal:
            return this.stateNumericDecimal(C, w);
          case k.NumericHex:
            return this.stateNumericHex(C, w);
          case k.NamedEntity:
            return this.stateNamedEntity(C, w);
        }
      }, v.prototype.stateNumericStart = function(C, w) {
        return w >= C.length ? -1 : (C.charCodeAt(w) | c) === s.LOWER_X ? (this.state = k.NumericHex, this.consumed += 1, this.stateNumericHex(C, w + 1)) : (this.state = k.NumericDecimal, this.stateNumericDecimal(C, w));
      }, v.prototype.addToNumericResult = function(C, w, R, I) {
        if (w !== R) {
          var Y = R - w;
          this.result = this.result * Math.pow(I, Y) + parseInt(C.substr(w, Y), I), this.consumed += Y;
        }
      }, v.prototype.stateNumericHex = function(C, w) {
        for (var R = w; w < C.length; ) {
          var I = C.charCodeAt(w);
          if (m(I) || p(I))
            w += 1;
          else
            return this.addToNumericResult(C, R, w, 16), this.emitNumericEntity(I, 3);
        }
        return this.addToNumericResult(C, R, w, 16), -1;
      }, v.prototype.stateNumericDecimal = function(C, w) {
        for (var R = w; w < C.length; ) {
          var I = C.charCodeAt(w);
          if (m(I))
            w += 1;
          else
            return this.addToNumericResult(C, R, w, 10), this.emitNumericEntity(I, 2);
        }
        return this.addToNumericResult(C, R, w, 10), -1;
      }, v.prototype.emitNumericEntity = function(C, w) {
        var R;
        if (this.consumed <= w)
          return (R = this.errors) === null || R === void 0 || R.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (C === s.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === D.Strict)
          return 0;
        return this.emitCodePoint((0, o.replaceCodePoint)(this.result), this.consumed), this.errors && (C !== s.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, v.prototype.stateNamedEntity = function(C, w) {
        for (var R = this.decodeTree, I = R[this.treeIndex], Y = (I & g.VALUE_LENGTH) >> 14; w < C.length; w++, this.excess++) {
          var ue = C.charCodeAt(w);
          if (this.treeIndex = O(R, I, this.treeIndex + Math.max(1, Y), ue), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === D.Attribute && // We shouldn't have consumed any characters after the entity,
            (Y === 0 || // And there should be no invalid characters.
            B(ue)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (I = R[this.treeIndex], Y = (I & g.VALUE_LENGTH) >> 14, Y !== 0) {
            if (ue === s.SEMI)
              return this.emitNamedEntityData(this.treeIndex, Y, this.consumed + this.excess);
            this.decodeMode !== D.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, v.prototype.emitNotTerminatedNamedEntity = function() {
        var C, w = this, R = w.result, I = w.decodeTree, Y = (I[R] & g.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(R, Y, this.consumed), (C = this.errors) === null || C === void 0 || C.missingSemicolonAfterCharacterReference(), this.consumed;
      }, v.prototype.emitNamedEntityData = function(C, w, R) {
        var I = this.decodeTree;
        return this.emitCodePoint(w === 1 ? I[C] & ~g.VALUE_LENGTH : I[C + 1], R), w === 3 && this.emitCodePoint(I[C + 2], R), R;
      }, v.prototype.end = function() {
        var C;
        switch (this.state) {
          case k.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== D.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case k.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case k.NumericHex:
            return this.emitNumericEntity(0, 3);
          case k.NumericStart:
            return (C = this.errors) === null || C === void 0 || C.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case k.EntityStart:
            return 0;
        }
      }, v;
    }()
  );
  e.EntityDecoder = y;
  function F(v) {
    var C = "", w = new y(v, function(R) {
      return C += (0, o.fromCodePoint)(R);
    });
    return function(I, Y) {
      for (var ue = 0, re = 0; (re = I.indexOf("&", re)) >= 0; ) {
        C += I.slice(ue, re), w.startEntity(Y);
        var q = w.write(
          I,
          // Skip the "&"
          re + 1
        );
        if (q < 0) {
          ue = re + w.end();
          break;
        }
        ue = re + q, re = q === 0 ? ue + 1 : ue;
      }
      var U = C + I.slice(ue);
      return C = "", U;
    };
  }
  function O(v, C, w, R) {
    var I = (C & g.BRANCH_LENGTH) >> 7, Y = C & g.JUMP_TABLE;
    if (I === 0)
      return Y !== 0 && R === Y ? w : -1;
    if (Y) {
      var ue = R - Y;
      return ue < 0 || ue >= I ? -1 : v[w + ue] - 1;
    }
    for (var re = w, q = re + I - 1; re <= q; ) {
      var U = re + q >>> 1, K = v[U];
      if (K < R)
        re = U + 1;
      else if (K > R)
        q = U - 1;
      else
        return v[U + I];
    }
    return -1;
  }
  e.determineBranch = O;
  var M = F(r.default), V = F(n.default);
  function J(v, C) {
    return C === void 0 && (C = D.Legacy), M(v, C);
  }
  e.decodeHTML = J;
  function Z(v) {
    return M(v, D.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ie(v) {
    return M(v, D.Strict);
  }
  e.decodeHTMLStrict = ie;
  function te(v) {
    return V(v, D.Strict);
  }
  e.decodeXML = te;
})(_u);
var $e = {}, Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
function qt(e) {
  for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1;
  return e;
}
Nu.default = new Map(/* @__PURE__ */ qt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ qt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ qt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ qt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var zt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var t = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(i, r) {
    return i.codePointAt(r);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(i, r) {
      return (i.charCodeAt(r) & 64512) === 55296 ? (i.charCodeAt(r) - 55296) * 1024 + i.charCodeAt(r + 1) - 56320 + 65536 : i.charCodeAt(r);
    }
  );
  function u(i) {
    for (var r = "", n = 0, o; (o = e.xmlReplacer.exec(i)) !== null; ) {
      var l = o.index, s = i.charCodeAt(l), c = t.get(s);
      c !== void 0 ? (r += i.substring(n, l) + c, n = l + 1) : (r += "".concat(i.substring(n, l), "&#x").concat((0, e.getCodePoint)(i, l).toString(16), ";"), n = e.xmlReplacer.lastIndex += +((s & 64512) === 55296));
    }
    return r + i.substr(n);
  }
  e.encodeXML = u, e.escape = u;
  function a(i, r) {
    return function(o) {
      for (var l, s = 0, c = ""; l = i.exec(o); )
        s !== l.index && (c += o.substring(s, l.index)), c += r.get(l[0].charCodeAt(0)), s = l.index + 1;
      return c + o.substring(s);
    };
  }
  e.escapeUTF8 = a(/[&<>'"]/g, t), e.escapeAttribute = a(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = a(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(zt);
var Wa = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.encodeNonAsciiHTML = $e.encodeHTML = void 0;
var Ja = Wa(Nu), Er = zt, Xa = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Za(e) {
  return Sr(Xa, e);
}
$e.encodeHTML = Za;
function Ka(e) {
  return Sr(Er.xmlReplacer, e);
}
$e.encodeNonAsciiHTML = Ka;
function Sr(e, t) {
  for (var u = "", a = 0, i; (i = e.exec(t)) !== null; ) {
    var r = i.index;
    u += t.substring(a, r);
    var n = t.charCodeAt(r), o = Ja.default.get(n);
    if (typeof o == "object") {
      if (r + 1 < t.length) {
        var l = t.charCodeAt(r + 1), s = typeof o.n == "number" ? o.n === l ? o.o : void 0 : o.n.get(l);
        if (s !== void 0) {
          u += s, a = e.lastIndex += 1;
          continue;
        }
      }
      o = o.v;
    }
    if (o !== void 0)
      u += o, a = r + 1;
    else {
      var c = (0, Er.getCodePoint)(t, r);
      u += "&#x".concat(c.toString(16), ";"), a = e.lastIndex += +(c !== n);
    }
  }
  return u + t.substr(a);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var t = _u, u = $e, a = zt, i;
  (function(m) {
    m[m.XML = 0] = "XML", m[m.HTML = 1] = "HTML";
  })(i = e.EntityLevel || (e.EntityLevel = {}));
  var r;
  (function(m) {
    m[m.UTF8 = 0] = "UTF8", m[m.ASCII = 1] = "ASCII", m[m.Extensive = 2] = "Extensive", m[m.Attribute = 3] = "Attribute", m[m.Text = 4] = "Text";
  })(r = e.EncodingMode || (e.EncodingMode = {}));
  function n(m, p) {
    p === void 0 && (p = i.XML);
    var b = typeof p == "number" ? p : p.level;
    if (b === i.HTML) {
      var B = typeof p == "object" ? p.mode : void 0;
      return (0, t.decodeHTML)(m, B);
    }
    return (0, t.decodeXML)(m);
  }
  e.decode = n;
  function o(m, p) {
    var b;
    p === void 0 && (p = i.XML);
    var B = typeof p == "number" ? { level: p } : p;
    return (b = B.mode) !== null && b !== void 0 || (B.mode = t.DecodingMode.Strict), n(m, B);
  }
  e.decodeStrict = o;
  function l(m, p) {
    p === void 0 && (p = i.XML);
    var b = typeof p == "number" ? { level: p } : p;
    return b.mode === r.UTF8 ? (0, a.escapeUTF8)(m) : b.mode === r.Attribute ? (0, a.escapeAttribute)(m) : b.mode === r.Text ? (0, a.escapeText)(m) : b.level === i.HTML ? b.mode === r.ASCII ? (0, u.encodeNonAsciiHTML)(m) : (0, u.encodeHTML)(m) : (0, a.encodeXML)(m);
  }
  e.encode = l;
  var s = zt;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return s.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return s.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return s.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return s.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return s.escapeText;
  } });
  var c = $e;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return c.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } });
  var g = _u;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return g.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return g.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return g.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return g.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return g.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return g.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return g.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return g.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return g.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return g.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return g.decodeXML;
  } });
})(wr);
var ct = {};
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.attributeNames = ct.elementNames = void 0;
ct.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
ct.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var rt = E && E.__assign || function() {
  return rt = Object.assign || function(e) {
    for (var t, u = 1, a = arguments.length; u < a; u++) {
      t = arguments[u];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, rt.apply(this, arguments);
}, $a = E && E.__createBinding || (Object.create ? function(e, t, u, a) {
  a === void 0 && (a = u);
  var i = Object.getOwnPropertyDescriptor(t, u);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[u];
  } }), Object.defineProperty(e, a, i);
} : function(e, t, u, a) {
  a === void 0 && (a = u), e[a] = t[u];
}), Ya = E && E.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Qa = E && E.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var u in e) u !== "default" && Object.prototype.hasOwnProperty.call(e, u) && $a(t, e, u);
  return Ya(t, e), t;
};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.render = void 0;
var Oe = Qa(Ct), Gt = wr, Lr = ct, ei = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function ti(e) {
  return e.replace(/"/g, "&quot;");
}
function ui(e, t) {
  var u;
  if (e) {
    var a = ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) === !1 ? ti : t.xmlMode || t.encodeEntities !== "utf8" ? Gt.encodeXML : Gt.escapeAttribute;
    return Object.keys(e).map(function(i) {
      var r, n, o = (r = e[i]) !== null && r !== void 0 ? r : "";
      return t.xmlMode === "foreign" && (i = (n = Lr.attributeNames.get(i)) !== null && n !== void 0 ? n : i), !t.emptyAttrs && !t.xmlMode && o === "" ? i : "".concat(i, '="').concat(a(o), '"');
    }).join(" ");
  }
}
var $u = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function $t(e, t) {
  t === void 0 && (t = {});
  for (var u = ("length" in e) ? e : [e], a = "", i = 0; i < u.length; i++)
    a += ri(u[i], t);
  return a;
}
wt.render = $t;
wt.default = $t;
function ri(e, t) {
  switch (e.type) {
    case Oe.Root:
      return $t(e.children, t);
    case Oe.Doctype:
    case Oe.Directive:
      return si(e);
    case Oe.Comment:
      return ci(e);
    case Oe.CDATA:
      return li(e);
    case Oe.Script:
    case Oe.Style:
    case Oe.Tag:
      return ni(e, t);
    case Oe.Text:
      return oi(e, t);
  }
}
var ai = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), ii = /* @__PURE__ */ new Set(["svg", "math"]);
function ni(e, t) {
  var u;
  t.xmlMode === "foreign" && (e.name = (u = Lr.elementNames.get(e.name)) !== null && u !== void 0 ? u : e.name, e.parent && ai.has(e.parent.name) && (t = rt(rt({}, t), { xmlMode: !1 }))), !t.xmlMode && ii.has(e.name) && (t = rt(rt({}, t), { xmlMode: "foreign" }));
  var a = "<".concat(e.name), i = ui(e.attribs, t);
  return i && (a += " ".concat(i)), e.children.length === 0 && (t.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    t.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    t.selfClosingTags && $u.has(e.name)
  )) ? (t.xmlMode || (a += " "), a += "/>") : (a += ">", e.children.length > 0 && (a += $t(e.children, t)), (t.xmlMode || !$u.has(e.name)) && (a += "</".concat(e.name, ">"))), a;
}
function si(e) {
  return "<".concat(e.data, ">");
}
function oi(e, t) {
  var u, a = e.data || "";
  return ((u = t.encodeEntities) !== null && u !== void 0 ? u : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && ei.has(e.parent.name)) && (a = t.xmlMode || t.encodeEntities !== "utf8" ? (0, Gt.encodeXML)(a) : (0, Gt.escapeText)(a)), a;
}
function li(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function ci(e) {
  return "<!--".concat(e.data, "-->");
}
var di = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.innerText = _e.textContent = _e.getText = _e.getInnerHTML = _e.getOuterHTML = void 0;
var Be = et, fi = di(wt), hi = Ct;
function kr(e, t) {
  return (0, fi.default)(e, t);
}
_e.getOuterHTML = kr;
function gi(e, t) {
  return (0, Be.hasChildren)(e) ? e.children.map(function(u) {
    return kr(u, t);
  }).join("") : "";
}
_e.getInnerHTML = gi;
function Vt(e) {
  return Array.isArray(e) ? e.map(Vt).join("") : (0, Be.isTag)(e) ? e.name === "br" ? `
` : Vt(e.children) : (0, Be.isCDATA)(e) ? Vt(e.children) : (0, Be.isText)(e) ? e.data : "";
}
_e.getText = Vt;
function Du(e) {
  return Array.isArray(e) ? e.map(Du).join("") : (0, Be.hasChildren)(e) && !(0, Be.isComment)(e) ? Du(e.children) : (0, Be.isText)(e) ? e.data : "";
}
_e.textContent = Du;
function xu(e) {
  return Array.isArray(e) ? e.map(xu).join("") : (0, Be.hasChildren)(e) && (e.type === hi.ElementType.Tag || (0, Be.isCDATA)(e)) ? xu(e.children) : (0, Be.isText)(e) ? e.data : "";
}
_e.innerText = xu;
var oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.prevElementSibling = oe.nextElementSibling = oe.getName = oe.hasAttrib = oe.getAttributeValue = oe.getSiblings = oe.getParent = oe.getChildren = void 0;
var qu = et;
function Tr(e) {
  return (0, qu.hasChildren)(e) ? e.children : [];
}
oe.getChildren = Tr;
function Br(e) {
  return e.parent || null;
}
oe.getParent = Br;
function pi(e) {
  var t, u, a = Br(e);
  if (a != null)
    return Tr(a);
  for (var i = [e], r = e.prev, n = e.next; r != null; )
    i.unshift(r), t = r, r = t.prev;
  for (; n != null; )
    i.push(n), u = n, n = u.next;
  return i;
}
oe.getSiblings = pi;
function mi(e, t) {
  var u;
  return (u = e.attribs) === null || u === void 0 ? void 0 : u[t];
}
oe.getAttributeValue = mi;
function bi(e, t) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null;
}
oe.hasAttrib = bi;
function vi(e) {
  return e.name;
}
oe.getName = vi;
function _i(e) {
  for (var t, u = e.next; u !== null && !(0, qu.isTag)(u); )
    t = u, u = t.next;
  return u;
}
oe.nextElementSibling = _i;
function yi(e) {
  for (var t, u = e.prev; u !== null && !(0, qu.isTag)(u); )
    t = u, u = t.prev;
  return u;
}
oe.prevElementSibling = yi;
var me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.prepend = me.prependChild = me.append = me.appendChild = me.replaceElement = me.removeElement = void 0;
function Et(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, u = t.lastIndexOf(e);
    u >= 0 && t.splice(u, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
me.removeElement = Et;
function Di(e, t) {
  var u = t.prev = e.prev;
  u && (u.next = t);
  var a = t.next = e.next;
  a && (a.prev = t);
  var i = t.parent = e.parent;
  if (i) {
    var r = i.children;
    r[r.lastIndexOf(e)] = t, e.parent = null;
  }
}
me.replaceElement = Di;
function xi(e, t) {
  if (Et(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var u = e.children[e.children.length - 2];
    u.next = t, t.prev = u;
  } else
    t.prev = null;
}
me.appendChild = xi;
function Ai(e, t) {
  Et(t);
  var u = e.parent, a = e.next;
  if (t.next = a, t.prev = e, e.next = t, t.parent = u, a) {
    if (a.prev = t, u) {
      var i = u.children;
      i.splice(i.lastIndexOf(a), 0, t);
    }
  } else u && u.children.push(t);
}
me.append = Ai;
function Ci(e, t) {
  if (Et(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var u = e.children[1];
    u.prev = t, t.next = u;
  } else
    t.next = null;
}
me.prependChild = Ci;
function wi(e, t) {
  Et(t);
  var u = e.parent;
  if (u) {
    var a = u.children;
    a.splice(a.indexOf(e), 0, t);
  }
  e.prev && (e.prev.next = t), t.parent = u, t.prev = e.prev, t.next = e, e.prev = t;
}
me.prepend = wi;
var fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.findAll = fe.existsOne = fe.findOne = fe.findOneChild = fe.find = fe.filter = void 0;
var Yt = et;
function Ei(e, t, u, a) {
  return u === void 0 && (u = !0), a === void 0 && (a = 1 / 0), Fr(e, Array.isArray(t) ? t : [t], u, a);
}
fe.filter = Ei;
function Fr(e, t, u, a) {
  for (var i = [], r = [t], n = [0]; ; ) {
    if (n[0] >= r[0].length) {
      if (n.length === 1)
        return i;
      r.shift(), n.shift();
      continue;
    }
    var o = r[0][n[0]++];
    if (e(o) && (i.push(o), --a <= 0))
      return i;
    u && (0, Yt.hasChildren)(o) && o.children.length > 0 && (n.unshift(0), r.unshift(o.children));
  }
}
fe.find = Fr;
function Si(e, t) {
  return t.find(e);
}
fe.findOneChild = Si;
function Nr(e, t, u) {
  u === void 0 && (u = !0);
  for (var a = null, i = 0; i < t.length && !a; i++) {
    var r = t[i];
    if ((0, Yt.isTag)(r))
      e(r) ? a = r : u && r.children.length > 0 && (a = Nr(e, r.children, !0));
    else continue;
  }
  return a;
}
fe.findOne = Nr;
function qr(e, t) {
  return t.some(function(u) {
    return (0, Yt.isTag)(u) && (e(u) || qr(e, u.children));
  });
}
fe.existsOne = qr;
function Li(e, t) {
  for (var u = [], a = [t], i = [0]; ; ) {
    if (i[0] >= a[0].length) {
      if (a.length === 1)
        return u;
      a.shift(), i.shift();
      continue;
    }
    var r = a[0][i[0]++];
    (0, Yt.isTag)(r) && (e(r) && u.push(r), r.children.length > 0 && (i.unshift(0), a.unshift(r.children)));
  }
}
fe.findAll = Li;
var ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.getElementsByTagType = ye.getElementsByTagName = ye.getElementById = ye.getElements = ye.testElement = void 0;
var Ze = et, Qt = fe, Wt = {
  tag_name: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, Ze.isTag)(t) && e(t.name);
    } : e === "*" ? Ze.isTag : function(t) {
      return (0, Ze.isTag)(t) && t.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(t) {
      return e(t.type);
    } : function(t) {
      return t.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, Ze.isText)(t) && e(t.data);
    } : function(t) {
      return (0, Ze.isText)(t) && t.data === e;
    };
  }
};
function Or(e, t) {
  return typeof t == "function" ? function(u) {
    return (0, Ze.isTag)(u) && t(u.attribs[e]);
  } : function(u) {
    return (0, Ze.isTag)(u) && u.attribs[e] === t;
  };
}
function ki(e, t) {
  return function(u) {
    return e(u) || t(u);
  };
}
function Pr(e) {
  var t = Object.keys(e).map(function(u) {
    var a = e[u];
    return Object.prototype.hasOwnProperty.call(Wt, u) ? Wt[u](a) : Or(u, a);
  });
  return t.length === 0 ? null : t.reduce(ki);
}
function Ti(e, t) {
  var u = Pr(e);
  return u ? u(t) : !0;
}
ye.testElement = Ti;
function Bi(e, t, u, a) {
  a === void 0 && (a = 1 / 0);
  var i = Pr(e);
  return i ? (0, Qt.filter)(i, t, u, a) : [];
}
ye.getElements = Bi;
function Fi(e, t, u) {
  return u === void 0 && (u = !0), Array.isArray(t) || (t = [t]), (0, Qt.findOne)(Or("id", e), t, u);
}
ye.getElementById = Fi;
function Ni(e, t, u, a) {
  return u === void 0 && (u = !0), a === void 0 && (a = 1 / 0), (0, Qt.filter)(Wt.tag_name(e), t, u, a);
}
ye.getElementsByTagName = Ni;
function qi(e, t, u, a) {
  return u === void 0 && (u = !0), a === void 0 && (a = 1 / 0), (0, Qt.filter)(Wt.tag_type(e), t, u, a);
}
ye.getElementsByTagType = qi;
var Rr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var t = et;
  function u(n) {
    for (var o = n.length; --o >= 0; ) {
      var l = n[o];
      if (o > 0 && n.lastIndexOf(l, o - 1) >= 0) {
        n.splice(o, 1);
        continue;
      }
      for (var s = l.parent; s; s = s.parent)
        if (n.includes(s)) {
          n.splice(o, 1);
          break;
        }
    }
    return n;
  }
  e.removeSubsets = u;
  var a;
  (function(n) {
    n[n.DISCONNECTED = 1] = "DISCONNECTED", n[n.PRECEDING = 2] = "PRECEDING", n[n.FOLLOWING = 4] = "FOLLOWING", n[n.CONTAINS = 8] = "CONTAINS", n[n.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(a = e.DocumentPosition || (e.DocumentPosition = {}));
  function i(n, o) {
    var l = [], s = [];
    if (n === o)
      return 0;
    for (var c = (0, t.hasChildren)(n) ? n : n.parent; c; )
      l.unshift(c), c = c.parent;
    for (c = (0, t.hasChildren)(o) ? o : o.parent; c; )
      s.unshift(c), c = c.parent;
    for (var g = Math.min(l.length, s.length), m = 0; m < g && l[m] === s[m]; )
      m++;
    if (m === 0)
      return a.DISCONNECTED;
    var p = l[m - 1], b = p.children, B = l[m], k = s[m];
    return b.indexOf(B) > b.indexOf(k) ? p === o ? a.FOLLOWING | a.CONTAINED_BY : a.FOLLOWING : p === n ? a.PRECEDING | a.CONTAINS : a.PRECEDING;
  }
  e.compareDocumentPosition = i;
  function r(n) {
    return n = n.filter(function(o, l, s) {
      return !s.includes(o, l + 1);
    }), n.sort(function(o, l) {
      var s = i(o, l);
      return s & a.PRECEDING ? -1 : s & a.FOLLOWING ? 1 : 0;
    }), n;
  }
  e.uniqueSort = r;
})(Rr);
var eu = {};
Object.defineProperty(eu, "__esModule", { value: !0 });
eu.getFeed = void 0;
var Oi = _e, St = ye;
function Pi(e) {
  var t = Jt(ji, e);
  return t ? t.name === "feed" ? Ri(t) : Mi(t) : null;
}
eu.getFeed = Pi;
function Ri(e) {
  var t, u = e.children, a = {
    type: "atom",
    items: (0, St.getElementsByTagName)("entry", u).map(function(n) {
      var o, l = n.children, s = { media: Mr(l) };
      pe(s, "id", "id", l), pe(s, "title", "title", l);
      var c = (o = Jt("link", l)) === null || o === void 0 ? void 0 : o.attribs.href;
      c && (s.link = c);
      var g = He("summary", l) || He("content", l);
      g && (s.description = g);
      var m = He("updated", l);
      return m && (s.pubDate = new Date(m)), s;
    })
  };
  pe(a, "id", "id", u), pe(a, "title", "title", u);
  var i = (t = Jt("link", u)) === null || t === void 0 ? void 0 : t.attribs.href;
  i && (a.link = i), pe(a, "description", "subtitle", u);
  var r = He("updated", u);
  return r && (a.updated = new Date(r)), pe(a, "author", "email", u, !0), a;
}
function Mi(e) {
  var t, u, a = (u = (t = Jt("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && u !== void 0 ? u : [], i = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, St.getElementsByTagName)("item", e.children).map(function(n) {
      var o = n.children, l = { media: Mr(o) };
      pe(l, "id", "guid", o), pe(l, "title", "title", o), pe(l, "link", "link", o), pe(l, "description", "description", o);
      var s = He("pubDate", o) || He("dc:date", o);
      return s && (l.pubDate = new Date(s)), l;
    })
  };
  pe(i, "title", "title", a), pe(i, "link", "link", a), pe(i, "description", "description", a);
  var r = He("lastBuildDate", a);
  return r && (i.updated = new Date(r)), pe(i, "author", "managingEditor", a, !0), i;
}
var Ii = ["url", "type", "lang"], Vi = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Mr(e) {
  return (0, St.getElementsByTagName)("media:content", e).map(function(t) {
    for (var u = t.attribs, a = {
      medium: u.medium,
      isDefault: !!u.isDefault
    }, i = 0, r = Ii; i < r.length; i++) {
      var n = r[i];
      u[n] && (a[n] = u[n]);
    }
    for (var o = 0, l = Vi; o < l.length; o++) {
      var n = l[o];
      u[n] && (a[n] = parseInt(u[n], 10));
    }
    return u.expression && (a.expression = u.expression), a;
  });
}
function Jt(e, t) {
  return (0, St.getElementsByTagName)(e, t, !0, 1)[0];
}
function He(e, t, u) {
  return u === void 0 && (u = !1), (0, Oi.textContent)((0, St.getElementsByTagName)(e, t, u, 1)).trim();
}
function pe(e, t, u, a, i) {
  i === void 0 && (i = !1);
  var r = He(u, a, i);
  r && (e[t] = r);
}
function ji(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var t = E && E.__createBinding || (Object.create ? function(i, r, n, o) {
    o === void 0 && (o = n);
    var l = Object.getOwnPropertyDescriptor(r, n);
    (!l || ("get" in l ? !r.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return r[n];
    } }), Object.defineProperty(i, o, l);
  } : function(i, r, n, o) {
    o === void 0 && (o = n), i[o] = r[n];
  }), u = E && E.__exportStar || function(i, r) {
    for (var n in i) n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && t(r, i, n);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, u(_e, e), u(oe, e), u(me, e), u(fe, e), u(ye, e), u(Rr, e), u(eu, e);
  var a = et;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return a.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return a.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return a.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return a.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return a.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return a.hasChildren;
  } });
})(fr);
var pt = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
}, ze = {}, W;
(function(e) {
  e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator";
})(W || (W = {}));
const Hi = {
  Unknown: null,
  QuirksMode: "quirks",
  IgnoreCase: !0,
  CaseSensitive: !1
};
var Q;
(function(e) {
  e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start";
})(Q || (Q = {}));
const Yu = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Ui = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, zi = /* @__PURE__ */ new Map([
  [126, Q.Element],
  [94, Q.Start],
  [36, Q.End],
  [42, Q.Any],
  [33, Q.Not],
  [124, Q.Hyphen]
]), Gi = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function Ir(e) {
  switch (e.type) {
    case W.Adjacent:
    case W.Child:
    case W.Descendant:
    case W.Parent:
    case W.Sibling:
    case W.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const Wi = /* @__PURE__ */ new Set(["contains", "icontains"]);
function Ji(e, t, u) {
  const a = parseInt(t, 16) - 65536;
  return a !== a || u ? t : a < 0 ? (
    // BMP codepoint
    String.fromCharCode(a + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
  );
}
function vt(e) {
  return e.replace(Ui, Ji);
}
function fu(e) {
  return e === 39 || e === 34;
}
function Qu(e) {
  return e === 32 || e === 9 || e === 10 || e === 12 || e === 13;
}
function Xi(e) {
  const t = [], u = Vr(t, `${e}`, 0);
  if (u < e.length)
    throw new Error(`Unmatched selector: ${e.slice(u)}`);
  return t;
}
function Vr(e, t, u) {
  let a = [];
  function i(m) {
    const p = t.slice(u + m).match(Yu);
    if (!p)
      throw new Error(`Expected name, found ${t.slice(u)}`);
    const [b] = p;
    return u += m + b.length, vt(b);
  }
  function r(m) {
    for (u += m; u < t.length && Qu(t.charCodeAt(u)); )
      u++;
  }
  function n() {
    u += 1;
    const m = u;
    let p = 1;
    for (; p > 0 && u < t.length; u++)
      t.charCodeAt(u) === 40 && !o(u) ? p++ : t.charCodeAt(u) === 41 && !o(u) && p--;
    if (p)
      throw new Error("Parenthesis not matched");
    return vt(t.slice(m, u - 1));
  }
  function o(m) {
    let p = 0;
    for (; t.charCodeAt(--m) === 92; )
      p++;
    return (p & 1) === 1;
  }
  function l() {
    if (a.length > 0 && Ir(a[a.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function s(m) {
    if (a.length > 0 && a[a.length - 1].type === W.Descendant) {
      a[a.length - 1].type = m;
      return;
    }
    l(), a.push({ type: m });
  }
  function c(m, p) {
    a.push({
      type: W.Attribute,
      name: m,
      action: p,
      value: i(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function g() {
    if (a.length && a[a.length - 1].type === W.Descendant && a.pop(), a.length === 0)
      throw new Error("Empty sub-selector");
    e.push(a);
  }
  if (r(0), t.length === u)
    return u;
  e: for (; u < t.length; ) {
    const m = t.charCodeAt(u);
    switch (m) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (a.length === 0 || a[0].type !== W.Descendant) && (l(), a.push({ type: W.Descendant })), r(1);
        break;
      }
      case 62: {
        s(W.Child), r(1);
        break;
      }
      case 60: {
        s(W.Parent), r(1);
        break;
      }
      case 126: {
        s(W.Sibling), r(1);
        break;
      }
      case 43: {
        s(W.Adjacent), r(1);
        break;
      }
      case 46: {
        c("class", Q.Element);
        break;
      }
      case 35: {
        c("id", Q.Equals);
        break;
      }
      case 91: {
        r(1);
        let p, b = null;
        t.charCodeAt(u) === 124 ? p = i(1) : t.startsWith("*|", u) ? (b = "*", p = i(2)) : (p = i(0), t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 61 && (b = p, p = i(1))), r(0);
        let B = Q.Exists;
        const k = zi.get(t.charCodeAt(u));
        if (k) {
          if (B = k, t.charCodeAt(u + 1) !== 61)
            throw new Error("Expected `=`");
          r(2);
        } else t.charCodeAt(u) === 61 && (B = Q.Equals, r(1));
        let D = "", y = null;
        if (B !== "exists") {
          if (fu(t.charCodeAt(u))) {
            const M = t.charCodeAt(u);
            let V = u + 1;
            for (; V < t.length && (t.charCodeAt(V) !== M || o(V)); )
              V += 1;
            if (t.charCodeAt(V) !== M)
              throw new Error("Attribute value didn't end");
            D = vt(t.slice(u + 1, V)), u = V + 1;
          } else {
            const M = u;
            for (; u < t.length && (!Qu(t.charCodeAt(u)) && t.charCodeAt(u) !== 93 || o(u)); )
              u += 1;
            D = vt(t.slice(M, u));
          }
          r(0);
          const O = t.charCodeAt(u) | 32;
          O === 115 ? (y = !1, r(1)) : O === 105 && (y = !0, r(1));
        }
        if (t.charCodeAt(u) !== 93)
          throw new Error("Attribute selector didn't terminate");
        u += 1;
        const F = {
          type: W.Attribute,
          name: p,
          action: B,
          value: D,
          namespace: b,
          ignoreCase: y
        };
        a.push(F);
        break;
      }
      case 58: {
        if (t.charCodeAt(u + 1) === 58) {
          a.push({
            type: W.PseudoElement,
            name: i(2).toLowerCase(),
            data: t.charCodeAt(u) === 40 ? n() : null
          });
          continue;
        }
        const p = i(1).toLowerCase();
        let b = null;
        if (t.charCodeAt(u) === 40)
          if (Gi.has(p)) {
            if (fu(t.charCodeAt(u + 1)))
              throw new Error(`Pseudo-selector ${p} cannot be quoted`);
            if (b = [], u = Vr(b, t, u + 1), t.charCodeAt(u) !== 41)
              throw new Error(`Missing closing parenthesis in :${p} (${t})`);
            u += 1;
          } else {
            if (b = n(), Wi.has(p)) {
              const B = b.charCodeAt(0);
              B === b.charCodeAt(b.length - 1) && fu(B) && (b = b.slice(1, -1));
            }
            b = vt(b);
          }
        a.push({ type: W.Pseudo, name: p, data: b });
        break;
      }
      case 44: {
        g(), a = [], r(1);
        break;
      }
      default: {
        if (t.startsWith("/*", u)) {
          const B = t.indexOf("*/", u + 2);
          if (B < 0)
            throw new Error("Comment was not terminated");
          u = B + 2, a.length === 0 && r(0);
          break;
        }
        let p = null, b;
        if (m === 42)
          u += 1, b = "*";
        else if (m === 124) {
          if (b = "", t.charCodeAt(u + 1) === 124) {
            s(W.ColumnCombinator), r(2);
            break;
          }
        } else if (Yu.test(t.slice(u)))
          b = i(0);
        else
          break e;
        t.charCodeAt(u) === 124 && t.charCodeAt(u + 1) !== 124 && (p = b, t.charCodeAt(u + 1) === 42 ? (b = "*", u += 2) : b = i(1)), a.push(b === "*" ? { type: W.Universal, namespace: p } : { type: W.Tag, name: b, namespace: p });
      }
    }
  }
  return g(), u;
}
const jr = ["\\", '"'], Hr = [...jr, "(", ")"], Zi = new Set(jr.map((e) => e.charCodeAt(0))), er = new Set(Hr.map((e) => e.charCodeAt(0))), at = new Set([
  ...Hr,
  "~",
  "^",
  "$",
  "*",
  "+",
  "!",
  "|",
  ":",
  "[",
  "]",
  " ",
  "."
].map((e) => e.charCodeAt(0)));
function Ur(e) {
  return e.map((t) => t.map(Ki).join("")).join(", ");
}
function Ki(e, t, u) {
  switch (e.type) {
    case W.Child:
      return t === 0 ? "> " : " > ";
    case W.Parent:
      return t === 0 ? "< " : " < ";
    case W.Sibling:
      return t === 0 ? "~ " : " ~ ";
    case W.Adjacent:
      return t === 0 ? "+ " : " + ";
    case W.Descendant:
      return " ";
    case W.ColumnCombinator:
      return t === 0 ? "|| " : " || ";
    case W.Universal:
      return e.namespace === "*" && t + 1 < u.length && "name" in u[t + 1] ? "" : `${zr(e.namespace)}*`;
    case W.Tag:
      return tr(e);
    case W.PseudoElement:
      return `::${Me(e.name, at)}${e.data === null ? "" : `(${Me(e.data, er)})`}`;
    case W.Pseudo:
      return `:${Me(e.name, at)}${e.data === null ? "" : `(${typeof e.data == "string" ? Me(e.data, er) : Ur(e.data)})`}`;
    case W.Attribute: {
      if (e.name === "id" && e.action === Q.Equals && e.ignoreCase === "quirks" && !e.namespace)
        return `#${Me(e.value, at)}`;
      if (e.name === "class" && e.action === Q.Element && e.ignoreCase === "quirks" && !e.namespace)
        return `.${Me(e.value, at)}`;
      const a = tr(e);
      return e.action === Q.Exists ? `[${a}]` : `[${a}${$i(e.action)}="${Me(e.value, Zi)}"${e.ignoreCase === null ? "" : e.ignoreCase ? " i" : " s"}]`;
    }
  }
}
function $i(e) {
  switch (e) {
    case Q.Equals:
      return "";
    case Q.Element:
      return "~";
    case Q.Start:
      return "^";
    case Q.End:
      return "$";
    case Q.Any:
      return "*";
    case Q.Not:
      return "!";
    case Q.Hyphen:
      return "|";
    case Q.Exists:
      throw new Error("Shouldn't be here");
  }
}
function tr(e) {
  return `${zr(e.namespace)}${Me(e.name, at)}`;
}
function zr(e) {
  return e !== null ? `${e === "*" ? "*" : Me(e, at)}|` : "";
}
function Me(e, t) {
  let u = 0, a = "";
  for (let i = 0; i < e.length; i++)
    t.has(e.charCodeAt(i)) && (a += `${e.slice(u, i)}\\${e.charAt(i)}`, u = i + 1);
  return a.length > 0 ? a + e.slice(u) : e;
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AttributeAction() {
    return Q;
  },
  IgnoreCaseMode: Hi,
  get SelectorType() {
    return W;
  },
  isTraversal: Ir,
  parse: Xi,
  stringify: Ur
}, Symbol.toStringTag, { value: "Module" })), tu = /* @__PURE__ */ Ia(Yi);
var mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.isTraversal = void 0;
var ve = tu, Gr = /* @__PURE__ */ new Map([
  [ve.SelectorType.Universal, 50],
  [ve.SelectorType.Tag, 30],
  [ve.SelectorType.Attribute, 1],
  [ve.SelectorType.Pseudo, 0]
]);
function Qi(e) {
  return !Gr.has(e.type);
}
mt.isTraversal = Qi;
var en = /* @__PURE__ */ new Map([
  [ve.AttributeAction.Exists, 10],
  [ve.AttributeAction.Equals, 8],
  [ve.AttributeAction.Not, 7],
  [ve.AttributeAction.Start, 6],
  [ve.AttributeAction.End, 6],
  [ve.AttributeAction.Any, 5]
]);
function tn(e) {
  for (var t = e.map(Wr), u = 1; u < e.length; u++) {
    var a = t[u];
    if (!(a < 0))
      for (var i = u - 1; i >= 0 && a < t[i]; i--) {
        var r = e[i + 1];
        e[i + 1] = e[i], e[i] = r, t[i + 1] = t[i], t[i] = a;
      }
  }
}
mt.default = tn;
function Wr(e) {
  var t, u, a = (t = Gr.get(e.type)) !== null && t !== void 0 ? t : -1;
  return e.type === ve.SelectorType.Attribute ? (a = (u = en.get(e.action)) !== null && u !== void 0 ? u : 4, e.action === ve.AttributeAction.Equals && e.name === "id" && (a = 9), e.ignoreCase && (a >>= 1)) : e.type === ve.SelectorType.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? a = 0 : Array.isArray(e.data) ? (a = Math.min.apply(Math, e.data.map(function(i) {
    return Math.min.apply(Math, i.map(Wr));
  })), a < 0 && (a = 0)) : a = 2 : a = 3), a;
}
var uu = {}, ru = {}, un = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ru, "__esModule", { value: !0 });
ru.attributeRules = void 0;
var Ot = un(pt), rn = /[-[\]{}()*+?.,\\^$|#\s]/g;
function ur(e) {
  return e.replace(rn, "\\$&");
}
var an = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function Xe(e, t) {
  return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && an.has(e.name);
}
ru.attributeRules = {
  equals: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value;
    return Xe(t, u) ? (r = r.toLowerCase(), function(n) {
      var o = a.getAttributeValue(n, i);
      return o != null && o.length === r.length && o.toLowerCase() === r && e(n);
    }) : function(n) {
      return a.getAttributeValue(n, i) === r && e(n);
    };
  },
  hyphen: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value, n = r.length;
    return Xe(t, u) ? (r = r.toLowerCase(), function(l) {
      var s = a.getAttributeValue(l, i);
      return s != null && (s.length === n || s.charAt(n) === "-") && s.substr(0, n).toLowerCase() === r && e(l);
    }) : function(l) {
      var s = a.getAttributeValue(l, i);
      return s != null && (s.length === n || s.charAt(n) === "-") && s.substr(0, n) === r && e(l);
    };
  },
  element: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value;
    if (/\s/.test(r))
      return Ot.default.falseFunc;
    var n = new RegExp("(?:^|\\s)".concat(ur(r), "(?:$|\\s)"), Xe(t, u) ? "i" : "");
    return function(l) {
      var s = a.getAttributeValue(l, i);
      return s != null && s.length >= r.length && n.test(s) && e(l);
    };
  },
  exists: function(e, t, u) {
    var a = t.name, i = u.adapter;
    return function(r) {
      return i.hasAttrib(r, a) && e(r);
    };
  },
  start: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value, n = r.length;
    return n === 0 ? Ot.default.falseFunc : Xe(t, u) ? (r = r.toLowerCase(), function(o) {
      var l = a.getAttributeValue(o, i);
      return l != null && l.length >= n && l.substr(0, n).toLowerCase() === r && e(o);
    }) : function(o) {
      var l;
      return !!(!((l = a.getAttributeValue(o, i)) === null || l === void 0) && l.startsWith(r)) && e(o);
    };
  },
  end: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value, n = -r.length;
    return n === 0 ? Ot.default.falseFunc : Xe(t, u) ? (r = r.toLowerCase(), function(o) {
      var l;
      return ((l = a.getAttributeValue(o, i)) === null || l === void 0 ? void 0 : l.substr(n).toLowerCase()) === r && e(o);
    }) : function(o) {
      var l;
      return !!(!((l = a.getAttributeValue(o, i)) === null || l === void 0) && l.endsWith(r)) && e(o);
    };
  },
  any: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value;
    if (r === "")
      return Ot.default.falseFunc;
    if (Xe(t, u)) {
      var n = new RegExp(ur(r), "i");
      return function(l) {
        var s = a.getAttributeValue(l, i);
        return s != null && s.length >= r.length && n.test(s) && e(l);
      };
    }
    return function(o) {
      var l;
      return !!(!((l = a.getAttributeValue(o, i)) === null || l === void 0) && l.includes(r)) && e(o);
    };
  },
  not: function(e, t, u) {
    var a = u.adapter, i = t.name, r = t.value;
    return r === "" ? function(n) {
      return !!a.getAttributeValue(n, i) && e(n);
    } : Xe(t, u) ? (r = r.toLowerCase(), function(n) {
      var o = a.getAttributeValue(n, i);
      return (o == null || o.length !== r.length || o.toLowerCase() !== r) && e(n);
    }) : function(n) {
      return a.getAttributeValue(n, i) !== r && e(n);
    };
  }
};
var Ou = {}, Jr = {}, Xr = {}, au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
au.parse = void 0;
var nn = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), rr = 48, sn = 57;
function on(e) {
  if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0];
  if (e === "odd")
    return [2, 1];
  var t = 0, u = 0, a = r(), i = n();
  if (t < e.length && e.charAt(t) === "n" && (t++, u = a * (i ?? 1), o(), t < e.length ? (a = r(), o(), i = n()) : a = i = 0), i === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')"));
  return [u, a * i];
  function r() {
    return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1);
  }
  function n() {
    for (var l = t, s = 0; t < e.length && e.charCodeAt(t) >= rr && e.charCodeAt(t) <= sn; )
      s = s * 10 + (e.charCodeAt(t) - rr), t++;
    return t === l ? null : s;
  }
  function o() {
    for (; t < e.length && nn.has(e.charCodeAt(t)); )
      t++;
  }
}
au.parse = on;
var dt = {}, ln = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.generate = dt.compile = void 0;
var ar = ln(pt);
function cn(e) {
  var t = e[0], u = e[1] - 1;
  if (u < 0 && t <= 0)
    return ar.default.falseFunc;
  if (t === -1)
    return function(r) {
      return r <= u;
    };
  if (t === 0)
    return function(r) {
      return r === u;
    };
  if (t === 1)
    return u < 0 ? ar.default.trueFunc : function(r) {
      return r >= u;
    };
  var a = Math.abs(t), i = (u % a + a) % a;
  return t > 1 ? function(r) {
    return r >= u && r % a === i;
  } : function(r) {
    return r <= u && r % a === i;
  };
}
dt.compile = cn;
function dn(e) {
  var t = e[0], u = e[1] - 1, a = 0;
  if (t < 0) {
    var i = -t, r = (u % i + i) % i;
    return function() {
      var n = r + i * a++;
      return n > u ? null : n;
    };
  }
  return t === 0 ? u < 0 ? (
    // There are no result — always return `null`
    function() {
      return null;
    }
  ) : (
    // Return `b` exactly once
    function() {
      return a++ === 0 ? u : null;
    }
  ) : (u < 0 && (u += t * Math.ceil(-u / t)), function() {
    return t * a++ + u;
  });
}
dt.generate = dn;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sequence = e.generate = e.compile = e.parse = void 0;
  var t = au;
  Object.defineProperty(e, "parse", { enumerable: !0, get: function() {
    return t.parse;
  } });
  var u = dt;
  Object.defineProperty(e, "compile", { enumerable: !0, get: function() {
    return u.compile;
  } }), Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
    return u.generate;
  } });
  function a(r) {
    return (0, u.compile)((0, t.parse)(r));
  }
  e.default = a;
  function i(r) {
    return (0, u.generate)((0, t.parse)(r));
  }
  e.sequence = i;
})(Xr);
(function(e) {
  var t = E && E.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.filters = void 0;
  var u = t(Xr), a = t(pt);
  function i(n, o) {
    return function(l) {
      var s = o.getParent(l);
      return s != null && o.isTag(s) && n(l);
    };
  }
  e.filters = {
    contains: function(n, o, l) {
      var s = l.adapter;
      return function(g) {
        return n(g) && s.getText(g).includes(o);
      };
    },
    icontains: function(n, o, l) {
      var s = l.adapter, c = o.toLowerCase();
      return function(m) {
        return n(m) && s.getText(m).toLowerCase().includes(c);
      };
    },
    // Location specific methods
    "nth-child": function(n, o, l) {
      var s = l.adapter, c = l.equals, g = (0, u.default)(o);
      return g === a.default.falseFunc ? a.default.falseFunc : g === a.default.trueFunc ? i(n, s) : function(p) {
        for (var b = s.getSiblings(p), B = 0, k = 0; k < b.length && !c(p, b[k]); k++)
          s.isTag(b[k]) && B++;
        return g(B) && n(p);
      };
    },
    "nth-last-child": function(n, o, l) {
      var s = l.adapter, c = l.equals, g = (0, u.default)(o);
      return g === a.default.falseFunc ? a.default.falseFunc : g === a.default.trueFunc ? i(n, s) : function(p) {
        for (var b = s.getSiblings(p), B = 0, k = b.length - 1; k >= 0 && !c(p, b[k]); k--)
          s.isTag(b[k]) && B++;
        return g(B) && n(p);
      };
    },
    "nth-of-type": function(n, o, l) {
      var s = l.adapter, c = l.equals, g = (0, u.default)(o);
      return g === a.default.falseFunc ? a.default.falseFunc : g === a.default.trueFunc ? i(n, s) : function(p) {
        for (var b = s.getSiblings(p), B = 0, k = 0; k < b.length; k++) {
          var D = b[k];
          if (c(p, D))
            break;
          s.isTag(D) && s.getName(D) === s.getName(p) && B++;
        }
        return g(B) && n(p);
      };
    },
    "nth-last-of-type": function(n, o, l) {
      var s = l.adapter, c = l.equals, g = (0, u.default)(o);
      return g === a.default.falseFunc ? a.default.falseFunc : g === a.default.trueFunc ? i(n, s) : function(p) {
        for (var b = s.getSiblings(p), B = 0, k = b.length - 1; k >= 0; k--) {
          var D = b[k];
          if (c(p, D))
            break;
          s.isTag(D) && s.getName(D) === s.getName(p) && B++;
        }
        return g(B) && n(p);
      };
    },
    // TODO determine the actual root element
    root: function(n, o, l) {
      var s = l.adapter;
      return function(c) {
        var g = s.getParent(c);
        return (g == null || !s.isTag(g)) && n(c);
      };
    },
    scope: function(n, o, l, s) {
      var c = l.equals;
      return !s || s.length === 0 ? e.filters.root(n, o, l) : s.length === 1 ? function(g) {
        return c(s[0], g) && n(g);
      } : function(g) {
        return s.includes(g) && n(g);
      };
    },
    hover: r("isHovered"),
    visited: r("isVisited"),
    active: r("isActive")
  };
  function r(n) {
    return function(l, s, c) {
      var g = c.adapter, m = g[n];
      return typeof m != "function" ? a.default.falseFunc : function(b) {
        return m(b) && l(b);
      };
    };
  }
})(Jr);
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.verifyPseudoArgs = ft.pseudos = void 0;
ft.pseudos = {
  empty: function(e, t) {
    var u = t.adapter;
    return !u.getChildren(e).some(function(a) {
      return u.isTag(a) || u.getText(a) !== "";
    });
  },
  "first-child": function(e, t) {
    var u = t.adapter, a = t.equals;
    if (u.prevElementSibling)
      return u.prevElementSibling(e) == null;
    var i = u.getSiblings(e).find(function(r) {
      return u.isTag(r);
    });
    return i != null && a(e, i);
  },
  "last-child": function(e, t) {
    for (var u = t.adapter, a = t.equals, i = u.getSiblings(e), r = i.length - 1; r >= 0; r--) {
      if (a(e, i[r]))
        return !0;
      if (u.isTag(i[r]))
        break;
    }
    return !1;
  },
  "first-of-type": function(e, t) {
    for (var u = t.adapter, a = t.equals, i = u.getSiblings(e), r = u.getName(e), n = 0; n < i.length; n++) {
      var o = i[n];
      if (a(e, o))
        return !0;
      if (u.isTag(o) && u.getName(o) === r)
        break;
    }
    return !1;
  },
  "last-of-type": function(e, t) {
    for (var u = t.adapter, a = t.equals, i = u.getSiblings(e), r = u.getName(e), n = i.length - 1; n >= 0; n--) {
      var o = i[n];
      if (a(e, o))
        return !0;
      if (u.isTag(o) && u.getName(o) === r)
        break;
    }
    return !1;
  },
  "only-of-type": function(e, t) {
    var u = t.adapter, a = t.equals, i = u.getName(e);
    return u.getSiblings(e).every(function(r) {
      return a(e, r) || !u.isTag(r) || u.getName(r) !== i;
    });
  },
  "only-child": function(e, t) {
    var u = t.adapter, a = t.equals;
    return u.getSiblings(e).every(function(i) {
      return a(e, i) || !u.isTag(i);
    });
  }
};
function fn(e, t, u, a) {
  if (u === null) {
    if (e.length > a)
      throw new Error("Pseudo-class :".concat(t, " requires an argument"));
  } else if (e.length === a)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments"));
}
ft.verifyPseudoArgs = fn;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.aliases = void 0;
iu.aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};
var nu = {};
(function(e) {
  var t = E && E.__spreadArray || function(s, c, g) {
    if (g || arguments.length === 2) for (var m = 0, p = c.length, b; m < p; m++)
      (b || !(m in c)) && (b || (b = Array.prototype.slice.call(c, 0, m)), b[m] = c[m]);
    return s.concat(b || Array.prototype.slice.call(c));
  }, u = E && E.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.subselects = e.getNextSiblings = e.ensureIsTag = e.PLACEHOLDER_ELEMENT = void 0;
  var a = u(pt), i = mt;
  e.PLACEHOLDER_ELEMENT = {};
  function r(s, c) {
    return s === a.default.falseFunc ? a.default.falseFunc : function(g) {
      return c.isTag(g) && s(g);
    };
  }
  e.ensureIsTag = r;
  function n(s, c) {
    var g = c.getSiblings(s);
    if (g.length <= 1)
      return [];
    var m = g.indexOf(s);
    return m < 0 || m === g.length - 1 ? [] : g.slice(m + 1).filter(c.isTag);
  }
  e.getNextSiblings = n;
  function o(s) {
    return {
      xmlMode: !!s.xmlMode,
      lowerCaseAttributeNames: !!s.lowerCaseAttributeNames,
      lowerCaseTags: !!s.lowerCaseTags,
      quirksMode: !!s.quirksMode,
      cacheResults: !!s.cacheResults,
      pseudos: s.pseudos,
      adapter: s.adapter,
      equals: s.equals
    };
  }
  var l = function(s, c, g, m, p) {
    var b = p(c, o(g), m);
    return b === a.default.trueFunc ? s : b === a.default.falseFunc ? a.default.falseFunc : function(B) {
      return b(B) && s(B);
    };
  };
  e.subselects = {
    is: l,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: l,
    where: l,
    not: function(s, c, g, m, p) {
      var b = p(c, o(g), m);
      return b === a.default.falseFunc ? s : b === a.default.trueFunc ? a.default.falseFunc : function(B) {
        return !b(B) && s(B);
      };
    },
    has: function(s, c, g, m, p) {
      var b = g.adapter, B = o(g);
      B.relativeSelector = !0;
      var k = c.some(function(M) {
        return M.some(i.isTraversal);
      }) ? (
        // Used as a placeholder. Will be replaced with the actual element.
        [e.PLACEHOLDER_ELEMENT]
      ) : void 0, D = p(c, B, k);
      if (D === a.default.falseFunc)
        return a.default.falseFunc;
      var y = r(D, b);
      if (k && D !== a.default.trueFunc) {
        var F = D.shouldTestNextSiblings, O = F === void 0 ? !1 : F;
        return function(M) {
          if (!s(M))
            return !1;
          k[0] = M;
          var V = b.getChildren(M), J = O ? t(t([], V, !0), n(M, b), !0) : V;
          return b.existsOne(y, J);
        };
      }
      return function(M) {
        return s(M) && b.existsOne(y, b.getChildren(M));
      };
    }
  };
})(nu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.compilePseudoSelector = e.aliases = e.pseudos = e.filters = void 0;
  var t = tu, u = Jr;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return u.filters;
  } });
  var a = ft;
  Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return a.pseudos;
  } });
  var i = iu;
  Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return i.aliases;
  } });
  var r = nu;
  function n(o, l, s, c, g) {
    var m, p = l.name, b = l.data;
    if (Array.isArray(b)) {
      if (!(p in r.subselects))
        throw new Error("Unknown pseudo-class :".concat(p, "(").concat(b, ")"));
      return r.subselects[p](o, b, s, c, g);
    }
    var B = (m = s.pseudos) === null || m === void 0 ? void 0 : m[p], k = typeof B == "string" ? B : i.aliases[p];
    if (typeof k == "string") {
      if (b != null)
        throw new Error("Pseudo ".concat(p, " doesn't have any arguments"));
      var D = (0, t.parse)(k);
      return r.subselects.is(o, D, s, c, g);
    }
    if (typeof B == "function")
      return (0, a.verifyPseudoArgs)(B, p, b, 1), function(F) {
        return B(F, b) && o(F);
      };
    if (p in u.filters)
      return u.filters[p](o, b, s, c);
    if (p in a.pseudos) {
      var y = a.pseudos[p];
      return (0, a.verifyPseudoArgs)(y, p, b, 2), function(F) {
        return y(F, s, b) && o(F);
      };
    }
    throw new Error("Unknown pseudo-class :".concat(p));
  }
  e.compilePseudoSelector = n;
})(Ou);
Object.defineProperty(uu, "__esModule", { value: !0 });
uu.compileGeneralSelector = void 0;
var hn = ru, gn = Ou, Ae = tu;
function hu(e, t) {
  var u = t.getParent(e);
  return u && t.isTag(u) ? u : null;
}
function pn(e, t, u, a, i) {
  var r = u.adapter, n = u.equals;
  switch (t.type) {
    case Ae.SelectorType.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case Ae.SelectorType.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case Ae.SelectorType.Attribute: {
      if (t.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!u.xmlMode || u.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), hn.attributeRules[t.action](e, t, u);
    }
    case Ae.SelectorType.Pseudo:
      return (0, gn.compilePseudoSelector)(e, t, u, a, i);
    case Ae.SelectorType.Tag: {
      if (t.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      var o = t.name;
      return (!u.xmlMode || u.lowerCaseTags) && (o = o.toLowerCase()), function(c) {
        return r.getName(c) === o && e(c);
      };
    }
    case Ae.SelectorType.Descendant: {
      if (u.cacheResults === !1 || typeof WeakSet > "u")
        return function(c) {
          for (var g = c; g = hu(g, r); )
            if (e(g))
              return !0;
          return !1;
        };
      var l = /* @__PURE__ */ new WeakSet();
      return function(c) {
        for (var g = c; g = hu(g, r); )
          if (!l.has(g)) {
            if (r.isTag(g) && e(g))
              return !0;
            l.add(g);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(c) {
        var g = c;
        do
          if (e(g))
            return !0;
        while (g = hu(g, r));
        return !1;
      };
    case Ae.SelectorType.Parent:
      return function(c) {
        return r.getChildren(c).some(function(g) {
          return r.isTag(g) && e(g);
        });
      };
    case Ae.SelectorType.Child:
      return function(c) {
        var g = r.getParent(c);
        return g != null && r.isTag(g) && e(g);
      };
    case Ae.SelectorType.Sibling:
      return function(c) {
        for (var g = r.getSiblings(c), m = 0; m < g.length; m++) {
          var p = g[m];
          if (n(c, p))
            break;
          if (r.isTag(p) && e(p))
            return !0;
        }
        return !1;
      };
    case Ae.SelectorType.Adjacent:
      return r.prevElementSibling ? function(c) {
        var g = r.prevElementSibling(c);
        return g != null && e(g);
      } : function(c) {
        for (var g = r.getSiblings(c), m, p = 0; p < g.length; p++) {
          var b = g[p];
          if (n(c, b))
            break;
          r.isTag(b) && (m = b);
        }
        return !!m && e(m);
      };
    case Ae.SelectorType.Universal: {
      if (t.namespace != null && t.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return e;
    }
  }
}
uu.compileGeneralSelector = pn;
var mn = E && E.__createBinding || (Object.create ? function(e, t, u, a) {
  a === void 0 && (a = u);
  var i = Object.getOwnPropertyDescriptor(t, u);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[u];
  } }), Object.defineProperty(e, a, i);
} : function(e, t, u, a) {
  a === void 0 && (a = u), e[a] = t[u];
}), bn = E && E.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), vn = E && E.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var u in e) u !== "default" && Object.prototype.hasOwnProperty.call(e, u) && mn(t, e, u);
  return bn(t, e), t;
}, _n = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.compileToken = ze.compileUnsafe = ze.compile = void 0;
var Ie = tu, Ue = _n(pt), Au = vn(mt), yn = uu, Zr = nu;
function Dn(e, t, u) {
  var a = Kr(e, t, u);
  return (0, Zr.ensureIsTag)(a, t.adapter);
}
ze.compile = Dn;
function Kr(e, t, u) {
  var a = typeof e == "string" ? (0, Ie.parse)(e) : e;
  return Pu(a, t, u);
}
ze.compileUnsafe = Kr;
function $r(e) {
  return e.type === Ie.SelectorType.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function(t) {
    return t.some($r);
  }));
}
var xn = { type: Ie.SelectorType.Descendant }, An = {
  type: "_flexibleDescendant"
}, Cn = {
  type: Ie.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function wn(e, t, u) {
  for (var a = t.adapter, i = !!(u != null && u.every(function(l) {
    var s = a.isTag(l) && a.getParent(l);
    return l === Zr.PLACEHOLDER_ELEMENT || s && a.isTag(s);
  })), r = 0, n = e; r < n.length; r++) {
    var o = n[r];
    if (!(o.length > 0 && (0, Au.isTraversal)(o[0]) && o[0].type !== Ie.SelectorType.Descendant)) if (i && !o.some($r))
      o.unshift(xn);
    else
      continue;
    o.unshift(Cn);
  }
}
function Pu(e, t, u) {
  var a;
  e.forEach(Au.default), u = (a = t.context) !== null && a !== void 0 ? a : u;
  var i = Array.isArray(u), r = u && (Array.isArray(u) ? u : [u]);
  if (t.relativeSelector !== !1)
    wn(e, t, r);
  else if (e.some(function(l) {
    return l.length > 0 && (0, Au.isTraversal)(l[0]);
  }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  var n = !1, o = e.map(function(l) {
    if (l.length >= 2) {
      var s = l[0], c = l[1];
      s.type !== Ie.SelectorType.Pseudo || s.name !== "scope" || (i && c.type === Ie.SelectorType.Descendant ? l[1] = An : (c.type === Ie.SelectorType.Adjacent || c.type === Ie.SelectorType.Sibling) && (n = !0));
    }
    return En(l, t, r);
  }).reduce(Sn, Ue.default.falseFunc);
  return o.shouldTestNextSiblings = n, o;
}
ze.compileToken = Pu;
function En(e, t, u) {
  var a;
  return e.reduce(function(i, r) {
    return i === Ue.default.falseFunc ? Ue.default.falseFunc : (0, yn.compileGeneralSelector)(i, r, t, u, Pu);
  }, (a = t.rootFunc) !== null && a !== void 0 ? a : Ue.default.trueFunc);
}
function Sn(e, t) {
  return t === Ue.default.falseFunc || e === Ue.default.trueFunc ? e : e === Ue.default.falseFunc || t === Ue.default.trueFunc ? t : function(a) {
    return e(a) || t(a);
  };
}
(function(e) {
  var t = E && E.__createBinding || (Object.create ? function(y, F, O, M) {
    M === void 0 && (M = O);
    var V = Object.getOwnPropertyDescriptor(F, O);
    (!V || ("get" in V ? !F.__esModule : V.writable || V.configurable)) && (V = { enumerable: !0, get: function() {
      return F[O];
    } }), Object.defineProperty(y, M, V);
  } : function(y, F, O, M) {
    M === void 0 && (M = O), y[M] = F[O];
  }), u = E && E.__setModuleDefault || (Object.create ? function(y, F) {
    Object.defineProperty(y, "default", { enumerable: !0, value: F });
  } : function(y, F) {
    y.default = F;
  }), a = E && E.__importStar || function(y) {
    if (y && y.__esModule) return y;
    var F = {};
    if (y != null) for (var O in y) O !== "default" && Object.prototype.hasOwnProperty.call(y, O) && t(F, y, O);
    return u(F, y), F;
  }, i = E && E.__importDefault || function(y) {
    return y && y.__esModule ? y : { default: y };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.aliases = e.pseudos = e.filters = e.is = e.selectOne = e.selectAll = e.prepareContext = e._compileToken = e._compileUnsafe = e.compile = void 0;
  var r = a(fr), n = i(pt), o = ze, l = nu, s = function(y, F) {
    return y === F;
  }, c = {
    adapter: r,
    equals: s
  };
  function g(y) {
    var F, O, M, V, J = y ?? c;
    return (F = J.adapter) !== null && F !== void 0 || (J.adapter = r), (O = J.equals) !== null && O !== void 0 || (J.equals = (V = (M = J.adapter) === null || M === void 0 ? void 0 : M.equals) !== null && V !== void 0 ? V : s), J;
  }
  function m(y) {
    return function(O, M, V) {
      var J = g(M);
      return y(O, J, V);
    };
  }
  e.compile = m(o.compile), e._compileUnsafe = m(o.compileUnsafe), e._compileToken = m(o.compileToken);
  function p(y) {
    return function(O, M, V) {
      var J = g(V);
      typeof O != "function" && (O = (0, o.compileUnsafe)(O, J, M));
      var Z = b(M, J.adapter, O.shouldTestNextSiblings);
      return y(O, Z, J);
    };
  }
  function b(y, F, O) {
    return O === void 0 && (O = !1), O && (y = B(y, F)), Array.isArray(y) ? F.removeSubsets(y) : F.getChildren(y);
  }
  e.prepareContext = b;
  function B(y, F) {
    for (var O = Array.isArray(y) ? y.slice(0) : [y], M = O.length, V = 0; V < M; V++) {
      var J = (0, l.getNextSiblings)(O[V], F);
      O.push.apply(O, J);
    }
    return O;
  }
  e.selectAll = p(function(y, F, O) {
    return y === n.default.falseFunc || !F || F.length === 0 ? [] : O.adapter.findAll(y, F);
  }), e.selectOne = p(function(y, F, O) {
    return y === n.default.falseFunc || !F || F.length === 0 ? null : O.adapter.findOne(y, F);
  });
  function k(y, F, O) {
    var M = g(O);
    return (typeof F == "function" ? F : (0, o.compile)(F, M))(y);
  }
  e.is = k, e.default = e.selectAll;
  var D = Ou;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return D.filters;
  } }), Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return D.pseudos;
  } }), Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return D.aliases;
  } });
})(dr);
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
function Ln(e) {
  return e[e.length - 1];
}
Ru.default = Ln;
var Mu = {}, kn = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Mu, "__esModule", { value: !0 });
var Tn = kn(Qe);
function su(e) {
  return e && e.nodeType === Tn.default.ELEMENT_NODE;
}
function Yr(e, t) {
  return su(e) ? e.getAttribute(t) : void 0;
}
function Bn(e) {
  return (e && e.rawTagName || "").toLowerCase();
}
function Lt(e) {
  return e && e.childNodes;
}
function Iu(e) {
  return e ? e.parentNode : null;
}
function Fn(e) {
  return e.text;
}
function Nn(e) {
  for (var t = e.length, u, a, i; --t > -1; ) {
    for (u = a = e[t], e[t] = null, i = !0; a; ) {
      if (e.indexOf(a) > -1) {
        i = !1, e.splice(t, 1);
        break;
      }
      a = Iu(a);
    }
    i && (e[t] = u);
  }
  return e;
}
function Qr(e, t) {
  return t.some(function(u) {
    return su(u) ? e(u) || Qr(e, Lt(u)) : !1;
  });
}
function qn(e) {
  var t = Iu(e);
  return t ? Lt(t) : [];
}
function On(e, t) {
  return Yr(e, t) !== void 0;
}
function ea(e, t) {
  for (var u = null, a = 0, i = t == null ? void 0 : t.length; a < i && !u; a++) {
    var r = t[a];
    if (e(r))
      u = r;
    else {
      var n = Lt(r);
      n && n.length > 0 && (u = ea(e, n));
    }
  }
  return u;
}
function ta(e, t) {
  for (var u = [], a = 0, i = t.length; a < i; a++)
    if (su(t[a])) {
      e(t[a]) && u.push(t[a]);
      var r = Lt(t[a]);
      r && (u = u.concat(ta(e, r)));
    }
  return u;
}
Mu.default = {
  isTag: su,
  getAttributeValue: Yr,
  getName: Bn,
  getChildren: Lt,
  getParent: Iu,
  getText: Fn,
  removeSubsets: Nn,
  existsOne: Qr,
  getSiblings: qn,
  hasAttrib: On,
  findOne: ea,
  findAll: ta
};
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
var Pn = (
  /** @class */
  function() {
    function e(t, u) {
      t === void 0 && (t = !1), this.addClosingSlash = t, Array.isArray(u) ? this.voidTags = u.reduce(function(a, i) {
        return a.add(i.toLowerCase()).add(i.toUpperCase()).add(i);
      }, /* @__PURE__ */ new Set()) : this.voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"].reduce(function(a, i) {
        return a.add(i.toLowerCase()).add(i.toUpperCase()).add(i);
      }, /* @__PURE__ */ new Set());
    }
    return e.prototype.formatNode = function(t, u, a) {
      var i = this.addClosingSlash, r = i && u && !u.endsWith(" ") ? " " : "", n = i ? "".concat(r, "/") : "";
      return this.isVoidElement(t.toLowerCase()) ? "<".concat(t).concat(u).concat(n, ">") : "<".concat(t).concat(u, ">").concat(a, "</").concat(t, ">");
    }, e.prototype.isVoidElement = function(t) {
      return this.voidTags.has(t);
    }, e;
  }()
);
Vu.default = Pn;
var ou = {}, Rn = E && E.__extends || /* @__PURE__ */ function() {
  var e = function(t, u) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
      a.__proto__ = i;
    } || function(a, i) {
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (a[r] = i[r]);
    }, e(t, u);
  };
  return function(t, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
    e(t, u);
    function a() {
      this.constructor = t;
    }
    t.prototype = u === null ? Object.create(u) : (a.prototype = u.prototype, new a());
  };
}(), ua = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ou, "__esModule", { value: !0 });
var Mn = Lu, In = ua(gt), Vn = ua(Qe), jn = (
  /** @class */
  function(e) {
    Rn(t, e);
    function t(u, a, i) {
      a === void 0 && (a = null);
      var r = e.call(this, a, i) || this;
      return r.nodeType = Vn.default.TEXT_NODE, r.rawTagName = "", r._rawText = u, r;
    }
    return t.prototype.clone = function() {
      return new t(this._rawText, null);
    }, Object.defineProperty(t.prototype, "rawText", {
      get: function() {
        return this._rawText;
      },
      /**
       * Set rawText and invalidate trimmed caches
       */
      set: function(u) {
        this._rawText = u, this._trimmedRawText = void 0, this._trimmedText = void 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "trimmedRawText", {
      /**
       * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
       */
      get: function() {
        return this._trimmedRawText !== void 0 ? this._trimmedRawText : (this._trimmedRawText = ir(this.rawText), this._trimmedRawText);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "trimmedText", {
      /**
       * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
       */
      get: function() {
        return this._trimmedText !== void 0 ? this._trimmedText : (this._trimmedText = ir(this.text), this._trimmedText);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "text", {
      /**
       * Get unescaped text value of current node and its children.
       * @return {string} text content
       */
      get: function() {
        return (0, Mn.decode)(this.rawText);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isWhitespace", {
      /**
       * Detect if the node contains only white space.
       * @return {boolean}
       */
      get: function() {
        return /^(\s|&nbsp;)*$/.test(this.rawText);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toString = function() {
      return this.rawText;
    }, t;
  }(In.default)
);
ou.default = jn;
function ir(e) {
  for (var t = 0, u, a; t >= 0 && t < e.length; )
    /\S/.test(e[t]) && (u === void 0 ? (u = t, t = e.length) : (a = t, t = void 0)), u === void 0 ? t++ : t--;
  u === void 0 && (u = 0), a === void 0 && (a = e.length - 1);
  var i = u > 0 && /[^\S\r\n]/.test(e[u - 1]), r = a < e.length - 1 && /[^\S\r\n]/.test(e[a + 1]);
  return (i ? " " : "") + e.slice(u, a + 1) + (r ? " " : "");
}
var Hn = E && E.__extends || /* @__PURE__ */ function() {
  var e = function(t, u) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
      a.__proto__ = i;
    } || function(a, i) {
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (a[r] = i[r]);
    }, e(t, u);
  };
  return function(t, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
    e(t, u);
    function a() {
      this.constructor = t;
    }
    t.prototype = u === null ? Object.create(u) : (a.prototype = u.prototype, new a());
  };
}(), it = E && E.__assign || function() {
  return it = Object.assign || function(e) {
    for (var t, u = 1, a = arguments.length; u < a; u++) {
      t = arguments[u];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, it.apply(this, arguments);
}, _t = E && E.__spreadArray || function(e, t, u) {
  if (u || arguments.length === 2) for (var a = 0, i = t.length, r; a < i; a++)
    (r || !(a in t)) && (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
  return e.concat(r || Array.prototype.slice.call(t));
}, We = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.parse = Ve.base_parse = void 0;
var gu = dr, Un = We(Lu), nt = We(Ru), pu = We(Mu), ra = We(Vu), zn = We(Xt), mu = We(gt), st = We(ou), Te = We(Qe);
function yt(e) {
  return JSON.parse(JSON.stringify(Un.default.decode(e)));
}
var Gn = ["h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup"], Wn = ["details", "dialog", "dd", "div", "dt"], Jn = ["fieldset", "figcaption", "figure", "footer", "form"], Xn = ["table", "td", "tr"], Zn = ["address", "article", "aside", "blockquote", "br", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "ul"], Cu = /* @__PURE__ */ new Set();
function Kn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var u = function(n) {
    for (var o = 0; o < n.length; o++) {
      var l = n[o];
      Cu.add(l), Cu.add(l.toUpperCase());
    }
  }, a = 0, i = e; a < i.length; a++) {
    var r = i[a];
    u(r);
  }
}
Kn(Gn, Wn, Jn, Xn, Zn);
var $n = (
  /** @class */
  function() {
    function e(t, u) {
      t === void 0 && (t = []), u === void 0 && (u = function() {
        return null;
      }), this._set = new Set(t), this._afterUpdate = u;
    }
    return e.prototype._validate = function(t) {
      if (/\s/.test(t))
        throw new Error("DOMException in DOMTokenList.add: The token '".concat(t, "' contains HTML space characters, which are not valid in tokens."));
    }, e.prototype.add = function(t) {
      this._validate(t), this._set.add(t), this._afterUpdate(this);
    }, e.prototype.replace = function(t, u) {
      this._validate(u), this._set.delete(t), this._set.add(u), this._afterUpdate(this);
    }, e.prototype.remove = function(t) {
      this._set.delete(t) && this._afterUpdate(this);
    }, e.prototype.toggle = function(t) {
      this._validate(t), this._set.has(t) ? this._set.delete(t) : this._set.add(t), this._afterUpdate(this);
    }, e.prototype.contains = function(t) {
      return this._set.has(t);
    }, Object.defineProperty(e.prototype, "length", {
      get: function() {
        return this._set.size;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.values = function() {
      return this._set.values();
    }, Object.defineProperty(e.prototype, "value", {
      get: function() {
        return Array.from(this._set.values());
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toString = function() {
      return Array.from(this._set.values()).join(" ");
    }, e;
  }()
), wu = (
  /** @class */
  function(e) {
    Hn(t, e);
    function t(u, a, i, r, n, o, l) {
      i === void 0 && (i = ""), r === void 0 && (r = null), o === void 0 && (o = new ra.default()), l === void 0 && (l = {});
      var s = e.call(this, r, n) || this;
      if (s.rawAttrs = i, s.voidTag = o, s.nodeType = Te.default.ELEMENT_NODE, s.rawTagName = u, s.rawAttrs = i || "", s.id = a.id || "", s.childNodes = [], s._parseOptions = l, s.classList = new $n(
        a.class ? a.class.split(/\s+/) : [],
        function(g) {
          return s.setAttribute("class", g.toString());
        }
        // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      ), a.id && (i || (s.rawAttrs = 'id="'.concat(a.id, '"'))), a.class && !i) {
        var c = 'class="'.concat(s.classList.toString(), '"');
        s.rawAttrs ? s.rawAttrs += " ".concat(c) : s.rawAttrs = c;
      }
      return s;
    }
    return t.prototype.quoteAttribute = function(u) {
      return u == null ? "null" : JSON.stringify(u.replace(/"/g, "&quot;")).replace(/\\t/g, "	").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\/g, "");
    }, t.prototype.removeChild = function(u) {
      return this.childNodes = this.childNodes.filter(function(a) {
        return a !== u;
      }), this;
    }, t.prototype.exchangeChild = function(u, a) {
      var i = this.childNodes;
      return this.childNodes = i.map(function(r) {
        return r === u ? a : r;
      }), this;
    }, Object.defineProperty(t.prototype, "tagName", {
      get: function() {
        return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
      },
      set: function(u) {
        this.rawTagName = u.toLowerCase();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "localName", {
      get: function() {
        return this.rawTagName.toLowerCase();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isVoidElement", {
      get: function() {
        return this.voidTag.isVoidElement(this.localName);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "rawText", {
      /**
       * Get escpaed (as-it) text value of current node and its children.
       * @return {string} text content
       */
      get: function() {
        return /^br$/i.test(this.rawTagName) ? `
` : this.childNodes.reduce(function(u, a) {
          return u += a.rawText;
        }, "");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "textContent", {
      get: function() {
        return yt(this.rawText);
      },
      set: function(u) {
        var a = [new st.default(u, this)];
        this.childNodes = a;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "text", {
      /**
       * Get unescaped text value of current node and its children.
       * @return {string} text content
       */
      get: function() {
        return yt(this.rawText);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "structuredText", {
      /**
       * Get structured Text (with '\n' etc.)
       * @return {string} structured text
       */
      get: function() {
        var u = [], a = [u];
        function i(r) {
          if (r.nodeType === Te.default.ELEMENT_NODE)
            Cu.has(r.rawTagName) ? (u.length > 0 && a.push(u = []), r.childNodes.forEach(i), u.length > 0 && a.push(u = [])) : r.childNodes.forEach(i);
          else if (r.nodeType === Te.default.TEXT_NODE)
            if (r.isWhitespace)
              u.prependWhitespace = !0;
            else {
              var n = r.trimmedText;
              u.prependWhitespace && (n = " ".concat(n), u.prependWhitespace = !1), u.push(n);
            }
        }
        return i(this), a.map(function(r) {
          return r.join("").replace(/\s{2,}/g, " ");
        }).join(`
`).replace(/\s+$/, "");
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toString = function() {
      var u = this.rawTagName;
      if (u) {
        var a = this.rawAttrs ? " ".concat(this.rawAttrs) : "";
        return this.voidTag.formatNode(u, a, this.innerHTML);
      }
      return this.innerHTML;
    }, Object.defineProperty(t.prototype, "innerHTML", {
      get: function() {
        return this.childNodes.map(function(u) {
          return u.toString();
        }).join("");
      },
      set: function(u) {
        var a = ut(u, this._parseOptions), i = a.childNodes.length ? a.childNodes : [new st.default(u, this)];
        Re(i, this), Re(this.childNodes, null), this.childNodes = i;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.set_content = function(u, a) {
      if (a === void 0 && (a = {}), u instanceof mu.default)
        u = [u];
      else if (typeof u == "string") {
        a = it(it({}, this._parseOptions), a);
        var i = ut(u, a);
        u = i.childNodes.length ? i.childNodes : [new st.default(i.innerHTML, this)];
      }
      return Re(this.childNodes, null), Re(u, this), this.childNodes = u, this;
    }, t.prototype.replaceWith = function() {
      for (var u = this, a = [], i = 0; i < arguments.length; i++)
        a[i] = arguments[i];
      var r = this.parentNode, n = a.map(function(l) {
        if (l instanceof mu.default)
          return [l];
        if (typeof l == "string") {
          var s = ut(l, u._parseOptions);
          return s.childNodes.length ? s.childNodes : [new st.default(l, u)];
        }
        return [];
      }).flat(), o = r.childNodes.findIndex(function(l) {
        return l === u;
      });
      return Re([this], null), r.childNodes = _t(_t(_t([], r.childNodes.slice(0, o), !0), Re(n, r), !0), r.childNodes.slice(o + 1), !0), this;
    }, Object.defineProperty(t.prototype, "outerHTML", {
      get: function() {
        return this.toString();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.trimRight = function(u) {
      for (var a = 0; a < this.childNodes.length; a++) {
        var i = this.childNodes[a];
        if (i.nodeType === Te.default.ELEMENT_NODE)
          i.trimRight(u);
        else {
          var r = i.rawText.search(u);
          r > -1 && (i.rawText = i.rawText.substr(0, r), this.childNodes.length = a + 1);
        }
      }
      return this;
    }, Object.defineProperty(t.prototype, "structure", {
      /**
       * Get DOM structure
       * @return {string} structure
       */
      get: function() {
        var u = [], a = 0;
        function i(n) {
          u.push("  ".repeat(a) + n);
        }
        function r(n) {
          var o = n.id ? "#".concat(n.id) : "", l = n.classList.length ? ".".concat(n.classList.value.join(".")) : "";
          i("".concat(n.rawTagName).concat(o).concat(l)), a++, n.childNodes.forEach(function(s) {
            s.nodeType === Te.default.ELEMENT_NODE ? r(s) : s.nodeType === Te.default.TEXT_NODE && (s.isWhitespace || i("#text"));
          }), a--;
        }
        return r(this), u.join(`
`);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.removeWhitespace = function() {
      var u = this, a = 0;
      return this.childNodes.forEach(function(i) {
        if (i.nodeType === Te.default.TEXT_NODE) {
          if (i.isWhitespace)
            return;
          i.rawText = i.trimmedRawText;
        } else i.nodeType === Te.default.ELEMENT_NODE && i.removeWhitespace();
        u.childNodes[a++] = i;
      }), this.childNodes.length = a, this;
    }, t.prototype.querySelectorAll = function(u) {
      return (0, gu.selectAll)(u, this, {
        xmlMode: !0,
        adapter: pu.default
      });
    }, t.prototype.querySelector = function(u) {
      return (0, gu.selectOne)(u, this, {
        xmlMode: !0,
        adapter: pu.default
      });
    }, t.prototype.getElementsByTagName = function(u) {
      for (var a = u.toUpperCase(), i = [], r = [], n = this, o = 0; o !== void 0; ) {
        var l = void 0;
        do
          l = n.childNodes[o++];
        while (o < n.childNodes.length && l === void 0);
        if (l === void 0) {
          n = n.parentNode, o = r.pop();
          continue;
        }
        l.nodeType === Te.default.ELEMENT_NODE && ((u === "*" || l.tagName === a) && i.push(l), l.childNodes.length > 0 && (r.push(o), n = l, o = 0));
      }
      return i;
    }, t.prototype.getElementById = function(u) {
      for (var a = [], i = this, r = 0; r !== void 0; ) {
        var n = void 0;
        do
          n = i.childNodes[r++];
        while (r < i.childNodes.length && n === void 0);
        if (n === void 0) {
          i = i.parentNode, r = a.pop();
          continue;
        }
        if (n.nodeType === Te.default.ELEMENT_NODE) {
          if (n.id === u)
            return n;
          n.childNodes.length > 0 && (a.push(r), i = n, r = 0);
        }
      }
      return null;
    }, t.prototype.closest = function(u) {
      var a = /* @__PURE__ */ new Map(), i = this, r = null;
      function n(l, s) {
        for (var c = null, g = 0, m = s.length; g < m && !c; g++) {
          var p = s[g];
          if (l(p))
            c = p;
          else {
            var b = a.get(p);
            b && (c = n(l, [b]));
          }
        }
        return c;
      }
      for (; i; )
        a.set(i, r), r = i, i = i.parentNode;
      for (i = this; i; ) {
        var o = (0, gu.selectOne)(u, i, {
          xmlMode: !0,
          adapter: it(it({}, pu.default), { getChildren: function(l) {
            var s = a.get(l);
            return s && [s];
          }, getSiblings: function(l) {
            return [l];
          }, findOne: n, findAll: function() {
            return [];
          } })
        });
        if (o)
          return o;
        i = i.parentNode;
      }
      return null;
    }, t.prototype.appendChild = function(u) {
      return u.remove(), this.childNodes.push(u), u.parentNode = this, u;
    }, Object.defineProperty(t.prototype, "firstChild", {
      /**
       * Get first child node
       * @return {Node | undefined} first child node; or undefined if none
       */
      get: function() {
        return this.childNodes[0];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /**
       * Get last child node
       * @return {Node | undefined} last child node; or undefined if none
       */
      get: function() {
        return (0, nt.default)(this.childNodes);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attrs", {
      /**
       * Get attributes
       * @access private
       * @return {Object} parsed and unescaped attributes
       */
      get: function() {
        if (this._attrs)
          return this._attrs;
        this._attrs = {};
        var u = this.rawAttributes;
        for (var a in u) {
          var i = u[a] || "";
          this._attrs[a.toLowerCase()] = yt(i);
        }
        return this._attrs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var u = {}, a = this.rawAttributes;
        for (var i in a) {
          var r = a[i] || "";
          u[i] = yt(r);
        }
        return u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "rawAttributes", {
      /**
       * Get escaped (as-is) attributes
       * @return {Object} parsed attributes
       */
      get: function() {
        if (this._rawAttrs)
          return this._rawAttrs;
        var u = {};
        if (this.rawAttrs)
          for (var a = /([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g, i = void 0; i = a.exec(this.rawAttrs); ) {
            var r = i[1], n = i[2] || null;
            n && (n[0] === "'" || n[0] === '"') && (n = n.slice(1, n.length - 1)), u[r] = u[r] || n;
          }
        return this._rawAttrs = u, u;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.removeAttribute = function(u) {
      var a = this, i = this.rawAttributes;
      return delete i[u], this._attrs && delete this._attrs[u], this.rawAttrs = Object.keys(i).map(function(r) {
        var n = a.quoteAttribute(i[r]);
        return n === "null" || n === '""' ? r : "".concat(r, "=").concat(n);
      }).join(" "), u === "id" && (this.id = ""), this;
    }, t.prototype.hasAttribute = function(u) {
      return u.toLowerCase() in this.attrs;
    }, t.prototype.getAttribute = function(u) {
      return this.attrs[u.toLowerCase()];
    }, t.prototype.setAttribute = function(u, a) {
      var i = this;
      if (arguments.length < 2)
        throw new Error("Failed to execute 'setAttribute' on 'Element'");
      var r = u.toLowerCase(), n = this.rawAttributes;
      for (var o in n)
        if (o.toLowerCase() === r) {
          u = o;
          break;
        }
      return n[u] = String(a), this._attrs && (this._attrs[r] = yt(n[u])), this.rawAttrs = Object.keys(n).map(function(l) {
        var s = i.quoteAttribute(n[l]);
        return s === "null" || s === '""' ? l : "".concat(l, "=").concat(s);
      }).join(" "), u === "id" && (this.id = a), this;
    }, t.prototype.setAttributes = function(u) {
      var a = this;
      return this._attrs && delete this._attrs, this._rawAttrs && delete this._rawAttrs, this.rawAttrs = Object.keys(u).map(function(i) {
        var r = u[i];
        return r === "null" || r === '""' ? i : "".concat(i, "=").concat(a.quoteAttribute(String(r)));
      }).join(" "), this;
    }, t.prototype.insertAdjacentHTML = function(u, a) {
      var i, r, n, o = this;
      if (arguments.length < 2)
        throw new Error("2 arguments required");
      var l = ut(a, this._parseOptions);
      if (u === "afterend") {
        var s = this.parentNode.childNodes.findIndex(function(c) {
          return c === o;
        });
        Re(l.childNodes, this.parentNode), (i = this.parentNode.childNodes).splice.apply(i, _t([s + 1, 0], l.childNodes, !1));
      } else if (u === "afterbegin")
        Re(l.childNodes, this), (r = this.childNodes).unshift.apply(r, l.childNodes);
      else if (u === "beforeend")
        l.childNodes.forEach(function(c) {
          o.appendChild(c);
        });
      else if (u === "beforebegin") {
        var s = this.parentNode.childNodes.findIndex(function(g) {
          return g === o;
        });
        Re(l.childNodes, this.parentNode), (n = this.parentNode.childNodes).splice.apply(n, _t([s, 0], l.childNodes, !1));
      } else
        throw new Error("The value provided ('".concat(u, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
      return this;
    }, Object.defineProperty(t.prototype, "nextSibling", {
      get: function() {
        if (this.parentNode) {
          for (var u = this.parentNode.childNodes, a = 0; a < u.length; ) {
            var i = u[a++];
            if (this === i)
              return u[a] || null;
          }
          return null;
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "nextElementSibling", {
      get: function() {
        if (this.parentNode) {
          for (var u = this.parentNode.childNodes, a = 0, i = !1; a < u.length; ) {
            var r = u[a++];
            if (i) {
              if (r instanceof t)
                return r || null;
            } else this === r && (i = !0);
          }
          return null;
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "previousSibling", {
      get: function() {
        if (this.parentNode) {
          for (var u = this.parentNode.childNodes, a = u.length; a > 0; ) {
            var i = u[--a];
            if (this === i)
              return u[a - 1] || null;
          }
          return null;
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "previousElementSibling", {
      get: function() {
        if (this.parentNode) {
          for (var u = this.parentNode.childNodes, a = u.length, i = !1; a > 0; ) {
            var r = u[--a];
            if (i) {
              if (r instanceof t)
                return r || null;
            } else this === r && (i = !0);
          }
          return null;
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "classNames", {
      get: function() {
        return this.classList.toString();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.clone = function() {
      return ut(this.toString(), this._parseOptions).firstChild;
    }, t;
  }(mu.default)
);
Ve.default = wu;
var Pe = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g, Yn = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi, nr = {
  li: { li: !0, LI: !0 },
  LI: { li: !0, LI: !0 },
  p: { p: !0, div: !0, P: !0, DIV: !0 },
  P: { p: !0, div: !0, P: !0, DIV: !0 },
  b: { div: !0, DIV: !0 },
  B: { div: !0, DIV: !0 },
  td: { td: !0, th: !0, TD: !0, TH: !0 },
  TD: { td: !0, th: !0, TD: !0, TH: !0 },
  th: { td: !0, th: !0, TD: !0, TH: !0 },
  TH: { td: !0, th: !0, TD: !0, TH: !0 },
  h1: { h1: !0, H1: !0 },
  H1: { h1: !0, H1: !0 },
  h2: { h2: !0, H2: !0 },
  H2: { h2: !0, H2: !0 },
  h3: { h3: !0, H3: !0 },
  H3: { h3: !0, H3: !0 },
  h4: { h4: !0, H4: !0 },
  H4: { h4: !0, H4: !0 },
  h5: { h5: !0, H5: !0 },
  H5: { h5: !0, H5: !0 },
  h6: { h6: !0, H6: !0 },
  H6: { h6: !0, H6: !0 }
}, sr = {
  li: { ul: !0, ol: !0, UL: !0, OL: !0 },
  LI: { ul: !0, ol: !0, UL: !0, OL: !0 },
  a: { div: !0, DIV: !0 },
  A: { div: !0, DIV: !0 },
  b: { div: !0, DIV: !0 },
  B: { div: !0, DIV: !0 },
  i: { div: !0, DIV: !0 },
  I: { div: !0, DIV: !0 },
  p: { div: !0, DIV: !0 },
  P: { div: !0, DIV: !0 },
  td: { tr: !0, table: !0, TR: !0, TABLE: !0 },
  TD: { tr: !0, table: !0, TR: !0, TABLE: !0 },
  th: { tr: !0, table: !0, TR: !0, TABLE: !0 },
  TH: { tr: !0, table: !0, TR: !0, TABLE: !0 }
}, Dt = "documentfragmentcontainer";
function aa(e, t) {
  var u, a;
  t === void 0 && (t = {});
  var i = new ra.default((u = t == null ? void 0 : t.voidTag) === null || u === void 0 ? void 0 : u.closingSlash, (a = t == null ? void 0 : t.voidTag) === null || a === void 0 ? void 0 : a.tags), r = t.blockTextElements || {
    script: !0,
    noscript: !0,
    style: !0,
    pre: !0
  }, n = Object.keys(r), o = n.map(function(se) {
    return new RegExp("^".concat(se, "$"), "i");
  }), l = n.filter(function(se) {
    return !!r[se];
  }).map(function(se) {
    return new RegExp("^".concat(se, "$"), "i");
  });
  function s(se) {
    return l.some(function(ae) {
      return ae.test(se);
    });
  }
  function c(se) {
    return o.some(function(ae) {
      return ae.test(se);
    });
  }
  var g = function(se, ae) {
    return [se - M, ae - M];
  }, m = new wu(null, {}, "", null, [0, e.length], i, t), p = m, b = [m], B = -1, k = void 0, D;
  e = "<".concat(Dt, ">").concat(e, "</").concat(Dt, ">");
  for (var y = t.lowerCaseTagName, F = t.fixNestedATags, O = e.length - (Dt.length + 2), M = Dt.length + 2; D = Pe.exec(e); ) {
    var V = D[0], J = D[1], Z = D[2], ie = D[3], te = D[4], v = V.length, C = Pe.lastIndex - v, w = Pe.lastIndex;
    if (B > -1 && B + v < w) {
      var R = e.substring(B, C);
      p.appendChild(new st.default(R, p, g(B, C)));
    }
    if (B = Pe.lastIndex, Z !== Dt) {
      if (V[1] === "!") {
        if (t.comment) {
          var R = e.substring(C + 4, w - 3);
          p.appendChild(new zn.default(R, p, g(C, w)));
        }
        continue;
      }
      if (y && (Z = Z.toLowerCase()), !J) {
        for (var I = {}, Y = void 0; Y = Yn.exec(ie); ) {
          var ue = Y[1], re = Y[2], q = re[0] === "'" || re[0] === '"';
          I[ue.toLowerCase()] = q ? re.slice(1, re.length - 1) : re;
        }
        var U = p.rawTagName;
        !te && nr[U] && nr[U][Z] && (b.pop(), p = (0, nt.default)(b)), F && (Z === "a" || Z === "A") && (k !== void 0 && (b.splice(k), p = (0, nt.default)(b)), k = b.length);
        var K = Pe.lastIndex, ge = K - v;
        if (p = p.appendChild(
          // Initialize range (end position updated later for closed tags)
          new wu(Z, I, ie.slice(1), null, g(ge, K), i, t)
        ), b.push(p), c(Z)) {
          var xe = "</".concat(Z, ">"), ke = y ? e.toLocaleLowerCase().indexOf(xe, Pe.lastIndex) : e.indexOf(xe, Pe.lastIndex), Je = ke === -1 ? O : ke;
          if (s(Z)) {
            var R = e.substring(K, Je);
            R.length > 0 && /\S/.test(R) && p.appendChild(new st.default(R, p, g(K, Je)));
          }
          ke === -1 ? B = Pe.lastIndex = e.length + 1 : (B = Pe.lastIndex = ke + xe.length, J = "/");
        }
      }
      if (J || te || i.isVoidElement(Z))
        for (; ; )
          if (k != null && (Z === "a" || Z === "A") && (k = void 0), p.rawTagName === Z) {
            p.range[1] = g(-1, Math.max(B, w))[1], b.pop(), p = (0, nt.default)(b);
            break;
          } else {
            var U = p.tagName;
            if (sr[U] && sr[U][Z]) {
              b.pop(), p = (0, nt.default)(b);
              continue;
            }
            break;
          }
    }
  }
  return b;
}
Ve.base_parse = aa;
function ut(e, t) {
  t === void 0 && (t = {});
  for (var u = aa(e, t), a = u[0], i = function() {
    var r = u.pop(), n = (0, nt.default)(u);
    r.parentNode && r.parentNode.parentNode && (r.parentNode === n && r.tagName === n.tagName ? t.parseNoneClosedTags !== !0 && (n.removeChild(r), r.childNodes.forEach(function(o) {
      n.parentNode.appendChild(o);
    }), u.pop()) : t.parseNoneClosedTags !== !0 && (n.removeChild(r), r.childNodes.forEach(function(o) {
      n.appendChild(o);
    })));
  }; u.length > 1; )
    i();
  return a;
}
Ve.parse = ut;
function Re(e, t) {
  return e.map(function(u) {
    return u.parentNode = t, u;
  });
}
var ia = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
  var t = Ve;
  Object.defineProperty(e, "default", { enumerable: !0, get: function() {
    return t.parse;
  } });
})(ia);
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
var Qn = Ve;
function es(e, t) {
  t === void 0 && (t = {});
  var u = (0, Qn.base_parse)(e, t);
  return u.length === 1;
}
ju.default = es;
var tt = E && E.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(le, "__esModule", { value: !0 });
le.NodeType = le.TextNode = le.Node = le.valid = le.CommentNode = le.HTMLElement = ha = le.parse = void 0;
var na = tt(Xt);
le.CommentNode = na.default;
var sa = tt(Ve);
le.HTMLElement = sa.default;
var oa = tt(gt);
le.Node = oa.default;
var la = tt(ou);
le.TextNode = la.default;
var ca = tt(Qe);
le.NodeType = ca.default;
var da = tt(ia), fa = tt(ju);
le.valid = fa.default;
function je(e, t) {
  return t === void 0 && (t = {}), (0, da.default)(e, t);
}
le.default = je;
var ha = le.parse = je;
je.parse = da.default;
je.HTMLElement = sa.default;
je.CommentNode = na.default;
je.valid = fa.default;
je.Node = oa.default;
je.TextNode = la.default;
je.NodeType = ca.default;
const X = class X {
  static isInViewportPercent(t, u) {
    const a = t.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, r = window.innerWidth || document.documentElement.clientWidth, n = { x: a.x, y: a.y, width: a.width, height: a.height }, o = { x: 0, y: 0, width: r, height: i }, l = n.width * n.height, s = X.intersection(n, o);
    return u <= s / l * 100;
  }
  static getScrollTop(t) {
    if (!t) return;
    const u = document.querySelector("header"), a = u ? (u == null ? void 0 : u.offsetHeight) + 40 : 0;
    return t.getBoundingClientRect().top - a + window.scrollY;
  }
  static scrollIntoView(t, u) {
    t && window.scrollTo({
      top: X.getScrollTop(t),
      behavior: u ? "smooth" : "auto"
    });
  }
  static getLang() {
    return "en";
  }
  static isNotDefaultLang() {
    return this.getLang() !== this.defaultLang;
  }
  static scrollToTop() {
    X.scrollIntoView(document.querySelector("body"), !0);
  }
  static getParentComponent(t) {
    return X.getParent(t, ".is-component");
  }
  static getParent(t, u) {
    var i;
    const a = t.parentNode;
    return a === null || a.tagName === "body" ? null : (i = a.parentNode) != null && i.querySelector(u) ? a : X.getParent(a, u);
  }
  static append(t, u) {
    if (t) {
      const a = document.createElement("div");
      a.innerHTML = u != null && u.nodeType ? u.outerHTML : u;
      const i = a == null ? void 0 : a.children[0];
      if (i)
        return t.appendChild(i);
    }
    return null;
  }
  static replace(t, u) {
    t && u && (t.innerHTML = u.innerHTML);
  }
  static generateUrl(t, u, a) {
    let i;
    return t && u && (i = t.toLowerCase().replace(/\s/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "").replace(/\u00dc/, "ue").replace(/\u00c4/, "ae").replace(/\u00d6/, "oe").replace(/\u00fc/, "ue").replace(/\u00e4/, "ae").replace(/\u00f6/, "oe").replace(/\u00df/, "ss"), i = u + X.urlSeperator + i.replace(/-+$/, "") + "-" + a), i;
  }
  static toBase64(t) {
    return new Promise((u, a) => {
      const i = new FileReader();
      i.readAsDataURL(t), i.onload = () => {
        const r = i.result.split(",")[1];
        u(r);
      }, i.onerror = (r) => a(r);
    });
  }
  static toSize(t) {
    const u = ["Bytes", "KB", "MB", "GB", "TB"];
    if (t == 0) return "0 Byte";
    const a = parseInt(Math.floor(Math.log(t) / Math.log(1024)));
    return (t / Math.pow(1024, a)).toFixed(1) + " " + u[a];
  }
  static camalCaseToSnakeCase(t) {
    return t.replace(/[A-Z]/g, (u) => `_${u.toLowerCase()}`);
  }
  static animateValue(t, u, a, i, r = X.priceFormatter) {
    let n = null;
    const o = (l) => {
      n || (n = l);
      const s = Math.min((l - n) / i, 1), c = s * (a - u) + u, g = r.format(c);
      t.innerHTML = g, s < 1 && window.requestAnimationFrame(o);
    };
    window.requestAnimationFrame(o);
  }
  static isOutsideOf(t, u) {
    const a = u.composedPath ? u.composedPath() : u.path;
    return a ? !a.some((i) => i.className && i.className.includes && i.className.includes(t)) : !1;
  }
  static getExtension(t) {
    return t.split(".").pop();
  }
  static validateVueProps(t) {
    var r;
    const u = (r = t == null ? void 0 : t.$) == null ? void 0 : r.propsOptions[0], a = t == null ? void 0 : t.$props, i = { props: {} };
    return Object.keys(a).map((n) => {
      let o = a[n];
      o === "" && (o = u[n].default), i.props[n] = o;
    }), i;
  }
  static isTrue(t) {
    return t === !0 || t === "true";
  }
  static capitalize(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  static sleep(t) {
    return new Promise((u) => setTimeout(u, t));
  }
  static randomRange(t, u) {
    return Math.floor(Math.random() * (u - t + 1) + t);
  }
  static uuid() {
    const t = Date.now().toString(16) + Math.random().toString(4) + "0".repeat(16), u = X.randomRange(0, 8), a = X.randomRange(0, 16);
    return "u" + [t.substring(u, u + 8), t.substring(a, a + 4)].join("-").replaceAll(".", "9");
  }
  static getBreakpoint() {
    return typeof getComputedStyle != "function" ? "" : getComputedStyle(document.body).getPropertyValue("--breakpoint").trim();
  }
  static isBelowBreakpoint(t) {
    let u = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const a = X.getBreakpoint();
    return u.indexOf(t) >= u.indexOf(a);
  }
  static isUpperBreakpoint() {
    return !X.isBelowBreakpoint("md");
  }
  static getYoutubeThumbnail(t) {
    let u;
    const a = t.match(/youtube\.com.*(\?v=|vi=|\/live\/)(.{11})/), i = t.match(/youtu\.be\/(.{11})/);
    return a ? u = a[2] : i && (u = i[1]), `https://i1.ytimg.com/vi/${u}/maxresdefault.jpg`;
  }
  static truncateWords(t, u) {
    if (!t) return;
    const a = t.split(" "), i = a.slice(0, u).join(" ");
    return a.length > u ? i + " ..." : i;
  }
  static stripHtml(t) {
    if (t)
      return t.replace(new RegExp(/<.*?>/g), "");
  }
  static isGermanDate(t) {
    return !!t.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
  }
  static isStorybook() {
    return !!(typeof window < "u" && window.__STORYBOOK_ADDONS_CHANNEL__);
  }
  static isTestingStorybook() {
    return typeof document > "u" ? !1 : document.location.pathname.indexOf(X.storybookPath) !== -1;
  }
  static getSiteAssetPath(t) {
    return X.isTestingStorybook() ? `${X.storybookPath}${t}` : t;
  }
  static getAssetPath(t) {
    return X.isStorybook() ? `../assets/${t}` : `/_includes/shared-components/assets/${t}`;
  }
  static findRecursive(t, u, a) {
    let i = !1, r, n, o;
    function l(s, c, g, m) {
      if (!i) {
        if (c(s, n)) {
          i = !0, r = m(s, g);
          return;
        }
        for (let p in s)
          typeof s[p] == "object" && (s === o && (n = p), l(s[p], c, s, m));
      }
    }
    return o = t, l(t, u, t, a), r;
  }
  static storageSave(t, u, a = !0) {
    localStorage.setItem(X.storagePrefix + t, a ? JSON.stringify(u) : u);
  }
  static storageGet(t) {
    return localStorage.getItem(X.storagePrefix + t);
  }
  static getJSON(t) {
    var u;
    if (t && typeof t == "object" && ((u = Object.keys(t)) == null ? void 0 : u.length) > 0) return t;
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
    const u = getComputedStyle(t).backgroundColor;
    return u === "rgba(0, 0, 0, 0)" ? null : u;
  }
  static isValidTimeFormat(t) {
    return /^(\d{1,2}(:\d{2})?-\d{1,2}(:\d{2})? Uhr)$/.test(t);
  }
  static standardizeTimeFormat(t) {
    if (!this.isValidTimeFormat(t)) return t;
    const u = "Uhr";
    let a = t.split("-"), i = a[0].trim();
    i.includes(":") || (i += ":00"), i.length === 4 && (i = "0" + i);
    let r = a[1].trim().replace(` ${u}`, "");
    return r.includes(":") || (r += ":00"), r.length === 4 && (r = "0" + r), `${i} - ${r} ${u}`;
  }
  static convertToDate(t) {
    const u = t.match(/^(\d{1,2})\.-\d{1,2}\.(\d{1,2})\.(\d{4})$/);
    if (u) {
      const i = parseInt(u[1], 10), r = parseInt(u[2], 10) - 1, n = parseInt(u[3], 10);
      return new Date(n, r, i);
    }
    return null;
  }
  static XMLtoJSON(t) {
    let u = {};
    if (t.nodeType === Node.ELEMENT_NODE) {
      if (t.attributes.length > 0) {
        u["@attributes"] = {};
        for (let a = 0; a < t.attributes.length; a++) {
          const i = t.attributes.item(a);
          u["@attributes"][i.nodeName] = i.nodeValue;
        }
      }
    } else (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.CDATA_SECTION_NODE) && (u = t.nodeValue);
    if (t.hasChildNodes())
      for (let a = 0; a < t.childNodes.length; a++) {
        const i = t.childNodes.item(a), r = i.nodeName;
        if (typeof u[r] > "u")
          u[r] = this.XMLtoJSON(i);
        else {
          if (typeof u[r].push > "u") {
            const n = u[r];
            u[r] = [], u[r].push(n);
          }
          u[r].push(this.XMLtoJSON(i));
        }
      }
    return u;
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
    let u;
    if (t.startsWith("--") || t.startsWith("var(")) {
      const o = t.replace(/--|var\(/, "").replace(/\)$/, ""), l = getComputedStyle(document.documentElement), s = 4;
      u = l.getPropertyValue(o).trim(), u.length === s && (u = `#${u[1]}${u[1]}${u[2]}${u[2]}${u[3]}${u[3]}`);
    }
    const a = u || t, i = X.red(a), r = X.green(a), n = X.blue(a);
    return `${i}, ${r}, ${n}`;
  }
  static getHash() {
    return window.location.hash;
  }
};
z(X, "defaultLang", "de"), z(X, "urlSeperator", "#"), z(X, "priceFormatter", new Intl.NumberFormat("de-DE", {
  style: "decimal",
  maximumFractionDigits: 0
})), z(X, "storagePrefix", "@gab_"), // if you change this you need to change this in the index.html as well
z(X, "storybookPath", "/shared-components"), z(X, "decodeHTML", (t) => {
  const u = ha(t, "text/html");
  return console.log("🚀 ~ Tools ~ document:", u), u.textContent;
}), z(X, "intersection", (t, u) => {
  const a = Math.max(0, Math.min(t.x + t.width, u.x + u.width) - Math.max(t.x, u.x)), i = Math.max(0, Math.min(t.y + t.height, u.y + u.height) - Math.max(t.y, u.y));
  return a * i;
}), z(X, "debounce", function(t, u, a) {
  let i;
  return function() {
    const r = this, n = arguments;
    var o = function() {
      i = null, a || t.apply(r, n);
    }, l = a && !i;
    clearTimeout(i), i = setTimeout(o, u), l && t.apply(r, n);
  };
});
let x = X;
const ts = {
  tagName: "icon",
  data() {
    return x.validateVueProps(this);
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
      var e;
      switch (this.props.size) {
        case "xxl":
          e = "200px";
          break;
        case "xl":
          e = "120px";
          break;
        case "medium":
          e = "28px";
          break;
        case "small":
          e = "18px";
          break;
        case "xs":
          e = "10px";
          break;
        default:
        case "large":
          e = "48px";
          break;
      }
      return e;
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
function us(e, t, u, a, i, r) {
  return d(), h("span", {
    class: A(r.classList),
    style: ee(r.parentStyle)
  }, [
    (d(), P(jt(u.icon), ce(r.settings, {
      color: e.props.color,
      closed: u.closed,
      step: u.step
    }), null, 16, ["color", "closed", "step"]))
  ], 6);
}
const Ne = /* @__PURE__ */ j(ts, [["render", us]]), rs = {
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
}, as = { class: "badge__text" }, is = {
  key: 0,
  class: "badge__icon"
};
function ns(e, t, u, a, i, r) {
  const n = Ne;
  return d(), h("div", {
    class: A(r.classList),
    style: ee(r.style)
  }, [
    f("div", as, S(u.text), 1),
    u.icon ? (d(), h("div", is, [
      L(n, {
        icon: u.icon,
        color: "var(--color-badge-icon)",
        size: "medium"
      }, null, 8, ["icon"])
    ])) : _("", !0)
  ], 6);
}
const ga = /* @__PURE__ */ j(rs, [["render", ns]]), ss = {
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
function os(e, t, u, a, i, r) {
  return u.hideContainer ? lt(e.$slots, "default", { key: 1 }) : (d(), h("div", {
    key: 0,
    class: A(r.classList)
  }, [
    lt(e.$slots, "default")
  ], 2));
}
const lu = /* @__PURE__ */ j(ss, [["render", os]]), T = {
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
}, ls = {
  tagName: "cta",
  computed: {
    tag() {
      return this.href || this.alternativeHref || this.target ? "a" : "button";
    },
    hasIcon() {
      return this.link || this.externalValue || this.icon || this.downloadValue;
    },
    externalValue() {
      return x.isTrue(this.external);
    },
    downloadValue() {
      return x.isTrue(this.download);
    },
    classList() {
      return [
        `${this.baseClass} ${this.innerSkin}`,
        this.classes ? this.classes : "",
        this.download ? "cta--download" : "",
        this.external ? "cta--external" : "",
        this.icon ? `cta--has-icon cta--icon-${this.icon}` : "",
        x.isTrue(this.reversed) === !0 ? "cta--reversed" : "",
        x.isTrue(this.monochrome) === !0 ? "cta--monochrome" : "",
        this.link && x.isTrue(this.active) === !0 ? T.ACTIVE : "",
        x.isTrue(this.loading) ? T.LOADING : "",
        x.isTrue(this.hasBackground) === !0 ? "cta--has-background" : "",
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
      let e = this.$.type.tagName;
      return this.link ? e += " link" : e += " btn " + this.innerWidth, e;
    },
    iconName() {
      let e;
      return this.icon ? e = this.icon : this.externalValue || this.downloadValue ? e = "arrow-external" : this.link && (e = "arrow"), e;
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
}, cs = { class: "cta__text" };
function ds(e, t, u, a, i, r) {
  const n = Ne;
  return d(), P(jt(r.tag), {
    role: "button",
    class: A(r.classList),
    "data-text": u.text,
    href: u.href ? u.href : null,
    "data-analytics": u.analytics ? u.analytics : null,
    type: u.type ? u.type : null,
    target: r.targetValue ? r.targetValue : null,
    "data-alternative-href": u.alternativeHref ? u.alternativeHref : null,
    "data-trigger": u.trigger ? u.trigger : null
  }, {
    default: he(() => [
      f("span", cs, S(u.text), 1),
      r.hasIcon ? (d(), P(n, {
        key: 0,
        icon: r.iconName,
        size: r.sizeValue
      }, null, 8, ["icon", "size"])) : _("", !0)
    ]),
    _: 1
  }, 8, ["class", "data-text", "href", "data-analytics", "type", "target", "data-alternative-href", "data-trigger"]);
}
const Le = /* @__PURE__ */ j(ls, [["render", ds]]), fs = {
  tagName: "headline",
  computed: {
    tag() {
      return this.level ? this.level : "h2";
    },
    classList() {
      return `${this.classes && x.hasFontSizeClass(this.classes) ? this.classes : `${this.tag}-font-size ${this.classes ? this.classes : ""}`} headline vue-component`;
    },
    dataUtilityAnimationStep() {
      return this.utilityAnimationStep ? this.utilityAnimationStep : null;
    }
  },
  props: { text: String, level: String, classes: String, utilityAnimationStep: Number }
};
function hs(e, t, u, a, i, r) {
  return u.text ? (d(), P(jt(r.tag), {
    key: 0,
    class: A(r.classList),
    innerHTML: u.text,
    "data-utility-animation-step": r.dataUtilityAnimationStep
  }, null, 8, ["class", "innerHTML", "data-utility-animation-step"])) : (d(), P(jt(r.tag), {
    key: 1,
    class: A(r.classList),
    "data-utility-animation-step": r.dataUtilityAnimationStep
  }, {
    default: he(() => [
      lt(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-utility-animation-step"]));
}
const De = /* @__PURE__ */ j(fs, [["render", hs]]), gs = {
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
    getSize(e) {
      return !e.indexOf || e.indexOf("px") === -1 && e.indexOf("%") === -1 ? `${e}px` : e;
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
function ps(e, t, u, a, i, r) {
  return d(), h("div", {
    class: A(r.classList)
  }, null, 2);
}
const pa = /* @__PURE__ */ j(gs, [["render", ps]]), Pt = {
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
}, ms = {
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
}, Rt = {
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
}, bs = {
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
}, bu = "https://res.cloudinary.com/c4a8/image/upload/", vs = {
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
        return typeof this.lottie != "object" ? x.getJSON(this.lottie) : this.lottie;
    },
    jsonLottieSettingsData() {
      if (!(!this.lottie || !this.lottieSettings))
        return typeof this.lottieSettings != "object" ? x.getJSON(this.lottieSettings) : this.lottieSettings;
    },
    isCloudinary() {
      return x.isTrue(this.cloudinary);
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
      var e;
      return ["img__picture-wrapper", (e = this.imgSrcSetValue) == null ? void 0 : e.ratioClasses];
    },
    imgSrcSetValue() {
      return typeof this.imgSrcSets == "string" ? bs[this.imgSrcSets] : this.imgSrcSets;
    },
    imgSrcSetSources() {
      var e, t;
      return (t = (e = this.imgSrcSetValue) == null ? void 0 : e.srcSets) == null ? void 0 : t.filter((u) => u.media || u.src);
    },
    imgSrcSetImg() {
      var t;
      const e = (t = this.imgSrcSetValue) == null ? void 0 : t.srcSets;
      return e ? this.getCloudinaryBasePathLink(e[e.length - 1]) : null;
    }
  },
  watch: {
    animated(e, t) {
      this.srcset = "";
    }
  },
  created() {
    this.canGenerateSrcSet() || this.isCloudinary || (this.noCloudinary = this.getBaseAssetPath(), this.sizes = Pt.sizes);
  },
  methods: {
    getSourceSetMedia(e) {
      return e.width ? `(min-width: ${e.width}px)` : e.media;
    },
    canGenerateSrcSet() {
      return this.isCloudinary && !this.isGif() && !this.animated;
    },
    getSetup() {
      const e = this.getPreset(), t = this.getTransformationString(e);
      return { preset: e, transformationsString: t };
    },
    getPreset() {
      try {
        return this.preset ? Rt.presets && Rt.presets[this.preset] ? Object.assign(Pt, Rt.presets[this.preset]) : Pt : { ...Pt, ...Rt.presets.default };
      } catch (e) {
        console.error(e);
      }
    },
    hasProtocol() {
      return /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/.test(this.img);
    },
    getBaseAssetPath() {
      var e;
      return x.isTestingStorybook() ? this.img : ((e = this.img) == null ? void 0 : e.indexOf("/assets/")) !== -1 ? this.img : this.hasProtocol() ? this.img : `/assets/${this.img}`;
    },
    getCloudinaryBasePathLink(e) {
      return e && e.src ? `${e.src}` : `${bu}${e ? e.params : ""}${this.img}`;
    },
    getCloudinaryLink() {
      return this.isGif() || this.isSvg() || this.animated ? this.getCloudinaryBasePathLink() : this.getCloudinaryLinkWithTransformation();
    },
    getCloudinaryLinkWithTransformation() {
      const { preset: e, transformationsString: t } = this.getSetup(), u = /w_\d+/.test(this.img), a = bu + t, i = `/${this.img}`;
      return u ? `${a}${i}` : `${a},w_${e.fallback_max_width}${i}`;
    },
    loadImage(e) {
      if (!this.canGenerateSrcSet()) return;
      const t = document.createElement("img");
      t.onload = () => {
        const u = t == null ? void 0 : t.naturalHeight, a = t == null ? void 0 : t.naturalWidth;
        let i;
        if (this.isSvg())
          i = {
            naturalHeight: u,
            naturalWidth: a
          };
        else {
          const { preset: r, transformationsString: n } = this.getSetup();
          this.sizes = r == null ? void 0 : r.sizes, i = {
            naturalHeight: u || (r == null ? void 0 : r.fallback_max_width),
            naturalWidth: a || (r == null ? void 0 : r.fallback_max_width)
          }, u && a && !this.isSvg() && this.buildSrcSet(r, n);
        }
        this.dimensions = i;
      }, t.src = e || this.getCloudinaryLinkWithTransformation();
    },
    getTransformationString(e) {
      const t = [];
      for (const [a, i] of Object.entries(ms))
        e[a] && t.push(`${i}_${e[a]}`);
      return t.length > 0 ? t.join(",") : "";
    },
    buildSrcSet(e, t) {
      const u = [], a = e.steps, i = e.min_width, n = (e.max_width - i) / (a - 1), { naturalWidth: o } = this.dimensions;
      for (let l = 1; l <= a; l++) {
        const s = i + (l - 1) * n, c = s <= o, g = c ? s : o, p = `${this.hasPictureTag ? this.imgSrcSetImg : `${bu}${t},w_${g}/${this.img}`} ${g}w`;
        if (u.push(p), !c) break;
      }
      this.srcset = o < i ? "" : u.join(`, 
`);
    },
    isGif() {
      if (!this.img) return;
      const e = this.img.split(".")[1];
      return (e == null ? void 0 : e.toLowerCase()) === "gif";
    },
    isSvg() {
      var t;
      const e = x.getExtension(this.getCloudinaryBasePathLink());
      return (e == null ? void 0 : e.toLowerCase()) === "svg" || ((t = this.img) == null ? void 0 : t.indexOf(".svg")) !== -1;
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
}, _s = ["media", "srcset"], ys = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"], Ds = ["src", "loading", "alt", "width", "height", "srcset", "sizes", "crossorigin"];
function xs(e, t, u, a, i, r) {
  const n = pa;
  return r.hasPictureTag ? (d(), h("div", {
    key: 0,
    class: A(r.pictureWrapperClassList)
  }, [
    f("picture", null, [
      (d(!0), h(N, null, H(r.imgSrcSetSources, (o) => (d(), h("source", {
        key: o.params,
        media: r.getSourceSetMedia(o),
        srcset: r.getCloudinaryBasePathLink(o)
      }, null, 8, _s))), 128)),
      f("img", {
        onLoad: t[0] || (t[0] = (o) => r.loadImage(r.imgSrcSetImg)),
        ref: "image",
        src: r.imgSrcSetImg,
        loading: r.loading,
        class: A(r.classList),
        alt: u.alt,
        width: i.dimensions.naturalWidth,
        height: i.dimensions.naturalHeight,
        srcset: i.srcset,
        sizes: i.sizes,
        crossorigin: r.crossOriginValue
      }, null, 42, ys)
    ])
  ], 2)) : r.isLottie ? (d(), P(n, ce({
    key: 1,
    data: r.jsonLottieData,
    class: r.classListComponent
  }, r.jsonLottieSettingsData), null, 16, ["data", "class"])) : (d(), h("img", {
    key: 2,
    onLoad: t[1] || (t[1] = (o) => r.loadImage()),
    ref: "image",
    src: r.source,
    loading: r.loading,
    class: A(r.classList),
    alt: u.alt,
    width: i.dimensions.naturalWidth,
    height: i.dimensions.naturalHeight,
    srcset: i.srcset,
    sizes: i.sizes,
    crossorigin: r.crossOriginValue
  }, null, 42, Ds));
}
const qe = /* @__PURE__ */ j(vs, [["render", xs]]), ne = {
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
}, As = {
  tagName: "card-footer",
  data() {
    return {
      maxTags: 3
    };
  },
  computed: {
    lang() {
      return x.getLang();
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
}, Cs = {
  tagName: "card",
  components: {
    "card-footer": As
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
      return x.isTrue(this.hasAnimation) === !0;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? "1" : null;
    },
    rowValue() {
      return x.isTrue(this.row) === !0;
    },
    variant() {
      return x.isTrue(this.long) === !0 ? "card--long" : this.productValue ? "card--products" : x.isTrue(this.event) === !0 ? "card--event" : this.rowValue ? "card--row" : "card--default";
    },
    classList() {
      return [
        "card",
        this.hasAnimationValue ? "utility-animation fade-in-bottom" : "",
        `${this.noLink ? "card--no-link" : ""}`,
        `${x.isTrue(this.large) === !0 ? "card--large mb-11" : "h-100"}`,
        this.variant,
        this.spacing,
        "vue-component"
      ];
    },
    productValue() {
      return x.getJSON(this.product);
    },
    truncatedExcerpt() {
      const e = x.isTrue(this.long) === !0 ? this.strippedExcerpt : x.truncateWords(this.strippedExcerpt, this.wordsToTruncate);
      return x.decodeHTML(e);
    },
    strippedExcerpt() {
      return x.stripHtml(this.excerpt);
    },
    cardDate() {
      return this.formatDate(this.date);
    },
    hasExtension() {
      return this.youtubeUrl ? x.getYoutubeThumbnail(this.youtubeUrl) : /^.+\.(jpg|webp|png)/.test(this.blogTitlePic) ? this.blogTitlePic : this.blogTitlePic + ".jpg";
    },
    hasBlogTitlePic() {
      return !this.youtubeUrl;
    },
    hasNoLink() {
      return !!x.isTrue(this.webCast);
    },
    ctaValue() {
      const e = x.getJSON(this.cta);
      return e && e.link === void 0 && (e.link = !0), e;
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
    if (x.isTrue(this.store) !== !0) return;
    const e = this.$root.StoreData.blogView;
    if (!e) return null;
    this.activeView = e(), e.subscribe((t) => {
      this.activeView = t;
    });
  },
  methods: {
    isTags(e) {
      return !!(e.parentElement.classList.contains("tags__btn") || e.parentElement.classList.contains("card__tags"));
    },
    formatDate(e) {
      if (!e) return;
      if (x.isGermanDate(e)) return e;
      const u = e.split(" ")[0].split("-"), a = u[0], i = u[1];
      return `${u[2]}.${i}.${a}`;
    },
    authorList(e) {
      return e && typeof e == "object" && e.length > 0 ? e : e && typeof e == "string" ? [e] : e;
    },
    subPointsList(e) {
      return x.getJSON(e);
    },
    headlineClassValue(e) {
      return e !== 0 ? "mt-5" : "";
    },
    handleClick(e) {
      if (this.noLink) return;
      const t = this.$refs.title, u = e.target;
      if (u.classList.contains("card__title")) return;
      const a = this.isTags(u);
      if (!u.parentElement.classList.contains("authors__link") && !a)
        e.stopImmediatePropagation(), t.click();
      else {
        if (!a) return;
        e.stopImmediatePropagation(), e.preventDefault(), this.$emit(ne.CARD_TAG_CLICKED, u.dataset.tag);
      }
    },
    isIncluded(e) {
      return x.isTrue(e) ? "check-mark" : "x-mark";
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
  }
}, ws = ["onclick", "data-utility-animation-step"], Es = {
  key: 0,
  class: "row no-gutters"
}, Ss = {
  key: 0,
  class: "col-lg-8"
}, Ls = { class: "card__img-top position-relative overflow-hidden is-foreground" }, ks = { class: "col-lg-4" }, Ts = { class: "card__body card-body d-flex flex-column h-100 p-4 p-lg-5" }, Bs = ["href", "target"], Fs = ["innerHTML"], Ns = {
  key: 0,
  class: "card__img-top card-img--products position-relative no-gutters is-foreground"
}, qs = { class: "card__img-headline-container" }, Os = { class: "w-100 pt-5 mb-0 no-gutters" }, Ps = { class: "card__body card-body mt-0 pt-0 z-index-2" }, Rs = { class: "card__check-mark-row" }, Ms = {
  key: 0,
  class: "card__check-placeholder"
}, Is = { class: "card__check-mark-point" }, Vs = {
  key: 0,
  class: "card__img-top position-relative no-gutters is-foreground"
}, js = { class: "card__body card-body richtext" }, Hs = {
  key: 0,
  class: "card__scope"
}, Us = ["href", "target"], zs = ["innerHTML"], Gs = { class: "card__points text-black" }, Ws = { class: "mb-4" }, Js = {
  key: 1,
  class: "card-warning"
}, Xs = {
  key: 2,
  class: "card__link"
}, Zs = {
  key: 0,
  class: "card__img-top position-relative is-foreground"
}, Ks = { class: "card__content" }, $s = { class: "card__body card-body" }, Ys = ["href", "target"], Qs = ["innerHTML"], eo = { class: "card-footer border-0 pt-0" };
function to(e, t, u, a, i, r) {
  const n = qe, o = De, l = ht("card-footer"), s = Ne, c = Le;
  return d(), h("article", {
    class: A(r.classList),
    itemscope: "",
    itemtype: "http://schema.org/BlogPosting",
    onclick: r.handleClick,
    "data-utility-animation-step": r.utilityAnimationStep,
    style: ee(r.style)
  }, [
    u.large ? (d(), h("div", Es, [
      u.blogTitlePic ? (d(), h("div", Ss, [
        f("div", Ls, [
          L(n, {
            img: r.hasExtension,
            cloudinary: r.hasBlogTitlePic,
            imgSrcSets: e.imgSrcSets,
            lazy: !0
          }, null, 8, ["img", "cloudinary", "imgSrcSets"]),
          t[0] || (t[0] = Ht('<figure class="d-none d-lg-block"><svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%"><path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path></svg></figure><figure class="d-lg-none mb-n1"><svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1"><path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></svg></figure>', 2))
        ])
      ])) : _("", !0),
      f("div", ks, [
        f("div", Ts, [
          L(o, { level: "h3" }, {
            default: he(() => [
              f("a", {
                class: "card__title text-inherit",
                ref: "title",
                href: u.url,
                target: u.target
              }, S(r.combinedTitle), 9, Bs)
            ]),
            _: 1
          }),
          f("p", { innerHTML: r.truncatedExcerpt }, null, 8, Fs),
          L(l, Mt(It(r.cardFooterData)), null, 16)
        ])
      ])
    ])) : r.productValue ? (d(), h(N, { key: 1 }, [
      u.blogTitlePic ? (d(), h("div", Ns, [
        L(n, {
          img: r.hasExtension,
          cloudinary: r.hasBlogTitlePic,
          imgSrcSets: e.imgSrcSets,
          lazy: !0
        }, null, 8, ["img", "cloudinary", "imgSrcSets"]),
        f("div", qs, [
          u.tag ? (d(), h("span", {
            key: 0,
            class: "card__img-tag",
            style: ee({ "background-color": u.tag.bgColor, color: u.tag.color })
          }, S(u.tag.text), 5)) : _("", !0),
          L(o, {
            level: "h4",
            classes: "card__img-headline text-light text-center"
          }, {
            default: he(() => [
              f("p", Os, S(u.title), 1)
            ]),
            _: 1
          }),
          t[1] || (t[1] = f("div", { class: "card-img-cutoff" }, null, -1))
        ])
      ])) : _("", !0),
      f("div", Ps, [
        (d(!0), h(N, null, H(r.subPointsList(r.productValue), (g, m) => (d(), h(N, null, [
          L(o, {
            class: A(r.headlineClassValue(m)),
            level: "h6",
            text: g.title
          }, null, 8, ["class", "text"]),
          (d(!0), h(N, null, H(g.subpoints, (p) => (d(), h("div", Rs, [
            p.hideIcon ? (d(), h("span", Ms)) : (d(), P(s, {
              key: 1,
              class: "card__check-mark-icon",
              icon: r.isIncluded(p.included),
              size: "medium"
            }, null, 8, ["icon"])),
            f("span", Is, S(p.subpoint), 1)
          ]))), 256))
        ], 64))), 256))
      ])
    ], 64)) : u.long ? (d(), h(N, { key: 2 }, [
      u.blogTitlePic ? (d(), h("div", Vs, [
        L(n, {
          img: r.hasExtension,
          cloudinary: r.hasBlogTitlePic,
          imgSrcSets: e.imgSrcSets,
          lazy: !0
        }, null, 8, ["img", "cloudinary", "imgSrcSets"])
      ])) : _("", !0),
      f("div", js, [
        u.scope ? (d(), h("div", Hs, S(u.scope), 1)) : _("", !0),
        L(o, { level: "h4" }, {
          default: he(() => [
            f("a", {
              ref: "title",
              class: "card__title text-inherit text-decoration-none text-reset mt-4 mb-4",
              href: u.url,
              target: u.target
            }, S(r.combinedTitle), 9, Us)
          ]),
          _: 1
        }),
        f("p", {
          class: "mb-4 mt-4",
          innerHTML: r.truncatedExcerpt
        }, null, 8, zs),
        f("ul", Gs, [
          (d(!0), h(N, null, H(r.subPointsList(u.subPoints), (g) => (d(), h("li", Ws, [
            f("span", null, S(g), 1)
          ]))), 256))
        ]),
        u.footer ? (d(), h("p", Js, S(u.footer), 1)) : _("", !0),
        u.cta ? (d(), h("div", Xs, [
          L(c, Mt(It(r.ctaValue)), null, 16)
        ])) : _("", !0)
      ])
    ], 64)) : (d(), h(N, { key: 3 }, [
      u.blogTitlePic ? (d(), h("div", Zs, [
        L(n, {
          img: r.hasExtension,
          cloudinary: r.hasBlogTitlePic,
          imgSrcSets: e.imgSrcSets,
          lazy: !0
        }, null, 8, ["img", "cloudinary", "imgSrcSets"]),
        t[2] || (t[2] = f("figure", { class: "ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1" }, [
          f("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1920 100.1"
          }, [
            f("path", {
              fill: "#fff",
              d: "M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            })
          ])
        ], -1))
      ])) : _("", !0),
      f("div", Ks, [
        f("div", $s, [
          L(o, { level: "h4" }, {
            default: he(() => [
              f("a", {
                ref: "title",
                class: "card__title text-inherit",
                href: u.url,
                target: u.target
              }, S(r.combinedTitle), 9, Ys)
            ]),
            _: 1
          }),
          f("p", { innerHTML: r.truncatedExcerpt }, null, 8, Qs)
        ]),
        f("div", eo, [
          L(l, Mt(It(r.cardFooterData)), null, 16)
        ])
      ])
    ], 64))
  ], 14, ws);
}
const ma = /* @__PURE__ */ j(Cs, [["render", to]]);
class Ye {
  constructor(t) {
    this.root = t, this.setOffsets(), this.setMarginTop(), this.firstChild = document.querySelector("main > *:first-child"), this.isUpdating = !1, this.maxPercentage = 100, this.lastPercentage = !1, this.header = document.querySelector("header"), this.headerSpacer = document.querySelector(".header__spacer"), this.main = document.querySelector("main"), this.setup(), this.bindEvents(), this.setStickyPosition();
  }
  bindEvents() {
    window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(ne.WINDOW_RESIZE, this.handleResize.bind(this)), document.addEventListener(ne.DIMENSIONS_CHANGED, this.handleDimensionsChanged.bind(this));
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
    var t, u;
    return this.isHeaderSticky() ? ((u = this.headerSpacer) == null ? void 0 : u.offsetHeight) || 0 : ((t = this.header) == null ? void 0 : t.offsetHeight) || 0;
  }
  isHeaderSticky() {
    if (!this.header) return !1;
    const t = window.getComputedStyle(this.header);
    return t.position === "fixed" || t.position === "absolute" || t.position === "sticky";
  }
  updateClipPath(t) {
    const u = "inset(0% 0% " + t + "%)";
    this.root.style.clipPath = u, this.isUpdating = !1;
  }
  isFirstChild(t) {
    return this.firstChild === t;
  }
  isSticky() {
    return this.root.classList.contains(T.STICKY);
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
  getPercentage(t, u) {
    this.calculatedOffsetTop = this.currentTopPosition - u - this.marginTop + this.getMainOffsetTop(), this.calculatedOffsetBottom = this.currentBottomPosition - u + this.getMainOffsetTop(), this.marginTop < 0 && (this.calculatedOffsetBottom -= this.marginTop);
    let a = t, i;
    if (this.calculatedOffsetBottom >= a) {
      let r = this.root.offsetHeight / 100;
      this.calculatedOffsetTop < 0 ? i = a / r : i = (a - this.calculatedOffsetTop) / r;
    } else
      i = this.maxPercentage;
    return parseFloat(i.toFixed(2));
  }
  isOutOfViewport(t) {
    return t >= this.maxPercentage || t < 0;
  }
  setStickyPosition() {
    const t = this.getHeaderHeight(), u = window.scrollY, a = this.root.offsetHeight - window.innerHeight, i = a > 0 ? this.offsetBottom : this.offsetBottom - t;
    let r = a > 0 ? -a : 0;
    r = r - this.marginTop;
    const n = this.getPercentage(u, r), o = this.isOutOfViewport(n), l = u > i - window.innerHeight;
    !o && l ? (this.spacer.style.height || (this.fixScrollPosition = !0, this.spacer.style.marginTop = this.marginTop + "px", this.spacer.style.height = this.height + "px", this.root.style.width = this.spacer.style.width = this.width + "px", this.root.style.height = this.height + "px", this.root.style.left = "50%", this.root.style.transform = "translateX(-50%)"), this.root.style.top = r + "px", this.root.classList.remove(T.OFF_SCREEN), this.root.classList.add(T.STICKY), this.updateClipPath(n)) : n === 0 ? (this.isUpdating = !1, this.root.classList.remove(T.OFF_SCREEN)) : this.disableStickyness(), this.updateDebugPositions();
  }
  disableStickyness() {
    this.root.classList.remove(T.STICKY), this.root.classList.add(T.OFF_SCREEN), this.root.style.top = "", this.root.style.clipPath = "", this.root.style.width = "", this.root.style.height = "", this.spacer.style.height = "", this.spacer.style.marginTop = "", this.root.style.left = "", this.root.style.transform = "", this.isUpdating = !1;
  }
  setup() {
    const t = this.root.parentNode;
    this.spacer = document.createElement("div"), t && (this.spacer.classList.add("sticky-scroller__spacer"), this.setDimensions(), t.insertBefore(this.spacer, this.root.nextSibling), this.root.dataset.stickyScroller = !0, this.setPositions(), this.setNextElementColor());
  }
  hasBackground() {
    return this.root.classList.contains(T.HAS_BACKGROUND) || x.getElementBgColor(this.root);
  }
  setNextElementColor() {
    if (!this.hasBackground()) return;
    const t = this.spacer.nextSibling, u = "--color-sticky-scroller";
    if (!t) return;
    const a = x.getElementBgColor(t) || x.getElementBgColor(t.firstChild);
    this.spacer.style.setProperty(u, a), this.spacer.classList.add(T.HAS_BACKGROUND);
  }
  setDimensions() {
    const t = document.body.getBoundingClientRect().width;
    this.width = this.root.clientWidth > t ? t : this.root.clientWidth, this.height = this.root.clientHeight, this.spacer.style.width = this.width + "px";
  }
  resetElements() {
    this.root.style.top = "", this.spacer.style.marginTop = "", this.root.style.height = this.root.style.width = this.spacer.style.width = this.spacer.style.height = "", this.root.style.clipPath = "", this.root.classList.remove(T.STICKY);
  }
  static init(t) {
    this.instances = [], [].forEach.call(t || document.querySelectorAll(this.rootSelector), (u) => {
      this.instances.push(new this(u));
    });
  }
  static getRootClass() {
    return this.rootSelector.substring(1);
  }
}
z(Ye, "rootSelector", ".is-sticky-scroller"), z(Ye, "instances", []);
const de = class de {
  constructor(t) {
    this.root = t, this.count = 1, this.selector = this.getCurrentSelector(), this.currentElements = this.root.querySelectorAll(this.selector), this.root.matches(this.selector) && (this.currentElements = this.mergeNodes(this.root, this.currentElements)), this.resetAnimation(), this.initialize();
  }
  resetAnimation() {
    this.root.querySelectorAll(`.${T.IS_STARTING}`).forEach((t) => {
      t.classList.remove(T.IS_STARTING);
    });
  }
  mergeNodes(t, u) {
    const a = Array.from(u);
    return a.unshift(t), a;
  }
  getCurrentSelector() {
    return `[data-utility-animation-step="${this.count}"]`;
  }
  updateCurrentElement(t) {
    const u = [];
    this.currentElements.forEach((a) => {
      t.srcElement !== a && u.push(a);
    }), this.currentElements = u;
  }
  handleAnimationEnd(t) {
    const u = de.getGroup(t.srcElement);
    if (u) {
      const a = parseInt(u.style.getPropertyValue(de.groupItemsLoadedProperty), 10) || 0;
      de.setGroupItemsLoaded(u, a + 1);
    }
    this.updateCurrentElement(t), !(this.currentElements.length > 0) && (this.count++, this.currentElements = this.root.querySelectorAll(this.getCurrentSelector()), this.currentElements !== null && this.currentElements.length > 0 ? this.startStepAnimation(this.currentElements) : this.setEnd());
  }
  startStepAnimation(t) {
    t.forEach((u) => {
      u.classList.add(T.IS_STARTING);
    });
  }
  setEnd() {
    this.root.setAttribute(de.endDataset, !0);
  }
  startAnimation() {
    this.startStepAnimation(this.currentElements);
  }
  static getGroup(t) {
    return t.closest(".utility-animation__group");
  }
  initialize() {
    this.root.addEventListener("animationend", (u) => {
      this.handleAnimationEnd(u);
    }), new MutationObserver((u) => {
      u.forEach((a) => {
        var i;
        a.type === "attributes" && a.attributeName.startsWith(de.inViewportDataset) && ((i = a.target) == null ? void 0 : i.getAttribute(de.inViewportDataset)) === "true" && this.startAnimation();
      });
    }).observe(this.root, { attributes: !0 });
  }
  static setGroupItemsLoaded(t, u) {
    t.style.setProperty(this.groupItemsLoadedProperty, u);
  }
  static hasPercentageOffset(t) {
    return t.root.classList.contains("utility-animation--percentage-offset");
  }
  static hasSmallOffset(t) {
    return t.root.classList.contains("utility-animation--small-offset");
  }
  static addObserver(t) {
    const i = (s) => {
      s.forEach((c) => {
        c.isIntersecting ? c.target.setAttribute(this.inViewportDataset, !0) : c.target.classList.contains("utility-animation--enter-exit") && c.target.removeAttribute(this.inViewportDataset);
      });
    }, r = new IntersectionObserver(i, {
      rootMargin: "0px 0px -200px 0px",
      threshold: 0
    }), n = new IntersectionObserver(i, {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4
    }), o = new IntersectionObserver(i, {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0
    });
    (t ? [t] : this.instances).forEach((s) => {
      de.hasSmallOffset(s) ? o.observe(s.root) : de.hasPercentageOffset(s) ? n.observe(s.root) : r.observe(s.root);
    });
  }
  static resetGroup(t) {
    this.setGroupItemsLoaded(t, 0), this.instances.forEach((u) => {
      if (this.getGroup(u.root) === t) {
        const i = u.root;
        u.currentElements = [i], i.removeAttribute("data-utility-animation-end"), u.startAnimation();
      }
    });
  }
  static initElement(t) {
    const u = t.$el ? t.$el : t, a = new this(u);
    return this.instances.push(a), a;
  }
  static init(t) {
    this.instances = [], [].forEach.call(t || document.querySelectorAll(this.rootSelector), (u) => {
      this.initElement(u);
    }), this.addObserver();
  }
  static isElementObserved(t) {
    return this.instances.some((u) => u.root === t);
  }
  static observeElementIfNotAlready(t) {
    let u;
    this.isElementObserved(t) || (u = this.initElement(t)), this.addObserver(u);
  }
  static getIndexStyle(t) {
    return `--utility-animation-index: ${t}`;
  }
};
z(de, "rootSelector", ".utility-animation"), z(de, "inViewportDataset", "data-utility-animation-in-viewport"), z(de, "endDataset", "data-utility-animation-end"), z(de, "instances", []), z(de, "groupItemsLoadedProperty", "--utility-animation-items-loaded");
let Fe = de;
const uo = {
  tagName: "blog-recent",
  computed: {
    classList() {
      return [
        "blog-recent utility-animation utility-animation--percentage-offset",
        `${this.hasBackground}`,
        `${this.skinClass}`,
        this.hideContainer === !0 ? "" : this.getSpacing,
        this.sticky === !0 ? Ye.rootSelector.substring(1) : "",
        "vue-component"
      ];
    },
    getSpacing() {
      return this.spacing ? this.spacing : "";
    },
    hasBackground() {
      return this.bgColor ? T.HAS_BACKGROUND : "";
    },
    blogRecentContainerClass() {
      return [
        "blog-recent__container fade-in-bottom",
        this.slider === !0 ? "js-slick-carousel" : "row mb-3",
        "vue-component"
      ];
    },
    hiddenContainer() {
      return this.slider === !1 ? this.hideContainer : !1;
    },
    skinClass() {
      return `${this.slider === !0 ? "has-slider" : ""}`;
    },
    itemClass() {
      return `${this.slider === !0 ? "mb-6 mb-lg-0 blog-recent__slide" : "col-sm-6 col-lg-4 mb-3 mb-sm-8"}`;
    },
    postsArray() {
      return typeof this.posts == "string" ? JSON.parse(this.posts) : this.posts;
    },
    caseStudies() {
      return this.caseStudies === !0;
    },
    carouselOptions() {
      const e = {
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
      return JSON.stringify(e);
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      const e = "h2-font-size";
      return this.headlineClasses ? x.hasFontSizeClass(this.headlineClasses) ? this.headlineClasses : `${e} ${this.headlineClasses}` : e;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : "font-size-2"}`;
    }
  },
  mounted() {
    this.$refs.root && (this.sticky && Ye.init([this.$refs.root]), Fe.init([this.$refs.root]));
  },
  methods: {
    event(e) {
      return e.layout !== "post";
    },
    blogTitleUrl(e) {
      return e.layout === "casestudies" ? e.blogtitlepic : this.imgUrl + e.blogtitlepic;
    },
    target(e) {
      return e.external ? "_blank" : "_self";
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
    posts: {
      type: [Array, String],
      default: []
    },
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
}, ro = {
  key: 0,
  class: "row"
}, ao = {
  class: "col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom",
  "data-utility-animation-step": "1"
}, io = ["data-hs-slick-carousel-options"], no = {
  key: 1,
  class: "blog-recent__cta-row row col-lg-12"
};
function so(e, t, u, a, i, r) {
  const n = De, o = ma, l = Le, s = lu;
  return r.postsArray.length > 0 ? (d(), h("div", {
    key: 0,
    class: A(r.classList),
    ref: "root"
  }, [
    r.skinClass !== "" ? (d(), h("div", {
      key: 0,
      class: "blog-recent__bg",
      style: ee({ "background-color": u.bgColor })
    }, null, 4)) : _("", !0),
    L(s, { hideContainer: r.hiddenContainer }, {
      default: he(() => {
        var c, g, m, p, b, B;
        return [
          u.headline ? (d(), h("div", ro, [
            f("div", ao, [
              L(n, {
                level: r.headlineLevelValue,
                text: u.headline,
                classes: r.headlineClassesValue
              }, null, 8, ["level", "text", "classes"]),
              u.subline ? (d(), h("span", {
                key: 0,
                class: A(r.sublineClassesValue)
              }, S(u.subline), 3)) : _("", !0)
            ])
          ])) : _("", !0),
          f("div", {
            class: A(r.blogRecentContainerClass),
            "data-hs-slick-carousel-options": r.carouselOptions,
            "data-utility-animation-step": "1"
          }, [
            (d(!0), h(N, null, H(r.postsArray, (k, D) => (d(), h(N, null, [
              D <= u.limit ? (d(), h("div", {
                key: 0,
                class: A(r.itemClass)
              }, [
                L(o, ce({ ref_for: !0 }, k, {
                  "blog-title-pic": r.blogTitleUrl(k),
                  "youtube-url": k.youtubeUrl,
                  date: k.date,
                  author: k.author,
                  target: r.target(k),
                  event: r.event(k),
                  dataAuthors: u.dataAuthors,
                  "external-language": k.externalLanguage
                }), null, 16, ["blog-title-pic", "youtube-url", "date", "author", "target", "event", "dataAuthors", "external-language"])
              ], 2)) : _("", !0)
            ], 64))), 256))
          ], 10, io),
          u.cta ? (d(), h("div", no, [
            L(l, {
              text: (c = u.cta) == null ? void 0 : c.text,
              button: (g = u.cta) == null ? void 0 : g.button,
              target: (m = u.cta) == null ? void 0 : m.target,
              width: (p = u.cta) == null ? void 0 : p.width,
              href: (b = u.cta) == null ? void 0 : b.href,
              external: (B = u.cta) == null ? void 0 : B.external
            }, null, 8, ["text", "button", "target", "width", "href", "external"])
          ])) : _("", !0)
        ];
      }),
      _: 1
    }, 8, ["hideContainer"])
  ], 2)) : _("", !0);
}
const oo = /* @__PURE__ */ j(uo, [["render", so]]), lo = {
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
}, co = {
  tagName: "carousel",
  components: {
    "carousel-item": lo
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null
    };
  },
  computed: {
    jsonItems() {
      return x.getJSON(this.items);
    },
    classList() {
      return ["carousel vue-component", this.bgColor ? T.HAS_BACKGROUND : ""];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : "",
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : ""
      ];
    }
  },
  mounted() {
    const e = this.$refs["row-section"];
    this.resizeObserver = new ResizeObserver((t) => {
      for (let u of t)
        u.target === e && (this.clientWidth = u.contentRect.width);
    }), e && (this.resizeObserver.observe(e), window.addEventListener("resize", this.updateClientWidth));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      var e;
      this.clientWidth = (e = this.$refs["row-section"]) == null ? void 0 : e.clientWidth;
    }
  },
  props: {
    items: Array,
    bgColor: String
  }
}, fo = { class: "carousel__container" }, ho = { class: "carousel__row" }, go = {
  class: "carousel__row-section",
  ref: "row-section"
}, po = { class: "carousel__row-section" };
function mo(e, t, u, a, i, r) {
  const n = ht("carousel-item");
  return d(), h("div", {
    class: A(r.classList),
    ref: "carousel",
    style: ee(r.style)
  }, [
    f("div", fo, [
      f("div", ho, [
        f("section", go, [
          (d(!0), h(N, null, H(r.jsonItems, (o, l) => (d(), P(n, {
            item: o,
            key: l
          }, null, 8, ["item"]))), 128))
        ], 512),
        f("section", po, [
          (d(!0), h(N, null, H(r.jsonItems, (o, l) => (d(), P(n, {
            item: o,
            key: l
          }, null, 8, ["item"]))), 128))
        ])
      ])
    ])
  ], 6);
}
const bo = /* @__PURE__ */ j(co, [["render", mo]]), vo = {
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
}, _o = {
  key: 0,
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, yo = {
  class: "streamline-icon",
  viewBox: "0 0 42 28",
  xmlns: "http://www.w3.org/2000/svg"
}, Do = {
  class: "streamline-icon",
  viewbox: "0 0 39 39",
  xmlns: "http://www.w3.org/2000/svg"
};
function xo(e, t, u, a, i, r) {
  return u.icon === "site/mail" && u.noSpan === !0 ? (d(), h("svg", _o, [
    f("title", null, S(u.icon), 1),
    t[0] || (t[0] = Ht('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
  ])) : u.icon == "site/mail" ? (d(), h("span", {
    key: 1,
    class: A(r.classList)
  }, [
    (d(), h("svg", yo, [
      f("title", null, S(u.icon), 1),
      t[1] || (t[1] = Ht('<g id="envelope"><path d="M3.5 28C1.56975 28 0 26.4303 0 24.5L0 3.5C0 1.56975 1.56975 0 3.5 0L38.5 0C40.4303 0 42 1.56975 42 3.5L42 24.5C42 26.4303 40.4303 28 38.5 28L3.5 28ZM3.5 1.75C2.53575 1.75 1.75 2.53575 1.75 3.5L1.75 24.5C1.75 25.466 2.53575 26.25 3.5 26.25L38.5 26.25C39.466 26.25 40.25 25.466 40.25 24.5L40.25 3.5C40.25 2.53575 39.466 1.75 38.5 1.75L3.5 1.75Z" class="a"></path><path d="M15.9999 11C15.8292 11 15.6621 10.9526 15.5181 10.8646L0.405689 1.55692C0.206584 1.43338 0.0697 1.24385 0.0199238 1.02385C-0.0298524 0.803846 0.0145906 0.575385 0.142587 0.385846C0.307915 0.143846 0.587017 0 0.889229 0C1.05989 0 1.227 0.0473846 1.37099 0.135385L15.9999 9.14523L30.6287 0.135385C30.7709 0.0473846 30.938 0 31.1105 0C31.4127 0 31.6918 0.143846 31.8571 0.385846C31.9869 0.577077 32.0296 0.802154 31.9798 1.02385C31.93 1.24554 31.7931 1.43338 31.594 1.55692L16.4834 10.8646C16.3376 10.9526 16.1705 11 15.9999 11Z" transform="translate(5 7)" class="a"></path><path d="M0.888628 5C0.57038 5 0.273466 4.83833 0.117008 4.58C-0.126568 4.18167 0.0227782 3.67167 0.447703 3.44333L6.67045 0.11C6.80379 0.0383333 6.95669 0 7.11137 0C7.42962 0 7.72653 0.16 7.88299 0.42C8.12657 0.818333 7.97722 1.32833 7.5523 1.55667L1.32955 4.89C1.19621 4.96167 1.04331 5 0.888628 5Z" transform="translate(5 17)" class="a"></path><path d="M7.11141 5C6.95673 5 6.80382 4.96167 6.67048 4.89L0.447659 1.55667C0.241417 1.44667 0.0938478 1.26667 0.0316196 1.05333C-0.0306086 0.838333 -0.000383478 0.613333 0.116961 0.42C0.275198 0.16 0.570338 0 0.888591 0C1.04327 0 1.19618 0.0383333 1.3313 0.11L7.55234 3.44333C7.75858 3.55333 7.90615 3.73333 7.96838 3.94667C8.03061 4.16167 8.00038 4.38667 7.88304 4.58C7.7248 4.83833 7.42966 5 7.11141 5Z" transform="translate(29 17)" class="a"></path></g>', 1))
    ]))
  ], 2)) : u.icon == "site/phone" ? (d(), h("span", {
    key: 2,
    class: A(r.classList)
  }, [
    (d(), h("svg", Do, [
      f("title", null, S(u.icon), 1),
      t[2] || (t[2] = f("g", {
        id: "phone",
        transform: "matrix(0.9848077 0.17364818 -0.17364818 0.9848077 5.730377 0)"
      }, [
        f("path", {
          d: "M25.076 32C23.9878 32 22.9343 31.6841 22.0326 31.0871C13.6133 25.4928 6.50909 18.3887 0.914793 9.97086C-0.531095 7.79022 -0.237464 4.86645 1.61478 3.0184L3.48511 1.14529C4.22405 0.406349 5.20653 0 6.25303 0C7.29952 0 8.282 0.406349 9.02095 1.14529L12.436 4.55612C13.9598 6.08271 13.9598 8.56534 12.4374 10.0919L11.7457 10.785C14.6097 14.2069 17.7937 17.3923 21.2157 20.2576L21.9059 19.5674C22.6532 18.8243 23.6329 18.4207 24.6738 18.4207C25.7203 18.4207 26.7028 18.8284 27.4418 19.5674L30.8568 22.9824C32.382 24.509 32.3806 26.9916 30.8554 28.5168L28.9837 30.3899C27.9441 31.428 26.5567 32 25.076 32ZM6.25303 1.39161C5.5781 1.39161 4.94491 1.65323 4.46898 2.12916L2.59865 4.00226C1.21399 5.38413 0.994115 7.57034 2.0754 9.19991C7.56532 17.4633 14.5387 24.4366 22.8021 29.9265C23.4757 30.3732 24.2619 30.6084 25.0774 30.6084C26.1851 30.6084 27.2247 30.1812 28.0026 29.4047L29.8743 27.5329C30.8582 26.5491 30.8582 24.9501 29.8757 23.9663C29.8757 23.9663 26.4607 20.5513 26.4607 20.5513C25.9847 20.0753 25.3516 19.8123 24.678 19.8123C24.0045 19.8123 23.3713 20.0739 22.8954 20.5499L21.7556 21.6896C21.6248 21.8204 21.4495 21.8928 21.263 21.8928C21.103 21.8928 20.9457 21.8371 20.8218 21.7341C16.981 18.5738 13.4324 15.0238 10.272 11.1816C10.0438 10.9032 10.0633 10.5025 10.3165 10.2478L11.4549 9.10668C12.4374 8.12281 12.4374 6.52107 11.4549 5.5372L8.03847 2.12916C7.56254 1.65323 6.92796 1.39161 6.25303 1.39161Z",
          transform: "translate(0.17733586 0.59690577)",
          class: "a"
        })
      ], -1))
    ]))
  ], 2)) : _("", !0);
}
const Hu = /* @__PURE__ */ j(vo, [["render", xo]]), Ao = {
  tagName: "cta-list",
  computed: {
    classList() {
      return ["cta-list vue-component", this.classes ? this.classes : ""];
    },
    ctaList() {
      return x.getJSON(this.list);
    }
  },
  methods: {
    text(e) {
      return e.text || e.ctaText;
    },
    href(e) {
      return e.href || e.ctaHref;
    },
    type(e) {
      return e.type || e.ctaType;
    }
  },
  props: {
    list: Array,
    classes: String
  }
}, Co = { class: "cta-list__item d-inline-block mr-3 mb-2" };
function wo(e, t, u, a, i, r) {
  const n = Le;
  return d(), h("div", {
    class: A(r.classList)
  }, [
    (d(!0), h(N, null, H(r.ctaList, (o) => (d(), h("div", Co, [
      L(n, ce({ ref_for: !0 }, o, {
        text: r.text(o),
        href: r.href(o),
        type: r.type(o)
      }), null, 16, ["text", "href", "type"])
    ]))), 256))
  ], 2);
}
const bt = /* @__PURE__ */ j(Ao, [["render", wo]]), Eo = {
  tagName: "form-select",
  computed: {
    required() {
      var e;
      return (e = this.field) != null && e.required ? "required" : null;
    }
  },
  props: {
    options: Array,
    field: Object,
    id: String
  }
}, So = ["for"], Lo = ["name", "required"], ko = { value: "" }, To = ["value"];
function Bo(e, t, u, a, i, r) {
  return d(), h(N, null, [
    f("label", {
      class: "input-label",
      for: u.id
    }, S(u.field.label), 9, So),
    f("select", {
      class: "form-control custom-select text-muted",
      name: u.id,
      required: r.required
    }, [
      f("option", ko, S(u.field.placeholder), 1),
      (d(!0), h(N, null, H(u.options, (n) => (d(), h("option", {
        value: n.value
      }, S(n.text), 9, To))), 256))
    ], 8, Lo)
  ], 64);
}
const ba = /* @__PURE__ */ j(Eo, [["render", Bo]]), Fo = {
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
      const e = Array.from(this.files.files);
      return this.filesLength > this.maxFilesValue ? e.slice(0, this.maxFilesValue) : e;
    },
    classList() {
      return [
        "form-attachments",
        this.hasError === !0 ? "has-error" : "",
        this.isDragging ? T.DRAGGING : "",
        "vue-component"
      ];
    },
    interactableClassList() {
      return ["form-attachments__interactable", this.hasErrors ? T.HAS_ERROR : ""];
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
      const e = this.extensions.map((t) => x.capitalize(t));
      return e == null ? void 0 : e.join(", ");
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensions.map((e) => `.${e}`).join(",");
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
    var e, t;
    this.root = this.$refs.root, this.interactable = this.$refs.interactable, this.button = this.$refs.button, this.textElement = this.$refs.text, this.file = this.$refs.file, this.error = this.$refs.error, this.base64 = this.$refs.base64, this.bindEvents(), (t = (e = window.i18n) == null ? void 0 : e.loader) == null || t.then(() => {
      var u, a, i;
      this.wrongTypeText = (u = window.i18n) == null ? void 0 : u.translate("formAttachmentsWrongType"), this.maxFilesText = (a = window.i18n) == null ? void 0 : a.translate("formAttachmentsMaxFiles", this.maxFilesValue), this.maxSizeText = (i = window.i18n) == null ? void 0 : i.translate("formAttachmentsMaxSize");
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener("drag", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragstart", this.handleDragStart.bind(this)), this.interactable.addEventListener("dragover", this.handleDragOver.bind(this)), this.interactable.addEventListener("dragenter", this.handleDragOver.bind(this)), this.interactable.addEventListener("drop", this.handleDrop.bind(this)), this.interactable.addEventListener("dragleave", this.handleDrop.bind(this)), this.interactable.addEventListener("dragend", this.handleDrop.bind(this)), this.interactable.addEventListener("click", this.handleAddAttachment.bind(this)), document.addEventListener(ne.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));
      const e = x.getParent(this.root, "form");
      e && e.addEventListener("reset", this.reset.bind(this));
    },
    handleFormAttachmentError(e) {
      this.showError(this.maxSizeText);
    },
    handleDragStart(e) {
      e.preventDefault(), e.stopPropagation();
    },
    handleDragOver(e) {
      e.preventDefault(), e.stopPropagation(), window.clearTimeout(this.dropTimeout), this.isDragging = !0;
    },
    handleDrop(e) {
      var u;
      e.preventDefault(), e.stopPropagation();
      const t = (u = e == null ? void 0 : e.dataTransfer) == null ? void 0 : u.files;
      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = !1, e.type === "drop" && this.handleDroppedFiles(t);
      }, 50);
    },
    isAllowedFileExtension(e) {
      var i;
      if (!e) return;
      const t = (i = this.file.getAttribute("accept")) == null ? void 0 : i.toLowerCase(), u = (t == null ? void 0 : t.split(",")) || [], a = x.getExtension(e.name);
      return u.includes(`.${a}`);
    },
    isUnderMaxSize(e) {
      if (!(!e || !e.size))
        return e.size <= this.maxSize;
    },
    handleDroppedFiles(e) {
      const t = this.getErrors(e);
      if (t) return this.showError(t);
      this.appendDroppedFiles(e);
    },
    handleAddAttachment() {
      this.file.click();
    },
    restoreDataTransfer() {
      this.file.files = this.files.files;
    },
    showError(e) {
      this.restoreDataTransfer(), this.setErrorText(e), this.hasError = !0;
    },
    setErrorText(e) {
      this.error && (this.error.innerText = e);
    },
    reset() {
      this.file.files = null, this.files = new DataTransfer(), this.resetError();
    },
    resetError() {
      this.setErrorText(this.requiredMsg), this.hasError = !1;
    },
    appendDroppedFiles(e) {
      this.base64 && (this.isRequired && (this.file.required = !1), this.appendFiles(e));
    },
    areFilesAllowed(e) {
      return Array.from(e).every((t) => this.isAllowedFileExtension(t));
    },
    getErrors(e) {
      if (!this.areFilesAllowed(e)) return this.wrongTypeText;
      if (this.files.files.length + e.length > this.maxFilesValue) return this.maxFilesText;
      if (!Array.from(e).every((t) => this.isUnderMaxSize(t))) return this.maxSizeText;
    },
    appendFiles(e) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);
      Array.from(e).forEach((t) => {
        this.files.items.add(t);
      }), this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length, this.file.files = this.files.files, this.resetError();
    },
    handleChange(e) {
      var a;
      const t = (a = e == null ? void 0 : e.target) == null ? void 0 : a.files, u = this.getErrors(t);
      if (u) return this.showError(u);
      this.appendFiles(t);
    },
    handleClick(e) {
      this.files.files[e] && (this.files.items.remove(e), this.syncFiles());
    },
    toSize(e) {
      return x.toSize(e);
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
}, No = {
  tagName: "form-radio",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var e;
      return (e = this.radio) != null && e.required ? "required" : null;
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
    changed(e) {
      this.$emit("action-changed", e.changeAction || null);
    }
  }
}, qo = { class: "form__radio-control mb-1 vue-component" }, Oo = ["data-form-group", "required", "name", "id"], Po = ["for"], Ro = ["name", "id", "placeholder", "data-form-group"], Mo = ["name", "id", "data-form-group", "required"], Io = ["for", "innerHTML"];
function Vo(e, t, u, a, i, r) {
  var n, o, l;
  return d(), h("div", qo, [
    (n = u.radio) != null && n.placeholder ? (d(), h(N, { key: 0 }, [
      f("input", {
        class: "form__radio",
        type: "radio",
        "data-form-group": u.group,
        required: r.required,
        name: r.otherId,
        id: r.otherId
      }, null, 8, Oo),
      f("label", {
        class: "form__radio-label",
        for: r.otherId
      }, null, 8, Po),
      f("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: u.name,
        id: r.idValue,
        placeholder: (o = u.radio) == null ? void 0 : o.placeholder,
        "data-form-group": u.group
      }, null, 8, Ro)
    ], 64)) : (d(), h(N, { key: 1 }, [
      f("input", {
        class: "form__radio",
        type: "radio",
        name: u.name,
        id: r.idValue,
        "data-form-group": u.group,
        required: r.required,
        onChange: t[0] || (t[0] = (s) => r.changed(u.radio))
      }, null, 40, Mo),
      f("label", {
        class: "form__radio-label",
        for: r.idValue,
        innerHTML: (l = u.radio) == null ? void 0 : l.label
      }, null, 8, Io)
    ], 64))
  ]);
}
const Uu = /* @__PURE__ */ j(No, [["render", Vo]]), jo = {
  tagName: "form-radios",
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      var e;
      return (e = this.radio) != null && e.required ? "required" : null;
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
}, Ho = ["data-msg"], Uo = { class: "d-flex flex-wrap" };
function zo(e, t, u, a, i, r) {
  var o, l;
  const n = Uu;
  return d(), h(N, null, [
    f("label", {
      class: "form__label input-label",
      "data-msg": r.message
    }, S((o = u.field) == null ? void 0 : o.label), 9, Ho),
    f("div", Uo, [
      (d(!0), h(N, null, H((l = u.field) == null ? void 0 : l.radios, (s) => (d(), P(n, {
        class: "pr-10",
        radio: s,
        group: u.id,
        name: u.id,
        id: u.field.id + s.id,
        onActionChanged: t[0] || (t[0] = (c) => e.$emit("action-changed", c))
      }, null, 8, ["radio", "group", "name", "id"]))), 256))
    ])
  ], 64);
}
const va = /* @__PURE__ */ j(jo, [["render", zo]]), Go = {
  tagName: "form-checkbox",
  computed: {
    otherId() {
      return `${this.idValue}_checkbox`;
    },
    required() {
      var e;
      return (e = this.checkbox) != null && e.required ? "required" : null;
    },
    idValue() {
      return this.id ? this.id : this.checkbox.id;
    }
  },
  methods: {
    handleChange(e) {
      const u = e.currentTarget.value;
      this.$emit(ne.FORM_FIELD_UPDATED, { value: u, id: this.id });
    }
  },
  props: {
    checkbox: Object,
    group: String,
    id: String
  }
}, Wo = { class: "form__checkbox-control custom-control custom-checkbox mb-1 vue-component" }, Jo = ["data-form-group", "required", "name", "id"], Xo = ["for"], Zo = ["name", "id", "placeholder", "data-form-group"], Ko = ["name", "id", "data-form-group", "required"], $o = ["for", "innerHTML"];
function Yo(e, t, u, a, i, r) {
  var n, o, l;
  return d(), h("div", Wo, [
    (n = u.checkbox) != null && n.placeholder ? (d(), h(N, { key: 0 }, [
      f("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        "data-form-group": u.group,
        required: r.required,
        name: r.otherId,
        id: r.otherId,
        onChange: t[0] || (t[0] = (...s) => r.handleChange && r.handleChange(...s))
      }, null, 40, Jo),
      f("label", {
        class: "form__checkbox-label custom-control-label",
        for: r.otherId
      }, null, 8, Xo),
      f("input", {
        class: "form__input form-control form-control-sm",
        type: "text",
        name: r.idValue,
        id: r.idValue,
        placeholder: (o = u.checkbox) == null ? void 0 : o.placeholder,
        "data-form-group": u.group
      }, null, 8, Zo)
    ], 64)) : (d(), h(N, { key: 1 }, [
      f("input", {
        class: "form__checkbox form-check-input custom-control-input",
        type: "checkbox",
        name: r.idValue,
        id: r.idValue,
        "data-form-group": u.group,
        required: r.required,
        onChange: t[1] || (t[1] = (...s) => r.handleChange && r.handleChange(...s))
      }, null, 40, Ko),
      f("label", {
        class: "form__checkbox-label custom-control-label",
        for: r.idValue,
        innerHTML: (l = u.checkbox) == null ? void 0 : l.label
      }, null, 8, $o)
    ], 64))
  ]);
}
const zu = /* @__PURE__ */ j(Go, [["render", Yo]]), Qo = {
  tagName: "form-checkboxes",
  computed: {
    required() {
      var e;
      return (e = this.checkbox) != null && e.required ? "required" : null;
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
}, el = ["data-msg"];
function tl(e, t, u, a, i, r) {
  var o, l;
  const n = zu;
  return d(), h(N, null, [
    f("label", {
      class: "form__label input-label",
      "data-msg": r.message
    }, S((o = u.field) == null ? void 0 : o.label), 9, el),
    (d(!0), h(N, null, H((l = u.field) == null ? void 0 : l.checkboxes, (s) => (d(), P(n, {
      checkbox: s,
      group: r.groupId,
      id: u.field.id + s.id
    }, null, 8, ["checkbox", "group", "id"]))), 256))
  ], 64);
}
const _a = /* @__PURE__ */ j(Qo, [["render", tl]]), ul = {
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
      var e, t;
      return (t = (e = this.field) == null ? void 0 : e.showIn) == null ? void 0 : t.map((u) => "show-in-" + u).join(" ");
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
    this.$refs.root && Fe.init([this.$refs.root]);
    const e = this.$parent;
    if (!e) return;
    const t = e.$el;
    t && t.addEventListener("reset", this.handleReset);
  },
  methods: {
    getRequiredMsg(e) {
      return e.requiredMsg ? e.requiredMsg : "";
    },
    handleChange(e) {
      const u = e.currentTarget.value;
      this.edited = !0, this.userValue = u, this.$emit(ne.FORM_FIELD_UPDATED, { value: u, id: this.id });
    },
    handleChangeTextarea(e) {
      const u = e.currentTarget.value;
      this.$emit(ne.FORM_FIELD_UPDATED, { value: u, id: this.id });
    },
    handleReset() {
      this.edited = !1, this.userValue = null;
    },
    handleFormFieldUpdate(e) {
      this.$emit(ne.FORM_FIELD_UPDATED, e);
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
}, rl = ["for"], al = ["id", "name", "placeholder", "required", "readonly", "data-msg"], il = ["name", "value"], nl = ["for"], sl = ["type", "id", "name", "data-msg", "value", "placeholder", "required", "readonly"], ol = ["id"];
function ll(e, t, u, a, i, r) {
  var m, p, b, B, k, D;
  const n = zu, o = _a, l = Uu, s = va, c = Fo, g = ba;
  return u.field.id !== "_gotcha" ? (d(), h("div", {
    key: 0,
    class: A(r.classList),
    "data-utility-animation-step": "1",
    ref: "root"
  }, [
    u.field.type === "textarea" ? (d(), h(N, { key: 0 }, [
      f("label", {
        class: "input-label",
        for: u.id
      }, S(u.field.label), 9, rl),
      f("textarea", {
        class: "form-control form-textarea",
        onChange: t[0] || (t[0] = (...y) => r.handleChangeTextarea && r.handleChangeTextarea(...y)),
        onKeyup: t[1] || (t[1] = (...y) => r.handleChangeTextarea && r.handleChangeTextarea(...y)),
        id: u.id,
        name: u.id,
        rows: "4",
        placeholder: r.placeholder,
        required: r.required,
        readonly: r.readonly,
        "data-msg": r.getRequiredMsg(u.field)
      }, null, 40, al)
    ], 64)) : u.field.type === "checkbox" ? (d(), P(n, {
      key: 1,
      checkbox: u.field,
      id: u.id,
      onFormFieldUpdated: t[2] || (t[2] = (y) => r.handleFormFieldUpdate(y))
    }, null, 8, ["checkbox", "id"])) : u.field.type === "hidden" ? (d(), h("input", {
      key: 2,
      type: "hidden",
      name: u.id,
      value: r.value
    }, null, 8, il)) : u.field.checkboxes ? (d(), P(o, {
      key: 3,
      field: u.field,
      id: u.id
    }, null, 8, ["field", "id"])) : u.field.type === "radio" ? (d(), P(l, {
      key: 4,
      radio: u.field,
      id: u.id
    }, null, 8, ["radio", "id"])) : u.field.radios ? (d(), P(s, {
      key: 5,
      field: u.field,
      id: u.id,
      onActionChanged: t[3] || (t[3] = (y) => e.$emit("action-changed", y))
    }, null, 8, ["field", "id"])) : u.field.type === "file" ? (d(), P(c, {
      key: 6,
      description: (m = u.field.formAttachments) == null ? void 0 : m.description,
      text: (p = u.field.formAttachments) == null ? void 0 : p.text,
      extensions: (b = u.field.formAttachments) == null ? void 0 : b.extensions,
      maxSize: (B = u.field.formAttachments) == null ? void 0 : B.maxSize,
      id: (k = u.field.formAttachments) == null ? void 0 : k.id,
      required: (D = u.field.formAttachments) == null ? void 0 : D.required,
      "required-msg": r.getRequiredMsg(u.field.formAttachments)
    }, null, 8, ["description", "text", "extensions", "maxSize", "id", "required", "required-msg"])) : u.field.type === "select" ? (d(), P(g, {
      key: 7,
      field: u.field,
      options: u.options,
      id: u.id
    }, null, 8, ["field", "options", "id"])) : u.field.type ? (d(), h(N, { key: 8 }, [
      f("label", {
        class: "input-label",
        for: u.id
      }, S(u.field.label), 9, nl),
      f("input", {
        ref: "input",
        onChange: t[4] || (t[4] = (...y) => r.handleChange && r.handleChange(...y)),
        onKeyup: t[5] || (t[5] = (...y) => r.handleChange && r.handleChange(...y)),
        type: u.field.type,
        id: u.id,
        name: u.id,
        class: "form-control",
        "data-msg": r.getRequiredMsg(u.field),
        value: r.value,
        placeholder: r.placeholder,
        required: r.required,
        readonly: r.readonly
      }, null, 40, sl)
    ], 64)) : _("", !0),
    u.hasError ? (d(), h("div", {
      key: 9,
      id: r.errorId,
      class: "invalid-feedback"
    }, S(r.getRequiredMsg(u.field)), 9, ol)) : _("", !0)
  ], 2)) : _("", !0);
}
const ya = /* @__PURE__ */ j(ul, [["render", ll]]), Ce = class Ce {
  constructor(t, u) {
    var a;
    t && (this.root = t, this.options = u, (a = this.options) != null && a.noInit || this.root.classList.add(T.INITIALIZED));
  }
  static getInstancesKey() {
    return this.rootSelector.substring(1);
  }
  static expose(t) {
    window[Ce.namespacePrefix] || (window[Ce.namespacePrefix] = {});
    const u = this.getInstancesKey();
    window[Ce.namespacePrefix][u] || (window[Ce.namespacePrefix][u] = []), window[Ce.namespacePrefix][u].push(t);
  }
  static getInstance(t) {
    const a = window[Ce.namespacePrefix][this.getInstancesKey()].filter((i) => (i == null ? void 0 : i.root) === t);
    return a ? a[0] : null;
  }
  static initElement(t, u) {
    const a = new this(t, u);
    return this.instances.push(a), this.expose(a), a;
  }
  static init(t) {
    this.instances = [];
    const u = t || document, a = `${this.rootSelector}:not(.${T.INITIALIZED})`;
    [].forEach.call(
      u.querySelectorAll(a),
      (i) => {
        this.initElement(i);
      }
    );
  }
};
z(Ce, "rootSelector", ""), z(Ce, "instances", []), z(Ce, "namespacePrefix", "baseComponents");
let Eu = Ce;
class At {
}
z(At, "rootSelector", ".form-attachments"), z(At, "base64Selector", ".form-attachments__base64");
const we = class we extends Eu {
  constructor(t, u) {
    var a;
    super(t, u), t && (this.root = t, this.formSelector = ".form__form", this.gotchaSelector = ".form__super-field", this.attachmentSelector = 'input[type="file"][required]', this.subjectSelector = 'input[name="_subject"]', this.companySelector = 'input[id="company"]', this.form = t.querySelector(this.formSelector), this.subject = t.querySelector(this.subjectSelector), this.company = t.querySelector(this.companySelector), this.groups = {}, this.minLengthOther = 1, this.options = u, this.addCustomValidationRules(), this.updateGotcha(), this.addValidation(), this.form && this.subject && this.hasUrlParameter() && this.prefillFormValues(), (a = this.options) != null && a.noEvents ? this.isCompanyForm() && this.addSubjectListener() : this.bindEvents());
  }
  addCustomValidationRules() {
    window.$ && $.validator && ($.validator.methods.email = function(t, u) {
      return this.optional(u) || we.regularExpression.test(t);
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
    for (const [u, a] of t.entries())
      this.prefillFormValue(u, a);
  }
  prefillFormValue(t, u) {
    const a = this.form;
    if (!a) return;
    const i = a.querySelector(`input[name="${t}"],textarea[name="${t}"]`);
    i && (i.value = u);
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
    we.reset(this.form);
  }
  static reset(t) {
    !t || !t.reset || (t.reset(), [].forEach.call(t.querySelectorAll(`.${T.VALID}`), (u) => {
      u.classList.remove(T.VALID);
    }), [].forEach.call(t.querySelectorAll(`.${T.ERROR}`), (u) => {
      u.classList.remove(T.ERROR);
    }));
  }
  handleDefaultSubmit(t) {
    t.preventDefault(), console.log("default submit");
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
    return x.uuid() + this.delimiter + t;
  }
  static getName(t) {
    if (t.includes(this.delimiter)) {
      const u = t.indexOf(this.delimiter);
      return t.slice(u + this.delimiter.length);
    }
    return t;
  }
  static getFormData(t) {
    const u = new FormData(t), a = [];
    for (let i of u)
      a.push(encodeURIComponent(i[0]) + "=" + encodeURIComponent(i[1]));
    return a.join("&");
  }
  ajaxSubmit() {
    const t = we.getFormData(this.form);
    fetch(this.form.action, {
      method: this.form.method || "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: t
    }).then((u) => {
      (u.status === 200 || u.status === 302) && this.ajaxSubmitCompleted();
    });
  }
  ajaxSubmitCompleted() {
    document.dispatchEvent(
      new CustomEvent(ne.FORM_AJAX_SUBMIT, {
        detail: { target: this.root }
      })
    );
  }
  triggerExternalValidation() {
    let t = !1;
    if (window.$) {
      const u = $(this.form);
      if (typeof u.validate != "function")
        return console.error("form.validate is not a function"), !0;
      t = u.validate().form();
    }
    return t;
  }
  validate(t) {
    let u = this.triggerExternalValidation();
    return (!this.isValid(t) || u === !1) && (t.stopImmediatePropagation(), t.preventDefault(), u = !1), u;
  }
  isValid(t) {
    t.stopImmediatePropagation();
    let u = !0, a = !0;
    this.hasAttachments() && (u = this.validateAttachments());
    for (const [i, r] of Object.entries(this.groups))
      this.isValidGroup(r) || (u = !1, this.addGroupError(r, a), a = !1);
    return u;
  }
  validateAttachments() {
    let t = !0;
    return [].forEach.call(this.form.querySelectorAll(At.base64Selector), (u) => {
      u.value || (t = !1);
    }), t || (t = !0, [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (u) => {
      u.files.length === 0 && (t = !1, this.addAttachmentError(u));
    }), t);
  }
  addAttachmentError(t) {
    const u = x.getParent(t, At.rootSelector);
    u !== null && u.classList.add(T.HAS_ERROR);
  }
  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }
  addGroupError(t, u) {
    for (let a = 0; a < t.length; a++) {
      const i = this.getGroupParent(t[a]);
      t[a].classList.add(T.ERROR), i && (u && x.scrollIntoView(i), this.addErrorMessage(i));
    }
  }
  addErrorMessage(t) {
    if (t && !t.classList.contains(T.ERROR)) {
      t.classList.add(T.ERROR);
      const u = document.createElement("div");
      u.innerHTML = t.dataset.msg, u.classList.add("invalid-feedback"), t.parentNode.insertBefore(u, t.nextSibling);
    }
  }
  delErrorMessage(t) {
    t && t.classList.contains(T.ERROR) && (t.classList.remove(T.ERROR), t.nextSibling.remove());
  }
  delGroupError(t) {
    for (let u = 0; u < t.length; u++) {
      const a = this.getGroupParent(t[u]);
      t[u].classList.remove(T.ERROR), a && this.delErrorMessage(a);
    }
  }
  isValidGroup(t) {
    const u = t.length;
    let a = !1;
    for (let i = 0; i < u; i++) {
      const r = t[i];
      if (r.type === "checkbox" && r.checked)
        a = !0;
      else if (r.type === "radio" && r.checked)
        a = !0;
      else {
        const n = r.closest('input[type="text"]');
        n && !a && n.value.length >= this.minLengthOther && (a = !0);
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
  groupFilter(t, u) {
    return t ? t.filter((a) => a.getAttribute("type") === u) : null;
  }
  handleGroupError(t, u) {
    t.checked ? this.delGroupError(u) : this.isValidGroup(u) || this.addGroupError(u);
  }
  handleLiveValidation(t) {
    const u = t.currentTarget;
    if (u) {
      const a = this.getGroupByName(u.dataset.formGroup);
      if (!a) return;
      const i = this.groupFilter(a, "checkbox"), r = this.groupFilter(a, "radio");
      u.getAttribute("type") === "checkbox" ? this.handleGroupError(u, i) : u.getAttribute("type") === "radio" ? this.handleGroupError(u, r) : this.isValidGroup(a) ? this.delGroupError(a) : this.addGroupError(a);
    }
  }
  getGroupParent(t) {
    var u;
    return (u = t.closest(".js-form-message")) == null ? void 0 : u.querySelector("[data-msg]");
  }
  addGroupValidation(t) {
    if (this.getGroupParent(t)) {
      const a = t.dataset.formGroup;
      this.groups[a] || (this.groups[a] = []), this.groups[a].push(t);
    }
  }
  updateGotcha() {
    const t = this.root.querySelector(this.gotchaSelector);
    t == null || t.classList.add(T.HIDDEN);
  }
  canHaveCustomSubmit() {
    return !this.root.classList.contains(we.noCustomSubmitClass);
  }
  static isOptionalInputInvisible(t) {
    var u;
    return ((u = t == null ? void 0 : t.parentNode) == null ? void 0 : u.classList.contains("form-field--show-in")) && t.offsetParent === null;
  }
  static getFormData(t) {
    if (t == null) return [];
    const u = t.querySelectorAll('input[type="text"], input[type="email"], textarea'), a = [];
    for (let i = 0; i < u.length; i++) {
      const r = u[i];
      if (this.isOptionalInputInvisible(r)) continue;
      let n;
      (r.type === "text" || r.type === "email" || r.tagName === "TEXTAREA") && (n = r.value), a.push({
        input: r,
        value: n
      });
    }
    return a;
  }
};
z(we, "rootSelector", ".form"), z(we, "instances", []), z(we, "delimiter", "-formHelper-"), z(we, "noCustomSubmitClass", "form--no-custom-submit"), z(we, "regularExpression", /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/);
let Se = we;
const cl = {
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
      var e;
      return [
        "form",
        `${x.isTrue(this.light) === !0 ? "is-light" : ""}`,
        `${x.isTrue(this.ajax) === !0 ? "form--ajax" : ""}`,
        `${x.isTrue(this.container) === !0 ? "container" : ""}`,
        `${x.isTrue(this.customValidation) === !0 ? "form--custom-validation" : ""}`,
        ((e = this.form) == null ? void 0 : e.noCustomSubmit) === !0 ? Se.noCustomSubmitClass : "",
        "vue-component"
      ];
    },
    novalidate() {
      return this.novalidateValue;
    },
    hasAnimationValue() {
      return x.isTrue(this.hasAnimation);
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
      return this.form.ctaPosition ? this.form.ctaPosition : x.isTrue(this.uncentered) ? "" : "justify-content-end";
    },
    method() {
      return this.form.method ? this.form.method : "post";
    },
    preparedBlocks() {
      const e = [];
      let t = 0, u = [];
      return this.form.fields.forEach((a) => {
        if (a.rowStart || a.rowEnd)
          a.rowStart ? (e[t] = u, u.push(a), a.rowEnd && (u = [], t++)) : a.rowEnd && (u.push(a), u = [], t++);
        else {
          if (u.push(a), e[t]) return;
          e[t] = u, u = [], t++;
        }
      }), e;
    }
  },
  created() {
    this.originalAction = this.formAction = this.form.action;
  },
  mounted() {
    this.formInstance = new Se(this.$refs.root), this.novalidateValue = "novalidate", this.$refs.headline && Fe.init([this.$refs.headline]);
  },
  methods: {
    hasError(e) {
      return this.errors[e.id];
    },
    getOptions(e) {
      return typeof e.options == "string" ? this.options[e.options] : e.options;
    },
    getBlockClassList(e) {
      return ["row mx-n3", `${e != null && e.rowClass ? e.rowClass : ""}`];
    },
    getFieldClassList(e) {
      return ["px-3", `${e.col ? "col-md-" + e.col : "col-md-12"}`];
    },
    getId(e) {
      const t = (e == null ? void 0 : e.radios) || (e == null ? void 0 : e.checkboxes), u = t ? t[0].id : e == null ? void 0 : e.id;
      return x.isTrue(this.hasUuid) ? Se.getId(u) : u;
    },
    updateAction(e) {
      e ? this.formAction = e : this.formAction = this.originalAction;
    },
    handleSubmit(e) {
      if (!this.validate()) return e.preventDefault();
    },
    handleFormFieldUpdate(e) {
      if (!e.id) return;
      const t = document.getElementById(e.id);
      t && this.validateField(t);
    },
    validateField(e) {
      const t = e.value, u = e.getAttribute("type"), a = e.hasAttribute("required");
      if (this.removeFieldError(e), u === "checkbox") {
        const i = e.checked;
        if (a && !i)
          return this.addFieldError(e), !1;
      } else {
        if (a && !t)
          return this.addFieldError(e), !1;
        if (u === "email" && !((r) => /\S+@\S+\.\S+/.test(r))(t))
          return this.addFieldError(e), !1;
      }
      return this.addFieldValid(e), !0;
    },
    addFieldValid(e) {
      e.classList.add(T.VALID);
    },
    removeFieldError(e) {
      delete this.errors[e.id], e.classList.remove(T.ERROR);
    },
    addFieldError(e) {
      this.errors[e.id] = !0, e.classList.remove(T.VALID), e.classList.add(T.ERROR);
    },
    validate() {
      const e = this.$refs.root.querySelectorAll(
        `.form-field:not(.${T.HIDDEN}) .form-control[required],
        .form-field:not(.${T.HIDDEN}) .form__checkbox[required]`
      );
      let t = !0;
      for (const u of e)
        this.validateField(u) || (t = !1);
      return t;
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
}, dl = { class: "row" }, fl = { class: "col-sm-12" }, hl = ["innerHTML"], gl = ["method", "action", "novalidate"];
function pl(e, t, u, a, i, r) {
  const n = De, o = ya, l = Le;
  return d(), h("div", {
    class: A(r.classList),
    ref: "root"
  }, [
    f("div", {
      class: A(r.rowClassList)
    }, [
      f("div", {
        class: A(r.wrapperClassList)
      }, [
        u.form.headline ? (d(), h("div", {
          key: 0,
          class: A(r.headlineClassList),
          "data-utility-animation-step": "1",
          ref: "headline"
        }, [
          f("div", dl, [
            f("div", fl, [
              L(n, {
                text: u.form.headline,
                level: u.form.level,
                id: u.form.id,
                classes: "text-center"
              }, null, 8, ["text", "level", "id"]),
              f("p", {
                class: A(r.sublineClassList),
                innerHTML: u.form.subline
              }, null, 10, hl)
            ])
          ])
        ], 2)) : _("", !0),
        f("form", {
          class: "form__form js-validate mt-6",
          method: r.method,
          action: i.formAction,
          novalidate: r.novalidate,
          onSubmit: t[1] || (t[1] = (...s) => r.handleSubmit && r.handleSubmit(...s))
        }, [
          (d(!0), h(N, null, H(r.preparedBlocks, (s) => (d(), h(N, null, [
            s.length > 0 ? (d(), h("div", {
              key: 0,
              class: A(r.getBlockClassList(s[0]))
            }, [
              (d(!0), h(N, null, H(s, (c) => (d(), h("div", {
                class: A(r.getFieldClassList(c))
              }, [
                L(o, {
                  field: c,
                  options: r.getOptions(c),
                  "replace-value": u.replaceValue,
                  id: r.getId(c),
                  "has-animation": r.hasAnimationValue,
                  onActionChanged: r.updateAction,
                  "has-error": r.hasError(c),
                  onFormFieldUpdated: t[0] || (t[0] = (g) => r.handleFormFieldUpdate(g))
                }, null, 8, ["field", "options", "replace-value", "id", "has-animation", "onActionChanged", "has-error"])
              ], 2))), 256))
            ], 2)) : _("", !0)
          ], 64))), 256)),
          f("div", {
            class: A(r.formClassList)
          }, [
            L(l, {
              text: u.form.ctaText,
              type: "submit",
              button: !0,
              skin: u.form.cta.skin,
              width: u.form.cta.width,
              analytics: u.analytics
            }, null, 8, ["text", "skin", "width", "analytics"])
          ], 2),
          t[2] || (t[2] = f("input", {
            type: "text",
            class: "form__super-field",
            name: "_gotcha"
          }, null, -1))
        ], 40, gl)
      ], 2)
    ], 2)
  ], 2);
}
const Da = /* @__PURE__ */ j(cl, [["render", pl]]), ml = {
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
}, bl = ["viewBox"], vl = ["fill", "points"];
function _l(e, t, u, a, i, r) {
  return d(), h("figure", {
    class: A("svgshape " + r.svgShapeClasses),
    style: ee("pointer-events: all;" + r.translateStyle)
  }, [
    (d(), h("svg", {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 " + r.svgShapeHeight + " " + r.svgShapeObliquity
    }, [
      f("polygon", {
        fill: r.svgShapeColor,
        points: r.points
      }, null, 8, vl)
    ], 8, bl))
  ], 6);
}
const Gu = /* @__PURE__ */ j(ml, [["render", _l]]), yl = {
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
        this.collapsed ? T.COLLAPSED : ""
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
      var e, t, u, a;
      return {
        "--color-contact-background": this.bgColor || ((e = this.contact) == null ? void 0 : e.bgColor),
        "--contact-copy-color": this.color || ((t = this.contact) == null ? void 0 : t.color),
        "--color-contact-box-background": this.boxBgColor || ((u = this.contact) == null ? void 0 : u.boxBgColor),
        "--contact-box-copy-color": this.boxColor || ((a = this.contact) == null ? void 0 : a.boxColor)
      };
    }
  }
}, Dl = { class: "contact__subline font-weight-bold font-size-2" }, xl = {
  key: 1,
  class: "pt-4 pt-lg-6 pb-6"
}, Al = {
  key: 0,
  class: "contact__person-quote"
}, Cl = { class: "contact__icon" }, wl = { class: "contact__image-quote" }, El = { class: "contact__image-spacer" }, Sl = { class: "contact__quote font-size-3 middle font-weight-light" }, Ll = { class: "d-flex flex-column" }, kl = { class: "font-weight-light" }, Tl = { class: "contact__image" }, Bl = { class: "contact__name font-size-4 my-6 mx-5" }, Fl = { class: "contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap" }, Nl = ["href"], ql = { class: "streamline-sm mr-4" }, Ol = { class: "contact__detail-text" }, Pl = {
  key: 0,
  class: "contact__notes"
}, Rl = { class: "contact__notes-spacing streamline-sm mr-4" }, Ml = {
  key: 0,
  class: "contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
}, Il = ["href"], Vl = {
  key: 1,
  class: "contact__mail w-100 px-5 d-flex align-items-center"
}, jl = ["href"], Hl = {
  key: 0,
  class: "contact__detail-quote"
}, Ul = ["href"], zl = { class: "streamline-sm mr-4" }, Gl = {
  key: 0,
  class: "contact__notes"
}, Wl = { class: "contact__notes-spacing streamline-sm mr-4" };
function Jl(e, t, u, a, i, r) {
  const n = Gu, o = De, l = Da, s = bt, c = Ne, g = qe, m = Hu;
  return d(), h(N, null, [
    u.svgShape ? (d(), P(n, {
      key: 0,
      align: u.svgShape.align,
      peak: u.svgShape.peak,
      spacing: "mt-8 mt-lg-10",
      color: "var(--color-bg-grey)"
    }, null, 8, ["align", "peak"])) : _("", !0),
    u.contact ? (d(), h("div", {
      key: 1,
      class: A(r.classList),
      style: ee(r.styleObject)
    }, [
      f("div", {
        class: A(r.contactContainerClass)
      }, [
        f("div", {
          class: A(r.contactRowClass)
        }, [
          u.collapsed ? _("", !0) : (d(), h("div", {
            key: 0,
            class: A(["contact__form", r.contactFormClass]),
            "data-utility-animation-step": "1"
          }, [
            L(o, {
              text: u.contact.headline,
              classes: u.contact.headlineClasses,
              level: u.level
            }, null, 8, ["text", "classes", "level"]),
            f("span", Dl, S(u.contact.subline), 1),
            u.contact.form ? (d(), P(l, {
              key: 0,
              form: u.contact.form,
              ajax: u.ajax,
              uncentered: "false"
            }, null, 8, ["form", "ajax"])) : _("", !0),
            u.contact.buttons ? (d(), h("div", xl, [
              L(s, {
                list: u.contact.buttons
              }, null, 8, ["list"])
            ])) : _("", !0)
          ], 2)),
          f("div", {
            class: A(["contact__box", r.contactBoxClass]),
            "data-utility-animation-step": "1"
          }, [
            f("div", {
              class: A(["contact__person", r.contactLight])
            }, [
              u.quote ? (d(), h("div", Al, [
                f("div", Cl, [
                  L(c, { icon: "quote" })
                ]),
                f("div", wl, [
                  f("div", El, [
                    L(g, {
                      img: u.contact.person.image,
                      cloudinary: u.contact.person.cloudinary,
                      alt: u.contact.person.alt,
                      preset: "cardSmall",
                      lazy: ""
                    }, null, 8, ["img", "cloudinary", "alt"])
                  ])
                ]),
                f("div", Sl, S(u.contact.person.quote), 1),
                f("div", Ll, [
                  f("span", null, S(u.contact.person.quotee), 1),
                  f("span", kl, S(u.contact.person.quoteeTitle), 1)
                ])
              ])) : (d(), h(N, { key: 1 }, [
                f("div", Tl, [
                  L(g, {
                    img: u.contact.person.image,
                    cloudinary: u.contact.person.cloudinary,
                    alt: u.contact.person.alt,
                    preset: "cardSmall",
                    lazy: ""
                  }, null, 8, ["img", "cloudinary", "alt"])
                ]),
                f("div", Bl, S(u.contact.person.name), 1),
                f("div", Fl, [
                  (d(!0), h(N, null, H(u.contact.person.details, (p, b) => (d(), h("div", {
                    key: b,
                    class: A(["contact__detail w-100 px-5 d-flex align-items-center", { "mb-3 mb-lg-4": !b === u.contact.person.details.length - 1 }])
                  }, [
                    f("a", {
                      href: p.href,
                      class: "d-flex custom"
                    }, [
                      f("span", ql, [
                        p.icon === "site/mail" ? (d(), P(m, {
                          key: 0,
                          icon: "site/mail"
                        })) : (d(), P(m, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      f("span", Ol, S(p.text), 1)
                    ], 8, Nl),
                    p.notes ? (d(), h("div", Pl, [
                      f("span", Rl, [
                        p.icon === "site/mail" ? (d(), P(m, {
                          key: 0,
                          icon: "site/mail"
                        })) : (d(), P(m, {
                          key: 1,
                          icon: "site/phone"
                        }))
                      ]),
                      Ee(" " + S(p.notes), 1)
                    ])) : _("", !0)
                  ], 2))), 128)),
                  u.contact.person.number ? (d(), h("div", Ml, [
                    f("a", {
                      href: "tel:" + u.contact.person.number,
                      class: "custom"
                    }, [
                      L(m, { icon: "site/phone" }),
                      Ee(" " + S(u.contact.person.number), 1)
                    ], 8, Il)
                  ])) : _("", !0),
                  u.contact.person.mail ? (d(), h("div", Vl, [
                    f("a", {
                      href: "mailto:" + u.contact.person.mail,
                      class: "custom"
                    }, [
                      L(m, { icon: "site/mail" }),
                      Ee(" " + S(u.contact.person.mail), 1)
                    ], 8, jl)
                  ])) : _("", !0)
                ])
              ], 64))
            ], 2),
            u.quote ? (d(), h("div", Hl, [
              L(o, {
                text: u.contact.person.detailsHeader,
                level: "h4",
                classes: "contact__detail-headline"
              }, null, 8, ["text"]),
              (d(!0), h(N, null, H(u.contact.person.details, (p, b) => (d(), h("div", {
                key: b,
                class: A(["contact__detail font-size-2 w-100 d-flex align-items-center", { "mb-3 mb-lg-4": !b === u.contact.person.details.length - 1 }])
              }, [
                f("a", {
                  href: p.href,
                  class: "custom"
                }, [
                  f("span", zl, [
                    p.icon === "site/mail" ? (d(), P(m, {
                      key: 0,
                      icon: "site/mail"
                    })) : (d(), P(m, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  Ee(" " + S(p.text), 1)
                ], 8, Ul),
                p.notes ? (d(), h("div", Gl, [
                  f("span", Wl, [
                    p.icon === "site/mail" ? (d(), P(m, {
                      key: 0,
                      icon: "site/mail"
                    })) : (d(), P(m, {
                      key: 1,
                      icon: "site/phone"
                    }))
                  ]),
                  Ee(" " + S(p.notes), 1)
                ])) : _("", !0)
              ], 2))), 128))
            ])) : _("", !0)
          ], 2)
        ], 2)
      ], 2)
    ], 6)) : _("", !0)
  ], 64);
}
const Xl = /* @__PURE__ */ j(yl, [["render", Jl]]), Zl = {
  tagName: "content",
  props: {}
}, Kl = {
  class: "page-content",
  "aria-label": "Content"
};
function $l(e, t, u, a, i, r) {
  return d(), h(N, null, [
    f("main", Kl, [
      lt(e.$slots, "default")
    ]),
    lt(e.$slots, "below")
  ], 64);
}
const Yl = /* @__PURE__ */ j(Zl, [["render", $l]]), Ql = {
  tagName: "faq",
  data() {
    return {
      entriesWithState: []
    };
  },
  beforeMount() {
    var e;
    this.entriesWithState = (e = this.entries) == null ? void 0 : e.map((t, u) => (t.isOpen = null, t.isDetailsOpen = null, t.height = null, t.index = u, t.id = `entry-${u}`, t));
  },
  computed: {
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    classList() {
      return ["faq", "utility-animation", "container space-top-2", "vue-component"];
    },
    headlineClasses() {
      var e;
      return `faq__headline fade-in-bottom ${(e = this.headline) != null && e.classes ? this.headline.classes : ""}`;
    },
    headlineLevel() {
      var e;
      return (e = this.headline) != null && e.level ? this.headline.level : "h2";
    }
  },
  methods: {
    getDelay(e) {
      const t = e.index > 0 ? 200 : 0;
      return `--utility-animation-delay: ${`${e.index * t}ms`};`;
    },
    handleClick(e) {
      e.isOpen = e.isOpen === null ? !0 : null, e.isOpen && (e.isDetailsOpen = !0);
    },
    getElementByRef(e) {
      const t = this.$refs[e == null ? void 0 : e.id];
      if (!(!t || t.length === 0))
        return t[0];
    },
    afterLeave(e) {
      const t = this.getElementByRef(e);
      t && (e.isDetailsOpen = null, t.style.removeProperty("display"), t.style.removeProperty("height"), t.classList.remove(T.IS_COLLAPSING));
    },
    enter(e) {
      const t = this.getElementByRef(e);
      if (!t) return;
      const u = t.offsetHeight;
      t.style.removeProperty("height"), t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, setTimeout(() => {
        t.style.height = `${u}px`, t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom");
      });
    },
    leave(e) {
      const t = this.getElementByRef(e);
      if (!t) return;
      const u = t.offsetHeight;
      t.classList.add(T.IS_COLLAPSING), setTimeout(() => {
        t.style.height = `${u}px`;
      });
    }
  },
  props: {
    headline: Object,
    entries: Array,
    index: Number
  }
}, ec = { class: "row" }, tc = { class: "col-lg-8" }, uc = ["open"], rc = ["onClick", "open"], ac = { class: "faq__summary" }, ic = { class: "faq__icon-frame" }, nc = { class: "faq__icon" }, sc = ["innerHTML"];
function oc(e, t, u, a, i, r) {
  var l;
  const n = De, o = Ne;
  return d(), h("div", {
    class: A(r.classList),
    style: ee(r.style)
  }, [
    f("div", ec, [
      f("div", tc, [
        L(n, {
          text: (l = u.headline) == null ? void 0 : l.text,
          level: r.headlineLevel,
          classes: r.headlineClasses,
          "data-utility-animation-step": "1"
        }, null, 8, ["text", "level", "classes"]),
        (d(!0), h(N, null, H(i.entriesWithState, (s) => (d(), h("details", {
          open: s.isDetailsOpen,
          class: "fade-in-bottom",
          "data-utility-animation-step": "1",
          style: ee(r.getDelay(s))
        }, [
          f("summary", {
            onClick: ka((c) => r.handleClick(s), ["prevent"]),
            open: s.isDetailsOpen
          }, [
            f("div", ac, S(s.summary), 1),
            f("div", ic, [
              f("div", nc, [
                L(o, {
                  icon: "arrow-narrow",
                  direction: "clockwise",
                  size: "small"
                })
              ])
            ])
          ], 8, rc),
          L(Ta, {
            onAfterLeave: (c) => r.afterLeave(s),
            onEnter: (c) => r.enter(s),
            onBeforeLeave: (c) => r.leave(s)
          }, {
            default: he(() => [
              Ba(f("div", {
                class: "faq__content",
                ref_for: !0,
                ref: s.id
              }, [
                f("div", {
                  class: "faq__text",
                  innerHTML: s.text
                }, null, 8, sc)
              ], 512), [
                [Fa, s.isOpen]
              ])
            ]),
            _: 2
          }, 1032, ["onAfterLeave", "onEnter", "onBeforeLeave"])
        ], 12, uc))), 256))
      ])
    ])
  ], 6);
}
const lc = /* @__PURE__ */ j(Ql, [["render", oc]]), cc = {
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
      var e;
      return (e = this.item) == null ? void 0 : e.image;
    },
    title() {
      var e;
      return (e = this.item) == null ? void 0 : e.title;
    },
    headlineLevel() {
      var e;
      return (e = this.item) != null && e.level ? this.item.level : "h3";
    },
    headlineClasses() {
      var u;
      const e = "mb-2", t = (u = this.item) != null && u.classes ? this.item.classes : "font-size-2 bold";
      return `${e} ${t}`;
    },
    description() {
      var e;
      return (e = this.item) == null ? void 0 : e.description;
    },
    copy() {
      var e;
      return (e = this.item) == null ? void 0 : e.copy;
    },
    secondCopy() {
      var e;
      return (e = this.item) == null ? void 0 : e.copy_1;
    },
    list() {
      var e;
      return (e = this.item) == null ? void 0 : e.list;
    },
    secondList() {
      var e;
      return (e = this.item) == null ? void 0 : e.list_1;
    },
    ctaClasses() {
      var u;
      if (!this.item.cta) return;
      const e = "mt-5", t = ((u = this.item) == null ? void 0 : u.cta.align) === "right" ? "d-flex justify-content-end" : "";
      return `${e} ${t}`;
    }
  },
  methods: {},
  props: {
    classes: String,
    item: Object,
    index: Number,
    centered: String
  }
}, dc = { class: "bg-white d-flex flex-column h-100 py-5 px-3" }, fc = {
  key: 0,
  class: "w-100 max-w-10rem mb-5 mx-auto"
}, hc = ["innerHTML"], gc = ["innerHTML"], pc = {
  key: 4,
  class: "dashed m-0 flex-grow-1",
  style: { "margin-bottom": "10px !important" }
}, mc = ["innerHTML"], bc = ["innerHTML"], vc = {
  key: 6,
  class: "dashed m-0 p-0 flex-grow-1"
}, _c = ["innerHTML"], yc = {
  key: 7,
  class: "ctaClasses"
};
function Dc(e, t, u, a, i, r) {
  const n = qe, o = De, l = Le;
  return d(), h("div", {
    class: A(r.classList),
    "data-utility-animation-step": "1",
    style: ee(r.style)
  }, [
    f("div", dc, [
      r.image ? (d(), h("figure", fc, [
        L(n, {
          img: r.image.src,
          alt: r.image.alt,
          cloudinary: r.image.cloudinary
        }, null, 8, ["img", "alt", "cloudinary"])
      ])) : _("", !0),
      r.title ? (d(), P(o, {
        key: 1,
        text: r.title,
        level: r.headlineLevel,
        classes: r.headlineClasses
      }, null, 8, ["text", "level", "classes"])) : _("", !0),
      r.description ? (d(), h("p", {
        key: 2,
        class: "mb-0",
        innerHTML: r.description
      }, null, 8, hc)) : _("", !0),
      r.copy ? (d(), h("p", {
        key: 3,
        class: "mb-0 font-size-sm d-flex",
        style: { "padding-bottom": "5px" },
        innerHTML: r.copy
      }, null, 8, gc)) : _("", !0),
      r.list ? (d(), h("ul", pc, [
        (d(!0), h(N, null, H(r.list, (s) => (d(), h("li", {
          class: "feature-grid-item__text font-size-sm",
          innerHTML: s
        }, null, 8, mc))), 256))
      ])) : _("", !0),
      r.secondCopy ? (d(), h("p", {
        key: 5,
        class: "mb-0 font-size-sm d-flex",
        style: { "padding-bottom": "5px" },
        innerHTML: r.secondCopy
      }, null, 8, bc)) : _("", !0),
      r.secondList ? (d(), h("ul", vc, [
        (d(!0), h(N, null, H(r.secondList, (s) => (d(), h("li", {
          class: "feature-grid-item__text font-size-sm",
          innerHTML: s
        }, null, 8, _c))), 256))
      ])) : _("", !0),
      u.item.cta ? (d(), h("div", yc, [
        L(l, Mt(It(u.item.cta)), null, 16)
      ])) : _("", !0)
    ])
  ], 6);
}
const xa = /* @__PURE__ */ j(cc, [["render", Dc]]), xc = {
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
}, Ac = { class: "row" };
function Cc(e, t, u, a, i, r) {
  const n = De;
  return d(), h("div", {
    class: A(r.classList)
  }, [
    f("div", Ac, [
      f("div", {
        class: A(["col-sm-12", r.animationStepClass, r.headlineRowClassesValue]),
        "data-utility-animation-step": "1"
      }, [
        L(n, {
          level: u.level,
          text: u.text,
          classes: u.headlineClasses
        }, null, 8, ["level", "text", "classes"])
      ], 2)
    ])
  ], 2);
}
const Wu = /* @__PURE__ */ j(xc, [["render", Cc]]), wc = {
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
    this.$refs.root && Fe.init([this.$refs.root]);
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
}, Ec = {
  key: 0,
  class: "feature-grid__description w-lg-50 text-center mt-3 mx-auto"
}, Sc = {
  key: 1,
  class: "d-flex mt-8 justify-content-center fade-in-bottom",
  "data-utility-animation-step": "1"
}, Lc = {
  key: 2,
  class: "my-8"
}, kc = { class: "d-flex flex-wrap" }, Tc = {
  key: 3,
  class: "container pb-6"
};
function Bc(e, t, u, a, i, r) {
  const n = Wu, o = qe, l = xa;
  return d(), h("div", {
    class: "feature-grid utility-animation py-7",
    style: ee(r.styleObject),
    ref: "root"
  }, [
    f("div", {
      class: A(r.containerClasses)
    }, [
      L(n, {
        text: u.headline,
        centered: !0,
        classes: r.featureGridHeadlineRowClasses,
        utilityAnimationStep: "1",
        noContainer: !0
      }, null, 8, ["text", "classes"]),
      u.description ? (d(), h("p", Ec, S(u.description), 1)) : _("", !0),
      u.image ? (d(), h("figure", Sc, [
        L(o, ce(u.image, {
          img: u.image.src
        }), null, 16, ["img"])
      ])) : _("", !0),
      u.features ? (d(), h("div", Lc, [
        f("div", kc, [
          (d(!0), h(N, null, H(u.features, (s, c) => (d(), P(l, {
            key: c,
            classes: r.columnClass,
            index: c + 1,
            item: s,
            centered: u.centered
          }, null, 8, ["classes", "index", "item", "centered"]))), 128))
        ])
      ])) : _("", !0),
      u.footer ? (d(), h("div", Tc, S(u.footer), 1)) : _("", !0)
    ], 2)
  ], 4);
}
const Fc = /* @__PURE__ */ j(wc, [["render", Bc]]), Nc = {
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
      return x.getJSON(this.animation);
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
      return x.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    }
  },
  methods: {
    handleTextAnimationState(e) {
      this.textAnimationStep = e == null ? void 0 : e.step, this.isSecondLast = e == null ? void 0 : e.isSecondLast;
    },
    handleTextAnimationEnded(e) {
      this.isEnded = e;
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
}, qc = {
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
        `${this.show ? T.SHOW : ""}`,
        `${this.end ? T.END : ""}`,
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
      return x.isBelowBreakpoint("sm");
    },
    setHeight() {
      this.show = !1;
      const e = this.$refs.animation;
      if (!e) return;
      const t = e.querySelector(".letter-switcher__letter"), u = this.isLower ? t.offsetHeight * 2 : t.offsetHeight;
      e.style.height = u + "px", this.show = !0;
    },
    startAnimation() {
      [].forEach.call(
        this.$refs.root.querySelectorAll(".letter-switcher__group"),
        (u, a) => {
          const i = a * 0.3, r = 0.07 * u.children.length;
          u.style.animation = `letter-switch ${r}s ${i}s ease-out forwards`;
        }
      ), setTimeout(() => {
        this.end = !0, this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const e = this.$refs["end-text"], t = this.$refs.end;
      if (!e || !t) return this.emitEnded();
      e.style.width = "0px", t.classList.remove(T.COLLAPSED), this.emitEnded();
    },
    switchOverline(e) {
      const t = this.$refs.overline;
      t && (t.addEventListener("transitionend", () => {
        this.overline = this.overlineEnd, t.style.opacity = 1, e();
      }), t.style.opacity = 0);
    },
    emitEnded() {
      this.$emit(ne.ENDED);
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
}, Oc = {
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
}, Pc = {
  tagName: "hero",
  components: {
    "hero-pattern": Oc
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
        this.bgColor ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${x.hexToRgb(this.bgColor)}` : "",
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : "",
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : ""
      ];
    },
    setIntroStyle() {
      if (!this.isCentered) return;
      const e = this.$refs.intro;
      e && (this.introHeight = e.offsetHeight, e.style.height = "0");
    },
    handleLetterSwitcherEnded() {
      const e = this.$refs.intro;
      e && (e.style.height = `${this.introHeight}px`, e.style.opacity = 1);
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
        this.hasStickyScroller ? Ye.getRootClass() : ""
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
      const e = this.shapeFullscreen ? "100%" : "auto";
      return {
        ...this.shape.lottieSettings,
        width: "auto",
        height: e
      };
    },
    lottieFileData() {
      return this.shape ? this.shape.lottie ? this.shape.lottie : this.lottieData ? x.getJSON(this.lottieData) : null : null;
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
      return x.getJSON(this.hero);
    }
  },
  props: {
    hero: Object,
    lottieData: String
  }
}, Rc = { class: "hero__container container" }, Mc = {
  key: 0,
  class: "hero__back-row row"
}, Ic = { class: "hero__back-col col" }, Vc = { class: "hero__back back" }, jc = {
  key: 2,
  class: "hero__intro row",
  ref: "intro"
}, Hc = { class: "hero__intro-col col" }, Uc = {
  key: 0,
  class: "hero__overline"
}, zc = {
  key: 2,
  class: "hero__content-shape"
}, Gc = ["innerHTML"], Wc = {
  key: 5,
  class: "hero__badges"
}, Jc = { class: "hero__badge-container" }, Xc = { class: "hero__background-shape" };
function Zc(e, t, u, a, i, r) {
  const n = ht("hero-pattern"), o = qe, l = Ne, s = qc, c = De, g = bt, m = Nc, p = lu;
  return d(), h("div", {
    class: A(r.classList),
    style: ee(i.style)
  }, [
    r.pattern ? (d(), P(n, {
      key: 0,
      class: "hero__pattern"
    })) : _("", !0),
    r.img ? (d(), P(o, {
      key: 1,
      class: "hero__background-img",
      cloudinary: r.background.cloudinary,
      img: r.img
    }, {
      default: he(() => t[0] || (t[0] = [
        Ee(" > ")
      ])),
      _: 1
    }, 8, ["cloudinary", "img"])) : _("", !0),
    f("div", Rc, [
      f("main", {
        class: A(r.contentClassList)
      }, [
        r.hasBack ? (d(), h("div", Mc, [
          f("div", Ic, [
            f("div", Vc, [
              L(l, {
                icon: "arrow",
                classes: "hero__back-icon",
                direction: "left",
                hover: !0,
                circle: !0
              })
            ])
          ])
        ])) : _("", !0),
        r.letterSwitcher ? (d(), P(s, ce({ key: 1 }, r.letterSwitcher, {
          class: "hero__letter-switcher",
          onEnded: r.handleLetterSwitcherEnded
        }), null, 16, ["onEnded"])) : _("", !0),
        r.overline || r.headlineText || r.subline ? (d(), h("div", jc, [
          f("div", Hc, [
            r.overline ? (d(), h("span", Uc, S(r.overline), 1)) : _("", !0),
            r.headlineText ? (d(), P(c, {
              key: 1,
              class: A(r.headlineClassList),
              level: r.level,
              innerHTML: r.headlineText
            }, null, 8, ["class", "level", "innerHTML"])) : _("", !0),
            r.shapeInContent ? (d(), h("div", zc, [
              r.showShape ? (d(), P(o, {
                key: 0,
                cloudinary: r.shape.cloudinary,
                img: r.shape.img,
                alt: r.shape.alt,
                lottie: r.lottieFileData,
                "lottie-settings": r.lottieSettings,
                "img-src-sets": r.imgSrcSets
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : _("", !0)
            ])) : _("", !0),
            r.subline ? (d(), h("p", {
              key: 3,
              class: "hero__subline lead",
              innerHTML: r.subline
            }, null, 8, Gc)) : _("", !0),
            r.ctaList ? (d(), P(g, {
              key: 4,
              classes: "hero__cta-list",
              list: r.ctaList
            }, null, 8, ["list"])) : _("", !0),
            r.badges ? (d(), h("div", Wc, [
              (d(!0), h(N, null, H(r.badges, (b) => (d(), h("div", Jc, [
                L(o, ce({
                  cloudinary: !0,
                  ref_for: !0
                }, b, { class: "hero__badge-image" }), null, 16)
              ]))), 256))
            ])) : _("", !0)
          ])
        ], 512)) : _("", !0),
        r.animation ? (d(), P(m, {
          key: 3,
          animation: r.animation,
          cta: r.cta,
          icon: r.icon,
          classes: "hero__animation"
        }, null, 8, ["animation", "cta", "icon"])) : _("", !0)
      ], 2)
    ]),
    r.shape ? (d(), P(p, {
      key: 2,
      classes: "hero__background-shape-wrapper",
      hideContainer: !r.showShapeContainer
    }, {
      default: he(() => [
        L(p, {
          classes: "hero__background-shape-content",
          hideContainer: !r.showShapeContainer,
          hideContainerClass: !0
        }, {
          default: he(() => [
            f("div", Xc, [
              r.showShape ? (d(), P(o, {
                key: 0,
                cloudinary: r.shape.cloudinary,
                img: r.shape.img,
                alt: r.shape.alt,
                lottie: r.lottieFileData,
                "lottie-settings": r.lottieSettings,
                "img-src-sets": r.imgSrcSets,
                lazy: !0
              }, null, 8, ["cloudinary", "img", "alt", "lottie", "lottie-settings", "img-src-sets"])) : _("", !0)
            ])
          ]),
          _: 1
        }, 8, ["hideContainer"])
      ]),
      _: 1
    }, 8, ["hideContainer"])) : _("", !0)
  ], 6);
}
const Kc = /* @__PURE__ */ j(Pc, [["render", Zc]]), $c = {
  tagName: "intro-text",
  computed: {
    classList() {
      return ["intro-text", "utility-animation", "vue-component", this.variant, this.spacing];
    }
  },
  mounted() {
    this.$refs.root && Fe.init([this.$refs.root]);
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
}, Yc = { class: "container space-lg-2" }, Qc = {
  key: 0,
  class: "row mb-9 mt-9"
}, e0 = { class: "row" }, t0 = { class: "col" }, u0 = ["innerHTML"];
function r0(e, t, u, a, i, r) {
  const n = De;
  return d(), h("figure", {
    class: A(r.classList),
    ref: "root"
  }, [
    f("div", Yc, [
      u.headline ? (d(), h("div", Qc, [
        f("div", {
          class: A(["col", u.headlineClasses, "fade-in-bottom"]),
          "data-utility-animation-step": "1"
        }, [
          L(n, { text: u.headline }, null, 8, ["text"])
        ], 2)
      ])) : _("", !0),
      f("div", e0, [
        f("div", t0, [
          f("p", {
            class: A(["intro-text__copy fade-in-bottom", u.copyClasses]),
            "data-utility-animation-step": "1",
            innerHTML: u.copy
          }, null, 10, u0)
        ])
      ])
    ])
  ], 2);
}
const a0 = /* @__PURE__ */ j($c, [["render", r0]]), i0 = {
  tagName: "link-list",
  computed: {
    classList() {
      return [
        "link-list",
        this.hasNoAnimation ? "" : "utility-animation",
        `${this.isExpanded ? T.EXPANDED : ""}`,
        `${this.isExpandable() ? T.EXPANDABLE : ""}`,
        `${this.hasActiveItem ? T.ACTIVE : ""}`,
        `${this.isHidden ? "link-list--hidden" : ""}`,
        `${this.inTransition ? "link-list--in-transition" : ""}`,
        this.classes,
        "vue-component"
      ];
    },
    hasNoAnimation() {
      return x.isTrue(this.noAnimation);
    },
    classListTitle() {
      return ["link-list__title font-size-8 bold", this.hasNoAnimation ? "" : "fade-in-bottom"];
    },
    classListList() {
      return ["link-list__list header__list--expanded", this.hasNoAnimation ? "" : "fade-in-bottom"];
    },
    hasActiveItem() {
      const e = this.list.children;
      if (e)
        return e.filter((t) => {
          var u;
          return ((u = t.languages[this.lang]) == null ? void 0 : u.active) === !0;
        }).length > 0;
    },
    isHidden() {
      return x.isTrue(this.hidden) === !0;
    }
  },
  watch: {
    hidden(e, t) {
      e || (this.inTransition = !0);
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
      this.parentOfParent = this.$refs.root.parentNode.parentNode, this.parentOfParent.addEventListener(ne.CHILD_HAS_UPDATE, this.handleUpdate.bind(this));
    },
    handleUpdate(e) {
      const t = e.detail.root;
      this.isExpanded && this.$refs.root !== t && this.handleClick();
    },
    isLowerBreakpoint() {
      return x.isBelowBreakpoint("md");
    },
    isExpandable() {
      var e;
      return !!(this.isLowerBreakpoint() && this.list.languages && ((e = this.list.languages[this.lang]) != null && e.title));
    },
    updateHeight() {
      const e = this.$refs.root;
      if (!e) return;
      const t = this.isHidden ? "" : e.scrollHeight + "px";
      e.style.height = t;
    },
    handleClick(e) {
      if (!this.isExpandable()) return;
      this.isExpanded = !this.isExpanded;
      const t = this.$refs.root;
      if (e) {
        const u = new CustomEvent(ne.CHILD_HAS_UPDATE, {
          detail: {
            root: t
          }
        });
        this.parentOfParent.dispatchEvent(u);
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
  }
}, n0 = {
  key: 0,
  class: "link-list__item"
};
function s0(e, t, u, a, i, r) {
  var l, s;
  const n = Ne, o = Le;
  return u.list ? (d(), h("figure", {
    key: 0,
    class: A(r.classList),
    ref: "root"
  }, [
    (l = u.list) != null && l.languages ? (d(), h("figcaption", {
      key: 0,
      class: A(r.classListTitle),
      "data-utility-animation-step": "1",
      onClick: t[0] || (t[0] = (...c) => r.handleClick && r.handleClick(...c))
    }, [
      Ee(S((s = u.list.languages[u.lang]) == null ? void 0 : s.title) + " ", 1),
      L(n, {
        class: "link-list__icon",
        icon: "expand",
        size: "small"
      })
    ], 2)) : _("", !0),
    f("ul", {
      class: A(r.classListList),
      "data-utility-animation-step": "1"
    }, [
      (d(!0), h(N, null, H(u.list.children, (c) => (d(), h(N, null, [
        c.languages && c.languages[u.lang] ? (d(), h("li", n0, [
          L(o, {
            href: c.languages[u.lang].url,
            text: c.languages[u.lang].title,
            active: c.languages[u.lang].active,
            link: !0,
            reversed: "true",
            monochrome: "true"
          }, null, 8, ["href", "text", "active"])
        ])) : _("", !0)
      ], 64))), 256))
    ], 2)
  ], 2)) : _("", !0);
}
const Aa = /* @__PURE__ */ j(i0, [["render", s0]]), Ca = {
  tagName: "slot-items",
  props: {
    items: {
      default: []
    }
  },
  render() {
    const e = this.items(), t = [];
    return e.forEach((u, a) => {
      var i;
      u.props && !((i = u == null ? void 0 : u.props) != null && i.style) && (u.props.style = `--utility-animation-index: ${a + 1}`), t.push(u);
    }), t;
  }
}, o0 = {
  tagName: "list-container",
  computed: {
    classValue() {
      return [
        "list-container vue-component",
        `${this.spacing ? this.spacing : ""}`,
        `${this.classes ? this.classes : ""}`,
        x.isTrue(this.headlineSticky) ? "list-container--headline-sticky has-headline-sticky" : ""
      ];
    },
    colorStyling() {
      const e = this.bgColor ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);` : "", t = this.headlineColor ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}` : "";
      return [e, t];
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
}, l0 = {
  class: "list-container__container utility-animation container headline-sticky__target fade-in-bottom",
  "data-utility-animation-step": "1"
}, c0 = { class: "row" }, d0 = { class: "col-sm-12" };
function f0(e, t, u, a, i, r) {
  const n = De, o = Ca;
  return d(), h("div", {
    class: A(r.classValue),
    style: ee(r.colorStyling)
  }, [
    f("div", l0, [
      f("div", c0, [
        f("div", d0, [
          L(n, {
            text: u.headline,
            level: u.level,
            classes: "list-container__headline"
          }, null, 8, ["text", "level"])
        ])
      ])
    ]),
    L(o, {
      items: e.$slots.default
    }, null, 8, ["items"])
  ], 6);
}
const wa = /* @__PURE__ */ j(o0, [["render", f0]]), h0 = {
  tagName: "logo-list-items",
  computed: {},
  methods: {
    getItemComponent(e) {
      return e != null && e.url ? "a" : "span";
    },
    getDelay(e) {
      const t = this.getIndex(e), u = t > 0 ? 100 : 0;
      return `--utility-animation-delay: ${`${t * u}ms`};`;
    },
    getIndex(e) {
      return this.isClone ? this.list.length + e : e;
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
}, g0 = {
  tagName: "logo-list",
  components: {
    "logo-list-items": h0
  },
  mounted() {
    this.$refs.root && (this.sticky && Ye.init([this.$refs.root]), Fe.init([this.$refs.root]));
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
      return x.isTrue(this.overlapping);
    },
    columnsValue() {
      const t = parseInt(this.columns);
      return "--column-width: " + `calc(${100 / (Number.isNaN(t) ? 4 : t)}% - 3px)`;
    },
    aspectRatioValue() {
      if (!this.aspectRatio) return "";
      const e = this.aspectRatio.split("/");
      return e.length != 2 ? "" : `--aspect-ratio-width: ${e[0]}; --aspect-ratio-height: ${e[1]}`;
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
}, p0 = { class: "logo-list__row row" };
function m0(e, t, u, a, i, r) {
  const n = ht("logo-list-items"), o = lu;
  return d(), h("div", {
    class: A(r.classList),
    style: ee(r.styles),
    ref: "root"
  }, [
    f("div", p0, [
      L(o, {
        classes: "logo-list__scroller",
        "hide-container": !r.isOverlapping,
        "hide-container-class": !0
      }, {
        default: he(() => [
          f("div", {
            class: A(["logo-list__col col d-flex", { "flex-wrap": !r.isOverlapping }])
          }, [
            L(n, {
              list: u.list,
              "is-overlapping": r.isOverlapping
            }, null, 8, ["list", "is-overlapping"]),
            r.isOverlapping ? (d(), P(n, {
              key: 0,
              list: u.list,
              "is-clone": "true",
              "is-overlapping": r.isOverlapping
            }, null, 8, ["list", "is-overlapping"])) : _("", !0)
          ], 2)
        ]),
        _: 1
      }, 8, ["hide-container"])
    ])
  ], 6);
}
const b0 = /* @__PURE__ */ j(g0, [["render", m0]]), v0 = {
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
    animateLines(e, t) {
      const u = [];
      this.$refs.svg.querySelectorAll("animate").forEach((i) => {
        (!e && !i.classList.contains("closed") || e && i.classList.contains("closed")) && u.push(i);
      });
      const a = t ? "beginElementAt" : "beginElement";
      u.forEach((i) => {
        i[a](1e3);
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
}, _0 = ["x1", "x2", "y1", "y2", "stroke-width"], y0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], D0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], x0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], A0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], C0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], w0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], E0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], S0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], L0 = ["x1", "x2", "y1", "y2", "stroke-width"], k0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], T0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], B0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], F0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], N0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], q0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], O0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], P0 = ["begin", "dur", "from", "to", "keyTimes", "keySplines"], R0 = ["x1", "x2", "y1", "y2", "stroke-width"], M0 = ["begin", "from", "keyTimes", "keySplines"], I0 = ["begin", "to", "keyTimes", "keySplines"];
function V0(e, t, u, a, i, r) {
  return d(), h("svg", ce(u.settings, {
    style: r.style,
    width: "46",
    height: "33",
    viewBox: "0 0 46 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: "svg"
  }), [
    f("line", {
      id: "line1",
      x1: r.lineData.line1.from.x1,
      x2: r.lineData.line1.from.x2,
      y1: r.lineData.line1.from.y1,
      y2: r.lineData.line1.from.y2,
      "stroke-width": r.strokeWidth,
      "stroke-linecap": "round",
      ref: "line1"
    }, [
      f("animate", {
        attributeName: "x1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.from.x1,
        to: r.lineData.line1.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, y0),
      f("animate", {
        attributeName: "x2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.from.x2,
        to: r.lineData.line1.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, D0),
      f("animate", {
        attributeName: "y1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.from.y1,
        to: r.lineData.line1.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, x0),
      f("animate", {
        attributeName: "y2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.from.y2,
        to: r.lineData.line1.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, A0),
      f("animate", {
        class: "closed",
        attributeName: "x1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.to.x1,
        to: r.lineData.line1.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, C0),
      f("animate", {
        class: "closed",
        attributeName: "x2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.to.x2,
        to: r.lineData.line1.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, w0),
      f("animate", {
        class: "closed",
        attributeName: "y1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.to.y1,
        to: r.lineData.line1.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, E0),
      f("animate", {
        class: "closed",
        attributeName: "y2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line1.to.y2,
        to: r.lineData.line1.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, S0)
    ], 8, _0),
    f("line", {
      style: { transition: "all linear 0.05s" },
      id: "line2",
      x1: r.lineData.line2.from.x1,
      x2: r.lineData.line2.from.x2,
      y1: r.lineData.line2.from.y1,
      y2: r.lineData.line2.from.y2,
      "stroke-width": r.strokeWidth,
      "stroke-linecap": "round",
      ref: "line2"
    }, [
      f("animate", {
        attributeName: "x1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.from.x1,
        to: r.lineData.line2.to.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, k0),
      f("animate", {
        attributeName: "x2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.from.x2,
        to: r.lineData.line2.to.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, T0),
      f("animate", {
        attributeName: "y1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.from.y1,
        to: r.lineData.line2.to.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, B0),
      f("animate", {
        attributeName: "y2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.from.y2,
        to: r.lineData.line2.to.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, F0),
      f("animate", {
        class: "closed",
        attributeName: "x1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.to.x1,
        to: r.lineData.line2.from.x1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, N0),
      f("animate", {
        class: "closed",
        attributeName: "x2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.to.x2,
        to: r.lineData.line2.from.x2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, q0),
      f("animate", {
        class: "closed",
        attributeName: "y1",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.to.y1,
        to: r.lineData.line2.from.y1,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, O0),
      f("animate", {
        class: "closed",
        attributeName: "y2",
        begin: i.begin,
        dur: i.duration,
        from: r.lineData.line2.to.y2,
        to: r.lineData.line2.from.y2,
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, P0)
    ], 8, L0),
    f("line", {
      style: { transition: "all linear 0.05s" },
      id: "line3",
      x1: r.lineData.line3.from.x1,
      x2: r.lineData.line3.from.x2,
      y1: r.lineData.line3.from.y1,
      y2: r.lineData.line3.from.y2,
      "stroke-width": r.strokeWidth,
      "stroke-linecap": "round",
      ref: "line3"
    }, [
      f("animate", {
        attributeName: "stroke-width",
        begin: i.begin,
        dur: "0.01s",
        from: r.strokeWidth,
        to: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, M0),
      f("animate", {
        class: "closed",
        attributeName: "stroke-width",
        begin: i.begin,
        dur: "0.01s",
        to: r.strokeWidth,
        from: "0",
        fill: "freeze",
        calcMode: "spline",
        keyTimes: i.keyTimes,
        keySplines: r.effectiveKeySplines
      }, null, 8, I0)
    ], 8, R0)
  ], 16);
}
const j0 = /* @__PURE__ */ j(v0, [["render", V0]]), H0 = {
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
    animationStyle(e) {
      return { "--utility-animation-index": e };
    }
  },
  mounted() {
    this.$refs.root && Fe.init([this.$refs.root]);
  }
}, U0 = { class: "container space-2" }, z0 = { class: "row" }, G0 = { class: "product-blocks__content" }, W0 = { key: 0 }, J0 = { key: 1 }, X0 = {
  key: 2,
  class: "dashed"
}, Z0 = { class: "product-blocks__buttons" };
function K0(e, t, u, a, i, r) {
  const n = Wu, o = qe, l = bt, s = Le;
  return d(), h("div", {
    class: "product-blocks utility-animation container-fluid",
    style: ee(r.backgroundColorStyle),
    ref: "root"
  }, [
    f("div", U0, [
      u.headline ? (d(), h("div", {
        key: 0,
        class: "container pb-4 pb-lg-6 fade-in-bottom",
        "data-utility-animation-step": "1",
        style: ee(r.animationStyle(1))
      }, [
        L(n, {
          text: u.headline,
          centered: !0
        }, null, 8, ["text"])
      ], 4)) : _("", !0),
      f("div", z0, [
        (d(!0), h(N, null, H(u.productBlocks.items, (c, g) => (d(), h("div", {
          key: g,
          class: "product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom",
          "data-utility-animation-step": "1",
          style: ee(r.animationStyle(g + 1))
        }, [
          f("div", {
            class: A(["product-blocks__block", { "text-center": c.copy === "" }, "pl-lg-3 pr-lg-8"])
          }, [
            f("div", G0, [
              f("figure", {
                class: A(["product-blocks__img", { "mx-auto": c.copy === "" }, "mb-4"])
              }, [
                c.image ? (d(), P(o, {
                  key: 0,
                  img: c.image,
                  cloudinary: c.cloudinary,
                  alt: c.alt
                }, null, 8, ["img", "cloudinary", "alt"])) : _("", !0)
              ], 2),
              c - u.headline ? (d(), h("h3", W0, S(c.headline), 1)) : _("", !0),
              c.copy ? (d(), h("p", J0, S(c.copy), 1)) : _("", !0),
              c.bulletList ? (d(), h("ul", X0, [
                (d(!0), h(N, null, H(c.bulletList, (m, p) => (d(), h("li", { key: p }, S(m), 1))), 128))
              ])) : _("", !0)
            ]),
            f("div", Z0, [
              c.list ? (d(), P(l, {
                key: 0,
                list: c.list
              }, null, 8, ["list"])) : c.ctaText ? (d(), P(s, {
                key: 1,
                text: c.ctaText,
                href: c.ctaHref,
                link: c.link,
                target: c.target,
                type: c.type
              }, null, 8, ["text", "href", "link", "target", "type"])) : _("", !0)
            ])
          ], 2)
        ], 4))), 128))
      ])
    ])
  ], 4);
}
const $0 = /* @__PURE__ */ j(H0, [["render", K0]]), Y0 = {
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
}, Q0 = { class: "product-stage__content container position-relative" }, ed = ["innerHTML"], td = {
  key: 1,
  class: "row justify-content-center py-6"
}, ud = ["innerHTML"], rd = {
  key: 2,
  class: "row justify-content-center py-6"
}, ad = {
  key: 3,
  class: "space-bottom-2 space-bottom-lg-3"
}, id = ["href", "target", "id", "aria-controls", "aria-selected"], nd = { class: "d-flex flex-column align-items-center position-relative z-index-2" }, sd = {
  key: 1,
  class: "mb-6 flex-grow-1"
};
function od(e, t, u, a, i, r) {
  const n = De, o = ht("pricing-slider"), l = bt, s = Le, c = Gu;
  return d(), h("section", {
    class: "product-stage position-relative overflow-hidden",
    style: ee({ backgroundColor: r.bgColor })
  }, [
    t[0] || (t[0] = Ht('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>', 1)),
    f("div", Q0, [
      f("div", {
        class: A(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2", { "text-white": u.light }])
      }, [
        L(n, {
          classes: u.stage.headlineClasses,
          level: u.stage.headlineLevel || "h1"
        }, {
          default: he(() => [
            Ee(S(u.stage.headline), 1)
          ]),
          _: 1
        }, 8, ["classes", "level"]),
        u.stage.description ? (d(), h("p", {
          key: 0,
          class: "col-lg-8 lead mt-5 px-0",
          innerHTML: u.stage.description
        }, null, 8, ed)) : _("", !0)
      ], 2),
      u.stage.slider && u.products ? (d(), P(o, {
        key: 0,
        slider: u.stage.slider,
        tooltip: u.stage.tooltip,
        "modal-id": u.stage.modalId
      }, null, 8, ["slider", "tooltip", "modal-id"])) : _("", !0),
      u.stage.additionalCopy ? (d(), h("div", td, [
        f("div", {
          class: "text-center",
          innerHTML: u.stage.additionalCopy
        }, null, 8, ud)
      ])) : _("", !0),
      u.stage.buttons ? (d(), h("div", rd, [
        L(l, {
          list: u.stage.buttons
        }, null, 8, ["list"])
      ])) : (d(), h("div", ad)),
      r.cards ? (d(), h("ul", {
        key: 4,
        class: A(["row nav nav-pills", { "px-1 px-lg-0": r.cards.tabs }]),
        role: "tablist"
      }, [
        (d(!0), h(N, null, H(r.cards.list, (g, m) => (d(), h("li", {
          key: m,
          class: A([
            "col-lg-" + 12 / r.cards.list.length,
            { "px-1 px-lg-3 nav-item": r.cards.tabs, "mb-6 mb-md-8 mb-lg-0": !r.cards.tabs }
          ])
        }, [
          g.link ? (d(), h("a", {
            key: 0,
            href: g.link.href,
            target: g.link.target,
            class: A(["product-stage__tab h-100 rounded position-relative d-block", { active: r.cards.tabs && m === 0 }]),
            id: g.id ? g.id + "-tab" : "",
            "data-toggle": "pill",
            role: "tab",
            "aria-controls": g.id,
            "aria-selected": r.cards.tabs && m === 0
          }, [
            f("div", {
              class: A(["product-stage__tab-content position-relative h-100", { "product-stage__tab-content--alternative-border": r.cards.tabs }])
            }, [
              f("div", {
                class: A(["rounded", { "p-2 p-lg-8": g.link, "p-8 bg-white shadow-lg": !g.link }])
              }, [
                f("div", nd, [
                  g.title ? (d(), h("h2", {
                    key: 0,
                    class: A(["font-size-3 mb-2 mb-md-6 text-center", { "text-primary": g.link }])
                  }, S(g.title), 3)) : _("", !0),
                  g.description ? (d(), h("p", sd, S(g.description), 1)) : _("", !0),
                  g.cta !== g.href ? (d(), P(s, {
                    key: 2,
                    text: g.cta.text,
                    href: g.cta.href,
                    target: g.cta.target,
                    skin: g.cta.skin,
                    classes: "align-self-center z-index-2"
                  }, null, 8, ["text", "href", "target", "skin"])) : _("", !0)
                ])
              ], 2)
            ], 2)
          ], 10, id)) : _("", !0)
        ], 2))), 128))
      ], 2)) : _("", !0)
    ]),
    r.shape ? (d(), h(N, { key: 0 }, [
      r.shape.isActive !== !1 ? (d(), P(c, {
        key: 0,
        align: "bottom",
        peak: "left",
        obliquity: 4,
        classes: r.shapeClasses,
        color: r.shape.color
      }, null, 8, ["classes", "color"])) : _("", !0)
    ], 64)) : _("", !0)
  ], 4);
}
const ld = /* @__PURE__ */ j(Y0, [["render", od]]), cd = {
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
function dd(e, t, u, a, i, r) {
  return d(), h("svg", ce(u.settings, {
    style: r.style,
    viewBox: "0 0 40 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), t[0] || (t[0] = [
    f("path", {
      d: "M14.3178 0C15.8159 2.397 16.9074 4.79401 17.5923 7.19101C18.32 9.58801 18.6838 11.985 18.6838 14.382C18.6838 18.6624 17.5923 22.7501 15.4093 26.6453C13.2691 30.5404 10.1659 34.1359 6.09952 37.4318L1.1557 34.4141C0.727662 34.1573 0.428037 33.8363 0.256822 33.451C0.0856075 33.1086 0 32.7662 0 32.4238C0 31.6105 0.278224 30.9256 0.834671 30.3692C1.39112 29.7271 1.96897 28.9995 2.56822 28.1862C3.21027 27.3729 3.78812 26.4527 4.30177 25.4254C4.81541 24.3981 5.22204 23.2852 5.52167 22.0867C5.8641 20.8882 6.03531 19.6041 6.03531 18.2344C6.03531 16.779 5.79989 15.2381 5.32905 13.6116C4.85821 11.9422 4.06635 10.1873 2.95345 8.34671C2.56822 7.79026 2.3756 7.21241 2.3756 6.61316C2.3756 5.24344 3.16747 4.28036 4.7512 3.72392L14.3178 0ZM35.634 0C37.1322 2.397 38.2236 4.79401 38.9085 7.19101C39.6362 9.58801 40 11.985 40 14.382C40 18.6624 38.9085 22.7501 36.7255 26.6453C34.5853 30.5404 31.4821 34.1359 27.4157 37.4318L22.4719 34.4141C22.0439 34.1573 21.7442 33.8363 21.573 33.451C21.4018 33.1086 21.3162 32.7662 21.3162 32.4238C21.3162 31.6105 21.5944 30.9256 22.1509 30.3692C22.7073 29.7271 23.2852 28.9995 23.8844 28.1862C24.5265 27.3729 25.1043 26.4527 25.618 25.4254C26.1316 24.3981 26.5383 23.2852 26.8379 22.0867C27.1803 20.8882 27.3515 19.6041 27.3515 18.2344C27.3515 16.779 27.1161 15.2381 26.6453 13.6116C26.1744 11.9422 25.3826 10.1873 24.2697 8.34671C23.8844 7.79026 23.6918 7.21241 23.6918 6.61316C23.6918 5.24344 24.4837 4.28036 26.0674 3.72392L35.634 0Z",
      fill: "#FCD116"
    }, null, -1)
  ]), 16);
}
const fd = /* @__PURE__ */ j(cd, [["render", dd]]);
class hd {
  constructor(t) {
    var a;
    this.position = t;
    const u = (a = window.i18n) == null ? void 0 : a.loader;
    u && u.then(() => {
      var i;
      this.translationData = (i = window.i18n) == null ? void 0 : i.getTranslationData([
        "positionTypePermanently",
        "positionTypeInternship",
        "positionTypeTraining",
        "positionTypeStudent"
      ]);
    });
  }
  get description() {
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription && this.position.jobDescriptions.jobDescription.map ? this.position.jobDescriptions.jobDescription.map((t, u) => this.getEnhanchedDescription(u, t.name, t.value["#cdata-section"])).join(`
`) : null;
  }
  hasStartingHtmlTag(t) {
    return /^\s*<[^>]+>/.test(t);
  }
  getEnhanchedDescription(t, u, a) {
    const i = t > 0 && u && u["#text"] ? `<h4>${this.trimNewlines(u["#text"])}</h4>` : "";
    let r = a.replace(/<\/?span[^>]*>/g, ""), n = 0;
    const o = 5, l = 2;
    return t === 0 ? r = r.replace(new RegExp("(?<=<\\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)", "g"), (s, c) => c.length > o && /^\s*$/.test(c) ? c : n < l && c.length > o && c[0] !== "," ? (n++, "<p>" + c.trim() + "</p>") : c).replace(/<\/p><br>/g, "<br></p>") : !this.hasStartingHtmlTag(r) && r.length > o && (r = "<p>" + r + "</p>"), `${i}${r}`.replace(/<\/p><br><p>/g, "</p><p>");
  }
  get id() {
    return this.getValue("id").replace(/\s/g, "");
  }
  get title() {
    return this.removeGenderNotations(this.getValue("name"));
  }
  removeGenderNotations(t) {
    const u = /\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;
    return t.replace(u, "").trim();
  }
  get tags() {
    const t = this.getValue("keywords");
    return t ? t.split(",") : [];
  }
  getTeamText(t) {
    if (!t) return;
    let u = t;
    if (u.includes("/")) {
      const a = u.split(" / "), i = a[0], r = a[1], n = "CSOC", o = "Managed Services", l = "Products";
      if (i === o && r !== n)
        u = o;
      else if (i === l)
        u = `${l} ${r}`;
      else
        switch (r) {
          case "Azure Architecture":
            u = "Azure";
            break;
          case "M365 Architecture":
            u = "Workplace";
            break;
          case n:
            u = "Security";
            break;
          default:
            u = r;
            break;
        }
    }
    return u + " Team";
  }
  get team() {
    const t = this.getTeamText(this.getValue("department")), u = t ? " / " : "";
    return `${t || ""}${this.positionType ? u + this.positionType : ""}`;
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
    var u, a, i, r;
    let t = this.getValue("employmentType");
    switch (t) {
      case "permanent":
        t = (u = window.i18n) == null ? void 0 : u.translate("positionTypePermanently");
        break;
      case "intern":
        t = (a = window.i18n) == null ? void 0 : a.translate("positionTypeInternship");
        break;
      case "trainee":
        t = (i = window.i18n) == null ? void 0 : i.translate("positionTypeTraining");
        break;
      case "working_student":
        t = (r = window.i18n) == null ? void 0 : r.translate("positionTypeStudent");
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
    const t = this.tags.find((i) => i.includes("ORDER_"));
    if (!t) return null;
    const u = t.split("_")[1];
    return parseInt(u, 10);
  }
  trimNewlines(t) {
    return t.replace(/\n|\t|    /g, "");
  }
  getValue(t, u = "text") {
    return this.position && this.position[t] ? this.trimNewlines(this.position[t][`#${u}`]) : null;
  }
}
const ot = {
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
class gd {
  constructor(t) {
    z(this, "defaultLang", "de");
    z(this, "types", {
      OPENINGS: "openings",
      APPLICATIONS: "applications",
      DOCUMENTS: "documents"
    });
    z(this, "recruitingChannels", {
      CAREER_PAGE: 1610421
    });
    z(this, "phaseIds", {
      NEW_APPLICATION: 890494
    });
    z(this, "responseTypes", {
      XML: "xml",
      JSON: "json"
    });
    z(this, "defaultClientName", "c4a8");
    z(this, "mockApplyUrl", "mock/jobApply.json");
    z(this, "mockDocumentsUrl", "mock/jobDocuments.json");
    this.options = t, (!this.options.client_name || this.options.client_name === "glueckkanja") && (this.options.client_name = this.defaultClientName), this.lang = this.defaultLang, this.jobId = null, this.apiUrl = "https://api.personio.de/v1", this.openingsUrl = `https://${this.options.client_name}.jobs.personio.de/xml`, this.applicationsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications", this.documentsUrl = "https://apim-c4a8-recruiting-prd-weu.azure-api.net/applications/documents";
  }
  getUrl(t) {
    var i;
    let u;
    t !== this.types.OPENINGS && ((i = this.options.apiUrl) != null && i.match(/.xml$/)) ? t === this.types.APPLICATIONS ? u = this.options.mockApplyUrl ? this.options.mockApplyUrl : this.mockApplyUrl : u = this.options.mockDocumentsUrl ? this.options.mockDocumentsUrl : this.mockDocumentsUrl : u = this.options.apiUrl ? this.options.apiUrl : this[`${t}Url`];
    const a = this.lang !== this.defaultLang ? this.options.apiUrl ? "" : `?language=${this.lang}` : "";
    return `${u}${a}`;
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
    var r;
    const u = new hd(t), a = (r = this.options) == null ? void 0 : r.jobId;
    return u.description === null || a && u.id !== a || !this.filterPosition(u) ? null : {
      ...u.data,
      lang: this.lang
    };
  }
  filterPosition(t) {
    var u, a;
    return !((a = (u = this.filter) == null ? void 0 : u.tags) != null && a.length) || this.filter.tags.some((i) => t.tags.map((r) => r.toLowerCase()).includes(i.toLowerCase())) ? t : null;
  }
  convertData(t) {
    var r, n;
    const u = t, a = "workzag-jobs", i = (r = t[a]) == null ? void 0 : r.position;
    return u.objects = i.length ? (n = t[a]) == null ? void 0 : n.position.map((o) => this.convertPosition(o)).filter(Boolean) : [this.convertPosition(i)].filter(Boolean), u.meta = { offset: 0, limit: 20, total: 10 }, u;
  }
  getConvertedJson(t) {
    const a = new DOMParser().parseFromString(t, "application/xml"), i = x.XMLtoJSON(a);
    return this.convertData(i);
  }
  fetchXML(t) {
    return new Promise((u, a) => {
      t.then((i) => i.text()).then((i) => {
        u({
          json: () => this.getConvertedJson(i)
        });
      }).catch((i) => {
        console.error("Personio fetchXML Error:", i), a("Personio fetchXML Error");
      });
    });
  }
  fetch(t, u, a) {
    return new Promise((i, r) => {
      var n;
      if ((n = this.options) != null && n.client_name) {
        const o = fetch(t, u), l = a === this.responseTypes.XML ? this.fetchXML(o) : o;
        i(l);
      } else
        r("no client_name specified");
    });
  }
  async uploadDocuments(t) {
    const u = t.length > 0 ? t : [t], a = [];
    return Array.from(u).forEach((i) => {
      a.push(this.uploadDocument(i));
    }), Promise.all(a);
  }
  async uploadDocument(t) {
    const u = this.getUrl(this.types.DOCUMENTS), a = new FormData();
    return a.append(
      "file",
      new File([t], t.name, {
        type: t.type
      })
    ), this.fetch(u, {
      method: "POST",
      body: a,
      headers: {
        ...this.getHeaders()
      }
    });
  }
  async applyFileData(t, u, a) {
    return new Promise((i, r) => {
      this.uploadDocuments(t).then((n) => {
        if (this.hasValidResponseCodes(n)) return this.addFilesToFields(n, a, i, r);
        const o = n[0];
        o.json().then((l) => {
          if (l.errors) return r({ statusCode: o.status, errors: l.errors });
        }).catch((l) => r(l));
      }).catch((n) => r(n));
    });
  }
  addFilesToFields(t, u, a, i) {
    const r = u;
    r.files = [];
    const n = t.map((o) => o.json().then((l) => {
      r.files.push({
        uuid: l.uuid,
        original_filename: l.original_filename,
        category: "cv"
      });
    }));
    return Promise.all(n).then(() => a(r)).catch((o) => i(o));
  }
  getMappedFieldName(t) {
    let u;
    switch (t) {
      case "salary":
        u = "salary_expectations";
        break;
      case "cancellation":
        u = "available_from";
        break;
      case "gender":
      case "birthday":
      case "location":
      case "phone":
        u = t;
        break;
      default:
        u = "custom_attribute_" + t;
        break;
    }
    return u;
  }
  isValidResponseCode(t) {
    return this.options.apiUrl ? t.status === ot.VALID : t.status === ot.VALID || t.status === ot.CREATED || t.status === ot.NO_CONTENT;
  }
  hasValidResponseCodes(t) {
    return t.every((u) => this.isValidResponseCode(u));
  }
  handleApply(t) {
    return new Promise((u, a) => {
      this.apply({ fields: t }).then((i) => {
        if (this.isValidResponseCode(i)) return u();
        i.json().then((r) => {
          if (r.errors) return a({ statusCode: i.status, errors: r.errors });
        }).catch((r) => a(r));
      }).catch((i) => a(i));
    });
  }
  getFormPayload(t, u) {
    const a = {
      job_position_id: parseInt(this.options.jobId),
      attributes: [],
      phase: {
        type: "custom",
        id: this.phaseIds.NEW_APPLICATION
      },
      recruiting_channel_id: this.recruitingChannels.CAREER_PAGE
    }, i = { first_name: !0, last_name: !0, email: !0, message: !0 };
    for (let r = 0; r < t.length; r++) {
      const o = t[r].input, l = u.getName(o.name), s = x.camalCaseToSnakeCase(l);
      i.hasOwnProperty(s) ? a[s] = o.value : s !== "_gotcha" && a.attributes.push({
        id: this.getMappedFieldName(s),
        value: o.value
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
    const u = this.getUrl(this.types.APPLICATIONS);
    return this.fetch(u, {
      method: "POST",
      body: JSON.stringify(t.fields),
      headers: {
        ...this.getHeaders(),
        "Content-Type": "application/json"
      }
    });
  }
}
class pd {
  constructor(t) {
    z(this, "jobDataUrl", "/assets/data/jobs/");
    this.options = t, this.api = new gd(this.options), this.jobDataUrl = x.getSiteAssetPath(this.jobDataUrl);
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
  getUrl(t, u, a) {
    return this.api.getUrl(t, u, a);
  }
  fetch(t, u) {
    return this.api.fetch(t, u);
  }
  getLangFromEntry(t) {
    return t.lang || null;
  }
  getJobId() {
    let t = "";
    const u = window.location.hash;
    if (u)
      if (u.indexOf("-") !== -1) {
        const a = u.split("-");
        t = a[a.length - 1];
      } else
        t = u.substring(1);
    else this.options.jobId && (t = this.options.jobId);
    return t;
  }
  getOrderedList(t) {
    const u = t.filter((i) => i.order !== void 0).sort((i, r) => r.order - i.order), a = t.filter((i) => i.order === void 0);
    return [...u, ...a];
  }
  getFormData(t) {
    const u = Se.getFormData(t);
    return this.api.getFormPayload(u, Se);
  }
  applyFileData(t, u, a) {
    return this.api.applyFileData(t, u, a);
  }
  handleApply(t) {
    return this.api.handleApply(t);
  }
}
const Ke = class Ke {
  constructor(t, u) {
    this.root = t, this.options = u, this.closeSelector = ".modal__close", this.successCloseSelector = ".modal__success-close .cta", this.errorCloseSelector = ".modal__error-close .cta", this.applicationSelector = ".modal__application", this.modalSuccessHeadlineSelector = ".modal__success-headline > *", this.buttonSelector = '[data-trigger="modal"]', this.formSelector = ".form", this.close = this.root.querySelector(this.closeSelector), this.successClose = this.root.querySelector(this.successCloseSelector), this.errorClose = this.root.querySelector(this.errorCloseSelector), this.application = this.root.querySelector(this.applicationSelector), this.form = this.root.querySelector(this.formSelector), this.modalId = this.root.dataset.modalId, this.root.classList.add(T.READY), this.application && (this.clientName = this.root.dataset.clientName, this.apiUrl = this.root.dataset.apiUrl, this.jobId = this.root.dataset.jobId, this.apiKey = this.root.dataset.apiKey, this.mockApplyUrl = this.root.dataset.mockApplyUrl, this.mockDocumentsUrl = this.root.dataset.mockDocumentsUrl, this.api = new pd({
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
    var t, u, a;
    if ((t = this.close) == null || t.addEventListener("click", this.handleClose.bind(this)), (u = this.successClose) == null || u.addEventListener("click", this.handleClose.bind(this)), (a = this.errorClose) == null || a.addEventListener("click", this.handleClose.bind(this)), this.application) {
      const i = this.root.parentNode, r = Se.getInstance(this.form);
      if (i && this.isNotVueApp(i)) {
        const n = i.querySelector(this.buttonSelector);
        n == null || n.addEventListener("click", this.handleOpen.bind(this));
      } else i && this.addTriggerListeners();
      r && r.canHaveCustomSubmit() && (r.customSubmit = this.handleApplicationSubmit.bind(this));
    } else this.root.dataset.modalId && this.addTriggerListeners();
    document.addEventListener(ne.OPEN_MODAL, this.handleModalOpen.bind(this));
  }
  addTriggerListeners() {
    document.querySelectorAll(`[data-trigger-id='${this.modalId}']`).forEach((u) => u.addEventListener("click", this.handleOpen.bind(this)));
  }
  handleModalOpen(t) {
    var a;
    t.stopImmediatePropagation();
    const u = (a = t == null ? void 0 : t.detail) == null ? void 0 : a.id;
    !u || u !== this.modalId || this.handleOpen(t);
  }
  handleApplicationSubmit(t) {
    t.preventDefault(), t.stopImmediatePropagation(), this.setLoading(!0);
    const u = this.form.querySelector(At.base64Selector), a = u == null ? void 0 : u.value;
    let i = this.api.getFormData(this.form), r;
    if (a)
      r = {
        name: u.dataset.fileName
      };
    else {
      const n = this.form.querySelector('input[type="file"]');
      r = n == null ? void 0 : n.files;
    }
    r ? this.handleApplicationRequest(i, r, a) : this.handleError();
  }
  setLoading(t) {
    document.dispatchEvent(new CustomEvent(ne.LOAD_MODAL, { detail: t }));
  }
  handleApplicationRequest(t, u, a) {
    this.api.applyFileData(u, a, t).then((i) => {
      this.api.handleApply(i).then(() => {
        this.setLoading(!1), this.handleApplicationSuccess(i);
      }).catch((r) => {
        this.setLoading(!1), this.handleError(r);
      });
    }).catch((i) => {
      this.setLoading(!1), this.handleError(i);
    });
  }
  handleApplicationSuccess(t) {
    this.root.classList.add(T.SUCCESS);
    const u = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (u) {
      u.dataset.text || (u.dataset.text = u.innerText);
      const a = t.first_name;
      u.innerText = `${u.dataset.text} ${a}`;
    }
  }
  handleError(t) {
    if (!t) return console.error("handle generic error");
    const u = typeof t == "string" ? t : t.message ? t.message : t, a = typeof t == "object" && t.statusCode ? t.statusCode : ot.INTERNAL_SERVER_ERROR;
    console.error("Modal Error", u), a === ot.PAYLOAD_TOO_LARGE ? this.handlePayloadTooLarge(t) : this.root.classList.add(T.ERROR);
  }
  handlePayloadTooLarge(t) {
    document.dispatchEvent(new CustomEvent(ne.FORM_ATTACHMENT_ERROR, { detail: t }));
  }
  handleClose(t) {
    t.preventDefault(), Ke.close(this.root);
  }
  handleOpen(t) {
    t.preventDefault(), Ke.open(this.root);
  }
  static initElement(t, u) {
    const a = new this(t, u);
    return this.instances.push(a), a;
  }
  static open(t) {
    t && window.$ && $(t).modal("show");
  }
  static close(t) {
    t && window.$ && ($(t).modal("hide"), Ke.resetModal(t));
  }
  static resetModal(t) {
    setTimeout(function() {
      const u = t.querySelector("form");
      u == null || u.reset(), t.classList.remove(T.SUCCESS), t.classList.remove(T.ERROR);
    }, 200);
  }
  static init(t) {
    this.instances = [];
    const u = t || document, a = `${this.rootSelector}:not(.${T.READY})`;
    [].forEach.call(u.querySelectorAll(a), (i) => {
      this.initElement(i);
    });
  }
};
z(Ke, "rootSelector", ".modal"), z(Ke, "instances", []);
let Su = Ke;
const md = {
  tagName: "modal",
  computed: {
    modalErrorValue() {
      return x.getJSON(this.modalError);
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
      return x.isTrue(this.center);
    },
    slimValue() {
      return x.isTrue(this.slim);
    },
    loadingValue() {
      return this.loading ? !0 : null;
    },
    notificationValue() {
      return x.isTrue(this.notification);
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
      return ["modal__body", this.loading ? T.LOADING : null];
    }
  },
  mounted() {
    this.bindEvents(), this.show === !0 && this.openModal();
  },
  unmounted() {
    this.observer.disconnect(), document.removeEventListener(ne.LOAD_MODAL, this.handleLoading);
  },
  methods: {
    isModalOpen() {
      return !!document.body.classList.contains("modal-open");
    },
    setModalMode(e) {
      const t = document.querySelector("html");
      e ? t.classList.add(T.MODAL_OPEN) : (t.classList.remove(T.MODAL_OPEN), this.handleClose());
    },
    handleClose() {
      const t = this.$refs.modal.querySelector(Se.rootSelector);
      if (!t) return;
      const u = Se.getInstance(t);
      u || Se.reset(u.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation), setTimeout(() => {
        this.observer.observe(document.body, { attributes: !0 });
      }, 200), document.addEventListener(ne.LOAD_MODAL, this.handleLoading);
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    handleLoading(e) {
      const t = e == null ? void 0 : e.detail;
      this.loading = t;
    },
    openModal() {
      setTimeout(() => {
        Su.open(this.$refs.modal);
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
}, bd = {
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
      let e = `${this.headlineClasses || ""} ${this.textImageLightText} mb-2 mb-lg-4`;
      return this.headlineClasses || (e += this.float ? " h3-font-size" : " h4-font-size font-weight-normal"), e.trim();
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
      const e = [
        "text-image__first-col",
        "d-flex",
        "text-image__img",
        "justify-content-center",
        this.imageClasses,
        `col-lg-${this.float ? this.textImageFirstColWidthComputed : this.offset ? this.textImageFirstColWidthComputed - 1 : this.textImageFirstColWidthComputed}`
      ];
      return this.float ? e.push(`col-xl-${this.textImageFirstColWidthXl}`, "text-image__img--floating") : this.offset && !this.left && e.push("offset-lg-1"), e;
    },
    textImageSecondColClasses() {
      const e = [
        "text-image__second-col",
        { "no-gutters": this.noGutters },
        { "pt-2 pt-lg-4": !this.noGutters },
        `col-lg-${this.textImageSecondColWidthComputed}`,
        { "fade-in-bottom": !this.noAnimation },
        { "text-white": this.white },
        { [this.reduceSpacing]: this.reduceSpacing }
      ];
      return this.reduceSpacing || e.push(`${this.left ? "pr-lg-" : "pl-lg-"}${this.textImageSecondColWidthComputed}`), this.float ? e.push(`col-xl-${this.textImageSecondColWidthXl}`) : this.left && this.offset && e.push("offset-lg-1"), e;
    },
    textImageLightTextClass() {
      return [this.copyClasses || "", this.textImageLightText];
    }
  },
  mounted() {
    this.$refs.root && (this.sticky && Ye.init([this.$refs.root]), Fe.init([this.$refs.root]));
  },
  methods: {
    handleClick() {
      this.href && (document.location.href = this.href);
    }
  }
}, vd = { class: "container" }, _d = {
  key: 1,
  class: "text-image__overline d-inline-block mb-2 font-size-2"
}, yd = {
  key: 3,
  class: "richtext"
}, Dd = {
  key: 4,
  class: "text-image__img text-image__img--subline mb-5 mt-5"
}, xd = ["innerHTML"], Ad = {
  key: 5,
  class: "pt-4 pt-lg-6 pb-6"
}, Cd = {
  key: 1,
  class: "text-image__cta col-lg-12"
};
function wd(e, t, u, a, i, r) {
  const n = qe, o = ga, l = De, s = bt, c = Le, g = md;
  return d(), h("div", {
    class: A(r.textImageClass),
    style: ee(r.textImageStyle),
    ref: "root"
  }, [
    f("div", vd, [
      f("div", {
        class: A(["row", { "flex-row-reverse": u.left }])
      }, [
        u.float ? (d(), h("div", {
          key: 0,
          class: A([
            "text-image__floating-col",
            "justify-content-end",
            "text-image__floating-img",
            "position-absolute",
            "top-0",
            "right-0",
            "col-lg-" + r.textImageFirstColWidthComputed,
            "col-xl-" + r.textImageFirstColWidthXl
          ]),
          onClick: t[0] || (t[0] = (...m) => r.handleClick && r.handleClick(...m)),
          style: ee({ cursor: u.href ? "pointer" : void 0 })
        }, [
          L(n, {
            img: u.image,
            cloudinary: u.cloudinary,
            alt: u.alt,
            imgSrcSets: "textImageFloating",
            preset: "textImageFloating",
            lottie: u.lottie
          }, null, 8, ["img", "cloudinary", "alt", "lottie"])
        ], 6)) : _("", !0),
        f("div", {
          class: A(r.textImageFirstColClasses),
          onClick: t[1] || (t[1] = (...m) => r.handleClick && r.handleClick(...m)),
          style: ee({ cursor: u.href ? "pointer" : void 0 })
        }, [
          f("div", {
            class: A(["text-image__first-col-wrapper", { "fade-in-bottom": !u.noAnimation }]),
            "data-utility-animation-step": "1"
          }, [
            L(n, {
              img: u.image,
              cloudinary: u.cloudinary,
              imgSrcSets: r.textImageImgSrcSets,
              preset: r.textImagePreset,
              alt: u.alt,
              lottie: u.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ], 2)
        ], 6),
        f("div", {
          class: A(r.textImageSecondColClasses),
          "data-utility-animation-step": "1"
        }, [
          u.badge ? (d(), P(o, {
            key: 0,
            text: u.badge.text,
            icon: u.badge.icon,
            uppercase: !u.badge.noUppercase,
            classes: "text-image__badge"
          }, null, 8, ["text", "icon", "uppercase"])) : _("", !0),
          u.overline ? (d(), h("span", _d, S(u.overline), 1)) : _("", !0),
          u.headlineText ? (d(), P(l, {
            key: 2,
            level: u.level,
            classes: r.textImageHeadlineClassesComputed
          }, {
            default: he(() => [
              Ee(S(u.headlineText), 1)
            ]),
            _: 1
          }, 8, ["level", "classes"])) : _("", !0),
          u.subline ? (d(), h("span", yd, S(u.subline), 1)) : _("", !0),
          u.subline ? (d(), h("div", Dd, [
            L(n, {
              img: u.image,
              cloudinary: u.cloudinary,
              imgSrcSets: r.textImageImgSrcSets,
              preset: r.textImagePreset,
              alt: u.alt,
              lottie: u.lottie
            }, null, 8, ["img", "cloudinary", "imgSrcSets", "preset", "alt", "lottie"])
          ])) : _("", !0),
          f("div", {
            class: A(r.textImageLightTextClass),
            innerHTML: u.copy
          }, null, 10, xd),
          u.list ? (d(), h("div", Ad, [
            L(s, { list: u.list }, null, 8, ["list"])
          ])) : _("", !0)
        ], 2),
        u.cta ? (d(), h("div", Cd, [
          L(c, {
            text: u.cta.text,
            button: "",
            href: u.cta.href,
            trigger: u.cta.trigger
          }, null, 8, ["text", "href", "trigger"])
        ])) : _("", !0)
      ], 2)
    ]),
    u.modal ? (d(), P(g, {
      key: 0,
      form: u.modal.form,
      success: u.modal.success,
      error: u.modal.error,
      application: !0,
      clientName: u.modal.clientName,
      jobId: u.modal.jobId,
      apiUrl: u.modal.apiUrl,
      apiKey: u.modal.apiKey
    }, null, 8, ["form", "success", "error", "clientName", "jobId", "apiUrl", "apiKey"])) : _("", !0)
  ], 6);
}
const Ea = /* @__PURE__ */ j(bd, [["render", wd]]), Ed = {
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
    isLeft(e) {
      return e % 2 === 1;
    }
  },
  computed: {
    textImageListSize() {
      return this.textImages.length;
    }
  }
};
function Sd(e, t, u, a, i, r) {
  const n = Ea, o = wa;
  return d(), P(o, {
    classes: u.classes,
    headline: u.headline,
    level: u.level,
    "bg-color": u.bgColor,
    "headline-color": u.headlineColor,
    "headline-sticky": u.headlineSticky,
    spacing: u.spacing
  }, {
    default: he(() => [
      (d(!0), h(N, null, H(u.textImages, (l, s) => (d(), P(n, {
        key: s,
        image: l.image,
        alt: l.alt,
        "headline-text": l.headline,
        copy: l.copy,
        offset: !0,
        left: r.isLeft(s),
        spacing: l.spacing || "space-top-lg-2",
        index: s + 1,
        list: l.list
      }, null, 8, ["image", "alt", "headline-text", "copy", "left", "spacing", "index", "list"]))), 128))
    ]),
    _: 1
  }, 8, ["classes", "headline", "level", "bg-color", "headline-color", "headline-sticky", "spacing"]);
}
const Ld = /* @__PURE__ */ j(Ed, [["render", Sd]]), or = {
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
}, kd = {
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
}, Td = {
  tagName: "v-footer",
  components: {
    "footer-slider": kd
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
        x.isTrue(this.noMargin) ? "" : "mt-8 mt-lg-11",
        this.isCorporate ? "footer--corporate" : "",
        "vue-component"
      ];
    },
    isCorporate() {
      var e;
      return !((e = this.dataValue) != null && e.brandLogos);
    },
    style() {
      var e;
      return [(e = this.dataValue) != null && e.bgColor ? `background-color: ${this.dataValue.bgColor};` : ""];
    },
    dataValue() {
      return this.data ? { ...or, ...x.getJSON(this.data) } : { ...or };
    },
    links() {
      const e = this.lang.toLowerCase();
      if (e === "de" || e === "")
        return this.dataValue.links;
      {
        const t = x.capitalize(this.lang), u = this.dataValue[`links${t}`];
        return u || this.dataValue.links;
      }
    },
    locations() {
      const e = [];
      return e.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail
      }), this.dataValue.additionalLocations && this.dataValue.additionalLocations.length && e.push(...this.dataValue.additionalLocations), e;
    }
  },
  mounted() {
    this.bgColorRgbaValue = this.bgColorRgba();
  },
  methods: {
    bgColorRgba() {
      if (!this.$refs.root) return null;
      const u = window.getComputedStyle(this.$refs.root).getPropertyValue("background-color").replace(/[^\d,]/g, "").split(",");
      return `rgba(${u[0]}, ${u[1]}, ${u[2]}, 1)`;
    }
  },
  props: {
    data: Object,
    noMargin: {
      default: null
    },
    lang: String
  }
}, Bd = { class: "container" }, Fd = { class: "footer__content-row row" }, Nd = { class: "footer__content col-lg-12" }, qd = { class: "footer__address" }, Od = ["href", "target"], Pd = { class: "footer__locations nav nav-x-0 nav-white flex-column" }, Rd = {
  key: 0,
  class: "nav-item"
}, Md = {
  key: 1,
  class: "nav-item"
}, Id = {
  key: 2,
  class: "nav-item"
}, Vd = { class: "footer__postal-code" }, jd = { class: "footer__city" }, Hd = { class: "footer__country" }, Ud = {
  key: 4,
  class: "nav-item"
}, zd = ["href"], Gd = { class: "media" }, Wd = { class: "streamline-xs streamline-site-phone mr-3 d-flex" }, Jd = { class: "media-body" }, Xd = {
  key: 5,
  class: "footer__nav-item nav-item"
}, Zd = { class: "footer__nav-link nav-link" }, Kd = { class: "footer__offices" }, $d = { class: "footer__office" }, Yd = { key: 0 }, Qd = ["href"], e2 = { class: "d-flex" }, t2 = { class: "streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex" }, u2 = { class: "footer__mail media-body" }, r2 = {
  key: 0,
  class: "footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
}, a2 = ["href", "target"], i2 = { class: "footer__highlights" }, n2 = { class: "footer__partners" }, s2 = ["href", "target"], o2 = {
  key: 0,
  class: "footer__vertical-line"
}, l2 = {
  key: 0,
  class: "footer__content-row row"
}, c2 = { class: "footer__content col-lg-12" }, d2 = { class: "mt-3" }, f2 = { class: "row align-items-md-center mb-3" }, h2 = { class: "col-md-8 mb-4 mb-md-0" }, g2 = { class: "nav nav-sm nav-white nav-x-0 align-items-center" }, p2 = { class: "nav-item mr-6 footer__links" }, m2 = ["href"], b2 = { class: "col-md-4 text-md-right" }, v2 = { class: "list-inline mb-0 footer__socials" }, _2 = { class: "list-inline-item" }, y2 = ["title", "href"], D2 = { class: "row pb-2" }, x2 = { class: "col" }, A2 = { class: "text-white small" };
function C2(e, t, u, a, i, r) {
  const n = qe, o = Hu, l = Ne, s = ht("footer-slider");
  return d(), h("footer", {
    class: A(r.classList),
    style: ee(r.style),
    ref: "root"
  }, [
    f("div", Bd, [
      f("div", Fd, [
        f("div", Nd, [
          f("div", qd, [
            (d(!0), h(N, null, H(r.dataValue.logos, (c) => (d(), h("div", {
              class: A(["mb-3", c == null ? void 0 : c.classes])
            }, [
              f("a", {
                href: c.url,
                target: c.target,
                "aria-label": "Front",
                class: A([
                  "footer__logos-link d-block pr-6",
                  c.linkClasses ? c.linkClasses : "w-75 w-md-35 w-lg-100"
                ])
              }, [
                L(n, ce({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, Od)
            ], 2))), 256)),
            (d(!0), h(N, null, H(r.locations, (c) => (d(), h("ul", Pd, [
              c.name ? (d(), h("li", Rd, S(c.name), 1)) : _("", !0),
              c.over ? (d(), h("li", Md, S(c.over), 1)) : _("", !0),
              c.street ? (d(), h("li", Id, S(c.street), 1)) : _("", !0),
              c.city ? (d(), h("li", {
                key: 3,
                class: A(["nav-item footer__address-block", c.postalReversed ? "is-reversed" : ""])
              }, [
                f("span", Vd, S(c.postalCode), 1),
                f("span", jd, S(c.city), 1),
                f("span", Hd, S(c.country), 1)
              ], 2)) : _("", !0),
              c.number ? (d(), h("li", Ud, [
                f("a", {
                  class: "nav-link media",
                  href: "tel:" + c.number
                }, [
                  f("span", Gd, [
                    f("span", Wd, [
                      L(o, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    f("span", Jd, S(c.number), 1)
                  ])
                ], 8, zd)
              ])) : _("", !0),
              r.dataValue.offices ? (d(), h("li", Xd, [
                f("a", Zd, [
                  L(l, {
                    icon: "world",
                    class: "footer__nav-icon footer__office-icon"
                  }),
                  f("div", Kd, [
                    (d(!0), h(N, null, H(r.dataValue.offices, (g, m) => (d(), h("span", $d, [
                      Ee(S(g), 1),
                      m < r.dataValue.offices.length - 1 ? (d(), h("span", Yd, ", ")) : _("", !0)
                    ]))), 256))
                  ])
                ])
              ])) : _("", !0),
              c.mail ? (d(), h("li", {
                key: 6,
                class: A(["nav-item", r.locations.length > 1 ? "pt-4" : ""])
              }, [
                f("a", {
                  class: "footer__nav-link nav-link",
                  href: "mailto:" + c.mail
                }, [
                  f("span", e2, [
                    f("span", t2, [
                      L(o, {
                        icon: "site/mail",
                        "no-span": !0
                      })
                    ]),
                    f("span", u2, S(c.mail), 1)
                  ])
                ], 8, Qd)
              ], 2)) : _("", !0)
            ]))), 256)),
            r.isCorporate ? _("", !0) : (d(!0), h(N, { key: 0 }, H(r.dataValue.brandLogos, (c, g) => (d(), h(N, null, [
              c.title ? (d(), h("span", r2, S(c.title), 1)) : _("", !0),
              f("a", {
                href: c.url,
                target: c.target,
                class: A([
                  "footer__brand-logo-link d-block space-top-1",
                  g === 0 ? "mt-3" : "",
                  c.classes ? c.classes : "w-90"
                ])
              }, [
                L(n, ce({
                  cloudinary: !0,
                  ref_for: !0
                }, c), null, 16)
              ], 10, a2)
            ], 64))), 256))
          ]),
          f("div", i2, [
            f("div", n2, [
              (d(!0), h(N, null, H(r.dataValue.partners, (c, g) => (d(), h(N, null, [
                f("a", {
                  href: c.url,
                  target: c.target,
                  class: "footer__partner-images"
                }, [
                  L(n, ce({
                    cloudinary: !0,
                    ref_for: !0
                  }, c, { class: "footer__partner-image" }), null, 16)
                ], 8, s2),
                g < r.dataValue.partners.length - 1 ? (d(), h("div", o2)) : _("", !0)
              ], 64))), 256))
            ]),
            r.isCorporate ? _("", !0) : (d(), P(s, {
              key: 0,
              items: r.dataValue.highlights,
              "bg-color": i.bgColorRgbaValue
            }, null, 8, ["items", "bg-color"]))
          ])
        ])
      ]),
      r.isCorporate ? (d(), h("div", l2, [
        f("div", c2, [
          L(s, {
            items: r.dataValue.highlights,
            "bg-color": i.bgColorRgbaValue
          }, null, 8, ["items", "bg-color"])
        ])
      ])) : _("", !0),
      t[0] || (t[0] = f("hr", { class: "footer__divider mx-lg-3" }, null, -1)),
      f("div", d2, [
        f("div", f2, [
          f("div", h2, [
            f("ul", g2, [
              (d(!0), h(N, null, H(r.links, (c) => (d(), h("li", p2, [
                f("a", ce({
                  class: "nav-link",
                  href: c.url,
                  ref_for: !0
                }, c), S(c.title), 17, m2)
              ]))), 256))
            ])
          ]),
          f("div", b2, [
            f("ul", v2, [
              (d(!0), h(N, null, H(r.dataValue.socials, (c) => (d(), h("li", _2, [
                f("a", {
                  class: "btn btn-xs btn-icon btn-soft-light",
                  title: c.title,
                  href: c.url,
                  target: "_blank",
                  rel: "noopener"
                }, [
                  f("i", {
                    class: A(["fab", c.icon])
                  }, null, 2)
                ], 8, y2)
              ]))), 256))
            ])
          ])
        ]),
        f("div", D2, [
          f("div", x2, [
            f("p", A2, "Copyright © " + S(r.dataValue.copyright), 1)
          ])
        ])
      ])
    ])
  ], 6);
}
const w2 = /* @__PURE__ */ j(Td, [["render", C2]]), lr = {}, E2 = {
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
      var e;
      return (e = this.results) == null ? void 0 : e.slice(0, this.maxResults);
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
      const e = `${this.endpoint}`;
      if (e)
        return this.store ? this.handleSearch() : fetch(e, {
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
      const e = `${this.$refs.search.value}`;
      e && (this.results = this.searchEngine.search(e), console.log("handleSearch ~ this.results", this.results));
    },
    initSearchEngine() {
      const e = this.store, { results: t, weights: u } = e;
      if (!lr) return;
      const a = {
        includeScore: !0,
        ignoreLocation: !0,
        findAllMatches: !0,
        includeMatches: !0,
        // ignoreFieldNorm: true, // discuss this param with caro
        threshold: 0.2,
        keys: u
      };
      this.searchEngine = new lr(t, a);
    },
    handleSearchBar() {
      this.searchExpanded = !this.searchExpanded, window.addEventListener("click", this.handleOutsideClick.bind(this));
    },
    handleOutsideClick(e) {
      this.searchExpanded = x.isOutsideOf("search", e) ? !1 : this.searchExpanded;
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
}, S2 = {
  tagName: "v-header",
  computed: {
    classList() {
      return [
        "header",
        this.isScrolled ? T.IS_SCROLLED : "",
        this.isLight ? "header--light" : "",
        x.isTrue(this.hover) ? T.HOVERING : "",
        x.isTrue(this.product) ? "header--product" : "",
        x.isTrue(this.closed) ? "" : T.EXPANDED,
        x.isTrue(this.blendMode) ? "header--blending" : "",
        // this.activeNavigation.length > 0 ? '' : State.LOADING,
        "vue-component"
      ];
    },
    headerContainerClassList() {
      return ["header__container", this.containerClass];
    },
    containerClass() {
      return x.isTrue(this.product) ? "container" : "container-xxl";
    },
    homeObj() {
      var e;
      return (e = this.home) == null ? void 0 : e.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return x.isTrue(this.search);
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
      return x.isTrue(this.light) === !0;
    },
    hasLangSwitch() {
      var e;
      return Object.keys((e = this.home) == null ? void 0 : e.languages).length > 1;
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
      var t;
      const e = this.$refs.link;
      if (e)
        for (let u = 0; u < e.length; u++) {
          const a = e[u], i = (t = a == null ? void 0 : a.querySelector(".header__link-text-spacer")) == null ? void 0 : t.clientWidth;
          a.style.setProperty("--header-link-text-width", i + "px");
        }
    },
    showFlyoutBlock(e) {
      return !(e.length > this.maxLinkListsInFlyout);
    },
    isLowerBreakpoint() {
      return x.isBelowBreakpoint("md");
    },
    bindEvents() {
      window.addEventListener("scroll", this.handleScroll.bind(this)), document.addEventListener(ne.WINDOW_RESIZE, this.handleResize.bind(this));
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
      Object.keys(this.linkLists).forEach((e) => {
        this.linkLists[e] = !1;
      });
    },
    handleClick(e, t) {
      if (!this.isLowerBreakpoint()) return;
      const u = this.getId(e, t);
      this.linkLists[u] = !this.linkLists[u], this.linkLists[u] && (this.inTransition = !0), this.inUpdate = !0, this.closeAllSiblings(u), this.closeAllChildren();
    },
    closeAllSiblings(e) {
      Object.keys(this.linkLists).forEach((u) => {
        u !== e && (this.linkLists[u] = !1);
      });
    },
    closeAllChildren() {
      const e = new CustomEvent(ne.CHILD_HAS_UPDATE, {
        detail: {}
      });
      this.$refs.list.dispatchEvent(e);
    },
    getId(e, t) {
      return `${e.name}_${t}`;
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
    handleMouseOver(e, t) {
      if (!e.children) return;
      this.resetAllFlyouts(), this.hover = !0;
      const u = this.getLinkRef(t);
      if (!u) return;
      u.classList.add(T.EXPANDED);
      const a = this.getFlyoutRef(t);
      a && (this.flyoutIndex = t, a.classList.add(T.EXPANDED));
    },
    handleMouseOut(e) {
      var a;
      if ((a = e.relatedTarget) != null && a.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.getLinkRef(this.flyoutIndex);
      if (!t) return;
      t.classList.remove(T.EXPANDED);
      const u = this.getFlyoutRef(this.flyoutIndex);
      u && u.classList.remove(T.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts(), this.hover = !0;
      const e = this.$refs.languageSwitch;
      e && e.classList.add(T.EXPANDED);
    },
    handleLanguageOut(e) {
      var u;
      if ((u = e.relatedTarget) != null && u.closest(".header__flyout")) return;
      this.hover = !1;
      const t = this.$refs.languageSwitch;
      t && t.classList.remove(T.EXPANDED);
    },
    resetAllFlyouts() {
      var e, t;
      (e = this.$refs.link) == null || e.forEach((u) => {
        u.classList.remove(T.EXPANDED);
      }), (t = this.$refs.flyout) == null || t.forEach((u) => {
        u.classList.remove(T.EXPANDED);
      });
    },
    getFlyoutRef(e) {
      return this.getRef("flyout", e);
    },
    getLinkRef(e) {
      return this.getRef("link", e);
    },
    getRef(e, t) {
      const u = this.$refs[e][t];
      if (u)
        return u;
    },
    getHref(e) {
      var t;
      return e.children ? "javascript:void(0);" : (t = e.languages[this.lowerLang]) == null ? void 0 : t.url;
    },
    getTarget(e) {
      var u;
      const t = (u = e.languages[this.lowerLang]) == null ? void 0 : u.target;
      return t || null;
    },
    getNextLanguage() {
      const e = this.home.languages;
      if (!e) return;
      const t = Object.keys(e);
      if (!t.length) return;
      const u = t.filter((a) => a !== this.lowerLang);
      if (u.length)
        return u[0];
    },
    handleLanguageSwitch(e) {
      var a;
      const t = this.getActiveUrlByLang(e), u = t || ((a = this.home.languages[e]) == null ? void 0 : a.url);
      x.storageSave("preferedLanguage", e, !1), document.location.href = u;
    },
    getCurrentPath() {
      let e = "/";
      return typeof process < "u" && process.server ? e = this.$route.fullPath : e = window.location.pathname, e[e.length - 1] !== "/" && (e += "/"), e;
    },
    getActiveUrlByLang(e, t) {
      var o;
      const u = this.getCurrentPath(), a = "/", i = (l, s) => {
        if (!(l != null && l.title)) return;
        let c = l == null ? void 0 : l.url;
        u[(u == null ? void 0 : u.length) - 1] === a && c && c[(c == null ? void 0 : c.length) - 1] !== a && (c = c + a);
        const g = c === u, m = this.getParentLink(s);
        return t && g ? (l.active = !0, m && (m.active = !0)) : (l.active = !1, m && (m.active = !1)), g;
      }, r = (l, s) => s;
      let n = x.findRecursive(this.clonedNavigation, i, r);
      if (n || (n = x.findRecursive(this.meta, i, r)), n || (n = x.findRecursive(this.contact, i, r)), !n) {
        const l = this.getHrefLang(e);
        return l || this.getTranslatedUrl(u, e);
      }
      return (o = n[e]) == null ? void 0 : o.url;
    },
    getTranslatedUrl(e, t) {
      if (this.isBlogTagsUrl(e)) return this.getBlogTagsUrl(t, e);
      const u = this.getFolderSwitchSegment(e);
      return u ? this.getFolderSwitchUrl(t, e, u) : null;
    },
    getFolderSwitchSegment(e) {
      const t = this.home.folderSwitch;
      return t && t.find((a) => e.includes(a)) || null;
    },
    getFolderSwitchUrl(e, t, u) {
      if (!u) return t;
      let a;
      if (e === this.defaultLang) {
        const i = new RegExp(`/${this.lowerLang}/`);
        a = t.replace(i, "/");
      } else
        a = t.replace(u, `${e}/${u}`);
      return a;
    },
    isBlogTagsUrl(e) {
      return /\/blog\/tags/.test(e);
    },
    getBlogTagsUrl(e, t) {
      let u;
      const a = "tags";
      switch (e) {
        case "en":
          u = t.replace(a, `${a}-${e}`);
          break;
        default:
        case this.defaultLang:
          const i = new RegExp(`${a}-..`);
          u = t.replace(i, a);
          break;
      }
      return u + document.location.search;
    },
    getHrefLang(e) {
      const t = document == null ? void 0 : document.querySelector(`link[hreflang=${e}]`);
      if (t)
        return t.getAttribute("href");
    },
    getParentLink(e) {
      return this.clonedNavigation[e].languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, !0);
    },
    headerItemClasses(e) {
      var t;
      return ["header__item", (t = e.languages[this.lowerLang]) != null && t.active ? T.ACTIVE : ""];
    },
    isLinkListHidden(e, t) {
      const u = this.getId(e, t);
      return !this.linkLists[u];
    },
    headerLinkClasses(e, t) {
      return this.getListClasses(e, t, ["header__link custom"]);
    },
    headerProductListClasses(e, t) {
      return this.getListClasses(e, t, ["header__product-list", this.inTransition ? T.IN_TRANSITION : ""]);
    },
    getListClasses(e, t, u) {
      const a = this.isLinkListHidden(e, t);
      return [...u, a ? "" : T.EXPANDED];
    },
    updateProductListHeight() {
      const e = this.$refs["product-list"];
      if (e)
        for (let t = 0; t < e.length; t++) {
          const u = e[t], i = !u.classList.contains(T.EXPANDED) || u.style.height !== "" ? "" : u.scrollHeight + "px";
          u.style.height = i;
        }
    },
    navHighlightClasses(e, t) {
      return ["header__nav-highlight custom", this.isLinkListHidden(e, t) ? "is-hidden" : ""];
    },
    hasContactLink(e) {
      var t, u;
      return ((t = this.contact) == null ? void 0 : t.languages) && !((u = e.languages[this.lowerLang]) != null && u.emergency);
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
}, L2 = { class: "header__row row" }, k2 = { class: "header__col col" }, T2 = { class: "header__logo" }, B2 = ["href"], F2 = {
  class: "header__list",
  ref: "list"
}, N2 = ["href", "target", "onClick"], q2 = ["onMouseover"], O2 = { class: "header__link-text" }, P2 = { class: "header__link-text-spacer" }, R2 = ["href", "target"], M2 = { class: "header__product-list-data" }, I2 = { class: "header__product-list-title font-size-8 bold" }, V2 = { class: "header__product-list-subtitle" }, j2 = ["href"], H2 = { class: "header__footer" }, U2 = {
  key: 1,
  class: "header__contact header__contact--mobile"
}, z2 = ["href"], G2 = { class: "header__contact-text" }, W2 = { class: "header__contact-title" }, J2 = {
  key: 2,
  class: "header__button"
}, X2 = {
  key: 3,
  class: "header__language-switch"
}, Z2 = ["onClick"], K2 = {
  key: 0,
  class: "header__button"
}, $2 = { class: "header__link-text" }, Y2 = { class: "header__link-text-spacer" }, Q2 = {
  class: "header__language-switch-flyout",
  ref: "languageSwitchFlyout"
}, ef = ["onClick"], tf = { class: "row" }, uf = { class: "col" }, rf = {
  key: 0,
  class: "header__flyout-items"
}, af = {
  key: 0,
  class: "header__flyout-block"
}, nf = { class: "header__flyout-caption" }, sf = ["innerHTML"], of = ["href"], lf = { class: "header__contact-title" }, cf = {
  key: 1,
  class: "header__highlight-cta has-emergency-colors"
}, df = {
  key: 1,
  class: "header__product-list is-expanded"
}, ff = ["href", "target"], hf = { class: "header__product-list-data" }, gf = { class: "header__product-list-title font-size-8 bold" }, pf = { class: "header__product-list-subtitle" };
function mf(e, t, u, a, i, r) {
  var g, m, p, b, B, k;
  const n = qe, o = Ne, l = Aa, s = Le, c = E2;
  return d(), h(N, null, [
    f("div", {
      class: "header__spacer",
      style: ee(r.spacerBgColor)
    }, null, 4),
    f("header", {
      class: A(r.classList),
      onMouseover: t[5] || (t[5] = (...D) => r.handleHeaderMouseOver && r.handleHeaderMouseOver(...D)),
      onMouseout: t[6] || (t[6] = (...D) => r.handleHeaderMouseOut && r.handleHeaderMouseOut(...D))
    }, [
      f("div", {
        class: A(r.headerContainerClassList)
      }, [
        f("div", L2, [
          f("div", k2, [
            f("div", T2, [
              f("a", {
                href: (g = r.homeObj) == null ? void 0 : g.url
              }, [
                L(n, {
                  img: (m = u.home) == null ? void 0 : m.imgLight,
                  class: "header__logo-light",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"]),
                L(n, {
                  img: (p = u.home) == null ? void 0 : p.img,
                  class: "header__logo-default",
                  cloudinary: !0,
                  alt: "logo"
                }, null, 8, ["img"])
              ], 8, B2)
            ]),
            f("div", {
              class: "header__menu",
              onClick: t[0] || (t[0] = (...D) => r.handleCloseClick && r.handleCloseClick(...D))
            }, [
              L(o, {
                icon: "menu",
                class: "header__menu-icon",
                closed: i.closed
              }, null, 8, ["closed"])
            ]),
            f("nav", {
              class: "header__nav",
              onMouseout: t[1] || (t[1] = (...D) => r.handleMouseOut && r.handleMouseOut(...D))
            }, [
              f("ul", F2, [
                (d(!0), h(N, null, H(i.activeNavigation, (D, y) => {
                  var F, O, M, V, J, Z;
                  return d(), h("li", {
                    class: A(r.headerItemClasses(D))
                  }, [
                    D != null && D.languages ? (d(), h("a", {
                      key: 0,
                      class: A(r.headerLinkClasses(D, y)),
                      href: r.getHref(D),
                      target: r.getTarget(D),
                      onClick: (ie) => r.handleClick(D, y),
                      ref_for: !0,
                      ref: "link"
                    }, [
                      f("div", {
                        class: "header__link-content",
                        onMouseover: (ie) => r.handleMouseOver(D, y, ie)
                      }, [
                        f("span", O2, S((F = D.languages[r.lowerLang]) == null ? void 0 : F.title), 1),
                        f("span", P2, S((O = D.languages[r.lowerLang]) == null ? void 0 : O.title), 1),
                        D.children ? (d(), P(o, {
                          key: 0,
                          class: "header__link-icon",
                          icon: "expand",
                          size: "small"
                        })) : _("", !0)
                      ], 40, q2)
                    ], 10, N2)) : _("", !0),
                    (d(!0), h(N, null, H(D.children, (ie) => (d(), h(N, null, [
                      D.children && !ie.products ? (d(), P(l, {
                        key: 0,
                        list: ie,
                        lang: r.lowerLang,
                        hidden: r.isLinkListHidden(D, y),
                        classes: "header__link-list",
                        "no-animation": !0
                      }, null, 8, ["list", "lang", "hidden"])) : (d(), h("div", {
                        key: 1,
                        class: A(r.headerProductListClasses(D, y)),
                        ref_for: !0,
                        ref: "product-list"
                      }, [
                        (d(!0), h(N, null, H(ie.children, (te) => {
                          var v, C, w;
                          return d(), h("a", {
                            href: (v = te == null ? void 0 : te.languages[r.lowerLang]) == null ? void 0 : v.url,
                            target: te.target,
                            class: "header__product-list-item custom"
                          }, [
                            L(n, {
                              img: te.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            f("div", M2, [
                              f("div", I2, S((C = te == null ? void 0 : te.languages[r.lowerLang]) == null ? void 0 : C.title), 1),
                              f("div", V2, S((w = te == null ? void 0 : te.languages[r.lowerLang]) == null ? void 0 : w.subtitle), 1)
                            ])
                          ], 8, R2);
                        }), 256))
                      ], 2))
                    ], 64))), 256)),
                    (M = D.languages[r.lowerLang]) != null && M.emergency ? (d(), h("a", {
                      key: 1,
                      href: (V = D.languages[r.lowerLang]) == null ? void 0 : V.emergency.href,
                      class: A(r.navHighlightClasses(D, y))
                    }, [
                      L(o, {
                        icon: (J = D.languages[r.lowerLang]) == null ? void 0 : J.emergency.icon,
                        size: "medium"
                      }, null, 8, ["icon"]),
                      Ee(" " + S((Z = D.languages[r.lowerLang]) == null ? void 0 : Z.emergency.text), 1)
                    ], 10, j2)) : _("", !0)
                  ], 2);
                }), 256))
              ], 512),
              f("div", H2, [
                r.hasMeta ? (d(), P(l, {
                  key: 0,
                  list: r.metaList,
                  lang: r.lowerLang,
                  classes: "header__meta-list",
                  "no-animation": !0
                }, null, 8, ["list", "lang"])) : _("", !0),
                r.hasContact ? (d(), h("div", U2, [
                  (b = u.contact) != null && b.languages ? (d(), h("a", {
                    key: 0,
                    class: "header__contact-link custom",
                    href: (B = u.contact.languages[r.lowerLang]) == null ? void 0 : B.url
                  }, [
                    f("div", G2, [
                      L(o, {
                        icon: "phone-mail",
                        size: "medium"
                      }),
                      f("span", W2, S((k = u.contact.languages[r.lowerLang]) == null ? void 0 : k.title), 1)
                    ])
                  ], 8, z2)) : _("", !0)
                ])) : _("", !0),
                u.button ? (d(), h("div", J2, [
                  L(s, {
                    text: u.button.text,
                    href: u.button.href,
                    target: u.button.target,
                    skin: u.button.skin,
                    classes: i.ctaClassList
                  }, null, 8, ["text", "href", "target", "skin", "classes"])
                ])) : _("", !0),
                r.hasLangSwitch ? (d(), h("div", X2, [
                  (d(!0), h(N, null, H(u.home.languages, (D, y) => (d(), h("a", {
                    class: A({ "header__language-link custom": !0, active: y === r.lowerLang }),
                    onClick: (F) => r.handleLanguageSwitch(y)
                  }, S(y), 11, Z2))), 256))
                ])) : _("", !0)
              ])
            ], 32),
            u.button ? (d(), h("div", K2, [
              L(s, {
                text: u.button.text,
                href: u.button.href,
                target: u.button.target,
                skin: u.button.skin,
                classes: i.ctaClassList
              }, null, 8, ["text", "href", "target", "skin", "classes"])
            ])) : _("", !0),
            r.searchValue ? (d(), P(c, {
              key: 1,
              class: "header__search",
              language: "de",
              placeholder: "search"
            })) : _("", !0),
            r.hasLangSwitch ? (d(), h("div", {
              key: 2,
              class: "header__language-switch",
              onMouseover: t[2] || (t[2] = (...D) => r.handleLanguageOver && r.handleLanguageOver(...D)),
              onMouseout: t[3] || (t[3] = (...D) => r.handleLanguageOut && r.handleLanguageOut(...D)),
              ref: "languageSwitch"
            }, [
              f("span", $2, S(u.lang), 1),
              f("span", Y2, S(u.lang), 1),
              L(o, {
                class: "header__link-icon",
                icon: "expand",
                size: "small"
              }),
              f("div", Q2, [
                (d(!0), h(N, null, H(u.home.languages, (D, y) => (d(), h("a", {
                  class: A({ "header__language-link custom": !0, "d-none": y === r.lowerLang }),
                  onClick: (F) => r.handleLanguageSwitch(y)
                }, S(y), 11, ef))), 256))
              ], 512)
            ], 544)) : _("", !0)
          ])
        ])
      ], 2),
      f("div", {
        class: "header__flyout",
        onMouseout: t[4] || (t[4] = (...D) => r.handleMouseOut && r.handleMouseOut(...D))
      }, [
        f("div", {
          class: A(r.containerClass)
        }, [
          f("div", tf, [
            f("div", uf, [
              (d(!0), h(N, null, H(i.activeNavigation, (D, y) => {
                var F, O, M, V, J;
                return d(), h("div", {
                  class: "header__flyout-content",
                  ref_for: !0,
                  ref: "flyout"
                }, [
                  D.children ? (d(), h("div", rf, [
                    r.showFlyoutBlock(D.children) ? (d(), h("figure", af, [
                      f("figcaption", nf, S((F = D.languages[r.lowerLang]) == null ? void 0 : F.title), 1),
                      f("div", {
                        class: "header__flyout-description font-size-1 thin",
                        innerHTML: (O = D.languages[r.lowerLang]) == null ? void 0 : O.description
                      }, null, 8, sf),
                      r.hasContactLink(D) ? (d(), h("a", {
                        key: 0,
                        class: "header__link custom",
                        href: (M = u.contact.languages[r.lowerLang]) == null ? void 0 : M.url
                      }, [
                        L(o, {
                          icon: "phone-mail",
                          size: "medium"
                        }),
                        f("span", lf, S((V = u.contact.languages[r.lowerLang]) == null ? void 0 : V.title), 1)
                      ], 8, of)) : _("", !0),
                      (J = D.languages[r.lowerLang]) != null && J.emergency ? (d(), h("div", cf, [
                        L(s, ce({ ref_for: !0 }, D.languages[r.lowerLang].emergency), null, 16)
                      ])) : _("", !0)
                    ])) : _("", !0),
                    (d(!0), h(N, null, H(D.children, (Z) => (d(), h(N, null, [
                      D.children && !Z.products ? (d(), P(l, {
                        key: 0,
                        list: Z,
                        lang: r.lowerLang,
                        "no-animation": !0
                      }, null, 8, ["list", "lang"])) : (d(), h("div", df, [
                        (d(!0), h(N, null, H(Z.children, (ie) => {
                          var te, v, C;
                          return d(), h("a", {
                            href: (te = ie.languages[r.lowerLang]) == null ? void 0 : te.url,
                            target: ie.target,
                            class: "header__product-list-item custom"
                          }, [
                            L(n, {
                              img: ie.img,
                              class: "header__product-list-image",
                              cloudinary: !0
                            }, null, 8, ["img"]),
                            f("div", hf, [
                              f("div", gf, S((v = ie.languages[r.lowerLang]) == null ? void 0 : v.title), 1),
                              f("div", pf, S((C = ie.languages[r.lowerLang]) == null ? void 0 : C.subtitle), 1)
                            ])
                          ], 8, ff);
                        }), 256))
                      ]))
                    ], 64))), 256))
                  ])) : _("", !0)
                ], 512);
              }), 256))
            ])
          ])
        ], 2)
      ], 32)
    ], 34)
  ], 64);
}
const bf = /* @__PURE__ */ j(S2, [["render", mf]]), vf = {
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
}, _f = { "clip-path": "url(#icon-world-mask)" }, yf = ["stroke"], Df = ["stroke"], xf = ["stroke"], Af = ["stroke"], Cf = { id: "icon-world-mask" }, wf = ["fill"];
function Ef(e, t, u, a, i, r) {
  return d(), h("svg", ce(u.settings, {
    style: r.style,
    fill: "none",
    viewBox: "0 0 20 20"
  }), [
    f("g", _f, [
      f("path", {
        d: "M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z",
        stroke: r.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, yf),
      f("path", {
        d: "M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667",
        stroke: r.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Df),
      f("path", {
        d: "M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642",
        stroke: r.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, xf),
      f("path", {
        d: "M0.418945 9.57001H19.5831",
        stroke: r.stroke,
        "stroke-opacity": "0.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, 8, Af)
    ]),
    f("defs", null, [
      f("clipPath", Cf, [
        f("rect", {
          width: "20",
          height: "20",
          fill: r.stroke
        }, null, 8, wf)
      ])
    ])
  ], 16);
}
const Sf = /* @__PURE__ */ j(vf, [["render", Ef]]), Tf = {
  install(e) {
    e.component("MarkdownFiles", Oa), e.component("Arrow", Ma), e.component("Badge", ga), e.component("BlogRecent", oo), e.component("Card", ma), e.component("Carousel", bo), e.component("Contact", Xl), e.component("Content", Yl), e.component("Cta", Le), e.component("CtaList", bt), e.component("Faq", lc), e.component("FeatureGrid", Fc), e.component("FeatureGridItem", xa), e.component("FormCheckbox", zu), e.component("FormCheckboxes", _a), e.component("FormFields", ya), e.component("FormRadio", Uu), e.component("FormRadios", va), e.component("FormSelect", ba), e.component("Formular", Da), e.component("Headline", De), e.component("HeadlineRow", Wu), e.component("Hero", Kc), e.component("Icon", Ne), e.component("IntroText", a0), e.component("LinkList", Aa), e.component("ListContainer", wa), e.component("LogoList", b0), e.component("Lottie", pa), e.component("Menu", j0), e.component("ProductBlocks", $0), e.component("ProductStage", ld), e.component("Quote", fd), e.component("SiteIcons", Hu), e.component("SlotItems", Ca), e.component("SvgShape", Gu), e.component("TextImage", Ea), e.component("TextImageList", Ld), e.component("VFooter", w2), e.component("VHeader", bf), e.component("VImg", qe), e.component("World", Sf), e.component("Wrapper", lu);
  }
};
export {
  Ma as Arrow,
  ga as Badge,
  oo as BlogRecent,
  ma as Card,
  bo as Carousel,
  Xl as Contact,
  Yl as Content,
  Le as Cta,
  bt as CtaList,
  lc as Faq,
  Fc as FeatureGrid,
  xa as FeatureGridItem,
  zu as FormCheckbox,
  _a as FormCheckboxes,
  ya as FormFields,
  Uu as FormRadio,
  va as FormRadios,
  ba as FormSelect,
  Da as Formular,
  De as Headline,
  Wu as HeadlineRow,
  Kc as Hero,
  Ne as Icon,
  a0 as IntroText,
  Aa as LinkList,
  wa as ListContainer,
  b0 as LogoList,
  pa as Lottie,
  Oa as MarkdownFiles,
  j0 as Menu,
  $0 as ProductBlocks,
  ld as ProductStage,
  fd as Quote,
  Hu as SiteIcons,
  Ca as SlotItems,
  Gu as SvgShape,
  Ea as TextImage,
  Ld as TextImageList,
  w2 as VFooter,
  bf as VHeader,
  qe as VImg,
  Sf as World,
  lu as Wrapper,
  Tf as default
};
