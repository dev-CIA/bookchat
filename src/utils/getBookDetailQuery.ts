import { getBookDetails } from '../api';
import { QUERY_KEY } from '../constants';

const getBookDetailQuery = (itemId: string) => ({
  queryKey: [QUERY_KEY.BOOK_DETAIL, itemId],
  queryFn: () => getBookDetails(itemId),
});

export default getBookDetailQuery;
