import React from 'react'
// core components
import Header from '../MaterialKit/Header/Header'
import HeaderLinks from './HeaderLinks'

interface Props {
    siteTitle: string
}

const TopBar: React.FC<Props> = ({ siteTitle }) => {
    return (
        <Header
            brand={siteTitle}
            color="primary"
            fixed={true}
            links={<HeaderLinks />}
        />
    )
}

export default TopBar
