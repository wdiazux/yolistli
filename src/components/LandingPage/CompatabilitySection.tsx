import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'

import compatibilityStyle from '../../assets/jss/views/landingPageSections/compatibilityStyle'

const useStyles = makeStyles(compatibilityStyle)

const DesignSection = () => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            compatibilityImage: file(
                relativePath: { eq: "compatibility-img.png" }
            ) {
                childImageSharp {
                    fluid(maxHeight: 583) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id="compatibility" className={classes.root}>
            <GridContainer className={classes.container} orientation="row">
                <GridItem md={6}>
                    <div>
                        <Typography variant="h2" className={classes.title}>
                            VR Headset Built For Comfort And Choice
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                        </Typography>
                    </div>
                </GridItem>
                <GridItem md={6}>
                    <Box
                        justifyContent="flex-end"
                        className={classes.imgContainer}>
                        <Img
                            objectFit="contain"
                            objectPosition="bottom center"
                            className={classes.compatibilityImage}
                            fluid={
                                data.compatibilityImage.childImageSharp.fluid
                            }
                        />
                    </Box>
                </GridItem>
            </GridContainer>
        </section>
    )
}

export default DesignSection
