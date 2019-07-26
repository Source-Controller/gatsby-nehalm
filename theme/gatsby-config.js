module.exports = (themeOptions) => ({
  siteMetadata: {
    title: `nehalem`,
    description: `A Gatsby theme for %TOPICS%`,
    topics: [
      `bloggers`,
      `writers`,
      `geeks`,
      `nerds`,
      `people`,
      `pretty much everyone`
    ],
    logo: `gatsby-icon.png`,
    menu: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Foo',
        path: '/foo'
      }
    ],
    footerMenu: [
      {
        name: 'Test',
        path: '/foo'
      }
    ],
    search: true
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: themeOptions.contentPath || 'content'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'assets',
        path: themeOptions.assetPath || 'assets'
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
          { name: 'title', store: true }
        ],
        resolvers: {
          allMdx: {
            title: node => console.log(node)
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
  ]
});
