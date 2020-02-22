import { createStyles } from '@material-ui/core/styles'
import footerStyle from '../../material-kit-pro/components/footerStyle'

const footerStyles = () =>
    createStyles({
        ...footerStyle(),
        footer: {
            display: 'flex',
            position: 'relative',
            padding: '3.5rem 0 2rem 0',
            textAlign: 'left',
            zIndex: 2,
            '& ul': {
                marginBottom: '0',
                padding: 0,
                listStyle: 'none',
            },
            '& hr': {
                width: '100%',
                borderColor: 'rgba(255, 255, 255,0.2)',
            },
        },
        linksVertical: {
            '& li': {
                display: 'block !important',
                marginLeft: '-5px',
                marginRight: '-5px',
                '& a': {
                    padding: '5px !important',
                },
            },
        },
        bottom: {
            display: 'block',
            width: '100%',
            textAlign: 'center',
        },
    })

export default footerStyles
