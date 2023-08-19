import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants';
import { getMyLibrary } from '../../api';
import type { BookApiData } from '../../types/bookData';

interface optionsProps {
  select?: (data: BookApiData[]) => string[];
}

const useMyLibraryQuery = (options?: optionsProps) => {
  const { email } = useRecoilValue(userState);

  const query = useQuery<BookApiData[], AxiosError, BookApiData[] | string[], string[]>({
    queryKey: [QUERY_KEY.MY_LIBRARY],
    queryFn: () => getMyLibrary(email),
    ...options,
  });

  return { ...query, libraryData: query.data?.data };
};

export default useMyLibraryQuery;
