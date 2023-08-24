import { InfiniteData, QueryClient } from '@tanstack/react-query';
import { searchResultQuery } from '../../utils';
import { SearchResponse } from '../../types';

const searchLoader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || '';
    const book = url.searchParams.get('book') || '';

    const query = searchResultQuery(book);

    if (type === '통합 검색') {
      return {
        initialData:
          queryClient.getQueryData<InfiniteData<SearchResponse>>(query.queryKey) ??
          (await queryClient.fetchInfiniteQuery(query)),
        book,
      };
    }
  };

export default searchLoader;
