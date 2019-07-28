const fs      = require('fs');
const mkdirp  = require('mkdirp');
const path    = require('path');
const slugify = require('slugify');

/**
 * Before booting up Gatsby make sure the content path directory exists.
 */
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();

  const contentPath = themeOptions.contentPath || 'content';
  const assetPath   = themeOptions.assetPath || 'assets';

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

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const postsPerPage = themeOptions.postsPerPage ? themeOptions.postsPerPage : 5;

  const result = await graphql(`
    query {
      allMarkdownRemark(limit: ${postsPerPage}, sort: {fields: frontmatter___created, order: DESC}) {
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
              createdPretty: created(formatString: "DD MMMM, YYYY")
              updated
              updatedPretty: created(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 800, quality: 100) {
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

  const tags  = [];
  const posts = result.data.allMarkdownRemark.edges.map(node => node.node);

  posts.forEach(post => {
    if (post.frontmatter.tags) {
      tags.push(...post.frontmatter.tags);
    }
    const primaryTag = post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null;
    actions.createPage({
      path: post.frontmatter.path,
      component: require.resolve(`./src/templates/post.tsx`),
      context: {
        post: post,
        primaryTag: primaryTag
      }
    });
  });

  [...new Set(tags)].forEach(tag => {
    const slugified = slugify(tag, { lower: true });
    actions.createPage({
      path: `/tag/${slugified}`,
      component: require.resolve(`./src/templates/tag.tsx`),
      context: {
        tag
      }
    });
  });

  actions.createPage({
    path: "/",
    component: require.resolve(`./src/templates/posts.tsx`),
    context: {
      posts
    }
  });
};
