import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as StateProvider } from 'jotai';
import { getLayout } from '@/utils/layout';
import Head from 'next/head';
import '@/styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<any>(Component);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Rick & Morty</title>
        <meta name='description' content='Rick and Morty' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <StateProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </StateProvider>
    </>
  );
}

export default MyApp;
