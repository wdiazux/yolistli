import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// core components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from 'react-slick'
import Image from 'gatsby-image'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../components/MaterialKit/Grid/GridContainer'
import scenarioPageStyles from '../assets/jss/views/scenarioPagestyle'

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

    interface SlideOptions {
        node: { name: string }
    }

    console.log(scenarios)
    return (
        <Layout>
            <SEO title="Scenarios" />
            <GridContainer
                className={classes.container}
                orientation="row"
                alignItems="center">
                <Typography variant="h2">Select one sceneario:</Typography>
                <Slider {...settings}>
                    {scenarios.map((node: SlideOptions, i: number) => (
                        <div key={i}>
                            <h3>{node.node.name}</h3>
                        </div>
                    ))}
                </Slider>
            </GridContainer>
        </Layout>
    )
}

export default scenarios
