import { AppShell } from '@mantine/core';
import '../styles/globals.css';
import rtlPlugin from 'stylis-plugin-rtl';
import { MantineProvider } from '@mantine/core';
import { UserContextProvider } from './../modules/useUserContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppShell padding={0}>
        <UserContextProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ dir: 'rtl' }}
            emotionOptions={{ key: 'rtl', stylisPlugins: [rtlPlugin] }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </UserContextProvider>
      </AppShell>
      {/* links: { link: string; label: string }[]; */}
    </>
  );
}

export default MyApp;
