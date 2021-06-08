require("dotenv").config()

// process.env.GATSBY_PREVIEW_AUTH_TOKEN="74a469873fe8b4a272362875a3772d2c5bf821742eab3a3de7fa929abc6e0c6cc9a56d8b3af7bc22ca684f6c1885d80b35e92e90dc0002973a4e28c4a3f967cc" 
// process.env.GATSBY_PREVIEW_API_URL="http://localhost:8083/hooks/cms/status/d5553c68-3dc9-4d34-941f-afc1d989c196"
// process.env.GATSBY_PREVIEW_INDICATOR_ENABLED="true"

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
