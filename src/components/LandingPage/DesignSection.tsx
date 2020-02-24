import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'

import designStyle from '../../assets/jss/views/landingPageSections/designStyle'

const useStyles = makeStyles(designStyle)

const DesignSection = () => {
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
            vrDesign1: file(relativePath: { eq: "vr-design-img-1.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vrDesign2: file(relativePath: { eq: "vr-design-img-2.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vrDesign3: file(relativePath: { eq: "vr-design-img-3.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section id="design">
            <GridContainer
                className={classes.container}
                orientation="row"
                alignItems="center">
                <div className={classes.sectionTitle}>
                    <Typography variant="h2">
                        Go On Adventures You&apos;ve Only Dreamt Of
                    </Typography>
                    <Typography variant="body1">
                        Visit iconic places across the globe. Experience their
                        culture, history and all from your home, or your work.
                        Perhaps your university. Just open your browser and
                        enjoy the experience!
                    </Typography>
                </div>
                <GridItem>
                    <Img
                        className={classes.vrImage}
                        objectFit="contain"
                        objectPosition="bottom center"
                        fluid={data.vrImage.childImageSharp.fluid}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer
                spacing={0}
                orientation="row"
                alignItems="center"
                className={classes.designImages}>
                <GridItem md={4} className={classes.designImg}>
                    <Img
                        objectFit="cover"
                        fluid={data.vrDesign1.childImageSharp.fluid}
                    />
                </GridItem>
                <GridItem md={4} className={classes.designImg}>
                    <Img
                        objectFit="cover"
                        fluid={data.vrDesign2.childImageSharp.fluid}
                    />
                </GridItem>
                <GridItem md={4} className={classes.designImg}>
                    <Img
                        objectFit="cover"
                        fluid={data.vrDesign3.childImageSharp.fluid}
                    />
                </GridItem>
            </GridContainer>
        </section>
    )
}

export default DesignSection
