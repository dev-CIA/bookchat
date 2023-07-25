import { Books } from '../components/myLibrary';
import { ActionIcon, TextInput, createStyles } from '@mantine/core';
import { BsBook, BsSearch } from 'react-icons/bs';
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
        <TextInput placeholder="검색" icon={<BsBook />} w={'60%'} miw={300} />
        <ActionIcon variant="filled" size={'lg'} title="search">
          <BsSearch />
        </ActionIcon>
      </form>
      <Books />
    </>
  );
};

export default MyLibrary;
