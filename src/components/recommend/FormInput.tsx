import { Space, createStyles, rem } from '@mantine/core';
import { Select, TextInput } from 'react-hook-form-mantine';
import { useFormContext } from 'react-hook-form';

const useStyles = createStyles(() => ({
  label: {
    fontSize: rem(18),
    fontWeight: 700,
  },
}));

interface SelectorProps {
  id: string;
  datas: string[];
  title: string;
  placeholder: string;
}

const FormInput = ({ id, datas, title, placeholder }: SelectorProps) => {
  const { classes } = useStyles();
  const { control } = useFormContext();

  return (
    <>
      {id !== 'other' ? (
        <Select
          classNames={{ label: classes.label }}
          name={id}
          data={datas}
          label={title}
          placeholder={placeholder}
          searchable
          clearable
          allowDeselect
          maxDropdownHeight={280}
          transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
          aria-label={title}
        />
      ) : (
        <TextInput
          classNames={{ label: classes.label }}
          name={id}
          control={control}
          label={title}
          placeholder={placeholder}
        />
      )}
      <Space h={'sm'} />
    </>
  );
};

export default FormInput;
