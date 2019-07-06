import React, {FunctionComponent, ReactNode} from "react";
import GlobalStyle from "../styles/global-style";
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
    <div>
      <GlobalStyle />
      {data.site.siteMetadata.title}
      {children}
    </div>
  );
};

export default Layout;
