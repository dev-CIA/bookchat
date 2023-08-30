import { Link } from 'react-router-dom';
import { Container, Image, Title, Rating, Text, Group, Stack, Space, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const mock = {
  title: '어린 왕자',
  rate: 4.5,
  link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=68534943&amp;partner=openAPI&amp;start=api',
  author: '앙투안 드 생텍쥐페리 (지은이), 황현산 (옮긴이)',
  pubDate: '2015-10-20',
  description:
    '전 세계인들의 사랑을 받은 가장 아름다운 이야기, 생텍쥐페리의 &lt;어린 왕자&gt;가 문학 평론가 황현산의 번역으로 열린책들에서 출간되었다. 황현산은 이 작품을 새롭게 번역하면서 생텍쥐페리의 진솔한 문체를 고스란히 살려 내기 위해 심혈을 기울였다.',
  isbn: '8932917248',
  isbn13: '9788932917245',
  itemId: 68534943,
  priceSales: 10620,
  priceStandard: 11800,
  mallType: 'BOOK',
  stockStatus: '',
  mileage: 590,
  cover: 'https://image.aladin.co.kr/product/6853/49/cover/8932917248_2.jpg',
  categoryId: 50921,
  categoryName: '국내도서>소설/시/희곡>프랑스소설',
  publisher: '열린책들',
  salesPoint: 43838,
  adult: false,
  fixedPrice: true,
  customerReviewRank: 10,
  subInfo: {},
};

const useStyles = createStyles(theme => ({
  link: {
    '&:hover': {
      color: theme.colors.teal[3],
    },
  },
}));

const BookDetail = () => {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery('(max-width: 48em');

  return (
    <Container>
      <Stack align="center">
        <Title order={2} ta="center">
          {mock.title}
        </Title>
        <Image src={mock.cover} width={smallScreen ? 150 : 250} fit="contain" />
        <Group position="center">
          <Rating fractions={2} value={mock.rate} readOnly />
        </Group>
      </Stack>
      <Title order={3}>저자</Title>
      <Text>{mock.author}</Text>
      <Space h="sm" />
      <Title order={3}>책 소개</Title>
      <Text>{mock.description}</Text>
      <Space h="sm" />
      <Title order={3}>출판사</Title>
      <Text>{mock.publisher}</Text>
      <Space h="sm" />
      <Title order={3}>ISBN</Title>
      <Text>{`${mock.isbn} ${mock.isbn13}`}</Text>
      <Space h="sm" />
      <Group position="apart">
        <Text className={classes.link} td="underline" c="teal.7" component={Link} to={mock.link}>
          상세 정보
        </Text>
        <Text fz={11}>도서 DB 제공: 알라딘</Text>
      </Group>
    </Container>
  );
};

export default BookDetail;
