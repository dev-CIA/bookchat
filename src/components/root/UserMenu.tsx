import { Menu, UnstyledButton, Avatar, ActionIcon } from '@mantine/core';
import { IconSettings, IconLogout, IconLogin } from '@tabler/icons-react';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../recoil/atoms';
import { singout } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const UserMenu = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const navigate = useNavigate();
  const mediumScreen = useMediaQuery('(min-width: 64em');

  const handleClick = async () => {
    const { data } = await singout();

    localStorage.removeItem('userState');
    localStorage.removeItem('menuState');
    setIsLogin(data.isLogin);
    navigate('/chat');
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

            <Menu.Item color="red" icon={<IconLogout size={14} />} onClick={handleClick}>
              로그아웃
            </Menu.Item>
          </>
        ) : (
          <Menu.Item color="teal" icon={<IconLogin size={14} />} onClick={handleClick}>
            로그인
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
