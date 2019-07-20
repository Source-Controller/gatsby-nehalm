import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Container} from "../components/common";
import {Post} from "../utils/models";
import {Card} from "../components/card";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
  };
}

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext }) => {
  const posts = pathContext.posts;

  return (
    <Layout>
      <Container>
        {posts.map((post, index) => <Card title={post.title} path={`target`} content={``} key={index}/>)}
      </Container>
    </Layout>
  );
};

export default PostsPage;
