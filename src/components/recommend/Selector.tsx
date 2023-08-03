import { Title, Space } from '@mantine/core';
import { Select, TextInput } from 'react-hook-form-mantine';
import { useFormContext } from 'react-hook-form';

interface SelectorProps {
  id: string;
  datas: string[];
  title: string;
  placeholder: string;
}

const Selector = ({ id, datas, title, placeholder }: SelectorProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Title size={20}>{title}</Title>
      {id !== 'other' ? (
        <Select
          name={id}
          data={datas}
          placeholder={placeholder}
          searchable
          clearable
          allowDeselect
          maxDropdownHeight={280}
          transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
          aria-label={title}
        />
      ) : (
        <TextInput name={id} control={control} aria-label={title} placeholder={placeholder} />
      )}
      <Space h={'sm'} />
    </>
  );
};

export default Selector;
