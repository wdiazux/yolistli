import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import Gesture from '@material-ui/icons/Gesture'
import DevicesIcon from '@material-ui/icons/Devices'
import ListIcon from '@material-ui/icons/List'
// core components
import Button from '../../components/MaterialKit/CustomButtons/Button'
import navbarsStyle from '../../assets/jss/views/componentsSections/navbarStyles'

const useStyles = makeStyles(navbarsStyle)

const HeaderLinks: React.FC = () => {
    const classes = useStyles()
    const categories = [
        {
            name: 'Home',
            url: '/',
            icon: <HomeIcon />,
        },
        {
            name: 'About',
            url: '#about',
            icon: <InfoIcon />,
        },
        {
            name: 'Design',
            url: '#design',
            icon: <Gesture />,
        },
        {
            name: 'Compatibility',
            url: '#compatibility',
            icon: <DevicesIcon />,
        },
        {
            name: 'Features',
            url: '#features',
            icon: <ListIcon />,
        },
    ]

    return (
        <List className={classes.list + ' ' + classes.mlAuto}>
            {categories.map(link => (
                <ListItem key={link.name} className={classes.listItem}>
                    <Button
                        href={link.url}
                        className={classes.navLink}
                        color="transparent">
                        {link.icon}
                        {link.name}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default HeaderLinks
