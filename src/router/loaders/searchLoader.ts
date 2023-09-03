import { InfiniteData, QueryClient } from '@tanstack/react-query';
import { getSearchResultQuery } from '../../utils';
import { redirect } from 'react-router-dom';
import type { SearchResponse } from '../../types';

const searchLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const searchOption = url.searchParams.get('searchOption') || '';
    const searchWord = url.searchParams.get('searchWord') || '';
    const search = url.search;

    const query = getSearchResultQuery(searchWord);

    if (searchOption === '내 서재에서') {
      return redirect(`/mylibrary${search}`);
    }

    return {
      initialData:
        queryClient.getQueryData<InfiniteData<SearchResponse>>(query.queryKey) ??
        (await queryClient.fetchInfiniteQuery(query)),
      searchWord,
    };
  };

export default searchLoader;
