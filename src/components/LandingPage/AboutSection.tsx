import React from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'

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
                        fluid={data.vrAbout.childImageSharp.fluid}
                    />
                </GridItem>
                <GridItem md={6}>
                    <div className="aboutContent">
                        <h2 className={classes.aboutTitle}>
                            Dream With Your Eyes Open
                        </h2>
                        <p>
                            Virtual reality is a great option if you want to
                            know places from the comfort of your home, and do
                            not worry if you do not have lenses because it works
                            on mobiles and computers.
                        </p>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    )
}

export default AboutSection
