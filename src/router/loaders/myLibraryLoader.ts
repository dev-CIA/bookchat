import { QueryClient } from '@tanstack/react-query';
import { getAuthQuery, getMyLibraryQuery } from '../../utils';
import { redirect } from 'react-router-dom';

const myLibraryLoader =
  (queryClient: QueryClient, email: string) =>
  async ({ request }: { request: Request }) => {
    if (!email) return redirect('/signin');

    try {
      const authQuery = getAuthQuery();

      queryClient.getQueryData(authQuery.queryKey) ?? (await queryClient.fetchQuery(authQuery));
    } catch (error) {
      console.log(error);
      if (error) return redirect('/signin');
    }

    const url = new URL(request.url);
    const searchWord = url.searchParams.get('searchWord') || '';

    const query = getMyLibraryQuery(email);

    return {
      initialData: queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)),
      searchWord,
    };
  };

export default myLibraryLoader;
