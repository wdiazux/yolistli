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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `scenarios`,
                path: `${__dirname}/src/assets/scenarios`,
            },
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {
                typeName: `Scenarios`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                useResolveUrlLoader: true,
            },
        },
        'gatsby-plugin-material-ui',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `yolistli`,
                short_name: `yolistli`,
                start_url: `/`,
                background_color: `#e82041`,
                theme_color: `#e82041`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
