import React, { useContext, useState, useEffect } from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
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
import { GlobalContext } from '../context/GlobalContext'
import GridContainer from '../components/MaterialKit/Grid/GridContainer'
import GridItem from '../components/MaterialKit/Grid/GridItem'
import scenarioPageStyles from '../assets/jss/views/scenarioPagestyle'
import '../assets/scss/scenarios.scss'

const useStyles = makeStyles(scenarioPageStyles)

const scenarios: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const globalState = useContext(GlobalContext)
    const classes = useStyles()
    const data = useStaticQuery(graphql`
        query {
            allScenarios(sort: { fields: name }) {
                edges {
                    node {
                        name
                        location
                    }
                }
            }
            allFile(
                filter: {
                    sourceInstanceName: { eq: "scenarios" }
                    name: { eq: "poster" }
                }
                sort: { fields: name }
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
        afterChange: (current: number) => setCurrentSlide(current),
    }
    const scenarios = data.allScenarios.edges
    const posters = data.allFile.edges

    interface SlideOptions {
        node: { name: string }
    }

    const goToExperience = () => {
        const { setScenarioUrl } = globalState
        setScenarioUrl(scenarios[currentSlide].node.location)
        navigate('/experience')
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
                                    <div
                                        className={classes.slideOverlay}
                                        data-index={i}
                                        onClick={goToExperience}></div>
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
