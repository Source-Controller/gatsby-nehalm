import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Container, Grid} from "../components/common";
import {Post} from "../utils/models";
import {Card} from "../components/card";
import styled from "styled-components";
import TagList from "../components/tag-list";
import {Link} from "gatsby";
import SidebarContent from "../components/sidebar-content";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
  };
}

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const PostsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "latest latest" ". .";
  width: 915px;
  margin-left: 0;
  margin-right: 0;
  margin-top: -30px;
`;

const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;
`;

const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const ArchiveLink = styled(Link)`
  font-size: .8em;
  padding: 10px;
  border-radius: .3em;
  transition: background-color .5s;
  background-color: #f2f2f2;

  &:hover {
    background-color: #e6e6e6;
  }
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
              featuredImage={post.frontmatter.featuredImage.childImageSharp}
              content={post.frontmatter.excerpt}
              key={index}
              meta={
                {
                  time: post.frontmatter.created,
                  timePretty: post.frontmatter.createdPretty,
                  tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
                }
              }
              style={{gridArea: index === 0 ? 'latest' : undefined}}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
