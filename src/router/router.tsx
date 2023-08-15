import { createBrowserRouter } from 'react-router-dom';
import {
  BookChat,
  MyLibrary,
  Profile,
  Recommend,
  Root,
  RecommendResult,
  RecommendForm,
  Signin,
  Signup,
} from '../pages';
import { Books, SearchResults } from '../components/myLibrary';
import AuthenticationGuard from '../guard/AuthenticationGuard';

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
        element: <AuthenticationGuard redirectTo="/signin" element={<MyLibrary />} />,
        children: [
          {
            path: '',
            element: <Books />,
          },
          {
            path: 'search',
            element: <SearchResults />,
          },
        ],
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
