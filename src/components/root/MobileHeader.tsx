import { Header, Title, createStyles } from '@mantine/core';
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
      <Title size={20}>subTitle</Title>
      <UserMenu />
    </Header>
  );
};

export default MobileHeader;
