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
                <GridItem md={4}>
                    <Typography variant="h5">Yolistli</Typography>
                    <Typography variant="body1">
                        Probably the best UI Kit in the world! We know
                        you&apos;ve been waiting for it, so don&apos;t be shy!
                    </Typography>
                </GridItem>
                <GridItem md={4}>
                    <Typography variant="h5">About</Typography>
                    <ul className={classes.linksVertical}>
                        <li>
                            <a href="#pablo">Transactions FAQ</a>
                        </li>
                        <li>
                            <a href="#pablo">Terms & conditions</a>
                        </li>
                        <li>
                            <a href="#pablo">Licenses</a>
                        </li>
                    </ul>
                </GridItem>
                <GridItem md={4}>
                    <Typography variant="h5">
                        Subscribe to Newsletter
                    </Typography>
                    <Typography variant="body1">
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
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
