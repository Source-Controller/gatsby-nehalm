const fs = require('fs');

/**
 * Before booting up Gatsby make sure the content path directory exists.
 */
exports.onPreBootstrap = ({}, themeOptions) => {
  const contentPath = themeOptions.contentPath || 'content';

  if (!fs.existsSync(contentPath)) {
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.data.allMdx.edges.map(e => e.node.frontmatter);

  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/posts.tsx"),
    context: {
      posts
    }
  })
};
