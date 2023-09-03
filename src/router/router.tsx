import { createBrowserRouter } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import { BookChat, BookDetail, Profile, Root, Signin, Signup } from '../pages';
import { Recommend, RecommendResult, RecommendForm } from '../pages/recommend';
import { MyLibrary, Books, SearchResults } from '../pages/myLibrary';
import AuthenticationGuard from '../guard/AuthenticationGuard';
import { myLibraryLoader, searchLoader, bookDetailLoader } from './loaders';

const router = (queryClient: QueryClient, email: string) =>
  createBrowserRouter([
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
              loader: myLibraryLoader(queryClient, email),
            },
            {
              path: 'search',
              element: <SearchResults />,
              loader: searchLoader(queryClient),
            },
          ],
        },
        {
          path: 'bookDetail/:itemId',
          element: <BookDetail />,
          loader: bookDetailLoader(queryClient, email),
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
