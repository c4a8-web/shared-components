import { useSeoMeta } from "#imports";

export default function useSeo(seoMeta) {
  const { title, description, image } = seoMeta;

  if (title) {
    seoMeta.ogTitle = title;
    seoMeta.twitterTitle = title;
  }

  if (description) {
    seoMeta.ogDescription = description;
    seoMeta.twitterDescription = description;
  }

  if (image) {
    seoMeta.ogImage = image;
    seoMeta.twitterImage = image;
  }

  useSeoMeta(seoMeta);
}
