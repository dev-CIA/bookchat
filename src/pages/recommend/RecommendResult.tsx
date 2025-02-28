import { Text, Group, Button, Title, Flex, createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ResultCard } from '../../components/recommend';
import { Link, useLocation } from 'react-router-dom';
import { RecommendResult as DataProp } from '../../types';

const useStyles = createStyles(() => ({
  comment: {
    whiteSpace: 'pre-line',
  },
}));

const RecommendResult = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const resultData = location.state;

  const slides = resultData.books.map((data: DataProp) => (
    <Carousel.Slide key={data.title}>
      <ResultCard {...data} />
    </Carousel.Slide>
  ));

  return (
    <Flex direction={'column'} align={'center'} gap={20} mt={20}>
      <Title>Book Chat이 추천합니다!</Title>
      <Text className={classes.comment}>{resultData.firstComment}</Text>
      <Carousel miw={300} maw={500} mx={'auto'} slideGap="xl" align="center" withIndicators loop>
        {slides}
      </Carousel>
      <Text className={classes.comment}>{resultData.lastComment.replace('. ', '.\n')}</Text>
      <Group>
        <Button component={Link} to="/recommend" variant="light">
          다른 조건으로 추천받기
        </Button>
        {/* <Button>같은 조건으로 추천 더 받기</Button> */}
      </Group>
    </Flex>
  );
};

export default RecommendResult;
