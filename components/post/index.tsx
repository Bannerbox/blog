import React, { useEffect, useState } from 'react';
import Markdoc from '@markdoc/markdoc';

const Post = () => {
  const [content, setContent] = React.useState<string | undefined>();

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`/blog/posts/hello-world.md`, {
        headers: { Accept: 'application/text' },
      });

      const content = await response.text();
      setContent(content);
      console.log(content);
    })();
  }, []);

  return <div>Post</div>;
};

export default Post;
