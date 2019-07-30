---
title: "Getting started"
path: "/getting-started"
tags: ["Theme"]
featuredImage: "./cover.jpg"
excerpt: Nehalem is easy to install due to its packaged nature. Learn how to install it and the basics of the configuration capabilities.
created: 2019-07-30
updated: 2019-07-30
---

> **Important**: Before diving right into the installation check the [Using a Gatsby Theme](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme) guide!

1. Install the theme via npm or yarn:

```bash
npm i @nehalist/gatsby-theme-nehalem --save
# or
yarn add @nehalist/gatsby-theme-nehalem
```

2. Add the theme theme to your `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: { // optional theme options
        // location to our content
        contentPath: `content`,
        // the page manifest
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/assets/nehalist-gatsby.png`
        },
        // if archive pages should be generated automatically
        loadDefaultPages: true,
        // posts shown on the front page
        postsPerPage: 5
      }
    }
  ],
};
```

*Note: In a future release theme options will cover most configurations of the `gatsby-config.js`!*

3. Nehalem in its default configuration requires a certain structure of your content. This is especially important to consider 
when using a starter which already ships with a specific content structure - so just follow these rules:
   
   1. Be sure to have a `content` directory within your Gatsby installation
   2. Be sure to have a `tags.yml` file within the `content` directory with _at least_ one tag, e.g.
   
      ```yaml
      - name: Uncategorized
        color: #000
        icon: null
        featured: false
      ```
      
   3. Be sure for your markdown files to include proper frontmatter content, e.g.:
   
      ```markdown   
      ---
      title: "Post title"
      path: "/path-to-your-post"
      tags: ["Theme"]
      featuredImage: "./cover.jpg"
      excerpt: Descriptive description.
      created: 2019-07-29
      updated: 2019-07-29
      ---
      
      ```

For further instructions check the other docs:

- [How to create posts and pages](creating-content)
- [How to customize the theme](/customization)
- [How to create custom pages](/custom-pages)

Or check the [features](/features) to get an idea of all the possibilities with Nehalem!

I hope you enjoy this theme!

– Kevin

---

*Cover by [@brandencollum](https://unsplash.com/@bradencollum)*
