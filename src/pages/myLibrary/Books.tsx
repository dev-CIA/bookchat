import { Book } from '../../components/myLibrary/index';
import { SimpleGrid, Container } from '@mantine/core';
import { useMyLibraryQuery } from '../../hooks/queries';
import { BookApiData } from '../../types/bookData';

const Books = () => {
  const { libraryData } = useMyLibraryQuery();

  return (
    <Container py="sm" fluid m={0} px={0}>
      <SimpleGrid
        cols={6}
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'sm' },
          { maxWidth: 'lg', cols: 4, spacing: 'md' },
          { maxWidth: 'xxl', cols: 5, spacing: 'md' },
        ]}>
        {libraryData !== undefined || libraryData === Array<BookApiData>() ? (
          (libraryData as BookApiData[]).map(data => <Book key={`${data.itemId}`} {...data} />)
        ) : (
          <div></div>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Books;
