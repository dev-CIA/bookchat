import { Container, Stack } from '@mantine/core';
import { SearchResult } from '.';
import { useLoaderData } from 'react-router-dom';
import { SearchResponse } from '../../types';

const SearchResults = () => {
  const searchResponse = useLoaderData() as SearchResponse;

  return (
    <Container mt={20}>
      <Stack>
        {searchResponse.data.item.map(book => (
          <SearchResult key={book.itemId} {...book} />
        ))}
      </Stack>
    </Container>
  );
};

export default SearchResults;
