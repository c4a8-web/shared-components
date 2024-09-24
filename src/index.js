const components = import.meta.glob('./components/**/*.{vue,js}', {
  eager: true,
});

export default {
  install(app) {
    for (const path in components) {
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '');
      app.component(componentName, components[path].default);
    }
  },
};
