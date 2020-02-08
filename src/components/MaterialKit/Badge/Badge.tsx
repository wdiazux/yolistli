import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import styles from '../../../assets/jss/material-kit-pro/components/badgeStyle'

const useStyles = makeStyles(styles)

interface Props {
    color:
        | 'primary'
        | 'warning'
        | 'danger'
        | 'success'
        | 'info'
        | 'rose'
        | 'gray'
    className: string
    children: React.ReactNode
}

const Badge: React.FC<Props> = props => {
    const { color, children, className } = props
    const classes = useStyles()
    const badgeColor = color || 'gray'
    const badgeClasses = clsx({
        [classes.badge]: true,
        [badgeColor]: true,
        [className]: className !== undefined,
    })
    return <span className={badgeClasses}>{children}</span>
}

export default Badge
