/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "First Project",
    description: "Nice and Clean Project Structure",
    author: "Dada",
    person: { name: "gand", age: 34 },
    simpleData: ["Java", "JavaScript", "Python"],
    complexData: [
      { name: "data", age: 32 },
      { name: "lodu", age: 56 },
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
