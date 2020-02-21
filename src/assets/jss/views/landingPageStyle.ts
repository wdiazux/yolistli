import { Theme, createStyles } from '@material-ui/core/styles'
import { container } from '../material-kit-pro/material-kit-pro'
import heroStyle from './landingPageSections/heroStyle'

const landingPageStyle = (theme: Theme) =>
    createStyles({
        section: {
            display: 'flex',
            position: 'relative',
            width: '100%',
            overflow: 'visible',
            padding: '40px 0',
        },
        heroSection: {
            padding: '65px 0 40px 0 !important',
        },
        container: {
            ...container,
        },
        vrBanner: {
            [theme.breakpoints.up('xl')]: {
                right: '-100px',
            },
            [theme.breakpoints.down('lg')]: {
                maxHeight: '450px',
            },
        },
        ...heroStyle,
    })

export default landingPageStyle
