import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

import styles from '../../../assets/jss/material-kit-pro/components/infoStyle'

const useStyles = makeStyles(styles)

interface Props {
    icon: React.ElementType | string
    title: string
    description: React.ReactNode
    iconColor?:
        | 'primary'
        | 'warning'
        | 'danger'
        | 'success'
        | 'info'
        | 'rose'
        | 'gray'
    vertical?: boolean
    className?: string
}

const InfoArea: React.FC<Props> = props => {
    const { title, description, iconColor, vertical, className } = props
    const classes = useStyles()
    const colorIcon = iconColor || 'gray'
    const iconWrapper = clsx({
        [classes.iconWrapper]: true,
        [classes[colorIcon]]: true,
        [classes.iconWrapperVertical]: vertical,
    })
    const iconClasses = clsx({
        [classes.icon]: true,
        [classes.iconVertical]: vertical,
    })
    const infoAreaClasses = clsx({
        [classes.infoArea]: true,
        [className!]: className !== undefined,
    })
    let icon = null
    switch (typeof props.icon) {
        case 'string':
            icon = <Icon className={iconClasses}>{props.icon}</Icon>
            break
        default:
            icon = <props.icon className={iconClasses} />
            break
    }
    return (
        <div className={infoAreaClasses}>
            <div className={iconWrapper}>{icon}</div>
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <div className={classes.description}>{description}</div>
            </div>
        </div>
    )
}

export default InfoArea
