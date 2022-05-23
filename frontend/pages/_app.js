import { AppShell } from '@mantine/core';
import Navbar from './../modules/navbar/index.tsx';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppShell padding={0}>
        {/* <Navbar links={[{ link: '/meet/create', label: 'יצירת פגישה' }]} /> */}
        <Component {...pageProps} />
      </AppShell>
      {/* links: { link: string; label: string }[]; */}
    </>
  );
}

export default MyApp;
