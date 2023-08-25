import { Outlet } from 'react-router-dom';
import { SearchInput } from '../../components/myLibrary';

const MyLibrary = () => {
  return (
    <>
      <SearchInput />
      <Outlet />
    </>
  );
};

export default MyLibrary;
