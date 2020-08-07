require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Eoin Blunnie",
    description: "Personal website of Eoin Blunnie",
    author: "Nicky Pochinkov",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
          "page",
          "project",
          "project-type",
          "page-list-location",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "eoin-blunnie",
        short_name: "blunnie",
        start_url: "/",
        background_color: "#66ccdd",
        theme_color: "#66ccdd",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}