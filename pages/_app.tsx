import { AppProps } from 'next/app';
import SiteHeader from '../modules/SiteHeader';
import '../styles/globals.css';
import rtlPlugin from 'stylis-plugin-rtl';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <SiteHeader />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ dir: 'rtl' }}
        emotionOptions={{ key: 'rtl', stylisPlugins: [rtlPlugin] }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
