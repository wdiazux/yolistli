import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from '../../../assets/jss/material-kit-pro/components/paginationStyle'

const useStyles = makeStyles(styles)

interface Props {
    pages: [
        {
            active?: boolean
            disabled?: boolean
            text: number | string
            onClick?: () => {}
        }
    ]
    color: 'primary' | 'info' | 'success' | 'warning' | 'danger'
    className: string
}

const Pagination: React.FC<Props> = props => {
    const { pages, color, className } = props
    const classes = useStyles()
    const paginationClasses = clsx(classes.pagination, className)
    const linkColor = color || 'primary'
    return (
        <ul className={paginationClasses}>
            {pages.map((prop, key) => {
                const paginationLink = clsx({
                    [classes.paginationLink]: true,
                    [classes[linkColor]]: prop.active,
                    [classes.disabled]: prop.disabled,
                })
                return (
                    <li className={classes.paginationItem} key={key}>
                        {prop.onClick !== undefined ? (
                            <Button
                                onClick={prop.onClick}
                                className={paginationLink}
                                disabled={prop.disabled}>
                                {prop.text}
                            </Button>
                        ) : (
                            <Button
                                onClick={() =>
                                    alert("you've clicked " + prop.text)
                                }
                                className={paginationLink}
                                disabled={prop.disabled}>
                                {prop.text}
                            </Button>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default Pagination
