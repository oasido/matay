import { AppProps } from 'next/app';
import '../styles/globals.css';
import rtlPlugin from 'stylis-plugin-rtl';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ dir: 'rtl' }}
      emotionOptions={{ key: 'rtl', stylisPlugins: [rtlPlugin] }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
