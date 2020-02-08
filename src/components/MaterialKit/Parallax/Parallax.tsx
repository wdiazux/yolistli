import React from 'react'
// nodejs library that concatenates classes
import clsx from 'clsx'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import styles from '../../../assets/jss/material-kit-pro/components/parallaxStyle'

const useStyles = makeStyles(styles)

interface Props {
    className?: string
    filter?:
        | 'primary'
        | 'rose'
        | 'dark'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
    children?: React.ReactNode
    style?: object
    image?: string
    small?: boolean
}

const Parallax: React.FC<Props> = props => {
    let windowScrollTop
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3
    } else {
        windowScrollTop = 0
    }
    const [transform, setTransform] = React.useState(
        'translate3d(0,' + windowScrollTop + 'px,0)'
    )
    const resetTransform = () => {
        const windowScrollTop = window.pageYOffset / 3
        setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
    }
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener('scroll', resetTransform)
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener('scroll', resetTransform)
            }
        }
    }, [resetTransform])
    const { filter, className, children, style, image, small } = props
    const classes = useStyles()
    const parallaxColor: string = filter ? `${filter}Color` : 'primaryColor'
    const parallaxClasses = clsx({
        [classes.parallax]: true,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [classes[`${filter}Color`!]]: filter !== undefined,
        [classes.small]: small,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        [className!]: className !== undefined,
    })
    return (
        <div
            className={parallaxClasses}
            style={{
                ...style,
                backgroundImage: 'url(' + image + ')',
                transform: transform,
            }}>
            {children}
        </div>
    )
}

export default Parallax
