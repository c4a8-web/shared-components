const ImgSrcSets = {
  square: {
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
};

export default ImgSrcSets;
