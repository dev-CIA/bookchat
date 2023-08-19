import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Paper, Title, Text, Flex, Container, Loader } from '@mantine/core';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { WEATHER, MOOD } from '../constants';
import { FormInput } from '../components/recommend';
import { partialConditionForm } from '../schema';
import { sendCondition } from '../api/openai';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../recoil/atoms';
import { useMyLibraryQuery } from '../hooks/queries';

type FormData = z.infer<typeof partialConditionForm>;

const getResultData = (data: string) => {
  const result = { firstComment: '', books: [{}], lastComment: '' };

  const initialData = data.split('\n');
  initialData.forEach((data, idx) => {
    if (idx < 2 && !data.includes('id') && !data.includes('title') && data !== '') result.firstComment = data;
    if (data.includes('id') && data.includes('title')) {
      let firstIdx = data.indexOf('{');
      let lastIdx = data.indexOf('}');
      result.books.push(JSON.parse(data.slice(firstIdx, lastIdx + 1)));
    }
    if (idx > 2 && !data.includes('id') && !data.includes('title') && data !== '') result.lastComment = data;
  });
  result.books.shift();

  return result;
};

const RecommendForm = () => {
  const [waitingResult, setWaitingResult] = React.useState(false);

  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);
  const methods = useForm<FormData>({
    resolver: zodResolver(partialConditionForm),
    defaultValues: { book: '', weather: '', mood: '', other: '' },
  });

  const { libraryData } = useMyLibraryQuery({
    select: libraryData =>
      libraryData.map(item => `${item.title} / ${item.author}`).sort((a: string, b: string) => a.localeCompare(b)),
  });

  const formInputs = [
    {
      id: 'book',
      datas: isLogin ? (libraryData as string[]) : [''],
      title: '내 서재에서 좋아하는 책 기반으로 추천받기',
      placeholder: isLogin ? '좋아하는 책을 고르세요' : '이 항목은 로그인 후 사용가능합니다.',
      disabled: isLogin ? false : true,
    },
    { id: 'weather', datas: WEATHER, title: '날씨에 어울리는 책 추천받기', placeholder: '날씨를 고르세요' },
    { id: 'mood', datas: MOOD, title: '내 기분에 맞는 책 추천받기', placeholder: '기분을 고르세요' },
    {
      id: 'other',
      datas: [''],
      title: '기타 조건 입력하기',
      placeholder: '더 추가하고 싶은 조건을 명확하게 입력해주세요',
    },
  ];

  const submitForm: SubmitHandler<FormData> = async formDatas => {
    setWaitingResult(true);

    try {
      const { data } = await sendCondition(formDatas);

      const resultData = getResultData(data);

      navigate('result', { state: resultData });
    } catch (error: any) {
      console.error('요청 실패: ', error.message);
    } finally {
      setWaitingResult(false);
    }
  };

  return (
    <Container mt={10}>
      <Title order={1} size={30}>
        내 취향대로, 상황따라 책을 추천받아 보세요!
      </Title>
      <Text fz={'md'} p={8} c={'dimmed'}>
        * 다음 항목 중 하나 이상을 작성해주세요.
      </Text>
      {waitingResult ? (
        <Flex justify={'center'} mt={'10%'}>
          <Loader size={80} />
        </Flex>
      ) : (
        <Paper shadow="sm" p="md" radius={'md'} withBorder>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitForm)}>
              <Flex direction={'column'} gap={4}>
                {formInputs.map(input => (
                  <FormInput key={input.id} {...input} />
                ))}

                <Button type="submit" disabled={!methods.formState.isDirty}>
                  추천받기
                </Button>
              </Flex>
            </form>
          </FormProvider>
        </Paper>
      )}
    </Container>
  );
};

export default RecommendForm;
