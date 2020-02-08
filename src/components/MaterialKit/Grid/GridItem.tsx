import React from 'react'
// @material-ui/core components
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = () =>
    createStyles({
        grid: {
            position: 'relative',
            width: '100%',
            minHeight: '1px',
            paddingRight: '15px',
            paddingLeft: '15px',
            /* flexBasis: "auto" */
        },
    })

const useStyles = makeStyles(styles)

interface Props {
    children?: React.ReactNode
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [rest: string]: any
}

const GridItem: React.FC<Props> = props => {
    const { children, className, ...rest } = props
    const classes = useStyles()
    return (
        <Grid item {...rest} className={classes.grid + ' ' + className}>
            {children}
        </Grid>
    )
}

export default GridItem
