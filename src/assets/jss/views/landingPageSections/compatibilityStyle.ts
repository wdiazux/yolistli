import { createStyles } from '@material-ui/core/styles'
import {
    container,
    primaryColor,
} from '../../material-kit-pro/material-kit-pro'

const compatibilityStyle = () =>
    createStyles({
        root: {
            position: 'relative',
            paddingTop: '70px',
            overflow: 'hidden',
            '&:before': {
                background: `linear-gradient(to bottom, ${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[1]}, ${primaryColor[4]}, ${primaryColor[4]})`,
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
        title: {
            marginTop: '0',
        },
        imgContainer: {
            position: 'relative',
            width: '100%',
            height: '100%',
        },
    })

export default compatibilityStyle
