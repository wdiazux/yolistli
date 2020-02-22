import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import footerStyles from '../../assets/jss/views/experiencePageStyle'

const useStyles = makeStyles(footerStyles)

const Iframe: React.FC = () => {
    const classes = useStyles()

    return (
        <iframe
            id="experience"
            title="Cihuatan"
            className={classes.iframe}
            src="https://yolistli-scenarios.netlify.com/scenarios/cihuatan"></iframe>
    )
}

export default Iframe
