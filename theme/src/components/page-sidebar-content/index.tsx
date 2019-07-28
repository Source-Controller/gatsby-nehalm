import React, {FunctionComponent} from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Card} from "../card";
import styled from "styled-components";

const LatestPosts = styled.div`
`;

const PageSidebarContent: FunctionComponent = () => {
  const latestPosts = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              created
              createdPretty: created(formatString: "DD MMMM, YYYY")
              excerpt
              featuredImage {
                childImageSharp {
                  fixed(width: 315, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = latestPosts.posts.edges.map(node => node.node);

  return (
    <>
      <h3>Latest posts</h3>
      <LatestPosts>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            path={post.frontmatter.path}
            width={`100%`}
            key={index}
            compact={true}
            meta={
              {
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
              }
            }
          />
        ))}
      </LatestPosts>
    </>
  );
};

export default PageSidebarContent;
