import { Paper, PaperProps, Stack } from '@mantine/core';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { singup } from '../api';
import { z } from 'zod';
import { signupSchema } from '../schema';
import { SwitchForm, WelcomeLogo } from '../components/auth';
import { notifications } from '@mantine/notifications';
import { zodResolver } from '@hookform/resolvers/zod';

type signupFormProp = z.infer<typeof signupSchema>;

const Signup = (props: PaperProps) => {
  const { control, handleSubmit } = useForm<signupFormProp>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });
  const navigate = useNavigate();

  const submitForm = async (authForm: signupFormProp) => {
    try {
      const { data: user } = await singup(authForm);

      notifications.show({
        title: '회원가입 성공',
        message: `${user.nickname}님, BOOK CHAT에 오신 것을 환영합니다.`,
      });

      navigate('/signin');
    } catch (error: any) {
      console.error('회원가입 실패: ', error.message);

      notifications.show({
        title: '회원가입 실패',
        message: `${error.response.status === 409 ? error.response.data : '회원가입에 실패했습니다.'}.`,
      });
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder {...props} miw={350} maw={500} mx={'auto'} mt={50}>
      <WelcomeLogo />
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack>
          <TextInput
            required
            name="email"
            control={control}
            label="이메일"
            placeholder="bookchat@mybookchat.com"
            radius="md"
          />

          <TextInput name="nickname" control={control} label="닉네임" placeholder="닉네임" radius="md" />

          <PasswordInput
            required
            name="password"
            control={control}
            description="비밀번호는 영문, 숫자, 특수문자(! @ # $ % & * ?)의 조합 8~20자리로 입력해주세요"
            label="비밀번호"
            placeholder="password"
            radius="md"
          />

          <PasswordInput
            required
            name="confirmPassword"
            control={control}
            label="비밀번호 확인"
            placeholder="password"
            radius="md"
          />
        </Stack>

        <SwitchForm mode="signup" />
      </form>
    </Paper>
  );
};

export default Signup;
