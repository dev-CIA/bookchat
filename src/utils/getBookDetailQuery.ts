import { getBookDetails } from '../api';
import { QUERY_KEY } from '../constants';

const getBookDetailQuery = (ISBN13: string) => ({
  queryKey: [QUERY_KEY.BOOK_DETAIL, ISBN13],
  queryFn: () => getBookDetails(ISBN13),
});

export default getBookDetailQuery;
