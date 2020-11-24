/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    'gatsby-plugin-react-helmet-async',
  ],
};
