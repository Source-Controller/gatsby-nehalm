import React, {FunctionComponent, ReactNode} from "react";
import {css, Global} from "@emotion/core";
import {Container, Header, Layout as StyledLayout, Main} from "theme-ui";
import {graphql, useStaticQuery} from "gatsby";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
