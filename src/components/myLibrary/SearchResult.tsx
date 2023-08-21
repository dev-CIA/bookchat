import { createStyles, Card, Image, Text, Group, Box, ActionIcon, rem } from '@mantine/core';
import { IconFolderPlus } from '@tabler/icons-react';

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
  title: string;
  author: string;
  pubDate?: string;
  cover?: string;
  description?: string;
  link?: string;
}

const SearchResult = ({ title, author, pubDate, cover }: SearchResultProps) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={cover} height={160} width={120} fit="contain" />
        <Box className={classes.body}>
          <Text className={classes.title} my="xs" lineClamp={1}>
            {title}
          </Text>
          <Text size="xs">{author}</Text>
          <Text size="xs" color="dimmed">
            {pubDate}
          </Text>
        </Box>
        <ActionIcon className={classes.button} variant="filled" color="teal">
          <IconFolderPlus size="1rem" />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default SearchResult;
