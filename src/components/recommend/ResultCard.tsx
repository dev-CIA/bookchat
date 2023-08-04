import { createStyles, Text, rem, Title, Paper, Flex } from '@mantine/core';
import { IconSlash } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  resultCard: {
    height: rem(440),
    backgroundImage: theme.fn.gradient(),
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
  },

  author: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  reason: {
    whiteSpace: 'pre-line',
  },

  slash: {
    color: 'white',
    strokeWidth: rem(1),
  },
}));

interface ResultCardProps {
  id: number;
  title: string;
  author: string;
  reason: string;
}

const ResultCard = ({ title, author, reason }: ResultCardProps) => {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" p={50} radius="md" className={classes.resultCard}>
      <Flex direction={'column'} align={'center'} mx={20} justify={'space-between'}>
        <Text className={classes.author} size="xs" mb={'sm'}>
          {author}
        </Text>
        <IconSlash className={classes.slash} />
        <Title order={3} my={'sm'} className={classes.title}>
          {title}
        </Title>
        <IconSlash className={classes.slash} />
        <Text className={classes.reason} color="white" mt={'sm'}>
          {reason.replace('. ', '.\n')}
        </Text>
      </Flex>
    </Paper>
  );
};

export default ResultCard;
