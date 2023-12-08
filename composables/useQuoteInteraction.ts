export const useQuoteInteraction = () => {
  const url = useRequestURL();
  const likes = useCookie<string[]>("likes");
  const isLiked = (id: string) => likes.value?.includes(id);
  const toggleLike = (id: string) => {
    if (isLiked(id)) {
      likes.value = likes.value.filter((currId) => currId !== id);
    } else {
      likes.value = [...(likes.value ?? []), id];
    }
  };
  const copy = (quote: string, author: string) => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
  };

  const share = (id: string) => {
    if (navigator.share) {
      navigator.share({
        url: `${url.origin}/quotes/${id}`,
      });
    } else {
      navigator.clipboard.writeText(`${url.origin}/quotes/${id}`);
    }
  };
  return {
    likes,
    isLiked,
    toggleLike,
    copy,
    share,
  };
};
