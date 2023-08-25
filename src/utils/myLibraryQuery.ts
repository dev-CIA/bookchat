import { getMyLibrary } from '../api';
import { QUERY_KEY } from '../constants';

const myLibraryQuery = (email: string) => ({
  queryKey: [QUERY_KEY.MY_LIBRARY, email],
  queryFn: () => getMyLibrary(email),
});

export default myLibraryQuery;
