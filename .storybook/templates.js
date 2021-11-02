import { Liquid } from "liquidjs";

export const createComponent = function async(include, component) {
  const engine = new Liquid();
  const wrapper = document.createElement("div");
  const tpl = engine.parse(component);
  const html = engine.renderSync(tpl, { include: include });

  // TODO get from config ?? so it can be the theme
  wrapper.classList.add("radiusaas");
  wrapper.innerHTML = html;

  return wrapper;
};
