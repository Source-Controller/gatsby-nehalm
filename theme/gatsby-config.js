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
    search: true
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: themeOptions.contentPath || 'content'
      }
    },
    `gatsby-plugin-mdx`
  ]
});
