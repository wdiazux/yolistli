/* eslint-disable @typescript-eslint/no-explicit-any */
// If you import Scene from 'babylonjs' then make sure to alias one of them.
import React from 'react'
import Iframe from '../components/Experience/Iframe'

const experience: React.FC = () => {
    return (
        <>
            <Iframe />
            <div id="loading"></div>
        </>
    )
}

export default experience
