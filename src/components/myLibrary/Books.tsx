import { Book } from './index';
import { SimpleGrid, Container } from '@mantine/core';
import { useMyLibraryQuery } from '../../hooks/queries';

interface dataProp {
  itemId: string;
  title: string;
  cover: string;
  rate: number;
}

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
        {libraryData.map((data: dataProp) => (
          <Book key={data.itemId} {...data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Books;
