import React, {createRef, FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post} from "../utils/models";
import {Container} from "../components/common";
import styled from "styled-components";
import Toc from "../components/toc";
import Img from "gatsby-image";
import ReadingProgress from "../components/reading-progress";
import Theme from "../styles/theme";

interface PostTemplateProps {
  pathContext: {
    post: Post;
  };
}

const PostContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const LeftSidebar = styled.div`
  min-width: 255px;
  max-width: 225px;
`;

const PostContent = styled.div`
  margin-top: -5px;
  border-right: 1px #e5eff5 solid;
  border-left: 1px #e5eff5 solid;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, .03), 0 3px 46px rgba(0, 0, 0, .1);
  z-index: 10;
  width: 1035px;

  p > a {
    color: ${Theme.layout.linkColor};
    border-bottom: 2px ${Theme.layout.linkColor} solid;
  }

  pre {
    margin: 30px 0;
  }

  blockquote {
    border-left: 4px ${Theme.layout.primaryColor} solid;
    background-color: ${Theme.layout.backgroundColor};
    margin: 30px 0;
    padding: 5px 20px;
    border-radius: .3em;
  }

  h3::before, h4::before, h5::before, h6::before {
    display: block;
    content: " ";
    height: 90px;
    margin-top: -90px;
    visibility: hidden;
  }

  h2 {
    border-top: 1px solid #ececec;
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
  }

  code[class*="language-text"] {
    padding: 5px;
  }
`;

const TocWrapper = styled.div`
  position: sticky;
  top: 102px;
  padding-right: 30px;
`;

const PostHeader = styled.header`
  padding: 40px;
`;

const FeaturedImage = styled(Img)`
`;

const StyledPost = styled.section`
  padding: 40px;
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = ({pathContext}) => {
  const post               = pathContext.post;
  const readingProgressRef = createRef<HTMLElement>();

  return (
    <Layout bigHeader={false}>
      <ReadingProgress target={readingProgressRef}/>
      <PostContainer>
        {post.headings.find(h => h.depth > 1) &&
        <LeftSidebar>
            <TocWrapper>
                <Toc/>
            </TocWrapper>
        </LeftSidebar>
        }
        <PostContent>
          <article className={`post`} ref={readingProgressRef}>
            <PostHeader>
              <h1>{post.frontmatter.title}</h1>
            </PostHeader>
            {post.frontmatter.featuredImage &&
            <FeaturedImage sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
            }
            <StyledPost dangerouslySetInnerHTML={{__html: post.html}} className={`post`}/>
          </article>
        </PostContent>
      </PostContainer>
    </Layout>
  );
};

export default PostTemplate;
