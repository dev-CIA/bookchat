import { createStyles, Card, Image, Text, Group, Box, ActionIcon, rem } from '@mantine/core';
import { IconFolderPlus } from '@tabler/icons-react';
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
}));

interface SearchResultProps {
  book: BookApiData;
}

const SearchResult = ({ book }: SearchResultProps) => {
  const { classes } = useStyles();

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

        <ActionIcon variant="filled" color="teal">
          <IconFolderPlus size="1rem" />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default SearchResult;
