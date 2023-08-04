import { createStyles, Text, Group, Button, rem, Title, Paper, Flex } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconSlash } from '@tabler/icons-react';

const mockData = {
  comment: '맑은 날씨에 추리 소설을 추천해드리겠습니다. 제 추천은 다음과 같습니다.',

  books: [
    {
      id: 1,
      title: '셜록 홈즈',
      author: '아서 코난 도일',
      reason:
        "클래식한 추리 소설로 유명한 '셜록 홈즈' 시리즈는 명품입니다. 매우 유명한 캐릭터를 다루고 있어 읽는 동안 흥미로움을 느낄 수 있습니다.",
    },

    {
      id: 2,
      title: '용의자 X의 헌신',
      author: '히가시노 게이고',
      reason:
        '히가시노 게이고의 작품은 일본 추리 소설의 대표적인 작품 중 하나입니다. 꼬리물기 식으로 매우 흥미진진하며 독자를 계속해서 긴장시킵니다.',
    },
  ],
};

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

  slash: {
    color: 'white',
    strokeWidth: rem(1),
  },
}));

interface CardProps {
  id: number;
  title: string;
  author: string;
  reason: string;
}

const ResultCard = ({ title, author, reason }: CardProps) => {
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
        <Text color="white" mt={'sm'}>
          {reason}
        </Text>
      </Flex>
    </Paper>
  );
};

const RecommendResult = () => {
  const slides = mockData.books.map(book => (
    <Carousel.Slide key={book.title}>
      <ResultCard {...book} />
    </Carousel.Slide>
  ));

  return (
    <Flex direction={'column'} align={'center'} gap={20} mt={20}>
      <Title>Book Chat이 추천합니다!</Title>
      <Text>{mockData.comment}</Text>
      <Carousel miw={300} maw={500} mx={'auto'} slideGap="xl" align="center" withIndicators loop>
        {slides}
      </Carousel>
      <Group>
        <Button type="button">다른 조건으로 추천받기</Button>
        {/* <Button>같은 조건으로 추천 더 받기</Button> */}
      </Group>
    </Flex>
  );
};

export default RecommendResult;
