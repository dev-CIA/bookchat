import { QueryClient } from '@tanstack/react-query';
import { getMyLibraryQuery, getBookDetailQuery } from '../../utils';
import { Params } from 'react-router-dom';

const bookDetailLoader =
  (queryClient: QueryClient, email: string) =>
  async ({ params }: { params: Params }) => {
    const myLibraryQuery = getMyLibraryQuery(email);

    if (typeof params.itemId === 'string') {
      const bookQuery = getBookDetailQuery(params.itemId);

      const initailMyLibrary =
        queryClient.getQueryData(myLibraryQuery.queryKey) ?? (await queryClient.fetchQuery(myLibraryQuery));

      const initialBookDetail =
        queryClient.getQueryData(bookQuery.queryKey) ?? (await queryClient.fetchQuery(bookQuery));

      return {
        initailMyLibrary,
        initialBookDetail,
      };
    } else {
      return { myLibrary: undefined, bookDetail: undefined };
    }
  };

export default bookDetailLoader;
