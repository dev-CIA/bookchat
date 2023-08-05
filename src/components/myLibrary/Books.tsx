import React from 'react';
import { Book } from './index';
import { SimpleGrid, Container } from '@mantine/core';
import { getMyLibrary } from '../../api';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

interface dataProp {
  isbn: string;
  image: string;
  title: string;
  rate: number;
}

const Books = () => {
  const email = useRecoilValue(userState).email;
  const [libraryData, setLibraryData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getMyLibrary(email);
        setLibraryData(data);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) return <pre>{error}</pre>;
  if (isLoading) return 'Loading...';

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
          <Book key={data.isbn + data.title} {...data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Books;
