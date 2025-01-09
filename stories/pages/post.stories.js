import { getDefaultSettings, site, getParams } from '../../.storybook/templates';
import component from '!!raw-loader!./post.html';

export default {
  ...getDefaultSettings({
    component,
  }),
  ...getParams({ page: true }),
  title: 'Pages/Post',
};

const content =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>';
const excerpt =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const Post = {
  args: {
    page: {
      title: 'Post Title',
      author: ['Carolin Kanja'],
      blogtitlepic: 'head-cloud-summit-2024',
      excerpt,
    },
    site,
    content,
  },
};

export const Slider = {
  args: {
    page: {
      title: 'Post with Slider',
      author: ['Carolin Kanja'],
      blogtitlepic: 'head-cloud-summit-2024',
      excerpt,
      blogTitleImages: [
        {
          img: 'blog/heads/head-cloud-summit-2024.png',
          cloudinary: true,
        },
        { img: 'blog/heads/head-rsa-conference-2024.jpg', cloudinary: true },
      ],
    },
    site,
    content,
  },
};

const contentImageTypes = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p><p><img src="https://res.cloudinary.com/c4a8/image/upload/w_940,h_200,c_lpad/v1736412045/blog/pics/microsooft-365-copilot-default-link-setting.png" alt="Zuordnung der Managed Services zu NIS2" class="post__screenshot"></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p><p><img src="https://res.cloudinary.com/c4a8/image/upload/c_limit,f_auto,q_auto,w_800/blog/heads/head-emergency-calls.jpg" class="post__screenshot"></p><div class="screenshot full-width-container vue-component"><div class="screenshot__container container space-top-2 space-bottom-2"><div class="row d-flex align-items-center flex-row-reverse"><div class="col-lg-4 my-4 my-lg-0 py-4 offset-lg-1"><h2 class="h2-font-size  headline vue-component"></h2><div class="screenshot__copy">Der Dialog zeigt verschiedene Optionen für die Freigabeeinstellungen eines Dokuments.</div><!----></div><div class="screenshot__img d-flex align-items-center col-lg-7" style="background-color: rgb(252, 209, 22);"><a class="screenshot__img-frame js-fancybox media-viewer py-4" href="javascript:void;" data-hs-fancybox-options="{&quot;speed&quot;: 700}" data-src="https://res.cloudinary.com/c4a8/image/upload/v1736409600/blog/pics/microsoft-365-copilot-link-settings.png" data-caption="Freigabeeinstellungen eines Dokuments"><img src="https://res.cloudinary.com/c4a8/image/upload/c_limit,f_auto,q_auto/c_scale,w_700/blog/pics/microsoft-365-copilot-link-settings.png" class="v-img vue-component position-relative z-index-2 no-small img-responsive" alt="Freigabeeinstellungen eines Dokuments" srcset="https://res.cloudinary.com/c4a8/image/upload/c_limit,f_auto,q_auto,w_320/c_scale,w_700/blog/pics/microsoft-365-copilot-link-settings.png 320w,
https://res.cloudinary.com/c4a8/image/upload/c_limit,f_auto,q_auto,w_640/c_scale,w_700/blog/pics/microsoft-365-copilot-link-settings.png 640w,
https://res.cloudinary.com/c4a8/image/upload/c_limit,f_auto,q_auto,w_700/c_scale,w_700/blog/pics/microsoft-365-copilot-link-settings.png 700w" crossorigin="anonymous" width="700" height="517" sizes="(min-width: 50rem) 50rem, 90vw"><span class="media-viewer-container"><span class="media-viewer-icon"><i class="fas fa-plus"></i></span></span></a></div></div></div></div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>`;

export const ImageTypes = {
  args: {
    page: {
      title: 'Post Title',
      author: ['Carolin Kanja'],
      blogtitlepic: 'head-cloud-summit-2024',
      excerpt,
    },
    site,
    content: contentImageTypes,
  },
};
