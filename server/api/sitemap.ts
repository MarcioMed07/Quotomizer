export default defineSitemapEventHandler(async (e) => {
  const { quotableUrl } = useAppConfig()
  let page = 1;
  let lastPage = 1;
  let idList:string[] = []
  while (page <= lastPage) {
    const response = await fetch(`${quotableUrl}/quotes?${new URLSearchParams({
      page: String(page),
      limit: String(150),
    })}`)
    const data = (await response.json() )as QuoteList
    if(lastPage!==data.totalPages){
      lastPage = data.totalPages
    }
    idList = [...idList,...data.results.map(result=>result._id)]
    page++;
  }
  return idList.map((id) => {
    return {
      loc: `/quotes/${id}`,
      lastmod: new Date(),
    };
  });
});
