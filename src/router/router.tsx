import { createBrowserRouter } from 'react-router-dom';
import { BookChat, MyLibrary, Profile, Recommend, Root } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'chat',
        element: <BookChat />,
      },
      {
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'mylibrary',
        element: <MyLibrary />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
