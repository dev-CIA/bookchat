import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRecoilValue } from 'recoil';
import { userState } from './recoil/atoms';
import router from './router/router';
import { Suspense } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 3 * 1000,
    },
  },
});

const App = () => {
  const { email } = useRecoilValue(userState);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{
          globalStyles: () => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
              margin: '0',
              padding: '0',
            },
          }),
          primaryColor: 'teal',
          breakpoints: {
            xs: '30em', // 480px
            sm: '48em', // 768px
            md: '64em', // 1024px - ipad pro
            lg: '74em', // 1184px
            xl: '90em', // 1440px
            xxl: '120em', // 1920px
          },
          defaultGradient: { from: 'blue.4', to: 'teal.4', deg: 45 },
        }}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS>
        <Notifications />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router(queryClient, email)} />
        </Suspense>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
