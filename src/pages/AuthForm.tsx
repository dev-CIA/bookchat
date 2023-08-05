import { Button, Paper, PaperProps, Text, Stack, Group, Anchor, Flex, Image } from '@mantine/core';
import { useToggle, upperFirst } from '@mantine/hooks';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { menuState } from '../recoil/atoms';

const AuthForm = (props: PaperProps) => {
  const [type, toggle] = useToggle(['login', 'register']);
  const { control } = useForm();
  const setActiveMenu = useSetRecoilState(menuState);

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

      <form>
        <Stack>
          <TextInput
            required
            name="email"
            control={control}
            label="이메일"
            placeholder="bookchat@mybookchat.com"
            radius="md"
          />

          {type === 'register' && (
            <TextInput name="nickname" control={control} label="닉네임" placeholder="Your nickname" radius="md" />
          )}

          <PasswordInput
            required
            name="password"
            control={control}
            label="비밀번호"
            placeholder="password"
            radius="md"
          />

          {type === 'register' && (
            <PasswordInput
              required
              name="passwordConfirm"
              control={control}
              label="비밀번호 확인"
              placeholder="password"
              radius="md"
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register' ? (
              <Flex gap={4}>
                이미 회원이신가요?
                <Text td="underline" fs="italic">
                  Login하러 가기
                </Text>
              </Flex>
            ) : (
              <Flex gap={4}>
                아직 회원이 아니신가요?
                <Text td="underline" fs="italic">
                  회원가입하러 가기
                </Text>
              </Flex>
            )}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default AuthForm;
