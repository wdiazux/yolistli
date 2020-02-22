import React from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'
import Button from '../../components/MaterialKit/CustomButtons/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import BackgroundImage from 'gatsby-background-image'

import landingPageStyle from '../../assets/jss/views/landingPageStyle'
import heroShapesStyle from '../../assets/jss/views/landingPageSections/heroShapesStyle'

const useStyles = makeStyles(landingPageStyle)
const shapeStyles = makeStyles(heroShapesStyle)

const HeroSection = () => {
    const classes = useStyles()
    const shapes = shapeStyles()
    const data = useStaticQuery(graphql`
        query {
            backgroundHero: file(relativePath: { eq: "page-title-shape.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vrBanner: file(relativePath: { eq: "vr-banner-img.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shapeImage: allFile(
                filter: {
                    extension: { regex: "/(jpg)|(jpeg)|(png)/" }
                    relativeDirectory: { eq: "shape-images" }
                }
                sort: { fields: name }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth: 200, quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const shapeImages = data.shapeImage.edges
    const heroSection = clsx(classes.section, classes.heroSection)

    return (
        <BackgroundImage
            Tag={`section`}
            className={heroSection}
            backgroundColor={`#f4faff`}
            fluid={data.backgroundHero.childImageSharp.fluid}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
            }}>
            <Container className={classes.container}>
                <GridContainer orientation="row" alignItems="center">
                    <GridItem md={5}>
                        <div className="heroContent">
                            <span className={classes.heroSpan}>
                                Virtual Reality
                            </span>
                            <Typography
                                variant="h1"
                                classes={{ h1: classes.heroTitle }}>
                                Dream With Your Eyes Open
                            </Typography>
                            <Typography variant="body1">
                                Virtual reality is a great option if you want to
                                know places from the comfort of your home, and
                                do not worry if you do not have lenses because
                                it works on mobiles and computers.
                            </Typography>
                            <Button href="/scenarios/" color={'primary'}>
                                Explore a VR Experience
                                <ArrowForwardIcon />
                            </Button>
                        </div>
                    </GridItem>
                    <GridItem md={7}>
                        <Img
                            objectFit="contain"
                            className={classes.vrBanner}
                            fluid={data.vrBanner.childImageSharp.fluid}
                        />
                    </GridItem>
                </GridContainer>
            </Container>
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeOne}
                fluid={shapeImages[6].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeTwo}
                fluid={shapeImages[7].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeThree}
                fluid={shapeImages[8].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeFour}
                fluid={shapeImages[9].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeFive}
                fluid={shapeImages[10].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeSix}
                fluid={shapeImages[11].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeSeven}
                fluid={shapeImages[12].node.childImageSharp.fluid}
            />
            <Img
                fadeIn={false}
                objectFit="contain"
                className={shapes.shapeEight}
                fluid={shapeImages[13].node.childImageSharp.fluid}
            />
        </BackgroundImage>
    )
}

export default HeroSection
