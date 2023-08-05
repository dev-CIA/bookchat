import { useState } from 'react';
import { createStyles, rem, Footer, Flex, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { sizes } from '../../constants';

const useStyles = createStyles(theme => ({
  mainLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100em',
    height: sizes.HEADER_HEIGHT,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: rem(14),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontWeight: 700,
    transition: 'border-color 100ms ease, color 100ms ease',
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.teal[0] : theme.colors.teal[7],
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.colors.teal[0] : theme.colors.teal[7],
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface HeaderProps {
  mainLinks: LinkProps[];
}

const MobileFooter = ({ mainLinks }: HeaderProps) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Box
      key={item.label}
      className={classes.box}
      w={'25%'}
      p={0}
      h={sizes.HEADER_HEIGHT}
      onClick={event => {
        event.preventDefault();
        setActive(index);
      }}>
      <Link to={item.link} className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}>
        {item.label}
      </Link>
    </Box>
  ));

  return (
    <>
      <Footer height={sizes.HEADER_HEIGHT}>
        <Flex justify={'space-around'} align={'stretch'} h={sizes.HEADER_HEIGHT}>
          {mainItems}
        </Flex>
      </Footer>
    </>
  );
};

export default MobileFooter;
