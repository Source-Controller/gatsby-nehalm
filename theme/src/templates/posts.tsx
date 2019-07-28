import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Container} from "../components/common";
import {Post} from "../utils/models";
import {Card} from "../components/card";
import styled from "styled-components";
import TagList from "../components/tag-list";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
  };
}

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const PostsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 915px;
  margin-left: 0;
  margin-right: 0;
  margin-top: -30px;
`;

const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;
`;

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext }) => {
  const posts = pathContext.posts;

  return (
    <Layout>
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={post.frontmatter.featuredImage}
              content={post.frontmatter.excerpt}
              key={index}
              width={index === 0 ? '100%' : '48%'}
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
        <Sidebar>
          this is content... content is so delicisio... yes yes.
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
