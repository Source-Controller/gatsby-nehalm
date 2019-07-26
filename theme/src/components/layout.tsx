import React, {FunctionComponent, ReactNode} from "react";
import GlobalStyle from "../styles/global-style";
import {graphql, useStaticQuery} from "gatsby";
import Header from "./header";
import {SiteMetadata} from "../utils/models";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
  bigHeader?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({children, bigHeader = true}) => {
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
          footerMenu {
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
      <GlobalStyle />
      {bigHeader ? (
        <Header
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          topics={data.site.siteMetadata.topics}
          logo={data.site.siteMetadata.logo}
          menu={data.site.siteMetadata.menu}
          search={data.site.siteMetadata.search}
        />
      ) : (
        <Navigation
          title={data.site.siteMetadata.title}
          menu={data.site.siteMetadata.menu}
          showSearch={data.site.siteMetadata.search}
          logo={data.site.siteMetadata.logo}
          dark={true}
        />
      )}
      <main>
        {children}
      </main>
      <Footer menu={data.site.siteMetadata.footerMenu} owner={data.site.siteMetadata.title}/>
    </>
  );
};

export default Layout;
