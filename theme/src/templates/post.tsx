import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post} from "../utils/models";
import {Container} from "../components/common";
import styled from "styled-components";
import Toc from "../components/toc";

interface PostTemplateProps {
  pathContext: {
    post: Post;
  };
}

const PostContainer = styled(Container)`
  display: flex;
  justify-content: stretch;
`;

const LeftSidebar = styled.div`
  min-width: 255px;
  max-width: 225px;
`;

const PostContent = styled.div`
  border-right: 1px #e5eff5 solid;
  border-left: 1px #e5eff5 solid;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, .03), 0 3px 46px rgba(0, 0, 0, .1);
  z-index: 10;
  padding: 40px;
  width: 100%;
`;

const TocWrapper = styled.div`
  position: sticky;
  top: 152px;
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = ({pathContext}) => {
  const post = pathContext.post;

  return (
    <Layout bigHeader={false}>
      <PostContainer>
        <LeftSidebar>
          <TocWrapper>
            <Toc />
          </TocWrapper>
        </LeftSidebar>
        <PostContent dangerouslySetInnerHTML={{__html: post.html}} className={`post`}/>
      </PostContainer>
    </Layout>
  );
};

export default PostTemplate;
