import React, { useContext } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import { GlobalContext } from '../../context/GlobalContext'
import footerStyles from '../../assets/jss/views/experiencePageStyle'

const useStyles = makeStyles(footerStyles)

const Iframe: React.FC = () => {
    const globalState = useContext(GlobalContext)
    const classes = useStyles()
    const { scenarioUrl } = globalState

    return (
        <iframe
            id="experience"
            title="Cihuatan"
            className={classes.iframe}
            src={scenarioUrl}></iframe>
    )
}

export default Iframe
