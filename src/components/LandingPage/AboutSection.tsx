import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeadVr,
    faStreetView,
    faLayerGroup,
    faPhoneLaptop,
    faBrowser,
} from '@fortawesome/pro-regular-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import aboutStyle from '../../assets/jss/views/landingPageSections/aboutStyle'

const useStyles = makeStyles(aboutStyle)

const AboutSection = () => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            vrAbout: file(relativePath: { eq: "vr-about-img.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Container className={classes.container} id="about">
            <GridContainer orientation="row" alignItems="center">
                <GridItem md={6}>
                    <Img
                        objectFit="contain"
                        className={classes.aboutImage}
                        fluid={data.vrAbout.childImageSharp.fluid}
                    />
                </GridItem>
                <GridItem md={6}>
                    <div className="aboutContent">
                        <Typography variant="h2">
                            Discover A Whole New Reality
                        </Typography>
                        <Typography variant="body1">
                            We build custom virtual designs for its
                            construction, spaces, and even small products with
                            new virtual reality technologies for the web, you
                            can immerse yourself in a new virtual world and it
                            is easy to install on any website.
                        </Typography>
                        <div className={classes.aboutFeatures}>
                            <GridContainer>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faHeadVr}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        Virtual Reality
                                    </Typography>
                                </GridItem>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faLayerGroup}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        Innovator Design
                                    </Typography>
                                </GridItem>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faStreetView}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        360 Views
                                    </Typography>
                                </GridItem>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faPhoneLaptop}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        Multiplatform
                                    </Typography>
                                </GridItem>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faBrowser}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        For te Web
                                    </Typography>
                                </GridItem>
                                <GridItem
                                    xs={6}
                                    md={4}
                                    className={classes.featuresBox}>
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        className={
                                            classes.icon
                                        }></FontAwesomeIcon>
                                    <Typography variant="h3">
                                        Dynamic
                                    </Typography>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    )
}

export default AboutSection
