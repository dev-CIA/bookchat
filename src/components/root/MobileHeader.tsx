import { Header, Title, createStyles } from '@mantine/core';
import { sizes, links } from '../../constants';
import { UserMenu } from '.';
import { useLocation } from 'react-router-dom';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    border: 'none',
  },
}));

const MobileHeader = () => {
  const { classes } = useStyles();
  const { pathname } = useLocation();

  return (
    <Header className={classes.header} height={sizes.MOBILE_HEADER_HEIGHT} px={16}>
      <Title size={20} fw={600}>
        {pathname === '/' ? 'Book Chat' : links.mainLinks.filter(link => link.link === pathname)[0].label}
      </Title>
      <UserMenu />
    </Header>
  );
};

export default MobileHeader;
