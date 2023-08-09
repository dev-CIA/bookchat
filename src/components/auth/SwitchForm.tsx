import { Button, Text, Group, Space } from '@mantine/core';
import { Link } from 'react-router-dom';

interface SwitchFormProps {
  mode: 'signin' | 'signup';
}

const SwitchForm = ({ mode }: SwitchFormProps) => {
  return (
    <>
      <Group position="apart" mt="xl">
        <Text display={'flex'} fz={'sm'} c={'dimmed'}>
          {mode === 'signin' ? '아직 회원이 아니신가요?' : '이미 회원이신가요?'}
          <Space w={5} />
          <Text component={Link} to={mode === 'signin' ? '/signup' : '/signin'} td="underline" fs="italic">
            {mode === 'signin' ? '회원가입하러 가기' : '로그인하러 가기'}
          </Text>
        </Text>
        <Button type="submit" radius="xl">
          {mode === 'signin' ? '로그인' : '회원가입'}
        </Button>
      </Group>
    </>
  );
};

export default SwitchForm;
