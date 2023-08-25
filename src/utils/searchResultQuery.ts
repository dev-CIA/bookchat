import { getAladinSearchResults } from '../api';
import { QUERY_KEY } from '../constants';

const searchResultQuery = (searchWord: string) => ({
  queryKey: [QUERY_KEY.SEARCH, `${searchWord}`],
  queryFn: async ({ pageParam = 1 }) => await getAladinSearchResults(searchWord, 'Keyword', pageParam),
});

export default searchResultQuery;
