import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import { LightGrey, DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Link from 'next/link';

const CELL_HEIGHT_IN_PIXELS = 100;

const styles = css`
  color: ${DarkGrey.ink};

  .list {
    list-style-type: none;
    padding: 0;
    margin: 18px;
  }
  li {
    padding: 24px 0;
  }
  .image-container {
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    width: 184px;
    background-color: ${LightGrey.sky};
    margin-right: 34px;
  }
  .cell-container {
    display: flex;
  }
  .link {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .link a {
    color: ${DarkGrey.ink};
  }
  .content-container {
    display: flex;
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    flex-direction: column;
  }
  .body {
    height: 100%;
  }
  .footer {
    display: flex;
    align-content: center;
  }
`;

type Props = {
  posts: Array<PostMetadata>;
};

const TopicList = ({ posts }: Props) => {
  return (
    <div>Hello item</div>
    // <div css={styles}>
    //   <ul className="list">
    //     {posts.map((post, index) => {
    //       const formattedDate = ''; //new Date(post.date).toLocaleDateString();
    //       return (
    //         <li key={index}>
    //           <div className="cell-container">
    //             <div className="image-container">
    //               <img />
    //             </div>
    //             <div className="content-container">
    //               <div className="body">
    //                 <div className="link">
    //                   <Link href={post.link}>{post.title}</Link>
    //                 </div>
    //                 <div className="summary">{post.description}</div>
    //               </div>
    //               <div className="footer">
    //                 <div className="date">{formattedDate}</div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default TopicList;
