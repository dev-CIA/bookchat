import { createStyles, Card, Image, Text, AspectRatio, Group, Rating } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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

interface BookProps {
  key: string;
  image: string;
  title: string;
  rate: number;
}

const Book = ({ image, title, rate }: BookProps) => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(max-width: 48em');

  return (
    <Card
      key={title}
      p={smallScreen ? 5 : 10}
      radius="md"
      component="a"
      href="#"
      className={classes.card}
      shadow="sm"
      withBorder>
      <Card.Section>
        <AspectRatio ratio={720 / 1080}>
          <Image src={image} alt="book image" fit="contain" />
        </AspectRatio>
      </Card.Section>
      <Group mt={smallScreen ? 3 : 5}>
        <Rating value={rate} fractions={2} size={smallScreen ? 'xs' : 'md'} readOnly />
      </Group>
      <Text className={classes.title} mt={smallScreen ? 3 : 5} size={smallScreen ? 'sm' : 'md'} lineClamp={1}>
        {title}
      </Text>
    </Card>
  );
};

export default Book;
