import { Title, Space, Select, TextInput } from '@mantine/core';
import { useFormContext } from 'react-hook-form';

interface SelectorProps {
  id: string;
  datas: string[];
  title: string;
  placeholder: string;
}

const Selector = ({ id, datas, title, placeholder }: SelectorProps) => {
  const { register } = useFormContext();

  return (
    <>
      <Title size={20}>{title}</Title>
      {id !== 'other' ? (
        <Select
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
        <TextInput aria-label={title} placeholder={placeholder} />
      )}
      <Space h={'sm'} />
    </>
  );
};

export default Selector;
