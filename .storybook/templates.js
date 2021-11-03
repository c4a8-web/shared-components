import { Liquid } from "liquidjs";
// to force hot reload on includes add them here
import { AllIncludes } from "./generatedIncludes";

export const createComponent = function async(include, component) {
  const engine = new Liquid({
    partials: ["includes"],
    dynamicPartials: false,
  });

  const wrapper = document.createElement("div");
  const tpl = engine.parse(component);
  const html = engine.renderSync(tpl, { include });

  // TODO get from config ?? so it can be the theme
  wrapper.classList.add("radiusaas");
  wrapper.innerHTML = html;

  return wrapper;
};
