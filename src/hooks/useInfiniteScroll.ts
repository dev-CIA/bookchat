import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchResultQuery } from '../utils';

const useInfiniteScroll = (searchWord: string) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    ...getSearchResultQuery(searchWord),
    getNextPageParam: lastPage => lastPage?.startIndex + 1,
  });

  console.log('data: ', data);

  const observerTargetRef = React.useRef<HTMLDivElement | null>(null);

  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  React.useEffect(() => {
    const observerTarget = observerTargetRef.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(observerTarget as Element);
    return () => observer.unobserve(observerTarget as Element);
  }, [observerTargetRef, handleObserver]);

  return { data, isFetchingNextPage, hasNextPage, observerTargetRef };
};

export default useInfiniteScroll;
