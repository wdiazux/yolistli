// Implement Gatsby's Browser APIs in this file.
// See: https://www.gatsbyjs.org/docs/browser-apis/

import React from 'react'
import TopLayout from './src/TopLayout'

// gatsby-background-image
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
    }
}

export const wrapRootElement = ({ element }) => {
    return <TopLayout>{element}</TopLayout>
}
