import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Container, Image, Title, Rating, Text, Group, Stack, Space, createStyles, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { unescape } from '../utils';
import { bookDetailLoader } from '../router/loaders';
import { BookApiData } from '../types';
import useRatingMutation from '../hooks/mutations/useRatingMutation';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/atoms';
import { useMyLibraryQuery } from '../hooks/queries';
import { useAddBookMutation } from '../hooks/mutations';
import useBookDetailQuery from '../hooks/queries/useBookDetailQuery';

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
  const { email } = useRecoilValue(userState);
  const params = useParams();

  const { initailMyLibrary, initialBookDetail } = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof bookDetailLoader>>
  >;

  const { libraryData } = useMyLibraryQuery({ initialData: initailMyLibrary });
  const { bookDetailData } = useBookDetailQuery(params.itemId as string, { initialData: initialBookDetail });
  const detailData = bookDetailData.item[0];

  const [rate, setRate] = React.useState(0);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const _rate = (libraryData as BookApiData[]).find((data: BookApiData) => data.itemId === detailData.itemId)?.rate;

  const { mutate: editRate } = useRatingMutation();
  const { mutate: addBook } = useAddBookMutation();

  React.useEffect(() => {
    setRate(_rate || 0);
    setIsEditMode(_rate !== undefined ? false : true);
  }, [_rate, libraryData]);

  const handleEditMode = () => {
    setIsEditMode(isEditMode => !isEditMode);
  };

  const handleRate = (rate: number) => {
    setRate(rate);
    setIsEditMode(isEditMode => !isEditMode);
    if (_rate) editRate({ email, itemId: detailData.itemId, rate: rate });
    if (!_rate) addBook({ email, newBook: { ...detailData, rate: rate } });
  };

  return (
    <Container>
      <Stack align="center">
        <Title order={2} ta="center">
          {unescape(detailData.title)}
        </Title>
        <Image src={detailData.cover} width={smallScreen ? 150 : 250} fit="contain" />
        <Tooltip.Floating label={!isEditMode && '수정하려면 더블클릭하세요'} color="gray.6" position="bottom">
          <Group position="center">
            <Rating
              value={rate}
              fractions={2}
              size="xl"
              readOnly={!isEditMode}
              onChange={rate => handleRate(rate)}
              onDoubleClick={handleEditMode}
            />
          </Group>
        </Tooltip.Floating>
      </Stack>
      <Title order={3}>저자</Title>
      <Text>{detailData.author}</Text>
      <Space h="sm" />
      <Title order={3}>책 소개</Title>
      <Text>{unescape(detailData.description)}</Text>
      <Space h="sm" />
      <Title order={3}>출판사</Title>
      <Text>{detailData.publisher}</Text>
      <Space h="sm" />
      <Title order={3}>페이지 수</Title>
      <Text>{detailData.subInfo.itemPage}</Text>
      <Space h="sm" />
      <Title order={3}>ISBN</Title>
      <Text>{`${detailData.isbn} ${detailData.isbn13}`}</Text>
      <Space h="sm" />
      <Group position="apart">
        <Text className={classes.link} td="underline" c="teal.7" component={Link} to={detailData.link}>
          상세 정보
        </Text>
        <Text fz={11}>도서 DB 제공: 알라딘</Text>
      </Group>
    </Container>
  );
};

export default BookDetail;
