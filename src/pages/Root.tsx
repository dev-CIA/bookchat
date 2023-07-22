import React from 'react';
import { MainHeader } from '../components/common';
import { Outlet, useNavigate } from 'react-router-dom';

const mockLinks = {
  mainLinks: [
    {
      link: '/chat',
      label: 'Book Chat',
    },
    {
      link: '/recommend',
      label: '추천받기',
    },
    {
      link: '/mylibrary',
      label: '내 서재',
    },
    {
      link: '/profile',
      label: '관리',
    },
  ],
};

const Root = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    (() => {
      navigate('/chat');
    })();
  }, []);

  return (
    <>
      <MainHeader mainLinks={mockLinks.mainLinks} />
      <Outlet />
    </>
  );
};

export default Root;
