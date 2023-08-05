import { Books } from '../components/myLibrary';
import { ActionIcon, TextInput, createStyles } from '@mantine/core';
import { IconBook, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../recoil/atoms';

const useStyles = createStyles(() => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const MyLibrary = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);

  React.useEffect(() => {
    if (!isLogin) {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      <form className={classes.form}>
        <TextInput
          placeholder="도서 검색"
          icon={<IconBook />}
          w={'60%'}
          miw={300}
          rightSection={
            <ActionIcon variant="filled" size={'md'} title="search">
              <IconSearch size="1rem" />
            </ActionIcon>
          }
        />
      </form>
      <Books />
    </>
  );
};

export default MyLibrary;
