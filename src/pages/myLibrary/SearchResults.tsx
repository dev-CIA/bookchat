import { Container, Flex, Loader, Stack } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { searchLoader } from '../../router/loaders';
import { SearchResult } from '../../components/myLibrary';
import { useInfiniteScroll } from '../../hooks';
import { BookApiData } from '../../types';

const SearchResults = () => {
  const { book } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof searchLoader>>>;
  const { data, isFetchingNextPage, hasNextPage, observerTargetRef } = useInfiniteScroll(book);

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
