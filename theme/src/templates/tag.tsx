import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import {Post, Tag} from "../utils/models";
import {Grid} from "../components/common";
import Subheader from "../components/subheader";
import {Card} from "../components/card";
import SEO from "../components/seo";
import Theme from "../styles/theme";

interface TagTemplateProps {
  data: {
    tag: Tag;
    posts: {
      edges: Array<{ node: Post }>;
    }
  };
  location: Location;
}

const TagTemplate: FunctionComponent<TagTemplateProps> = ({data, location}) => {
  let tag     = data.tag;
  const posts = data.posts.edges.map(node => node.node);

  if (! tag && posts.length > 0) {
    tag = {
      name: posts[0].frontmatter.tags[0],
      color: Theme.layout.primaryColor,
      icon: null,
      featured: false,
    };
  }

  return (
    <Layout bigHeader={false}>
      <SEO
        title={tag.name}
        location={location}
        type={`Series`}
      />
      <Subheader title={tag.name} subtitle={`${posts.length} posts`} backgroundColor={tag.color}/>
      <Grid>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            path={post.frontmatter.path}
            featuredImage={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp : null}
            content={post.frontmatter.excerpt}
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

export default TagTemplate;

export const query = graphql`
  query($tag: String!) {
    tag: tags(name: { eq: $tag }) {
      name
      color
    }
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(posts)/.*\\\\.md$/"},
        frontmatter: {tags: {eq: $tag}}
      },
      sort: {fields: frontmatter___created, order: DESC}
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
