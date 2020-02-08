/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import '../assets/scss/material-kit-pro/material-kit-pro.scss?v=1.8.0'
import 'typeface-roboto'
import 'typeface-roboto-slab'

import { ThemeProvider } from '../context/ThemeContext'
import TopBar from './Header/TopBar'
import FooterSection from './Footer/FooterSection'
import layoutStyle from '../assets/jss/layoutStyle'

const useStyles = makeStyles(layoutStyle)

const Layout: React.FC = ({ children }) => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <CssBaseline />
            <ThemeProvider>
                <TopBar siteTitle={data.site.siteMetadata.title} />
                <main className={classes.main}>{children}</main>
                <FooterSection />
            </ThemeProvider>
        </>
    )
}

export default Layout
