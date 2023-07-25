import { Header, Title, createStyles } from '@mantine/core';
import { sizes } from '../../constants';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    border: 'none',
  },
}));

const MobileHeader = () => {
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={sizes.MOBILE_HEADER_HEIGHT} pl={16}>
      <Title size={20}>subTitle</Title>
    </Header>
  );
};

export default MobileHeader;
