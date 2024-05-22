// TODO look at for implementation https://github.com/nhoizey/jekyll-cloudinary/blob/master/lib/jekyll/cloudinary.rb

const dummyDimensions = function (img, data) {
  let width;
  let height;

  switch (img) {
    case 'thumbs/video-thumb-wvd-webcast.jpg':
    case 'thumbs/video-thumb-fuchs.jpg':
    case 'thumbs/video-thumb-uniper.jpg':
    case 'thumbs/video-thumb-haniel.jpg':
    case 'shared-components/webcasts-test.jpg':
      width = 1280;
      height = 720;
      break;
    case 'blog/heads/head-emergency-calls.jpg':
    case 'blog/heads/head-audiocodes-review.jpg':
    case 'blog/heads/head-external-mail-hack.jpg':
      width = 800;
      height = 600;
      break;
    case 'people/people-sophie-luna.png':
      width = 600;
      height = 400;
      break;
    case '/people/people-sophie-luna.jpg':
      width = 460;
      height = 307;
      break;
    case '/demo/authors-demo.png':
      width = 920;
      height = 700;
      break;
    // case 'b_rgb:000000,bo_0px_solid_rgb:000,c_crop,g_custom,o_60/people/hessisch-bayrische-hochzeit.jpg':
    //   width = 1516;
    //   height = 432;
    //   break;
    case '/products/radius/radius-hero-screen.png':
      width = 763;
      height = 512;
      break;
    case '/casestudies/casestudy-demo.png':
      width = 1516;
      height = 672;
      break;
    case 'people/testimonials/matti-puolitaival.png':
      width = 586;
      height = 882;
      break;
    case 'shared-components/teaser-dekra.png':
      width = 1067;
      height = 600;
      break;
    case 'visuals/security-ninjacat.png':
      // TODO read those params out of the url
      if (data.cloudinaryImgUrl === 'c_fill,g_face,h_500,w_1000,x_0,y_0/visuals/security-ninjacat.png') {
        width = 1000;
        height = 500;
      } else {
        width = 800;
        height = 1200;
      }
      break;
    case 'logos/msft-advanced-specialization-security.png':
    case 'logos/msft-misa-mxdr.png':
      width = 405;
      height = 185;
      break;
    case 'logos/div-cyberwehr.png':
      width = 800;
      height = 365;
      break;
    case 'logos/isg-2021CyberSecurityRisingStar.png':
      width = 715;
      height = 308;
      break;
    case 'events/microsoft-cloud-device-security-event.jpg':
      width = 1280;
      height = 720;
      break;
    case 'blog/heads/head-cloud-summit-2024':
      width = 2880;
      height = 1620;
      break;
    default:
      width = 800;
      height = 800;
  }

  return {
    width,
    height,
  };
};

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
    const cloudinary = this.site?.cloudinary;
    const preset = cloudinary?.presets[data?.imgPreset];

    // TODO read params from preset
    const params = 'c_limit,f_auto,q_auto,dpr_auto';

    let baseUrl = `https://res.cloudinary.com/${cloudinary.cloud_name}/image/upload/${params}/`;

    if (preset) {
      let srcSet = '';

      for (let i = 0; i < preset?.steps; i++) {
        const dummyData = dummyDimensions(data.imgImg, data);

        let srcSetParams;

        if (data.imgImg.indexOf('h_') !== -1 && data.imgImg.indexOf('w_') !== -1) {
          srcSetParams = '';
        } else {
          srcSetParams = dummyData ? `h_${dummyData.height},w_${dummyData.width},x_0,y_0/` : `h_800,w_800,x_0,y_0/`;
        }

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
