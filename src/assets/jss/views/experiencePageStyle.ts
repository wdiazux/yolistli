import { createStyles } from '@material-ui/core/styles'

const landingPageStyle = () =>
    createStyles({
        iframe: {
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            border: 'none',
        },
    })

export default landingPageStyle
