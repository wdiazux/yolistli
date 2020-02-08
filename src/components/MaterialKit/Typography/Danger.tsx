import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import styles from '../../../assets/jss/material-kit-pro/components/typographyStyle'

const useStyles = makeStyles(styles)

const Danger: React.FC = props => {
    const { children } = props
    const classes = useStyles()
    return (
        <div className={classes.defaultFontStyle + ' ' + classes.dangerText}>
            {children}
        </div>
    )
}

export default Danger
