const path = require('path');

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pagesQuery = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              metaTitle
              slug
            }
          }
        }
      }
    `
  );
  pagesQuery.data.allContentfulPage.edges.forEach((page) => {
    createPage({
      path: `/${page.node.slug}/`,
      component: path.resolve('./src/templates/page.tsx'),
      context: {
        slug: page.node.slug,
      },
    });
  });
};
