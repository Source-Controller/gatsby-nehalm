import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {Post} from "../utils/models";
import Subheader from "../components/subheader";
import SEO from "../components/seo";
import PostGrid from "../components/post-grid";

interface ArchivePageProps {
  data: {
    allPosts: {
      edges: Array<{ node: Post }>;
    };
  };
  location: Location;
}

const ArchivePage: FunctionComponent<ArchivePageProps> = ({data, location}) => {
  const posts = data.allPosts.edges.map(node => node.node) as Post[];

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={`Archive`}
        type={`Series`}
      />
      <Subheader title={`Archive`} subtitle={`${posts.length} posts`}/>
      <PostGrid posts={posts} />
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
                  sizes(maxWidth: 500, quality: 100) {
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
