import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post} from "../utils/models";
import {Container} from "../components/common";

interface PostTemplateProps {
  pathContext: {
    post: Post;
  };
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({ pathContext }) => {
  return (
    <Layout bigHeader={false}>
      <Container>
        difif
      </Container>
    </Layout>
  );
};

export default PostTemplate;
