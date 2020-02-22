import { createMuiTheme } from '@material-ui/core'

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: `#e82041`,
        },
        background: {
            default: `#fff`,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1200,
            xl: 1300,
        },
    },
    typography: {
        h1: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.5,
            marginTop: '20px',
            marginBottom: '10px',
        },
        h3: {
            fontWeight: 600,
        },
        body1: {
            marginBottom: '10px',
        },
    },
})

export default theme
