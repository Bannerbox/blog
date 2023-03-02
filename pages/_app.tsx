import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css, Global } from '@emotion/react';
import type { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { sectionContainerStyles } from 'components/bannerbox-site-shared/section-container';

import Header from 'components/bannerbox-site-shared/Header';
import Footer from 'components/bannerbox-site-shared/Footer';
import TopicPicker from 'components/topic-picker/TopicPicker';

const contentStyles = css`
  display: flex;
  justify-content: center;
  height: 100%;

  min-height: 1024px;

  .topic-picker {
    margin-top: 85px;
  }
`;

function App(appProps: AppProps<MarkdocNextJsPageProps>) {
  const router = useRouter();
  const route = router.route;

  // Hide the topic picker when viewing an article
  const paths = route.split('/').filter((path) => path.length > 0);
  const shouldShowTopicPicker = paths.length <= 1;

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
          }
        `}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bannerbox makes it easy to create and embed message banners on your site." />
        <link rel="home" href="https://www.bannerbox.io/blog" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div css={[contentStyles, sectionContainerStyles]}>
        <div className="section-container">
          {shouldShowTopicPicker && (
            <div className="topic-picker">
              <TopicPicker />
            </div>
          )}
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
