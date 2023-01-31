import type { AppProps } from 'next/app';
import Head from 'next/head';
import { css, Global } from '@emotion/react';
import Header from 'components/bannerbox-site-shared/Header';
import Footer from 'components/bannerbox-site-shared/Footer';

function App(appProps: AppProps) {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            height: 100%;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 14px;
          }
          #__next {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        `}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bannerbox makes it easy to create and embed message banners on your site." />
        <link rel="home" href="https://www.bannerbox.io/" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
