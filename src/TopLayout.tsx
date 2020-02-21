import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/jss/theme'

const TopLayout: React.FC = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )
}

export default TopLayout
