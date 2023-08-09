import { Button, Paper, PaperProps, Text, Stack, Group, Image, Space } from '@mantine/core';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { menuState, userState, isLoginState } from '../recoil/atoms';
import { signin } from '../api';
import { z } from 'zod';
import { signinSchema } from '../schema';

type signinFormProp = z.infer<typeof signinSchema>;

const Signin = (props: PaperProps) => {
  const { control, handleSubmit } = useForm<signinFormProp>({
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
            label="비밀번호"
            placeholder="password"
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Text display={'flex'} fz={'sm'} c={'dimmed'}>
            아직 회원이 아니신가요?
            <Space w={'xs'} />
            <Text component={Link} to={'/signup'} td="underline" fs="italic">
              회원가입하러 가기
            </Text>
          </Text>
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default Signin;
