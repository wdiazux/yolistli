// Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
// See: https://www.gatsbyjs.org/docs/ssr-apis/

import React from 'react'
import TopLayout from './src/TopLayout'

export const wrapRootElement = ({ element }) => {
    return <TopLayout>{element}</TopLayout>
}
