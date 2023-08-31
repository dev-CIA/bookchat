import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {
  Container,
  Image,
  Title,
  Rating,
  Text,
  Group,
  Stack,
  Space,
  createStyles,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { unescape } from '../utils';
import { bookDetailLoader } from '../router/loaders';
import { IconPencil, IconCheck } from '@tabler/icons-react';
import { BookApiData } from '../types';

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

  const { myLibrary, bookDetail } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof bookDetailLoader>>>;
  const detailData = bookDetail.item[0];
  const rate = myLibrary.find((data: BookApiData) => data.itemId === detailData.itemId)?.rate || 0;

  const [isEditMode, setIsEditMode] = React.useState(false);

  return (
    <Container>
      <Stack align="center">
        <Title order={2} ta="center">
          {unescape(detailData.title)}
        </Title>
        <Image src={detailData.cover} width={smallScreen ? 150 : 250} fit="contain" />
        <Group position="center">
          <Rating fractions={2} value={rate} readOnly={!isEditMode} />
          <Tooltip label={isEditMode ? '저장' : '별점 수정'} color="gray.6" position="bottom" withArrow>
            <ActionIcon variant="outline" color="teal" radius="lg">
              {isEditMode ? <IconCheck size={18} /> : <IconPencil size={18} />}
            </ActionIcon>
          </Tooltip>
        </Group>
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
