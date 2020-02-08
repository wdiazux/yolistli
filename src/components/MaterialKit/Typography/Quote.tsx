import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import styles from '../../../assets/jss/material-kit-pro/components/typographyStyle'

const useStyles = makeStyles(styles)

interface Props {
    text?: React.ReactNode
    author?: React.ReactNode
    textClassName?: string
    authorClassName?: string
}

const Quote: React.FC<Props> = props => {
    const { text, author, authorClassName, textClassName } = props
    const classes = useStyles()
    const quoteClasses = clsx(classes.defaultFontStyle, classes.quote)
    const quoteTextClasses = clsx({
        [classes.quoteText]: true,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [textClassName!]: textClassName !== undefined,
    })
    const quoteAuthorClasses = clsx({
        [classes.quoteAuthor]: true,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [authorClassName!]: authorClassName !== undefined,
    })
    return (
        <blockquote className={quoteClasses}>
            <p className={quoteTextClasses}>{text}</p>
            <small className={quoteAuthorClasses}>{author}</small>
        </blockquote>
    )
}

export default Quote
