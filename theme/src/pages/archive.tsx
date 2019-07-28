import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {Post} from "../utils/models";
import {Grid} from "../components/common";
import {Card} from "../components/card";
import Subheader from "../components/subheader";

interface ArchivePageProps {
  data: {
    allPosts: {
      edges: Array<{ node: Post }>;
    };
  };
}

const ArchivePage: FunctionComponent<ArchivePageProps> = ({data}) => {
  const posts = data.allPosts.edges.map(node => node.node);

  return (
    <Layout bigHeader={false}>
      <Subheader title={`Archive`} subtitle={`${posts.length} posts`}/>
      <Grid>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            path={post.frontmatter.path}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            content={post.frontmatter.excerpt}
            width={`100%`}
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
      </Grid>
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
