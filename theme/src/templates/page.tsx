import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import Subheader from "../components/subheader";
import {Page} from "../utils/models";
import Theme from "../styles/theme";
import {Container} from "../components/common";
import styled from "styled-components";
import PageSidebarContent from "../components/page-sidebar-content";

interface PageTemplateProps {
  pathContext: {
    page: Page;
  };
}

const PageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  p:first-child {
    margin-top: 0;
  }
`;

const PageContent = styled.section`
  width: 70%;
`;

const PageSidebar = styled.aside`
  width: 25%;
`;

const PageTemplate: FunctionComponent<PageTemplateProps> = ({pathContext}) => {
  const page = pathContext.page;

  return (
    <Layout bigHeader={false}>
      <Subheader title={page.frontmatter.title} backgroundColor={Theme.layout.primaryColor}/>
      <PageContainer>
        <PageContent>
          <section dangerouslySetInnerHTML={{__html: page.html}}/>
        </PageContent>
        <PageSidebar>
          <PageSidebarContent />
        </PageSidebar>
      </PageContainer>
    </Layout>
  );
};

export default PageTemplate;
