import { T as r } from "./index-CZuV85cm.js";
const a = (i, t, n) => {
  const e = i[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((o, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      s.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + t + (t.split("/").length !== n ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
class u {
  constructor() {
    this.init();
  }
  init() {
    this.lang = r.getLang(), this.load();
  }
  load() {
    this.loader = a(/* @__PURE__ */ Object.assign({ "./de/index.js": () => import("./index-SRAEg7uS.js"), "./en/index.js": () => import("./index-CXYonHNh.js"), "./es/index.js": () => import("./index-lAFE-bkp.js") }), `./${this.lang}/index.js`, 3).then((t) => {
      this.translations = t.default;
    });
  }
  translate(t, n) {
    return this.translations && this.translations[t] ? n ? this.translations[t].replace("%s", n) : this.translations[t] : `Translation key ${t} not found in ${this.lang} lang File`;
  }
  getTranslationData(t) {
    return t.reduce((n, e) => (n[e] = this.translate(e), n), {});
  }
}
export {
  u as default
};
