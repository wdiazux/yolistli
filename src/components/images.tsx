import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const images = graphql`
    query MyQuery {
        allImageSharp {
            edges {
                node {
                    id
                }
            }
        }
    }
`

const PlaceHolderImg: React.FC = () => {
    return <Img fluid={images.placeholderImage.childImageSharp.fluid} />
}
const VrBannerImg: React.FC = () => {
    return <Img fluid={images.vrBanner.childImageSharp.fluid} />
}
const AboutImg: React.FC = () => {
    return <Img fluid={images.about.childImageSharp.fluid} />
}
const CompabilityImg: React.FC = () => {
    return <Img fluid={images.compability.childImageSharp.fluid} />
}
const VrManShapeImg: React.FC = () => {
    return <Img fluid={images.vrManShape.childImageSharp.fluid} />
}
const ShapeImg1: React.FC = () => {
    return <Img fluid={images.shapeImg1.childImageSharp.fluid} />
}
const ShapeImg2 = <Img fluid={images.shapeImg2.childImageSharp.fluid} />
const ShapeImg3 = <Img fluid={images.shapeImg3.childImageSharp.fluid} />
const ShapeImg4 = <Img fluid={images.shapeImg4.childImageSharp.fluid} />
const ShapeImg5 = <Img fluid={images.shapeImg5.childImageSharp.fluid} />
const ShapeImg6 = <Img fluid={images.shapeImg6.childImageSharp.fluid} />
const ShapeImg7 = <Img fluid={images.shapeImg7.childImageSharp.fluid} />
const ShapeImg8 = <Img fluid={images.shapeImg8.childImageSharp.fluid} />
const ShapeDotImg1 = <Img fluid={images.shapeDotImg1.childImageSharp.fluid} />
const ShapeDotImg2 = <Img fluid={images.shapeDotImg2.childImageSharp.fluid} />
const ShapeDotImg3 = <Img fluid={images.shapeDotImg3.childImageSharp.fluid} />
const ShapeDotImg4 = <Img fluid={images.shapeDotImg4.childImageSharp.fluid} />
const ShapeDotImg5 = <Img fluid={images.shapeDotImg5.childImageSharp.fluid} />
const ShapeDotImg6 = <Img fluid={images.shapeDotImg6.childImageSharp.fluid} />

export default images
export {
    PlaceHolderImg,
    VrBannerImg,
    AboutImg,
    CompabilityImg,
    VrManShapeImg,
    ShapeImg1,
    ShapeImg2,
    ShapeImg3,
    ShapeImg4,
    ShapeImg5,
    ShapeImg6,
    ShapeImg7,
    ShapeImg8,
    ShapeDotImg1,
    ShapeDotImg2,
    ShapeDotImg3,
    ShapeDotImg4,
    ShapeDotImg5,
    ShapeDotImg6,
}
