import { Helmet } from 'react-helmet';
import { PostMetadata } from 'types';

type Props = {
  postMetadata?: PostMetadata;
};

const SeoMetaTags = ({ postMetadata }: Props) => {
  if (postMetadata) {
    const { title, description } = postMetadata;
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    );
  } else {
    return (
      <Helmet>
        <title>Bannerbox</title>
        <meta name="description" content="Bannerbox makes it easy to create and embed message banners on your site." />
      </Helmet>
    );
  }
};

export default SeoMetaTags;
