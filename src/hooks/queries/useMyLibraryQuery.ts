import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants';
import { getMyLibrary } from '../../api';

const useMyLibraryQuery = () => {
  const { email } = useRecoilValue(userState);

  const query = useQuery({
    queryKey: [QUERY_KEY.MY_LIBRARY],
    queryFn: async () => await getMyLibrary(email),
  });

  return { ...query, libraryData: query.data?.data };
};

export default useMyLibraryQuery;
