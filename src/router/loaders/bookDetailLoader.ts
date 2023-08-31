import { QueryClient } from '@tanstack/react-query';
import { getMyLibraryQuery, getBookDetailQuery } from '../../utils';
import { Params } from 'react-router-dom';

const bookDetailLoader =
  (queryClient: QueryClient, email: string) =>
  async ({ params }: { params: Params }) => {
    const myLibraryQuery = getMyLibraryQuery(email);

    if (typeof params.itemId === 'string') {
      const bookQuery = getBookDetailQuery(params.itemId);

      const myLibrary =
        queryClient.getQueryData(myLibraryQuery.queryKey) ?? (await queryClient.fetchQuery(myLibraryQuery));

      const bookDetail = queryClient.getQueryData(bookQuery.queryKey) ?? (await queryClient.fetchQuery(bookQuery));

      return {
        myLibrary,
        bookDetail,
      };
    } else {
      return { myLibrary: undefined, bookDetail: undefined };
    }
  };

export default bookDetailLoader;
