import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import Subheader from "../components/subheader";
import {Page} from "../utils/models";
import Theme from "../styles/theme";
import {Container} from "../components/common";
import styled from "styled-components";
import PageSidebarContent from "../components/page-sidebar-content";
import SEO from "../components/seo";

interface PageTemplateProps {
  pathContext: {
    page: Page;
  };
  location: Location;
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

const PageTemplate: FunctionComponent<PageTemplateProps> = ({pathContext, location}) => {
  const page = pathContext.page;

  return (
    <Layout bigHeader={false}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.excerpt}
        location={location}
      />
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
