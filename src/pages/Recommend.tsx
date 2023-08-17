import React from 'react';
import { Outlet } from 'react-router-dom';

const Recommend = () => {
  console.log();
  return (
    <React.Suspense fallback={<div>...loading</div>}>
      <Outlet />
    </React.Suspense>
  );
};

export default Recommend;
