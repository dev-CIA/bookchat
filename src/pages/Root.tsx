import React from 'react';
import { MainHeader } from '../components/common';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppShell, createStyles } from '@mantine/core';

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
  const { classes } = useStyles();

  React.useEffect(() => {
    (() => {
      navigate('/chat');
    })();
  }, []);

  return (
    <>
      <AppShell w={'80%'} miw={350} className={classes.wrapper} header={<MainHeader mainLinks={mockLinks.mainLinks} />}>
        <Outlet />
      </AppShell>
    </>
  );
};

export default Root;
