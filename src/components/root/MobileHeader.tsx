import { Box, Header, Title, createStyles, Image, Flex, Container, Avatar } from '@mantine/core';
import { sizes } from '../../constants';
import { UserMenu } from '.';

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

  return (
    <Header className={classes.header} height={sizes.MOBILE_HEADER_HEIGHT} px={16}>
      <Avatar src="./logo/bookchatLogo.png" alt="logo" />
      <UserMenu />
    </Header>
  );
};

export default MobileHeader;
