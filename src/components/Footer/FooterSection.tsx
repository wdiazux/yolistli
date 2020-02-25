import React from 'react'
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// core components
import GridContainer from '../MaterialKit/Grid/GridContainer'
import GridItem from '../MaterialKit/Grid/GridItem'
import footerStyles from '../../assets/jss/views/componentsSections/footerStyle'

const useStyles = makeStyles(footerStyles)

const FooterSection: React.FC = () => {
    const classes = useStyles()
    const footerClass = clsx(classes.footer, classes.dark)

    return (
        <footer className={footerClass}>
            <GridContainer className={classes.container}>
                <GridItem md={6}>
                    <Typography variant="h5">Yolistli</Typography>
                    <Typography variant="body1">
                        We build custom virtual designs for construction,
                        spaces, and even small products with new virtual reality
                        technologies for the web. You can enjoy the immersion in
                        a new virtual world with an easy integration on any
                        website.
                    </Typography>
                </GridItem>
                <GridItem md={6}>
                    <Typography variant="h5">Contact us</Typography>
                    <Typography variant="body1">
                        Phone: (503) 731-419-87
                    </Typography>
                    <Typography variant="body1">
                        Office: El Salvador, San Salvador, Col Delicias del
                        Norte, Pje Landos II 3B
                    </Typography>
                </GridItem>
                <hr />
                <div className={classes.bottom}>
                    Copyright ©2020 Yolistli All Rights Reserved.
                </div>
            </GridContainer>
        </footer>
    )
}

export default FooterSection
