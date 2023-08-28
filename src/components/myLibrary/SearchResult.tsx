import React from 'react';
import { createStyles, Card, Image, Text, Group, Box, ActionIcon, Rating, rem } from '@mantine/core';
import { IconFolderPlus, IconArrowBackUp } from '@tabler/icons-react';
import { BookApiData } from '../../types';

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
}

const SearchResult = ({ book }: SearchResultProps) => {
  const { classes } = useStyles();
  const [saveMode, setSaveMode] = React.useState<boolean>(false);

  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveMode(saveMode => !saveMode);
  };

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
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
                <Rating fractions={2} />
                <ActionIcon
                  variant="light"
                  color="teal"
                  onClick={() => {
                    setSaveMode(false);
                  }}>
                  <IconArrowBackUp size="1rem" />
                </ActionIcon>
              </>
            )}
            <ActionIcon component="button" type="submit" variant="filled" color="teal">
              <IconFolderPlus size="1rem" />
            </ActionIcon>
          </Card>
        </form>
      </Group>
    </Card>
  );
};

export default SearchResult;
