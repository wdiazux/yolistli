import { createStyles } from '@material-ui/core/styles'
import { container } from '../material-kit-pro/material-kit-pro'

const scenarioPageStyle = () =>
    createStyles({
        container: {
            ...container,
            padding: '100px 0',
        },
        slideOverlay: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            cursor: 'pointer',
            background: 'rgba(255, 255, 255, 0)',
        },
    })

export default scenarioPageStyle
