import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import styles from '../../../assets/jss/material-kit-pro/components/mediaStyle'

const useStyles = makeStyles(styles)

interface Props {
    avatarLink?: string
    avatar?: string
    avatarAlt?: string
    title?: React.ReactNode
    body?: React.ReactNode
    footer?: React.ReactNode
    innerMedias: Array<object>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [rest: string]: any
}

const Media: React.FC<Props> = props => {
    const {
        avatarLink,
        avatar,
        avatarAlt,
        title,
        body,
        footer,
        innerMedias,
        ...rest
    } = props
    const classes = useStyles()
    const link = avatarLink || '#foo'
    const imgAlt = avatarAlt || '...'
    return (
        <div {...rest} className={classes.media}>
            <a href={link} className={classes.mediaLink}>
                <div className={classes.mediaAvatar}>
                    <img src={avatar} alt={imgAlt} />
                </div>
            </a>
            <div className={classes.mediaBody}>
                {title !== undefined ? (
                    <h4 className={classes.mediaHeading}>{title}</h4>
                ) : null}
                {body}
                <div className={classes.mediaFooter}>{footer}</div>
                {innerMedias !== undefined
                    ? innerMedias.map(prop => {
                          return prop
                      })
                    : null}
            </div>
        </div>
    )
}

export default Media
