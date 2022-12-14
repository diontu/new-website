import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ size: '1.5rem' }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}
