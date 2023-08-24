import React from 'react';
import { Container, Flex, Loader, Stack } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { SearchResult } from '../../components/myLibrary';
import { searchResultQuery } from '../../utils';
import { searchLoader } from '../../router/loaders';
import { BookApiData } from '../../types';

const SearchResults = () => {
  const { book } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof searchLoader>>>;

  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    ...searchResultQuery(book),
    getNextPageParam: lastPage => lastPage.startIndex + 1 ?? undefined,
  });

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

  return (
    <Container mt={20}>
      <Stack>
        {data?.pages.map(page => page.item.map((book: BookApiData) => <SearchResult key={book.itemId} {...book} />))}
      </Stack>
      <Flex ref={observerTargetRef} justify={'center'} mt={20}>
        {isFetchingNextPage && hasNextPage && <Loader variant="dots" />}
      </Flex>
    </Container>
  );
};

export default SearchResults;
