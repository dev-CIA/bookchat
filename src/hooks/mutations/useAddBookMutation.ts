import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import { addBook } from '../../api';
import { useGenericMutation } from '.';
import { QUERY_KEY } from '../../constants';
import type { BookApiData } from '../../types';

const useAddBookMutation = () => {
  const { email } = useRecoilValue(userState);

  return useGenericMutation({
    queryKey: [QUERY_KEY.MY_LIBRARY, email],
    mutationFn: addBook,
    onMutate({ newBook }) {
      return (libraryData: BookApiData[]) => [...libraryData, newBook];
    },
  });
};

export default useAddBookMutation;
