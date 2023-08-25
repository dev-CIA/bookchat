import { InfiniteData, QueryClient } from '@tanstack/react-query';
import { searchResultQuery } from '../../utils';
import type { SearchResponse } from '../../types';

const searchLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const searchOption = url.searchParams.get('searchOption') || '';
    const searchWord = url.searchParams.get('searchWord') || '';

    const query = searchResultQuery(searchWord);

    return {
      initialData:
        queryClient.getQueryData<InfiniteData<SearchResponse>>(query.queryKey) ??
        (await queryClient.fetchInfiniteQuery(query)),
      searchWord,
    };
  };

export default searchLoader;
