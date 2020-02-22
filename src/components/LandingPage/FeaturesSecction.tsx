import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'

import featuresStyle from '../../assets/jss/views/landingPageSections/featuresStyle'

const useStyles = makeStyles(featuresStyle)

const FeaturesSection = () => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            vrImage: file(relativePath: { eq: "vr-img.png" }) {
                childImageSharp {
                    fluid(maxHeight: 690) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id="features">
            <GridContainer
                className={classes.container}
                orientation="row"
                alignItems="center">
                <Typography variant="h2">Features</Typography>
                <div className="content">vr-specifications-content</div>
            </GridContainer>
        </section>
    )
}

export default FeaturesSection
