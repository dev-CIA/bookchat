import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { MantineProvider } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        }}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
