import { getAladinSearchResults } from '../../api';

const searchLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const type = url.searchParams.get('type') || '';
  const book = url.searchParams.get('book') || '';
  let response;

  if (type === '통합 검색') {
    response = await getAladinSearchResults(book);
  }
  return response;
};

export default searchLoader;
