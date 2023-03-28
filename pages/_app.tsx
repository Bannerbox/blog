import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { css, Global } from '@emotion/react';
import type { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { sectionContainerStyles } from 'components/bannerbox-site-shared/section-container';

import Header from 'components/bannerbox-site-shared/Header';
import Footer from 'components/bannerbox-site-shared/Footer';
import TopicPicker from 'components/topic-picker/TopicPicker';
import SeoMetaTags from 'components/SeoMetaTags';
import { PostMetadata } from 'types';

const contentStyles = css`
  display: flex;
  justify-content: center;
  height: 100%;

  min-height: 1024px;

  .topic-picker {
    margin-top: 85px;
  }
`;

const articleStyles = css`
  display: flex;
  justify-content: center;

  font-size: 20px;
  article {
    margin-top: 48px;
    max-width: 680px;
  }
  h1 {
    margin-top: 70px;
    font-size: 32px;
  }
  h2 {
    margin-top: 48px;
    font-size: 24px;
  }
  p {
    font-size: 20px;
    margin-top: 24px;
  }
`;

function App(appProps: AppProps<MarkdocNextJsPageProps>) {
  const router = useRouter();
  const route = router.route;

  // Hide the topic picker when viewing an article
  const paths = route.split('/').filter((path) => path.length > 0);
  const shouldShowTopicPicker = paths.length <= 1;

  const { Component, pageProps } = appProps;
  const { markdoc } = pageProps;

  const markdocArticleStyles = !!markdoc ? articleStyles : undefined;
  const postMetadata = markdoc?.frontmatter as PostMetadata | undefined;

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
        <link rel="home" href="https://www.bannerbox.io/blog" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div css={[contentStyles, sectionContainerStyles]}>
        <div css={markdocArticleStyles} className="section-container">
          {shouldShowTopicPicker && (
            <div className="topic-picker">
              <TopicPicker />
            </div>
          )}
          <Component {...pageProps} />
        </div>
      </div>
      <SeoMetaTags postMetadata={postMetadata} />
      <Footer />
    </>
  );
}

export default App;
