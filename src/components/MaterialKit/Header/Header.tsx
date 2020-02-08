import React, { useEffect } from 'react'
import { Link } from 'gatsby'
// nodejs library that concatenates classes
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
// core components
import styles from '../../../assets/jss/material-kit-pro/components/headerStyle'

const useStyles = makeStyles(styles)

interface Props {
    color?:
        | 'primary'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'transparent'
        | 'white'
        | 'rose'
        | 'dark'
    links?: React.ReactNode
    brand?: string
    fixed?: boolean
    absolute?: boolean
    changeColorOnScroll?: {
        height: number
        color:
            | 'primary'
            | 'info'
            | 'success'
            | 'warning'
            | 'danger'
            | 'transparent'
            | 'white'
            | 'rose'
            | 'dark'
    }
}

const Header: React.FC<Props> = props => {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const classes = useStyles()
    const headerColor = props.color || 'white'

    const headerColorChange = () => {
        const { changeColorOnScroll } = props

        if (!changeColorOnScroll) return

        const windowsScrollTop = window.pageYOffset
        const header = document.body.getElementsByTagName('header')[0]

        if (windowsScrollTop > changeColorOnScroll.height) {
            header.classList.remove(classes[headerColor])
            header.classList.add(classes[changeColorOnScroll.color])
        } else {
            header.classList.add(classes[headerColor])
            header.classList.remove(classes[changeColorOnScroll.color])
        }
    }

    useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener('scroll', headerColorChange)
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener('scroll', headerColorChange)
            }
        }
    }, [headerColorChange])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    const { color, links, brand, fixed, absolute } = props
    const appBarClasses = clsx({
        [classes.appBar]: true,
        [classes[headerColor]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed,
    })
    return (
        <AppBar className={appBarClasses}>
            <Toolbar className={classes.container}>
                <Button className={classes.title}>
                    <Link to="/">{brand}</Link>
                </Button>
                <Hidden smDown implementation="css">
                    <div className={classes.collapse}>{links}</div>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}>
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={'right'}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    onClose={handleDrawerToggle}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.closeButtonDrawer}>
                        <Close />
                    </IconButton>
                    <div className={classes.appResponsive}>{links}</div>
                </Drawer>
            </Hidden>
        </AppBar>
    )
}

export default Header
