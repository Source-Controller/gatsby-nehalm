import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {Post} from "../utils/models";
import {Container} from "../components/common";
import styled from "styled-components";
import {Card} from "../components/card";
import Subheader from "../components/subheader";

interface ArchivePageProps {
  data: {
    allPosts: {
      edges: Array<{ node: Post }>;
    };
  };
}

const PostsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ArchivePage: FunctionComponent<ArchivePageProps> = ({data}) => {
  const posts = data.allPosts.edges.map(node => node.node);

  return (
    <Layout bigHeader={false}>
      <Subheader title={`Archive`} subtitle={`${posts.length} posts`}/>
      <PostsContainer>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            path={post.frontmatter.path}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            content={post.frontmatter.excerpt}
            width={`31%`}
            key={index}
            meta={
              {
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
              }
            }
          />
        ))}
      </PostsContainer>
    </Layout>
  );
};

export default ArchivePage;

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              excerpt
              created
              createdPretty: created(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 800, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
  }
`;
