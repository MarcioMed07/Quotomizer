export {};
declare global {
  interface Quote {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
  }
  interface SEOMeta {
    title: string;
    description: string;
    url: string;
  }
}
