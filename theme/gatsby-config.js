module.exports = (themeOptions) => {
  const loadDefaultPages = (themeOptions.loadDefaultPages) ? themeOptions.loadDefaultPages : true;

  return {
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
      `gatsby-plugin-sharp`,
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
      loadDefaultPages && {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`
        }
      }
    ]
  };
};
