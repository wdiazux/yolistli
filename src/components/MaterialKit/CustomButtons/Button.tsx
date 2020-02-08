import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from '../../../assets/jss/material-kit-pro/components/buttonStyle'

const useStyles = makeStyles(styles)

interface Props {
    color?:
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'rose'
        | 'white'
        | 'twitter'
        | 'facebook'
        | 'google'
        | 'linkedin'
        | 'pinterest'
        | 'youtube'
        | 'tumblr'
        | 'github'
        | 'behance'
        | 'dribbble'
        | 'reddit'
        | 'instagram'
        | 'transparent'
    round?: boolean
    children?: React.ReactNode
    fullWidth?: boolean
    disabled?: boolean
    simple?: boolean
    size?: 'sm' | 'lg'
    block?: boolean
    link?: boolean
    justIcon?: boolean
    fileButton?: boolean
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [rest: string]: any
}

const RegularButton = React.forwardRef(
    (props: Props, ref: React.Ref<HTMLButtonElement>) => {
        const {
            color,
            round,
            children,
            fullWidth,
            disabled,
            simple,
            size,
            block,
            link,
            justIcon,
            fileButton,
            className,
            ...rest
        } = props
        const classes = useStyles()
        const btnClasses = clsx({
            [classes.button]: true,
            [classes[size!]]: size,
            [classes[color!]]: color,
            [classes.round]: round,
            [classes.fullWidth]: fullWidth,
            [classes.disabled]: disabled,
            [classes.simple]: simple,
            [classes.block]: block,
            [classes.link]: link,
            [classes.justIcon]: justIcon,
            [classes.fileButton]: fileButton,
            [className!]: className,
        })
        return (
            <Button {...rest} ref={ref} className={btnClasses}>
                {children}
            </Button>
        )
    }
)

export default RegularButton
