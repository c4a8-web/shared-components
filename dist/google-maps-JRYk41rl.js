var i = Object.defineProperty;
var l = (o, t, e) => t in o ? i(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var r = (o, t, e) => l(o, typeof t != "symbol" ? t + "" : t, e);
import { B as n } from "./index-DA50CDZe.js";
class m extends n {
  constructor(t, e) {
    super(t, e), this.mapsSelector = ".google-maps__map", this.maps = this.root.querySelector(this.mapsSelector), this.init();
  }
  init() {
    var s, a;
    const t = (a = (s = $ == null ? void 0 : $.HSCore) == null ? void 0 : s.components) == null ? void 0 : a.HSLeaflet;
    if (t === null || L === null) return;
    const e = t.init(this.maps);
    e.fire("movestart"), e._rawPanBy([e.getCenter().lng, e.getCenter().lat]), e.fire("move"), e.fire("moveend"), L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      id: "mapbox/streets-v11"
    }).addTo(e);
  }
}
r(m, "rootSelector", ".google-maps");
export {
  m as default
};
