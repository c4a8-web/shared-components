class SiteiconsTag {
  constructor({ engine, site, imageInfo }) {
    this.imageInfo = imageInfo;
    this.name = 'siteicons';

    this.site = site;
    this.engine = engine;

    this.register();
  }

  register() {
    if (this.engine === null) return;

    this.engine.registerTag(this.name, {
      parse: this.parse.bind(this),
      render: this.render.bind(this),
    });
  }

  parse(tagToken) {
    this.args = tagToken.args;
  }

  render(context, emitter) {
    return '<span style="display:none">I WILL ONLY BE RENDERED IN JEKYLL CONTEXT</span>';
    return `TODO implement ${this.name}Tag`;
  }
}

export default SiteiconsTag;
