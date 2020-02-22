import { createStyles } from '@material-ui/core/styles'
import { container } from '../../material-kit-pro/material-kit-pro'

const compatibilityStyle = () =>
    createStyles({
        root: {
            position: 'relative',
            paddingTop: '70px',
            overflow: 'hidden',
            '&:before': {
                background:
                    'linear-gradient(to bottom,#00e4ff, #00eef2, #00f6dc, #15fbbc,#69ff97)',
                position: 'absolute',
                bottom: '-90%',
                height: '130%',
                left: '0',
                zIndex: -1,
                width: '100%',
                content: '""',
                transform: 'skewY(167deg)',
            },
        },
        container: {
            ...container,
        },
        compatibilityImage: {
            maxHeight: '436px',
        },
    })

export default compatibilityStyle
