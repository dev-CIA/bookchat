import React from 'react';
import { createStyles, Card, Image, Text, Group, Box, ActionIcon, Rating, rem } from '@mantine/core';
import { IconFolderPlus, IconArrowBackUp } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import { useAddBookMutation } from '../../hooks/mutations';
import type { BookApiData } from '../../types';

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
    height: rem(160),
  },

  button: {
    position: 'absolute',
    bottom: theme.spacing.md,
    right: theme.spacing.md,
  },

  save: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(3),
    position: 'absolute',
    bottom: theme.spacing.md,
    right: theme.spacing.md,
  },
}));

interface SearchResultProps {
  book: BookApiData;
  libraryIds: number[];
}

const checkMyLibrary = (id: number, libraryIds: number[]) => libraryIds.some(bookId => bookId === id);

const SearchResult = ({ book, libraryIds }: SearchResultProps) => {
  const { classes } = useStyles();
  const [saveMode, setSaveMode] = React.useState<boolean>(false);
  const [rate, setRate] = React.useState<number>(book.rate ? book.rate : 0);
  const { email } = useRecoilValue(userState);

  const { mutate: addBook } = useAddBookMutation();

  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveMode(saveMode => !saveMode);

    if (saveMode) {
      const newBook = { ...book, rate };
      addBook({ email, newBook });
    }
  };

  const handleCancelAdd = () => {
    setSaveMode(false);
    setRate(0);
  };

  return (
    <Card withBorder radius="md" p={0} className={classes.card} component={Link} to={`/bookDetail/${book.isbn13}`}>
      <Group noWrap spacing={0}>
        <Image src={book.cover} height={160} width={120} fit="contain" />
        <Box className={classes.body}>
          <Text className={classes.title} my="xs" lineClamp={1}>
            {book.title}
          </Text>
          <Text size="xs">{book.author}</Text>
          <Text size="xs" color="dimmed">
            {book.pubDate}
          </Text>
        </Box>
        <form onSubmit={handleAddBook}>
          <Card className={classes.save} padding={5} withBorder={saveMode}>
            {saveMode && (
              <>
                <Rating fractions={2} value={rate} onChange={setRate} />
                <ActionIcon variant="light" color="teal" onClick={handleCancelAdd}>
                  <IconArrowBackUp size="1rem" />
                </ActionIcon>
              </>
            )}
            <ActionIcon
              component="button"
              type="submit"
              variant="filled"
              color="teal"
              disabled={checkMyLibrary(book.itemId, libraryIds)}>
              <IconFolderPlus size="1rem" />
            </ActionIcon>
          </Card>
        </form>
      </Group>
    </Card>
  );
};

export default SearchResult;
