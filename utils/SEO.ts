export const addMeta = ({ title, description, url }: SEOMeta) => {
  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    ogImage: "/favicon.png",
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: "/favicon.png",
    twitterCard: "summary",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  });
};
