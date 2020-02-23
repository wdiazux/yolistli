import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/jss/theme'
import { GlobalProvider } from './context/GlobalContext'

const TopLayout: React.FC = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalProvider>
                    <CssBaseline />
                    {children}
                </GlobalProvider>
            </ThemeProvider>
        </>
    )
}

export default TopLayout
