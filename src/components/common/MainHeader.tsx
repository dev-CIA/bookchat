import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, rem, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const HEADER_HEIGHT = rem(50);

const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  inner: {
    margin: '0',
    width: '100%',
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    // marginRight: `calc(${theme.spacing.sm} * -1)`,
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
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'button'>
      component="button"
      type="button"
      key={item.label}
      className={classes.anchor}
      onClick={event => {
        event.preventDefault();
        setActive(index);
      }}>
      <Link to={item.link} className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}>
        {item.label}
      </Link>
    </Anchor>
  ));

  return (
    <Header className={classes.wrapper} height={HEADER_HEIGHT} mb={10}>
      <Container className={classes.inner}>
        <div className={classes.links}>
          <Group spacing={10} className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Button size="xs">로그아웃</Button>
      </Container>
    </Header>
  );
};

export default MainHeader;
