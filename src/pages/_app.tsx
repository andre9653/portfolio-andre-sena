import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyle';

import '@/styles/globals.css';
import '@fontsource/poppins';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
