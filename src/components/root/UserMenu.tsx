import { Menu, UnstyledButton, Avatar, ActionIcon } from '@mantine/core';
import { IconSettings, IconLogout, IconLogin } from '@tabler/icons-react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoginState, menuState, userState } from '../../recoil/atoms';
import { singout } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const UserMenu = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);
  const setMenu = useSetRecoilState(menuState);
  const navigate = useNavigate();
  const mediumScreen = useMediaQuery('(min-width: 64em');

  const handleSignout = async () => {
    navigate('/chat');

    const { data } = await singout();

    setUser({ email: null, nickName: null });
    setMenu('0');
    localStorage.removeItem('userState');
    localStorage.removeItem('menuState');
    setIsLogin(data.isLogin);
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      withArrow
      arrowPosition="center">
      <Menu.Target>
        {mediumScreen ? (
          <UnstyledButton>
            <Avatar radius="xl" color="teal" />
          </UnstyledButton>
        ) : (
          <ActionIcon>
            <IconSettings size={30} />
          </ActionIcon>
        )}
      </Menu.Target>

      <Menu.Dropdown>
        {isLogin ? (
          <>
            <Menu.Label>김아무개씨</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>설정</Menu.Item>

            <Menu.Divider />

            <Menu.Label></Menu.Label>

            <Menu.Item color="red" icon={<IconLogout size={14} />} onClick={handleSignout}>
              로그아웃
            </Menu.Item>
          </>
        ) : (
          <Menu.Item color="teal" icon={<IconLogin size={14} />} onClick={handleSignin}>
            로그인
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
