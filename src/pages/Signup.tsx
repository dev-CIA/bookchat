import { Paper, PaperProps, Stack } from '@mantine/core';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState, isLoginState } from '../recoil/atoms';
import { singup } from '../api';
import { z } from 'zod';
import { signupSchema } from '../schema';
import { SwitchForm, WelcomeLogo } from '../components/auth';

type signupFormProp = z.infer<typeof signupSchema>;

const Signup = (props: PaperProps) => {
  const { control, handleSubmit } = useForm<signupFormProp>({
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const setIsLogin = useSetRecoilState(isLoginState);

  const submitForm = async (authForm: signupFormProp) => {
    console.log(authForm.email);
    try {
      const { data } = await singup(authForm);

      navigate('/signin');
    } catch (error: any) {
      console.error('회원가입 실패: ', error.message);
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
