import React from 'react'
import clsx from 'clsx'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'

import styles from '../../../assets/jss/material-kit-pro/components/instructionStyle'

const useStyles = makeStyles(styles)

interface Props {
    title: React.ReactNode
    text: React.ReactNode
    image: string
    imageAlt?: string
    className: string
    imageClassName: string
}

const Instruction: React.FC<Props> = props => {
    const { title, text, image, className, imageClassName, imageAlt } = props
    const classes = useStyles()
    const instructionClasses = clsx({
        [classes.instruction]: true,
        [className]: className !== undefined,
    })
    const pictureClasses = clsx({
        [classes.picture]: true,
        [imageClassName]: imageClassName !== undefined,
    })
    const alt = imageAlt || '...'
    return (
        <div className={instructionClasses}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <div className={pictureClasses}>
                        <img src={image} alt={alt} className={classes.image} />
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}

export default Instruction
