export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      topics: string[];
    };
  };
}

export interface StyleProps {
  className?: string;
}

export interface Post {
  title: string;
}
