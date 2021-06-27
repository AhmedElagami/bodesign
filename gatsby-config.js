/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Bodesign',
    description: 'Graphic Design'
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://bodesign-api.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`project`, `price`, `service`],
        singleTypes: ['about', 'logo', 'homepage-hero-image', 'prices-hero-image'],
      },
    },
  ],
}
