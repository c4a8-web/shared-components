const ImgSrcSets = {
  heroStudy: {
    srcSets: [
      {
        params: 'c_fill,g_face,h_600,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_800,w_800,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: 'c_fill,g_face,h_600,w_1000,x_0,y_0/',
        media: '(max-width: 1200px)',
      },
      {
        params: 'c_fill,g_face,h_600,w_1350,x_0,y_0/',
      },
    ],
  },
  square: {
    ratioClasses: 'ratio-1x1',
    srcSets: [
      {
        params: 'c_fill,g_face,h_600,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_400,w_400,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: 'c_fill,g_face,h_600,w_600,x_0,y_0/',
      },
    ],
  },
  testimonial: {
    srcSets: [
      {
        params: 'c_fill,g_face,h_600,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_400,w_400,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: '',
      },
    ],
  },
  event: {
    srcSets: [
      {
        params: 'c_fill,g_face,h_400,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_300,w_400,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: '',
      },
    ],
  },
  eventTeaser: {
    srcSets: [
      {
        params: 'c_fill,g_face,h_450,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_450,w_600,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: '',
      },
    ],
  },
  cardSmall: {
    srcSets: [
      {
        params: 'c_fill,g_face,h_450,w_600,x_0,y_0/',
        media: '(max-width: 576px)',
      },
      {
        params: 'c_fill,g_face,h_300,w_400,x_0,y_0/',
        media: '(max-width: 765px)',
      },
      {
        params: 'c_fill,g_face,h_600,w_800,x_0,y_0/',
      },
    ],
  },
  textImageFloating: {
    srcSets: [
      {
        params: 'c_fill,g_xy_center,h_1000,w_490,x_870,y_0/',
        media: '(max-width: 1199px)',
      },
      {
        params: 'c_fill,g_face,h_1200,w_800,x_0,y_0/',
      },
    ],
  },
  textImageFloatingSmallSquare: {
    ratioClasses: 'ratio-1x1',
    srcSets: [
      {
        params: 'c_fill,g_face,h_500,w_500,x_0,y_0/',
      },
    ],
  },
  textImageFloatingSmall: {
    ratioClasses: 'ratio-2x1',
    srcSets: [
      {
        params: 'c_fill,g_face,h_500,w_1000,x_0,y_0/',
      },
    ],
  },
};

export default ImgSrcSets;
