import { createStyles } from '@material-ui/core/styles'
import { container } from '../../material-kit-pro/material-kit-pro'

const designStyle = () =>
    createStyles({
        container: {
            ...container,
        },
        sectionTitle: {
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 50px auto',
        },
        vrImage: {
            maxHeight: 690,
        },
        designImg: {
            padding: 0,
        },
        designImages: {
            margin: '0',
            width: '100%',
        },
    })

export default designStyle
