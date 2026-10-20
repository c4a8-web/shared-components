import { useAsyncData, queryCollection } from '#imports';

export function normalizeUmlauts(str) {
  const replacements = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss',
  };

  return str.replace(/[äöüÄÖÜß]/g, (match) => replacements[match]);
}

function augmentUmlauts(meta) {
  const augmented = { ...meta };

  Object.keys(meta).forEach((name) => {
    const normalized = normalizeUmlauts(name);

    if (normalized !== name) augmented[normalized] = meta[name];
  });

  return augmented;
}

export function reduceAuthors(meta, names) {
  if (!meta) return null;

  const wanted = [...new Set((Array.isArray(names) ? names : [names]).flat(Infinity).filter(Boolean))];
  const reduced = {};

  for (const name of wanted) {
    if (meta[name]) {
      reduced[name] = meta[name];
      continue;
    }

    const normalized = normalizeUmlauts(name);
    const match = Object.keys(meta).find((key) => normalizeUmlauts(key) === normalized);

    if (match) reduced[name] = meta[match];
  }

  return reduced;
}

export default function useAuthors(names) {
  const requested = names == null ? null : [...new Set((Array.isArray(names) ? names : [names]).flat(Infinity).filter(Boolean))].sort();
  const key = requested ? `authors_data:${requested.join('|')}` : 'authors_data';

  const { data: authors, pending, error, refresh } = useAsyncData(
    key,
    async () => queryCollection('authors_data').first(),
    {
      transform: (data) => {
        if (!data?.meta) return data;

        const meta = requested ? reduceAuthors(data.meta, requested) : augmentUmlauts(data.meta);

        return { ...data, meta };
      },
    }
  );

  return {
    authors: authors.value?.meta || null,
    pending,
    error,
    refresh,
  };
}
