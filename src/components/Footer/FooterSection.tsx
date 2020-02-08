import React from 'react'
import Footer from '../MaterialKit/Footer/Footer'

const FooterSection: React.FC = () => {
    return (
        <Footer
            theme="dark"
            content={
                <div>
                    Copyright © {new Date().getFullYear()}, Yolistli All Rights
                    Reserved
                </div>
            }
        />
    )
}

export default FooterSection
