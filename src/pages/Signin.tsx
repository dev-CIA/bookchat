import { Paper, PaperProps, Text, Stack, Image } from '@mantine/core';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { menuState, userState, isLoginState } from '../recoil/atoms';
import { signin } from '../api';
import { z } from 'zod';
import { signinSchema } from '../schema';
import { SwitchForm } from '../components/auth';
import { zodResolver } from '@hookform/resolvers/zod';

type signinFormProp = z.infer<typeof signinSchema>;

const Signin = (props: PaperProps) => {
  const { control, handleSubmit } = useForm<signinFormProp>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const setActiveMenu = useSetRecoilState(menuState);
  const setUser = useSetRecoilState(userState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const submitForm = async (authForm: signinFormProp) => {
    console.log(authForm.email);
    try {
      const { data } = await signin(authForm);

      setUser(data);
      setIsLogin(true);
      navigate('/');
    } catch (error: any) {
      console.error('로그인 실패: ', error.message);
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder {...props} miw={350} maw={500} mx={'auto'} mt={50}>
      <Link
        to={'/'}
        onClick={() => {
          setActiveMenu('0');
        }}>
        <Image width={90} height={90} src="./logo/bookchatLogo.png" alt="logo" mx={'auto'} />
      </Link>
      <Text size="lg" weight={500} align="center">
        Book Chat에 오신 것을 환영합니다.
      </Text>

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
