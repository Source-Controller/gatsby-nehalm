module.exports = (themeOptions) => {
  const loadDefaultPages = themeOptions.loadDefaultPages ? themeOptions.loadDefaultPages : true;
  const manifest         = themeOptions.manifest ? themeOptions.manifest : {
    name: `nehalem - A Gatsby theme`,
    short_name: `nehalem`,
    start_url: `/`,
    background_color: `#a4cbb8`,
    theme_color: `#a4cbb8`,
    display: `minimal-ui`,
    icon: `${__dirname}/assets/nehalist-gatsby.png`
  };

  return {
    siteMetadata: {
      title: `nehalem`,
      siteUrl: `https://nehalem.netlify.com`,
      description: `A Gatsby theme for %TOPICS%`,
      topics: [
        `bloggers`,
        `writers`,
        `geeks`,
        `nerds`,
        `people`,
        `pretty much everyone`
      ],
      menu: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Foo',
          path: '/foo'
        },
        // {
        //   name: 'Bar',
        //   path: '/bar'
        // },
        // {
        //   name: 'Thelink',
        //   path: '/foo'
        // },
        // {
        //   name: 'Privacy Policy',
        //   path: '/foo'
        // }
      ],
      footerMenu: [
        {
          name: 'Test',
          path: '/foo'
        },
        {
          name: 'Foo',
          path: '/foobar'
        }
      ],
      search: true,
      author: {
        name: `Kevin`,
        description: `<strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Sed at faucibus mauris. Sed accumsan nibh volutpat consectetur hendrerit. Proin quis pellentesque nulla. Duis placerat lacus non tempus efficitur.`,
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
    },
    plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: manifest
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'pages',
          path: themeOptions.pagesPath || 'content/pages'
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'posts',
          path: themeOptions.postsPath || 'content/posts'
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'assets',
          path: themeOptions.assetPath || 'content/assets'
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'content',
          path: themeOptions.contentPath || 'content'
        }
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `Tags`
        }
      },
      {
        resolve: `gatsby-plugin-lunr`,
        options: {
          languages: [
            {
              name: 'en'
            }
          ],
          fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'content', store: true },
            { name: 'tags', store: true },
            { name: 'excerpt', store: true },
            { name: 'path', store: true }
          ],
          resolvers: {
            MarkdownRemark: {
              title: node => node.frontmatter.title,
              content: node => node.html,
              tags: node => node.frontmatter.tags,
              excerpt: node => node.frontmatter.excerpt,
              path: node => node.frontmatter.path
            }
          }
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-prismjs`
          ]
        }
      },
      loadDefaultPages && {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`
        }
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark } }) => {
                return allMarkdownRemark.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.excerpt,
                    date: edge.node.frontmatter.created,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
              },
              query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___created] },
                  filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        excerpt
                        path
                        created
                      }
                    }
                  }
                }
              }
              `,
              output: `/rss.xml`,
              title: `RSS Feed`
            }
          ]
        }
      }
    ]
  };
};
