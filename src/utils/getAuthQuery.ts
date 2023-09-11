import { verify } from '../api/auth';
import { QUERY_KEY } from '../constants';

const getAuthQuery = () => ({
  queryKey: [QUERY_KEY.AUTH],
  queryFn: verify,
  retry: false,
  suspense: false,
  staleTime: 1000,
});

export default getAuthQuery;
