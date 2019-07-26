const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

/**
 * Before booting up Gatsby make sure the content path directory exists.
 */
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();

  const contentPath = themeOptions.contentPath || 'content';
  const assetPath = themeOptions.assetPath || 'assets';

  const directories = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath)
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp(dir);
    }
  })
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            headings {
              depth
            }
            frontmatter {
              title
              path
              tags
              excerpt
              created
              updated
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 630, quality: 90) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges.map(node => node.node);

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.path,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        post: post
      }
    });
  });

  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/posts.tsx"),
    context: {
      posts
    }
  });
};
