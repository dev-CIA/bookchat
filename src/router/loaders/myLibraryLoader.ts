import { QueryClient } from '@tanstack/react-query';
import { getMyLibraryQuery } from '../../utils';
import { redirect } from 'react-router-dom';

const myLibraryLoader =
  (queryClient: QueryClient, email: string) =>
  async ({ request }: { request: Request }) => {
    if (!email) return redirect('/signin');

    const url = new URL(request.url);
    const searchWord = url.searchParams.get('searchWord') || '';

    const query = getMyLibraryQuery(email);

    return {
      initialData: queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)),
      searchWord,
    };
  };

export default myLibraryLoader;
