# Nehalem Gatsby Theme

![Travis (.org)](https://img.shields.io/travis/nehalist/gatsby-theme-nehalem)

<p align="center">
    <img src="https://github.com/nehalist/gatsby-theme-nehalem/blob/master/theme/logo.png?raw=true">
</p>

> Check the [Demo](https://nehalem.netlify.com)!

**Nehalem** is a Gatsby theme for blogging.

## Features

Out-of-the-box:

- Fully responsive
- Highly optimized (Lighthouse score ~400)
- SEO optimized (with open graph, Twitter Card, JSON-LD, RSS and sitemap)
- Syntax highlighting
- Search functionality
- Multi navigations
- Static pages
- Fully typed with TypeScript
- Tagging
- Theming
- Customizable

See [here](https://nehalem.netlify.com/features) for details!

## Installation

> See [this repo](https://github.com/nehalist/gatsby-starter-nehalem) for a quick start!

> A more detailed guide on installation can be found [here](https://nehalem.netlify.com/getting-started)!

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save @nehalist/gatsby-theme-nehalem
    # or
    yarn add @nehalist/gatsby-theme-nehalem
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [{
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
      }]
    }
    ```
    
Before starting your site make sure that the following requirements are fulfilled:

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

Finally you can start your site with

```sh
gatsby develop
```

## Documentation

The entire documentation can be found on the [Demo](https://nehalem.netlify.com). Alternatively check 
the [GitHub repository](https://github.com/nehalist/gatsby-theme-nehalem/tree/master/demo/content/posts).

## Like the theme?

Happy to hear that! Feel free to star it on [GitHub](https://github.com/nehalist/gatsby-theme-nehalem)!

## Author

Developed by [nehalist.io](https://nehalist.io).

*Big thanks to my SO for the awesome logo!*
