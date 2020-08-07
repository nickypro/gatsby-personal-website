require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const DATADIR = `${__dirname}/src/data`

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
        path: `${DATADIR}`,
      },
    },
    /*{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${DATADIR}/projects`
      }
    },*/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          {
            resolve: 'gatsby-remark-copy-relative-linked-files',
            options: {
              ignoreFileExtensions: ['.md', '.png', '.jpg', '.pdf', '.xcf'],
            },
          },
        ],
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
        icon: `${DATADIR}/icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}