export const copyQuote = (quote: string, author: string) => {
  navigator.clipboard.writeText(`"${quote}" - ${author}`);
};
