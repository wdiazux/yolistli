import { Theme, createStyles } from '@material-ui/core/styles'
import {
    container,
    primaryColor,
} from '../../material-kit-pro/material-kit-pro'

const aboutStyle = (theme: Theme) =>
    createStyles({
        container: {
            ...container,
            padding: '80px 0 30px 0',
        },
        aboutTitle: {
            fontWeight: 600,
        },
        aboutImage: {
            maxHeight: '516px',
        },
        aboutFeatures: {
            marginTop: '30px',
            textAlign: 'center',
            '& h3': {
                margin: '10px 0 0 0',
                fontSize: '14px',
                fontWeight: 600,
            },
        },
        icon: {
            fontSize: '40px',
            color: primaryColor[0],
        },
        featuresBox: {
            padding: '10px 0',
            [theme.breakpoints.up('md')]: {
                padding: '25px 15px',
                boxSizing: 'border-box',
                '&:nth-child(1)': {
                    borderRight: `2px solid ${primaryColor[4]}`,
                    borderBottom: `2px solid ${primaryColor[4]}`,
                },
                '&:nth-child(2)': {
                    borderRight: `2px solid ${primaryColor[4]}`,
                    borderBottom: `2px solid ${primaryColor[4]}`,
                },
                '&:nth-child(3)': {
                    borderBottom: `2px solid ${primaryColor[4]}`,
                },
                '&:nth-child(4)': {
                    borderRight: `2px solid ${primaryColor[4]}`,
                },
                '&:nth-child(5)': {
                    borderRight: `2px solid ${primaryColor[4]}`,
                },
            },
        },
    })

export default aboutStyle
