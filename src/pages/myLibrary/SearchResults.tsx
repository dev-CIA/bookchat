import { Container, Stack } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { SearchResult } from '../../components/myLibrary';
import { searchLoader } from '../../router/loaders';

const SearchResults = () => {
  const { book } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof searchLoader>>>;

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
