import React, { useContext, useEffect } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import { GlobalContext } from '../../context/GlobalContext'
import footerStyles from '../../assets/jss/views/experiencePageStyle'

const useStyles = makeStyles(footerStyles)

const Iframe: React.FC = () => {
    const globalState = useContext(GlobalContext)
    const classes = useStyles()
    const { scenarioUrl, setScenarioUrl } = globalState

    useEffect(() => {
        if (
            (scenarioUrl === '' || !scenarioUrl) &&
            localStorage !== undefined
        ) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const url = JSON.parse(localStorage.getItem('scenarioUrl')!)
            setScenarioUrl(url)
        }
    }, [])

    return (
        <iframe
            id="experience"
            title="Cihuatan"
            className={classes.iframe}
            src={scenarioUrl}></iframe>
    )
}

export default Iframe
