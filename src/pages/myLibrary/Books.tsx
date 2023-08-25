import { SimpleGrid, Container } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { Book } from '../../components/myLibrary';
import { useMyLibraryQuery } from '../../hooks/queries';
import { myLibraryLoader } from '../../router/loaders';
import type { BookApiData } from '../../types/bookData';

const Books = () => {
  const { searchWord } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof myLibraryLoader>>>;
  const { libraryData } = useMyLibraryQuery();

  const books =
    libraryData !== undefined && searchWord
      ? (libraryData as BookApiData[]).filter(book => book.title.includes(searchWord))
      : libraryData !== undefined && !searchWord
      ? libraryData
      : [];

  return (
    <Container py="sm" fluid m={0} px={0}>
      <SimpleGrid
        cols={6}
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'sm' },
          { maxWidth: 'lg', cols: 4, spacing: 'md' },
          { maxWidth: 'xxl', cols: 5, spacing: 'md' },
        ]}>
        {books.length !== 0 ? (
          (books as BookApiData[]).map(data => <Book key={`${data.itemId}`} {...data} />)
        ) : (
          <div>목록이 없습니다.</div>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Books;
