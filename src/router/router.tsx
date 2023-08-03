import { createBrowserRouter } from 'react-router-dom';
import { BookChat, MyLibrary, Profile, Recommend, Root, RecommendResult, RecommendForm } from '../pages';

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
        children: [
          {
            path: '',
            element: <RecommendForm />,
          },
          {
            path: 'result',
            element: <RecommendResult />,
          },
        ],
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
