const fs = require('fs');

exports.onPreBootstrap = ({}, themeOptions) => {
  const contentPath = themeOptions.contentPath || 'content';

  if (!fs.existsSync(contentPath)) {
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!");

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.tsx"),
    context: {
      heading: "Your Theme Here",
      content: `
        <p>
          Use this handy theme example as the basis for your own amazing theme!
        </p>
        <p>
          For more information, see 
          <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
        </p>
      `,
    },
  })
};
