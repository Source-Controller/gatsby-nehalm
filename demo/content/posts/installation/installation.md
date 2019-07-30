---
title: "Getting started"
path: "/getting-started"
tags: ["Theme"]
featuredImage: "./cover.jpg"
excerpt: Nehalem is easily installable due to its packaged nature.
created: 2019-07-20
updated: 2019-07-20
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
        loadDefaultPages: true
      }
    }
  ],
};
```

*Note: In a future release theme options will cover most configurations of the `gatsby-config.js`!*

3. Be sure to have a `content` directory within your Gatsby installation __and__ a `tags.yml` file within this directory!

For further instructions check the other docs:

- [How to create posts and pages](creating-content)
- [How to customize the theme](/customization)
- [How to create custom pages](/custom-pages)

Or check the [features](/features) to get an idea of all the possibilities with Nehalem!

I hope you enjoy this theme!

– Kevin

---

*Cover by [@brandencollum](https://unsplash.com/@bradencollum)*
