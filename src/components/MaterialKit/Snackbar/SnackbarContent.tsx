import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Snack from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components

import styles from '../../../assets/jss/material-kit-pro/components/snackbarContentStyle'

const useStyles = makeStyles(styles)

interface Props {
    message: React.ReactNode
    color?: 'info' | 'success' | 'warning' | 'danger' | 'primary'
    close?: boolean
    icon?: React.ElementType | string | {}
}

const SnackbarContent: React.FC<Props> = props => {
    const { message, color, close, icon } = props
    const classes = useStyles()
    let action: React.ReactElement[]
    const closeAlert = () => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        setAlert(null)
    }
    if (close !== undefined) {
        action = [
            <IconButton
                className={classes.iconButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={closeAlert}>
                <Close className={classes.close} />
            </IconButton>,
        ]
    }
    let snackIcon = null
    switch (typeof icon) {
        case 'object':
            snackIcon = <props.icon className={classes.icon} />
            break
        case 'string':
            snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>
            break
        default:
            snackIcon = null
            break
    }
    const [alert, setAlert] = React.useState(
        <Snack
            message={
                <div>
                    {snackIcon}
                    {message}
                    {close !== undefined ? action : null}
                </div>
            }
            classes={{
                root: classes.root + ' ' + classes[color],
                message: classes.message + ' ' + classes.container,
            }}
        />
    )
    return alert
}

export default SnackbarContent
