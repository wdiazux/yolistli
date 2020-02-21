import React from 'react'
// core components
import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroSection from '../components/LandingPage/HeroSection'
import AboutSection from '../components/LandingPage/AboutSection'

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <HeroSection />
            <AboutSection />
        </Layout>
    )
}

export default IndexPage
