import { createStyles } from '@material-ui/core/styles'

const cardStyle = () =>
    createStyles({
        inputFile: {
            opacity: 0,
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: -1,
        },
        inputFileWrapper: {
            '& button svg': {
                color: 'inherit',
            },
        },
    })

export default cardStyle
