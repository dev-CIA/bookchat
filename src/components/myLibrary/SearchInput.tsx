import { ActionIcon, TextInput, createStyles, Select, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { getAladinSearchResults } from '../../api';

const useStyles = createStyles(() => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectInput: {
    borderRight: 'transparent',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontSize: rem(8),
    ':focus': {
      borderColor: '#ced4da',
    },
  },
  selectItem: {
    padding: rem(8),
    fontSize: rem(8),
  },
  searchInput: {
    borderLeft: 'transparent',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    ':focus': {
      borderColor: '#ced4da',
    },
  },
}));

const SearchInput = () => {
  const { classes } = useStyles();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await getAladinSearchResults();
    console.log(res);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Select
        classNames={{ input: classes.selectInput, item: classes.selectItem }}
        w={'20%'}
        miw={100}
        data={['통합 검색', '내 서재에서']}
        defaultValue={'통합 검색'}
        aria-label="search type select"
      />
      <TextInput
        classNames={{ input: classes.searchInput }}
        placeholder="책 검색하기"
        w={'60%'}
        miw={250}
        rightSection={
          <ActionIcon component="button" type="submit" variant="filled" size={'md'} title="search">
            <IconSearch size="1rem" />
          </ActionIcon>
        }
      />
    </form>
  );
};

export default SearchInput;
