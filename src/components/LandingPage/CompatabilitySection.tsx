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
                            Built for everyone in mind
                        </Typography>
                        <Typography variant="body1">
                            Yolistli&apos;s experiences are built thinking on
                            all the people using multiple types of devices. From
                            a smartphone view to a VR headset using the same
                            phone to complex solutions like the Oculus Rift or
                            HTC Vive. Everything is just
                            <a href="/scenarios/" style={{ color: '#EB5140' }}>
                                {' '}
                                {/* Fix later */}
                                one click away
                            </a>
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
