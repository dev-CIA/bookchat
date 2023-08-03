import { Select, Title, Space } from '@mantine/core';

interface SelectorProps {
  datas: string[];
  title: string;
  placeholder: string;
}

const Selector = ({ datas, title, placeholder }: SelectorProps) => {
  console.log();

  return (
    <>
      <Title size={20}>{title}</Title>
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
      <Space h={'sm'} />
    </>
  );
};

export default Selector;
