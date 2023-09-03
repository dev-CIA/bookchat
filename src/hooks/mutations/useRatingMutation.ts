import { useRecoilValue } from 'recoil';
import { useGenericMutation } from '.';
import { editRate } from '../../api';
import { QUERY_KEY } from '../../constants';
import { userState } from '../../recoil/atoms';
import type { BookApiData } from '../../types';

const useRatingMutation = () => {
  const { email } = useRecoilValue(userState);

  return useGenericMutation({
    queryKey: [QUERY_KEY.MY_LIBRARY, email],
    mutationFn: editRate,
    onMutate({ itemId, rate }) {
      return (libraryData: BookApiData[]) =>
        libraryData.map(book => (book.itemId === +itemId ? { ...book, rate } : book));
    },
  });
};

export default useRatingMutation;
