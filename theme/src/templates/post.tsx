import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post} from "../utils/models";
import {Container} from "../components/common";
import styled from "styled-components";

interface PostTemplateProps {
  pathContext: {
    post: Post;
  };
}

const PostContainer = styled(Container)`
  display: flex;
  justify-content: stretch;
`;

const Toc = styled.div`
  min-width: 195px;
  max-width: 195px;
`;

const PostContent = styled.div`
  width: 100%;
`;

const RelatedPosts = styled.div`
  min-width: 195px;
  max-width: 195px;
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = ({pathContext}) => {
  const post = pathContext.post;

  return (
    <Layout bigHeader={false}>
      <PostContainer>
        <Toc>
          toc
        </Toc>
        <PostContent dangerouslySetInnerHTML={{__html: post.html}}/>
        <RelatedPosts>
          ...
        </RelatedPosts>
      </PostContainer>
    </Layout>
  );
};

export default PostTemplate;
