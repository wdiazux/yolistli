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
    let { scenarioUrl } = globalState
    if (scenarioUrl === '' || !scenarioUrl) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        scenarioUrl = JSON.parse(localStorage.getItem('scenarioUrl')!)
    }

    return (
        <iframe
            id="experience"
            title="Cihuatan"
            className={classes.iframe}
            src={scenarioUrl}></iframe>
    )
}

export default Iframe
