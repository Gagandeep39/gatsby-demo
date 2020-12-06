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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,  // Everythig inside src must be accessible
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              // Prevents image t link to original url
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
  ],
}
