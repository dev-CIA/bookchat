import { Container, Flex, Loader, Stack } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { InfiniteData } from '@tanstack/react-query';
import { SearchResult } from '../../components/myLibrary';
import { useInfiniteScroll } from '../../hooks';
import type { BookApiData, SearchResponse } from '../../types';

interface SearchLoaderData {
  initialData: InfiniteData<SearchResponse>;
  searchWord: string;
}

const SearchResults = () => {
  const { searchWord } = useLoaderData() as SearchLoaderData;
  const { data, isFetchingNextPage, hasNextPage, observerTargetRef } = useInfiniteScroll(searchWord);

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
