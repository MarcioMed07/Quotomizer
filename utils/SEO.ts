export const addMeta = (title: string, description: string) => {
  const url = useRequestURL();
  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: "/favicon.png",
    ogUrl: url.href,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: "/favicon.png",
    twitterCard: "summary",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "google-site-verification",
        content: "nu-77OieqhVk61RxxNfTlBh2zMcTX7Hvb1o57PUGpxE",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  });
};
