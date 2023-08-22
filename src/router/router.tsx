import { createBrowserRouter } from 'react-router-dom';
import { BookChat, Profile, Root, Signin, Signup } from '../pages';
import { Recommend, RecommendResult, RecommendForm } from '../pages/recommend';
import { MyLibrary, Books, SearchResults } from '../pages/myLibrary';
import AuthenticationGuard from '../guard/AuthenticationGuard';
import { searchLoader } from './loaders';

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
            loader: searchLoader,
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
