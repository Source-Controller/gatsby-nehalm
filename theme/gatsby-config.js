module.exports = (themeOptions) => ({
  siteMetadata: {
    title: `nehalem`,
    description: `A Gatsby theme for bloggers`
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
