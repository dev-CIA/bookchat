import { createStyles, Card, Image, Text, AspectRatio, Group, Rating } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { BookApiData } from '../../types';

const useStyles = createStyles(theme => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const Book = ({ data: book }: { data: BookApiData }) => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(max-width: 48em');

  return (
    <Card
      key={book.title}
      p={smallScreen ? 5 : 10}
      radius="md"
      component={Link}
      to={`/bookDetail/${book.itemId}`}
      className={classes.card}
      shadow="sm"
      withBorder>
      <Card.Section>
        <AspectRatio ratio={720 / 1080}>
          <Image src={book.cover} alt="book image" fit="contain" />
        </AspectRatio>
      </Card.Section>
      <Group mt={smallScreen ? 3 : 5}>
        <Rating value={book.rate} fractions={2} size={smallScreen ? 'xs' : 'md'} readOnly />
      </Group>
      <Text className={classes.title} mt={smallScreen ? 3 : 5} size={smallScreen ? 'sm' : 'md'} lineClamp={1}>
        {book.title}
      </Text>
    </Card>
  );
};

export default Book;
