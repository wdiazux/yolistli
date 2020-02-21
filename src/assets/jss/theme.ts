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
})

export default theme
