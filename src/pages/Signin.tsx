import { Paper, PaperProps, Stack } from '@mantine/core';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState, isLoginState, menuState } from '../recoil/atoms';
import { signin } from '../api';
import { z } from 'zod';
import { signinSchema } from '../schema';
import { SwitchForm, WelcomeLogo } from '../components/auth';
import { zodResolver } from '@hookform/resolvers/zod';

type signinFormProp = z.infer<typeof signinSchema>;

const Signin = (props: PaperProps) => {
  const location = useLocation();
  const emailInput = location.pathname === '/signup' ? location.state : '';

  const { control, handleSubmit } = useForm<signinFormProp>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: emailInput || '',
      password: '',
    },
  });
  const setUser = useSetRecoilState(userState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const setActiveMenu = useSetRecoilState(menuState);
  const navigate = useNavigate();

  const submitForm = async (authForm: signinFormProp) => {
    try {
      const { data } = await signin(authForm);

      setUser(data);
      setIsLogin(true);
      setActiveMenu('0');
      navigate('/');
    } catch (error: any) {
      console.error('로그인 실패: ', error.message);
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

          <PasswordInput
            required
            name="password"
            control={control}
            description="비밀번호는 영문, 숫자, 특수문자(! @ # $ % & * ?)의 조합 8~20자리로 입력해주세요"
            label="비밀번호"
            placeholder="password"
            radius="md"
          />
        </Stack>
        <SwitchForm mode="signin" />
      </form>
    </Paper>
  );
};

export default Signin;
