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
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: themeOptions.contentPath || 'content'
      }
    },
    `gatsby-plugin-mdx`
  ]
});
