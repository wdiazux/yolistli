import React from 'react'
// core components
import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroSection from '../components/LandingPage/HeroSection'

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <HeroSection />
        </Layout>
    )
}

export default IndexPage
