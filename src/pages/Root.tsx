import React from 'react';
import { MainHeader, MobileHeader, MobileFooter } from '../components/root';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppShell, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const mockLinks = {
  mainLinks: [
    {
      link: '/chat',
      label: 'Book Chat',
    },
    {
      link: '/recommend',
      label: '추천받기',
    },
    {
      link: '/mylibrary',
      label: '내 서재',
    },
    {
      link: '/profile',
      label: '관리',
    },
  ],
};

const useStyles = createStyles(() => ({
  wrapper: {
    margin: '0 auto',
  },
}));

const Root = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { classes } = useStyles();
  const mediumScreen = useMediaQuery('(min-width: 64em');

  React.useEffect(() => {
    if (pathname !== '/chat' && pathname !== '/') return;
    navigate('/chat');
  }, []);

  return (
    <>
      <AppShell
        w={'80%'}
        miw={350}
        className={classes.wrapper}
        header={mediumScreen ? <MainHeader mainLinks={mockLinks.mainLinks} /> : <MobileHeader />}
        footer={mediumScreen ? <></> : <MobileFooter mainLinks={mockLinks.mainLinks} />}>
        <Outlet />
      </AppShell>
    </>
  );
};

export default Root;
