import React from 'react'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import styles from '../../../assets/jss/material-kit-pro/components/customLinearProgressStyle'

const useStyles = makeStyles(styles)

interface Props {
    color?:
        | 'primary'
        | 'warning'
        | 'danger'
        | 'success'
        | 'info'
        | 'rose'
        | 'gray'
}

const CustomLinearProgress: React.FC<Props> = props => {
    const { color, ...rest } = props
    const classes = useStyles()
    const progressColor = color || 'gray'
    const progressBackground = `${color}Background` || 'grayBackground'
    return (
        <LinearProgress
            {...rest}
            classes={{
                root: classes.root + ' ' + classes[progressBackground],
                bar: classes.bar + ' ' + classes[progressColor!],
            }}
        />
    )
}

export default CustomLinearProgress
