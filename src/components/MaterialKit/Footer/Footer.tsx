import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import styles from '../../../assets/jss/material-kit-pro/components/footerStyle'

const useStyles = makeStyles(styles)

interface Props {
    theme?: 'dark' | 'white'
    big?: boolean
    content: React.ReactNode
    className?: string
}

const Footer: React.FC<Props> = props => {
    const { children, content, theme, big, className } = props
    const classes = useStyles()
    const themeType = theme === 'dark' || theme === 'white'
    const footerClasses = clsx({
        [classes.footer]: true,
        [classes[theme!]]: themeType,
        [classes.big]: big || children !== undefined,
        [className!]: className !== undefined,
    })

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                {children !== undefined ? (
                    <div>
                        <div className={classes.content}>{children}</div>
                        <hr />
                    </div>
                ) : (
                    ' '
                )}
                {content}
                <div className={classes.clearFix} />
            </div>
        </footer>
    )
}

export default Footer
