export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      topics: string[];
      logo: string;
      menu: MenuItem[];
      footerMenu: MenuItem[];
      search: boolean;
    };
  };
}

export interface MenuItem {
  name: string;
  path: string;
}

export interface StyleProps {
  className?: string;
}

export interface Post {
  frontmatter: {
    title: string;
    path: string;
    tags: string[];
    excerpt: string;
    created: string;
    updated: string;
    featuredImage?: any;
  };
  html: string;
  headings: Array<{ depth: number }>;
}
