import React from 'react'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
    grid: {
        marginRight: '-15px',
        marginLeft: '-15px',
        width: 'auto',
    },
}

const useStyles = makeStyles(styles)

interface Props {
    children?: React.ReactNode
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [rest: string]: any
}

const GridContainer: React.FC<Props> = props => {
    const { children, className, ...rest } = props
    const classes = useStyles()
    return (
        <Grid container {...rest} className={classes.grid + ' ' + className}>
            {children}
        </Grid>
    )
}

export default GridContainer
