class CloudinaryTag {
  constructor({ engine, site, imageInfo }) {
    this.imageInfo = imageInfo;
    this.name = 'cloudinary';

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
    // TODO make a more complete version
    const data = context?.scopes[0];
    console.log('CloudinaryTag ~ render ~ data', data);
    const cloudinary = this.site?.cloudinary;
    const preset = cloudinary?.presets[data?.imgPreset];

    // TODO read params from preset
    const params = 'c_limit,f_auto,q_auto,dpr_auto';

    let baseUrl = `https://res.cloudinary.com/${cloudinary.cloud_name}/image/upload/${params}/`;

    if (preset) {
      let srcSet = '';

      for (let i = 0; i < preset?.steps; i++) {
        const srcSetWidth = ``;
        const srcSetParams = `h_800,w_800,x_0,y_0/`;

        srcSet = srcSet + `${baseUrl}${srcSetParams}${data.imgImg} ,`;
      }

      srcSet = srcSet.substr(0, srcSet.length - 1);

      return `<img alt="${data.imgAlt ?? ''}" class="img-responsive ${data.imgClass ?? ''}" crossorigin="anonymous"
                src="${baseUrl}${data.imgImg}" sizes="${preset?.sizes}"
                srcset="${srcSet}">`;
    } else {
      return `<img src="${baseUrl}q_auto:best/${data.imgImg}" alt="${data.imgAlt}">`;
    }
  }
}

export default CloudinaryTag;
