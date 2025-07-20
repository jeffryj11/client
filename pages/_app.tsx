import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DemoBanner from '../components/DemoBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_DEMO_MODE === 'true' && <DemoBanner />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;