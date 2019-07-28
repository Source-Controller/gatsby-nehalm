import React, {createRef, FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post, Tag} from "../utils/models";
import {Container} from "../components/common";
import styled from "styled-components";
import Toc from "../components/toc";
import Img from "gatsby-image";
import ReadingProgress from "../components/reading-progress";
import Theme from "../styles/theme";
import {graphql, Link} from "gatsby";
import slugify from "slugify";
import Bio from "../components/bio";
import Comments from "../components/comments";

interface PostTemplateProps {
  data: {
    primaryTag: Tag | null;
  };
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

  p > img {
    max-width: 100%;
    border-radius: .3em;
    margin: 30px 0;
  }
`;

const TocWrapper = styled.div`
  position: sticky;
  top: 70px;
  padding: 40px 30px 40px 0;
`;

const PostHeader = styled.header`
  padding: 40px;
`;

const FeaturedImage = styled(Img)`
  border-radius: 0;
`;

const StyledPost = styled.section`
  padding: 40px;
`;

const PostMeta = styled.section`
  display: flex;
  justify-content: space-between;
  opacity: .8;
  font-size: .9em;
`;

const PostTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

const PostFooter = styled.footer`
  background-color: #fafafa;
  font-size: .8em;
  color: #666;
  padding: 40px;
  line-height: 1em;

  p {
    margin: 5px 0;
  }
`;

const FooterTagLink = styled(Link)`
  color: #000 !important;
  text-decoration: none;
  border-bottom: 0 !important;
`;

const PostAddition = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  z-index: 700;
  position: relative;
  padding: 40px;
`;

const PostAdditionContent = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = ({data, pathContext}) => {
  const post               = pathContext.post;
  const readingProgressRef = createRef<HTMLElement>();
  const primaryTag         = data.primaryTag;

  return (
    <Layout bigHeader={false}>
      <ReadingProgress target={readingProgressRef} color={primaryTag ? primaryTag.color : null}/>
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
              <PostMeta>
                {post.frontmatter.tags.length > 0 &&
                <Link to={`#`}>{post.frontmatter.tags[0]}</Link>
                }
                <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>
              </PostMeta>
              <PostTitle>{post.frontmatter.title}</PostTitle>
            </PostHeader>
            {post.frontmatter.featuredImage &&
            <FeaturedImage sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
            }
            <StyledPost dangerouslySetInnerHTML={{__html: post.html}} className={`post`}/>
            <PostFooter>
              <p>
                Published under&nbsp;
                {post.frontmatter.tags.map((tag, index) => (
                  <span key={index}>
                    <FooterTagLink
                      to={`/tag/${slugify(tag, {lower: true})}`}
                    >
                      {tag}
                    </FooterTagLink>
                    {post.frontmatter.tags.length > index + 1 && <>, </>}
                  </span>
                ))}
                &nbsp;on <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>.
              </p>
              {post.frontmatter.updated !== post.frontmatter.created &&
              <p>Last updated on <time dateTime={post.frontmatter.updated}>{post.frontmatter.updatedPretty}</time>.</p>
              }
            </PostFooter>
          </article>
        </PostContent>
      </PostContainer>
      <PostAddition>
        <PostAdditionContent>
          <Bio/>
        </PostAdditionContent>
      </PostAddition>
      <Comments/>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PrimaryTag($primaryTag: String!) {
    primaryTag: tags(name: { eq: $primaryTag }) {
      name
      color
    }
  }
`;
