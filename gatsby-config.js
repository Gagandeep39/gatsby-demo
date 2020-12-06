/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Fixes routing in gh-pages
  // pathPrefix: "/reponame",
  pathPrefix: "/gatsby-demo",
  // Meta data to be accssed by graphql
  siteMetadata: {
    title: 'Full-stack Gatsby App',
    author: 'Gagandeep Singh'
  },
  plugins: [
    `gatsby-plugin-sass`
  ],
}
