const Cloudinary = {
  cloud_name: 'c4a8',
  developer_mode: false,
  origin_url: '',
  verbose: false,
  presets: {
    avatar: {
      fallback_max_width: 300,
      min_width: 100,
      max_width: 300,
      steps: 2,
      sizes: '(min-width: 50rem)',
      figure: 'never',
      loading: 'auto',
    },
    textImageFloatingSmall: {
      'min-width': 320,
      'max-width': 1000,
      steps: 3,
      sizes: '(min-width: 766px) 766px, 991px',
      figure: 'never',
      loading: 'auto',
    },
    textImageFloating: {
      'min-width': 460,
      'max-width': 1000,
      steps: 2,
      sizes: '(min-width: 1200px) 1200px, 1300px',
      figure: 'never',
      loading: 'auto',
    },
    person: {
      'min-width': 50,
      'max-width': 200,
      steps: 3,
      sizes: '(min-width: 8rem) 8rem, 90vw',
      figure: 'never',
      loading: 'auto',
    },
    default: {
      min_width: 320,
      max_width: 1600,
      fallback_max_width: 800,
      steps: 5,
      sizes: '(min-width: 50rem) 50rem, 90vw',
      figure: 'never',
      loading: 'auto',
    },
    fullscreen4k: {
      min_width: 480,
      max_width: 3840,
      fallback_max_width: 3840,
      steps: 6,
      sizes:
        '(max-width: 30rem) 40rem, (max-width: 40rem) 50rem, (max-width: 50rem) 60rem, (max-width: 70rem) 80rem, (max-width: 90rem) 100rem, 200vw',
      figure: 'never',
      loading: 'auto',
    },
    thumb: {
      min_width: 320,
      max_width: 1600,
      fallback_max_width: 800,
      steps: 5,
      sizes: '(min-width: 50rem) 50rem, 90vw',
      figure: 'never',
      loading: 'auto',
    },
    cardSmall: {
      min_width: 600,
      max_width: 800,
      steps: 2,
      sizes: '(min-width: 50rem)',
      figure: 'never',
      loading: 'auto',
    },
    postTeaser: {
      min_width: 400,
      max_width: 800,
      steps: 2,
      sizes: '(min-width: 50rem)',
      figure: 'never',
      loading: 'auto',
    },
    author: {
      min_width: 100,
      max_width: 300,
      steps: 2,
      sizes: '(min-width: 50rem)',
      figure: 'never',
      loading: 'auto',
    },
    logoList: {
      min_width: 200,
      max_width: 500,
      fallback_max_width: 500,
      steps: 4,
      sizes: '(min-width: 50rem) 50rem, 90vw',
      figure: 'never',
      loading: 'auto',
    },
    eventThumb: {
      min_width: 300,
      max_width: 800,
      steps: 3,
      sizes: '(min-width: 50rem)',
      figure: 'never',
      loading: 'auto',
    },
  },
};

export default Cloudinary;

// TODO check if this could be removed due to the preset.js in the project JS
