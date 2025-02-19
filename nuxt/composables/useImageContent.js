import { useI18n } from '#imports';

export default function useImageContent() {
  const { t } = useI18n();
  const defaultAltKey = 'defaultImageAltFallback';

  return ({ img, cloudinary = true, alt = defaultAltKey } = {}) => {
    const keyPrefix = 'alt.';

    let deliveredAltText = '';

    if (alt === defaultAltKey) {
      const filename = img
        .split('/')
        .pop()
        .replace(/\.(?=[^.]*$)/, '-');
      const potentialKey = keyPrefix + filename;
      const potentialAltText = t(potentialKey);

      deliveredAltText = potentialAltText === potentialKey ? t(keyPrefix + defaultAltKey) : potentialAltText;
    } else {
      const potentialAltText = t(keyPrefix + alt);

      deliveredAltText = potentialAltText === keyPrefix + alt ? t(keyPrefix + defaultAltKey) : potentialAltText;
    }

    return {
      img,
      cloudinary,
      alt: deliveredAltText,
    };
  };
}
