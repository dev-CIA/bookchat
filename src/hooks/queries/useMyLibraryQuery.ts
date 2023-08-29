import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState, isLoginState } from '../../recoil/atoms';
import { myLibraryQuery } from '../../utils';
import type { BookApiData } from '../../types/bookData';

interface optionsProps {
  select?: (data: BookApiData[]) => string[] | number[];
}

const useMyLibraryQuery = (options?: optionsProps) => {
  const isLogin = useRecoilValue(isLoginState);
  if (!isLogin) return { libraryData: new Array<BookApiData>() };

  const { email } = useRecoilValue(userState);

  const query = useQuery<BookApiData[], AxiosError, BookApiData[] | string[] | number[], string[]>({
    ...myLibraryQuery(email),
    staleTime: 5 * 60 * 1000,
    ...options,
  });

  return { ...query, libraryData: query.data };
};

export default useMyLibraryQuery;
