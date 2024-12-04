import * as _nuxt_schema from '@nuxt/schema';

declare module '@nuxt/schema' {
    interface NuxtOptions {
        sitemap?: Record<string, any>;
        seo?: Record<string, any>;
    }
}
declare const _default: _nuxt_schema.NuxtModule<_nuxt_schema.ModuleOptions, _nuxt_schema.ModuleOptions, false>;

export { _default as default };
