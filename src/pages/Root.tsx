import React from 'react';
import { MainHeader, MobileHeader, MobileFooter } from '../components/root';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppShell, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { links } from '../constants';

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
        header={mediumScreen ? <MainHeader mainLinks={links.mainLinks} /> : <MobileHeader />}
        footer={mediumScreen ? <></> : <MobileFooter mainLinks={links.mainLinks} />}>
        <Outlet />
      </AppShell>
    </>
  );
};

export default Root;
