import { getAladinSearchResults } from '../api';
import { QUERY_KEY } from '../constants';

const searchResultQuery = (book: string) => ({
  queryKey: [QUERY_KEY.SEARCH, `${book}`],
  queryFn: async ({ pageParam = 1 }) => await getAladinSearchResults(book, 'Keyword', pageParam),
});

export default searchResultQuery;
