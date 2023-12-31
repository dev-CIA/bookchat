import React from 'react';
import { createStyles, Header, Container, Anchor, Group, rem, Button } from '@mantine/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link, useLocation } from 'react-router-dom';
import { isLoginState, menuState } from '../../recoil/atoms';
import { UserMenu } from '.';
import { sizes } from '../../constants';

const useStyles = createStyles(theme => ({
  inner: {
    padding: '0',
    width: '80%',
    height: sizes.HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: sizes.HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  mainLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.lg}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  anchor: {
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface MainHeaderProps {
  mainLinks: LinkProps[];
}

const MainHeader = ({ mainLinks }: MainHeaderProps) => {
  const { classes, cx } = useStyles();
  const [activeMenu, setActiveMenu] = useRecoilState(menuState);
  const isLogin = useRecoilValue(isLoginState);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setActiveMenu(pathname.includes('/chat') ? '0' : pathname.includes('/recommend') ? '1' : '2');
  }, []);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'button'>
      component="button"
      type="button"
      key={item.label}
      className={classes.anchor}
      onClick={event => {
        event.preventDefault();
        setActiveMenu(index + '');
      }}>
      <Link to={item.link} className={cx(classes.mainLink, { [classes.mainLinkActive]: index === +activeMenu })}>
        {item.label}
      </Link>
    </Anchor>
  ));

  return (
    <>
      <Header height={sizes.HEADER_HEIGHT} mb={10}>
        <Container className={classes.inner} fluid>
          <div className={classes.links}>
            <Group spacing={10}>{mainItems}</Group>
          </div>
          {isLogin ? (
            <UserMenu />
          ) : (
            <Button size="xs" component={Link} to="/signin">
              로그인
            </Button>
          )}
        </Container>
      </Header>
    </>
  );
};

export default MainHeader;
