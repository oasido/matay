import { AppShell } from '@mantine/core';
import Navbar from './../modules/navbar/index';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import rtlPlugin from 'stylis-plugin-rtl';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppShell padding={0}>
        {/* <Navbar links={[{ link: '/meet/create', label: 'יצירת פגישה' }]} /> */}
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ dir: 'rtl' }}
          emotionOptions={{ key: 'rtl', stylisPlugins: [rtlPlugin] }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </AppShell>
      {/* links: { link: string; label: string }[]; */}
    </>
  );
}

export default MyApp;
