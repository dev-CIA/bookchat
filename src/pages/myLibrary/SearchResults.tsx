import { Container, Flex, Loader, Stack } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { InfiniteData } from '@tanstack/react-query';
import { SearchResult } from '../../components/myLibrary';
import { useInfiniteScroll } from '../../hooks';
import type { BookApiData, SearchResponse } from '../../types';
import { useMyLibraryQuery } from '../../hooks/queries';

interface SearchLoaderData {
  initialData: InfiniteData<SearchResponse>;
  searchWord: string;
}

const SearchResults = () => {
  const { searchWord } = useLoaderData() as SearchLoaderData;
  const { data, isFetchingNextPage, hasNextPage, observerTargetRef } = useInfiniteScroll(searchWord);
  const { libraryData: libraryIds } = useMyLibraryQuery({
    select: libraryData => libraryData.map(item => item.itemId),
  });

  return (
    <Container mt={20}>
      <Stack>
        {data?.pages.map(page =>
          page.item.map((book: BookApiData) => (
            <SearchResult key={book.itemId} book={book} libraryIds={libraryIds as number[]} />
          ))
        )}
      </Stack>
      <Flex ref={observerTargetRef} justify={'center'} mt={20}>
        {isFetchingNextPage && hasNextPage && <Loader variant="dots" />}
      </Flex>
    </Container>
  );
};

export default SearchResults;
