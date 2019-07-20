import React, {FunctionComponent, ReactNode} from "react";
import GlobalStyle from "../styles/global-style";
import {graphql, useStaticQuery} from "gatsby";
import Header from "./header";
import Theme from "../styles/theme";
import {ThemeProvider} from "styled-components";
import {SiteMetadata} from "../utils/models";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          topics
          logo
          menu {
            name
            path
          }
          search
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={Theme} />
      <GlobalStyle />
      <Header
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        topics={data.site.siteMetadata.topics}
        logo={data.site.siteMetadata.logo}
        menu={data.site.siteMetadata.menu}
        search={data.site.siteMetadata.search}
      />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
