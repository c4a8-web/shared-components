import { defineAsyncComponent } from "vue";

const components = import.meta.glob("./components/**/*.{vue,js}", {
  eager: true,
});

const componentRegistry = {};

for (const path in components) {
  const componentName = path
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  componentRegistry[componentName] = defineAsyncComponent(() =>
    Promise.resolve(components[path])
  );
}

export default componentRegistry;
