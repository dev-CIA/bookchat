import { createStyles, Card, Image, Text, AspectRatio, Group, Rating } from '@mantine/core';

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

  return (
    <Card key={title} p="xs" radius="md" component="a" href="#" className={classes.card} shadow="sm" withBorder>
      <Card.Section>
        <AspectRatio ratio={720 / 1080}>
          <Image src={image} />
        </AspectRatio>
      </Card.Section>
      <Group mt={5}>
        <Rating value={rate} fractions={2} readOnly />
      </Group>
      <Text className={classes.title} mt={5} lineClamp={1}>
        {title}
      </Text>
    </Card>
  );
};

export default Book;
