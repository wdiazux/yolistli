/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    siteMetadata: {
        title: `Yolistli`,
        description: `A platform that offers virtual interactive reconstructions for the Web.`,
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
                name: `Yolistli`,
                short_name: `Yolistli`,
                start_url: `/`,
                background_color: `#e82041`,
                theme_color: `#e82041`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
