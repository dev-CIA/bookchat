import { QueryClient } from '@tanstack/react-query';
import { myLibraryQuery } from '../../utils';

const myLibraryLoader =
  (queryClient: QueryClient, email: string) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const searchWord = url.searchParams.get('searchWord') || '';

    const query = myLibraryQuery(email);

    return {
      initialData: queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)),
      searchWord,
    };
  };

export default myLibraryLoader;
