/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    siteMetadata: {
        title: `Yolistli`,
        description: `A WebVR Experience.`,
        author: `Yolistli`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        'gatsby-plugin-material-ui',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `yolistli`,
                short_name: `yolistli`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
