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
      author: {
        name: string;
        description: string;
        social: SocialChannels;
      };
    };
  };
}

export interface Tag {
  name: string;
  color: string;
  icon: any;
  featured: boolean;
}

export interface SocialChannels {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  twitch?: string;
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
    createdPretty: string;
    updated: string;
    updatedPretty: string;
    featuredImage?: any;
  };
  html: string;
  headings: Array<{ depth: number }>;
}
