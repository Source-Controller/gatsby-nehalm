---
title: "Customizing the theme"
path: "/customization"
tags: ["Theme"]
featuredImage: "./cover.jpg"
excerpt: How to change the appearance and component shadowing.
created: 2019-07-22
updated: 2019-07-22
---

Nehalem offers several way of customization:

- change the appearance of it (Theming)
- change metadata
- component shadowing

## Theming

Theming relies on the component shadowing technique - which basically means you need to create a file which mirrors the original file. To 
change our appearance we'll have to shadow our `theme.ts` file.

Just create this file under `src/@nehalist/gatsby-theme-nehalem/styles/theme.ts` and add the following content:

```typescript jsx
const Theme: DefaultTheme = {
  layout: {
   backgroundColor: `#fafafa`,
   primaryColor: `#a4cbb8`,
   linkColor: `#a4cbb8`,
  },
  breakpoints: {
   xs: `425px`,
   sm: `576px`,
   md: `768px`,
   lg: `992px`,
   xl: `1300px`,
  },
  fonts: {
   base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
     `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
   container: {
     width: `1260px`,
   },
   header: {
     height: `440px`,
     background: `linear-gradient(-45deg, #44596e, #a4cbb8) repeat scroll 0 0 transparent`,
   },
  },
};

export default Theme;
```

And change the values to your needs.

## Metadata

Another way to change Nehalem is to change the `siteMetadata` within your `gatsby-config.js`. The default configuration is:

```javascript
siteMetadata: {
  // Your site title
  title: `nehalem`,
  // Your site url
  siteUrl: `https://nehalem.netlify.com`,
  // Your site description
  description: `A Gatsby theme for %TOPICS%`,
  // These topics will be inserted at %TOPICS% in the description and used for the Typed component
  topics: [
    `bloggers`,
    `geeks`,
    `nerds`,
    `people`,
    `everyone`
  ],
  // The main menu
  menu: [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Example',
      path: '/page'
    },
  ],
  // Links in the footer
  footerMenu: [
    {
      name: 'RSS',
      path: '/rss.xml'
    },
  ],
  // En- or disable search
  search: true,
  // Basically who are you and where to find you
  author: {
    name: `nehalem`,
    description: `I'm <strong>nehalem</strong>, a Gatsby theme by 
    <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. Go get me on 
    <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">GitHub</a> and don't forget to leave
    a star in case you like me!`,
    social: {
      facebook: ``,
      twitter: `https://twitter.com/nehalist`,
      linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
      instagram: ``,
      youtube: ``,
      github: `https://github.com/nehalist`,
      twitch: ``
    }
  }
}
```

## Component shadowing

In case you've never heard of component shadowing I highly recommend to read the official 
docs regarding [this topic](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/). (I honestly had no idea 
about this when I started to work on this theme)

Nehalem provides a bunch of placeholder components which are meant to be shadowed by you - even though you don't have to do this (since 
most things can be done by simply editing the theme and `gatsby-config.js`).

Available placeholder components are:

###  Logo

- Original path: `src/components/logo/index.tsx`
- Shadowed path would be: `src/@nehalist/gatsby-theme-nehalem/components/logo/index.tsx`

This is the logo shown in the navigation.

### Avatar

- Original path: `src/components/avatar/index.tsx`
- Shadowed path would be: `src/@nehalist/gatsby-theme-nehalem/components/avatar/index.tsx`

Your avatar picture shown in the bio.

### Comments

- Original path: `src/components/comments/index.tsx`
- Shadowed path would be: `src/@nehalist/gatsby-theme-nehalem/comments/index.tsx`

The `<Comments>` component is embedded beneath every post and should make it easier for you to embed comments (like Commento, Disqus, ...).

### SidebarContent

- Original path: `src/components/sidebar-content/index.tsx`
- Shadowed path would be: `src/@nehalist/gatsby-theme-nehalem/sidebar-content/index.tsx`

The sidebar content on the front page.

### PageSidebarContent

- Original path: `src/components/page-sidebar-content/index.tsx`
- Shadowed path would be: `src/@nehalist/gatsby-theme-nehalem/page-sidebar-content/index.tsx`

The sidebar content for pages.

---

*Cover image by [@alex_andrews](https://unsplash.com/@alex_andrews)*
