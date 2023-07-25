import { Books } from '../components/myLibrary';
import { ActionIcon, TextInput, createStyles } from '@mantine/core';
import { IconBook, IconSearch } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles(() => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const MyLibrary = () => {
  const { classes } = useStyles();

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
