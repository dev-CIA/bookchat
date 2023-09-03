import { useQuery } from '@tanstack/react-query';
import { getBookDetailQuery } from '../../utils';
import type { BookApiData } from '../../types';

interface OptionProps {
  initialData?: BookApiData[];
}

const useBookDetailQuery = (itemId: string, options: OptionProps) => {
  const query = useQuery({
    ...getBookDetailQuery(itemId),
    staleTime: 5 * 60 * 1000,
    ...options,
  });
  return { ...query, bookDetailData: query.data };
};

export default useBookDetailQuery;
