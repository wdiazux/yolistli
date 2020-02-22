import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// core components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from 'react-slick'
import Img from 'gatsby-image/withIEPolyfill'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../components/MaterialKit/Grid/GridContainer'
import GridItem from '../components/MaterialKit/Grid/GridItem'
import scenarioPageStyles from '../assets/jss/views/scenarioPagestyle'
import '../assets/scss/scenarios.scss'

const useStyles = makeStyles(scenarioPageStyles)

const scenarios: React.FC = () => {
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            allScenarios {
                edges {
                    node {
                        name
                    }
                }
            }
            allFile(
                filter: {
                    sourceInstanceName: { eq: "scenarios" }
                    name: { eq: "poster" }
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid(quality: 90) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const scenarios = data.allScenarios.edges
    const posters = data.allFile.edges

    interface SlideOptions {
        node: { name: string }
    }

    return (
        <Layout>
            <SEO title="Scenarios" />
            <GridContainer
                className={classes.container}
                orientation="row"
                alignItems="center">
                <GridItem>
                    <Typography id="title" variant="h2">
                        Select one sceneario:
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Slider {...settings}>
                            {scenarios.map((node: SlideOptions, i: number) => (
                                <div key={i}>
                                    <Link to="/experience">
                                        <Img
                                            objectFit="cover"
                                            fluid={
                                                posters[i].node.childImageSharp
                                                    .fluid
                                            }
                                        />
                                        <Typography variant="h3">
                                            {node.node.name}
                                        </Typography>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </Box>
                </GridItem>
            </GridContainer>
        </Layout>
    )
}

export default scenarios
