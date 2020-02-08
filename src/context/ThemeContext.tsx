/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

const defaultValue = {
    menuOpen: false,
    toggleDrawer: () => {},
    closeDrawer: () => {},
    openDrawer: () => {},
}
const ThemeContext = createContext(defaultValue)

const ThemeProvider: React.FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleDrawerClose = () => {
        setMenuOpen(false)
    }

    const handleDrawerOpen = () => {
        setMenuOpen(true)
    }

    const handleDrawerToggle = () => {
        const isMenuOpen = !menuOpen
        setMenuOpen(isMenuOpen)
    }
    const contextValues = {
        menuOpen: menuOpen,
        toggleDrawer: handleDrawerToggle,
        closeDrawer: handleDrawerClose,
        openDrawer: handleDrawerOpen,
    }

    return (
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }
